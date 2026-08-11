import {decodeFormMailTemplate, renderFormMail} from './form-mail.js'

const setState = (page, state, title = '', message = '') => {
    page.querySelectorAll('[data-confirm-state]').forEach((element) => {
        element.hidden = element.dataset.confirmState !== state
    })

    if (state === 'loading') {
        return
    }

    page.querySelectorAll('[data-confirm-title]').forEach((element) => {
        element.textContent = title
    })
    page.querySelectorAll('[data-confirm-message]').forEach((element) => {
        element.textContent = message
    })
}

const setEmail = (page, email = '') => {
    const element = page.querySelector('[data-confirm-email]')
    if (!element) {
        return
    }

    const normalizedEmail = typeof email === 'string' ? email.trim() : ''
    element.textContent = normalizedEmail
        ? `${page.dataset.confirmEmailLabel || 'Email address:'} ${normalizedEmail}`
        : ''
    element.hidden = !normalizedEmail
}

const setWarning = (page, warning = '') => {
    const element = page.querySelector('[data-confirm-warning]')
    if (!element) {
        return
    }

    const normalizedWarning = typeof warning === 'string' ? warning.trim() : ''
    element.textContent = normalizedWarning
    element.hidden = !normalizedWarning
}

const CONFIRMATION_TIMEOUT_MS = 15000

const buildConfirmationUrl = (apiUrl, endpointPath = '/launch-registration/confirm') => {
    const api = new URL(apiUrl, window.location.origin)
    const proxyTarget = api.searchParams.get('csurl')

    if (proxyTarget) {
        const target = new URL(proxyTarget)
        target.pathname = `${target.pathname.replace(/\/+$/, '')}${endpointPath}`
        api.searchParams.set('csurl', target.toString())
        return api.toString()
    }

    api.pathname = `${api.pathname.replace(/\/+$/, '')}${endpointPath}`
    return api.toString()
}

const getConfirmationParameters = () => {
    const params = new URLSearchParams(window.location.search)
    return {
        id:    params.get('id') || '',
        token: params.get('token') || '',
    }
}

const preserveConfirmationQuery = () => {
    if (!window.location.search) {
        return
    }

    document.querySelectorAll('[data-site-locale]').forEach((link) => {
        const target = new URL(link.href, window.location.origin)
        target.search = window.location.search
        link.href = `${target.pathname}${target.search}${target.hash}`
    })
}

const renderConfirmedRegistrationMessages = (page, confirmation) => {
    const values = {
        firstName: confirmation.firstName,
        lastName:  confirmation.lastName,
        email:     confirmation.email,
    }
    const locale = confirmation.locale === 'fr' ? 'fr' : 'en'

    return {
        renderedMessage: renderFormMail({
            template: decodeFormMailTemplate(page.dataset.confirmTemplate),
            form:     'launch-registration',
            locale,
            stage:    'confirmed',
            values,
        }),
        supportRenderedMessage: renderFormMail({
            template: decodeFormMailTemplate(page.dataset.confirmSupportTemplate),
            form:     'launch-registration',
            locale,
            stage:    'confirmed',
            values,
        }),
    }
}

/**
 * Confirm one launch-registration email through the public backend API.
 *
 * @param {HTMLElement} page Confirmation page root.
 * @returns {Promise<void>} Completion promise.
 */
const processConfirmation = async (page) => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), CONFIRMATION_TIMEOUT_MS)

    try {
        const apiUrl = String(page.dataset.confirmApiUrl || '').trim()
        const {id, token} = getConfirmationParameters()
        if (!apiUrl || !id || !token) {
            throw new Error('Confirmation URL is invalid')
        }

        const renderingResponse = await fetch(buildConfirmationUrl(apiUrl, '/launch-registration/confirm-details'), {
            method:  'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            cache:   'no-store',
            body:    JSON.stringify({id, token}),
            signal:  controller.signal,
        })
        const renderingContext = await renderingResponse.json()
        if (!renderingResponse.ok
            || !renderingContext?.success
            || !['en', 'fr'].includes(renderingContext.locale)
            || typeof renderingContext.firstName !== 'string'
            || typeof renderingContext.lastName !== 'string'
            || typeof renderingContext.email !== 'string') {
            throw new Error('Confirmation rendering context is invalid')
        }

        const renderedMessages = renderConfirmedRegistrationMessages(page, renderingContext)
        const response = await fetch(buildConfirmationUrl(apiUrl), {
            method:  'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            cache:   'no-store',
            body:    JSON.stringify({id, token, ...renderedMessages}),
            signal:  controller.signal,
        })
        const result = await response.json()
        if (!response.ok || !result?.success || typeof result.email !== 'string' || !result.email.trim()) {
            throw new Error('Confirmation response is invalid')
        }

        setState(page, 'success', result.message || page.dataset.confirmSuccessTitle, page.dataset.confirmSuccessMessage)
        setWarning(page, result.warning)
        setEmail(page, result.email)
    }
    catch {
        setState(page, 'invalid', page.dataset.confirmInvalidTitle, page.dataset.confirmInvalidMessage)
        setWarning(page)
        setEmail(page)
    }
    finally {
        window.clearTimeout(timeout)
    }
}

document.querySelectorAll('[data-registration-confirmation]').forEach((page) => {
    preserveConfirmationQuery()
    processConfirmation(page)
})
