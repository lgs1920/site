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

const resolveGuideContext = (data) => {
    const sections = data.site?.userGuideSections ?? []
    const entries = createGuideEntries(sections)
    const currentUrl = normalizeGuideUrl(data.page?.url)
    const currentIndex = entries.findIndex((entry) => normalizeGuideUrl(entry.item.url) === currentUrl)

    if (currentIndex === -1) {
        return null
    }

    const currentEntry = entries[currentIndex]
    const isOverview = normalizeGuideUrl(currentEntry.item.url) === '/user-guide/'
    const sectionHomeUrl = currentEntry.section.items[0]?.url
    const sectionHomeIsCurrent = sectionHomeUrl && normalizeGuideUrl(sectionHomeUrl) === currentUrl
    const breadcrumbs = isOverview
        ? [
            {
                label:'User guide',
                icon: 'book-open',
            },
        ]
        : [
            {
                label:'User guide',
                url:  '/user-guide/',
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
        guideContext: resolveGuideContext,
    },
    pageCta:   {
        eyebrow:'Use the Studio',
        title:  'Keep the guide open while you prepare a journey, tune the scene, and capture the output.',
        body:   'The guide follows the same order as a typical user session: start, import, edit, compose, and export.',
        actions:[
            {
                label:     'Launch Studio',
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
    },
}
