export default {
    layout:    'layouts/page.html',
    pageClass: 'guide-page',
    guidePage: true,
    pageCta:   {
        eyebrow:'Use the Studio',
        title:  'Keep the guide open while you prepare a journey, tune the scene, and capture the output.',
        body:   'The guide follows the same order as a typical user session: start, import, edit, compose, and export.',
        actions:[
            {
                label:     'Launch Studio',
                href:      'https://studio.lgs1920.fr',
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
                href:      'mailto:contact@lgs1920.fr',
                appearance:'outlined',
                variant:   'brand',
                icon:      {
                    name:   'envelope',
                    variant:'regular',
                },
            },
        ],
    },
}
