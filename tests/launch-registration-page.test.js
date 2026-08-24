import assert from 'node:assert/strict'
import test from 'node:test'
import launchRegistration from '../src/_data/pages/registration.js'
import {renderLaunchRegistrationPage} from '../src/_lib/launch-registration-page.js'

test('renders the resend action inside the pending registration callout', () => {
    const html = renderLaunchRegistrationPage({locale: 'en', ...launchRegistration.en})
    const calloutStart = html.indexOf('<wa-callout class="registration-status"')
    const calloutEnd = html.indexOf('</wa-callout>', calloutStart)

    assert.ok(calloutStart >= 0)
    assert.ok(calloutEnd > calloutStart)
    assert.equal((html.match(/<wa-callout/g) || []).length, 1)

    const calloutMarkup = html.slice(calloutStart, calloutEnd)
    assert.match(calloutMarkup, /data-registration-status-text/)
    assert.match(calloutMarkup, /class="wa-split"/)
    assert.match(calloutMarkup, /class="registration-resend wa-cluster wa-justify-content-end"/)
    assert.match(calloutMarkup, /data-registration-resend-button/)
    assert.match(calloutMarkup, />\s*Resend\s*<\/wa-button>/)
    assert.doesNotMatch(html, /id="registration-details"/)
    assert.equal((html.match(/Something amazing is on the way\./g) || []).length, 0)
    assert.match(html, /href="\/registration\/studio\/"/)
    assert.match(html, /appearance="filled" variant="brand"/)
    assert.match(html, /More info on Studio/)
})
