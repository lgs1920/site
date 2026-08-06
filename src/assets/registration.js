const getRegistrationControl = (form, name) => form.querySelector(`[name="${name}"]`)

const getRegistrationValue = (form, name) => {
    const control = getRegistrationControl(form, name)
    return typeof control?.value === 'string' ? control.value.trim() : ''
}

const registrationStatusTimers = new WeakMap()
const registrationStatusTransitionTimers = new WeakMap()
const registrationStatusFadeDuration = 220

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

const setRegistrationStatus = (form, variant, message) => {
    const status = form.querySelector('[data-registration-status]')
    const statusText = form.querySelector('[data-registration-status-text]')

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
    statusText.textContent = message
    status.hidden = false

    if (wasHidden) {
        window.requestAnimationFrame(() => status.classList.add('is-visible'))
    }
    else {
        status.classList.add('is-visible')
    }

    const timer = window.setTimeout(() => {
        hideRegistrationStatus(form)
        registrationStatusTimers.delete(form)
    }, 5000)
    registrationStatusTimers.set(form, timer)
}

const submitRegistrationForm = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const submitButton = form.querySelector('[data-registration-submit]')
    const apiUrl = String(form.dataset.registrationApiUrl || '').replace(/\/+$/, '')
    const payload = {
        firstName: getRegistrationValue(form, 'firstName'),
        lastName:  getRegistrationValue(form, 'lastName'),
        email:     getRegistrationValue(form, 'email'),
        consent:   Boolean(getRegistrationControl(form, 'consent')?.checked),
        website:   getRegistrationValue(form, 'website'),
    }

    if (submitButton) {
        submitButton.disabled = true
    }

    try {
        const response = await fetch(`${apiUrl}/launch-registration`, {
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body:    JSON.stringify(payload),
        })

        if (!response.ok) {
            throw new Error('Registration submission failed')
        }

        setRegistrationStatus(form, 'success', form.dataset.registrationSuccess || '')
        form.reset()
    }
    catch {
        setRegistrationStatus(form, 'danger', form.dataset.registrationError || '')
    }
    finally {
        if (submitButton) {
            submitButton.disabled = false
        }
    }
}

document.querySelectorAll('[data-registration-form]').forEach((form) => {
    form.addEventListener('submit', submitRegistrationForm)
})
