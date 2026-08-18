import { contactUrl, frenchContactUrl, grandeSureImage, studioUrl } from './shared.js'

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
                id:     'why-lgs1920',
                summary:'Why LGS1920? What does it mean?',
                body:   'LGS1920 stands for La Grande Sure, a 1,920-metre summit in the Chartreuse massif, in the French Alps, at GPS coordinates 45°20′07″ N, 5°42′11″ E (45.3353, 5.7031).',
                bodyAfter:'It is a mountain that means a great deal to me: it is part of my family roots, and I was barely twelve when I climbed it for the first time with my family. At the time, it was my Mont Blanc — better still, my Everest.',
                bodyFinal:'One of Studio’s journey samples is, appropriately, named LGS1920. It is one of my favourite hikes, and I still hike it once a year, 54 years later.',
                image:  {
                    ...grandeSureImage,
                    alt:'The Hurtières cirque and the Voironnais seen from the trail to the Hurtières Gullet',
                },
            },
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
                id:     'why-cant-load-downloads-mobile',
                summary:'Why can’t I load a file from the Downloads folder on my mobile or tablet?',
                body:   'On Android and iOS, files in the dedicated Downloads directory cannot be read directly by a browser.',
                bodyAfter:'LGS1920 follows a privacy-first approach: your files remain on your device and are read locally by the browser. To work around this restriction, we would have to send the file contents unencrypted to our backend so it could download the file on your behalf. We refuse to do that.',
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
                id:     'pourquoi-lgs1920',
                summary:'Pourquoi LGS1920 ? Que signifie ce nom ?',
                body:   'LGS1920 signifie La Grande Sure, un sommet de 1 920 mètres dans le massif de la Chartreuse, dans les Alpes françaises, aux coordonnées GPS 45°20′07″ N, 5°42′11″ E (45.3353, 5.7031).',
                bodyAfter:'C’est une montagne qui m’est chère : elle fait partie de mes racines familiales et j’avais à peine douze ans lorsque je l’ai gravie pour la première fois en famille. À l’époque, c’était mon Mont Blanc — mieux encore, mon Everest.',
                bodyFinal:'L’un des journey samples de Studio porte, comme il se doit, le nom de LGS1920. C’est l’une de mes randonnées préférées, que je refais toujours, 54 ans après, une fois par an.',
                image:  {
                    ...grandeSureImage,
                    alt:'Le cirque d’Hurtières et le Voironnais vus depuis le sentier du goulet d’Hurtières',
                },
            },
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
                id:     'pourquoi-fichier-telechargements-mobile',
                summary:'Pourquoi ne puis-je pas charger un fichier depuis le dossier « Téléchargements » sur mon mobile ou ma tablette ?',
                body:   'Sur Android comme sur iOS, les fichiers du répertoire dédié aux téléchargements ne peuvent pas être lus directement par un navigateur.',
                bodyAfter:'LGS1920 respecte une approche privacy-first : vos fichiers restent sur votre appareil et sont lus localement par le navigateur. Pour contourner cette restriction, nous devrions envoyer le contenu du fichier en clair à notre backend afin qu’il puisse effectuer le téléchargement à votre place. Nous refusons de procéder ainsi.',
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
