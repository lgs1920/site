import changelogs from './_data/changelog.js'
import { CHANGELOG_PAGE_SIZE, createChangelogPagination, getChangelogPagePath, renderChangelogIndex } from './_lib/changelog-docs.js'
import pageTypes, { getGeneratedPageData } from './_data/page-types.js'

const locale = 'en'
const changelog = changelogs[locale]
const pageContent = pageTypes.changelog[locale]
const getPageSectionNav = (data) => (data.pagination?.items ?? changelog.entries).map((entry) => ({
    id:     entry.anchorId,
    label:  entry.version,
    summary:entry.dateLabel,
}))

export default class {
    data() {
        return {
            ...getGeneratedPageData(pageTypes.changelog, locale, {
                changelog,
                sectionNav:changelog.sectionNav,
            }),
            pagination: {
                data: 'changelog.en.entries',
                size: CHANGELOG_PAGE_SIZE,
                alias:'entries',
            },
            permalink: (data) => getChangelogPagePath(locale, (data.pagination?.pageNumber ?? 0) + 1),
            eleventyComputed: {
                sectionNav: getPageSectionNav,
            },
        }
    }

    render(data) {
        const currentPage = (data.pagination?.pageNumber ?? 0) + 1
        const totalPages = Math.ceil(changelog.count / CHANGELOG_PAGE_SIZE)

        return renderChangelogIndex({
            directory:{
                sourceLabel:changelog.sourceLabel,
                sourceUrl:  changelog.sourceUrl,
            },
            entries: data.entries ?? data.pagination?.items ?? [],
            labels:  pageContent.renderLabels,
            pagination:createChangelogPagination({locale, currentPage, totalPages}),
        })
    }
}
