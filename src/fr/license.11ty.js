import { legalDocs, renderLegalSection } from '../_lib/legal-docs.js'
import legal from '../_data/pages/legal.js'
import { getGeneratedPageData } from '../_lib/page-data.js'

const locale = 'fr'
const pageContent = legal.license[locale]

export default class {
    data() {
        return getGeneratedPageData(legal.license, locale, {
            sectionNav:legalDocs.license.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.license,
            intro:    pageContent.intro,
            locale,
        })
    }
}
