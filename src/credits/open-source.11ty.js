import credits from '../_data/pages/credits.js'
import {creditsDocs, renderCreditsSection} from '../_lib/credits-docs.js'
import {getGeneratedPageData} from '../_lib/page-data.js'

const locale = 'en'
const pageContent = credits.openSource[locale]

export default class {
    data() {
        return getGeneratedPageData(credits.openSource, locale, {
            credits:   creditsDocs.openSource,
            sectionNav:creditsDocs.openSource.sectionNav,
        })
    }

    render() {
        return renderCreditsSection({
            document:   creditsDocs.openSource,
            intro:      pageContent.intro,
            relatedLink:{
                href: '/credits',
                label:'View all credits',
            },
        })
    }
}
