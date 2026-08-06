import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import {fileURLToPath} from 'node:url'

import i18n from '../src/_data/i18n.js'
import {guidePages} from '../src/_data/guide-pages.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const failures = []
const warnings = []
const fail = (message) => failures.push(message)
const canonicalPath = (url) => url.replace(/^\/fr/, '').replace(/index\.html$/, '').replace(/\/$/, '') || '/'
const pageFile = (locale, url) => {
    const relative = canonicalPath(url).replace(/^\//, '')
    const base = locale === 'fr' ? path.join(root, 'src', 'fr') : path.join(root, 'src')
    const filePath = path.join(base, `${relative}.md`)
    return fs.existsSync(filePath) ? filePath : path.join(base, relative, 'index.md')
}
const headings = (file) => !fs.existsSync(file) ? [] : fs.readFileSync(file, 'utf8')
    .split('\n')
    .filter((line) => /^#{1,6}\s+/.test(line))
const localLinks = (file) => !fs.existsSync(file) ? [] : [...fs.readFileSync(file, 'utf8').matchAll(/(?:href|\]\()\s*=?\s*["']?([^\s"')>]+)/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith('/'))

const pagePaths = Object.keys(guidePages)
const pagePathSet = new Set(pagePaths.map(canonicalPath))
if (!pagePaths.length) fail('Le catalogue du guide est vide.')

for (const [url, definition] of Object.entries(guidePages)) {
    const canonical = canonicalPath(url)
    if (!url.endsWith('/')) fail(`${url}: l’URL canonique doit se terminer par /.`)
    if (!definition.locales) fail(`${url}: locales manquant.`)

    for (const locale of i18n.supportedLocales) {
        const content = definition.locales?.[locale]
        const file = pageFile(locale, url)
        if (!content) fail(`${url}: traduction ${locale} manquante dans le catalogue.`)
        if (!fs.existsSync(file)) fail(`${url}: fichier Markdown ${locale} manquant (${path.relative(root, file)}).`)
        if (!content?.title) fail(`${url}: title ${locale} manquant.`)
        if (!content?.description) fail(`${url}: description ${locale} manquante.`)
        if (content?.sectionNav && !Array.isArray(content.sectionNav)) fail(`${url}: sectionNav ${locale} invalide.`)

        for (const link of localLinks(file)) {
            const target = canonicalPath(link.split('#')[0].split('?')[0])
            if (target.startsWith('/user-guide') && !pagePathSet.has(target)) {
                fail(`${path.relative(root, file)}: lien interne vers une page inconnue ${link}.`)
            }
        }
    }

    if (headings(pageFile('en', url)).length !== headings(pageFile('fr', url)).length) {
        warnings.push(`${url}: nombre de titres différent entre les langues.`)
    }
}

for (const locale of i18n.supportedLocales) {
    const guideRoot = locale === 'fr' ? path.join(root, 'src', 'fr', 'user-guide') : path.join(root, 'src', 'user-guide')
    if (!fs.existsSync(guideRoot)) fail(`Répertoire du guide absent pour ${locale}: ${path.relative(root, guideRoot)}.`)
}

for (const message of warnings) console.warn(`content:check warning: ${message}`)
if (failures.length) {
    for (const message of failures) console.error(`content:check error: ${message}`)
    process.exitCode = 1
} else {
    console.log(`content:check OK — ${pagePaths.length} pages du guide, ${i18n.supportedLocales.length} locales.`)
}
