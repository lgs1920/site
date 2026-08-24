import {loadPageContent} from '../../_lib/load-page-content.js'

const loadLegalPage = (pageName, metadata) => ({
    ...metadata,
    en: loadPageContent(`../_content/legal/${pageName}/en/page.json`),
    fr: loadPageContent(`../_content/legal/${pageName}/fr/page.json`),
})

export default {
    licensing: loadLegalPage('licensing', {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/licensing/',
    }),
    license: loadLegalPage('license', {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/license/',
    }),
    cla: loadLegalPage('cla', {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/contributor-license-agreement/',
    }),
    dependencies: loadLegalPage('dependencies', {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/dependencies/',
    }),
}
