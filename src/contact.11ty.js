import pageTypes, {getGeneratedPageData} from './_data/page-types.js'
import {renderContactPage} from './_lib/contact-page.js'

const locale = 'en'
const pageContent = pageTypes.contact[locale]

export default class {
    data() {
        return getGeneratedPageData(pageTypes.contact, locale, {
            sectionNav: pageContent.sectionNav,
        })
    }

    render() {
        return renderContactPage({...pageContent, locale})
    }
}
