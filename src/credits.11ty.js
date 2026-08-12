import credits from './_data/pages/credits.js'
import {creditsDocs, renderCreditsSection} from './_lib/credits-docs.js'
import {getGeneratedPageData} from './_lib/page-data.js'

const locale = 'en'
const pageContent = credits.general[locale]

export default class {
    data() {
        return getGeneratedPageData(credits.general, locale, {
            credits:   creditsDocs.general,
            sectionNav:creditsDocs.general.sectionNav,
        })
    }

    render() {
        return renderCreditsSection({
            document:   creditsDocs.general,
            intro:      pageContent.intro,
            relatedLink:{
                href: '/credits/open-source/',
                label:'Open source software credits',
            },
        })
    }
}
