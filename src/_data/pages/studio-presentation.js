import {loadLocalizedPageContent} from '../../_lib/load-page-content.js'

export default {
    layout:   'layouts/page.html',
    pageClass:'studio-presentation-page',
    path:     '/studio/',
    ...loadLocalizedPageContent('studio'),
}
