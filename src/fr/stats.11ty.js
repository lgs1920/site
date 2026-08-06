import site from '../_data/site.js'
import stats from '../_data/pages/stats.js'
import { getGeneratedPageData } from '../_lib/page-data.js'
import renderStatsPage from '../_lib/stats-page.js'

const locale = 'fr'
const pageContent = stats[locale]

export default class {
    data() {
        return {
            ...getGeneratedPageData(stats, locale, {
                sectionNav: pageContent.sectionNav,
            }),
            statsApiUrl: site.countApiUrl,
        }
    }

    render() {
        return renderStatsPage({
            locale,
            apiUrl:       site.countApiUrl,
            kicker:       pageContent.hero.kicker,
            sectionTitle: pageContent.sectionTitle,
            intro:        pageContent.intro,
        })
    }
}
