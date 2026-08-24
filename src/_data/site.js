import {loadPageContent} from '../_lib/load-page-content.js'
import i18n from './i18n.js'
import pages from './pages/index.js'
import {
    buildStudioBackendRestartUrl,
    buildStudioBackendUrl,
    readStudioServers,
} from '../_lib/studio-servers.js'

const staticSite = loadPageContent('../_content/site/en/site.json')
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
    ...staticSite,
    version,
    buildDate,
    copyrightYears,
    countApiUrl,
    backendApiUrl,
    backendRestartUrl,
    registrationApiUrl,
    contactApiUrl,
    contactTarget,
    footerNote: staticSite.footerNoteTemplate.replace('{{copyrightYears}}', copyrightYears),
    navigation: i18n.navigation.en,
    headerLinks: i18n.headerLinks.en,
    userGuideSections,
    userGuideNavigation,
    legalLinks: i18n.legalLinks.en,
    ui: i18n.ui.en,
    pages,
}
