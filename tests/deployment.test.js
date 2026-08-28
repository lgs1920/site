import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'

import {validateProductionRedirects} from '../deployment/Deployment.js'

const createBuild = (files) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'lgs1920-deployment-'))

    for (const [relativePath, content] of Object.entries(files)) {
        const filePath = path.join(directory, relativePath)
        fs.mkdirSync(path.dirname(filePath), {recursive: true})
        fs.writeFileSync(filePath, content)
    }

    return directory
}

test('rejects a production build without localized redirects', () => {
    const directory = createBuild({
        'index.html': '<html><body>homepage</body></html>',
        'fr/index.html': '<html><body>accueil</body></html>',
    })

    try {
        assert.throws(() => validateProductionRedirects(directory), /Production redirect validation failed/)
    } finally {
        fs.rmSync(directory, {recursive: true, force: true})
    }
})

test('accepts the localized production redirects', () => {
    const directory = createBuild({
        'index.html': '<meta http-equiv="refresh" content="0; url=https://lgs1920.fr/registration/"><script>window.location.replace(\'https://lgs1920.fr/registration/\')</script>',
        'fr/index.html': '<meta http-equiv="refresh" content="0; url=https://lgs1920.fr/fr/registration/"><script>window.location.replace(\'https://lgs1920.fr/fr/registration/\')</script>',
        'registration/index.html': '<html><body>registration</body></html>',
    })

    try {
        assert.equal(validateProductionRedirects(directory), 2)
    } finally {
        fs.rmSync(directory, {recursive: true, force: true})
    }
})
