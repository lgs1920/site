import {loadLocalizedPageContent} from '../../_lib/load-page-content.js'

export default {
    layout:         'layouts/page.html',
    minimalChrome:  true,
    requiresBackend:true,
    pageClass:      'launch-registration-page',
    path:            '/registration/',
    ...loadLocalizedPageContent('registration'),
}
