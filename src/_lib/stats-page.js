const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const labels = {
    en: {
        sectionTitle: 'Usage counters',
        intro:        'Each value is an accepted event count, not a unique visitor count. Video exports remain separated between draft and high-quality output.',
        tableCaption: 'LGS1920 Studio usage counters by UTC period',
        period:       'Period',
        visits:       'Visits',
        journeys:     'Journeys',
        videoDraft:   'Draft videos',
        videoHq:      'HQ videos',
        total:        'Total',
        today:        'Today',
        yesterday:    'Yesterday',
        thisWeek:     'This week',
        thisMonth:    'This month',
        previousMonth:'Last month',
        thisYear:     'This year',
        loading:      'Loading counters…',
        loaded:       'Counters loaded.',
        partial:      'Some counters are temporarily unavailable.',
        failed:       'Counters could not be loaded right now.',
        updated:      'Last update:',
        refresh:      'Refresh',
        unavailable:  'Unavailable',
    },
    fr: {
        sectionTitle: 'Compteurs d’utilisation',
        intro:        'Chaque valeur compte les événements acceptés, et non les visiteurs uniques. Les exports vidéo restent séparés entre brouillon et haute qualité.',
        tableCaption: 'Compteurs d’utilisation de LGS1920 Studio par période UTC',
        period:       'Période',
        visits:       'Visites',
        journeys:     'Parcours',
        videoDraft:   'Vidéos brouillon',
        videoHq:      'Vidéos HQ',
        total:        'Total',
        today:        'Aujourd’hui',
        yesterday:    'Hier',
        thisWeek:     'Cette semaine',
        thisMonth:    'Ce mois-ci',
        previousMonth:'Le mois dernier',
        thisYear:     'Cette année',
        loading:      'Chargement des compteurs…',
        loaded:       'Compteurs chargés.',
        partial:      'Certains compteurs sont temporairement indisponibles.',
        failed:       'Les compteurs ne peuvent pas être chargés pour le moment.',
        updated:      'Dernière mise à jour :',
        refresh:      'Actualiser',
        unavailable:  'Indisponible',
    },
}

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

export const getStatsLabels = (locale = 'en') => labels[locale] ?? labels.en

export const renderStatsPage = ({
    locale = 'en',
    apiUrl = '',
    sectionTitle = null,
    intro = null,
} = {}) => {
    const pageLabels = getStatsLabels(locale)
    const resolvedSectionTitle = sectionTitle ?? pageLabels.sectionTitle
    const resolvedIntro = intro ?? pageLabels.intro

    return `<section id="stats-table" class="content-section stats-content" data-stats-page data-locale="${escapeHtml(locale)}" data-stats-api-url="${escapeHtml(apiUrl)}">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(locale === 'fr' ? 'Statistiques' : 'Statistics')}</p>
        <h2>${escapeHtml(resolvedSectionTitle)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(resolvedIntro)}</p>

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

export {statColumns, statRows}

export default renderStatsPage
