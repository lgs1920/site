import changelog, { renderChangelogIndex } from './_lib/changelog-docs.js'
import pageTypes, { getGeneratedPageData } from './_data/page-types.js'

const locale = 'en'
const pageContent = pageTypes.changelog[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.changelog, locale, {
            changelog,
            sectionNav:changelog.sectionNav,
        })
    }

    render() {
        return renderChangelogIndex({
            directory:{
                sourceLabel:changelog.sourceLabel,
                sourceUrl:  changelog.sourceUrl,
            },
            entries: changelog.entries,
            labels:  pageContent.renderLabels,
        })
    }
}
