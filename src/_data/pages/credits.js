import {repositoryUrl} from './shared.js'

const credits = {
    general: {
        layout:   'layouts/page.html',
        pageClass:'legal-page credits-page',
        path:     '/credits/',
        en:       {
            title:       'Credits',
            description: 'Attribution and source credits for LGS1920 Studio.',
            hero:        {
                video:     false,
                badge:     'Attribution',
                kicker:    'Credits',
                title:     'Meet the projects and data providers behind Studio.',
                lead:      'These credits are assembled at build time from the Markdown files maintained in the main Studio repository.',
                highlights:[
                    {label:'3 source documents', icon:'file-lines', variant:'regular'},
                    {label:'Maps, terrain, and geocoding', icon:'map', variant:'regular'},
                    {label:'Open source code on its own page', icon:'code', variant:'regular'},
                ],
            },
            intro:       'The sections below acknowledge the map engine, data providers, and geocoding services used by LGS1920 Studio.',
            pageCta:     {
                eyebrow:'Keep exploring',
                title:  'Want the code dependency list too?',
                body:   'Read the dedicated open source credits page or browse the full dependency inventory maintained for Studio.',
                actions:[
                    {
                        label:     'Open source credits',
                        href:      '/credits/open-source/',
                        variant:   'brand',
                        icon:      {name:'code', variant:'regular'},
                    },
                    {
                        label:     'Dependency inventory',
                        href:      '/dependencies/',
                        appearance:'outlined',
                        icon:      {name:'box-open-full', variant:'regular'},
                    },
                ],
            },
        },
    },
    openSource: {
        layout:   'layouts/page.html',
        pageClass:'legal-page credits-page open-source-credits-page',
        path:     '/credits/open-source/',
        en:       {
            title:       'Open Source Credits',
            description: 'Open source software credits for LGS1920 Studio.',
            hero:        {
                video:     false,
                badge:     'Open source',
                kicker:    'Open Source Credits',
                title:     'Explore the open source projects powering Studio.',
                lead:      'This page mirrors the dedicated open source credit document maintained in the main Studio repository.',
                highlights:[
                    {label:'Map and 3D', icon:'cube', variant:'regular'},
                    {label:'Runtime and tooling', icon:'screwdriver-wrench', variant:'regular'},
                    {label:'User interface libraries', icon:'window', variant:'regular'},
                ],
            },
            intro:       'The open source projects below are credited from the canonical Studio document. Other runtime, tooling, and trusted dependencies are listed separately in the dependency inventory.',
            pageCta:     {
                eyebrow:'Project sources',
                title:  'Read the complete credits collection.',
                body:   'Return to the general credits page for map providers, geocoding, and other attribution details.',
                actions:[
                    {
                        label:     'All credits',
                        href:      '/credits/',
                        variant:   'brand',
                        icon:      {name:'arrow-left', variant:'regular'},
                    },
                    {
                        label:     'Open Studio repository',
                        href:      repositoryUrl,
                        appearance:'outlined',
                        external:  true,
                        icon:      {family:'brands', name:'github'},
                    },
                ],
            },
        },
    },
}

export default credits
