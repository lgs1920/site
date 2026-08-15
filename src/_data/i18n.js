import {guidePages} from './guide-pages.js'

const defaultLocale = 'en'

const supportedLocales = ['en', 'fr']

const localeOptions = [
    {
        code:   'en',
        prefix: '',
        label:  'English',
        short:  'EN',
        ogLocale:'en_US',
        flagUrl:'/assets/flags/gb.svg',
    },
    {
        code:   'fr',
        prefix: '/fr',
        label:  'Français',
        short:  'FR',
        ogLocale:'fr_FR',
        flagUrl:'/assets/flags/fr.svg',
    },
]

const localeLabels = Object.fromEntries(localeOptions.map((option) => [option.code, option.short]))
const localeMeta = Object.fromEntries(localeOptions.map((option) => [option.code, option]))

const site = {
    en: {
        tagline:    'Shape route data in the browser',
        description:'Local-first route editing for journeys, tracks, POIs, camera views, reports, and media capture.',
    },
    fr: {
        tagline:    'Façonner les parcours dans le navigateur',
        description:'Édition de parcours locale pour trajets, traces, POI, vues caméra, rapports et captures média.',
    },
}

const translatedSitePaths = [
    '/',
    '/changelog/',
    '/licensing/',
    '/license/',
    '/contributor-license-agreement/',
    '/dependencies/',
    '/faq/',
    '/contact/',
    '/registration/',
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

const translatedPaths = new Set([
    ...translatedSitePaths,
    ...Object.keys(guidePages),
])

const guideItemDefinitions = [
    {
        key:     'overview',
        path:    '/user-guide/',
        icon:    'book-sparkles',
        label:   {
            en:'Overview',
            fr:'Vue d\'ensemble',
        },
        summary: {
            en:'What the guide covers',
            fr:'Ce que couvre le guide',
        },
    },
    {
        key:     'first-steps',
        path:    '/user-guide/getting-started/first-steps/',
        icon:    'book-open-lines',
        label:   {
            en:'Quick guide',
            fr:'Guide rapide',
        },
        summary: {
            en:'Get started with Studio',
            fr:'Premiers pas dans Studio',
        },
    },
    {
        key:     'import-source-data',
        path:    '/user-guide/getting-started/import-source-data/',
        icon:    'file-import',
        label:   {
            en:'Import a route',
            fr:'Importer un parcours',
        },
        summary: {
            en:'Load GeoJSON, GPX, or KML',
            fr:'Charger du GeoJSON, GPX ou KML',
        },
    },
    {
        key:     'use-map-layers',
        path:    '/user-guide/workflows/use-map-layers/',
        icon:    'layer-group',
        label:   {
            en:'Use map layers',
            fr:'Utiliser les couches cartographiques',
        },
        summary: {
            en:'Change background, terrain, and tokens',
            fr:'Changer le fond, le terrain et les jetons',
        },
    },
    {
        key:     'journeys-and-tracks',
        path:    '/user-guide/workflows/journeys-and-tracks/',
        icon:    'route',
        label:   {
            en:'Edit journeys and tracks',
            fr:'Modifier les parcours et traces',
        },
        summary: {
            en:'Change metadata, route style, and visibility',
            fr:'Changer les métadonnées, le style et la visibilité',
        },
    },
    {
        key:     'points-of-interest',
        path:    '/user-guide/workflows/points-of-interest/',
        icon:    'map-location-dot',
        label:   {
            en:'Use POIs',
            fr:'Utiliser les POI',
        },
        summary: {
            en:'Manage markers and places',
            fr:'Gérer les repères et les lieux',
        },
    },
    {
        key:     'appearance',
        path:    '/user-guide/workflows/appearance/',
        icon:    'palette',
        label:   {
            en:'Change colors and appearance',
            fr:'Changer les couleurs et l\'apparence',
        },
        summary: {
            en:'Theme mode, brand color, and UI preferences',
            fr:'Mode, couleur de marque et préférences UI',
        },
    },
    {
        key:     'scene-and-camera',
        path:    '/user-guide/workflows/scene-and-camera/',
        icon:    'camera',
        label:   {
            en:'Set camera and scene',
            fr:'Régler la caméra et la scène',
        },
        summary: {
            en:'Focus, orbit, and panorama',
            fr:'Focus, rotation et panorama',
        },
    },
    {
        key:     'widgets-and-overlays',
        path:    '/user-guide/workflows/widgets-and-overlays/',
        icon:    'box',
        label:   {
            en:'Use widgets',
            fr:'Utiliser les widgets',
        },
        summary: {
            en:'Compose visible context',
            fr:'Composer le contexte visible',
        },
    },
    {
        key:     'export',
        path:    '/user-guide/workflows/export/',
        icon:    'video',
        label:   {
            en:'Export',
            fr:'Exporter',
        },
        summary: {
            en:'Snapshot, video, PDF, or HTML ZIP',
            fr:'Capture, vidéo, PDF ou ZIP HTML',
        },
    },
    {
        key:     'common-problems',
        path:    '/user-guide/workflows/common-problems/',
        icon:    'triangle-exclamation',
        label:   {
            en:'Fix common problems',
            fr:'Résoudre les problèmes courants',
        },
        summary: {
            en:'Tokens, import issues, widgets, startup',
            fr:'Jetons, imports, widgets, démarrage',
        },
    },
    {
        key:     'shortcuts',
        path:    '/user-guide/workflows/shortcuts/',
        icon:    'keyboard',
        label:   {
            en:'Shortcuts',
            fr:'Raccourcis',
        },
        summary: {
            en:'Keyboard and pointer shortcuts',
            fr:'Raccourcis clavier et pointeur',
        },
    },
]

const guideSubcategoryLabels = {
    overview: {
        en: 'Overview',
        fr: 'Vue d’ensemble',
    },
    'getting-started': {
        en: 'Getting started',
        fr: 'Démarrage',
    },
    workflows: {
        en: 'Workflows',
        fr: 'Flux de travail',
    },
    reference: {
        en: 'Reference',
        fr: 'Référence',
    },
}

const getGuideSubcategoryKey = (path = '') => path.split('/')[2] || 'overview'

const ui = {
    en: {
        home:                  'Home',
        skipToContent:         'Skip to content',
        openNavigation:        'Open navigation',
        openSearch:            'Search the site',
        searchDialogTitle:     'Search the site',
        searchSite:            'Search the site',
        searchPlaceholder:     'Search guides, FAQ, and changelog',
        searchHelpTitle:       'Lost?',
        searchHelpBody:        'Find a guide procedure, an FAQ answer, or a changelog entry. Try words like “widget”, “import”, or “camera”.',
        searchShortcutLabel:   'Shortcut',
        searchShortcutOr:      'or',
        searchPrompt:          'Type a search term to find a page.',
        searchLoading:         'Searching…',
        searchNoResults:       'No matching pages found.',
        searchResultCount:     'results',
        searchUnavailable:     'Search is temporarily unavailable.',
        searchCategoryHelp:    'Help',
        searchCategoryProject: 'Project',
        searchSubcategoryFaq:  'FAQ',
        searchSubcategoryChangelog:'Changelog',
        pages:                 'Pages',
        userGuide:             'User guide',
        guideNavigation:       'Guide navigation',
        onThisPage:            'On this page',
        heroRouteDescription:  'Animated route with three points of interest.',
        heroRoutePoiOne:       'Point of interest 01',
        heroRoutePoiTwo:       'Point of interest 02',
        heroRoutePoiThree:     'Point of interest 03',
        scrollToContent:       'Scroll to content',
        moveGuideAsideLeft:    'Move guide navigation left',
        moveGuideAsideRight:   'Move guide navigation right',
        chooseBrandAndSeason:  'Choose brand color and season theme',
        brandColor:            'Brand color',
        seasonTheme:           'Season theme',
        chooseColorMode:       'Choose color mode',
        toggleColorModeMenu:   'Toggle color mode menu',
        breadcrumb:            'Breadcrumb',
        userGuideBreadcrumb:   'User guide breadcrumb',
        section:               'Section',
        previous:              'Previous',
        next:                  'Next',
        userGuidePagination:   'User guide pagination',
        footerNavigation:      'Footer navigation',
        footerLegal:           'Legal and project links',
        heroBuildInfo:         'Hero build information',
        primaryNavigation:     'Primary navigation',
        useStudio:             'Use Studio',
        contact:               'Contact',
        openStudio:            'Open Studio',
        language:              'Language',
        chooseLanguage:        'Choose language',
        english:               'English',
        french:                'French',
        source:                'Source',
        sourceDirectory:       'Source directory',
        newer:                 'Newer',
        older:                 'Older',
        releaseNavigation:     'Release navigation',
        version:               'Version',
        paginationNavigation:  'Changelog pagination',
        previousPage:          'Previous page',
        nextPage:              'Next page',
        page:                  'Page',
        openGithubRepository:  'Open GitHub repository',
        changelog:             'Changelog',
        credits:               'Credits',
        stats:                 'Statistics',
        license:               'License',
        licensing:             'Licensing',
        fullLicense:           'Full license',
        cla:                   'CLA',
        builtWithEleventy:     'Built with Eleventy',
        backendRestartTitle:   'Trying to restart the backend...',
        backendRestartMessage: 'Restarting the backend...',
        backendRestartDetails: '',
        backendRestartAction:  'Restart backend',
        backendRetryAction:    'Retry connection',
        backendRestarting:     'Restarting the backend…',
        backendRetrying:       'Checking the backend…',
        backendRestartFailed:  'The backend could not be restarted. You can try again.',
        backendRetryFailed:    'The backend is still unavailable.',
        backendRestartContact: 'Contact Support',
    },
    fr: {
        home:                  'Accueil',
        skipToContent:         'Aller au contenu',
        openNavigation:        'Ouvrir la navigation',
        openSearch:            'Rechercher sur le site',
        searchDialogTitle:     'Rechercher sur le site',
        searchSite:            'Rechercher sur le site',
        searchPlaceholder:     'Rechercher dans le guide, la FAQ et l’historique',
        searchHelpTitle:       'Perdu ?',
        searchHelpBody:        'Retrouvez une procédure, une réponse dans la FAQ ou une note de version. Essayez « widget », « import » ou « caméra ».',
        searchShortcutLabel:   'Raccourci',
        searchShortcutOr:      'ou',
        searchPrompt:          'Saisissez un terme pour trouver une page.',
        searchLoading:         'Recherche en cours…',
        searchNoResults:       'Aucune page correspondante.',
        searchResultCount:     'résultats',
        searchUnavailable:     'La recherche est momentanément indisponible.',
        searchCategoryHelp:    'Aide',
        searchCategoryProject: 'Projet',
        searchSubcategoryFaq:  'FAQ',
        searchSubcategoryChangelog:'Historique',
        pages:                 'Pages',
        userGuide:             'Guide utilisateur',
        guideNavigation:       'Navigation du guide',
        onThisPage:            'Sur cette page',
        heroRouteDescription:  'Trace animée avec trois points d’intérêt.',
        heroRoutePoiOne:       'Point d’intérêt 01',
        heroRoutePoiTwo:       'Point d’intérêt 02',
        heroRoutePoiThree:     'Point d’intérêt 03',
        scrollToContent:       'Faire défiler vers le contenu',
        moveGuideAsideLeft:    'Déplacer la navigation du guide à gauche',
        moveGuideAsideRight:   'Déplacer la navigation du guide à droite',
        chooseBrandAndSeason:  'Choisir la couleur de marque et le thème saisonnier',
        brandColor:            'Couleur de marque',
        seasonTheme:           'Thème saisonnier',
        chooseColorMode:       'Choisir le mode de couleur',
        toggleColorModeMenu:   'Ouvrir le menu du mode de couleur',
        breadcrumb:            'Fil d\'Ariane',
        userGuideBreadcrumb:   'Fil d\'Ariane du guide utilisateur',
        section:               'Section',
        previous:              'Précédent',
        next:                  'Suivant',
        userGuidePagination:   'Pagination du guide utilisateur',
        footerNavigation:      'Navigation de pied de page',
        footerLegal:           'Liens légaux et projet',
        heroBuildInfo:         'Informations de build du hero',
        primaryNavigation:     'Navigation principale',
        useStudio:             'Utiliser Studio',
        contact:               'Contact',
        openStudio:            'Ouvrir Studio',
        language:              'Langue',
        chooseLanguage:        'Choisir la langue',
        english:               'Anglais',
        french:                'Français',
        source:                'Source',
        sourceDirectory:       'Dossier source',
        newer:                 'Plus récent',
        older:                 'Plus ancien',
        releaseNavigation:     'Navigation des versions',
        version:               'Version',
        paginationNavigation:  'Pagination de l’historique',
        previousPage:          'Page précédente',
        nextPage:              'Page suivante',
        page:                  'Page',
        openGithubRepository:  'Ouvrir le dépôt GitHub',
        changelog:             'Historique',
        credits:               'Credits',
        stats:                 'Statistiques',
        license:               'Licence',
        licensing:             'Licences',
        fullLicense:           'Licence complète',
        cla:                   'CLA',
        builtWithEleventy:     'Construit avec Eleventy',
        backendRestartTitle:   'Tentative de redémarrage du backend…',
        backendRestartMessage: 'Redémarrage du backend…',
        backendRestartDetails: '',
        backendRestartAction:  'Relancer le backend',
        backendRetryAction:    'Réessayer la connexion',
        backendRestarting:     'Redémarrage du backend…',
        backendRetrying:       'Vérification du backend…',
        backendRestartFailed:  'Le backend n’a pas pu être relancé. Vous pouvez réessayer.',
        backendRetryFailed:    'Le backend est toujours indisponible.',
        backendRestartContact: 'Contacter le support',
    },
}

const stripTrailingSlash = (value = '') => {
    if (value === '/') {
        return value
    }

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

    if (!normalizedUrl) {
        return '/'
    }

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

    if (!translatedPaths.has(canonicalPath) && !isPaginatedChangelogPath(canonicalPath)) {
        return null
    }

    const alternates = {current: getLocaleFromUrl(url)}

    for (const locale of supportedLocales) {
        alternates[locale] = localizedPath(locale, canonicalPath)
    }

    return alternates
}

const buildUserGuideSections = (locale = defaultLocale) => [
    {
        key:    'user-guide',
        label:  ui[locale].userGuide,
        icon:   'book-sparkles',
        summary:locale === 'fr'
            ? 'Étapes principales pour utiliser LGS1920 Studio'
            : 'Main steps for using LGS1920 Studio',
        items:  guideItemDefinitions.map((item) => {
            const subcategory = guideSubcategoryLabels[getGuideSubcategoryKey(item.path)] ?? guideSubcategoryLabels.overview

            return {
                key:         item.key,
                label:       item.label[locale],
                url:         localizedPath(locale, item.path),
                summary:     item.summary[locale],
                icon:        item.icon,
                category:    ui[locale].userGuide,
                subcategory: subcategory[locale],
            }
        }),
    },
]

const buildNavigation = (locale = defaultLocale) => [
    {
        label:ui[locale].home,
        url:  localizedPath(locale, '/'),
        icon: 'house',
    },
    {
        label:  ui[locale].userGuide,
        url:    localizedPath(locale, '/user-guide/'),
        icon:   'book-sparkles',
        variant:'regular',
    },
    {
        label:  ui[locale].changelog,
        url:    localizedPath(locale, '/changelog/'),
        icon:   'arrows-turn-to-dots',
        variant:'regular',
    },
    {
        label:  ui[locale].contact,
        url:    localizedPath(locale, '/contact/'),
        icon:   'envelope',
        variant:'regular',
    },
    {
        label:   ui[locale].openGithubRepository,
        url:     'https://github.com/lgs1920/studio',
        icon:    'github',
        family:  'brands',
        external:true,
    },
    {
        label:  ui[locale].license,
        icon:   'scale-balanced',
        variant:'regular',
        children: [
            {
                label:ui[locale].licensing,
                url:  localizedPath(locale, '/licensing/'),
            },
            {
                label:ui[locale].fullLicense,
                url:  localizedPath(locale, '/license/'),
            },
            {
                label:ui[locale].cla,
                url:  localizedPath(locale, '/contributor-license-agreement/'),
            },
        ],
    },
]

const buildHeaderLinks = (locale = defaultLocale) => [
    {
        label:   ui[locale].openStudio,
        url:     'https://studio.lgs1920.fr',
        icon:    'clapperboard-play',
        variant: 'regular',
        external:true,
    },
    {
        label:  ui[locale].userGuide,
        url:    localizedPath(locale, '/user-guide/'),
        icon:   'book-sparkles',
        variant:'regular',
    },
    {
        label:   ui[locale].openGithubRepository,
        url:     'https://github.com/lgs1920/studio',
        icon:    'github',
        family:  'brands',
        external:true,
    },
]

const buildLegalLinks = (locale = defaultLocale) => [
    {
        label:ui[locale].stats,
        url:  localizedPath(locale, '/stats/'),
        icon: 'chart-line',
    },
    {
        label:ui[locale].userGuide,
        url:  localizedPath(locale, '/user-guide/'),
        icon: 'book-sparkles',
    },
    {
        label:ui[locale].changelog,
        url:  localizedPath(locale, '/changelog/'),
        icon: 'arrows-turn-to-dots',
    },
    {
        label:   ui[locale].credits,
        url:     '/credits',
        icon:    'circle-info',
    },
    {
        label:ui[locale].licensing,
        url:  localizedPath(locale, '/licensing/'),
        icon: 'scale-balanced',
    },
    {
        label:ui[locale].fullLicense,
        url:  localizedPath(locale, '/license/'),
        icon: 'file-lines',
    },
    {
        label:ui[locale].cla,
        url:  localizedPath(locale, '/contributor-license-agreement/'),
        icon: 'handshake',
    },
]

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
    userGuideSections: {
        en:buildUserGuideSections('en'),
        fr:buildUserGuideSections('fr'),
    },
    navigation: {
        en:buildNavigation('en'),
        fr:buildNavigation('fr'),
    },
    headerLinks: {
        en:buildHeaderLinks('en'),
        fr:buildHeaderLinks('fr'),
    },
    legalLinks: {
        en:buildLegalLinks('en'),
        fr:buildLegalLinks('fr'),
    },
}
