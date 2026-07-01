import { getChangelog, renderChangelogIndex } from '../_lib/changelog-docs.js'

const changelog = getChangelog('fr')

export default class {
    data() {
        return {
            description:'Historique des versions de LGS1920 Studio, généré à partir des fichiers de changelog du dépôt principal.',
            hero:       {
                video:  false,
                badge:  'Notes de version',
                kicker: 'Historique',
                title:  'Parcourir l\'historique des versions de LGS1920 Studio.',
                lead:   'Cette page concatène les fichiers Markdown de changelog publiés dans le dépôt principal Studio en une chronologie lisible.',
                highlights: [
                    {
                        icon:   'file-lines',
                        label:  `${changelog.count} fichiers de notes de version`,
                        variant:'regular',
                    },
                    {
                        icon:   'calendar-days',
                        label:  `Dernière entrée: ${changelog.latest?.version || 'n/a'}`,
                        variant:'regular',
                    },
                    {
                        icon:   'database',
                        label:  'Généré au build depuis studio',
                        variant:'regular',
                    },
                ],
            },
            layout:     'layouts/page.html',
            pageClass:  'legal-page changelog-page',
            permalink:  '/fr/changelog/index.html',
            sectionNav: changelog.sectionNav,
            title:      'Historique',
        }
    }

    render() {
        return renderChangelogIndex({
            directory:{
                sourceLabel:changelog.sourceLabel,
                sourceUrl:  changelog.sourceUrl,
            },
            entries: changelog.entries,
            labels:  {
                intro:            'Les notes de version ci-dessous sont concaténées au build à partir des fichiers Markdown de changelog maintenus dans le dépôt principal Studio.',
                newer:            'Plus récent',
                older:            'Plus ancien',
                releaseNavigation:'Navigation des versions',
                source:           'Source',
                sourceDirectory:  'Dossier source',
                version:          'Version',
            },
        })
    }
}
