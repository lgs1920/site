import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'
import legal from './_data/pages/legal.js'
import { getGeneratedPageData } from './_lib/page-data.js'

const locale = 'en'
const pageContent = legal.dependencies[locale]

export default class {
    data() {
        return getGeneratedPageData(legal.dependencies, locale, {
            sectionNav:legalDocs.dependencies.sectionNav,
        })
    }

    render() {
        return renderLegalSection({
            document: legalDocs.dependencies,
            intro:    pageContent.intro,
            locale,
        })
    }
}
