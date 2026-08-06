import home from './_data/pages/home.js'
import i18n from './_data/i18n.js'

const getLocale = (data) => i18n.getLocaleFromUrl(data.page?.url)
const getContent = (data) => home[getLocale(data)] ?? home.en

export default {
    layout: home.layout,
    eleventyComputed: {
        title:       (data) => getContent(data).title,
        description: (data) => getContent(data).description,
        hero:        (data) => getContent(data).hero,
        sectionNav:  (data) => getContent(data).sectionNav,
        pageCta:     (data) => getContent(data).pageCta,
    },
}
