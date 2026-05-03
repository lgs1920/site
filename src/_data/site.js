const copyrightStartYear = 2026
const currentYear = new Date().getFullYear()
const copyrightYears = currentYear > copyrightStartYear
    ? `${copyrightStartYear}-${currentYear}`
    : `${copyrightStartYear}`

export default {
    name:        'LGS1920 Studio',
    lang:        'en',
    tagline:     'Replay the World Outdoors',
    description: 'Local-first geospatial editing for journeys, tracks, POIs, camera workflows, and media capture.',
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
            swatch:'var(--wa-color-green-90)',
        },
        {
            value: 'gray',
            label: 'Gray',
            swatch:'var(--wa-color-gray)',
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
    userGuideNavigation: [
        {
            label:  'Overview',
            url:    '/user-guide/',
            summary:'Presentation and quick access',
        },
        {
            label:  'First steps',
            url:    '/user-guide/getting-started/first-steps/',
            summary:'Open and read the workspace',
        },
        {
            label:  'Import source data',
            url:    '/user-guide/getting-started/import-source-data/',
            summary:'Load GeoJSON, GPX, or KML',
        },
        {
            label:  'Journeys and tracks',
            url:    '/user-guide/workflows/journeys-and-tracks/',
            summary:'Edit route presentation',
        },
        {
            label:  'Points of interest',
            url:    '/user-guide/workflows/points-of-interest/',
            summary:'Manage markers and places',
        },
        {
            label:  'Scene and camera',
            url:    '/user-guide/workflows/scene-and-camera/',
            summary:'Focus, orbit, and panorama',
        },
        {
            label:  'Widgets and overlays',
            url:    '/user-guide/workflows/widgets-and-overlays/',
            summary:'Compose visible context',
        },
        {
            label:  'Snapshots and video',
            url:    '/user-guide/workflows/snapshots-and-video/',
            summary:'Capture final output',
        },
        {
            label:  'Objects',
            url:    '/user-guide/reference/objects/',
            summary:'Journey, track, POI, widget',
        },
        {
            label:  'Actions',
            url:    '/user-guide/reference/actions/',
            summary:'Commands and outcomes',
        },
    ],
    asideLinks: [
        {
            label:   'Launch Studio',
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
