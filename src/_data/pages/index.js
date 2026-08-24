import i18n from '../i18n.js'
import { getGuidePageDefinition } from '../guide-pages.js'
import home from './home.js'
import studioPresentation from './studio-presentation.js'
import studioRegistration from './studio-registration.js'
import registration from './registration.js'
import confirmRegistration from './confirm-registration.js'
import revokeRegistration from './revoke-registration.js'
import contact from './contact.js'
import faq from './faq.js'
import stats from './stats.js'
import legal from './legal.js'
import changelog from './changelog.js'
import credits from './credits.js'

const pageDefinitionsByPath = {
    '/':                              home,
    '/studio/':                       studioPresentation,
    '/registration/studio/':          studioRegistration,
    '/faq/':                          faq,
    '/contact/':                      contact,
    '/registration/':                 registration,
    '/registration/confirm/':         confirmRegistration,
    '/registration/revoke/':          revokeRegistration,
    '/stats/':                        stats,
    '/changelog/':                    changelog,
    '/licensing/':                    legal.licensing,
    '/license/':                      legal.license,
    '/contributor-license-agreement/':legal.cla,
    '/dependencies/':                 legal.dependencies,
    '/credits/':                       credits.general,
    '/credits/open-source/':           credits.openSource,
}

export const getPageDefinition = (url = '') => {
    const canonicalPath = i18n.getCanonicalPath(url)

    return getGuidePageDefinition(url)
        ?? pageDefinitionsByPath[canonicalPath]
        ?? (/^\/changelog\/page\/\d+\/$/.test(canonicalPath) ? changelog : null)
}

export default {
    home,
    studioPresentation,
    studioRegistration,
    contact,
    registration,
    confirmRegistration,
    revokeRegistration,
    faq,
    legal,
    credits,
    changelog,
    stats,
    byPath: getPageDefinition,
}
