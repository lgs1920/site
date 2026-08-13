import changelogs from './_data/changelog.js'
import { CHANGELOG_PAGE_SIZE, createChangelogPagination, getChangelogPermalinkPath, renderChangelogIndex } from './_lib/changelog-docs.js'
import changelogPage from './_data/pages/changelog.js'
import { getGeneratedPageData } from './_lib/page-data.js'

const locale = 'en'
const changelog = changelogs[locale]
const pageContent = changelogPage[locale]
const getPageSectionNav = (data) => (data.pagination?.items ?? changelog.entries).map((entry) => ({
    id:     entry.anchorId,
    label:  entry.version,
    summary:entry.dateLabel,
}))

export default class {
    data() {
        return {
            ...getGeneratedPageData(changelogPage, locale, {
                changelog,
                sectionNav:changelog.sectionNav,
            }),
            pagination: {
                data: 'changelog.en.entries',
                size: CHANGELOG_PAGE_SIZE,
                alias:'entries',
            },
            permalink: (data) => getChangelogPermalinkPath(locale, (data.pagination?.pageNumber ?? 0) + 1),
            eleventyComputed: {
                sectionNav: getPageSectionNav,
            },
        }
    }

    render(data) {
        const currentPage = (data.pagination?.pageNumber ?? 0) + 1
        const totalPages = Math.ceil(changelog.count / CHANGELOG_PAGE_SIZE)

        return renderChangelogIndex({
            locale,
            directory:{
                sourceLabel:changelog.sourceLabel,
                sourceUrl:  changelog.sourceUrl,
            },
            entries: data.entries ?? data.pagination?.items ?? [],
            intro:   pageContent.intro,
            pagination:createChangelogPagination({locale, currentPage, totalPages}),
        })
    }
}
