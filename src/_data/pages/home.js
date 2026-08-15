import { repositoryUrl, studioUrl } from './shared.js'

const home = {
    layout:'layouts/page.html',
    en:    {
        title:       'LGS1920 Site',
        description: 'Local-first route editing for journeys, tracks, POIs, camera views, widgets, reports, and media capture.',
        hero:        {
            className:'intro-hero',
            title:    'Live outdoor adventures, share the stories.',
            lead:     'Walk, run or ride, then import, edit, replay and share videos of your journeys without leaving your browser.',
            routeAnimation: {
                ariaLabel: 'Animated dotted route with three equally spaced points of interest.',
                pois:       [
                    {
                        id:       'ridge-viewpoint',
                        position: '0.25',
                        label:    'POI 01',
                    },
                    {
                        id:       'forest-crossing',
                        position: '0.50',
                        label:    'POI 02',
                    },
                    {
                        id:       'summit-passage',
                        position: '0.75',
                        label:    'POI 03',
                    },
                ],
            },
            mediaCatalog:'outdoor',
            actions:  [
                {
                    label:     'Studio',
                    href:      studioUrl,
                    appearance:'outlined',
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
                    appearance:'filled',
                    variant:   'brand',
                    className: 'hero-button-discover',
                    icon:      {
                        name:   'angles-down',
                        variant:'regular',
                    },
                },
            ],
        },
        sectionNav: [
            {id:'overview', label:'Overview', summary:'Browser-local journeys and exports'},
            {id:'quick-access', label:'Start here', summary:'Guides and direct access to Studio'},
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
            quickAccess: {
                kicker: 'Start here',
                title:  'In a hurry?',
                intro:   'Choose the shortest path to what you need: a guided first step, the full User guide, or Studio itself.',
                cards:   [
                    {
                        icon:  'book-open-lines',
                        title: 'Quick guide',
                        body:  'Follow the first steps to open Studio, import a journey, and get familiar with the main workflow.',
                        action: {
                            label:     'Read the Quick guide',
                            href:      '/user-guide/getting-started/first-steps/',
                            appearance:'outlined',
                            variant:   'brand',
                            icon:      {name:'book-open-lines', variant:'regular'},
                        },
                    },
                    {
                        icon:  'book-sparkles',
                        title: 'User guide',
                        body:  'Find detailed procedures for importing, editing, configuring, and exporting your journeys.',
                        action: {
                            label:     'Open the User guide',
                            href:      '/user-guide/',
                            appearance:'outlined',
                            variant:   'brand',
                            icon:      {name:'book-sparkles', variant:'regular'},
                        },
                    },
                    {
                        icon:  'clapperboard-play',
                        title: 'Studio',
                        body:  'Already know what you want to do? Open Studio directly in your browser.',
                        action: {
                            label:     'Open Studio',
                            href:      studioUrl,
                            appearance:'filled',
                            variant:   'brand',
                            external:  true,
                            icon:      {name:'clapperboard-play', variant:'regular'},
                        },
                    },
                ],
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
                        href:      '/faq',
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
        title:       'LGS1920 Site',
        description: 'Édition de parcours orientée local pour trajets, traces, POI, vues caméra, widgets, rapports et captures média.',
        hero:        {
            className:'intro-hero',
            title:    'Vivez vos aventures outdoor, partagez vos histoires.',
            lead:     'Marchez, courez ou roulez, puis importez, éditez, rejouez et partagez les vidéos de vos parcours sans quitter votre navigateur.',
            routeAnimation: {
                ariaLabel: 'Trace animée en pointillés avec trois points d’intérêt équidistants.',
                pois:       [
                    {
                        id:       'belvedere',
                        position: '0.25',
                        label:    'POI 01',
                    },
                    {
                        id:       'traversee-foret',
                        position: '0.50',
                        label:    'POI 02',
                    },
                    {
                        id:       'passage-sommet',
                        position: '0.75',
                        label:    'POI 03',
                    },
                ],
            },
            mediaCatalog:'outdoor',
            actions:  [
                {
                    label:     'Studio',
                    href:      studioUrl,
                    appearance:'outlined',
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
                    appearance:'filled',
                    variant:   'brand',
                    className: 'hero-button-discover',
                    icon:      {
                        name:   'angles-down',
                        variant:'regular',
                    },
                },
            ],
        },
        sectionNav: [
            {id:'overview', label:'Vue d\'ensemble', summary:'Parcours et exports dans le navigateur'},
            {id:'quick-access', label:'Commencer', summary:'Guides et accès direct à Studio'},
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
            quickAccess: {
                kicker: 'Commencer',
                title:  'Trop pressé ?',
                intro:   'Choisissez le chemin le plus court : un premier parcours guidé, le guide utilisateur complet ou Studio directement.',
                cards:   [
                    {
                        icon:  'book-open-lines',
                        title: 'Guide rapide',
                        body:  'Suivez les premières étapes pour ouvrir Studio, importer un parcours et prendre en main le workflow principal.',
                        action: {
                            label:     'Lire le guide rapide',
                            href:      '/fr/user-guide/getting-started/first-steps/',
                            appearance:'outlined',
                            variant:   'brand',
                            icon:      {name:'book-open-lines', variant:'regular'},
                        },
                    },
                    {
                        icon:  'book-sparkles',
                        title: 'Guide utilisateur',
                        body:  'Retrouvez les procédures détaillées pour importer, modifier, configurer et exporter vos parcours.',
                        action: {
                            label:     'Ouvrir le guide utilisateur',
                            href:      '/fr/user-guide/',
                            appearance:'outlined',
                            variant:   'brand',
                            icon:      {name:'book-sparkles', variant:'regular'},
                        },
                    },
                    {
                        icon:  'clapperboard-play',
                        title: 'Studio',
                        body:  'Vous savez déjà ce que vous voulez faire ? Ouvrez Studio directement dans votre navigateur.',
                        action: {
                            label:     'Ouvrir Studio',
                            href:      studioUrl,
                            appearance:'filled',
                            variant:   'brand',
                            external:  true,
                            icon:      {name:'clapperboard-play', variant:'regular'},
                        },
                    },
                ],
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
                        href:      '/fr/faq',
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

export default home
