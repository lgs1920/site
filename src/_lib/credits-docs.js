import fs from 'node:fs'
import path from 'node:path'
import {execFileSync} from 'node:child_process'
import MarkdownIt from 'markdown-it'

const studioRoot = path.resolve(process.cwd(), '..', 'studio')
const studioCreditRef = 'main'
const studioCreditsPath = 'src/assets/credits'
const studioCreditsUrl = `https://github.com/lgs1920/studio/tree/${studioCreditRef}/${studioCreditsPath}`
const markdown = new MarkdownIt({
    html:      true,
    linkify:   true,
    typographer:true,
})

const creditFiles = {
    engine:    'credits-engine.md',
    providers: 'credits-map-providers.md',
    geocoding: 'credits-geocoding.md',
    openSource:'credits-open-source-code.md',
}

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

const createHeadingId = (text, seenIds, prefix) => {
    const baseId = slugify(`${prefix}-${text}`) || 'section'
    const count = seenIds.get(baseId) || 0

    seenIds.set(baseId, count + 1)

    return count === 0 ? baseId : `${baseId}-${count + 1}`
}

const readCreditMarkdown = (fileName) => {
    if (!fs.existsSync(path.join(studioRoot, '.git'))) {
        throw new Error(`Missing studio git repository: ${studioRoot}`)
    }

    return execFileSync('git', ['-C', studioRoot, 'show', `${studioCreditRef}:${studioCreditsPath}/${fileName}`], {
        encoding:'utf8',
    })
}

const renderCreditDocument = (fileName, sectionKey) => {
    const tokens = markdown.parse(readCreditMarkdown(fileName), {})
    const filteredTokens = []
    const sectionNav = []
    const seenIds = new Map()

    for (let index = 0; index < tokens.length; index += 1) {
        const token = tokens[index]

        if (token.type === 'heading_open') {
            const inlineToken = tokens[index + 1]
            const headingText = stripMarkdown(inlineToken?.content || '')
            const id = createHeadingId(headingText, seenIds, sectionKey)

            token.attrSet('id', id)
            sectionNav.push({
                id,
                label: headingText,
            })
        }

        filteredTokens.push(token)
    }

    return {
        fileName,
        html:      markdown.renderer.render(filteredTokens, markdown.options, {}),
        sectionNav,
    }
}

const createCreditsDocument = (fileNames) => {
    const documents = fileNames.map(({fileName, sectionKey}) => renderCreditDocument(fileName, sectionKey))

    return {
        count:      documents.length,
        documents,
        html:       documents.map(document => document.html).join('\n'),
        sectionNav: documents.flatMap(document => document.sectionNav),
        sourceLabel:`studio/${studioCreditsPath}/`,
        sourceUrl:  studioCreditsUrl,
    }
}

export const creditsDocs = {
    general: createCreditsDocument([
        {fileName: creditFiles.engine, sectionKey:'engine'},
        {fileName: creditFiles.providers, sectionKey:'providers'},
        {fileName: creditFiles.geocoding, sectionKey:'geocoding'},
    ]),
    openSource: createCreditsDocument([
        {fileName: creditFiles.openSource, sectionKey:'open-source'},
    ]),
}

export const renderCreditsSection = ({document, intro, relatedLink}) => `
<section class="content-section legal-section credits-section">
    <div class="legal-meta">
        <p>${intro}</p>
        <a class="legal-source-link" href="${document.sourceUrl}" target="_blank" rel="noreferrer">
            <wa-icon family="brands" name="github"></wa-icon>
            <span>Source: ${document.sourceLabel}</span>
        </a>
        ${relatedLink ? `
        <a class="legal-source-link" href="${relatedLink.href}">
            <wa-icon variant="regular" name="arrow-up-right-from-square"></wa-icon>
            <span>${relatedLink.label}</span>
        </a>
        ` : ''}
    </div>

    <div class="legal-doc">
        ${document.html}
    </div>
</section>
`

export default creditsDocs
