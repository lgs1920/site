const DAY_MS = 24 * 60 * 60 * 1000
export const STATS_REFRESH_INTERVAL_MS = 60 * 1000

const statKeys = {
    visits:     'visits',
    journeys:   'journeys',
    videoDraft: 'video-draft',
    videoHq:    'video-hq',
}

const clientLabels = {
    en: {
        loading:     'Loading counters…',
        loaded:      'Counters loaded.',
        partial:     'Some counters are temporarily unavailable.',
        failed:      'Counters could not be loaded right now.',
        refreshing:  'Refreshing counters…',
        updated:     'Last backend update',
        refresh:     'Refresh',
        unavailable: 'Unavailable',
    },
    fr: {
        loading:     'Chargement des compteurs…',
        loaded:      'Compteurs chargés.',
        partial:     'Certains compteurs sont temporairement indisponibles.',
        failed:      'Les compteurs ne peuvent pas être chargés pour le moment.',
        refreshing:  'Actualisation des compteurs…',
        updated:     'Dernière mise à jour du backend',
        refresh:     'Actualiser',
        unavailable: 'Indisponible',
    },
}

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

const pad = (value, length) => `${value}`.padStart(length, '0')

const getIsoWeek = (date) => {
    const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
    const day = utcDate.getUTCDay() || 7
    utcDate.setUTCDate(utcDate.getUTCDate() + 4 - day)
    const year = utcDate.getUTCFullYear()
    const firstThursday = new Date(Date.UTC(year, 0, 4))
    const week = 1 + Math.round((utcDate.getTime() - firstThursday.getTime()) / DAY_MS / 7)

    return {year, week}
}

export const getUtcPeriodKeys = (value = new Date()) => {
    const date = value instanceof Date ? new Date(value.getTime()) : new Date(value)
    const isoWeek = getIsoWeek(date)

    return {
        daily:   `${pad(date.getUTCDate(), 2)}-${pad(date.getUTCMonth() + 1, 2)}-${date.getUTCFullYear()}`,
        weekly:  `${isoWeek.year}-W${pad(isoWeek.week, 2)}`,
        monthly: `${pad(date.getUTCMonth() + 1, 2)}-${pad(date.getUTCFullYear() % 100, 2)}`,
        yearly:  `${date.getUTCFullYear()}`,
    }
}

const getPreviousDate = (value) => {
    const date = new Date(value.getTime())
    date.setUTCDate(date.getUTCDate() - 1)
    return date
}

const getPreviousMonth = (value) => new Date(Date.UTC(value.getUTCFullYear(), value.getUTCMonth() - 1, 1))

const createCountUrl = (apiUrl, suffix = '') => {
    const baseUrl = String(apiUrl || '').replace(/\/+$/, '')
    return `${baseUrl}/count${suffix}`
}

export const buildCountRequests = (apiUrl, now = new Date()) => {
    const date = now instanceof Date ? new Date(now.getTime()) : new Date(now)
    const previousDateKeys = getUtcPeriodKeys(getPreviousDate(date))
    const previousMonthKeys = getUtcPeriodKeys(getPreviousMonth(date))

    return {
        total:          createCountUrl(apiUrl),
        today:          createCountUrl(apiUrl, '/daily'),
        yesterday:      createCountUrl(apiUrl, `/daily/${previousDateKeys.daily}`),
        thisWeek:       createCountUrl(apiUrl, '/weekly'),
        thisMonth:      createCountUrl(apiUrl, '/monthly'),
        previousMonth:  createCountUrl(apiUrl, `/monthly/${previousMonthKeys.monthly}`),
        thisYear:       createCountUrl(apiUrl, '/yearly'),
    }
}

const normalizeCount = (value) => Number.isSafeInteger(value) && value >= 0 ? value : 0

export const normalizeCounterRow = (value) => {
    if (!isObject(value)) {
        return null
    }

    const videos = isObject(value.videos) ? value.videos : {}

    return {
        visits:     normalizeCount(value.visits),
        journeys:   normalizeCount(value.journeys),
        videoDraft: normalizeCount(videos.draft),
        videoHq:    normalizeCount(videos.hq),
    }
}

const fetchJson = async (url, fetchImpl = globalThis.fetch) => {
    if (typeof fetchImpl !== 'function') {
        throw new Error('Fetch is unavailable')
    }

    const response = await fetchImpl(url, {
        cache:   'no-store',
        headers: {
            Accept: 'application/json',
        },
    })

    if (!response?.ok) {
        throw new Error(`Count API returned ${response?.status || 'an error'}`)
    }

    const payload = await response.json()
    if (!isObject(payload) || payload.success === false) {
        throw new Error('Count API returned an invalid response')
    }

    return payload
}

export const loadStats = async ({apiUrl, fetchImpl = globalThis.fetch, now = new Date()} = {}) => {
    const requests = buildCountRequests(apiUrl, now)
    const requestEntries = Object.entries(requests)
    const results = await Promise.all(requestEntries.map(async ([key, url]) => {
        try {
            return [key, {value: await fetchJson(url, fetchImpl), error: null}]
        }
        catch (error) {
            return [key, {value: null, error}]
        }
    }))
    const responses = Object.fromEntries(results)
    const rows = {
        total:         normalizeCounterRow(responses.total.value?.total),
        today:         normalizeCounterRow(responses.today.value),
        yesterday:     normalizeCounterRow(responses.yesterday.value),
        'this-week':   normalizeCounterRow(responses.thisWeek.value),
        'this-month':  normalizeCounterRow(responses.thisMonth.value),
        'previous-month': normalizeCounterRow(responses.previousMonth.value),
        'this-year':   normalizeCounterRow(responses.thisYear.value),
    }
    const failed = requestEntries
        .filter(([key]) => responses[key].error)
        .map(([key]) => key)

    return {
        rows,
        failed,
        updatedAt: responses.total.value?.updatedAt ?? null,
    }
}

const getLabels = (locale) => clientLabels[locale] ?? clientLabels.en

const getFormatter = (locale) => new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-GB')

export const formatUpdatedAt = (value, locale, fallbackValue = new Date()) => {
    const receivedDate = value ? new Date(value) : null
    const fallbackDate = new Date(fallbackValue)
    const date = receivedDate && Number.isFinite(receivedDate.getTime()) ? receivedDate : fallbackDate
    if (!Number.isFinite(date.getTime())) {
        return null
    }

    return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone:   'UTC',
    }).format(date)
}

const setStatus = (page, text, state) => {
    const status = page.querySelector('[data-stats-status]')
    if (status) {
        status.textContent = text
    }
    page.dataset.statsState = state
}

const renderRows = (page, rows, locale) => {
    const formatter = getFormatter(locale)

    page.querySelectorAll('[data-stats-row]').forEach((row) => {
        const values = rows[row.dataset.statsRow]
        row.dataset.statsState = values ? 'loaded' : 'unavailable'

        row.querySelectorAll('[data-stats-cell]').forEach((cell) => {
            const valueKey = Object.entries(statKeys).find(([, cellKey]) => cellKey === cell.dataset.statsCell)?.[0]
            const value = values?.[valueKey]
            cell.textContent = values ? formatter.format(value) : '—'

            if (!values) {
                cell.setAttribute('aria-label', getLabels(locale).unavailable)
            }
            else {
                cell.removeAttribute('aria-label')
            }
        })
    })
}

const renderUpdatedAt = (page, updatedAt, locale) => {
    const target = page.querySelector('[data-stats-updated]')
    const formatted = formatUpdatedAt(updatedAt, locale)
    if (!target || !formatted) {
        return
    }

    target.hidden = false
    target.textContent = `${getLabels(locale).updated}: ${formatted} UTC`
}

const refreshButtonState = (page, locale, isRefreshing) => {
    const button = page.querySelector('[data-stats-refresh]')
    const label = page.querySelector('[data-stats-refresh-label]')
    if (button) {
        button.disabled = isRefreshing
        button.setAttribute('aria-busy', `${isRefreshing}`)
    }
    if (label) {
        const pageLabels = getLabels(locale)
        label.textContent = isRefreshing ? pageLabels.refreshing : pageLabels.refresh
    }
}

const activeRefreshes = new WeakMap()

export const refreshStatsPage = (page) => {
    if (!page) {
        return null
    }

    const activeRefresh = activeRefreshes.get(page)
    if (activeRefresh) {
        return activeRefresh
    }

    const locale = page.dataset.locale ?? 'en'
    const pageLabels = getLabels(locale)

    const refresh = (async () => {
        page.setAttribute('aria-busy', 'true')
        refreshButtonState(page, locale, true)
        setStatus(page, pageLabels.refreshing, 'loading')

        try {
            const result = await loadStats({
                apiUrl: page.dataset.statsApiUrl,
            })
            const failedCount = result.failed.length
            const state = failedCount === 0 ? 'loaded' : failedCount === 7 ? 'error' : 'partial'
            const statusText = state === 'error' ? pageLabels.failed : pageLabels[state]

            renderRows(page, result.rows, locale)
            renderUpdatedAt(page, result.updatedAt, locale)
            setStatus(page, statusText, state)

            return result
        }
        catch {
            renderRows(page, {}, locale)
            renderUpdatedAt(page, null, locale)
            setStatus(page, pageLabels.failed, 'error')
            return null
        }
        finally {
            refreshButtonState(page, locale, false)
            page.removeAttribute('aria-busy')
        }
    })()

    activeRefreshes.set(page, refresh)
    refresh.then(
        () => activeRefreshes.delete(page),
        () => activeRefreshes.delete(page),
    )
    return refresh
}

export const initStatsPage = (page) => {
    if (!page) {
        return null
    }

    const refreshButton = page.querySelector('[data-stats-refresh]')
    refreshButton?.addEventListener('click', () => refreshStatsPage(page))

    if (typeof window !== 'undefined') {
        window.setInterval(() => refreshStatsPage(page), STATS_REFRESH_INTERVAL_MS)
    }

    return refreshStatsPage(page)
}

const statsPage = typeof document !== 'undefined'
    ? document.querySelector('[data-stats-page]')
    : null

if (statsPage) {
    initStatsPage(statsPage)
}
