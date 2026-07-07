const defaultLocale = 'en'

const supportedLocales = ['en', 'fr']

const localeOptions = [
    {
        code:   'en',
        label:  'English',
        short:  'EN',
        ogLocale:'en_US',
        flagUrl:'/assets/flags/gb.svg',
    },
    {
        code:   'fr',
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

const translatedPaths = new Set([
    '/',
    '/changelog/',
    '/licensing/',
    '/license/',
    '/contributor-license-agreement/',
    '/dependencies/',
    '/user-guide/',
    '/user-guide/getting-started/first-steps/',
    '/user-guide/getting-started/import-source-data/',
    '/user-guide/workflows/use-map-layers/',
    '/user-guide/workflows/journeys-and-tracks/',
    '/user-guide/workflows/points-of-interest/',
    '/user-guide/workflows/appearance/',
    '/user-guide/workflows/scene-and-camera/',
    '/user-guide/workflows/widgets-and-overlays/',
    '/user-guide/workflows/export/',
    '/user-guide/workflows/common-problems/',
    '/user-guide/workflows/shortcuts/',
    '/user-guide/workflows/journey-reports/',
    '/user-guide/workflows/snapshots-and-video/',
    '/user-guide/reference/actions/',
    '/user-guide/reference/objects/',
    '/user-guide/reference/studio-interface/',
    '/user-guide/reference/studio-interface/widgets/',
    '/user-guide/reference/studio-interface/drawers/flythrough/',
    '/user-guide/reference/studio-interface/drawers/information/',
    '/user-guide/reference/studio-interface/drawers/journey-editor/',
    '/user-guide/reference/studio-interface/drawers/journey-groups/',
    '/user-guide/reference/studio-interface/drawers/layers/',
    '/user-guide/reference/studio-interface/drawers/pois/',
    '/user-guide/reference/studio-interface/drawers/settings/',
    '/user-guide/reference/studio-interface/drawers/widget-management/',
    '/user-guide/reference/studio-interface/drawers/widgets-editor/',
    '/user-guide/reference/studio-interface/dialogs/backend-restart/',
    '/user-guide/reference/studio-interface/dialogs/cesium-token/',
    '/user-guide/reference/studio-interface/dialogs/confirm/',
    '/user-guide/reference/studio-interface/dialogs/geocoding/',
    '/user-guide/reference/studio-interface/dialogs/initial-error/',
    '/user-guide/reference/studio-interface/dialogs/journey-loader/',
    '/user-guide/reference/studio-interface/dialogs/layer-information/',
    '/user-guide/reference/studio-interface/dialogs/layer-token/',
    '/user-guide/reference/studio-interface/dialogs/profile-sync/',
    '/user-guide/reference/studio-interface/dialogs/pwa-update/',
    '/user-guide/reference/studio-interface/dialogs/support/',
    '/user-guide/reference/studio-interface/dialogs/video-download/',
    '/user-guide/reference/studio-interface/dialogs/widget-mount-error/',
])

const guideItemDefinitions = [
    {
        key:     'overview',
        path:    '/user-guide/',
        icon:    'book-open',
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
        icon:    'circle-play',
        label:   {
            en:'Start a session',
            fr:'Démarrer une session',
        },
        summary: {
            en:'Open the workspace',
            fr:'Ouvrir l\'espace de travail',
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

const ui = {
    en: {
        home:                  'Home',
        skipToContent:         'Skip to content',
        openNavigation:        'Open navigation',
        pages:                 'Pages',
        userGuide:             'User guide',
        onThisPage:            'On this page',
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
        openGithubRepository:  'Open GitHub repository',
        changelog:             'Changelog',
        license:               'License',
        licensing:             'Licensing',
        fullLicense:           'Full license',
        cla:                   'CLA',
        builtWithEleventy:     'Built with Eleventy',
    },
    fr: {
        home:                  'Accueil',
        skipToContent:         'Aller au contenu',
        openNavigation:        'Ouvrir la navigation',
        pages:                 'Pages',
        userGuide:             'Guide utilisateur',
        onThisPage:            'Sur cette page',
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
        openGithubRepository:  'Ouvrir le dépôt GitHub',
        changelog:             'Historique',
        license:               'Licence',
        licensing:             'Licences',
        fullLicense:           'Licence complète',
        cla:                   'CLA',
        builtWithEleventy:     'Construit avec Eleventy',
    },
}

const localizedPath = (locale, path) => locale === 'fr' ? `/fr${path}` : path

const getLocaleFromUrl = (url = '') => (url === '/fr' || url.startsWith('/fr/')) ? 'fr' : defaultLocale

const getCanonicalGuidePath = (url = '') => {
    if (url.startsWith('/fr/user-guide/')) {
        return url.replace(/^\/fr/, '')
    }

    return url
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

    if (normalizedUrl.startsWith('/fr/')) {
        return normalizedUrl.replace(/^\/fr/, '')
    }

    return normalizedUrl
}

const getAlternateLocales = (url = '') => {
    const canonicalPath = getCanonicalPath(url)

    if (!translatedPaths.has(canonicalPath)) {
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
        icon:   'book-open',
        summary:locale === 'fr'
            ? 'Étapes principales pour utiliser LGS1920 Studio'
            : 'Main steps for using LGS1920 Studio',
        items:  guideItemDefinitions.map((item) => ({
            key:     item.key,
            label:   item.label[locale],
            url:     localizedPath(locale, item.path),
            summary: item.summary[locale],
            icon:    item.icon,
        })),
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
        icon:   'book-open',
        variant:'regular',
    },
    {
        label:  ui[locale].changelog,
        url:    localizedPath(locale, '/changelog/'),
        icon:   'arrows-turn-to-dots',
        variant:'regular',
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
        icon:   'book-open',
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
        label:ui[locale].userGuide,
        url:  localizedPath(locale, '/user-guide/'),
    },
    {
        label:ui[locale].changelog,
        url:  localizedPath(locale, '/changelog/'),
    },
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
