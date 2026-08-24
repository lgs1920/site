import test from 'node:test'
import assert from 'node:assert/strict'

import studioPresentation from '../src/_data/pages/studio-presentation.js'
import studioRegistration from '../src/_data/pages/studio-registration.js'
import {renderStudioPresentationPage} from '../src/_lib/studio-presentation-page.js'

test('renders the complete Studio presentation with its four sections', () => {
    const html = renderStudioPresentationPage(studioPresentation.en)

    assert.match(html, /id="studio-overview"/)
    assert.match(html, /id="studio-workflow"/)
    assert.match(html, /id="studio-outputs"/)
    assert.match(html, /id="studio-before-starting"/)
    assert.match(html, /Instagram, TikTok, YouTube/)
    assert.match(html, /Video for social networks/)
    assert.match(html, /Cesium engine and free access/)
    assert.match(html, /Optional paid providers/)
    assert.match(html, /name="lock" aria-hidden="true"><\/wa-icon>\s*<h3>Privacy and access for everyone\.<\/h3>/)
    assert.match(html, /name="location-pin-lock" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Privacy first<\/strong>\s*<span>\s*Your data stays with you: browser, device, or cloud\.[\s\S]*?<\/span>/)
    assert.match(html, /name="circle-check" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Studio is free<\/strong>\s*<span>\s*Studio is completely free and will remain so\.[\s\S]*?<\/span>/)
    assert.match(html, /name="circle-info" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /Cloud access will be available in a future version\./)
    assert.match(html, /Some external services accessible through Studio may be paid services from their providers\./)
    assert.match(html, /studio-presentation-privacy-items/)
    assert.doesNotMatch(html, /id="studio-presentation"/)
})

test('renders the localized basic presentation for launch registration', () => {
    const html = renderStudioPresentationPage(studioPresentation.fr, {variant: 'basic'})

    assert.match(html, /id="studio-presentation"/)
    assert.match(html, /Partir d’un fichier de parcours/)
    assert.match(html, /name="lock" aria-hidden="true"><\/wa-icon>\s*<h3>Confidentialité et accès pour tous\.<\/h3>/)
    assert.match(html, /name="location-pin-lock" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Confidentialité<\/strong>\s*<span>\s*Vos données restent chez vous : navigateur, appareil ou cloud\.[\s\S]*?<\/span>/)
    assert.match(html, /name="gift" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Studio gratuit<\/strong>\s*<span>\s*Studio est entièrement gratuit et le restera\.[\s\S]*?<\/span>/)
    assert.match(html, /name="circle-info" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /L’accès cloud sera possible dans une prochaine version\./)
    assert.match(html, /Certains services externes accessibles depuis Studio peuvent être payants auprès de leurs fournisseurs\./)
    assert.match(html, /Instagram, TikTok, YouTube/)
    assert.match(html, /href="\/fr\/studio\/"/)
    assert.doesNotMatch(html, /id="studio-workflow"/)
})

test('keeps the standalone registration presentation free of site and Studio actions', () => {
    for (const locale of ['en', 'fr']) {
        assert.deepEqual(studioRegistration[locale].hero.actions, [])
        assert.equal(studioRegistration[locale].hero.localeSwitcher, false)
        assert.deepEqual(studioRegistration[locale].pageCta.actions, [])
    }

    assert.equal(studioRegistration.hideMinimalFooterHomeLink, true)
})
