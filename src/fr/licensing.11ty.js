import { legalDocs, renderLegalSection } from '../_lib/legal-docs.js'
import legal from '../_data/pages/legal.js'
import { getGeneratedPageData } from '../_lib/page-data.js'

const locale = 'fr'
const pageContent = legal.licensing[locale]

export default class {
    data() {
        return getGeneratedPageData(legal.licensing, locale, {
            sectionNav:legalDocs.licensing.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.licensing,
            intro:    pageContent.intro,
            locale,
        })
    }
}
