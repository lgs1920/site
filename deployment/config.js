export default {
    local: {
        buildOutput: '_site',
        distRoot:    'dist',
    },

    remote: {
        current:  'current',
        releases: 'releases',

        production: {
            host: 'p5077.phpnet.org',
            path: '/home/www/lgs1920',
            user: 'p5077',
        },

        staging: {
            host: 'p5077.phpnet.org',
            path: '/home/www/lgs1920',
            user: 'p5077',
        },

        test: {
            host: 'p5077.phpnet.org',
            path: '/home/www/lgs1920',
            user: 'p5077',
        },
    },

    site: {
        production: {
            domain:   'lgs1920.fr',
            protocol: 'https',
        },

        staging: {
            domain:   'lgs1920.fr',
            protocol: 'https',
        },

        test: {
            domain:   'lgs1920.fr',
            protocol: 'https',
        },
    },
}
