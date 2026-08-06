import contact from './_data/pages/contact.js'
import {getGeneratedPageData} from './_lib/page-data.js'
import {renderContactPage} from './_lib/contact-page.js'

const locale = 'en'
const pageContent = contact[locale]

export default class {
    data() {
        return getGeneratedPageData(contact, locale, {
            sectionNav: pageContent.sectionNav,
        })
    }

    render() {
        return renderContactPage({...pageContent, locale})
    }
}
