import i18n from './i18n.js'
import pages from './pages/index.js'
import {
    buildStudioBackendRestartUrl,
    buildStudioBackendUrl,
    readStudioServers,
} from '../_lib/studio-servers.js'

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

const deploymentPlatform = process.env.LGS1920_DEPLOY_PLATFORM || 'development'
const studioServers = readStudioServers(deploymentPlatform)
const configuredCountApiUrl = process.env.LGS1920_COUNT_API_URL
const studioBackendUrl = buildStudioBackendUrl(studioServers)
const localDevelopmentBackendUrl = deploymentPlatform === 'development'
    ? 'http://localhost:3333'
    : studioBackendUrl
const countApiUrl = configuredCountApiUrl
    || localDevelopmentBackendUrl
    || (deploymentPlatform === 'development' ? 'http://localhost:3333' : 'https://api.lgs1920.fr')
const backendApiUrl = process.env.LGS1920_BACKEND_API_URL || countApiUrl
const registrationApiUrl = process.env.LGS1920_LAUNCH_REGISTRATION_API_URL
    || process.env.LGS1920_REGISTRATION_API_URL
    || countApiUrl
const contactApiUrl = process.env.LGS1920_CONTACT_API_URL || countApiUrl
const contactTarget = process.env.LGS1920_CONTACT_TARGET || 'f7a91c'
const configuredBackendRestartUrl = process.env.LGS1920_BACKEND_RESTART_URL
const backendRestartUrl = deploymentPlatform === 'development'
    ? ''
    : configuredBackendRestartUrl === undefined
        ? buildStudioBackendRestartUrl(studioServers)
        : configuredBackendRestartUrl
const buildDate = process.env.LGS1920_BUILD_DATE || new Date().toISOString()
const version = process.env.LGS1920_SITE_VERSION || null

export default {
    name:        'LGS1920 Site',
    lang:        'en',
    tagline:     'Shape route data in the browser',
    description: 'Local-first route editing for journeys, tracks, POIs, camera views, reports, and media capture.',
    version,
    buildDate,
    url:         'https://lgs1920.fr',
    copyrightYears,
    appUrl:      'https://studio.lgs1920.fr',
    countApiUrl,
    backendApiUrl,
    backendRestartUrl,
    registrationApiUrl,
    contactApiUrl,
    contactTarget,
    repoUrl:     'https://github.com/lgs1920/studio',
    contactEmail:'studio@lgs1920.fr',
    footerNote:  `LGS1920 ${copyrightYears} - GNU AGPL v3 or later`,
    licenseName: 'GNU AGPL v3 or later',
    licenseUrl:  'https://www.gnu.org/licenses/agpl-3.0.html',
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
            swatch:'var(--wa-color-red)',
        },
        {
            value: 'pink',
            label: 'Pink',
            swatch:'var(--wa-color-pink)',
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
            swatch:'var(--wa-color-green)',
        },
        {
            value: 'brown',
            label: 'Brown',
            swatch:'color-mix(in oklab, var(--wa-color-orange) 62%, var(--wa-color-red) 38%)',
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
            url:     '/contact',
            icon:    'envelope',
            variant: 'regular',
        },
    ],
    legalLinks: i18n.legalLinks.en,
    ui:         i18n.ui.en,
    pages,
}
