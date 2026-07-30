import {getStatsLabels} from '../_data/stats-labels.js'

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const statColumns = [
    {key:'visits', labelKey:'visits'},
    {key:'journeys', labelKey:'journeys'},
    {key:'video-draft', labelKey:'videoDraft'},
    {key:'video-hq', labelKey:'videoHq'},
]

const statRows = [
    {key:'total', labelKey:'total'},
    {key:'today', labelKey:'today'},
    {key:'yesterday', labelKey:'yesterday'},
    {key:'this-week', labelKey:'thisWeek'},
    {key:'this-month', labelKey:'thisMonth'},
    {key:'previous-month', labelKey:'previousMonth'},
    {key:'this-year', labelKey:'thisYear'},
]

export const renderStatsPage = ({
    locale = 'en',
    apiUrl = '',
    kicker,
    sectionTitle,
    intro,
} = {}) => {
    const pageLabels = getStatsLabels(locale)

    return `<section id="stats-table" class="content-section stats-content" data-stats-page data-locale="${escapeHtml(locale)}" data-stats-api-url="${escapeHtml(apiUrl)}">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(kicker)}</p>
        <h2>${escapeHtml(sectionTitle)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(intro)}</p>

    <wa-callout class="stats-status" data-stats-status role="status" aria-live="polite" variant="warning" appearance="filled-outlined">
        <wa-icon slot="icon" variant="regular" name="spinner" data-stats-status-icon aria-hidden="true"></wa-icon>
        <span data-stats-status-message>${escapeHtml(pageLabels.loading)}</span>
    </wa-callout>

    <div class="stats-table-wrap">
        <table id="stats-table-data" class="stats-table" data-stats-table aria-describedby="stats-description">
            <caption>${escapeHtml(pageLabels.tableCaption)}</caption>
            <thead>
                <tr>
                    <th scope="col">${escapeHtml(pageLabels.period)}</th>
                    ${statColumns.map((column) => `<th scope="col">${escapeHtml(pageLabels[column.labelKey])}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${statRows.map((row) => `<tr data-stats-row="${row.key}">
                    <th scope="row">${escapeHtml(pageLabels[row.labelKey])}</th>
                    ${statColumns.map((column) => `<td data-stats-cell="${column.key}">—</td>`).join('')}
                </tr>`).join('')}
            </tbody>
        </table>
    </div>

    <div class="stats-meta">
        <p id="stats-description" class="stats-updated" data-stats-updated hidden>
            <span data-stats-updated-label>${escapeHtml(pageLabels.updated)}</span>
            <wa-format-date data-stats-updated-date lang="${escapeHtml(locale)}" year="numeric" month="short" day="numeric" hour="numeric" minute="numeric" hour-format="auto"></wa-format-date>
        </p>
        <wa-button type="button" appearance="outlined" variant="brand" size="small" data-stats-refresh aria-controls="stats-table-data">
            <wa-icon slot="start" variant="regular" name="arrows-rotate" aria-hidden="true"></wa-icon>
            <span data-stats-refresh-label>${escapeHtml(pageLabels.refresh)}</span>
        </wa-button>
    </div>
</section>`
}

export {getStatsLabels, statColumns, statRows}

export default renderStatsPage
