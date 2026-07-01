import { legalDocs, renderLegalSection } from '../_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:      'layouts/page.html',
            permalink:   '/fr/licensing/index.html',
            title:       'Licences',
            description: 'Licence publique et références légales pour LGS1920 Studio.',
            pageClass:   'legal-page',
            hero:        {
                video:      false,
                badge:      'Légal',
                kicker:     'Licences',
                title:      'Comprendre la licence publique et les références légales.',
                lead:       'Cette page reflète le résumé de licence maintenu dans le dépôt principal Studio.',
                highlights: [
                    {
                        label:  'PolyForm Noncommercial 1.0.0',
                        icon:   'scale-balanced',
                        variant:'regular',
                    },
                    {
                        label:  'Licence commerciale disponible',
                        icon:   'briefcase',
                        variant:'regular',
                    },
                    {
                        label:  'Texte canonique issu de studio',
                        icon:   'file-lines',
                        variant:'regular',
                    },
                ],
            },
            sectionNav:  legalDocs.licensing.sectionNav,
            pageCta:     {
                eyebrow:'Conditions d\'usage',
                title:  'Besoin d\'autres conditions d\'usage ?',
                body:   'Les questions sur les conditions d\'usage et les contributions sont traitées directement par LGS1920.',
                actions:[
                    {
                        label: 'Contact',
                        href:  'mailto:contact@lgs1920.fr',
                        variant:'brand',
                        icon:  {
                            name:   'envelope',
                            variant:'regular',
                        },
                    },
                    {
                        label:     'Ouvrir le dépôt Studio',
                        href:      'https://github.com/lgs1920/studio',
                        appearance:'outlined',
                        external:  true,
                        icon:      {
                            family:'brands',
                            name:  'github',
                        },
                    },
                ],
            },
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.licensing,
            intro:    'Le résumé légal ci-dessous est récupéré au build depuis le dépôt principal Studio afin que le site public reste aligné sur la documentation source.',
            labels:   {
                sourceLabel:'Source',
            },
        })
    }
}
