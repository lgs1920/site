import assert from 'node:assert/strict'
import test from 'node:test'

import {getCountdownLocale, initializeCountdownLegends} from '../src/assets/countdown-localization.js'

const createCountdown = ({locale, inheritedLocale = null}) => {
    let legend = null

    return {
        get legend() {
            return legend
        },
        set legend(value) {
            legend = value
        },
        getAttribute: (name) => name === 'data-countdown-locale' ? locale : name === 'lang' ? locale : null,
        closest: () => inheritedLocale ? {getAttribute: () => inheritedLocale} : null,
    }
}

test('resolves French countdown locale from the explicit data attribute', () => {
    assert.equal(getCountdownLocale(createCountdown({locale: 'fr'})), 'fr')
})

test('applies French legend labels to French countdowns', () => {
    const countdown = createCountdown({locale: 'fr'})
    const documentObject = {querySelectorAll: () => [countdown]}

    initializeCountdownLegends(documentObject)

    assert.deepEqual(countdown.legend, {
        days:    'Jours',
        hours:   'Heures',
        minutes: 'Minutes',
        seconds: 'Secondes',
    })
})

test('keeps English legend labels for English countdowns', () => {
    const countdown = createCountdown({locale: 'en'})
    const documentObject = {querySelectorAll: () => [countdown]}

    initializeCountdownLegends(documentObject)

    assert.deepEqual(countdown.legend, {
        days:    'Days',
        hours:   'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
    })
})
