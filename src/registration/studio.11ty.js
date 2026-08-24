import studioPresentation from '../_data/pages/studio-registration.js'
import {getGeneratedPageData} from '../_lib/page-data.js'
import {renderStudioPresentationPage} from '../_lib/studio-presentation-page.js'

const locale = 'en'
const pageContent = studioPresentation[locale]

export default class {
    data() {
        return getGeneratedPageData(studioPresentation, locale, {
            sectionNav:pageContent.sectionNav,
        })
    }

    render() {
        return renderStudioPresentationPage(pageContent)
    }
}
