import { legalDocs, renderLegalSection } from './_lib/legal-docs.js'

export default class {
    data() {
        return {
            layout:      'layouts/page.html',
            permalink:   '/licensing/index.html',
            title:       'Licensing',
            description: 'Public license, commercial licensing path, and legal references for LGS1920 Studio.',
            pageClass:   'legal-page',
            hero:        {
                video:      false,
                badge:      'Legal',
                kicker:     'Licensing',
                title:      'Understand the public and commercial licensing model.',
                lead:       'This page mirrors the licensing summary maintained in the main Studio repository.',
                highlights: [
                    {
                        label:  'PolyForm Noncommercial 1.0.0',
                        icon:   'scale-balanced',
                        variant:'solid',
                    },
                    {
                        label:  'Commercial licensing available',
                        icon:   'briefcase',
                        variant:'solid',
                    },
                    {
                        label:  'Canonical wording sourced from studio',
                        icon:   'file-lines',
                        variant:'solid',
                    },
                ],
            },
            sectionNav:  legalDocs.licensing.sectionNav,
            pageCta:     {
                eyebrow:'Commercial use',
                title:  'Need to remove the Noncommercial restriction?',
                body:   'Commercial licensing requests and contribution questions are handled directly by LGS1920.',
                actions:[
                    {
                        label: 'Contact',
                        href:  'mailto:contact@lgs1920.fr',
                        variant:'brand',
                        icon:  {
                            name:   'envelope',
                            variant:'solid',
                        },
                    },
                    {
                        label:     'Open Studio repo',
                        href:      'https://github.com/lgs1920/studio',
                        appearance:'outlined',
                        external:  true,
                        icon:      {
                            family:'brands',
                            name:  'github',
                        },
                    },
                ],
            },
        }
    }

    render() {
        return renderLegalSection({
            document: legalDocs.licensing,
            intro:    'The legal summary below is pulled at build time from the main studio repository so the public site stays aligned with the source documentation.',
        })
    }
}
