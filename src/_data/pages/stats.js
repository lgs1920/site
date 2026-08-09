const stats = {
    layout:   'layouts/page.html',
    requiresBackend:true,
    pageClass:'stats-page',
    path:     '/stats/',
    en:       {
        title:      'Statistics',
        description:'Current and historical LGS1920 Studio usage counters by the viewer’s local period.',
        hero:       {
            video:     false,
            badge:     'Live counters',
            kicker:    'Statistics',
            title:     'See the latest Studio usage counts.',
            lead:      'Read-only counters are loaded from the backend when this page opens. Daily, weekly, monthly, and yearly values use the viewer’s local time zone.',
            highlights:[
                {label:'Visits', icon:'eye', variant:'regular'},
                {label:'Journeys', icon:'route', variant:'regular'},
                {label:'Draft and HQ video', icon:'clapperboard-play', variant:'regular'},
            ],
        },
        sectionTitle:'Usage counters',
        intro:       'Each value is an accepted event count, not a unique visitor count (no IP or other data except time zone).',
        sectionNav:  [
            {id:'stats-table', label:'Usage counters', summary:'Current and historical values by local date period'},
        ],
    },
    fr:       {
        title:      'Statistiques',
        description:'Compteurs d’utilisation actuels et historiques de LGS1920 Studio selon la période locale du visiteur.',
        hero:       {
            video:     false,
            badge:     'Compteurs en direct',
            kicker:    'Statistiques',
            title:     'Consulter les derniers compteurs de Studio.',
            lead:      'Les compteurs en lecture seule sont chargés depuis le backend à l’ouverture de cette page. Les valeurs quotidiennes, hebdomadaires, mensuelles et annuelles utilisent le fuseau horaire local du visiteur.',
            highlights:[
                {label:'Visites', icon:'eye', variant:'regular'},
                {label:'Parcours', icon:'route', variant:'regular'},
                {label:'Vidéo brouillon et HQ', icon:'clapperboard-play', variant:'regular'},
            ],
        },
        sectionTitle:'Compteurs d’utilisation',
        intro:       'Chaque valeur compte les événements acceptés, et non les visiteurs uniques (pas d\'adresse IP ni d\'autre donnée, à l\'exception du fuseau horaire).',
        sectionNav:  [
            {id:'stats-table', label:'Compteurs d’utilisation', summary:'Valeurs actuelles et historiques par période locale'},
        ],
    },
}

export default stats
