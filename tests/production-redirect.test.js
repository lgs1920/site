import test from 'node:test'
import assert from 'node:assert/strict'

import {getProductionRedirectUrl} from '../eleventy.config.js'

test('keeps standalone Studio registration pages available in production', () => {
    assert.equal(getProductionRedirectUrl('/registration/studio/'), null)
    assert.equal(getProductionRedirectUrl('/fr/registration/studio/'), null)
})

test('normalizes standalone Studio registration paths before checking exemptions', () => {
    assert.equal(getProductionRedirectUrl('/registration/studio'), null)
    assert.equal(getProductionRedirectUrl('/fr/registration/studio'), null)
})

test('redirects regular pages to their localized registration page in production', () => {
    assert.equal(getProductionRedirectUrl('/studio/'), 'https://lgs1920.fr/registration/')
    assert.equal(getProductionRedirectUrl('/fr/studio/'), 'https://lgs1920.fr/fr/registration/')
    assert.equal(getProductionRedirectUrl('/stats/'), 'https://lgs1920.fr/registration/')
    assert.equal(getProductionRedirectUrl('/fr/stats/'), 'https://lgs1920.fr/fr/registration/')
})

test('keeps localized help routes available in production', () => {
    const publicHelpPaths = [
        '/faq/',
        '/fr/faq/',
        '/user-guide/getting-started/first-steps/',
        '/fr/user-guide/getting-started/first-steps/',
        '/changelog/page/2/',
        '/fr/changelog/page/2/',
        '/contact/',
        '/fr/contact/',
        '/credits/open-source/',
        '/dependencies/',
        '/fr/licensing/',
        '/license/',
        '/fr/contributor-license-agreement/',
    ]

    for (const path of publicHelpPaths) {
        assert.equal(getProductionRedirectUrl(path), null, path)
    }
})
