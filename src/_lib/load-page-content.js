import {readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const sourceRoot = fileURLToPath(new URL('../', import.meta.url))

const resolveContent = (value) => {
    if (typeof value === 'string' && value.startsWith('@md:')) {
        return readFileSync(path.join(sourceRoot, value.slice(4)), 'utf8').trim()
    }

    if (Array.isArray(value)) {
        return value.map(resolveContent)
    }

    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveContent(item)]))
    }

    return value
}

export const loadPageContent = (relativePath) => resolveContent(JSON.parse(
    readFileSync(new URL(relativePath, import.meta.url), 'utf8'),
))

export const loadLocalizedPageContent = (pageName) => Object.fromEntries(
    ['en', 'fr'].map((locale) => [locale, loadPageContent(`../_content/${pageName}/${locale}/page.json`)]),
)

export const loadGuidePageContent = (pageName) => Object.fromEntries(
    ['en', 'fr'].map((locale) => [locale, loadPageContent(`../_content/guide/${pageName}/${locale}/page.json`)]),
)
