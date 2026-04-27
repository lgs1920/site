import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:     'layouts/page.html',
            permalink:  '/license/index.html',
            title:      'Full License',
            description:'Full PolyForm Noncommercial 1.0.0 text used for the public version of LGS1920 Studio.',
            pageClass:  'legal-page',
            hero:       {
                video:  false,
                badge:  'Legal',
                kicker: 'Full license',
                title:  'Read the complete PolyForm Noncommercial 1.0.0 text.',
                lead:   'This is the full public license text mirrored from the main Studio repository.',
            },
            sectionNav: legalDocs.license.sectionNav,
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.license,
            intro:    'The license text below is rendered directly from the canonical Markdown kept in the studio repository.',
        })
    }
}
