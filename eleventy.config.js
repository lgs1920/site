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
const LOGO_FILE_NAMES = ['logo-horizontal.png', 'logo-vertical.png', 'logo.png']
const PRODUCTION_REGISTRATION_URLS = {
    en: 'https://lgs1920.fr/registration/',
    fr: 'https://lgs1920.fr/fr/registration/',
}
const PRODUCTION_REDIRECT_EXEMPT_PATHS = new Set(['/403.html', '/404.html', '/fr/403.html', '/fr/404.html'])

const getProductionRedirectUrl = (pageUrl) => {
    if (PRODUCTION_REDIRECT_EXEMPT_PATHS.has(pageUrl)) {
        return null
    }

    const normalizedPageUrl = pageUrl.endsWith('/') ? pageUrl : `${pageUrl}/`
    const locale = normalizedPageUrl === '/fr/' || normalizedPageUrl.startsWith('/fr/') ? 'fr' : 'en'
    const redirectUrl = PRODUCTION_REGISTRATION_URLS[locale]

    if (normalizedPageUrl === new URL(redirectUrl).pathname) {
        return null
    }

    return redirectUrl
}

const renderProductionRedirect = (redirectUrl, locale) => `<!doctype html>
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

const copyLogoAssets = () => {
    fs.mkdirSync(LOGO_OUTPUT_DIR, {recursive: true})

    for (const fileName of LOGO_FILE_NAMES) {
        fs.copyFileSync(path.join(LOGO_SOURCE_DIR, fileName), path.join(LOGO_OUTPUT_DIR, fileName))
    }
}

const studioLogoHorizontalMarkup = '<img class="brand-logo-mark brand-logo-image" src="/assets/logo/logo-horizontal.png" alt="LGS1920 Studio logo">'

export default function(eleventyConfig) {
    eleventyConfig.setLibrary('md', markdownLibrary)
    copyLogoAssets()
    eleventyConfig.addPassthroughCopy({
        'public/.htaccess': '.htaccess',
        'src/assets': 'src/assets',
        'public/assets/flags': 'assets/flags',
        'public/assets/errors': 'assets/errors',
    })
    for (const fileName of LOGO_FILE_NAMES) {
        eleventyConfig.addPassthroughCopy({
            [`public/assets/logo/${fileName}`]: `assets/logo/${fileName}`,
        })
    }
    eleventyConfig.addGlobalData('studioLogoHorizontalMarkup', studioLogoHorizontalMarkup)
    eleventyConfig.addTransform('production-registration-redirect', function(content) {
        if (process.env.LGS1920_DEPLOY_PLATFORM !== 'production') {
            return content
        }

        if (!this.page?.outputPath?.endsWith('.html')) {
            return content
        }

        const redirectUrl = getProductionRedirectUrl(this.page.url)
        if (!redirectUrl) {
            return content
        }

        const locale = this.page.url === '/fr/' || this.page.url.startsWith('/fr/') ? 'fr' : 'en'
        return renderProductionRedirect(redirectUrl, locale)
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
