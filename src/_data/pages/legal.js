import { contactUrl, frenchContactUrl, repositoryUrl, studioUrl } from './shared.js'

const legal = {
    licensing: {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/licensing/',
        en:       {
            title:       'Licensing',
            description: 'Public license and legal references for LGS1920 Studio.',
            hero:        {
                video:     false,
                badge:     'Legal',
                kicker:    'Licensing',
                title:     'Read the public AGPL terms.',
                lead:      'This page mirrors the licensing summary maintained in the 1.0.0-beta.3 Studio branch.',
                highlights:[
                    {label:'AGPL v3 or later', icon:'scale-balanced', variant:'regular'},
                    {label:'Source text mirrored from studio', icon:'file-lines', variant:'regular'},
                    {label:'Network use requires source', icon:'network-wired', variant:'regular'},
                ],
            },
            intro:       'The legal summary below is pulled at build time from the 1.0.0-beta.3 Studio branch so the public site stays aligned with the source documentation.',
            pageCta:     {
                eyebrow:'Usage terms',
                title:  'Need other usage terms?',
                body:   'Usage-term questions and contribution questions are handled directly by LGS1920.',
                actions:[
                    {
                        label:  'Contact',
                        href:   contactUrl,
                        variant:'brand',
                        icon:   {name:'envelope', variant:'regular'},
                    },
                    {
                        label:     'Open Studio repo',
                        href:      repositoryUrl,
                        appearance:'outlined',
                        external:  true,
                        icon:      {family:'brands', name:'github'},
                    },
                ],
            },
        },
        fr: {
            title:       'Licences',
            description: 'Licence publique et références légales pour LGS1920 Studio.',
            hero:        {
                video:     false,
                badge:     'Légal',
                kicker:    'Licences',
                title:     'Lire les conditions publiques de l\'AGPL.',
                lead:      'Cette page reflète le résumé de licence maintenu dans la branche Studio 1.0.0-beta.3.',
                highlights:[
                    {label:'AGPL v3 ou ultérieure', icon:'scale-balanced', variant:'regular'},
                    {label:'Texte source synchronisé depuis studio', icon:'file-lines', variant:'regular'},
                    {label:'L\'usage réseau impose le partage du code source', icon:'network-wired', variant:'regular'},
                ],
            },
            intro:       'Le résumé légal ci-dessous est récupéré au build depuis la branche Studio 1.0.0-beta.3 afin que le site public reste aligné sur la documentation source.',
            pageCta:     {
                eyebrow:'Conditions d\'usage',
                title:  'Besoin d\'autres conditions d\'usage ?',
                body:   'Les questions sur les conditions d\'usage et les contributions sont traitées directement par LGS1920.',
                actions:[
                    {
                        label:  'Contact',
                        href:   frenchContactUrl,
                        variant:'brand',
                        icon:   {name:'envelope', variant:'regular'},
                    },
                    {
                        label:     'Ouvrir le dépôt Studio',
                        href:      repositoryUrl,
                        appearance:'outlined',
                        external:  true,
                        icon:      {family:'brands', name:'github'},
                    },
                ],
            },
        },
    },
    license: {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/license/',
        en:       {
            title:       'GNU AGPL v3 or later',
            description: 'Full GNU AGPL v3 or later text used for the public version of LGS1920 Studio.',
            hero:        {
                video: false,
                badge: 'Legal',
                kicker:'License',
                title: 'Read the complete AGPL text.',
                lead:  'This page mirrors the full license text maintained in the 1.0.0-beta.3 Studio branch.',
            },
            intro:       'The license text below is rendered directly from the canonical Markdown kept in the 1.0.0-beta.3 Studio branch.',
        },
        fr: {
            title:       'GNU AGPL v3 ou ultérieure',
            description: 'Texte complet de la GNU AGPL v3 ou ultérieure utilisé pour la version publique de LGS1920 Studio.',
            hero:        {
                video: false,
                badge: 'Légal',
                kicker:'Licence',
                title: 'Lire le texte complet de l\'AGPL.',
                lead:  'Cette page reflète le texte complet maintenu dans la branche Studio 1.0.0-beta.3.',
            },
            intro:       'Le texte de licence ci-dessous est rendu directement depuis le Markdown canonique conservé dans la branche Studio 1.0.0-beta.3.',
        },
    },
    cla: {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/contributor-license-agreement/',
        en:       {
            title:       'Contributor License Agreement',
            description: 'Terms that apply to code and documentation contributions proposed to LGS1920 Studio.',
            hero:        {
                video: false,
                badge: 'Legal',
                kicker:'Contributions',
                title: 'Review the Contributor License Agreement.',
                lead:  'Contributors must accept these terms before their changes can be merged into the main Studio repository.',
            },
            intro:       'The CLA below is sourced at build time from the main studio repository to keep contribution terms in sync.',
        },
        fr: {
            title:       'Contributor License Agreement',
            description: 'Conditions applicables aux contributions de code et de documentation proposées à LGS1920 Studio.',
            hero:        {
                video: false,
                badge: 'Légal',
                kicker:'Contributions',
                title: 'Relire le Contributor License Agreement.',
                lead:  'Les contributeurs doivent accepter ces conditions avant que leurs changements puissent être fusionnés dans le dépôt principal Studio.',
            },
            intro:       'Le CLA ci-dessous est récupéré au build depuis le dépôt principal Studio afin de garder les conditions de contribution synchronisées.',
        },
    },
    dependencies: {
        layout:   'layouts/page.html',
        pageClass:'legal-page',
        path:     '/dependencies/',
        en:       {
            title:       'Dependency Inventory',
            description: 'Readable dependency snapshot generated from the main LGS1920 Studio repository.',
            hero:        {
                video:     false,
                badge:     'Stack',
                kicker:    'Dependencies',
                title:     'Browse the current dependency inventory of LGS1920 Studio.',
                lead:      'This page mirrors the dependency snapshot maintained in the main Studio repository and generated at build time.',
                highlights:[
                    {label:'Runtime packages', icon:'box-open-full', variant:'regular'},
                    {label:'Build and quality tooling', icon:'screwdriver-wrench', variant:'regular'},
                    {label:'Canonical source from studio', icon:'file-lines', variant:'regular'},
                ],
            },
            intro:       'The dependency inventory below is pulled at build time from the main Studio repository so the public site reflects the same dependency snapshot.',
            pageCta:     {
                eyebrow:'Source of truth',
                title:  'The dependency inventory is generated from the main Studio repository.',
                body:   'This site page stays readable, but the source of truth remains the Studio package manifest and its companion dependency document.',
                actions:[
                    {
                        label:   'Open Studio repo',
                        href:    repositoryUrl,
                        variant: 'brand',
                        external:true,
                        icon:    {family:'brands', name:'github'},
                    },
                    {
                        label:     'Open Studio',
                        href:      studioUrl,
                        appearance:'outlined',
                        external:  true,
                        icon:      {name:'arrow-up-right-from-square', variant:'regular'},
                    },
                ],
            },
        },
        fr: {
            title:       'Inventaire des dépendances',
            description: 'Vue lisible des dépendances générée depuis le dépôt principal LGS1920 Studio.',
            hero:        {
                video:     false,
                badge:     'Stack',
                kicker:    'Dépendances',
                title:     'Parcourir l\'inventaire courant des dépendances de LGS1920 Studio.',
                lead:      'Cette page reflète l\'instantané des dépendances maintenu dans le dépôt principal Studio et généré au build.',
                highlights:[
                    {label:'Packages runtime', icon:'box-open-full', variant:'regular'},
                    {label:'Outils build et qualité', icon:'screwdriver-wrench', variant:'regular'},
                    {label:'Source canonique depuis studio', icon:'file-lines', variant:'regular'},
                ],
            },
            intro:       'L\'inventaire des dépendances ci-dessous est récupéré au build depuis le dépôt principal Studio afin que le site public reflète le même instantané.',
            pageCta:     {
                eyebrow:'Source de vérité',
                title:  'L\'inventaire des dépendances est généré depuis le dépôt principal Studio.',
                body:   'Cette page reste lisible, mais la source de vérité demeure le manifest du package Studio et son document de dépendances compagnon.',
                actions:[
                    {
                        label:   'Ouvrir le dépôt Studio',
                        href:    repositoryUrl,
                        variant: 'brand',
                        external:true,
                        icon:    {family:'brands', name:'github'},
                    },
                    {
                        label:     'Ouvrir Studio',
                        href:      studioUrl,
                        appearance:'outlined',
                        external:  true,
                        icon:      {name:'arrow-up-right-from-square', variant:'regular'},
                    },
                ],
            },
        },
    },
}

export default legal
