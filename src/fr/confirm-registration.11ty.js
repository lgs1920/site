import confirmRegistration from '../_data/pages/confirm-registration.js'
import {getGeneratedPageData} from '../_lib/page-data.js'
import {renderConfirmRegistrationPage} from '../_lib/confirm-registration-page.js'

const locale = 'fr'
const pageContent = confirmRegistration[locale]

export default class {
    data() {
        return getGeneratedPageData(confirmRegistration, locale)
    }

    render(data) {
        return renderConfirmRegistrationPage({...pageContent, locale, logoMarkup: data.studioLogoHorizontalMarkup})
    }
}
