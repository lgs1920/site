import { contactUrl, frenchContactUrl, studioUrl } from './shared.js'

const faq = {
    layout:   'layouts/page.html',
    pageClass:'faq-page',
    path:     '/faq/',
    en:       {
        title:       'FAQ',
        description: 'Common questions about Studio and the public site.',
        hero:        {
            video:     false,
            badge:     'Help',
            kicker:    'FAQ',
            title:     'Answers to common questions about Studio.',
            lead:      'This page keeps the public-site and product questions in one place, with short answers that are easy to update.',
            highlights:[
                {label:'Local-first workflow', icon:'database', variant:'regular'},
                {label:'Exports and reports', icon:'file-pdf', variant:'regular'},
                {label:'Cesium when needed', icon:'key', variant:'regular'},
            ],
        },
        sectionTitle: 'Common questions',
        intro: 'Short answers to the questions people usually ask before opening Studio or reading the documentation.',
        items: [
            {
                id:     'who-is-studio-for',
                summary:'Who is Studio for?',
                body:   'People who need to review, present, and export map scenes, reports, screenshots, or video.',
            },
            {
                id:     'what-can-it-export',
                summary:'What can Studio export?',
                body:   'Snapshots, video, PDF reports, and ZIP-packaged HTML reports.',
            },
            {
                id:     'how-private-is-it',
                summary:'How private is it?',
                body:   'Working data stays in the browser by default. Cesium Ion is only needed for Cesium-backed data.',
            },
        ],
        pageCta: {
            eyebrow:'Next steps',
            title:  'Open Studio or get in touch.',
            body:   'Use Studio for editing, or contact LGS1920 if you need a different licensing or integration path.',
            actions:[
                {
                    label:     'Open Studio',
                    href:      studioUrl,
                    appearance:'filled',
                    variant:   'brand',
                    external:  true,
                    icon:      {
                        name:   'clapperboard-play',
                        variant:'regular',
                    },
                },
                {
                    label:     'Contact',
                    href:      contactUrl,
                    appearance:'outlined',
                    variant:   'brand',
                    icon:      {
                        name:   'envelope',
                        variant:'regular',
                    },
                },
            ],
        },
    },
    fr:       {
        title:       'FAQ',
        description: 'Questions courantes sur Studio et le site public.',
        hero:        {
            video:     false,
            badge:     'Aide',
            kicker:    'FAQ',
            title:     'Réponses aux questions courantes sur Studio.',
            lead:      'Cette page rassemble les questions sur le site public et le produit, avec des réponses courtes et faciles à mettre à jour.',
            highlights:[
                {label:'Workflow local-first', icon:'database', variant:'regular'},
                {label:'Exports et rapports', icon:'file-pdf', variant:'regular'},
                {label:'Cesium si nécessaire', icon:'key', variant:'regular'},
            ],
        },
        sectionTitle: 'Questions courantes',
        intro: 'Réponses courtes aux questions que l’on pose généralement avant d’ouvrir Studio ou de lire la documentation.',
        items: [
            {
                id:     'pour-qui-est-studio',
                summary:'À qui s’adresse Studio ?',
                body:   'Aux personnes qui doivent relire, présenter et exporter des scènes cartographiques, des rapports, des captures ou de la vidéo.',
            },
            {
                id:     'quexporte-studio',
                summary:'Qu’exporte Studio ?',
                body:   'Des captures, de la vidéo, des rapports PDF et des rapports HTML empaquetés en ZIP.',
            },
            {
                id:     'quel-niveau-de-vie-privee',
                summary:'Quel niveau de vie privée ?',
                body:   'Les données de travail restent dans le navigateur par défaut. Cesium Ion n’est nécessaire que pour les données dépendantes de Cesium.',
            },
        ],
        pageCta: {
            eyebrow:'Et ensuite',
            title:  'Ouvrir Studio ou nous contacter.',
            body:   'Utilisez Studio pour l’édition, ou contactez LGS1920 si vous avez besoin d’un autre parcours de licence ou d’intégration.',
            actions:[
                {
                    label:     'Ouvrir Studio',
                    href:      studioUrl,
                    appearance:'filled',
                    variant:   'brand',
                    external:  true,
                    icon:      {
                        name:   'clapperboard-play',
                        variant:'regular',
                    },
                },
                {
                    label:     'Contact',
                    href:      frenchContactUrl,
                    appearance:'outlined',
                    variant:   'brand',
                    icon:      {
                        name:   'envelope',
                        variant:'regular',
                    },
                },
            ],
        },
    },
}

export default faq
