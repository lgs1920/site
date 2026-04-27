import desktopVideo from './media/trekking-hero-desktop.mp4'
import mobileVideo from './media/trekking-hero-mobile.mp4'

const STORAGE_KEY = 'theme'
const NAV_STORAGE_KEY = 'site-nav-collapsed'
const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')
const heroViewport = window.matchMedia('(max-width: 767px)')

const applyTheme = (mode) => {
    const effectiveMode = mode === 'system'
                          ? (media.matches ? 'dark' : 'light')
                          : mode

    root.classList.toggle('wa-dark', effectiveMode === 'dark')
    root.classList.toggle('wa-light', effectiveMode !== 'dark')
    root.dataset.themeMode = mode

    document.querySelectorAll('[data-theme-icon]').forEach((icon) => {
        icon.hidden = icon.dataset.themeIcon !== effectiveMode
    })

    document.querySelectorAll('[data-theme-option]').forEach((item) => {
        item.toggleAttribute('selected', item.getAttribute('value') === mode)
    })
}

const getInitialMode = () => localStorage.getItem(STORAGE_KEY) || 'system'

const isDesktopView = (page) => page?.getAttribute('view') === 'desktop'

const setupPageNavigation = () => {
    const page = document.querySelector('.site-layout')
    const toggle = document.querySelector('[data-page-nav-toggle]')

    if (!page || !toggle) {
        return
    }

    const readCollapsedState = () => localStorage.getItem(NAV_STORAGE_KEY) === 'true'

    const updateToggleLabel = () => {
        const collapsed = page.dataset.navCollapsed === 'true'

        toggle.setAttribute(
            'aria-label',
            isDesktopView(page)
                ? (collapsed ? 'Open navigation' : 'Hide navigation')
                : (page.navOpen ? 'Close navigation' : 'Open navigation')
        )
    }

    const applyDesktopNavState = (collapsed) => {
        page.dataset.navCollapsed = collapsed ? 'true' : 'false'
        updateToggleLabel()
    }

    applyDesktopNavState(readCollapsedState())

    toggle.addEventListener('click', () => {
        if (isDesktopView(page)) {
            const nextState = page.dataset.navCollapsed !== 'true'

            localStorage.setItem(NAV_STORAGE_KEY, String(nextState))
            applyDesktopNavState(nextState)
            return
        }

        page.toggleNavigation?.()
    })

    const observer = new MutationObserver(() => {
        if (isDesktopView(page)) {
            applyDesktopNavState(readCollapsedState())
            return
        }

        updateToggleLabel()
    })

    observer.observe(page, {
        attributes:     true,
        attributeFilter:['view', 'nav-open'],
    })
}

const setupHeroVideo = () => {
    const video = document.querySelector('[data-hero-video]')

    if (!video) {
        return
    }

    const syncVideoSource = () => {
        const nextSrc = heroViewport.matches ? mobileVideo : desktopVideo

        if (!nextSrc || video.dataset.activeSrc === nextSrc) {
            return
        }

        video.src = nextSrc
        video.dataset.activeSrc = nextSrc
        video.load()

        const playback = video.play()
        playback?.catch(() => {})
    }

    syncVideoSource()
    heroViewport.addEventListener('change', syncVideoSource)
}

document.addEventListener('DOMContentLoaded', () => {
    const initialMode = getInitialMode()
    applyTheme(initialMode)

    const dropdown = document.querySelector('[data-theme-dropdown]')
    dropdown?.addEventListener('wa-select', (event) => {
        const mode = event.detail.item?.getAttribute('value') || event.detail.item?.value

        if (!mode) {
            return
        }

        localStorage.setItem(STORAGE_KEY, mode)
        applyTheme(mode)
    })

    setupHeroVideo()
    setupPageNavigation()
})

media.addEventListener('change', () => {
    const mode = localStorage.getItem(STORAGE_KEY) || 'system'
    if (mode === 'system') {
        applyTheme('system')
    }
})
