import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import crypto from 'node:crypto'
import path from 'node:path'

if (typeof crypto.hash !== 'function') {
    crypto.hash = (algorithm, data, outputEncoding) => crypto.createHash(algorithm).update(data).digest(outputEncoding)
}

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyVitePlugin, {
        viteOptions: {
            resolve: {
                alias: {
                    '/src': path.resolve('.', 'src'),
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
