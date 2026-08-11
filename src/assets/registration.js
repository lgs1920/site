import {decodeFormMailTemplate, renderFormMail} from './form-mail.js'

const getRegistrationControl = (form, name) => form.querySelector(`[name="${name}"]`)

const getRegistrationValue = (form, name) => {
    const control = getRegistrationControl(form, name)
    return typeof control?.value === 'string' ? control.value.trim() : ''
}

const registrationStatusTimers = new WeakMap()
const registrationStatusTransitionTimers = new WeakMap()
const registrationPendingEmails = new WeakMap()
const registrationResendCooldownTimers = new WeakMap()
const registrationStatusFadeDuration = 220
const registrationStatusIcons = {
    success: 'circle-check',
    warning: 'envelope',
    danger:  'circle-exclamation',
}

const hideRegistrationStatus = (form) => {
    const status = form.querySelector('[data-registration-status]')

    if (!status) {
        return
    }

    const previousTransitionTimer = registrationStatusTransitionTimers.get(form)
    if (previousTransitionTimer) {
        window.clearTimeout(previousTransitionTimer)
    }

    if (status.hidden) {
        registrationStatusTransitionTimers.delete(form)
        return
    }

    status.classList.remove('is-visible')
    const transitionTimer = window.setTimeout(() => {
        status.hidden = true
        registrationStatusTransitionTimers.delete(form)
    }, registrationStatusFadeDuration)
    registrationStatusTransitionTimers.set(form, transitionTimer)
}

const setRegistrationStatus = (form, variant, message, autoHide = true) => {
    const status = form.querySelector('[data-registration-status]')
    const statusText = form.querySelector('[data-registration-status-text]')
    const statusIcon = form.querySelector('[data-registration-status-icon]')

    if (!status || !statusText) {
        return
    }

    const previousTimer = registrationStatusTimers.get(form)
    if (previousTimer) {
        window.clearTimeout(previousTimer)
    }

    const previousTransitionTimer = registrationStatusTransitionTimers.get(form)
    if (previousTransitionTimer) {
        window.clearTimeout(previousTransitionTimer)
        registrationStatusTransitionTimers.delete(form)
    }

    const wasHidden = status.hidden
    status.variant = variant
    if (statusIcon) {
        statusIcon.setAttribute('name', registrationStatusIcons[variant] || 'circle-info')
    }
    statusText.textContent = message
    status.hidden = false

    if (wasHidden) {
        window.requestAnimationFrame(() => status.classList.add('is-visible'))
    }
    else {
        status.classList.add('is-visible')
    }

    if (!autoHide) {
        return
    }

    const timer = window.setTimeout(() => {
        hideRegistrationStatus(form)
        registrationStatusTimers.delete(form)
    }, 5000)
    registrationStatusTimers.set(form, timer)
}

const clearRegistrationResendCooldown = (form) => {
    const timer = registrationResendCooldownTimers.get(form)
    if (timer) {
        window.clearTimeout(timer)
        registrationResendCooldownTimers.delete(form)
    }
}

const setRegistrationResendState = (form, visible, email = '') => {
    const panel = form.querySelector('[data-registration-resend]')
    const button = form.querySelector('[data-registration-resend-button]')

    clearRegistrationResendCooldown(form)

    if (!panel || !button) {
        return
    }

    if (!visible || !email) {
        registrationPendingEmails.delete(form)
        panel.hidden = true
        button.disabled = false
        return
    }

    registrationPendingEmails.set(form, email)
    panel.hidden = false
    button.disabled = false
}

const setRegistrationResendCooldown = (form, retryAfterSeconds) => {
    const button = form.querySelector('[data-registration-resend-button]')
    const seconds = Number(retryAfterSeconds)
    if (!button || !Number.isFinite(seconds) || seconds <= 0) {
        return false
    }

    clearRegistrationResendCooldown(form)
    button.disabled = true
    const timer = window.setTimeout(() => {
        button.disabled = false
        registrationResendCooldownTimers.delete(form)
    }, Math.ceil(seconds) * 1000)
    registrationResendCooldownTimers.set(form, timer)
    return true
}

const parseRegistrationResponse = async (response) => {
    const responseBody = await response.text()
    try {
        return JSON.parse(responseBody)
    }
    catch {
        return {}
    }
}

const renderRegistrationMailMessages = (form, values) => ({
    renderedMessage: renderFormMail({
        template: decodeFormMailTemplate(form.dataset.registrationTemplate),
        form:     String(form.dataset.registrationForm || 'launch-registration'),
        locale:   String(form.dataset.registrationLocale || ''),
        values,
    }),
    supportRenderedMessage: renderFormMail({
        template: decodeFormMailTemplate(form.dataset.registrationSupportTemplate),
        form:     String(form.dataset.registrationForm || 'launch-registration'),
        locale:   String(form.dataset.registrationLocale || ''),
        values,
    }),
})

const resendRegistrationConfirmation = async (event) => {
    const button = event.currentTarget
    const form = button.closest('[data-registration-form]')
    const apiUrl = String(form?.dataset.registrationApiUrl || '').replace(/\/+$/, '')
    const email = form ? registrationPendingEmails.get(form) : ''

    if (!form || !apiUrl || !email) {
        return
    }

    const values = {
        firstName: getRegistrationValue(form, 'firstName'),
        lastName:  getRegistrationValue(form, 'lastName'),
        email,
    }
    button.disabled = true
    let hasCooldown = false

    try {
        const response = await fetch(`${apiUrl}/launch-registration/resend-confirmation`, {
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body:    JSON.stringify({
                to:       String(form.dataset.registrationTarget || ''),
                form:     String(form.dataset.registrationForm || 'launch-registration'),
                locale:   String(form.dataset.registrationLocale || ''),
                ...values,
                consent:  true,
                ...renderRegistrationMailMessages(form, values),
            }),
        })
        const responsePayload = await parseRegistrationResponse(response)

        if (!response.ok || responsePayload.success !== true) {
            const error = new Error('Confirmation resend failed')
            error.retryAfterSeconds = response.headers.get('Retry-After')
            error.rateLimited = response.status === 429
            error.responsePayload = responsePayload
            throw error
        }

        setRegistrationResendState(form, false)
        setRegistrationStatus(form, 'success', responsePayload.message || form.dataset.registrationResendSuccess || '')
    }
    catch (error) {
        hasCooldown = setRegistrationResendCooldown(form, error.retryAfterSeconds)
        const message = error.rateLimited
            ? form.dataset.registrationResendRateLimit
            : form.dataset.registrationResendError
        setRegistrationStatus(form, 'danger', message || '', false)
    }
    finally {
        if (!hasCooldown) {
            button.disabled = false
        }
    }
}

const submitRegistrationForm = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const submitButton = form.querySelector('[data-registration-submit]')
    const apiUrl = String(form.dataset.registrationApiUrl || '').replace(/\/+$/, '')
    const formId = String(form.dataset.registrationForm || 'launch-registration')
    const locale = String(form.dataset.registrationLocale || '')
    const values = {
        firstName: getRegistrationValue(form, 'firstName'),
        lastName:  getRegistrationValue(form, 'lastName'),
        email:     getRegistrationValue(form, 'email'),
    }

    if (submitButton) {
        submitButton.disabled = true
    }
    setRegistrationResendState(form, false)

    try {
        const payload = {
            to:             String(form.dataset.registrationTarget || ''),
            form:           formId,
            locale,
            firstName:      values.firstName,
            lastName:       values.lastName,
            email:          values.email,
            consent:        Boolean(getRegistrationControl(form, 'consent')?.checked),
            website:        getRegistrationValue(form, 'website'),
            ...renderRegistrationMailMessages(form, values),
        }
        const response = await fetch(`${apiUrl}/launch-registration`, {
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body:    JSON.stringify(payload),
        })

        const responsePayload = await parseRegistrationResponse(response)

        if (!response.ok || responsePayload.success !== true || (responsePayload.stored === true && responsePayload.sent !== true)) {
            const error = new Error('Registration submission failed')
            error.duplicate = response.status === 409 || responsePayload.error === 'Already registered'
            error.pending = responsePayload.status === 'pending' && responsePayload.canResend === true
            error.rateLimited = response.status === 429
            error.delivery = response.status === 503 || (responsePayload.success === true && responsePayload.stored === true && responsePayload.sent !== true)
            error.responsePayload = responsePayload
            throw error
        }

        setRegistrationStatus(form, 'success', responsePayload.message || form.dataset.registrationSuccess || '')
        form.reset()
    }
    catch (error) {
        if (error.pending) {
            setRegistrationResendState(form, true, values.email)
        }

        const message = error.pending
            ? error.responsePayload?.message || form.dataset.registrationPending
            : error.duplicate
                ? form.dataset.registrationDuplicate
                : error.rateLimited
                    ? form.dataset.registrationRateLimit
                    : error.delivery
                        ? form.dataset.registrationDeliveryError
                        : form.dataset.registrationError
        setRegistrationStatus(form, error.pending ? 'warning' : 'danger', message || '', !error.pending)
    }
    finally {
        if (submitButton) {
            submitButton.disabled = false
        }
    }
}

document.querySelectorAll('[data-registration-form]').forEach((form) => {
    form.addEventListener('submit', submitRegistrationForm)
    form.querySelector('[data-registration-resend-button]')?.addEventListener('click', resendRegistrationConfirmation)
})
