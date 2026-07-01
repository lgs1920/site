import i18n from '../_data/i18n.js'

const normalizeGuideUrl = (url = '') => {
    const normalizedUrl = url.replace(/index\.html$/, '')

    if (normalizedUrl.endsWith('/')) {
        return normalizedUrl
    }

    return `${normalizedUrl}/`
}

const createGuideEntries = (sections = []) => sections.flatMap((section) => section.items.map((item) => ({
    item,
    section,
})))

const createPaginationItem = (entry) => {
    if (!entry) {
        return null
    }

    return {
        label:       entry.item.label,
        url:         entry.item.url,
        summary:     entry.item.summary,
        icon:        entry.item.icon,
        sectionLabel:entry.section.label,
        sectionIcon: entry.section.icon,
    }
}

const getGuideLocale = (data) => i18n.getLocaleFromUrl(data.page?.url)

const getLocalizedGuideSections = (data) => i18n.userGuideSections[getGuideLocale(data)] ?? i18n.userGuideSections.en

const getAlternateLocales = (data) => {
    const locale = getGuideLocale(data)
    const canonicalPath = i18n.getCanonicalGuidePath(normalizeGuideUrl(data.page?.url))
    const localizedGuidePaths = new Set(i18n.userGuideSections.en.flatMap((section) => section.items.map((item) => item.url)))

    if (!localizedGuidePaths.has(canonicalPath)) {
        return null
    }

    const alternates = {}

    for (const supportedLocale of i18n.supportedLocales) {
        alternates[supportedLocale] = i18n.localizedPath(supportedLocale, canonicalPath)
    }

    alternates.current = locale

    return alternates
}

const resolveGuideContext = (data) => {
    const sections = Array.isArray(data.localizedUserGuideSections)
        ? data.localizedUserGuideSections
        : getLocalizedGuideSections(data)
    const entries = createGuideEntries(sections)
    const currentUrl = normalizeGuideUrl(data.page?.url)
    const currentIndex = entries.findIndex((entry) => normalizeGuideUrl(entry.item.url) === currentUrl)

    if (currentIndex === -1) {
        return null
    }

    const currentEntry = entries[currentIndex]
    const locale = getGuideLocale(data)
    const guideHomeUrl = i18n.localizedPath(locale, '/user-guide/')
    const isOverview = normalizeGuideUrl(currentEntry.item.url) === guideHomeUrl
    const sectionHomeUrl = currentEntry.section.items[0]?.url
    const sectionHomeIsCurrent = sectionHomeUrl && normalizeGuideUrl(sectionHomeUrl) === currentUrl
    const breadcrumbs = isOverview
        ? [
            {
                label:data.uiLabels?.userGuide ?? 'User guide',
                icon: 'book-open',
            },
        ]
        : [
            {
                label:data.uiLabels?.userGuide ?? 'User guide',
                url:  guideHomeUrl,
                icon: 'book-open',
            },
            {
                label:currentEntry.section.label,
                url:  sectionHomeIsCurrent ? undefined : sectionHomeUrl,
                icon: currentEntry.section.icon,
            },
            {
                label:currentEntry.item.label,
                icon: currentEntry.item.icon,
            },
        ]

    return {
        current: {
            label:       currentEntry.item.label,
            url:         currentEntry.item.url,
            summary:     currentEntry.item.summary,
            icon:        currentEntry.item.icon,
            sectionLabel:currentEntry.section.label,
        },
        section: {
            label:  currentEntry.section.label,
            summary:currentEntry.section.summary,
            icon:   currentEntry.section.icon,
        },
        sectionItems: currentEntry.section.items.map((item) => ({
            ...item,
            isCurrent: normalizeGuideUrl(item.url) === currentUrl,
        })),
        breadcrumbs,
        pagination: {
            previous:createPaginationItem(entries[currentIndex - 1]),
            next:    createPaginationItem(entries[currentIndex + 1]),
        },
    }
}

export default {
    layout:    'layouts/page.html',
    pageClass: 'guide-page',
    guidePage: true,
    eleventyComputed: {
        locale:                    getGuideLocale,
        localizedUserGuideSections:getLocalizedGuideSections,
        localizedNavigation:       (data) => i18n.navigation[getGuideLocale(data)] ?? i18n.navigation.en,
        localizedHeaderLinks:      (data) => i18n.headerLinks[getGuideLocale(data)] ?? i18n.headerLinks.en,
        localizedLegalLinks:       (data) => i18n.legalLinks[getGuideLocale(data)] ?? i18n.legalLinks.en,
        uiLabels:                  (data) => i18n.ui[getGuideLocale(data)] ?? i18n.ui.en,
        alternateLocales:          getAlternateLocales,
        guideContext:              resolveGuideContext,
        pageCta:                   (data) => {
            const locale = getGuideLocale(data)

            if (locale === 'fr') {
                return {
                    eyebrow:'Utiliser Studio',
                    title:  'Gardez le guide ouvert pendant la préparation d\'un parcours, le réglage de la scène et l\'export.',
                    body:   'Le guide suit l\'ordre normal d\'une session: ouvrir, importer, choisir les couches, modifier, styliser, composer, exporter et dépanner.',
                    actions:[
                        {
                            label:     'Ouvrir Studio',
                            href:      'https://studio.lgs1920.fr',
                            appearance:'filled',
                            variant:   'brand',
                            external:  true,
                            icon:      {
                                name:   'clapperboard-play',
                                variant:'regular',
                            },
                        },
                        {
                            label:     'Contact',
                            href:      'mailto:contact@lgs1920.fr',
                            appearance:'outlined',
                            variant:   'brand',
                            icon:      {
                                name:   'envelope',
                                variant:'regular',
                            },
                        },
                    ],
                }
            }

            return {
                eyebrow:'Use the Studio',
                title:  'Keep the guide open while you prepare a journey, tune the scene, and export the output.',
                body:   'The guide follows the same order as a typical session: open, import, choose layers, edit, style, compose, export, and troubleshoot.',
                actions:[
                    {
                        label:     'Open Studio',
                        href:      'https://studio.lgs1920.fr',
                        appearance:'filled',
                        variant:   'brand',
                        external:  true,
                        icon:      {
                            name:   'clapperboard-play',
                            variant:'regular',
                        },
                    },
                    {
                        label:     'Contact',
                        href:      'mailto:contact@lgs1920.fr',
                        appearance:'outlined',
                        variant:   'brand',
                        icon:      {
                            name:   'envelope',
                            variant:'regular',
                        },
                    },
                ],
            }
        },
    },
}
