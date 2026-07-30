import site from '../_data/site.js'
import pageTypes, { getGeneratedPageData } from '../_data/page-types.js'
import renderStatsPage from '../_lib/stats-page.js'

const locale = 'fr'
const pageContent = pageTypes.stats[locale]

export default class {
    data() {
        return {
            ...getGeneratedPageData(pageTypes.stats, locale, {
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
