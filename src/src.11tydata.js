import i18n from './_data/i18n.js'
import { getPageDefinition } from './_data/pages/index.js'
import { getPageContent } from './_lib/page-data.js'

const stripTrailingSlash = (value = '') => value.replace(/\/$/, '')
const getLocale = (data) => i18n.getLocaleFromUrl(data.page?.url)
const getLocalizedPageContent = (data) => getPageContent(getPageDefinition, data.page?.url, getLocale(data))
const getAbsoluteUrl = (siteUrl, path = '/') => `${stripTrailingSlash(siteUrl)}${path}`

const getPageMeta = (data) => {
    const locale = getLocale(data)
    const localizedPage = getLocalizedPageContent(data)
    const localizedSite = i18n.site[locale] ?? i18n.site[i18n.defaultLocale]
    const currentPath = i18n.publicPath(data.page?.url)
    const alternateLocales = i18n.getAlternateLocales(data.page?.url)
    const siteUrl = data.site?.url
    const title = localizedPage?.title ?? data.title ?? data.site?.name
    const description = localizedPage?.description ?? data.description ?? localizedSite?.description ?? data.site?.description

    if (data.errorPage) {
        return {
            title,
            description,
            canonicalUrl: null,
            ogLocale: i18n.localeMeta[locale]?.ogLocale,
            alternates: [],
            xDefault: null,
            alternateOgLocales: [],
        }
    }

    const canonicalUrl = siteUrl && currentPath
        ? getAbsoluteUrl(siteUrl, currentPath)
        : currentPath
    const alternateLinks = alternateLocales && siteUrl
        ? i18n.supportedLocales.map((alternateLocale) => ({
            locale:alternateLocale,
            url:   getAbsoluteUrl(siteUrl, alternateLocales[alternateLocale]),
        }))
        : []
    const alternateOgLocales = i18n.supportedLocales
        .filter((supportedLocale) => supportedLocale !== locale)
        .map((supportedLocale) => i18n.localeMeta[supportedLocale]?.ogLocale)
        .filter(Boolean)

    return {
        title,
        description,
        canonicalUrl,
        ogLocale: i18n.localeMeta[locale]?.ogLocale,
        alternates:alternateLinks,
        xDefault:  alternateLocales && siteUrl
            ? getAbsoluteUrl(siteUrl, alternateLocales[i18n.defaultLocale])
            : null,
        alternateOgLocales,
    }
}

export default {
    eleventyComputed: {
        locale:              getLocale,
        localizedSite:       (data) => i18n.site[getLocale(data)] ?? i18n.site.en,
        localizedHomeUrl:    (data) => i18n.localizedPath(getLocale(data), '/'),
        localizedContactUrl: (data) => i18n.localizedPath(getLocale(data), '/contact/'),
        localizedRegistrationUrl:(data) => i18n.localizedPath(getLocale(data), '/registration/'),
        currentPageUrl:      (data) => i18n.publicPath(data.page?.url),
        localizedPage:       getLocalizedPageContent,
        pageMeta:            getPageMeta,
        localizedNavigation: (data) => i18n.navigation[getLocale(data)] ?? i18n.navigation.en,
        localizedHeaderLinks:(data) => i18n.headerLinks[getLocale(data)] ?? i18n.headerLinks.en,
        localizedLegalLinks: (data) => i18n.legalLinks[getLocale(data)] ?? i18n.legalLinks.en,
        uiLabels:            (data) => i18n.ui[getLocale(data)] ?? i18n.ui.en,
        localeOptions:       () => i18n.localeOptions,
        alternateLocales:    (data) => i18n.getAlternateLocales(data.page?.url),
    },
}
