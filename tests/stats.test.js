import assert from 'node:assert/strict'
import test from 'node:test'

import {buildCountRequests, getPeriodKeys, getUpdatedAtIso, getUtcPeriodKeys, loadStats, STATS_REFRESH_INTERVAL_MS} from '../src/assets/stats.js'
import renderStatsPage from '../src/_lib/stats-page.js'

const response = (payload, status = 200) => ({
    ok:     status >= 200 && status < 300,
    status,
    json:   async () => payload,
})

const counter = (visits, journeys, draft, hq) => ({
    visits,
    journeys,
    videos: {draft, hq},
})

test('builds current and historical count requests in the viewer time zone', () => {
    const now = new Date('2026-07-29T12:34:56.000Z')
    const requests = buildCountRequests('https://api.lgs1920.fr/', now, 'Europe/Paris')

    assert.deepEqual(getUtcPeriodKeys(now), {
        daily:   '29-07-2026',
        weekly:  '2026-W31',
        monthly: '07-26',
        yearly:  '2026',
    })
    assert.deepEqual(getPeriodKeys('2026-07-29T22:30:00.000Z', 'America/Montreal'), {
        daily:   '29-07-2026',
        weekly:  '2026-W31',
        monthly: '07-26',
        yearly:  '2026',
    })
    assert.equal(requests.total, 'https://api.lgs1920.fr/count?timeZone=Europe%2FParis')
    assert.equal(requests.today, 'https://api.lgs1920.fr/count/daily?timeZone=Europe%2FParis')
    assert.equal(requests.yesterday, 'https://api.lgs1920.fr/count/daily/28-07-2026?timeZone=Europe%2FParis')
    assert.equal(requests.thisWeek, 'https://api.lgs1920.fr/count/weekly?timeZone=Europe%2FParis')
    assert.equal(requests.thisMonth, 'https://api.lgs1920.fr/count/monthly?timeZone=Europe%2FParis')
    assert.equal(requests.previousMonth, 'https://api.lgs1920.fr/count/monthly/06-26?timeZone=Europe%2FParis')
    assert.equal(requests.thisYear, 'https://api.lgs1920.fr/count/yearly?timeZone=Europe%2FParis')
})

test('loads total and current or historical rows without recalculating counters', async () => {
    const now = new Date('2026-07-29T12:34:56.000Z')
    const requests = buildCountRequests('https://api.lgs1920.fr', now, 'Europe/Paris')
    const payloads = new Map([
        [requests.total, {updatedAt:'2026-07-29T12:30:00.000Z', total:counter(120, 40, 8, 3)}],
        [requests.today, counter(5, 2, 1, 0)],
        [requests.yesterday, counter(4, 1, 0, 1)],
        [requests.thisWeek, counter(20, 7, 3, 2)],
        [requests.thisMonth, counter(70, 22, 6, 2)],
        [requests.previousMonth, counter(60, 18, 4, 1)],
        [requests.thisYear, counter(120, 40, 8, 3)],
    ])
    const seenUrls = []
    const fetchImpl = async (url) => {
        seenUrls.push(url)
        return response(payloads.get(url))
    }

    const result = await loadStats({apiUrl:'https://api.lgs1920.fr', fetchImpl, now, timeZone:'Europe/Paris'})

    assert.deepEqual(result.failed, [])
    assert.deepEqual(result.rows.total, {visits:120, journeys:40, videoDraft:8, videoHq:3})
    assert.deepEqual(result.rows.yesterday, {visits:4, journeys:1, videoDraft:0, videoHq:1})
    assert.deepEqual(result.rows['previous-month'], {visits:60, journeys:18, videoDraft:4, videoHq:1})
    assert.equal(seenUrls.length, 7)
    assert.equal(result.updatedAt, '2026-07-29T12:30:00.000Z')
})

test('keeps failed API rows unavailable while preserving successful rows', async () => {
    const now = new Date('2026-07-29T12:34:56.000Z')
    const requests = buildCountRequests('https://api.lgs1920.fr', now, 'Europe/Paris')
    const fetchImpl = async (url) => {
        if (url === requests.total) {
            return response({total:counter(10, 2, 1, 0)})
        }
        if (url === requests.today) {
            return response(counter(3, 1, 1, 0))
        }
        return response({success:false, error:'temporary'}, 503)
    }

    const result = await loadStats({apiUrl:'https://api.lgs1920.fr', fetchImpl, now, timeZone:'Europe/Paris'})

    assert.deepEqual(result.rows.total, {visits:10, journeys:2, videoDraft:1, videoHq:0})
    assert.deepEqual(result.rows.today, {visits:3, journeys:1, videoDraft:1, videoHq:0})
    assert.equal(result.rows.yesterday, null)
    assert.equal(result.rows['this-week'], null)
    assert.equal(result.failed.length, 5)
})

test('renders an accessible localized stats table shell', () => {
    const html = renderStatsPage({
        locale:      'fr',
        apiUrl:      'https://api.lgs1920.fr',
        kicker:      'Statistiques',
        sectionTitle:'Compteurs d’utilisation',
        intro:       'Résumé des compteurs.',
    })

    assert.match(html, /data-stats-page/)
    assert.match(html, /data-stats-api-url="https:\/\/api\.lgs1920\.fr"/)
    assert.match(html, /<caption>Compteurs d’utilisation de LGS1920 Studio selon la période locale du visiteur<\/caption>/)
    assert.match(html, /<th scope="col">Visites<\/th>/)
    assert.match(html, /<th scope="row">Aujourd’hui<\/th>/)
    assert.match(html, /data-stats-cell="video-draft"/)
    assert.match(html, /data-stats-cell="video-hq"/)
    assert.match(html, /data-stats-refresh/)
    assert.match(html, /class="stats-meta"/)
    assert.match(html, /<wa-callout class="stats-status" data-stats-status role="status" aria-live="polite" variant="warning" appearance="filled-outlined">/)
    assert.match(html, /slot="icon" variant="regular" name="spinner" data-stats-status-icon/)
    assert.match(html, /data-stats-status-message>Chargement des compteurs…/)
    assert.match(html, /<span data-stats-updated-label>Dernière mise à jour :<\/span>/)
    assert.match(html, /<wa-format-date data-stats-updated-date lang="fr" year="numeric" month="short" day="numeric" hour="numeric" minute="numeric" hour-format="auto"><\/wa-format-date>/)
    assert.match(html, /name="arrows-rotate"/)
    assert.match(html, /Actualiser/)
})

test('refreshes stats every minute', () => {
    assert.equal(STATS_REFRESH_INTERVAL_MS, 60 * 1000)
})

test('uses the fallback date when the backend update is missing', () => {
    const fallbackDate = new Date('2026-07-29T12:30:00.000Z')

    assert.equal(getUpdatedAtIso(null, fallbackDate), fallbackDate.toISOString())
    assert.equal(getUpdatedAtIso(undefined, fallbackDate), fallbackDate.toISOString())
    assert.equal(getUpdatedAtIso('not-a-date', fallbackDate), fallbackDate.toISOString())
    assert.equal(getUpdatedAtIso('2026-07-29T12:30:00.000Z', fallbackDate), '2026-07-29T12:30:00.000Z')
})
