import {loadPageContent} from '../_lib/load-page-content.js'

const statsLabels = {
    en: loadPageContent('../_content/stats/en/labels.json'),
    fr: loadPageContent('../_content/stats/fr/labels.json'),
}

export const getStatsLabels = (locale = 'en') => statsLabels[locale] ?? statsLabels.en

export default statsLabels
