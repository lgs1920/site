import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

import i18n from './i18n.js'

const siteRoot = process.cwd()

const normalizePath = (url = '') => url.replace(/^\/fr/, '').replace(/index\.html$/, '').replace(/\/$/, '') || '/'
const markdownPath = (locale, url) => {
    const relative = normalizePath(url).replace(/^\//, '')
    const base = locale === 'fr' ? path.join(siteRoot, 'src', 'fr') : path.join(siteRoot, 'src')
    const direct = path.join(base, `${relative}.md`)
    const index = path.join(base, relative, 'index.md')
    return fs.existsSync(direct) ? direct : index
}
const digest = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 12)

export const getGuideTranslationStatus = (url, locale) => {
    const file = markdownPath(locale, url)
    const sourceFile = markdownPath(i18n.defaultLocale, url)

    if (!fs.existsSync(file)) {
        return {
            locale,
            status:   'missing',
            file:     path.relative(siteRoot, file),
            sourceRevision: fs.existsSync(sourceFile) ? digest(sourceFile) : null,
            updatedAt:null,
        }
    }

    return {
        locale,
        status:   'published',
        file:     path.relative(siteRoot, file),
        sourceRevision: fs.existsSync(sourceFile) ? digest(sourceFile) : null,
        updatedAt:fs.statSync(file).mtime.toISOString(),
    }
}

export const getGuideTranslationReport = (url) => Object.fromEntries(
    i18n.supportedLocales.map((locale) => [locale, getGuideTranslationStatus(url, locale)]),
)
