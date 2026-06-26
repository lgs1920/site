const copyrightStartYear = 2026
const currentYear = new Date().getFullYear()
const copyrightYears = currentYear > copyrightStartYear
    ? `${copyrightStartYear}-${currentYear}`
    : `${copyrightStartYear}`

const userGuideSections = [
    {
        label:  'Presentation',
        icon:   'book-open',
        summary:'General overview and quick access',
        items:  [
            {
                label:  'Overview',
                url:    '/user-guide/',
                summary:'Presentation and quick access',
                icon:   'book-open',
            },
        ],
    },
    {
        label:  'Getting started',
        icon:   'circle-play',
        summary:'Open the Studio and load route data',
        items:  [
            {
                label:  'First steps',
                url:    '/user-guide/getting-started/first-steps/',
                summary:'Open the workspace and orient yourself',
                icon:   'circle-play',
            },
            {
                label:  'Import source data',
                url:    '/user-guide/getting-started/import-source-data/',
                summary:'Load GeoJSON, GPX, or KML',
                icon:   'file-import',
            },
        ],
    },
    {
        label:  'Workflows',
        icon:   'route',
        summary:'Prepare, edit, and export a route story',
        items:  [
            {
                label:  'Journeys and tracks',
                url:    '/user-guide/workflows/journeys-and-tracks/',
                summary:'Edit route presentation',
                icon:   'route',
            },
            {
                label:  'Points of interest',
                url:    '/user-guide/workflows/points-of-interest/',
                summary:'Manage markers and places',
                icon:   'map-location-dot',
            },
            {
                label:  'Scene and camera',
                url:    '/user-guide/workflows/scene-and-camera/',
                summary:'Focus, orbit, and panorama',
                icon:   'camera',
            },
            {
                label:  'Widgets and overlays',
                url:    '/user-guide/workflows/widgets-and-overlays/',
                summary:'Compose visible context',
                icon:   'box',
            },
            {
                label:  'Journey reports',
                url:    '/user-guide/workflows/journey-reports/',
                summary:'Export PDF and HTML reports',
                icon:   'file-pdf',
            },
            {
                label:  'Snapshots and video',
                url:    '/user-guide/workflows/snapshots-and-video/',
                summary:'Capture final output',
                icon:   'video',
            },
        ],
    },
    {
        label:  'Reference',
        icon:   'diagram-project',
        summary:'Objects and actions used in the Studio',
        items:  [
            {
                label:  'Objects',
                url:    '/user-guide/reference/objects/',
                summary:'Journey, track, POI, widget',
                icon:   'diagram-project',
            },
            {
                label:  'Actions',
                url:    '/user-guide/reference/actions/',
                summary:'Commands and outcomes',
                icon:   'list-check',
            },
        ],
    },
]

const userGuideNavigation = userGuideSections.flatMap((section) => section.items.map((item) => ({
    ...item,
    sectionLabel: section.label,
})))

export default {
    name:        'LGS1920 Studio',
    lang:        'en',
    tagline:     'Shape route data in the browser',
    description: 'Local-first route editing for journeys, tracks, POIs, camera views, reports, and media capture.',
    appUrl:      'https://studio.lgs1920.fr',
    repoUrl:     'https://github.com/lgs1920/studio',
    contactEmail:'contact@lgs1920.fr',
    footerNote:  `LGS1920 ${copyrightYears} - PolyForm Noncommercial 1.0.0`,
    buildLink:   {
        label:   'Built with Eleventy',
        short:   'Eleventy',
        url:     'https://www.11ty.dev/',
        icon:    '11ty',
        family:  'brands',
        external:true,
    },
    brandOptions: [
        {
            value: 'yellow',
            label: 'Yellow',
            swatch:'var(--wa-color-yellow)',
        },
        {
            value: 'orange',
            label: 'Orange',
            swatch:'var(--wa-color-orange-70)',
        },
        {
            value: 'red',
            label: 'Red',
            swatch:'var(--wa-color-red-60)',
        },
        {
            value: 'pink',
            label: 'Pink',
            swatch:'var(--wa-color-pink-70)',
        },
        {
            value: 'purple',
            label: 'Purple',
            swatch:'var(--wa-color-purple)',
        },
        {
            value: 'blue',
            label: 'Blue',
            swatch:'var(--wa-color-blue)',
        },
        {
            value: 'green',
            label: 'Green',
            swatch:'var(--wa-color-green-70)',
        },
        {
            value: 'brown',
            label: 'Brown',
            swatch:'color-mix(in oklab, var(--wa-color-orange-70) 62%, var(--wa-color-red-60) 38%)',
        },
        {
            value: 'gray',
            label: 'Gray',
            swatch:'var(--wa-color-gray)',
        },
    ],
    seasonOptions: [
        {
            value: 'spring',
            label: 'Spring',
            swatch:'#7bf1a8',
        },
        {
            value: 'summer',
            label: 'Summer',
            swatch:'var(--wa-color-green-60)',
        },
        {
            value: 'fall',
            label: 'Fall',
            swatch:'#c56e12',
        },
        {
            value: 'winter',
            label: 'Winter',
            swatch:'#dbeafe',
        },
    ],
    modeOptions: [
        {
            value: 'light',
            label: 'Light',
            icon:  'sun-bright',
        },
        {
            value: 'dark',
            label: 'Dark',
            icon:  'moon-stars',
        },
        {
            value: 'system',
            label: 'System',
            icon:  'desktop',
        },
    ],
    navigation: [
        {
            label:'Home',
            url:  '/',
            icon: 'house',
        },
        {
            label:  'User guide',
            url:    '/user-guide/',
            icon:   'book-open',
            variant:'regular',
        },
        {
            label:  'Changelog',
            url:    '/changelog/',
            icon:   'arrows-turn-to-dots',
            variant:'regular',
        },
        {
            label:  'License',
            icon:   'scale-balanced',
            variant:'regular',
            children: [
                {
                    label:'Licensing',
                    url:  '/licensing/',
                },
                {
                    label:'Full License',
                    url:  '/license/',
                },
                {
                    label:'CLA',
                    url:  '/contributor-license-agreement/',
                },
            ],
        },
    ],
    headerLinks: [
        {
            label:   'Open Studio',
            url:     'https://studio.lgs1920.fr',
            icon:    'clapperboard-play',
            variant: 'regular',
            external:true,
        },
        {
            label:  'User guide',
            url:    '/user-guide/',
            icon:   'book-open',
            variant:'regular',
        },
        {
            label:   'Open GitHub repository',
            url:     'https://github.com/lgs1920/studio',
            icon:    'github',
            family:  'brands',
            external:true,
        },
    ],
    userGuideSections,
    userGuideNavigation,
    asideLinks: [
        {
            label:   'Open Studio',
            url:     'https://studio.lgs1920.fr',
            icon:    'clapperboard-play',
            variant: 'regular',
            external:true,
        },
        {
            label:   'Main repository',
            url:     'https://github.com/lgs1920/studio',
            icon:    'github',
            family:  'brands',
            external:true,
        },
        {
            label:   'Contact',
            url:     'mailto:contact@lgs1920.fr',
            icon:    'envelope',
            variant: 'regular',
        },
    ],
    legalLinks: [
        {
            label:'User guide',
            url:  '/user-guide/',
        },
        {
            label:'Changelog',
            url:  '/changelog/',
        },
        {
            label:'Licensing',
            url:  '/licensing/',
        },
        {
            label:'Full license',
            url:  '/license/',
        },
        {
            label:'CLA',
            url:  '/contributor-license-agreement/',
        },
    ],
}
