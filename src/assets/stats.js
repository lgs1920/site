import {getStatsLabels} from '../_data/stats-labels.js'

const DAY_MS = 24 * 60 * 60 * 1000
export const STATS_REFRESH_INTERVAL_MS = 60 * 1000

const statKeys = {
    visits:     'visits',
    journeys:   'journeys',
    videoDraft: 'video-draft',
    videoHq:    'video-hq',
}

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

const pad = (value, length) => `${value}`.padStart(length, '0')

/**
 * Resolve the browser's IANA time zone for statistics calendar periods.
 *
 * @returns {string} Browser time zone, or UTC when it is unavailable.
 */
export const getClientTimeZone = () => {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    }
    catch {
        return 'UTC'
    }
}

const getCalendarParts = (value, timeZone) => {
    const date = value instanceof Date ? new Date(value.getTime()) : new Date(value)
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone,
        year:     'numeric',
        month:    '2-digit',
        day:      '2-digit',
    }).formatToParts(date)
    const values = Object.fromEntries(parts.filter(part => part.type !== 'literal').map(part => [part.type, Number(part.value)]))

    return {
        year:  values.year,
        month: values.month,
        day:   values.day,
    }
}

const getIsoWeek = ({year, month, day}) => {
    const utcDate = new Date(Date.UTC(year, month - 1, day))
    const isoDay = utcDate.getUTCDay() || 7
    utcDate.setUTCDate(utcDate.getUTCDate() + 4 - isoDay)
    const weekYear = utcDate.getUTCFullYear()
    const firstThursday = new Date(Date.UTC(weekYear, 0, 4))
    const week = 1 + Math.round((utcDate.getTime() - firstThursday.getTime()) / DAY_MS / 7)

    return {year: weekYear, week}
}

const getPeriodKeysFromParts = (parts) => {
    const isoWeek = getIsoWeek(parts)

    return {
        daily:   `${pad(parts.day, 2)}-${pad(parts.month, 2)}-${parts.year}`,
        weekly:  `${isoWeek.year}-W${pad(isoWeek.week, 2)}`,
        monthly: `${pad(parts.month, 2)}-${pad(parts.year % 100, 2)}`,
        yearly:  `${parts.year}`,
    }
}

export const getPeriodKeys = (value = new Date(), timeZone = getClientTimeZone()) => {
    return getPeriodKeysFromParts(getCalendarParts(value, timeZone))
}

export const getUtcPeriodKeys = (value = new Date()) => getPeriodKeys(value, 'UTC')

const shiftCalendarDate = (parts, dayDelta) => {
    const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day))
    date.setUTCDate(date.getUTCDate() + dayDelta)
    return {
        year:  date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day:   date.getUTCDate(),
    }
}

const getPreviousMonth = (parts) => ({
    year:  parts.month === 1 ? parts.year - 1 : parts.year,
    month: parts.month === 1 ? 12 : parts.month - 1,
    day:   1,
})

const createCountUrl = (apiUrl, suffix = '', timeZone = 'UTC') => {
    const baseUrl = String(apiUrl || '').replace(/\/+$/, '')
    return `${baseUrl}/count${suffix}?timeZone=${encodeURIComponent(timeZone)}`
}

export const buildCountRequests = (apiUrl, now = new Date(), timeZone = getClientTimeZone()) => {
    const calendarParts = getCalendarParts(now, timeZone)
    const previousDateKeys = getPeriodKeysFromParts(shiftCalendarDate(calendarParts, -1))
    const previousMonthKeys = getPeriodKeysFromParts(getPreviousMonth(calendarParts))

    return {
        total:          createCountUrl(apiUrl, '', timeZone),
        today:          createCountUrl(apiUrl, '/daily', timeZone),
        yesterday:      createCountUrl(apiUrl, `/daily/${previousDateKeys.daily}`, timeZone),
        thisWeek:       createCountUrl(apiUrl, '/weekly', timeZone),
        thisMonth:      createCountUrl(apiUrl, '/monthly', timeZone),
        previousMonth:  createCountUrl(apiUrl, `/monthly/${previousMonthKeys.monthly}`, timeZone),
        thisYear:       createCountUrl(apiUrl, '/yearly', timeZone),
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

export const loadStats = async ({apiUrl, fetchImpl = globalThis.fetch, now = new Date(), timeZone = getClientTimeZone()} = {}) => {
    const requests = buildCountRequests(apiUrl, now, timeZone)
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

const statusPresentation = {
    loading: {variant: 'warning', icon: 'spinner'},
    loaded:  {variant: 'success', icon: 'circle-check'},
    partial: {variant: 'warning', icon: 'triangle-exclamation'},
    error:   {variant: 'danger', icon: 'circle-exclamation'},
}

const getFormatter = (locale) => new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-GB')

export const getUpdatedAtIso = (value, fallbackValue = new Date()) => {
    const receivedDate = value ? new Date(value) : null
    const fallbackDate = new Date(fallbackValue)
    const date = receivedDate && Number.isFinite(receivedDate.getTime()) ? receivedDate : fallbackDate
    if (!Number.isFinite(date.getTime())) {
        return null
    }

    return date.toISOString()
}

const setStatus = (page, text, state) => {
    const status = page.querySelector('[data-stats-status]')
    if (status) {
        const presentation = statusPresentation[state] ?? {variant: 'neutral', icon: 'circle-info'}
        const message = status.querySelector('[data-stats-status-message]')
        const icon = status.querySelector('[data-stats-status-icon]')

        status.setAttribute('variant', presentation.variant)
        message ? message.textContent = text : status.textContent = text
        icon?.setAttribute('name', presentation.icon)
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
                cell.setAttribute('aria-label', getStatsLabels(locale).unavailable)
            }
            else {
                cell.removeAttribute('aria-label')
            }
        })
    })
}

const renderUpdatedAt = (page, updatedAt) => {
    const target = page.querySelector('[data-stats-updated]')
    const date = target?.querySelector('[data-stats-updated-date]')
    const isoDate = getUpdatedAtIso(updatedAt)
    if (!target || !date || !isoDate) {
        return
    }

    target.hidden = false
    date.setAttribute('date', isoDate)
}

const refreshButtonState = (page, locale, isRefreshing) => {
    const button = page.querySelector('[data-stats-refresh]')
    const label = page.querySelector('[data-stats-refresh-label]')
    if (button) {
        button.disabled = isRefreshing
        button.setAttribute('aria-busy', `${isRefreshing}`)
    }
    if (label) {
        const pageLabels = getStatsLabels(locale)
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
    const pageLabels = getStatsLabels(locale)

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
            renderUpdatedAt(page, result.updatedAt)
            setStatus(page, statusText, state)

            return result
        }
        catch {
            renderRows(page, {}, locale)
            renderUpdatedAt(page, null)
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
