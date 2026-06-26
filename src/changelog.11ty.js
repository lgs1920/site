import changelog, { renderChangelogIndex } from './_lib/changelog-docs.js'

export default class {
    data() {
        return {
            description:'Full release history of LGS1920 Studio, generated from the main Studio changelog files.',
            hero:       {
                video:  false,
                badge:  'Release notes',
                kicker: 'Changelog',
                title:  'Browse the release history of LGS1920 Studio.',
                lead:   'This page concatenates the Markdown changelog files published in the main Studio repository into one readable timeline.',
                highlights: [
                    {
                        icon:   'file-lines',
                        label:  `${changelog.count} release notes files`,
                        variant:'regular',
                    },
                    {
                        icon:   'calendar-days',
                        label:  `Latest entry: ${changelog.latest?.version || 'n/a'}`,
                        variant:'regular',
                    },
                    {
                        icon:   'database',
                        label:  'Generated at build time from studio',
                        variant:'regular',
                    },
                ],
            },
            layout:     'layouts/page.html',
            pageClass:  'legal-page changelog-page',
            permalink:  '/changelog/index.html',
            sectionNav: changelog.sectionNav,
            title:      'Changelog',
        }
    }

    render() {
        return renderChangelogIndex({
            directory:{
                sourceLabel:changelog.sourceLabel,
                sourceUrl:  changelog.sourceUrl,
            },
            entries: changelog.entries,
        })
    }
}
