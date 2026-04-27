import desktopVideo from './media/trekking-hero-desktop.mp4'
import mobileVideo from './media/trekking-hero-mobile.mp4'

const THEME_STORAGE_KEY = 'theme'
const BRAND_COLOR_STORAGE_KEY = 'brandColor'
const ROOT_THEME_CLASS = 'wa-theme-lgs1920'
const DEFAULT_BRAND_COLOR = 'yellow'
const BRAND_COLORS = ['yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'green', 'gray']
const BRAND_SWATCHES = {
    yellow:'var(--wa-color-yellow)',
    orange:'var(--wa-color-orange)',
    red:   'var(--wa-color-red-40)',
    pink:  'var(--wa-color-pink-70)',
    purple:'var(--wa-color-purple)',
    blue:  'var(--wa-color-blue)',
    green: 'var(--wa-color-green-90)',
    gray:  'var(--wa-color-gray)',
}
const LEGACY_ROOT_THEME_PREFIXES = ['sl-theme-', 'wa-brand-', 'wa-palette-', 'wa-neutral-', 'wa-success-', 'wa-warning-', 'wa-danger-']
const LEGACY_ROOT_THEME_CLASSES = new Set(['wa-theme-premium'])
const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')
const heroViewport = window.matchMedia('(max-width: 767px)')

const resolveBrandColor = (brandColor = null) => {
    const fallbackColor = localStorage.getItem(BRAND_COLOR_STORAGE_KEY) || DEFAULT_BRAND_COLOR
    const resolvedColor = brandColor || fallbackColor

    return BRAND_COLORS.includes(resolvedColor) ? resolvedColor : DEFAULT_BRAND_COLOR
}

const normalizeDocumentThemeClasses = (target = root) => {
    if (!target) {
        return
    }

    const toRemove = Array.from(target.classList).filter((className) => {
        if (LEGACY_ROOT_THEME_CLASSES.has(className)) {
            return true
        }

        if (className.startsWith('wa-theme-') && className !== ROOT_THEME_CLASS) {
            return true
        }

        return LEGACY_ROOT_THEME_PREFIXES.some(prefix => className.startsWith(prefix))
    })

    if (toRemove.length > 0) {
        target.classList.remove(...toRemove)
    }
}

const syncThemeIcons = (effectiveMode) => {
    document.querySelectorAll('[data-theme-icon]').forEach((icon) => {
        icon.hidden = icon.dataset.themeIcon !== effectiveMode
    })
}

const syncThemeOptions = (mode) => {
    document.querySelectorAll('[data-theme-option]').forEach((item) => {
        item.toggleAttribute('selected', item.getAttribute('value') === mode)
    })
}

const syncBrandOptions = (brandColor) => {
    document.querySelectorAll('[data-brand-option]').forEach((item) => {
        item.toggleAttribute('selected', item.getAttribute('value') === brandColor)
    })
}

const syncBrandSwatches = (brandColor) => {
    const swatchColor = BRAND_SWATCHES[brandColor] || BRAND_SWATCHES[DEFAULT_BRAND_COLOR]

    document.querySelectorAll('[data-brand-swatch]').forEach((swatch) => {
        swatch.style.setProperty('--swatch-color', swatchColor)
    })
}

const applyTheme = (mode, brandColor = null) => {
    const effectiveMode = mode === 'system'
                          ? (media.matches ? 'dark' : 'light')
                          : mode
    const resolvedBrandColor = resolveBrandColor(brandColor)

    normalizeDocumentThemeClasses(root)
    root.classList.add(ROOT_THEME_CLASS, `wa-brand-${resolvedBrandColor}`)
    root.classList.toggle('wa-dark', effectiveMode === 'dark')
    root.classList.toggle('wa-light', effectiveMode !== 'dark')
    root.dataset.themeMode = mode
    root.dataset.brandColor = resolvedBrandColor
    syncThemeIcons(effectiveMode)
    syncThemeOptions(mode)
    syncBrandOptions(resolvedBrandColor)
    syncBrandSwatches(resolvedBrandColor)
}

const getInitialMode = () => localStorage.getItem(THEME_STORAGE_KEY) || 'system'

const isDesktopView = (page) => page?.getAttribute('view') === 'desktop'

const setupPageNavigation = () => {
    const page = document.querySelector('.site-layout')
    const toggle = document.querySelector('[data-page-nav-toggle]')

    if (!page || !toggle) {
        return
    }

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

    applyDesktopNavState(page.dataset.navCollapsed === 'true')

    toggle.addEventListener('click', () => {
        if (isDesktopView(page)) {
            const nextState = page.dataset.navCollapsed !== 'true'

            applyDesktopNavState(nextState)
        }
    })

    const observer = new MutationObserver(() => {
        if (isDesktopView(page)) {
            applyDesktopNavState(page.dataset.navCollapsed === 'true')
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
    const initialBrandColor = resolveBrandColor()

    applyTheme(initialMode, initialBrandColor)

    const dropdown = document.querySelector('[data-theme-dropdown]')
    dropdown?.addEventListener('wa-select', (event) => {
        const mode = event.detail.item?.getAttribute('value') || event.detail.item?.value

        if (!mode) {
            return
        }

        const brandColor = resolveBrandColor(root.dataset.brandColor)

        localStorage.setItem(THEME_STORAGE_KEY, mode)
        applyTheme(mode, brandColor)
    })

    const brandDropdown = document.querySelector('[data-brand-dropdown]')
    brandDropdown?.addEventListener('wa-select', (event) => {
        const brandColor = resolveBrandColor(event.detail.item?.getAttribute('value') || event.detail.item?.value)
        const mode = root.dataset.themeMode || getInitialMode()

        localStorage.setItem(BRAND_COLOR_STORAGE_KEY, brandColor)
        applyTheme(mode, brandColor)
    })

    setupHeroVideo()
    setupPageNavigation()
})

media.addEventListener('change', () => {
    const mode = localStorage.getItem(THEME_STORAGE_KEY) || 'system'
    if (mode === 'system') {
        applyTheme('system', resolveBrandColor(root.dataset.brandColor))
    }
})
