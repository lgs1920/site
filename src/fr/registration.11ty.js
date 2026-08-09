import registration from '../_data/pages/registration.js'
import { getGeneratedPageData } from '../_lib/page-data.js'
import { renderLaunchRegistrationPage } from '../_lib/launch-registration-page.js'

const locale = 'fr'
const pageContent = registration[locale]

export default class {
    data() {
        return getGeneratedPageData(registration, locale, {
            sectionNav: pageContent.sectionNav,
        })
    }

    render(data) {
        return renderLaunchRegistrationPage({...pageContent, locale, logoMarkup: data.studioLogoHorizontalMarkup})
    }
}
