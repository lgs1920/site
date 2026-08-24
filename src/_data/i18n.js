import {loadPageContent} from '../_lib/load-page-content.js'
import {guidePages} from './guide-pages.js'

const defaultLocale = 'en'
const supportedLocales = ['en', 'fr']
const localeOptions = loadPageContent('../_content/site/locales.json')
const localeLabels = Object.fromEntries(localeOptions.map((option) => [option.code, option.short]))
const localeMeta = Object.fromEntries(localeOptions.map((option) => [option.code, option]))
const localeData = Object.fromEntries(supportedLocales.map((locale) => [locale, loadPageContent(`../_content/site/${locale}/i18n.json`)]))
const site = Object.fromEntries(supportedLocales.map((locale) => [locale, localeData[locale].site]))
const ui = Object.fromEntries(supportedLocales.map((locale) => [locale, localeData[locale].ui]))
const userGuideSections = Object.fromEntries(supportedLocales.map((locale) => [locale, localeData[locale].userGuideSections]))
const navigation = Object.fromEntries(supportedLocales.map((locale) => [locale, localeData[locale].navigation]))
const headerLinks = Object.fromEntries(supportedLocales.map((locale) => [locale, localeData[locale].headerLinks]))
const legalLinks = Object.fromEntries(supportedLocales.map((locale) => [locale, localeData[locale].legalLinks]))

const translatedSitePaths = [
    '/',
    '/changelog/',
    '/licensing/',
    '/license/',
    '/contributor-license-agreement/',
    '/dependencies/',
    '/faq/',
    '/contact/',
    '/studio/',
    '/registration/',
    '/registration/studio/',
    '/registration/confirm/',
    '/registration/revoke/',
    '/stats/',
    '/user-guide/',
    '/user-guide/getting-started/first-steps/',
    '/user-guide/getting-started/import-source-data/',
    '/user-guide/workflows/use-map-layers/',
    '/user-guide/workflows/journeys-and-tracks/',
    '/user-guide/workflows/points-of-interest/',
    '/user-guide/workflows/appearance/',
    '/user-guide/workflows/scene-and-camera/',
]

const translatedPaths = new Set([...translatedSitePaths, ...Object.keys(guidePages)])

const stripTrailingSlash = (value = '') => {
    if (value === '/') return value
    return value.replace(/\/$/, '') || '/'
}

const ensureTrailingSlash = (value = '') => value === '/' || value.endsWith('/') ? value : `${value}/`
const publicPath = (path = '') => stripTrailingSlash(path)
const localizedPath = (locale, path) => publicPath(`${localeMeta[locale]?.prefix ?? ''}${path}`)
const localizedPermalinkPath = (locale, path) => ensureTrailingSlash(`${localeMeta[locale]?.prefix ?? ''}${path}`)

const getLocaleFromUrl = (url = '') => {
    const match = localeOptions
        .filter((option) => option.prefix)
        .sort((left, right) => right.prefix.length - left.prefix.length)
        .find((option) => url === option.prefix || url.startsWith(`${option.prefix}/`))

    return match?.code ?? defaultLocale
}

const getCanonicalGuidePath = (url = '') => {
    const locale = getLocaleFromUrl(url)
    const prefix = localeMeta[locale]?.prefix ?? ''
    return prefix && url.startsWith(prefix) ? url.replace(prefix, '') : url
}

const normalizeUrl = (url = '') => {
    const normalizedUrl = url.replace(/index\.html$/, '')

    if (!normalizedUrl) return '/'
    return normalizedUrl.endsWith('/') ? normalizedUrl : `${normalizedUrl}/`
}

const getCanonicalPath = (url = '') => {
    const normalizedUrl = normalizeUrl(url)
    const locale = getLocaleFromUrl(normalizedUrl)
    const prefix = localeMeta[locale]?.prefix ?? ''
    return prefix && normalizedUrl.startsWith(prefix) ? normalizedUrl.replace(prefix, '') : normalizedUrl
}

const isPaginatedChangelogPath = (path = '') => /^\/changelog\/page\/\d+\/$/.test(path)

const getAlternateLocales = (url = '') => {
    const canonicalPath = getCanonicalPath(url)
    if (!translatedPaths.has(canonicalPath) && !isPaginatedChangelogPath(canonicalPath)) return null

    const alternates = {current: getLocaleFromUrl(url)}
    for (const locale of supportedLocales) alternates[locale] = localizedPath(locale, canonicalPath)
    return alternates
}

export default {
    defaultLocale,
    supportedLocales,
    localeOptions,
    translatedPaths,
    localeLabels,
    localeMeta,
    site,
    ui,
    getLocaleFromUrl,
    getCanonicalGuidePath,
    getCanonicalPath,
    getAlternateLocales,
    normalizeUrl,
    localizedPath,
    localizedPermalinkPath,
    publicPath,
    userGuideSections,
    navigation,
    headerLinks,
    legalLinks,
}
