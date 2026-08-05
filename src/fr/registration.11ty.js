import pageTypes, { getGeneratedPageData } from '../_data/page-types.js'
import { renderLaunchRegistrationPage } from '../_lib/launch-registration-page.js'

const locale = 'fr'
const pageContent = pageTypes.launchRegistration[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.launchRegistration, locale, {
            sectionNav: pageContent.sectionNav,
        })
    }

    render(data) {
        return renderLaunchRegistrationPage({...pageContent, locale, logoMarkup: data.studioLogoHorizontalMarkup})
    }
}
