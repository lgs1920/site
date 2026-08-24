import {loadLocalizedPageContent} from '../../_lib/load-page-content.js'

export default {
    layout: 'layouts/page.html',
    path:   '/faq/',
    ...loadLocalizedPageContent('faq'),
}
