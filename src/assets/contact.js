import {decodeFormMailTemplate, renderFormMail} from './form-mail.js'

const getContactControl = (form, name) => form.querySelector(`[name="${name}"]`)

const getContactValue = (form, name) => {
    const control = getContactControl(form, name)
    return typeof control?.value === 'string' ? control.value.trim() : ''
}

const truncate = (value, maxLength = 4000) => value.length > maxLength
    ? `${value.slice(0, maxLength)}…`
    : value

const maskEmail = (value = '') => {
    const [localPart = '', domain = ''] = value.split('@')

    if (!localPart || !domain) {
        return value ? '[redacted]' : ''
    }

    return `${localPart.slice(0, 1)}***@${domain}`
}

const getPayloadLog = (payload) => ({
    to:        payload.to,
    csrfToken: '[redacted]',
    firstName: payload.firstName ? '[redacted]' : '',
    lastName:  payload.lastName ? '[redacted]' : '',
    email:     maskEmail(payload.email),
    subject:   payload.subject ? `[${payload.subject.length} characters]` : '',
    message:   payload.message ? `[${payload.message.length} characters]` : '',
    renderedMessage: payload.renderedMessage ? `[${payload.renderedMessage.length} characters]` : '',
    supportRenderedMessage: payload.supportRenderedMessage ? `[${payload.supportRenderedMessage.length} characters]` : '',
    consent:   payload.consent,
    website:   payload.website ? '[filled]' : '',
})

const getResponseLog = (response, body) => ({
    status:     response.status,
    statusText: response.statusText,
    url:        response.url,
    contentType: response.headers.get('content-type') || '',
    body:       truncate(body),
})

const contactStatusTimers = new WeakMap()
const contactStatusTransitionTimers = new WeakMap()
const contactStatusFadeDuration = 220

const hideContactStatus = (form) => {
    const status = form.querySelector('[data-contact-status]')

    if (!status) {
        return
    }

    const previousTransitionTimer = contactStatusTransitionTimers.get(form)
    if (previousTransitionTimer) {
        window.clearTimeout(previousTransitionTimer)
    }

    if (status.hidden) {
        contactStatusTransitionTimers.delete(form)
        return
    }

    status.classList.remove('is-visible')
    const transitionTimer = window.setTimeout(() => {
        status.hidden = true
        contactStatusTransitionTimers.delete(form)
    }, contactStatusFadeDuration)
    contactStatusTransitionTimers.set(form, transitionTimer)
}

const setContactStatus = (form, variant, message) => {
    const status = form.querySelector('[data-contact-status]')
    const statusText = form.querySelector('[data-contact-status-text]')

    if (!status || !statusText) {
        return
    }

    const previousTimer = contactStatusTimers.get(form)
    if (previousTimer) {
        window.clearTimeout(previousTimer)
    }

    const previousTransitionTimer = contactStatusTransitionTimers.get(form)
    if (previousTransitionTimer) {
        window.clearTimeout(previousTransitionTimer)
        contactStatusTransitionTimers.delete(form)
    }

    const wasHidden = status.hidden
    status.variant = variant
    statusText.textContent = message
    status.hidden = false

    if (wasHidden) {
        window.requestAnimationFrame(() => status.classList.add('is-visible'))
    }
    else {
        status.classList.add('is-visible')
    }

    const timer = window.setTimeout(() => {
        hideContactStatus(form)
        contactStatusTimers.delete(form)
    }, 5000)
    contactStatusTimers.set(form, timer)
}

/**
 * Request a short-lived token for the contact form origin.
 *
 * @param {string} apiUrl Public backend base URL.
 * @returns {Promise<string>} Contact form CSRF token.
 * @throws {Error} If the backend cannot issue a valid token.
 */
const getContactToken = async (apiUrl) => {
    const response = await fetch(`${apiUrl}/contact/token`, {
        headers: {Accept: 'application/json'},
    })
    const responseBody = await response.text()
    const responseLog = getResponseLog(response, responseBody)

    console.info('[contact] token response', {
        ...responseLog,
        body: response.ok ? '[redacted]' : responseLog.body,
    })

    if (!response.ok) {
        const error = new Error('Contact token request failed')
        error.response = responseLog
        throw error
    }

    let payload
    try {
        payload = JSON.parse(responseBody)
    }
    catch (error) {
        console.error('[contact] token response parsing error', {
            error,
            response: responseLog,
        })
        throw new Error('Contact token response is not valid JSON')
    }

    if (typeof payload.token !== 'string' || !payload.token) {
        const error = new Error('Contact token response is invalid')
        error.response = responseLog
        throw error
    }

    return payload.token
}

/**
 * Submit one contact form through the protected public contact API.
 *
 * @param {SubmitEvent} event Form submission event.
 * @returns {Promise<void>} Completion promise.
 */
const submitContactForm = async (event) => {
    event.preventDefault()

    const formElement = event.currentTarget
    const submitButton = formElement.querySelector('[data-contact-submit]')
    const apiUrl = String(formElement.dataset.contactApiUrl || '').replace(/\/+$/, '')

    if (submitButton) {
        submitButton.disabled = true
    }

    try {
        const form = String(formElement.dataset.contactForm || 'contact')
        const locale = String(formElement.dataset.contactLocale || '')
        const values = {
            firstName: getContactValue(formElement, 'firstName'),
            lastName:  getContactValue(formElement, 'lastName'),
            email:     getContactValue(formElement, 'email'),
            subject:   getContactValue(formElement, 'subject'),
            message:   getContactValue(formElement, 'message'),
        }
        const renderedMessage = renderFormMail({
            template: decodeFormMailTemplate(formElement.dataset.contactTemplate),
            form,
            locale,
            values,
        })
        const supportRenderedMessage = renderFormMail({
            template: decodeFormMailTemplate(formElement.dataset.contactSupportTemplate),
            form,
            locale,
            values,
        })
        const csrfToken = await getContactToken(apiUrl)
        const payload = {
            to:        String(formElement.dataset.contactTarget || ''),
            csrfToken,
            form,
            locale,
            firstName: getContactValue(formElement, 'firstName'),
            lastName:  getContactValue(formElement, 'lastName'),
            email:     getContactValue(formElement, 'email'),
            subject:   getContactValue(formElement, 'subject'),
            message:   getContactValue(formElement, 'message'),
            renderedMessage,
            supportRenderedMessage,
            consent:   Boolean(getContactControl(formElement, 'consent')?.checked),
            website:   getContactValue(formElement, 'website'),
        }

        console.info('[contact] submission payload', getPayloadLog(payload))

        const response = await fetch(`${apiUrl}/contact`, {
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body:    JSON.stringify(payload),
        })
        const responseBody = await response.text()
        const responseLog = getResponseLog(response, responseBody)

        console.info('[contact] submission response', responseLog)

        if (!response.ok) {
            console.error('[contact] submission HTTP error', responseLog)
            const error = new Error('Contact submission failed')
            error.response = responseLog
            throw error
        }

        if (response.headers.get('content-type')?.includes('text/html')) {
            console.warn('[contact] submission returned HTML instead of the expected API response')
        }

        setContactStatus(formElement, 'success', formElement.dataset.contactSuccess || '')
        formElement.reset()
    }
    catch (error) {
        console.error('[contact] submission error', error)
        setContactStatus(formElement, 'danger', formElement.dataset.contactError || '')
    }
    finally {
        if (submitButton) {
            submitButton.disabled = false
        }
    }
}

document.querySelectorAll('[data-contact-form]').forEach((form) => {
    form.addEventListener('submit', submitContactForm)
})
