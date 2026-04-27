import desktopVideo from './media/trekking-hero-desktop.mp4'
import mobileVideo from './media/trekking-hero-mobile.mp4'

const THEME_STORAGE_KEY = 'theme'
const BRAND_COLOR_STORAGE_KEY = 'brandColor'
const NAVIGATION_STORAGE_KEY = 'pageNavigationState'
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
const getStoredDesktopNavigationState = () => {
    const value = localStorage.getItem(NAVIGATION_STORAGE_KEY)

    if (value === 'open') {
        return true
    }

    if (value === 'closed') {
        return false
    }

    return null
}

const persistDesktopNavigationState = (isOpen) => {
    localStorage.setItem(NAVIGATION_STORAGE_KEY, isOpen ? 'open' : 'closed')
}

const isDesktopView = (page) => page?.getAttribute('view') === 'desktop'
const injectScrollbarStyles = (rootNode, styleId, cssText) => {
    if (!rootNode || rootNode.getElementById(styleId)) {
        return
    }

    const style = document.createElement('style')

    style.id = styleId
    style.textContent = cssText
    rootNode.append(style)
}

const setupNavigationScrollbars = (page) => {
    if (!page?.shadowRoot) {
        return
    }

    injectScrollbarStyles(page.shadowRoot, 'site-navigation-scrollbars', `
        [part~='menu'] {
            scrollbar-width: thin;
            scrollbar-color: var(--navigation-scrollbar-thumb) var(--navigation-scrollbar-track);
        }

        [part~='menu']::-webkit-scrollbar {
            width: var(--navigation-scrollbar-size);
            height: var(--navigation-scrollbar-size);
        }

        [part~='menu']::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0;
        }

        [part~='menu']::-webkit-scrollbar-track {
            background: var(--navigation-scrollbar-track);
            border-radius: 999px;
        }

        [part~='menu']::-webkit-scrollbar-thumb {
            border: 2px solid transparent;
            border-radius: 999px;
            background: var(--navigation-scrollbar-thumb);
            background-clip: padding-box;
        }

        [part~='menu']::-webkit-scrollbar-thumb:hover {
            background: var(--navigation-scrollbar-thumb-hover);
            background-clip: padding-box;
        }
    `)

    const drawer = page.shadowRoot.querySelector('[part~="drawer"]')

    if (!drawer?.shadowRoot) {
        requestAnimationFrame(() => setupNavigationScrollbars(page))
        return
    }

    injectScrollbarStyles(drawer.shadowRoot, 'site-drawer-scrollbars', `
        [part~='body'] {
            scrollbar-width: thin;
            scrollbar-color: var(--navigation-scrollbar-thumb) var(--navigation-scrollbar-track);
        }

        [part~='body']::-webkit-scrollbar {
            width: var(--navigation-scrollbar-size);
            height: var(--navigation-scrollbar-size);
        }

        [part~='body']::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0;
        }

        [part~='body']::-webkit-scrollbar-track {
            background: var(--navigation-scrollbar-track);
            border-radius: 999px;
        }

        [part~='body']::-webkit-scrollbar-thumb {
            border: 2px solid transparent;
            border-radius: 999px;
            background: var(--navigation-scrollbar-thumb);
            background-clip: padding-box;
        }

        [part~='body']::-webkit-scrollbar-thumb:hover {
            background: var(--navigation-scrollbar-thumb-hover);
            background-clip: padding-box;
        }
    `)
}

const setupPageNavigation = () => {
    const page = document.querySelector('.site-layout')
    const toggles = Array.from(document.querySelectorAll('[data-page-nav-toggle]'))
    const navigation = document.querySelector('.drawer-nav')

    if (!page || toggles.length === 0) {
        return
    }

    const applyStoredNavigationState = () => {
        const storedState = getStoredDesktopNavigationState()

        if (storedState === null) {
            page.dataset.navCollapsed = 'true'
            page.navOpen = false
            return
        }

        page.dataset.navCollapsed = storedState ? 'false' : 'true'
        page.navOpen = false
    }

    const updateToggleLabel = () => {
        const collapsed = page.dataset.navCollapsed === 'true'
        const label = isDesktopView(page)
            ? (collapsed ? 'Open navigation' : 'Hide navigation')
            : (page.navOpen ? 'Close navigation' : 'Open navigation')

        toggles.forEach((toggle) => {
            toggle.setAttribute('aria-label', label)
        })

        document.querySelectorAll('[data-nav-toggle-tooltip]').forEach((tooltip) => {
            tooltip.textContent = label
        })
    }

    const applyDesktopNavState = (collapsed, { persist = true } = {}) => {
        page.dataset.navCollapsed = collapsed ? 'true' : 'false'
        page.navOpen = false

        if (persist) {
            persistDesktopNavigationState(!collapsed)
        }

        updateToggleLabel()
    }

    applyStoredNavigationState()
    if (isDesktopView(page)) {
        applyDesktopNavState(page.dataset.navCollapsed === 'true', { persist: false })
    }
    else {
        updateToggleLabel()
    }

    requestAnimationFrame(() => {
        applyStoredNavigationState()
        updateToggleLabel()
    })

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            if (isDesktopView(page)) {
                const nextState = page.dataset.navCollapsed !== 'true'

                applyDesktopNavState(nextState)
            }
        })
    })

    navigation?.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]')

        if (!link || isDesktopView(page)) {
            return
        }

        page.navOpen = false
    })

    const observer = new MutationObserver((mutations) => {
        const viewChanged = mutations.some((mutation) => mutation.attributeName === 'view')

        if (viewChanged) {
            applyStoredNavigationState()
        }

        if (isDesktopView(page)) {
            updateToggleLabel()
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
    const page = document.querySelector('.site-layout')

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
    setupNavigationScrollbars(page)
    setupPageNavigation()
})

media.addEventListener('change', () => {
    const mode = localStorage.getItem(THEME_STORAGE_KEY) || 'system'
    if (mode === 'system') {
        applyTheme('system', resolveBrandColor(root.dataset.brandColor))
    }
})
