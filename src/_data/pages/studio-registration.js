import studioPresentation from './studio-presentation.js'

const createRegistrationPresentation = (presentation) => ({
    ...presentation,
    hero: {
        ...presentation.hero,
        actions:        [],
        className:      'intro-hero registration-hero studio-presentation-minimal-hero',
        localeSwitcher:true,
    },
    pageCta: {
        ...presentation.pageCta,
        actions:[],
    },
})

const minimalStudioPresentation = {
    ...studioPresentation,
    hideMinimalFooterHomeLink:true,
    minimalChrome:             true,
    pageClass:                 'studio-presentation-page studio-presentation-minimal-page',
    path:                      '/registration/studio/',
    en:                        createRegistrationPresentation(studioPresentation.en),
    fr:                        createRegistrationPresentation(studioPresentation.fr),
}

export default minimalStudioPresentation
