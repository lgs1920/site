import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'
import pageTypes, { getGeneratedPageData } from './_data/page-types.js'

const locale = 'en'
const pageContent = pageTypes.legal.licensing[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.legal.licensing, locale, {
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
