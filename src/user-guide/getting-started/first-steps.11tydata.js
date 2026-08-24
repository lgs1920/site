import i18n from '../../_data/i18n.js'
import {getGuidePageContent} from '../../_data/guide-pages.js'

const getLocale = (data) => i18n.getLocaleFromUrl(data.page?.url)
const getContent = (data) => {
    const locale = getLocale(data)

    return getGuidePageContent('/user-guide/getting-started/first-steps/', locale)
}

export default {
    layout: 'layouts/page.html',
    eleventyComputed: {
        title:       (data) => getContent(data).title,
        description: (data) => getContent(data).description,
        hero:        (data) => getContent(data).hero,
        sectionNav:  (data) => getContent(data).sectionNav,
    },
}
