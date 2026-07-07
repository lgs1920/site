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
            title:    'Turn outdoors moments into shared stories.',
            lead:     'Walk or ride, then import, edit, and share videos of your journeys without leaving your browser*',
            note:     '* Your data remains private and syncs in real time when available.',
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
            {id:'overview', label:'Overview', summary:'Privacy-first journeys in the browser'},
            {id:'vision', label:'Vision', summary:'The user point of view'},
            {id:'features', label:'Features', summary:'The workflows the Studio covers'},
            {id:'workflow', label:'Workflow', summary:'From source data to final output'},
            {id:'stack', label:'Stack', summary:'The main technical building blocks'},
            {id:'faq', label:'FAQ', summary:'Practical project context and answers'},
        ],
        content: {
            overview: {
                kicker:        'Overview',
                title:         'Privacy first: keep journey data local, private, or synced in real time.',
                intro:         [
                    'We use journey on purpose: it is both a physical path and a personal one, tied to nature, people, and places, not just a line on a map.',
                    'It was also a journey through code, with a lot of discovery and learning across different domains.',
                ],
                highlightsLabel:'Product highlights',
                highlights:    [
                    {
                        icon: 'route',
                        title:'Local journey flow',
                        body: 'Import, review, and export journeys and tracks while keeping data in the browser.',
                    },
                    {
                        icon: 'box',
                        title:'2D and 3D views',
                        body: 'Choose the scene mode that fits the journey you are editing.',
                    },
                    {
                        icon: 'file-pdf',
                        title:'Media and reports',
                        body: 'Export screenshots, video, PDF reports, or packaged HTML reports from the same journey.',
                    },
                    {
                        icon: 'share-nodes',
                        title:'Share to social networks',
                        body: 'Use the browser share menu to send exported links and videos to your social networks when the device supports it.',
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
            vision: {
                kicker:'Vision',
                title: 'A map editor built around privacy and browser-local journeys.',
                cards: [
                    {
                        className:'accent-a',
                        icon:     'route',
                        title:    'Keep data local',
                        body:     'Review tracks, style paths, manage POIs, and keep your editing state in local storage.',
                    },
                    {
                        className:'accent-b',
                        icon:     'camera',
                        title:    'Direct the camera',
                        body:     'Switch scene modes, target precise viewpoints, and tune orbit or panorama controls as needed.',
                    },
                    {
                        className:'accent-c',
                        icon:     'clapperboard-play',
                        title:    'Export from private journeys',
                        body:     'Layer widgets, metrics, and overlays so screenshots, videos, and reports keep the right context without moving data out of the browser.',
                    },
                    {
                        className:'accent-b',
                        icon:     'share-nodes',
                        title:    'Share',
                        body:     'Send your stories out with the browser share sheet, straight to the apps people already use.',
                    },
                ],
            },
            features: {
                kicker:'Features',
                title: 'The workflows the Studio already supports.',
                cards: [
                    {icon:'route', title:'Journey and track editing', body:'Load journeys, edit metadata, tune visibility, and manage track presentation in a consistent way.'},
                    {icon:'map-location-dot', title:'POI workflows', body:'Create, focus, rotate, and keep point-centric views across both POIs and journey-level targets.'},
                    {icon:'globe-pointer', title:'Cesium scene control', body:'Move between 2D and 3D, track the active camera target, and keep navigation clear.'},
                    {icon:'arrows-rotate', title:'Orbit and panorama', body:'Adjust speed, direction, height offset, and pitch while the camera moves.'},
                    {icon:'chart-line', title:'Metrics and widgets', body:'Use elevation profiles, journey stats, dates, text, credits, and other overlays when they help the scene.'},
                    {icon:'file-pdf', title:'Journey reports', body:'Generate PDF reports or ZIP-packaged HTML reports with metadata, statistics, POIs, coordinates, altitude data, and map captures.'},
                    {icon:'location-crosshairs', title:'Geocoding and coordinates', body:'Use coordinate utilities and geocoding tools to place, inspect, and focus route context more precisely.'},
                    {icon:'clapperboard-play', title:'Media export', body:'Capture screenshots, define crop zones, and record video with the same visible overlays used in the editor.'},
                    {icon:'share-nodes', title:'Social sharing', body:'Share exported URLs and media through the browser share menu so they can move directly into social networks.'},
                ],
            },
            workflow: {
                kicker:'Workflow',
                title: 'From source data to final output.',
                steps: [
                    {index:'01', title:'Load source data', body:'Bring in GeoJSON, GPX, or KML files and rebuild a working journey context in the browser.'},
                    {index:'02', title:'Stage the experience', body:'Refine visibility, focus behavior, widgets, camera targets, rotation presets, and panorama settings.'},
                    {index:'03', title:'Capture and deliver', body:'Export images, video, or reports with the same scene framing, overlays, and metrics used during editing.'},
                    {index:'04', title:'Share outward', body:'Use the browser share menu to send exported links or videos to social networks when the device supports native sharing.'},
                ],
            },
            stack: {
                kicker:'Stack',
                title: 'Cesium, React, Bun, Valtio, Mediabunny, Web Awesome, Eleventy, and a local-first browser database.',
                items: [
                    {icon:'globe-pointer', label:'Cesium scene engine'},
                    {icon:'box', label:'Widget system'},
                    {icon:'database', label:'IndexedDB persistence'},
                    {icon:'file-pdf', label:'PDF and HTML reports'},
                    {icon:'video', label:'Media pipeline'},
                    {icon:'cloud-arrow-down', label:'PWA caching'},
                ],
                action:{
                    href: '/dependencies/',
                    label:'Open the Studio dependency inventory',
                },
            },
            faq: {
                kicker:'FAQ',
                title: 'Useful context around the project.',
                items: [
                    {
                        summary:'Who is the Studio for?',
                        body:   'People working with journeys who need to review, present, and export map scenes, reports, screenshots, or video.',
                    },
                    {
                        summary:'Can the Studio generate journey reports?',
                        body:   'Yes. A journey can be exported as a PDF report or as an HTML report packaged in a ZIP archive, with metadata, statistics, POIs, elevation data, coordinates, and map captures.',
                    },
                    {
                        summary:'What is the public license?',
                        body:   'The main repository is published under the PolyForm Noncommercial 1.0.0 license.',
                        links:  [
                            {href:'/licensing/', label:'licensing summary'},
                            {href:'/license/', label:'full license text'},
                            {href:'/contributor-license-agreement/', label:'Contributor License Agreement'},
                        ],
                    },
                ],
            },
        },
        pageCta: {
            eyebrow:'Studio links',
            title:  'Open the Studio or browse the source.',
            body:   'Use the hosted Studio for editing and the GitHub repository for the code and release history. Journey data stays local unless your browser setup is explicitly synced.',
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
            title:    'Transformez les moments outdoor en récits à partager.',
            lead:     'Marchez ou roulez, puis importez, éditez et partagez des vidéos de vos parcours sans quitter votre navigateur*',
            note:     '* Vos données restent privées et se synchronisent en temps réel quand c\'est disponible.',
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
            {id:'overview', label:'Vue d\'ensemble', summary:'Parcours privés dans le navigateur'},
            {id:'vision', label:'Vision', summary:'Le point de vue utilisateur'},
            {id:'features', label:'Fonctionnalités', summary:'Les workflows couverts par Studio'},
            {id:'workflow', label:'Workflow', summary:'De la donnée source au rendu final'},
            {id:'stack', label:'Stack', summary:'Les briques techniques principales'},
            {id:'faq', label:'FAQ', summary:'Contexte pratique et réponses'},
        ],
        content: {
            overview: {
                kicker:        'Vue d\'ensemble',
                title:         'La confidentialité d\'abord: gardez les données de parcours locales, privées ou synchronisées en temps réel.',
                intro:         [
                    'Nous utilisons volontairement le mot parcours: c\'est à la fois un chemin physique et une trajectoire personnelle liée à la nature, aux personnes et aux lieux, pas seulement une ligne sur une carte.',
                    'C\'était aussi un parcours dans le code, avec beaucoup de découverte et d\'apprentissage à travers différents domaines.',
                ],
                highlightsLabel:'Points forts du produit',
                highlights:    [
                    {
                        icon: 'route',
                        title:'Flux local de parcours',
                        body: 'Importer, relire et exporter des parcours et des traces tout en gardant les données dans le navigateur.',
                    },
                    {
                        icon: 'box',
                        title:'Vues 2D et 3D',
                        body: 'Choisissez le mode de scène qui correspond au parcours en cours d\'édition.',
                    },
                    {
                        icon: 'file-pdf',
                        title:'Médias et rapports',
                        body: 'Exporter des captures, vidéos, rapports PDF ou rapports HTML packagés à partir du même parcours.',
                    },
                    {
                        icon: 'share-nodes',
                        title:'Partage vers les réseaux sociaux',
                        body: 'Utilisez le menu de partage du navigateur pour envoyer liens exportés et vidéos vers vos réseaux sociaux quand l\'appareil le permet.',
                    },
                ],
                card: {
                    eyebrow:'Workflow cœur',
                    title:  'Un espace unique, privé par défaut.',
                    items:  [
                        {icon:'map-location-dot', title:'Stockage', text:'GeoJSON, GPX et KML'},
                        {icon:'arrows-rotate', title:'Confidentialité', text:'Local, privé, prêt à synchroniser'},
                        {icon:'chart-line', title:'Livrables', text:'Rapports, captures, vidéo'},
                    ],
                },
            },
            vision: {
                kicker:'Vision',
                title: 'Un éditeur cartographique construit autour de la confidentialité et des parcours locaux au navigateur.',
                cards: [
                    {
                        className:'accent-a',
                        icon:     'route',
                        title:    'Garder les données en local',
                        body:     'Relire les traces, styliser les chemins, gérer les POI et conserver l\'état d\'édition dans le stockage local.',
                    },
                    {
                        className:'accent-b',
                        icon:     'camera',
                        title:    'Diriger la caméra',
                        body:     'Basculer les modes de scène, cibler des points de vue précis et ajuster orbit ou panorama selon le besoin.',
                    },
                    {
                        className:'accent-c',
                        icon:     'clapperboard-play',
                        title:    'Exporter depuis des parcours privés',
                        body:     'Superposer widgets, métriques et overlays pour que captures, vidéos et rapports gardent le bon contexte sans sortir les données du navigateur.',
                    },
                    {
                        className:'accent-b',
                        icon:     'share-nodes',
                        title:    'Partager',
                        body:     'Diffusez vos récits via la feuille de partage du navigateur, directement vers les applications déjà utilisées.',
                    },
                ],
            },
            features: {
                kicker:'Fonctionnalités',
                title: 'Les workflows que Studio couvre déjà.',
                cards: [
                    {icon:'route', title:'Édition des parcours et traces', body:'Charger des parcours, éditer les métadonnées, ajuster la visibilité et gérer la présentation des traces de manière cohérente.'},
                    {icon:'map-location-dot', title:'Workflow POI', body:'Créer, focaliser, faire pivoter et conserver des vues centrées sur les points à la fois pour les POI et les cibles de parcours.'},
                    {icon:'globe-pointer', title:'Contrôle de scène Cesium', body:'Passer de la 2D à la 3D, suivre la cible caméra active et garder une navigation claire.'},
                    {icon:'arrows-rotate', title:'Orbit et panorama', body:'Ajuster la vitesse, la direction, le décalage de hauteur et le pitch pendant le mouvement de caméra.'},
                    {icon:'chart-line', title:'Métriques et widgets', body:'Utiliser profils altimétriques, statistiques, dates, textes, crédits et autres overlays quand ils servent la scène.'},
                    {icon:'file-pdf', title:'Rapports de parcours', body:'Générer des rapports PDF ou HTML ZIP avec métadonnées, statistiques, POI, coordonnées, altitudes et captures de carte.'},
                    {icon:'location-crosshairs', title:'Géocodage et coordonnées', body:'Utiliser les outils de coordonnées et de géocodage pour placer, inspecter et focaliser le contexte plus précisément.'},
                    {icon:'clapperboard-play', title:'Export média', body:'Capturer des images, définir des zones de crop et enregistrer des vidéos avec les mêmes overlays que dans l\'éditeur.'},
                    {icon:'share-nodes', title:'Partage social', body:'Partager URLs et médias exportés via le menu natif du navigateur afin de les envoyer directement vers les réseaux sociaux.'},
                ],
            },
            workflow: {
                kicker:'Workflow',
                title: 'De la donnée source au rendu final.',
                steps: [
                    {index:'01', title:'Charger les données source', body:'Importer des fichiers GeoJSON, GPX ou KML et reconstruire un contexte de parcours exploitable dans le navigateur.'},
                    {index:'02', title:'Mettre en scène l\'expérience', body:'Affiner la visibilité, le focus, les widgets, les cibles caméra, les presets de rotation et les réglages panorama.'},
                    {index:'03', title:'Capturer et livrer', body:'Exporter des images, vidéos ou rapports avec le même cadrage, les mêmes overlays et les mêmes métriques qu\'en édition.'},
                    {index:'04', title:'Partager vers l\'extérieur', body:'Utiliser le menu de partage du navigateur pour envoyer liens ou vidéos exportés vers les réseaux sociaux quand l\'appareil le supporte.'},
                ],
            },
            stack: {
                kicker:'Stack',
                title: 'Cesium, React, Bun, Valtio, Mediabunny, Web Awesome, Eleventy et une base navigateur orientée local.',
                items: [
                    {icon:'globe-pointer', label:'Moteur de scène Cesium'},
                    {icon:'box', label:'Système de widgets'},
                    {icon:'database', label:'Persistance IndexedDB'},
                    {icon:'file-pdf', label:'Rapports PDF et HTML'},
                    {icon:'video', label:'Pipeline média'},
                    {icon:'cloud-arrow-down', label:'Cache PWA'},
                ],
                action:{
                    href: '/fr/dependencies/',
                    label:'Ouvrir l\'inventaire des dépendances Studio',
                },
            },
            faq: {
                kicker:'FAQ',
                title: 'Contexte utile autour du projet.',
                items: [
                    {
                        summary:'À qui s\'adresse Studio ?',
                        body:   'Aux personnes qui travaillent avec des parcours et ont besoin de relire, présenter et exporter des scènes cartographiques, des rapports, des captures ou de la vidéo.',
                    },
                    {
                        summary:'Studio peut-il générer des rapports de parcours ?',
                        body:   'Oui. Un parcours peut être exporté en rapport PDF ou en rapport HTML packagé dans une archive ZIP, avec métadonnées, statistiques, POI, données d\'altitude, coordonnées et captures de carte.',
                    },
                    {
                        summary:'Quelle est la licence publique ?',
                        body:   'Le dépôt principal est publié sous licence PolyForm Noncommercial 1.0.0.',
                        links:  [
                            {href:'/fr/licensing/', label:'résumé de licence'},
                            {href:'/fr/license/', label:'texte complet'},
                            {href:'/fr/contributor-license-agreement/', label:'Contributor License Agreement'},
                        ],
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
                title:     'Understand the public license and legal references.',
                lead:      'This page mirrors the licensing summary maintained in the main Studio repository.',
                highlights:[
                    {label:'PolyForm Noncommercial 1.0.0', icon:'scale-balanced', variant:'regular'},
                    {label:'Commercial licensing available', icon:'briefcase', variant:'regular'},
                    {label:'Canonical wording sourced from studio', icon:'file-lines', variant:'regular'},
                ],
            },
            intro:       'The legal summary below is pulled at build time from the main Studio repository so the public site stays aligned with the source documentation.',
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
                title:     'Comprendre la licence publique et les références légales.',
                lead:      'Cette page reflète le résumé de licence maintenu dans le dépôt principal Studio.',
                highlights:[
                    {label:'PolyForm Noncommercial 1.0.0', icon:'scale-balanced', variant:'regular'},
                    {label:'Licence commerciale disponible', icon:'briefcase', variant:'regular'},
                    {label:'Texte canonique issu de studio', icon:'file-lines', variant:'regular'},
                ],
            },
            intro:       'Le résumé légal ci-dessous est récupéré au build depuis le dépôt principal Studio afin que le site public reste aligné sur la documentation source.',
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
            title:       'Full License',
            description: 'Full PolyForm Noncommercial 1.0.0 text used for the public version of LGS1920 Studio.',
            hero:        {
                video: false,
                badge: 'Legal',
                kicker:'Full license',
                title: 'Read the complete PolyForm Noncommercial 1.0.0 text.',
                lead:  'This is the full public license text mirrored from the main Studio repository.',
            },
            intro:       'The license text below is rendered directly from the canonical Markdown kept in the studio repository.',
        },
        fr: {
            title:       'Licence complète',
            description: 'Texte complet PolyForm Noncommercial 1.0.0 utilisé pour la version publique de LGS1920 Studio.',
            hero:        {
                video: false,
                badge: 'Légal',
                kicker:'Licence complète',
                title: 'Lire le texte complet de PolyForm Noncommercial 1.0.0.',
                lead:  'Il s\'agit du texte complet de licence publique miroir depuis le dépôt principal Studio.',
            },
            intro:       'Le texte de licence ci-dessous est rendu directement depuis le Markdown canonique conservé dans le dépôt Studio.',
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
    userGuide,
    legal,
    changelog,
    byPath:getPageDefinition,
    getLocalizedContent,
    getPageContent,
    getGeneratedPageData,
}
