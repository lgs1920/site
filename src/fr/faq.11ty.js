import pageTypes, { getGeneratedPageData } from '../_data/page-types.js'
import { renderFaqPage } from '../_lib/faq-page.js'

const locale = 'fr'
const pageContent = pageTypes.faq[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.faq, locale, {
            sectionNav: pageContent.items.map((item) => ({
                id: item.id,
                label: item.summary,
            })),
        })
    }

    render() {
        return renderFaqPage({
            kicker: pageContent.hero.kicker,
            title:  pageContent.sectionTitle,
            intro:  pageContent.intro,
            items:  pageContent.items,
        })
    }
}
