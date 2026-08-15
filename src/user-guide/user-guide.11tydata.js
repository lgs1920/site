import i18n from '../_data/i18n.js'
import { getGuidePageContent } from '../_data/guide-pages.js'
import { getGuideTranslationReport } from '../_data/translation-status.js'

const GUIDE_CONTENT_ANCHOR_ID = 'guide-chapter'

const normalizeGuideUrl = (url = '') => {
    const normalizedUrl = url.split('#')[0].split('?')[0].replace(/index\.html$/, '')

    if (normalizedUrl.endsWith('/')) {
        return normalizedUrl
    }

    return `${normalizedUrl}/`
}

const createGuideEntries = (sections = []) => sections.flatMap((section) => section.items.map((item) => ({
    item,
    section,
})))

const getGuideContentAnchorId = (url = '', locale = i18n.defaultLocale) => {
    const pageContent = getGuidePageContent(url, locale)
    const firstSection = pageContent?.sectionNav?.[0]

    return firstSection?.id || GUIDE_CONTENT_ANCHOR_ID
}

const createGuideContentUrl = (url = '', locale = i18n.defaultLocale) => `${url.split('#')[0]}#${getGuideContentAnchorId(url, locale)}`

const createPaginationItem = (entry, locale) => {
    if (!entry) {
        return null
    }

    return {
        label:       entry.item.label,
        url:         entry.item.url,
        contentUrl:  createGuideContentUrl(entry.item.url, locale),
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
    const localizedGuidePaths = new Set(i18n.userGuideSections.en.flatMap((section) => section.items.map((item) => i18n.normalizeUrl(item.url))))

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
    const guideHomeUrl = i18n.normalizeUrl(i18n.localizedPath(locale, '/user-guide/'))
    const isOverview = normalizeGuideUrl(currentEntry.item.url) === guideHomeUrl
    const breadcrumbs = isOverview
        ? [
            {
                label:data.uiLabels.home,
                url:  i18n.localizedPath(locale, '/'),
                icon: 'house',
            },
        ]
        : [
            {
                label:data.uiLabels.home,
                url:  i18n.localizedPath(locale, '/'),
                icon: 'house',
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
            contentUrl:  createGuideContentUrl(currentEntry.item.url, locale),
            summary:     currentEntry.item.summary,
            icon:        currentEntry.item.icon,
            category:    currentEntry.item.category,
            subcategory: currentEntry.item.subcategory,
            sectionLabel:currentEntry.section.label,
            translations:getGuideTranslationReport(currentEntry.item.url),
        },
        section: {
            label:  currentEntry.section.label,
            summary:currentEntry.section.summary,
            icon:   currentEntry.section.icon,
        },
        tocSections: sections.map((section) => {
            const items = section.items.map((item) => ({
                ...item,
                contentUrl:createGuideContentUrl(item.url, locale),
                isCurrent: normalizeGuideUrl(item.url) === currentUrl,
            }))

            return {
                label:      section.label,
                summary:    section.summary,
                icon:       section.icon,
                items,
                isCurrent:  items.some((item) => item.isCurrent),
                isOpen:     true,
                firstUrl:   items[0]?.url,
            }
        }),
        sectionItems: currentEntry.section.items.map((item) => ({
            ...item,
            contentUrl:createGuideContentUrl(item.url, locale),
            isCurrent: normalizeGuideUrl(item.url) === currentUrl,
        })),
        breadcrumbs,
        pagination: {
            previous:createPaginationItem(entries[currentIndex - 1], locale),
            next:    createPaginationItem(entries[currentIndex + 1], locale),
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
        guideTranslationReport:    (data) => getGuideTranslationReport(data.page?.url),
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
                            href:      '/contact',
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
                        href:      '/fr/contact',
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
