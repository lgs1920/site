import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:      'layouts/page.html',
            permalink:   '/dependencies/index.html',
            title:       'Dependency Inventory',
            description: 'Readable dependency snapshot generated from the main LGS1920 Studio repository.',
            pageClass:   'legal-page',
            hero:        {
                video:      false,
                badge:      'Stack',
                kicker:     'Dependencies',
                title:      'Browse the current dependency inventory of LGS1920 Studio.',
                lead:       'This page mirrors the dependency snapshot maintained in the main Studio repository and generated at build time.',
                highlights: [
                    {
                        label:  'Runtime packages',
                        icon:   'box-open-full',
                        variant:'regular',
                    },
                    {
                        label:  'Build and quality tooling',
                        icon:   'screwdriver-wrench',
                        variant:'regular',
                    },
                    {
                        label:  'Canonical source from studio',
                        icon:   'file-lines',
                        variant:'regular',
                    },
                ],
            },
            sectionNav:  legalDocs.dependencies.sectionNav,
            pageCta:     {
                eyebrow:'Source of truth',
                title:  'The dependency inventory is generated from the main Studio repository.',
                body:   'This site page stays readable, but the source of truth remains the Studio package manifest and its companion dependency document.',
                actions:[
                    {
                        label: 'Open Studio repo',
                        href:  'https://github.com/lgs1920/studio',
                        variant:'brand',
                        external:true,
                        icon:  {
                            family:'brands',
                            name:  'github',
                        },
                    },
                    {
                        label:     'Open Studio',
                        href:      'https://studio.lgs1920.fr',
                        appearance:'outlined',
                        external:  true,
                        icon:      {
                            name:   'arrow-up-right-from-square',
                            variant:'regular',
                        },
                    },
                ],
            },
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.dependencies,
            intro:    'The dependency inventory below is pulled at build time from the main Studio repository so the public site reflects the same dependency snapshot.',
        })
    }
}
