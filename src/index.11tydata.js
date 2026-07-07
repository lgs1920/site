import pageTypes from './_data/page-types.js'
import i18n from './_data/i18n.js'

const getLocale = (data) => i18n.getLocaleFromUrl(data.page?.url)
const getContent = (data) => pageTypes.home[getLocale(data)] ?? pageTypes.home.en

export default {
    layout: pageTypes.home.layout,
    eleventyComputed: {
        title:       (data) => getContent(data).title,
        description: (data) => getContent(data).description,
        hero:        (data) => getContent(data).hero,
        sectionNav:  (data) => getContent(data).sectionNav,
        pageCta:     (data) => getContent(data).pageCta,
    },
}
