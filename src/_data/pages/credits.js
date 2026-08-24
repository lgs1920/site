import {loadPageContent} from '../../_lib/load-page-content.js'

const loadCreditsPage = (pageName, metadata) => ({
    ...metadata,
    en: loadPageContent(`../_content/credits/${pageName}/en/page.json`),
})

export default {
    general: loadCreditsPage('general', {
        layout:   'layouts/page.html',
        pageClass:'legal-page credits-page',
        path:     '/credits/',
    }),
    openSource: loadCreditsPage('openSource', {
        layout:   'layouts/page.html',
        pageClass:'legal-page credits-page open-source-credits-page',
        path:     '/credits/open-source/',
    }),
}
