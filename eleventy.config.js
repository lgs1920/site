import { icon } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowsRotate,
    faBullseye,
    faCamera,
    faChartLineUp,
    faClapperboardPlay,
    faCompassDrafting,
    faCube,
    faDatabase,
    faEarthEurope,
    faEnvelope,
    faGlobe,
    faLayerGroup,
    faLocationCrosshairs,
    faMapLocationDot,
    faMountains,
    faPhotoFilm,
    faRoute,
    faVideo,
} from '@fortawesome/pro-regular-svg-icons'
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ICONS = {
    brands: {
        github: faGithub,
    },
    regular: {
        arrowsRotate:      faArrowsRotate,
        bullseye:          faBullseye,
        camera:            faCamera,
        chartLineUp:       faChartLineUp,
        clapperboardPlay:  faClapperboardPlay,
        compassDrafting:   faCompassDrafting,
        cube:              faCube,
        database:          faDatabase,
        earthEurope:       faEarthEurope,
        envelope:          faEnvelope,
        globe:             faGlobe,
        layerGroup:        faLayerGroup,
        locationCrosshairs:faLocationCrosshairs,
        mapLocationDot:    faMapLocationDot,
        mountains:         faMountains,
        photoFilm:         faPhotoFilm,
        route:             faRoute,
        video:             faVideo,
    },
    solid: {
        arrowRight: faArrowRight,
    },
}

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'src/assets': 'assets',
    })

    eleventyConfig.addPassthroughCopy({
        'node_modules/@awesome.me/webawesome/dist-cdn': 'vendor/webawesome',
    })

    eleventyConfig.addNunjucksShortcode('fa', (name, style = 'regular', label = '') => {
        const definition = ICONS[style]?.[name]

        if (!definition) {
            return ''
        }

        const svg = icon(definition, label ? {title: label} : {}).html.join('')
        const hidden = label ? 'false' : 'true'

        return svg.replace('<svg', `<svg class="fa-svg fa-${style} fa-${name}" aria-hidden="${hidden}"`)
    })

    return {
        dir: {
            input:   'src',
            includes:'_includes',
            output:  '_site',
        },
        htmlTemplateEngine:     'njk',
        markdownTemplateEngine: 'njk',
    }
}
