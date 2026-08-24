import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import MarkdownIt from 'markdown-it'
import i18n from '../_data/i18n.js'

const studioRoot = path.resolve(process.cwd(), '..', 'studio')
const studioLicenseRef = '09ec8294'
const studioRepoBaseUrl = `https://github.com/lgs1920/studio/blob/${studioLicenseRef}`
const markdown = new MarkdownIt({
    html:      true,
    linkify:   true,
    typographer:true,
})

const sourceConfig = {
    dependencies: {
        maxNavLevel: 3,
        sourceFile:  'tech-doc/specs/delivery/README_DEPENDENCIES.md',
        sourceLabel: 'studio/tech-doc/specs/delivery/README_DEPENDENCIES.md',
        sourceRefFile: 'tech-doc/specs/delivery/README_DEPENDENCIES.md',
        sourceRef:   studioLicenseRef,
    },
    licensing: {
        maxNavLevel: 2,
        sourceFile:  'LICENSES.md',
        sourceLabel: 'studio/LICENSES.md',
        sourceRef:   studioLicenseRef,
    },
    license: {
        maxNavLevel: 2,
        sourceFile:  'LICENSE.md',
        sourceLabel: 'studio/LICENSE.md',
        sourceRef:   studioLicenseRef,
    },
    cla: {
        maxNavLevel: 2,
        sourceFile:  'CONTRIBUTOR_LICENSE_AGREEMENT.md',
        sourceLabel: 'studio/CONTRIBUTOR_LICENSE_AGREEMENT.md',
    },
}

const internalLinkMap = new Map([
    ['README_DEPENDENCIES.md', '/dependencies'],
    ['LICENSES.md', '/licensing'],
    ['LICENSE.md', '/license'],
    ['CONTRIBUTOR_LICENSE_AGREEMENT.md', '/contributor-license-agreement'],
])

const stripMarkdown = (value) => value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const slugify = (value) => stripMarkdown(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const rewriteStudioLinks = (value) => value.replace(/\]\(([^)]+)\)/g, (match, target) => {
    const replacement = internalLinkMap.get(target)

    return replacement ? `](${replacement})` : match
})

const createHeadingId = (text, seenIds) => {
    const baseId = slugify(text) || 'section'
    const count = seenIds.get(baseId) || 0

    seenIds.set(baseId, count + 1)

    return count === 0 ? baseId : `${baseId}-${count + 1}`
}

const renderDocument = ({ maxNavLevel, sourceFile, sourceLabel, sourceRefFile, sourceRef = 'main' }) => {
    const sourcePath = path.join(studioRoot, sourceFile)
    const gitSourceFile = sourceRefFile ?? sourceFile

    if (!fs.existsSync(path.join(studioRoot, '.git'))) {
        throw new Error(`Missing studio git repository: ${studioRoot}`)
    }

    if (!fs.existsSync(sourcePath)) {
        throw new Error(`Missing legal source file: ${sourcePath}`)
    }

    const sourceUrl = `${studioRepoBaseUrl}/${gitSourceFile}`
    const rawMarkdown = rewriteStudioLinks(execFileSync('git', ['-C', studioRoot, 'show', `${sourceRef}:${gitSourceFile}`], {
        encoding:'utf8',
    }))
    const tokens = markdown.parse(rawMarkdown, {})
    const filteredTokens = []
    const sectionNav = []
    const seenIds = new Map()
    let title = ''

    for (let index = 0; index < tokens.length; index += 1) {
        const token = tokens[index]

        if (token.type === 'heading_open') {
            const level = Number(token.tag.slice(1))
            const inlineToken = tokens[index + 1]
            const headingText = stripMarkdown(inlineToken?.content || '')

            if (!title && level === 1) {
                title = headingText
                index += 2
                continue
            }

            const id = createHeadingId(headingText, seenIds)

            token.attrSet('id', id)

            if (level <= maxNavLevel) {
                sectionNav.push({
                    id,
                    label: headingText,
                })
            }
        }

        filteredTokens.push(token)
    }

    return {
        html: markdown.renderer.render(filteredTokens, markdown.options, {}),
        sectionNav,
        sourceFile,
        sourceLabel,
        sourceUrl,
        title,
    }
}

export const legalDocs = Object.fromEntries(
    Object.entries(sourceConfig).map(([key, config]) => [key, renderDocument(config)])
)

export const renderLegalSection = ({ document, intro, locale }) => `
<section class="content-section legal-section">
    <div class="legal-meta">
        <p>${intro}</p>
        <a class="legal-source-link" href="${document.sourceUrl}" target="_blank" rel="noreferrer">
            <wa-icon variant="regular" name="file-lines"></wa-icon>
            <span>${i18n.ui[locale].source}: ${document.sourceLabel}</span>
        </a>
    </div>

    <div class="legal-doc">
        ${document.html}
    </div>
</section>
`

export default legalDocs
