const setState = (page, state, title = '', message = '') => {
    page.querySelectorAll('[data-revoke-state]').forEach((element) => {
        element.hidden = element.dataset.revokeState !== state
    })

    if (state === 'loading') {
        return
    }

    page.querySelectorAll('[data-revoke-title]').forEach((element) => {
        element.textContent = title
    })
    page.querySelectorAll('[data-revoke-message]').forEach((element) => {
        element.textContent = message
    })
}

const setEmail = (page, email = '') => {
    const element = page.querySelector('[data-revoke-email]')
    if (!element) {
        return
    }

    const normalizedEmail = typeof email === 'string' ? email.trim() : ''
    element.textContent = normalizedEmail
        ? `${page.dataset.revokeEmailLabel || 'Email address:'} ${normalizedEmail}`
        : ''
    element.hidden = !normalizedEmail
}

const REVOCATION_TIMEOUT_MS = 15000

const buildRevokeUrl = (apiUrl, id, token, locale) => {
    const endpointPath = '/launch-registration/revoke'
    const api = new URL(apiUrl, window.location.origin)
    const proxyTarget = api.searchParams.get('csurl')
    const query = {id, token, locale}

    if (proxyTarget) {
        const target = new URL(proxyTarget)
        target.pathname = `${target.pathname.replace(/\/+$/, '')}${endpointPath}`
        Object.entries(query).forEach(([name, value]) => target.searchParams.set(name, value))
        api.searchParams.set('csurl', target.toString())
        return api.toString()
    }

    api.pathname = `${api.pathname.replace(/\/+$/, '')}${endpointPath}`
    Object.entries(query).forEach(([name, value]) => api.searchParams.set(name, value))
    return api.toString()
}

const getRevokeUrl = (page) => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id') || ''
    const token = params.get('token') || ''
    const locale = page.dataset.revokeLocale || 'en'
    const apiUrl = String(page.dataset.revokeApiUrl || '').trim()

    if (!id || !token || !apiUrl) {
        return null
    }

    return buildRevokeUrl(apiUrl, id, token, locale)
}

/**
 * Confirm one launch-registration cancellation through the public backend API.
 *
 * @param {HTMLElement} page Cancellation page root.
 * @returns {Promise<void>} Completion promise.
 */
const processRevocation = async (page) => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), REVOCATION_TIMEOUT_MS)

    try {
        setEmail(page)
        const revokeUrl = getRevokeUrl(page)
        if (!revokeUrl) {
            throw new Error('Revocation URL is invalid')
        }

        const response = await fetch(revokeUrl, {
            headers: {'Accept': 'text/plain'},
            cache:   'no-store',
            signal:  controller.signal,
        })
        if (!response.ok) {
            throw new Error('Revocation request failed')
        }

        const result = await response.json()
        if (!result?.success || typeof result.email !== 'string' || !result.email.trim()) {
            throw new Error('Revocation response is invalid')
        }

        setState(page, 'success', page.dataset.revokeSuccessTitle, page.dataset.revokeSuccessMessage)
        setEmail(page, result.email)
    }
    catch {
        setState(page, 'invalid', page.dataset.revokeInvalidTitle, page.dataset.revokeInvalidMessage)
    }
    finally {
        window.clearTimeout(timeout)
    }
}

document.querySelectorAll('[data-registration-revoke]').forEach((page) => {
    processRevocation(page)
})
