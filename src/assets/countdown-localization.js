const COUNTDOWN_LEGENDS = {
    en: {
        days:    'Days',
        hours:   'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
    },
    fr: {
        days:    'Jours',
        hours:   'Heures',
        minutes: 'Minutes',
        seconds: 'Secondes',
    },
}

/**
 * Resolves the supported locale for a countdown element.
 *
 * @param {Element} element - Countdown element.
 * @returns {'en'|'fr'} Countdown locale.
 */
export const getCountdownLocale = (element) => {
    const explicitLocale = element.getAttribute('data-countdown-locale')
        || element.getAttribute('lang')
        || element.closest?.('[lang]')?.getAttribute('lang')
        || 'en'

    return explicitLocale.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

/**
 * Applies the translated legend property required by the countdown package.
 *
 * @param {Document} documentObject - Document containing countdown elements.
 * @returns {void}
 */
export const initializeCountdownLegends = (documentObject) => {
    documentObject.querySelectorAll('lgs1920-countdown').forEach((element) => {
        element.legend = COUNTDOWN_LEGENDS[getCountdownLocale(element)]
    })
}

if (typeof document !== 'undefined') {
    initializeCountdownLegends(document)
}
