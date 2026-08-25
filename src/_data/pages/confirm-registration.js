import {loadLocalizedPageContent} from '../../_lib/load-page-content.js'

export default {
    layout:        'layouts/page.html',
    minimalChrome: true,
    path:          '/registration/confirm/',
    ...loadLocalizedPageContent('confirm-registration'),
}
