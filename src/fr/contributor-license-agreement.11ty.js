import { legalDocs, renderLegalSection } from '../_lib/legal-docs.js'
import pageTypes, { getGeneratedPageData } from '../_data/page-types.js'

const locale = 'fr'
const pageContent = pageTypes.legal.cla[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.legal.cla, locale, {
            sectionNav:legalDocs.cla.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.cla,
            intro:    pageContent.intro,
            labels:   pageContent.renderLabels,
        })
    }
}
