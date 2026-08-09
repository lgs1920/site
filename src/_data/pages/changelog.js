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
        intro: 'The release notes below are concatenated at build time from the changelog Markdown files maintained in the main Studio repository.',
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
        intro: 'Les notes de version ci-dessous sont concaténées au build à partir des fichiers Markdown de changelog maintenus dans le dépôt principal Studio.',
    },
}

export default changelog
