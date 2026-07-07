import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import crypto from 'node:crypto'
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

export default function(eleventyConfig) {
    eleventyConfig.setLibrary('md', markdownLibrary)
    eleventyConfig.addPassthroughCopy({
        'src/assets': 'src/assets',
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
