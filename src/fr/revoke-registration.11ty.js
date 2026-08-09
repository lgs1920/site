import revokeRegistration from '../_data/pages/revoke-registration.js'
import {getGeneratedPageData} from '../_lib/page-data.js'
import {renderRevokeRegistrationPage} from '../_lib/revoke-registration-page.js'

const locale = 'fr'
const pageContent = revokeRegistration[locale]

export default class {
    data() {
        return getGeneratedPageData(revokeRegistration, locale)
    }

    render(data) {
        return renderRevokeRegistrationPage({...pageContent, locale, logoMarkup: data.studioLogoHorizontalMarkup})
    }
}
