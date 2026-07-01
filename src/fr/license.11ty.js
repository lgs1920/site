import { legalDocs, renderLegalSection } from '../_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:     'layouts/page.html',
            permalink:  '/fr/license/index.html',
            title:      'Licence Complète',
            description:'Texte complet PolyForm Noncommercial 1.0.0 utilisé pour la version publique de LGS1920 Studio.',
            pageClass:  'legal-page',
            hero:       {
                video:  false,
                badge:  'Légal',
                kicker: 'Licence complète',
                title:  'Lire le texte complet de PolyForm Noncommercial 1.0.0.',
                lead:   'Il s\'agit du texte complet de licence publique miroir depuis le dépôt principal Studio.',
            },
            sectionNav: legalDocs.license.sectionNav,
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.license,
            intro:    'Le texte de licence ci-dessous est rendu directement depuis le Markdown canonique conservé dans le dépôt Studio.',
            labels:   {
                sourceLabel:'Source',
            },
        })
    }
}
