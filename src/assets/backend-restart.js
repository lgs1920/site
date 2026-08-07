export const BACKEND_PING_TIMEOUT_MS = 3000
export const BACKEND_RESTART_POLL_INTERVAL_MS = 500
export const BACKEND_RESTART_POLL_ATTEMPTS = 12
export const BACKEND_HEALTH_CHECK_INTERVAL_MS = 60 * 1000
export const BACKEND_RECOVERY_CHECK_INTERVAL_MS = 2000
const CALLOUT_VARIANTS = new Set(['danger', 'warning', 'success'])

const defaultLabels = {
    title:        'Backend unavailable',
    message:      'The site cannot reach the backend right now.',
    details:      'You can ask the server to start again, then retry the connection.',
    restart:      'Restart backend',
    retry:        'Retry connection',
    restarting:   'Restarting the backend…',
    retrying:     'Checking the backend…',
    restartFailed:'The backend could not be restarted. You can try again.',
    retryFailed:  'The backend is still unavailable.',
    contact:      'Contact support',
    language:     'Language',
    chooseLanguage: 'Choose language',
}

/**
 * Build the backend ping endpoint from a configured base URL.
 *
 * @param {string} apiUrl Public backend base URL.
 * @returns {string} Backend ping endpoint.
 */
export const buildBackendPingUrl = (apiUrl) => `${String(apiUrl || '').replace(/\/+$/, '')}/ping`

/**
 * Check whether a backend response declares the service alive.
 *
 * @param {unknown} payload Parsed backend response.
 * @returns {boolean} Whether the backend is alive.
 */
export const isBackendAlive = (payload) => payload?.alive === true

/**
 * Create an optional timeout signal without requiring AbortSignal in non-browser tests.
 *
 * @param {number} timeoutMs Request timeout in milliseconds.
 * @returns {AbortSignal|undefined} Timeout signal when supported.
 */
const createTimeoutSignal = (timeoutMs) => {
    if (typeof AbortSignal === 'undefined' || typeof AbortSignal.timeout !== 'function') {
        return undefined
    }

    return AbortSignal.timeout(timeoutMs)
}

/**
 * Ping the backend and return its reported availability.
 *
 * @param {object} options Request options.
 * @param {string} options.apiUrl Public backend base URL.
 * @param {Function} [options.fetchImpl] Fetch implementation used for dependency injection.
 * @param {number} [options.timeoutMs] Request timeout in milliseconds.
 * @returns {Promise<boolean>} Whether the backend answered as alive.
 * @throws {Error} If the request fails or returns an invalid HTTP response.
 */
export const pingBackend = async ({apiUrl, fetchImpl = globalThis.fetch, timeoutMs = BACKEND_PING_TIMEOUT_MS} = {}) => {
    if (!apiUrl || typeof fetchImpl !== 'function') {
        throw new Error('Backend ping is not configured')
    }

    const response = await fetchImpl(buildBackendPingUrl(apiUrl), {
        cache:   'no-store',
        headers: {Accept: 'application/json'},
        signal:  createTimeoutSignal(timeoutMs),
    })

    if (!response?.ok) {
        throw new Error(`Backend ping failed with status ${response?.status || 'an error'}`)
    }

    return isBackendAlive(await response.json())
}

/**
 * Ask the Studio startup endpoint to restart the backend.
 *
 * @param {object} options Request options.
 * @param {string} options.restartUrl Backend restart endpoint.
 * @param {Function} [options.fetchImpl] Fetch implementation used for dependency injection.
 * @param {number} [options.timeoutMs] Request timeout in milliseconds.
 * @returns {Promise<boolean>} Whether the restart endpoint reports the backend alive.
 * @throws {Error} If the request fails or returns an invalid HTTP response.
 */
export const restartBackend = async ({restartUrl, fetchImpl = globalThis.fetch, timeoutMs = BACKEND_PING_TIMEOUT_MS} = {}) => {
    if (!restartUrl || typeof fetchImpl !== 'function') {
        throw new Error('Backend restart is not configured')
    }

    const response = await fetchImpl(restartUrl, {
        method:  'POST',
        headers: {
            Accept:            'application/json',
            'X-Requested-With':'XMLHttpRequest',
        },
        signal: createTimeoutSignal(timeoutMs),
    })

    if (!response?.ok) {
        throw new Error(`Backend restart failed with status ${response?.status || 'an error'}`)
    }

    return isBackendAlive(await response.json())
}

/**
 * Poll the backend until it answers or the retry budget is exhausted.
 *
 * @param {object} options Polling options.
 * @param {string} options.apiUrl Public backend base URL.
 * @param {Function} [options.fetchImpl] Fetch implementation used for dependency injection.
 * @param {number} [options.intervalMs] Delay between attempts.
 * @param {number} [options.attempts] Maximum number of attempts.
 * @returns {Promise<boolean>} Whether the backend became available.
 */
export const waitForBackend = async ({apiUrl, fetchImpl = globalThis.fetch, intervalMs = BACKEND_RESTART_POLL_INTERVAL_MS, attempts = BACKEND_RESTART_POLL_ATTEMPTS} = {}) => {
    for (let attempt = 0; attempt < attempts; attempt++) {
        try {
            if (await pingBackend({apiUrl, fetchImpl})) {
                return true
            }
        }
        catch {
            // The backend may need a few seconds to finish starting.
        }

        if (attempt < attempts - 1) {
            await new Promise(resolve => setTimeout(resolve, intervalMs))
        }
    }

    return false
}

/**
 * Read localized backend-restart labels from the page data attributes.
 *
 * @param {HTMLElement} page Site page element.
 * @returns {object} Localized labels with safe fallbacks.
 */
const getLabels = (page) => ({
    title:         page.dataset.backendRestartTitle || defaultLabels.title,
    message:       page.dataset.backendRestartMessage || defaultLabels.message,
    details:       page.dataset.backendRestartDetails || defaultLabels.details,
    restart:       page.dataset.backendRestartAction || defaultLabels.restart,
    retry:         page.dataset.backendRetryAction || defaultLabels.retry,
    restarting:    page.dataset.backendRestarting || defaultLabels.restarting,
    retrying:      page.dataset.backendRetrying || defaultLabels.retrying,
    restartFailed: page.dataset.backendRestartFailed || defaultLabels.restartFailed,
    retryFailed:   page.dataset.backendRetryFailed || defaultLabels.retryFailed,
    contact:       page.dataset.backendRestartContact || defaultLabels.contact,
    language:      page.dataset.backendRestartLanguage || defaultLabels.language,
    chooseLanguage: page.dataset.backendRestartChooseLanguage || defaultLabels.chooseLanguage,
})

/**
 * Create the site language selector displayed in the recovery dialog.
 *
 * @param {Document} documentObject Browser document.
 * @param {HTMLElement} page Site page element.
 * @param {object} labels Localized dialog labels.
 * @returns {HTMLElement|null} Language selector, or null when unavailable.
 */
const createLocaleNavigation = (documentObject, page, labels) => {
    const localeOptions = [
        {
            code:    'en',
            label:   'English',
            flagUrl: '/assets/flags/gb.svg',
            url:     page.dataset.backendRestartEnglishUrl,
        },
        {
            code:    'fr',
            label:   'Français',
            flagUrl: '/assets/flags/fr.svg',
            url:     page.dataset.backendRestartFrenchUrl,
        },
    ].filter((option) => option.url)

    if (localeOptions.length < 2) {
        return null
    }

    const navigation = documentObject.createElement('div')
    navigation.className = 'backend-restart-locale'
    navigation.setAttribute('slot', 'header-actions')

    const dropdown = documentObject.createElement('wa-dropdown')
    dropdown.className = 'locale-dropdown'
    dropdown.setAttribute('placement', 'bottom-end')

    const currentOption = localeOptions.find((option) => option.code === page.dataset.backendRestartLocale)
        || localeOptions[0]
    const trigger = documentObject.createElement('wa-button')
    trigger.id = 'backend-restart-locale-trigger'
    trigger.className = 'locale-trigger'
    trigger.setAttribute('slot', 'trigger')
    trigger.setAttribute('appearance', 'plain')
    trigger.setAttribute('size', 'small')
    trigger.setAttribute('aria-label', labels.chooseLanguage)

    const triggerCopy = documentObject.createElement('span')
    triggerCopy.className = 'locale-trigger-copy'

    const triggerFlag = documentObject.createElement('img')
    triggerFlag.className = 'locale-flag'
    triggerFlag.src = currentOption.flagUrl
    triggerFlag.alt = currentOption.label
    triggerFlag.width = 18
    triggerFlag.height = 18
    triggerCopy.append(triggerFlag)
    trigger.append(triggerCopy)

    const menu = documentObject.createElement('div')
    menu.className = 'locale-menu-panel'
    menu.setAttribute('role', 'menu')
    menu.setAttribute('aria-label', labels.language)

    for (const option of localeOptions) {
        const link = documentObject.createElement('a')
        link.className = 'locale-menu-link'
        link.href = option.url
        link.dataset.siteLocale = option.code
        link.setAttribute('role', 'menuitem')

        if (option.code === page.dataset.backendRestartLocale) {
            link.setAttribute('aria-current', 'page')
            link.classList.add('is-current')
        }

        const flag = documentObject.createElement('img')
        flag.className = 'locale-flag'
        flag.src = option.flagUrl
        flag.alt = option.label
        flag.width = 18
        flag.height = 18

        const copy = documentObject.createElement('span')
        copy.className = 'locale-menu-copy'
        const label = documentObject.createElement('strong')
        label.textContent = option.label
        copy.append(label)

        link.append(flag, copy)
        link.addEventListener('click', () => {
            globalThis.localStorage?.setItem('preferredLocale', option.code)
        })
        menu.append(link)
    }

    dropdown.append(trigger, menu)
    navigation.append(dropdown)
    return navigation
}

/**
 * Create the Web Awesome dialog used for backend recovery.
 *
 * @param {Document} documentObject Browser document.
 * @param {HTMLElement} page Site page element.
 * @param {object} labels Localized dialog labels.
 * @param {boolean} canRestart Whether the restart endpoint is configured.
 * @returns {object} Dialog elements used by the recovery controller.
 */
const createRecoveryDialog = (documentObject, page, labels, canRestart) => {
    const dialog = documentObject.createElement('wa-dialog')
    dialog.id = 'backend-restart-dialog'
    dialog.setAttribute('label', labels.title)
    dialog.setAttribute('with-footer', '')

    let allowProgrammaticClose = false
    dialog.addEventListener('wa-hide', (event) => {
        if (allowProgrammaticClose) {
            allowProgrammaticClose = false
        }
        else {
            event.preventDefault()
        }
    })

    const callout = documentObject.createElement('wa-callout')
    callout.setAttribute('size', 'm')
    callout.setAttribute('variant', 'danger')
    callout.setAttribute('appearance', 'filled-outlined')
    callout.setAttribute('role', 'status')
    callout.setAttribute('aria-live', 'polite')

    const icon = documentObject.createElement('wa-icon')
    icon.setAttribute('slot', 'icon')
    icon.setAttribute('variant', 'regular')
    icon.setAttribute('name', 'triangle-exclamation')

    const message = documentObject.createElement('span')
    message.dataset.backendRestartStatus = ''
    message.textContent = labels.message
    callout.append(icon, message)

    const details = documentObject.createElement('p')
    details.dataset.backendRestartDetails = ''
    details.textContent = labels.details

    const localeNavigation = createLocaleNavigation(documentObject, page, labels)

    const restartButton = documentObject.createElement('wa-button')
    restartButton.setAttribute('slot', 'footer')
    restartButton.setAttribute('appearance', 'filled')
    restartButton.setAttribute('variant', 'brand')
    restartButton.dataset.backendRestartAction = ''
    restartButton.hidden = !canRestart

    const restartIcon = documentObject.createElement('wa-icon')
    restartIcon.setAttribute('slot', 'start')
    restartIcon.setAttribute('variant', 'regular')
    restartIcon.setAttribute('name', 'arrows-rotate')
    restartButton.append(restartIcon, documentObject.createTextNode(labels.restart))

    const retryButton = documentObject.createElement('wa-button')
    retryButton.setAttribute('slot', 'footer')
    retryButton.setAttribute('appearance', canRestart ? 'outlined' : 'filled')
    retryButton.setAttribute('variant', canRestart ? 'neutral' : 'brand')
    retryButton.dataset.backendRetryAction = ''

    const retryIcon = documentObject.createElement('wa-icon')
    retryIcon.setAttribute('slot', 'start')
    retryIcon.setAttribute('variant', 'regular')
    retryIcon.setAttribute('name', 'plug-circle-check')
    retryButton.append(retryIcon, documentObject.createTextNode(labels.retry))

    const contactLink = documentObject.createElement('wa-button')
    contactLink.className = 'backend-restart-contact'
    contactLink.setAttribute('slot', 'footer')
    contactLink.setAttribute('appearance', 'plain')
    contactLink.setAttribute('variant', 'brand')
    contactLink.setAttribute('size', 'm')
    contactLink.href = 'mailto:studio@lgs1920.fr?subject=%5BSite%5D%20Backend%20stopped'
    contactLink.textContent = labels.contact

    const footerDivider = documentObject.createElement('wa-divider')
    footerDivider.className = 'backend-restart-footer-divider'
    footerDivider.setAttribute('slot', 'footer')

    dialog.append(callout)
    if (labels.details) {
        dialog.append(details)
    }
    dialog.append(footerDivider, contactLink, restartButton, retryButton)
    if (localeNavigation) {
        dialog.append(localeNavigation)
    }
    documentObject.body.append(dialog)

    return {
        callout,
        close: () => {
            allowProgrammaticClose = true
            dialog.open = false
        },
        dialog,
        message,
        restartButton,
        retryButton,
    }
}

/**
 * Update the dialog status presentation.
 *
 * @param {object} controls Recovery dialog controls.
 * @param {string} message Status message.
 * @param {'danger'|'warning'|'success'} variant Callout variant.
 * @param {string} iconName Status icon name.
 * @returns {void}
 */
const setRecoveryStatus = ({callout, message}, text, variant, iconName) => {
    const safeVariant = CALLOUT_VARIANTS.has(variant) ? variant : 'danger'
    callout.setAttribute('variant', safeVariant)
    message.textContent = text
    callout.querySelector('wa-icon')?.setAttribute('name', iconName)
}

/**
 * Initialize backend health monitoring and recovery actions for the current page.
 *
 * @param {object} [options] Initialization dependencies.
 * @param {Document} [options.documentObject] Browser document.
 * @param {Window} [options.windowObject] Browser window.
 * @param {Function} [options.fetchImpl] Fetch implementation used for dependency injection.
 * @returns {object|null} Recovery controller, or null when the page is not configured.
 */
export const initBackendRestart = ({documentObject = globalThis.document, windowObject = globalThis.window, fetchImpl = globalThis.fetch} = {}) => {
    if (!documentObject?.body) {
        return null
    }

    const page = documentObject.querySelector('[data-backend-restart-page]')
    const apiUrl = page?.dataset.backendApiUrl
    const restartUrl = page?.dataset.backendRestartUrl

    if (!page || !apiUrl || typeof fetchImpl !== 'function') {
        return null
    }

    const labels = getLabels(page)
    const controls = createRecoveryDialog(documentObject, page, labels, Boolean(restartUrl))
    let activeCheck = null

    /**
     * Close the dialog when the backend is available again.
     *
     * @returns {void}
     */
    const closeWhenAlive = () => {
        controls.close()
    }

    /**
     * Check the backend and open the recovery dialog when it is unavailable.
     *
     * @returns {Promise<boolean>} Whether the backend is alive.
     */
    const checkBackend = async () => {
        if (activeCheck) {
            return activeCheck
        }

        activeCheck = pingBackend({apiUrl, fetchImpl})
            .catch(() => false)
            .then((alive) => {
                if (alive) {
                    closeWhenAlive()
                }
                else {
                    controls.dialog.open = true
                }

                return alive
            })
            .finally(() => {
                activeCheck = null
            })

        return activeCheck
    }

    /**
     * Retry the backend connection from the dialog.
     *
     * @returns {Promise<void>} Completion promise.
     */
    const handleRetry = async () => {
        controls.retryButton.disabled = true
        controls.retryButton.loading = true
        setRecoveryStatus(controls, labels.retrying, 'warning', 'spinner')

        const alive = await checkBackend()
        if (alive) {
            closeWhenAlive()
        }
        else {
            setRecoveryStatus(controls, labels.retryFailed, 'danger', 'triangle-exclamation')
        }

        controls.retryButton.disabled = false
        controls.retryButton.loading = false
    }

    /**
     * Request a backend restart and wait for the service to answer.
     *
     * @returns {Promise<void>} Completion promise.
     */
    const handleRestart = async () => {
        controls.restartButton.disabled = true
        controls.restartButton.loading = true
        controls.retryButton.disabled = true
        setRecoveryStatus(controls, labels.restarting, 'warning', 'spinner')

        try {
            await restartBackend({restartUrl, fetchImpl})
            if (await waitForBackend({apiUrl, fetchImpl})) {
                closeWhenAlive()
                return
            }

            setRecoveryStatus(controls, labels.restartFailed, 'danger', 'triangle-exclamation')
        }
        catch {
            setRecoveryStatus(controls, labels.restartFailed, 'danger', 'triangle-exclamation')
        }
        finally {
            controls.restartButton.disabled = false
            controls.restartButton.loading = false
            controls.retryButton.disabled = false
        }
    }

    controls.retryButton.addEventListener('click', handleRetry)
    controls.restartButton.addEventListener('click', handleRestart)
    const scheduleNextCheck = () => {
        if (typeof windowObject?.setTimeout !== 'function') {
            return
        }

        const intervalMs = controls.dialog.open
            ? BACKEND_RECOVERY_CHECK_INTERVAL_MS
            : BACKEND_HEALTH_CHECK_INTERVAL_MS

        windowObject.setTimeout(async () => {
            await checkBackend()
            scheduleNextCheck()
        }, intervalMs)
    }

    void checkBackend().finally(scheduleNextCheck)

    return {checkBackend, controls}
}

if (typeof document !== 'undefined') {
    initBackendRestart()
}
