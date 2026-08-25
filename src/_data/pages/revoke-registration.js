import {loadLocalizedPageContent} from '../../_lib/load-page-content.js'

export default {
    layout:        'layouts/page.html',
    minimalChrome: true,
    path:          '/registration/revoke/',
    ...loadLocalizedPageContent('revoke-registration'),
}
