import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import crypto from 'node:crypto'
import fs from 'node:fs'
import MarkdownIt from 'markdown-it'
import path from 'node:path'

if (typeof crypto.hash !== 'function') {
    crypto.hash = (algorithm, data, outputEncoding) => crypto.createHash(algorithm).update(data).digest(outputEncoding)
}

const stripHeadingMarkup = (value = '') => value
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const slugify = (value) => stripHeadingMarkup(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const createHeadingId = (text, env) => {
    const baseId = slugify(text) || 'section'
    const seenIds = env.headingIds ?? new Map()
    const count = seenIds.get(baseId) || 0

    seenIds.set(baseId, count + 1)
    env.headingIds = seenIds

    return count === 0 ? baseId : `${baseId}-${count + 1}`
}

const markdownLibrary = new MarkdownIt({
    html:      true,
    linkify:   true,
    typographer:true,
})
const renderHeadingOpen = markdownLibrary.renderer.rules.heading_open
    ?? ((tokens, index, options, env, self) => self.renderToken(tokens, index, options))

markdownLibrary.renderer.rules.heading_open = (tokens, index, options, env, self) => {
    const token = tokens[index]
    const renderEnv = env ?? {}

    if (!token.attrGet('id')) {
        const inlineToken = tokens[index + 1]
        const headingText = inlineToken?.content || ''

        if (headingText) {
            token.attrSet('id', createHeadingId(headingText, renderEnv))
        }
    }

    return renderHeadingOpen(tokens, index, options, env, self)
}

const LOGO_SOURCE_DIR = path.resolve('..', 'studio', 'public', 'assets', 'logo')
const LOGO_OUTPUT_DIR = path.resolve('public', 'assets', 'logo')
const LOGO_STYLE_TEXT = fs.readFileSync(path.join(LOGO_SOURCE_DIR, 'style.css'), 'utf8')
const LOGO_HORIZONTAL_TEXT = fs.readFileSync(path.join(LOGO_SOURCE_DIR, 'logo-horizontal.svg'), 'utf8')
const LOGO_STANDALONE_TEXT = fs.readFileSync(path.join(LOGO_SOURCE_DIR, 'logo.svg'), 'utf8')
const PRODUCTION_HOME_REDIRECTS = {
    '/':    'https://lgs1920.fr/registration/',
    '/fr/': 'https://lgs1920.fr/fr/registration/',
}

const renderHomeRedirect = (redirectUrl, locale) => `<!doctype html>
<html lang="${locale}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${redirectUrl}">
    <link rel="canonical" href="${redirectUrl}">
    <script>window.location.replace('${redirectUrl}')</script>
</head>
<body></body>
</html>
`

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const copyLogoAssets = () => {
    fs.mkdirSync(LOGO_OUTPUT_DIR, {recursive: true})

    for (const fileName of ['logo-horizontal.svg', 'logo-vertical.svg', 'logo.svg', 'style.css']) {
        fs.copyFileSync(path.join(LOGO_SOURCE_DIR, fileName), path.join(LOGO_OUTPUT_DIR, fileName))
    }
}

const normalizeStandaloneLogo = (svgText) => svgText
    .replace(/<\?xml-stylesheet[^>]*>\s*/i, '')
    .replace(/<\?xml[^>]*>\s*/i, '')
    .replace(/xmlns:ns0="http:\/\/www\.w3\.org\/2000\/svg"/i, 'xmlns="http://www.w3.org/2000/svg"')
    .replace(/\sxmlns:ns1="http:\/\/www\.w3\.org\/1999\/xlink"/i, '')
    .replace(/<\/?ns0:/g, match => match === '</ns0:' ? '</' : '<')
    .replace(/\sns1:href="[^"]*"/g, '')

const extractStandaloneLogoInnerMarkup = (svgText) => normalizeStandaloneLogo(svgText)
    .replace(/^[\s\S]*?<svg\b[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '')

const extractLogoPlacement = (svgText) => {
    const imageTag = svgText.match(/<[^>]*image[^>]*href="(?:\/assets\/logo\/)?logo\.svg"[^>]*\/>/i)?.[0]
    const x = imageTag?.match(/\sx="([^"]+)"/i)?.[1] ?? '0'
    const y = imageTag?.match(/\sy="([^"]+)"/i)?.[1] ?? '0'

    return {x, y}
}

const prefixSvgIds = (svgText, idPrefix) => {
    const ids = [...svgText.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])
    const uniqueIds = [...new Set(ids)]

    return uniqueIds.reduce((prefixedSvg, id) => {
        const prefixedId = `${idPrefix}-${id}`
        const escapedId = escapeRegExp(id)

        return prefixedSvg
            .replace(new RegExp(`id="${escapedId}"`, 'g'), `id="${prefixedId}"`)
            .replace(new RegExp(`href="#${escapedId}"`, 'g'), `href="#${prefixedId}"`)
            .replace(new RegExp(`url\\(#${escapedId}\\)`, 'g'), `url(#${prefixedId})`)
    }, svgText)
}

const normalizeSvg = ({
    svgText,
    styleText,
    className = null,
    primaryColor,
    secondaryColor,
    textPrimaryColor,
    textSecondaryColor,
    secondaryOpacity,
    idPrefix,
    dimensions,
    title,
    inlineLogoMarkup = null,
}) => {
    const styleAttributes = [
        'display:block',
        'overflow:visible',
        dimensions.width ? `width:${dimensions.width}` : null,
        dimensions.height ? `height:${dimensions.height}` : null,
        primaryColor ? `--lgs--logo-primary:${primaryColor}` : null,
        secondaryColor ? `--lgs--logo-secondary:${secondaryColor}` : null,
        textPrimaryColor ? `--lgs--logo-text-primary:${textPrimaryColor}` : null,
        textSecondaryColor ? `--lgs--logo-text-secondary:${textSecondaryColor}` : null,
        secondaryOpacity !== null ? `--lgs--logo-secondary-opacity:${secondaryOpacity}` : null,
    ].filter(Boolean).join(';')

    let normalized = svgText
        .replace(/<\?xml-stylesheet[^>]*>\s*/i, '')
        .replace(/<\?xml[^>]*>\s*/i, '')
        .replace(/xmlns:ns0="http:\/\/www\.w3\.org\/2000\/svg"/i, 'xmlns="http://www.w3.org/2000/svg"')
        .replace(/\sxmlns:ns1="http:\/\/www\.w3\.org\/1999\/xlink"/i, '')
        .replace(/<\/?ns0:/g, match => match === '</ns0:' ? '</' : '<')
        .replace(/\sns1:href="[^"]*"/g, '')
        .replace(/href="logo\.svg"/g, 'href="/assets/logo/logo.svg"')
        .replace(/href="LGS1920_logo\.svg"/g, 'href="/assets/logo/logo.svg"')
        .replace(/<svg\b([^>]*)class="([^"]*)"/i, `<svg$1class="${className ? `${className} ` : ''}$2"`)
        .replace(/(<svg\b[^>]*)(>)/i, `$1 style="${styleAttributes}"$2`)
        .replace(/(<svg\b[^>]*>)/i, `$1<style>${styleText}</style>`)

    if (inlineLogoMarkup) {
        normalized = normalized.replace(
            /<image\b[^>]*href="\/assets\/logo\/logo\.svg"[^>]*\/>/i,
            inlineLogoMarkup,
        )
    }

    if (title) {
        normalized = normalized.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    }

    normalized = prefixSvgIds(normalized, idPrefix)

    return normalized
}

const studioLogoHorizontalMarkup = normalizeSvg({
    svgText: LOGO_HORIZONTAL_TEXT,
    className: 'brand-logo-mark brand-logo-image',
    primaryColor: 'var(--wa-color-brand)',
    secondaryColor: 'var(--wa-color-brand)',
    textPrimaryColor: 'var(--wa-color-brand)',
    textSecondaryColor: 'var(--wa-color-brand)',
    secondaryOpacity: 0,
    idPrefix: 'site-logo',
    dimensions: {
        width: 'clamp(6.6rem, 15vw, 10rem)',
        height: null,
    },
    title: 'LGS1920 Studio logo',
    styleText: LOGO_STYLE_TEXT,
    inlineLogoMarkup: (() => {
        const placement = extractLogoPlacement(LOGO_HORIZONTAL_TEXT)
        return `<g transform="translate(${placement.x} ${placement.y})">${extractStandaloneLogoInnerMarkup(LOGO_STANDALONE_TEXT)}</g>`
    })(),
})

export default function(eleventyConfig) {
    eleventyConfig.setLibrary('md', markdownLibrary)
    copyLogoAssets()
    eleventyConfig.addPassthroughCopy({
        'src/assets': 'src/assets',
        'public/assets/flags': 'assets/flags',
        'public/assets/logo': 'assets/logo',
    })
    eleventyConfig.addGlobalData('studioLogoHorizontalMarkup', studioLogoHorizontalMarkup)
    eleventyConfig.addTransform('production-home-redirect', function(content) {
        if (process.env.LGS1920_DEPLOY_PLATFORM !== 'production') {
            return content
        }

        const redirectUrl = PRODUCTION_HOME_REDIRECTS[this.page.url]
        if (!redirectUrl) {
            return content
        }

        const locale = this.page.url === '/fr/' ? 'fr' : 'en'
        return renderHomeRedirect(redirectUrl, locale)
    })

    eleventyConfig.addPlugin(EleventyVitePlugin, {
        viteOptions: {
            resolve: {
                alias: {
                    '/src': path.resolve('.', 'src'),
                    '@studio-wa-theme': path.resolve('..', 'studio', 'src', 'assets', 'css', 'themes', 'webawesome'),
                },
            },
        },
    })

    return {
        dir: {
            input:   'src',
            includes:'_includes',
            output:  '_site',
        },
        htmlTemplateEngine:     'liquid',
        markdownTemplateEngine: 'liquid',
    }
}
