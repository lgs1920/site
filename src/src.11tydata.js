import i18n from './_data/i18n.js'

export default {
    eleventyComputed: {
        locale:              (data) => i18n.getLocaleFromUrl(data.page?.url),
        localizedNavigation: (data) => i18n.navigation[i18n.getLocaleFromUrl(data.page?.url)] ?? i18n.navigation.en,
        localizedHeaderLinks:(data) => i18n.headerLinks[i18n.getLocaleFromUrl(data.page?.url)] ?? i18n.headerLinks.en,
        localizedLegalLinks: (data) => i18n.legalLinks[i18n.getLocaleFromUrl(data.page?.url)] ?? i18n.legalLinks.en,
        uiLabels:            (data) => i18n.ui[i18n.getLocaleFromUrl(data.page?.url)] ?? i18n.ui.en,
        localeOptions:       () => i18n.localeOptions,
        alternateLocales:    (data) => i18n.getAlternateLocales(data.page?.url),
    },
}
