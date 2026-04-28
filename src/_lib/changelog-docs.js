import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'

const studioRoot = path.resolve(process.cwd(), '..', 'studio')
const changelogDirectory = path.join(studioRoot, 'public', 'assets', 'changelog')
const studioRepoBaseUrl = 'https://github.com/lgs1920/studio/blob/main/public/assets/changelog'
const studioRepoTreeUrl = 'https://github.com/lgs1920/studio/tree/main/public/assets/changelog'
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

const formatReleaseDate = (dateKey) => {
    const year = Number(dateKey.slice(0, 4))
    const month = Number(dateKey.slice(4, 6))
    const day = Number(dateKey.slice(6, 8))
    const date = new Date(Date.UTC(year, month - 1, day))

    return new Intl.DateTimeFormat('en', {
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
    // Changelog navigation should start from the highest published version.
    const versionOrder = versionCollator.compare(right.version, left.version)

    if (versionOrder !== 0) {
        return versionOrder
    }

    const dateOrder = right.dateKey.localeCompare(left.dateKey)

    if (dateOrder !== 0) {
        return dateOrder
    }

    return right.slug.localeCompare(left.slug)
}

const buildEntries = () => getChangelogFiles().map((fileName) => {
    const match = fileName.match(/^(?<date>\d{8})-(?<version>.+)\.md$/)

    if (!match?.groups) {
        throw new Error(`Unsupported changelog filename: ${fileName}`)
    }

    const slug = fileName.slice(0, -3)
    const anchorId = `release-${slugify(slug)}`
    const isoDate = `${match.groups.date.slice(0, 4)}-${match.groups.date.slice(4, 6)}-${match.groups.date.slice(6, 8)}`
    const dateLabel = formatReleaseDate(match.groups.date)
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
        dateKey:   match.groups.date,
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

const entries = buildEntries().map((entry, index, allEntries) => ({
    ...entry,
    newer:index > 0
        ? {
            anchorId: allEntries[index - 1].anchorId,
            dateLabel:allEntries[index - 1].dateLabel,
            version:  allEntries[index - 1].version,
        }
        : null,
    older:index < allEntries.length - 1
        ? {
            anchorId: allEntries[index + 1].anchorId,
            dateLabel:allEntries[index + 1].dateLabel,
            version:  allEntries[index + 1].version,
        }
        : null,
}))

export const changelog = {
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

export const renderChangelogIndex = ({ directory, entries: changelogEntries }) => `
<section class="content-section legal-section changelog-section">
    <div class="legal-meta">
        <p>The release notes below are concatenated at build time from the changelog Markdown files maintained in the main Studio repository.</p>
        <a class="legal-source-link" href="${directory.sourceUrl}" target="_blank" rel="noreferrer">
            <wa-icon variant="solid" name="file-lines"></wa-icon>
            <span>Source directory: ${directory.sourceLabel}</span>
        </a>
    </div>

    <div class="changelog-list">
        ${changelogEntries.map((entry) => `
            <article id="${entry.anchorId}" class="changelog-entry">
                <header class="changelog-entry-header">
                    <div class="changelog-entry-copy">
                        <p class="section-kicker">Version ${escapeHtml(entry.version)}</p>
                        <h2>${escapeHtml(entry.title)}</h2>
                        <p class="changelog-entry-date">
                            <wa-icon variant="solid" name="calendar-days"></wa-icon>
                            <time datetime="${entry.isoDate}">${escapeHtml(entry.dateLabel)}</time>
                        </p>
                    </div>

                    <div class="changelog-entry-actions">
                        <a class="legal-source-link" href="${entry.sourceUrl}" target="_blank" rel="noreferrer">
                            <wa-icon variant="solid" name="file-lines"></wa-icon>
                            <span>Source: ${escapeHtml(entry.sourceLabel)}</span>
                        </a>
                    </div>
                </header>

                <div class="legal-doc changelog-doc">
                    ${entry.html}
                </div>

                ${(entry.newer || entry.older) ? `
                    <nav class="changelog-inline-nav" aria-label="Release navigation">
                        ${entry.newer ? `
                            <a class="changelog-inline-link" href="#${entry.newer.anchorId}">
                                <span class="changelog-inline-label">Newer</span>
                                <strong>${escapeHtml(entry.newer.version)}</strong>
                            </a>
                        ` : '<span></span>'}

                        ${entry.older ? `
                            <a class="changelog-inline-link" href="#${entry.older.anchorId}" data-direction="older">
                                <span class="changelog-inline-label">Older</span>
                                <strong>${escapeHtml(entry.older.version)}</strong>
                            </a>
                        ` : '<span></span>'}
                    </nav>
                ` : ''}
            </article>
        `).join('')}
    </div>
</section>
`

export default changelog
