import faq from './_data/pages/faq.js'
import { getGeneratedPageData } from './_lib/page-data.js'
import { renderFaqPage } from './_lib/faq-page.js'

const locale = 'en'
const pageContent = faq[locale]

export default class {
    data() {
        return getGeneratedPageData(faq, locale, {
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
            creditLabel:pageContent.creditLabel,
        })
    }
}
