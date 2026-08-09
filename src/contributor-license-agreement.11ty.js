import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'
import legal from './_data/pages/legal.js'
import { getGeneratedPageData } from './_lib/page-data.js'

const locale = 'en'
const pageContent = legal.cla[locale]

export default class {
    data() {
        return getGeneratedPageData(legal.cla, locale, {
            sectionNav:legalDocs.cla.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.cla,
            intro:    pageContent.intro,
            locale,
        })
    }
}
