import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'
import pageTypes, { getGeneratedPageData } from './_data/page-types.js'

const locale = 'en'
const pageContent = pageTypes.legal.license[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.legal.license, locale, {
            sectionNav:legalDocs.license.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.license,
            intro:    pageContent.intro,
            labels:   pageContent.renderLabels,
        })
    }
}
