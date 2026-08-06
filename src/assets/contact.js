const getContactControl = (form, name) => form.querySelector(`[name="${name}"]`)

const getContactValue = (form, name) => {
    const control = getContactControl(form, name)
    return typeof control?.value === 'string' ? control.value.trim() : ''
}

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
    if (!response.ok) {
        throw new Error('Contact token request failed')
    }

    const payload = await response.json()
    if (typeof payload.token !== 'string' || !payload.token) {
        throw new Error('Contact token response is invalid')
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

        const response = await fetch(`${apiUrl}/contact`, {
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body:    JSON.stringify(payload),
        })

        if (!response.ok) {
            throw new Error('Contact submission failed')
        }

        setContactStatus(form, 'success', form.dataset.contactSuccess || '')
        form.reset()
    }
    catch {
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
