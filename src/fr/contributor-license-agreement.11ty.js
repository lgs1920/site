import { legalDocs, renderLegalSection } from '../_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:     'layouts/page.html',
            permalink:  '/fr/contributor-license-agreement/index.html',
            title:      'Contributor License Agreement',
            description:'Conditions applicables aux contributions de code et de documentation proposées à LGS1920 Studio.',
            pageClass:  'legal-page',
            hero:       {
                video:  false,
                badge:  'Légal',
                kicker: 'Contributions',
                title:  'Relire le Contributor License Agreement.',
                lead:   'Les contributeurs doivent accepter ces conditions avant que leurs changements puissent être fusionnés dans le dépôt principal Studio.',
            },
            sectionNav: legalDocs.cla.sectionNav,
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.cla,
            intro:    'Le CLA ci-dessous est récupéré au build depuis le dépôt principal Studio afin de garder les conditions de contribution synchronisées.',
            labels:   {
                sourceLabel:'Source',
            },
        })
    }
}
