import i18n from '../../_data/i18n.js'
import pageTypes from '../../_data/page-types.js'

const getLocale = (data) => i18n.getLocaleFromUrl(data.page?.url)
const getContent = (data) => {
    const locale = getLocale(data)

    return pageTypes.userGuide.gettingStarted.firstSteps[locale] ?? pageTypes.userGuide.gettingStarted.firstSteps.en
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
