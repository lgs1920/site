import i18n from '../_data/i18n.js'

export const getLocalizedContent = (definition, locale = i18n.defaultLocale) => {
    if (!definition) {
        return null
    }

    if (definition.locales) {
        return definition.locales[locale] ?? definition.locales[i18n.defaultLocale] ?? null
    }

    return definition[locale] ?? definition[i18n.defaultLocale] ?? null
}

export const getPageContent = (getPageDefinition, url = '', locale = i18n.getLocaleFromUrl(url)) => getLocalizedContent(
    getPageDefinition(url),
    locale,
)

export const getGeneratedPageData = (definition, locale, options = {}) => {
    const content = getLocalizedContent(definition, locale)

    return {
        layout:     definition.layout,
        permalink:  i18n.localizedPath(locale, definition.path),
        title:      content.title,
        description:content.description,
        minimalChrome: definition.minimalChrome,
        pageClass:  definition.pageClass,
        hero:       typeof content.getHero === 'function' ? content.getHero(options) : content.hero,
        sectionNav: options.sectionNav,
        pageCta:    content.pageCta,
    }
}
