import i18n from './i18n.js'
import { getGuidePageDefinition } from './guide-pages.generated.js'

const studioUrl = 'https://studio.lgs1920.fr'
const repositoryUrl = 'https://github.com/lgs1920/studio'
const contactEmail = 'contact@lgs1920.fr'

const home = {
    layout:'layouts/page.html',
    en:    {
        title:       'LGS1920 Studio',
        description: 'Local-first route editing for journeys, tracks, POIs, camera views, widgets, reports, and media capture.',
        hero:        {
            className:'intro-hero',
            title:    'Turn outdoors adventures into shared stories.',
            lead:     'Walk, run or ride, then import, edit, replay and share videos of your journeys without leaving your browser.',
            actions:  [
                {
                    label:     'Studio',
                    href:      studioUrl,
                    appearance:'filled',
                    variant:   'brand',
                    className: 'hero-button-launch',
                    external:  true,
                    icon:      {
                        name:   'clapperboard-play',
                        variant:'regular',
                    },
                },
                {
                    label:     'Discover',
                    href:      '#overview',
                    appearance:'outlined',
                    variant:   'brand',
                    className: 'hero-button-discover',
                    icon:      {
                        name:   'arrow-down',
                        variant:'regular',
                    },
                },
            ],
        },
        sectionNav: [
            {id:'overview', label:'Overview', summary:'Browser-local journeys and exports'},
            {id:'features', label:'Features', summary:'The main workflows the Studio covers'},
            {id:'workflow', label:'Workflow', summary:'From source data to final output'},
            {id:'roadmap', label:'Roadmap', summary:'The next Studio milestones'},
            {id:'access', label:'Access & cost', summary:'What stays free and when Cesium is needed'},
            {id:'faq', label:'FAQ', summary:'Common questions and answers'},
        ],
        content: {
            overview: {
                kicker:        'Overview',
                title:         'A browser workspace for journeys, camera control, capture, and reports.',
                intro:         [
                    'Import a route, inspect the scene, adjust the camera, and export what you need — reports or video — without leaving the browser.',
                    'The Studio keeps working state local by default and only uses external services when the workflow requires it.',
                ],
                highlightsLabel:'What Studio covers',
                highlights:    [
                    {
                        icon: 'route',
                        title:'Import and review journeys',
                        body: 'Bring in journeys and tracks, then keep the working state in the browser.',
                    },
                    {
                        icon: 'camera',
                        title:'Direct the scene',
                        body: 'Switch between 2D and 3D, then focus the camera on the right route context.',
                    },
                    {
                        icon: 'file-pdf',
                        title:'Export snapshots and reports',
                        body: 'Produce screenshots, video, PDF reports, or packaged HTML reports from the same journey.',
                    },
                ],
                card: {
                    eyebrow:'Core workflow',
                    title:  'One workspace, private by default.',
                    items:  [
                        {icon:'map-location-dot', title:'Storage', text:'GeoJSON, GPX, and KML'},
                        {icon:'arrows-rotate', title:'Privacy', text:'Local, private, sync-ready'},
                        {icon:'chart-line', title:'Delivery', text:'Reports, snapshots, video'},
                    ],
                },
            },
            features: {
                kicker:'Features',
                title: 'The main workflows the Studio already covers.',
                cards: [
                    {icon:'route', title:'Journey and track editing', body:'Load journeys, edit metadata, tune visibility, and manage track presentation in a consistent way.'},
                    {icon:'map-location-dot', title:'POI workflows', body:'Create, focus, rotate, and keep point-centric views across both POIs and journey-level targets.'},
                    {icon:'globe-pointer', title:'Cesium scene control', body:'Move between 2D and 3D, track the active camera target, and keep navigation clear.'},
                    {icon:'box', title:'Widgets and overlays', body:'Compose visible context with metrics, labels, and supporting panels.'},
                    {icon:'clapperboard-play', title:'Media export', body:'Capture screenshots, define crop zones, and record video with the same visible overlays used in the editor.'},
                    {icon:'file-pdf', title:'Journey reports', body:'Generate PDF reports or ZIP-packaged HTML reports with metadata, statistics, POIs, coordinates, altitude data, and map captures.'},
                ],
            },
            workflow: {
                kicker:'Workflow',
                title: 'From source data to final output.',
                steps: [
                    {index:'01', title:'Load source data', body:'Bring in GeoJSON, GPX, or KML files and rebuild a working journey context in the browser.'},
                    {index:'02', title:'Shape the scene', body:'Refine visibility, focus behavior, widgets, camera targets, and panorama settings.'},
                    {index:'03', title:'Export and share', body:'Produce screenshots, video, or reports and hand them off through the browser share flow when needed.'},
                ],
            },
            roadmap: {
                kicker:'Roadmap',
                title: 'Where Studio is heading next.',
                items: [
                    {version:'1.0', title:'Current Studio', body:'A privacy-first, local-first geospatial editor for journeys, tracks, POIs, Cesium 2D/3D scenes, camera controls, widgets, replay, snapshots, video, and PDF or HTML journey reports.'},
                    {version:'1.1', title:'Extended activity imports', body:'Add FIT and TCX imports from Garmin and Strava while preserving activity and sensor data, with optional authenticated Strava access and connected-provider project files.'},
                    {version:'1.2', title:'Timeline video editor', body:'Replace the separate Replay start, replay, and stop clip controls with a track-based timeline combining journey replay, clips, and widgets.'},
                    {version:'1.3', title:'3D camera path editor', body:'Create editable 3D camera paths with GPS positions, altitude, duration, motion profiles, look-at targets, easing, and optional 360-degree moves.'},
                ],
            },
            access: {
                kicker:'Access',
                title: 'Studio is free to use.',
                note:   'Studio was designed so you can share your adventures as enriched videos without paying anything. Studio is and will remain completely free to use. During the trial period, Cesium access is shared and may have some limitations. After the trial, a completely free Cesium Ion account is needed to use your own Cesium resources or access additional basemaps. Paid basemaps are supported, but they are never required.',
                cards:  [
                    {
                        icon:  'circle-check',
                        title: 'Free Studio access',
                        body:  'Open Studio, edit journeys, and export outputs without a paid subscription. By default, Studio uses free GIS layers. You can also choose freemium or paid layers, but using them is never mandatory.',
                    },
                    {
                        icon:  'key',
                        title: 'Free Cesium access',
                        body:  'During the trial period, Studio provides shared Cesium access with limitations. After the trial, create a free Cesium Ion account to use your own resources, Google Photorealistic 3D Tiles, and Google or Azure basemaps.',
                    },
                    {
                        icon:  'circle-info',
                        title: 'Technical relationship only',
                        body:  'LGS1920 has no commercial relationship with Cesium or the GIS layer providers. Cesium is an open-source 3D globe engine.<br>Studio uses it solely to render the scene and its optional layers.',
                    },
                ],
            },
            faq: {
                kicker:'FAQ',
                title: 'Common questions about Studio and the public site.',
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
                actions: [
                    {
                        label:     'Open FAQ page',
                        href:      '/faq/',
                        appearance:'outlined',
                        variant:   'neutral',
                        icon:      {
                            name:   'circle-question',
                            variant:'regular',
                        },
                    },
                ],
            },
        },
        pageCta: {
            eyebrow:'Studio links',
            title:  'Open the Studio or browse the source.',
            body:   'Use the hosted Studio for editing and the GitHub repository for the code and release history. Journey data stays local unless your browser is explicitly synced.',
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
                    label:     'GitHub repository',
                    href:      repositoryUrl,
                    appearance:'outlined',
                    variant:   'brand',
                    external:  true,
                    icon:      {
                        family:'brands',
                        name:  'github',
                    },
                },
            ],
        },
    },
    fr: {
        title:       'LGS1920 Studio',
        description: 'Édition de parcours orientée local pour trajets, traces, POI, vues caméra, widgets, rapports et captures média.',
        hero:        {
            className:'intro-hero',
            title:    'Transformez vos aventures outdoor en histoires à partager.',
            lead:     'Marchez, courrez ou roulez, puis importez, éditez et partagez des vidéos de vos parcours sans quitter votre navigateur*',
            actions:  [
                {
                    label:     'Studio',
                    href:      studioUrl,
                    appearance:'filled',
                    variant:   'brand',
                    className: 'hero-button-launch',
                    external:  true,
                    icon:      {
                        name:   'clapperboard-play',
                        variant:'regular',
                    },
                },
                {
                    label:     'Découvrir',
                    href:      '#overview',
                    appearance:'outlined',
                    variant:   'brand',
                    className: 'hero-button-discover',
                    icon:      {
                        name:   'arrow-down',
                        variant:'regular',
                    },
                },
            ],
        },
        sectionNav: [
            {id:'overview', label:'Vue d\'ensemble', summary:'Parcours et exports dans le navigateur'},
            {id:'features', label:'Fonctionnalités', summary:'Les workflows principaux couverts par Studio'},
            {id:'workflow', label:'Workflow', summary:'De la donnée source à la sortie finale'},
            {id:'roadmap', label:'Roadmap', summary:'Les prochaines étapes de Studio'},
            {id:'access', label:'Accès et coût', summary:'Ce qui reste gratuit et quand Cesium est nécessaire'},
            {id:'faq', label:'FAQ', summary:'Questions courantes et réponses'},
        ],
        content: {
            overview: {
                kicker:        'Vue d\'ensemble',
                title:         'Un espace de travail dans le navigateur pour les parcours, la caméra, les captures et les rapports.',
                intro:         [
                    'Importez un parcours, inspectez la scène, ajustez la caméra et exportez ce qu’il faut — rapports ou vidéo — sans quitter le navigateur.',
                    'Studio garde l’état de travail en local par défaut et n’utilise des services externes que lorsque le workflow l’exige.',
                ],
                highlightsLabel:'Ce que couvre Studio',
                highlights:    [
                    {
                        icon: 'route',
                        title:'Importer et revoir les parcours',
                        body: 'Charger des parcours et traces tout en gardant l’état de travail dans le navigateur.',
                    },
                    {
                        icon: 'camera',
                        title:'Diriger la scène',
                        body: 'Passer en 2D ou 3D puis centrer la caméra sur le bon contexte de parcours.',
                    },
                    {
                        icon: 'file-pdf',
                        title:'Exporter captures et rapports',
                        body: 'Produire des captures, de la vidéo, des PDF ou des rapports HTML empaquetés depuis le même parcours.',
                    },
                ],
                card: {
                    eyebrow:'Workflow de base',
                    title:  'Un espace unique, privé par défaut.',
                    items:  [
                        {icon:'map-location-dot', title:'Stockage', text:'GeoJSON, GPX et KML'},
                        {icon:'arrows-rotate', title:'Confidentialité', text:'Local, privé, prêt à synchroniser'},
                        {icon:'chart-line', title:'Livrables', text:'Rapports, captures, vidéo'},
                    ],
                },
            },
            features: {
                kicker:'Fonctionnalités',
                title: 'Les principaux workflows déjà pris en charge par Studio.',
                cards: [
                    {icon:'route', title:'Édition des parcours et traces', body:'Charger des parcours, éditer les métadonnées, ajuster la visibilité et gérer la présentation des traces de manière cohérente.'},
                    {icon:'map-location-dot', title:'Workflow POI', body:'Créer, focaliser, faire pivoter et conserver des vues centrées sur les points à la fois pour les POI et les cibles de parcours.'},
                    {icon:'globe-pointer', title:'Contrôle de scène Cesium', body:'Passer de la 2D à la 3D, suivre la cible caméra active et garder une navigation claire.'},
                    {icon:'box', title:'Widgets et overlays', body:'Composer le contexte visible avec les métriques, libellés et panneaux utiles.'},
                    {icon:'clapperboard-play', title:'Export média', body:'Capturer des images, définir des zones de crop et enregistrer des vidéos avec les mêmes overlays que dans l\'éditeur.'},
                    {icon:'file-pdf', title:'Rapports de parcours', body:'Générer des rapports PDF ou HTML ZIP avec métadonnées, statistiques, POI, coordonnées, altitudes et captures de carte.'},
                ],
            },
            workflow: {
                kicker:'Workflow',
                title: 'De la donnée source à la sortie finale.',
                steps: [
                    {index:'01', title:'Charger les données source', body:'Importer des fichiers GeoJSON, GPX ou KML et reconstruire un contexte de parcours exploitable dans le navigateur.'},
                    {index:'02', title:'Façonner la scène', body:'Régler la visibilité, le focus, les widgets, les cibles caméra et les réglages de panorama.'},
                    {index:'03', title:'Exporter et partager', body:'Produire des captures, de la vidéo ou des rapports puis les transmettre via le flux de partage du navigateur si nécessaire.'},
                ],
            },
            roadmap: {
                kicker:'Roadmap',
                title: 'Les prochaines évolutions de Studio.',
                items: [
                    {version:'1.0', title:'Studio actuel', body:'Un éditeur géospatial privacy-first et local-first pour les parcours, traces, POI, scènes Cesium 2D/3D, contrôles caméra, widgets, replay, captures, vidéo et rapports de parcours PDF ou HTML.'},
                    {version:'1.1', title:'Imports d’activités étendus', body:'Ajouter les imports FIT et TCX depuis Garmin et Strava en conservant les données d’activité et de capteurs, avec un accès Strava authentifié optionnel et des fichiers projet via des fournisseurs connectés.'},
                    {version:'1.2', title:'Éditeur vidéo sur timeline', body:'Remplacer les contrôles Replay séparés de début, replay et fin par une timeline basée sur des pistes, réunissant replay du parcours, clips et widgets.'},
                    {version:'1.3', title:'Éditeur de trajectoires caméra 3D', body:'Créer des trajectoires caméra 3D éditables avec positions GPS, altitude, durée, profils de mouvement, cibles à regarder, easing et mouvements optionnels à 360 degrés.'},
                ],
            },
            access: {
                kicker:'Accès',
                title: 'Studio est gratuit à l’usage.',
                note:   'Studio a été conçu pour vous permettre de partager vos aventures sous forme de vidéos enrichies sans rien payer. Studio est et restera totalement gratuit à l’usage. Pendant la période d’essai, l’accès à Cesium est partagé et peut être soumis à certaines limitations. Après l’essai, un compte Cesium Ion gratuit est nécessaire pour utiliser vos propres ressources Cesium ou accéder à des fonds de carte supplémentaires. Les fonds de carte payants sont pris en charge, mais ils ne sont jamais obligatoires.',
                cards:  [
                    {
                        icon:  'circle-check',
                        title: 'Accès Studio gratuit',
                        body:  'Ouvrez Studio hébergé, éditez vos parcours et exportez vos livrables sans abonnement payant. Par défaut, Studio utilise des couches SIG gratuites. Vous pouvez aussi choisir des couches freemium ou payantes, mais leur utilisation n’est jamais obligatoire.',
                    },
                    {
                        icon:  'key',
                        title: 'Accès Cesium gratuit',
                        body:  'Pendant la période d’essai, Studio fournit un accès Cesium partagé et limité. Après l’essai, créez un compte Cesium Ion gratuit pour utiliser vos propres ressources, Google Photorealistic 3D Tiles et les fonds de carte Google ou Azure.',
                    },
                    {
                        icon:  'circle-info',
                        title: 'Relation uniquement technique',
                        body:  'LGS1920 n’a aucun lien commercial avec Cesium ni avec les fournisseurs de couches SIG. Cesium est un moteur 3D globe open source.<br>Studio l’utilise uniquement pour rendre la scène et ses couches optionnelles.',
                    },
                ],
            },
            faq: {
                kicker:'FAQ',
                title: 'Questions courantes sur Studio et le site public.',
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
                actions: [
                    {
                        label:     'Ouvrir la page FAQ',
                        href:      '/fr/faq/',
                        appearance:'outlined',
                        variant:   'neutral',
                        icon:      {
                            name:   'circle-question',
                            variant:'regular',
                        },
                    },
                ],
            },
        },
        pageCta: {
            eyebrow:'Liens Studio',
            title:  'Ouvrir Studio ou parcourir le code source.',
            body:   'Utilisez Studio hébergé pour l\'édition et le dépôt GitHub pour le code et l\'historique des versions. Les données de parcours restent locales sauf si votre navigateur est explicitement synchronisé.',
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
                    label:     'Dépôt GitHub',
                    href:      repositoryUrl,
                    appearance:'outlined',
                    variant:   'brand',
                    external:  true,
                    icon:      {
                        family:'brands',
                        name:  'github',
                    },
                },
            ],
        },
    },
}

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
                    href:      `mailto:${contactEmail}`,
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
                    href:      `mailto:${contactEmail}`,
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

const userGuide = {
    gettingStarted: {
        firstSteps: {
            layout:'layouts/page.html',
            en:    {
                title:       'Start A Session',
                description: 'First user steps in LGS1920 Studio: open the workspace, identify the scene, panels, and primary controls.',
                hero:        {
                    video:    false,
                    className:'guide-hero',
                    badge:    'Main step',
                    kicker:   'User guide',
                    title:    'Start a Studio session.',
                    lead:     'Open the Studio, identify the main areas, and prepare the first editing session with browser-local data.',
                    highlights:[
                        {
                            icon:   'circle-play',
                            label:  'First launch',
                            variant:'regular',
                        },
                        {
                            icon:   'table-layout',
                            label:  'Workspace areas',
                            variant:'regular',
                        },
                        {
                            icon:   'bars',
                            label:  'Side panels',
                            variant:'regular',
                        },
                    ],
                },
                sectionNav: [
                    {
                        id:     'open-the-studio',
                        label:  'Open the Studio',
                        summary:'Access the editor',
                    },
                    {
                        id:     'identify-the-workspace',
                        label:  'Workspace areas',
                        summary:'Scene, panels, controls',
                    },
                    {
                        id:     'first-checks',
                        label:  'First checks',
                        summary:'Before importing data',
                    },
                ],
            },
            fr: {
                title:       'Démarrer une session',
                description: 'Premières étapes dans LGS1920 Studio: ouvrir l\'espace de travail et repérer les contrôles principaux.',
                hero:        {
                    video:    false,
                    className:'guide-hero',
                    badge:    'Étape principale',
                    kicker:   'Guide utilisateur',
                    title:    'Démarrer une session Studio.',
                    lead:     'Ouvrir Studio, identifier les zones principales et préparer la première session d\'édition.',
                    highlights:[
                        {
                            icon:   'circle-play',
                            label:  'Premier lancement',
                            variant:'regular',
                        },
                        {
                            icon:   'table-layout',
                            label:  'Zones de travail',
                            variant:'regular',
                        },
                        {
                            icon:   'bars',
                            label:  'Panneaux latéraux',
                            variant:'regular',
                        },
                    ],
                },
                sectionNav: [
                    {
                        id:     'ouvrir-studio',
                        label:  'Ouvrir Studio',
                        summary:'Accéder à l\'éditeur',
                    },
                    {
                        id:     'reperer-les-zones',
                        label:  'Repérer l\'espace',
                        summary:'Scène, panneaux, contrôles',
                    },
                    {
                        id:     'premiers-controles',
                        label:  'Premiers contrôles',
                        summary:'Avant l\'import',
                    },
                ],
            },
        },
    },
    workflows: {
        export: {
            layout: 'layouts/page.html',
            en: {
                title: 'Export',
                description: 'Export snapshots, videos, and journey reports from the prepared Studio scene.',
                hero: {
                    video: false,
                    className: 'guide-hero',
                    badge: 'Main step',
                    kicker: 'Export',
                    title: 'Export the final output.',
                    lead: 'Choose the right export path after the journey, scene, widgets, and camera are ready.',
                    highlights: [
                        {icon: 'camera', label: 'Snapshot', variant: 'regular'},
                        {icon: 'video', label: 'Video', variant: 'regular'},
                        {icon: 'file-pdf', label: 'Report', variant: 'regular'},
                    ],
                },
                sectionNav: [
                    {id: 'choose-output', label: 'Choose output', summary: 'Snapshot, video, report'},
                    {id: 'snapshot-video', label: 'Snapshot and video', summary: 'Capture the scene'},
                    {id: 'report', label: 'Report', summary: 'Export route documentation'},
                    {id: 'final-checks', label: 'Final checks', summary: 'Before saving'},
                ],
                content: {
                    chooseOutput: {
                        id: 'choose-output',
                        kicker: 'Choose output',
                        title: 'Use the export type that matches the work.',
                        tableHeaders: {
                            need: 'Need',
                            use: 'Use',
                        },
                        table: [
                            {need: 'One composed image', use: 'Snapshot'},
                            {need: 'Camera movement or timed scene', use: 'Video'},
                            {need: 'Route documentation with metadata and maps', use: 'Journey report'},
                        ],
                    },
                    snapshotVideo: {
                        id: 'snapshot-video',
                        kicker: 'Snapshot and video',
                        title: 'Prepare the scene before capture.',
                        steps: [
                            'Prepare layers, journey visibility, POIs, widgets, and camera.',
                            'Check the capture area and aspect ratio.',
                            'Use the snapshot or video action.',
                            'Review the generated output before changing the scene.',
                        ],
                        linkLabel: 'Snapshots and video',
                        linkUrl: '/user-guide/workflows/snapshots-and-video/',
                        followupLabel: 'Detailed flow:',
                    },
                    report: {
                        id: 'report',
                        kicker: 'Report',
                        title: 'Prepare the journey before report export.',
                        steps: [
                            'Select the active journey.',
                            'Check title, description, dates, statistics, POIs, and track styling.',
                            'Generate the PDF or HTML ZIP report.',
                            'Open the exported file and review generated maps and tables.',
                        ],
                        linkLabel: 'Journey reports',
                        linkUrl: '/user-guide/workflows/journey-reports/',
                        followupLabel: 'Detailed flow:',
                    },
                    finalChecks: {
                        id: 'final-checks',
                        kicker: 'Final checks',
                        title: 'Confirm the scene before exporting anything.',
                        steps: [
                            'Hide drawers and dialogs that should not be visible in the output.',
                            'Check that widgets are inside the capture area.',
                            'Check map layer contrast.',
                            'Run camera movement once before recording.',
                            'Keep the browser tab active while recording.',
                        ],
                    },
                },
            },
            fr: {
                title: 'Exporter',
                description: 'Exporter des captures, vidéos et rapports de parcours depuis la scène préparée.',
                hero: {
                    video: false,
                    className: 'guide-hero',
                    badge: 'Étape principale',
                    kicker: 'Export',
                    title: 'Exporter le rendu final.',
                    lead: 'Choisissez le bon flux d\'export une fois le parcours, la scène, les widgets et la caméra prêts.',
                    highlights: [
                        {icon: 'camera', label: 'Capture', variant: 'regular'},
                        {icon: 'video', label: 'Vidéo', variant: 'regular'},
                        {icon: 'file-pdf', label: 'Rapport', variant: 'regular'},
                    ],
                },
                sectionNav: [
                    {id: 'choisir-la-sortie', label: 'Choisir la sortie', summary: 'Capture, vidéo, rapport'},
                    {id: 'capture-et-video', label: 'Capture et vidéo', summary: 'Capturer la scène'},
                    {id: 'rapport', label: 'Rapport', summary: 'Export documentaire'},
                    {id: 'verifications-finales', label: 'Vérifications finales', summary: 'Avant la sauvegarde'},
                ],
                content: {
                    chooseOutput: {
                        id: 'choisir-la-sortie',
                        kicker: 'Choisir la sortie',
                        title: 'Utilisez le type d\'export qui correspond au besoin.',
                        tableHeaders: {
                            need: 'Besoin',
                            use: 'Utiliser',
                        },
                        table: [
                            {need: 'Une image composée', use: 'Capture'},
                            {need: 'Un mouvement de caméra ou une scène animée', use: 'Vidéo'},
                            {need: 'Une documentation complète du parcours', use: 'Rapport de parcours'},
                        ],
                    },
                    snapshotVideo: {
                        id: 'capture-et-video',
                        kicker: 'Capture et vidéo',
                        title: 'Préparez la scène avant la capture.',
                        steps: [
                            'Préparez les couches, la visibilité, les POI, les widgets et la caméra.',
                            'Vérifiez la zone de capture et le ratio.',
                            'Lancez l\'action capture ou vidéo.',
                            'Relisez la sortie générée avant de modifier la scène.',
                        ],
                        linkLabel: 'Captures et vidéo',
                        linkUrl: '/fr/user-guide/workflows/snapshots-and-video/',
                        followupLabel: 'Flux détaillé :',
                    },
                    report: {
                        id: 'rapport',
                        kicker: 'Rapport',
                        title: 'Préparez le parcours avant l\'export du rapport.',
                        steps: [
                            'Sélectionnez le parcours actif.',
                            'Vérifiez le titre, la description, les dates, les statistiques, les POI et le style.',
                            'Générez le rapport PDF ou HTML ZIP.',
                            'Ouvrez le fichier exporté et relisez cartes et tableaux.',
                        ],
                        linkLabel: 'Rapports de parcours',
                        linkUrl: '/fr/user-guide/workflows/journey-reports/',
                        followupLabel: 'Flux détaillé :',
                    },
                    finalChecks: {
                        id: 'verifications-finales',
                        kicker: 'Vérifications finales',
                        title: 'Confirmez la scène avant d\'exporter quoi que ce soit.',
                        steps: [
                            'Masquez les drawers et dialogues qui ne doivent pas apparaître dans la sortie.',
                            'Vérifiez que les widgets sont dans la zone de capture.',
                            'Vérifiez le contraste des couches cartographiques.',
                            'Lancez une fois le mouvement de caméra avant l\'enregistrement.',
                            'Gardez l\'onglet du navigateur actif pendant l\'enregistrement.',
                        ],
                    },
                },
            },
        },
    },
}

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
                        href:   `mailto:${contactEmail}`,
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
            renderLabels:{sourceLabel:'Source'},
            pageCta:     {
                eyebrow:'Conditions d\'usage',
                title:  'Besoin d\'autres conditions d\'usage ?',
                body:   'Les questions sur les conditions d\'usage et les contributions sont traitées directement par LGS1920.',
                actions:[
                    {
                        label:  'Contact',
                        href:   `mailto:${contactEmail}`,
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
            renderLabels:{sourceLabel:'Source'},
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
            renderLabels:{sourceLabel:'Source'},
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
            renderLabels:{sourceLabel:'Source'},
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

const changelog = {
    layout:   'layouts/page.html',
    pageClass:'legal-page changelog-page',
    path:     '/changelog/',
    en:       {
        title:       'Changelog',
        description: 'Full release history of LGS1920 Studio, generated from the main Studio changelog files.',
        getHero:     ({ changelog: changelogData }) => ({
            video:     false,
            badge:     'Release notes',
            kicker:    'Changelog',
            title:     'Browse the release history of LGS1920 Studio.',
            lead:      'This page concatenates the Markdown changelog files published in the main Studio repository into one readable timeline.',
            highlights:[
                {
                    icon:   'file-lines',
                    label:  `${changelogData.count} release notes files`,
                    variant:'regular',
                },
                {
                    icon:   'calendar-days',
                    label:  `Latest entry: ${changelogData.latest?.version || 'n/a'}`,
                    variant:'regular',
                },
                {
                    icon:   'database',
                    label:  'Generated at build time from studio',
                    variant:'regular',
                },
            ],
        }),
    },
    fr: {
        title:       'Historique',
        description: 'Historique des versions de LGS1920 Studio, généré à partir des fichiers de changelog du dépôt principal.',
        getHero:     ({ changelog: changelogData }) => ({
            video:     false,
            badge:     'Notes de version',
            kicker:    'Historique',
            title:     'Parcourir l\'historique des versions de LGS1920 Studio.',
            lead:      'Cette page concatène les fichiers Markdown de changelog publiés dans le dépôt principal Studio en une chronologie lisible.',
            highlights:[
                {
                    icon:   'file-lines',
                    label:  `${changelogData.count} fichiers de notes de version`,
                    variant:'regular',
                },
                {
                    icon:   'calendar-days',
                    label:  `Dernière entrée: ${changelogData.latest?.version || 'n/a'}`,
                    variant:'regular',
                },
                {
                    icon:   'database',
                    label:  'Généré au build depuis studio',
                    variant:'regular',
                },
            ],
        }),
        renderLabels:{
            intro:            'Les notes de version ci-dessous sont concaténées au build à partir des fichiers Markdown de changelog maintenus dans le dépôt principal Studio.',
            newer:            'Plus récent',
            older:            'Plus ancien',
            releaseNavigation:'Navigation des versions',
            source:           'Source',
            sourceDirectory:  'Dossier source',
            version:          'Version',
        },
    },
}

const pageDefinitionsByPath = {
    '/':                              home,
    '/faq/':                          faq,
    '/changelog/':                    changelog,
    '/licensing/':                    legal.licensing,
    '/license/':                      legal.license,
    '/contributor-license-agreement/':legal.cla,
    '/dependencies/':                 legal.dependencies,
}

export const getLocalizedContent = (definition, locale = i18n.defaultLocale) => {
    if (!definition) {
        return null
    }

    if (definition.locales) {
        return definition.locales[locale] ?? definition.locales[i18n.defaultLocale] ?? null
    }

    return definition[locale] ?? definition[i18n.defaultLocale] ?? null
}

export const getPageDefinition = (url = '') => getGuidePageDefinition(url) ?? pageDefinitionsByPath[i18n.getCanonicalPath(url)] ?? null

export const getPageContent = (url = '', locale = i18n.getLocaleFromUrl(url)) => getLocalizedContent(
    getPageDefinition(url),
    locale,
)

export const getGeneratedPageData = (definition, locale, options = {}) => {
    const content = getLocalizedContent(definition, locale)

    return {
        layout:     definition.layout,
        permalink:  i18n.localizedPath(locale, definition.path),
        title:      content.title,
        description:content.description,
        pageClass:  definition.pageClass,
        hero:       typeof content.getHero === 'function' ? content.getHero(options) : content.hero,
        sectionNav: options.sectionNav,
        pageCta:    content.pageCta,
    }
}

export default {
    home,
    faq,
    userGuide,
    legal,
    changelog,
    byPath:getPageDefinition,
    getLocalizedContent,
    getPageContent,
    getGeneratedPageData,
}
