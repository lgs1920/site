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
})
