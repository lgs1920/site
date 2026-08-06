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

const setContactStatus = (form, variant, message) => {
    const status = form.querySelector('[data-contact-status]')
    const statusText = form.querySelector('[data-contact-status-text]')

    if (!status || !statusText) {
        return
    }

    status.variant = variant
    statusText.textContent = message
    status.hidden = false
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

    const form = event.currentTarget
    const submitButton = form.querySelector('[data-contact-submit]')
    const apiUrl = String(form.dataset.contactApiUrl || '').replace(/\/+$/, '')

    if (submitButton) {
        submitButton.disabled = true
    }

    try {
        const csrfToken = await getContactToken(apiUrl)
        const payload = {
            to:        String(form.dataset.contactTarget || ''),
            csrfToken,
            firstName: getContactValue(form, 'firstName'),
            lastName:  getContactValue(form, 'lastName'),
            email:     getContactValue(form, 'email'),
            subject:   getContactValue(form, 'subject'),
            message:   getContactValue(form, 'message'),
            consent:   Boolean(getContactControl(form, 'consent')?.checked),
            website:   getContactValue(form, 'website'),
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

        setContactStatus(form, 'success', form.dataset.contactSuccess || '')
        form.reset()
    }
    catch (error) {
        console.error('[contact] submission error', error)
        setContactStatus(form, 'danger', form.dataset.contactError || '')
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
