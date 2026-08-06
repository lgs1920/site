import i18n from './i18n.js'
import pages from './pages/index.js'

const copyrightStartYear = 2026
const currentYear = new Date().getFullYear()
const copyrightYears = currentYear > copyrightStartYear
    ? `${copyrightStartYear}-${currentYear}`
    : `${copyrightStartYear}`

const userGuideSections = i18n.userGuideSections.en

const userGuideNavigation = userGuideSections.flatMap((section) => section.items.map((item) => ({
    ...item,
    sectionLabel: section.label,
})))

const countApiUrl = process.env.LGS1920_COUNT_API_URL || 'https://api.lgs1920.fr'
const registrationApiUrl = process.env.LGS1920_LAUNCH_REGISTRATION_API_URL
    || process.env.LGS1920_REGISTRATION_API_URL
    || countApiUrl
const contactApiUrl = process.env.LGS1920_CONTACT_API_URL || countApiUrl
const contactTarget = process.env.LGS1920_CONTACT_TARGET || 'f7a91c'

export default {
    name:        'LGS1920 Studio',
    lang:        'en',
    tagline:     'Shape route data in the browser',
    description: 'Local-first route editing for journeys, tracks, POIs, camera views, reports, and media capture.',
    url:         'https://lgs1920.fr',
    appUrl:      'https://studio.lgs1920.fr',
    countApiUrl,
    registrationApiUrl,
    contactApiUrl,
    contactTarget,
    repoUrl:     'https://github.com/lgs1920/studio',
    contactEmail:'studio@lgs1920.fr',
    footerNote:  `LGS1920 ${copyrightYears} - GNU AGPL v3 or later`,
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
            swatch:'rgb(175, 218, 188)',
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
    navigation: i18n.navigation.en,
    headerLinks: i18n.headerLinks.en,
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
            url:     '/contact/',
            icon:    'envelope',
            variant: 'regular',
        },
    ],
    legalLinks: i18n.legalLinks.en,
    ui:         i18n.ui.en,
    pages,
}
