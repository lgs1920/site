import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'
import pageTypes, { getGeneratedPageData } from './_data/page-types.js'

const locale = 'en'
const pageContent = pageTypes.legal.dependencies[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.legal.dependencies, locale, {
            sectionNav:legalDocs.dependencies.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.dependencies,
            intro:    pageContent.intro,
            labels:   pageContent.renderLabels,
        })
    }
}
