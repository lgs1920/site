const SOCIAL_APP_FALLBACK_DELAY_MS = 1200

/**
 * Open a social app when installed and fall back to its web profile.
 *
 * @param {MouseEvent} event Click event for a social profile button.
 * @returns {void}
 */
const openSocialApp = (event) => {
    const link = event.currentTarget

    if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
    ) {
        return
    }

    const appUrl = link.dataset.appUrl
    if (!appUrl) {
        return
    }

    event.preventDefault()

    let fallbackTimer = null
    const cleanup = () => {
        if (fallbackTimer !== null) {
            window.clearTimeout(fallbackTimer)
        }
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        window.removeEventListener('pagehide', cleanup)
    }
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
            cleanup()
        }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('pagehide', cleanup, {once: true})
    window.location.href = appUrl
    fallbackTimer = window.setTimeout(() => {
        cleanup()
        const webUrl = link.getAttribute('href')
        const fallbackWindow = window.open(webUrl, '_blank', 'noopener,noreferrer')

        if (!fallbackWindow) {
            window.location.href = webUrl
        }
    }, SOCIAL_APP_FALLBACK_DELAY_MS)
}

document.querySelectorAll('[data-social-app-link]').forEach((link) => {
    link.addEventListener('click', openSocialApp)
})

document.querySelectorAll('.site-social-trigger[aria-controls]').forEach((trigger) => {
    const popup = document.getElementById(trigger.getAttribute('aria-controls'))
    if (!popup) {
        return
    }

    trigger.addEventListener('click', () => {
        const willOpen = !popup.active
        document.querySelectorAll('.site-social-popup[active]').forEach((openPopup) => {
            openPopup.active = false
            const openTrigger = document.querySelector(`[aria-controls="${openPopup.id}"]`)
            openTrigger?.setAttribute('aria-expanded', 'false')
        })
        popup.active = willOpen
        trigger.setAttribute('aria-expanded', String(willOpen))
    })

    popup.addEventListener('click', (event) => {
        event.stopPropagation()
    })

    document.addEventListener('click', (event) => {
        const target = event.target instanceof Element ? event.target : null
        if (target?.closest(`#${popup.id}`) || target?.closest(`#${trigger.id}`)) {
            return
        }

        popup.active = false
        trigger.setAttribute('aria-expanded', 'false')
    })

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return
        }

        popup.active = false
        trigger.setAttribute('aria-expanded', 'false')
    })
})
