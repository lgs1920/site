import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import i18n from '../_data/i18n.js'

const studioRoot = path.resolve(process.cwd(), '..', 'studio')
const changelogDirectory = path.join(studioRoot, 'public', 'assets', 'changelog')
const studioRepoBaseUrl = 'https://github.com/lgs1920/studio/blob/main/public/assets/changelog'
const studioRepoTreeUrl = 'https://github.com/lgs1920/studio/tree/main/public/assets/changelog'
export const CHANGELOG_PAGE_SIZE = 10
const markdown = new MarkdownIt({
    html:      true,
    linkify:   true,
    typographer:true,
})
const versionCollator = new Intl.Collator('en', {
    numeric:    true,
    sensitivity:'base',
})

const stripMarkdown = (value) => value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_~>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const slugify = (value) => stripMarkdown(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const escapeHtml = (value = '') => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const createHeadingId = (text, seenIds, prefix = '') => {
    const seed = prefix ? `${prefix}-${text}` : text
    const baseId = slugify(seed) || 'section'
    const count = seenIds.get(baseId) || 0

    seenIds.set(baseId, count + 1)

    return count === 0 ? baseId : `${baseId}-${count + 1}`
}

const formatReleaseDate = (dateKey, locale = 'en') => {
    const year = Number(dateKey.slice(0, 4))
    const month = Number(dateKey.slice(4, 6))
    const day = Number(dateKey.slice(6, 8))
    const date = new Date(Date.UTC(year, month - 1, day))

    return new Intl.DateTimeFormat(locale, {
        day:  'numeric',
        month:'long',
        year: 'numeric',
    }).format(date)
}

const renderMarkdownDocument = ({ rawMarkdown, headingIdPrefix = '', maxNavLevel = 3 }) => {
    const tokens = markdown.parse(rawMarkdown, {})
    const filteredTokens = []
    const sectionNav = []
    const seenIds = new Map()
    let title = ''
    let excerpt = ''

    for (let index = 0; index < tokens.length; index += 1) {
        const token = tokens[index]

        if (token.type === 'heading_open') {
            const level = Number(token.tag.slice(1))
            const inlineToken = tokens[index + 1]
            const headingText = stripMarkdown(inlineToken?.content || '')

            if (!title && level === 1 && headingText) {
                title = headingText
                index += 2
                continue
            }

            if (headingText) {
                const id = createHeadingId(headingText, seenIds, headingIdPrefix)

                token.attrSet('id', id)

                if (level <= maxNavLevel) {
                    sectionNav.push({
                        id,
                        label: headingText,
                    })
                }
            }
        }

        if (!excerpt && token.type === 'paragraph_open') {
            const inlineToken = tokens[index + 1]
            const paragraphText = stripMarkdown(inlineToken?.content || '')

            if (paragraphText) {
                excerpt = paragraphText
            }
        }

        filteredTokens.push(token)
    }

    return {
        excerpt,
        html: markdown.renderer.render(filteredTokens, markdown.options, {}),
        sectionNav,
        title,
    }
}

const getChangelogFiles = () => {
    if (!fs.existsSync(changelogDirectory)) {
        throw new Error(`Missing changelog directory: ${changelogDirectory}`)
    }

    return fs.readdirSync(changelogDirectory)
        .filter(fileName => fileName.endsWith('.md'))
}

const compareReleaseEntries = (left, right) => {
    // Changelog navigation follows publication order, newest release first.
    const dateOrder = right.dateKey.localeCompare(left.dateKey)

    if (dateOrder !== 0) {
        return dateOrder
    }

    const versionOrder = versionCollator.compare(right.version, left.version)

    return versionOrder !== 0 ? versionOrder : right.slug.localeCompare(left.slug)
}

export const getChangelogPagePath = (locale = 'en', pageNumber = 1) => {
    const basePath = locale === 'fr' ? '/fr/changelog' : '/changelog'

    return pageNumber <= 1 ? basePath : `${basePath}/page/${pageNumber}`
}

export const getChangelogPermalinkPath = (locale = 'en', pageNumber = 1) => `${getChangelogPagePath(locale, pageNumber)}/`

export const createChangelogPagination = ({locale = 'en', currentPage = 1, totalPages = 1} = {}) => ({
    currentPage,
    totalPages,
    previous: currentPage > 1
        ? {number: currentPage - 1, url: getChangelogPagePath(locale, currentPage - 1)}
        : null,
    next: currentPage < totalPages
        ? {number: currentPage + 1, url: getChangelogPagePath(locale, currentPage + 1)}
        : null,
    pages: Array.from({length: totalPages}, (_, index) => {
        const number = index + 1

        return {
            number,
            url: getChangelogPagePath(locale, number),
            current: number === currentPage,
        }
    }),
})

const buildEntries = (locale = 'en') => getChangelogFiles().map((fileName) => {
    const match = fileName.match(/^(?<date>\d{8,9})-(?<version>.+)\.md$/)

    if (!match?.groups) {
        throw new Error(`Unsupported changelog filename: ${fileName}`)
    }

    // Some legacy Studio entries contain one extra digit in the date prefix.
    const dateKey = match.groups.date.slice(0, 8)
    const slug = fileName.slice(0, -3)
    const anchorId = `release-${slugify(slug)}`
    const isoDate = `${dateKey.slice(0, 4)}-${dateKey.slice(4, 6)}-${dateKey.slice(6, 8)}`
    const dateLabel = formatReleaseDate(dateKey, locale)
    const sourcePath = path.join(changelogDirectory, fileName)
    const rawMarkdown = fs.readFileSync(sourcePath, 'utf8')
    const document = renderMarkdownDocument({
        headingIdPrefix: anchorId,
        maxNavLevel:      0,
        rawMarkdown,
    })
    const title = document.title || `Version ${match.groups.version}`

    return {
        anchorId,
        dateKey,
        dateLabel,
        isoDate,
        slug,
        sourceLabel:`studio/public/assets/changelog/${fileName}`,
        sourceUrl: `${studioRepoBaseUrl}/${fileName}`,
        summary:   dateLabel,
        title,
        version:   match.groups.version,
        html:      document.html,
    }
}).sort(compareReleaseEntries)

const createChangelog = (locale = 'en') => {
    const entries = buildEntries(locale).map((entry, index, allEntries) => ({
        ...entry,
        newer: index > 0
            ? {
                anchorId: allEntries[index - 1].anchorId,
                dateLabel: allEntries[index - 1].dateLabel,
                version:  allEntries[index - 1].version,
                url:      `${getChangelogPagePath(locale, Math.floor((index - 1) / CHANGELOG_PAGE_SIZE) + 1)}#${allEntries[index - 1].anchorId}`,
            }
            : null,
        older: index < allEntries.length - 1
            ? {
                anchorId: allEntries[index + 1].anchorId,
                dateLabel: allEntries[index + 1].dateLabel,
                version:  allEntries[index + 1].version,
                url:      `${getChangelogPagePath(locale, Math.floor((index + 1) / CHANGELOG_PAGE_SIZE) + 1)}#${allEntries[index + 1].anchorId}`,
            }
            : null,
    }))

    return {
        count: entries.length,
        entries,
        latest: entries[0] || null,
        sectionNav: entries.map((entry) => ({
            id:     entry.anchorId,
            label:  entry.version,
            summary:entry.dateLabel,
        })),
        sourceLabel:'studio/public/assets/changelog/',
        sourceUrl:  studioRepoTreeUrl,
    }
}

export const changelog = createChangelog('en')

export const renderChangelogIndex = ({ directory, entries: changelogEntries, intro, locale, pagination = null }) => `
<section class="content-section legal-section changelog-section">
    <div class="legal-meta">
        <p>${intro}</p>
        <a class="legal-source-link" href="${directory.sourceUrl}" target="_blank" rel="noreferrer">
            <wa-icon variant="regular" name="file-lines"></wa-icon>
            <span>${i18n.ui[locale].sourceDirectory}: ${directory.sourceLabel}</span>
        </a>
    </div>

    <div class="changelog-list">
        ${changelogEntries.map((entry) => `
            <article id="${entry.anchorId}" class="changelog-entry">
                <header class="changelog-entry-header">
                    <div class="changelog-entry-copy">
                        <p class="section-kicker">${i18n.ui[locale].version} ${escapeHtml(entry.version)}</p>
                        <h2>${escapeHtml(entry.title)}</h2>
                        <p class="changelog-entry-date">
                            <wa-icon variant="regular" name="calendar-days"></wa-icon>
                            <time datetime="${entry.isoDate}">${escapeHtml(entry.dateLabel)}</time>
                        </p>
                    </div>

                    <div class="changelog-entry-actions">
                        <a class="legal-source-link" href="${entry.sourceUrl}" target="_blank" rel="noreferrer">
                            <wa-icon variant="regular" name="file-lines"></wa-icon>
                            <span>${i18n.ui[locale].source}: ${escapeHtml(entry.sourceLabel)}</span>
                        </a>
                    </div>
                </header>

                <div class="legal-doc changelog-doc">
                    ${entry.html}
                </div>

                ${(entry.newer || entry.older) ? `
                    <nav class="changelog-inline-nav" aria-label="${i18n.ui[locale].releaseNavigation}">
                        ${entry.newer ? `
                            <a class="changelog-inline-link" href="${entry.newer.url || `#${entry.newer.anchorId}`}" rel="prev">
                                <span class="changelog-inline-label">${i18n.ui[locale].newer}</span>
                                <strong>${escapeHtml(entry.newer.version)}</strong>
                            </a>
                        ` : '<span></span>'}

                        ${entry.older ? `
                            <a class="changelog-inline-link" href="${entry.older.url || `#${entry.older.anchorId}`}" data-direction="older" rel="next">
                                <span class="changelog-inline-label">${i18n.ui[locale].older}</span>
                                <strong>${escapeHtml(entry.older.version)}</strong>
                            </a>
                        ` : '<span></span>'}
                    </nav>
        ` : ''}
            </article>
        `).join('')}
    </div>

    ${pagination && pagination.totalPages > 1 ? `
        <nav class="changelog-pagination" aria-label="${i18n.ui[locale].paginationNavigation}">
            <div class="changelog-pagination-controls">
                ${pagination.previous ? `
                    <a class="changelog-pagination-direction" href="${pagination.previous.url}" rel="prev">
                        <wa-icon variant="solid" name="caret-left" aria-hidden="true"></wa-icon>
                        <span>${i18n.ui[locale].previousPage}</span>
                    </a>
                ` : '<span class="changelog-pagination-direction" aria-hidden="true"></span>'}

                <ol class="changelog-pagination-pages">
                    ${pagination.pages.map((page) => page.current
                        ? `<li><span class="changelog-pagination-page" aria-current="page">${page.number}</span></li>`
                        : `<li><a class="changelog-pagination-page" href="${page.url}" aria-label="${i18n.ui[locale].page} ${page.number}">${page.number}</a></li>`).join('')}
                </ol>

                ${pagination.next ? `
                    <a class="changelog-pagination-direction" href="${pagination.next.url}" rel="next">
                        <span>${i18n.ui[locale].nextPage}</span>
                        <wa-icon variant="solid" name="caret-right" aria-hidden="true"></wa-icon>
                    </a>
                ` : '<span class="changelog-pagination-direction" aria-hidden="true"></span>'}
            </div>
        </nav>
    ` : ''}
</section>
`

export const getChangelog = (locale = 'en') => createChangelog(locale)

export default changelog
