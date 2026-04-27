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
            swatch:'var(--wa-color-orange)',
        },
        {
            value: 'red',
            label: 'Red',
            swatch:'var(--wa-color-red-40)',
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
    headerLinks: [
        {
            label:   'Open Studio',
            url:     'https://studio.lgs1920.fr',
            icon:    'arrow-up-right-from-square',
            variant: 'solid',
            external:true,
        },
        {
            label:   'Open GitHub repository',
            url:     'https://github.com/lgs1920/studio',
            icon:    'github',
            family:  'brands',
            external:true,
        },
    ],
    asideLinks: [
        {
            label:   'Launch Studio',
            url:     'https://studio.lgs1920.fr',
            icon:    'arrow-up-right-from-square',
            variant: 'solid',
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
            variant: 'solid',
        },
    ],
    legalLinks: [
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
