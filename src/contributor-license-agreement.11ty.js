import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:     'layouts/page.html',
            permalink:  '/contributor-license-agreement/index.html',
            title:      'Contributor License Agreement',
            description:'Terms that apply to code and documentation contributions proposed to LGS1920 Studio.',
            pageClass:  'legal-page',
            hero:       {
                video:  false,
                badge:  'Legal',
                kicker: 'Contributions',
                title:  'Review the Contributor License Agreement.',
                lead:   'Contributors must accept these terms before their changes can be merged into the main Studio repository.',
            },
            sectionNav: legalDocs.cla.sectionNav,
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.cla,
            intro:    'The CLA below is sourced at build time from the main studio repository to keep contribution terms in sync.',
        })
    }
}
