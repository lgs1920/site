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
    assert.match(html, /Optional freemium or paid assets/)
    assert.match(html, /name="lock" aria-hidden="true"><\/wa-icon>\s*<h3>Privacy and access for everyone\.<\/h3>/)
    assert.match(html, /name="location-pin-lock" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Private by default<\/strong>\s*<span>\s*Your work stays in your browser by default\.[\s\S]*?<\/span>/)
    assert.match(html, /name="circle-check" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Free today and tomorrow<\/strong>\s*<span>\s*Studio is free to use today and will remain free\.[\s\S]*?<\/span>/)
    assert.match(html, /name="circle-info" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /Local synchronization across devices is already possible\./)
    assert.match(html, /Some external map or data services may be paid by their own providers\./)
    assert.match(html, /studio-presentation-privacy-items/)
    assert.doesNotMatch(html, /id="studio-presentation"/)
})

test('renders the localized basic presentation for launch registration', () => {
    const html = renderStudioPresentationPage(studioPresentation.fr, {variant: 'basic'})

    assert.match(html, /id="studio-presentation"/)
    assert.match(html, /Partir d’un fichier de parcours/)
    assert.match(html, /name="lock" aria-hidden="true"><\/wa-icon>\s*<h3>Confidentialité et accès pour tous\.<\/h3>/)
    assert.match(html, /name="location-pin-lock" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Privé par défaut<\/strong>\s*<span>\s*Votre travail reste dans votre navigateur par défaut\.[\s\S]*?<\/span>/)
    assert.match(html, /name="gift" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /<strong>Gratuit aujourd’hui comme demain<\/strong>\s*<span>\s*Studio est gratuit aujourd’hui et le restera\.[\s\S]*?<\/span>/)
    assert.match(html, /name="circle-info" aria-hidden="true"><\/wa-icon>/)
    assert.match(html, /La synchronisation locale entre appareils est déjà possible\./)
    assert.match(html, /Certains services cartographiques ou de données externes peuvent être payants auprès de leurs propres fournisseurs\./)
    assert.match(html, /Instagram, TikTok, YouTube/)
    assert.match(html, /href="\/fr\/studio\/"/)
    assert.doesNotMatch(html, /id="studio-workflow"/)
})

test('keeps the standalone registration presentation free of site and Studio actions', () => {
    for (const locale of ['en', 'fr']) {
        assert.deepEqual(studioRegistration[locale].hero.actions, [])
        assert.equal(studioRegistration[locale].hero.localeSwitcher, true)
        assert.deepEqual(studioRegistration[locale].pageCta.actions, [])
    }

    assert.equal(studioRegistration.hideMinimalFooterHomeLink, true)
})
