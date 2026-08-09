import i18n from '../i18n.js'
import { getGuidePageDefinition } from '../guide-pages.js'
import home from './home.js'
import registration from './registration.js'
import revokeRegistration from './revoke-registration.js'
import contact from './contact.js'
import faq from './faq.js'
import stats from './stats.js'
import legal from './legal.js'
import changelog from './changelog.js'

const pageDefinitionsByPath = {
    '/':                              home,
    '/faq/':                          faq,
    '/contact/':                      contact,
    '/registration/':                 registration,
    '/registration/revoke/':          revokeRegistration,
    '/stats/':                        stats,
    '/changelog/':                    changelog,
    '/licensing/':                    legal.licensing,
    '/license/':                      legal.license,
    '/contributor-license-agreement/':legal.cla,
    '/dependencies/':                 legal.dependencies,
}

export const getPageDefinition = (url = '') => {
    const canonicalPath = i18n.getCanonicalPath(url)

    return getGuidePageDefinition(url)
        ?? pageDefinitionsByPath[canonicalPath]
        ?? (/^\/changelog\/page\/\d+\/$/.test(canonicalPath) ? changelog : null)
}

export default {
    home,
    contact,
    registration,
    revokeRegistration,
    faq,
    legal,
    changelog,
    stats,
    byPath: getPageDefinition,
}
