import {bannerMediaCatalog} from './banner-media-catalog.js'
import {
    BANNER_MEDIA_QUERY_PARAM,
    consumeBannerMedia,
    consumeNextBannerMedia,
    getBannerMediaFallback,
    getBannerMediaSource,
    selectBannerMedia,
    storeBannerMedia,
} from './banner-media-state.js'

const THEME_STORAGE_KEY = 'theme'
const SEASON_STORAGE_KEY = 'seasonTheme'
const BRAND_COLOR_STORAGE_KEY = 'brandColor'
const NAVIGATION_STORAGE_KEY = 'pageNavigationState'
const GUIDE_ASIDE_PLACEMENT_STORAGE_KEY = 'guideAsidePlacement'
const ROOT_THEME_CLASS = 'wa-theme-lgs1920'
const DEFAULT_BRAND_COLOR = 'yellow'
const DEFAULT_THEME = 'dark'
const DEFAULT_SEASON = 'summer'
const DEFAULT_GUIDE_ASIDE_PLACEMENT = 'right'
const HERO_VIDEO_PLAYBACK_RATE = 0.75
const BRAND_COLORS = ['yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'green', 'brown', 'gray']
const THEME_OPTIONS = ['light', 'dark', 'system']
const SEASON_OPTIONS = ['spring', 'summer', 'fall', 'winter']
const GUIDE_ASIDE_PLACEMENTS = ['left', 'right']
const BRAND_SWATCHES = {
    yellow:'var(--wa-color-yellow)',
    orange:'var(--wa-color-orange)',
    red:   'var(--wa-color-red)',
    pink:  'var(--wa-color-pink)',
    purple:'var(--wa-color-purple)',
    blue:  'var(--wa-color-blue)',
    green: 'var(--wa-color-green)',
    brown: 'color-mix(in oklab, var(--wa-color-orange) 62%, var(--wa-color-red) 38%)',
    gray:  'var(--wa-color-gray)',
}
const SEASON_SWATCHES = {
    spring:'rgb(175, 218, 188)',
    summer:'var(--wa-color-green-60)',
    fall:  '#c56e12',
    winter:'#dbeafe',
}
const LEGACY_ROOT_THEME_PREFIXES = ['sl-theme-', 'wa-brand-', 'wa-palette-', 'wa-neutral-', 'wa-success-', 'wa-warning-', 'wa-danger-']
const LEGACY_ROOT_THEME_CLASSES = new Set(['wa-theme-premium'])
const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')
const heroViewport = window.matchMedia('(max-width: 767px)')
const mobileDeviceViewport = window.matchMedia('(max-width: 767px)')
const tabletDeviceViewport = window.matchMedia('(min-width: 768px) and (max-width: 1024px) and (pointer: coarse)')
const systemDeviceQueries = [mobileDeviceViewport, tabletDeviceViewport]

const resolveSystemDeviceIcon = () => {
    const userAgent = navigator.userAgent || ''
    const platform = navigator.platform || ''
    const touchPoints = navigator.maxTouchPoints || 0
    const isIpad = /iPad/i.test(userAgent) || (platform === 'MacIntel' && touchPoints > 1)
    const isAndroidTablet = /Android/i.test(userAgent) && !/Mobile/i.test(userAgent)
    const isTablet = isIpad || isAndroidTablet || /Tablet|PlayBook|Silk/i.test(userAgent)
    const isMobile = /Mobi|iPhone|iPod|Windows Phone/i.test(userAgent) || /Android.*Mobile/i.test(userAgent)

    if (isMobile || (mobileDeviceViewport.matches && touchPoints > 0)) {
        return 'mobile-screen'
    }

    if (isTablet || tabletDeviceViewport.matches) {
        return 'tablet-screen'
    }

    return 'desktop'
}

const resolveBrandColor = (brandColor = null) => {
    const fallbackColor = localStorage.getItem(BRAND_COLOR_STORAGE_KEY) || DEFAULT_BRAND_COLOR
    const resolvedColor = brandColor || fallbackColor

    return BRAND_COLORS.includes(resolvedColor) ? resolvedColor : DEFAULT_BRAND_COLOR
}

const resolveTheme = (theme = null) => {
    const fallbackTheme = localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME
    const resolvedTheme = theme || fallbackTheme

    return THEME_OPTIONS.includes(resolvedTheme) ? resolvedTheme : DEFAULT_THEME
}

const resolveSeasonTheme = (season = null) => {
    const fallbackSeason = localStorage.getItem(SEASON_STORAGE_KEY) || DEFAULT_SEASON
    const resolvedSeason = season || fallbackSeason

    return SEASON_OPTIONS.includes(resolvedSeason) ? resolvedSeason : DEFAULT_SEASON
}

const resolveGuideAsidePlacement = (placement = null) => {
    const fallbackPlacement = localStorage.getItem(GUIDE_ASIDE_PLACEMENT_STORAGE_KEY) || DEFAULT_GUIDE_ASIDE_PLACEMENT
    const resolvedPlacement = placement || fallbackPlacement

    return GUIDE_ASIDE_PLACEMENTS.includes(resolvedPlacement) ? resolvedPlacement : DEFAULT_GUIDE_ASIDE_PLACEMENT
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

const syncSystemThemeIcons = () => {
    const iconName = resolveSystemDeviceIcon()

    document.querySelectorAll('[data-system-theme-icon]').forEach((icon) => {
        icon.name = iconName
    })
}

const syncThemeIcons = (theme) => {
    syncSystemThemeIcons()

    document.querySelectorAll('[data-theme-icon]').forEach((icon) => {
        icon.hidden = icon.dataset.themeIcon !== theme
    })
}

const syncThemeOptions = (theme) => {
    document.querySelectorAll('[data-theme-option]').forEach((item) => {
        item.toggleAttribute('selected', item.getAttribute('value') === theme)
    })
}

const syncSeasonOptions = (season) => {
    document.querySelectorAll('[data-season-option]').forEach((item) => {
        item.toggleAttribute('selected', item.getAttribute('value') === season)
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

const syncSeasonSwatches = (season) => {
    const swatchColor = SEASON_SWATCHES[season] || SEASON_SWATCHES[DEFAULT_SEASON]

    document.querySelectorAll('[data-season-swatch]').forEach((swatch) => {
        swatch.style.setProperty('--swatch-color', swatchColor)
    })
}

const setBrownBrandScale = (target) => {
    const brownBase = 'color-mix(in oklab, var(--wa-color-orange) 62%, var(--wa-color-red) 38%)'
    const scale = {
        '--wa-color-brand': brownBase,
        '--wa-color-brand-05': 'color-mix(in oklab, var(--wa-color-orange) 6%, black 94%)',
        '--wa-color-brand-10': 'color-mix(in oklab, var(--wa-color-orange) 12%, black 88%)',
        '--wa-color-brand-20': 'color-mix(in oklab, var(--wa-color-orange) 18%, black 82%)',
        '--wa-color-brand-30': 'color-mix(in oklab, var(--wa-color-orange) 28%, black 72%)',
        '--wa-color-brand-40': 'color-mix(in oklab, var(--wa-color-orange) 40%, black 60%)',
        '--wa-color-brand-50': 'color-mix(in oklab, var(--wa-color-orange) 52%, black 48%)',
        '--wa-color-brand-60': 'color-mix(in oklab, var(--wa-color-orange) 64%, var(--wa-color-red) 36%)',
        '--wa-color-brand-70': 'color-mix(in oklab, var(--wa-color-orange) 72%, var(--wa-color-red) 28%)',
        '--wa-color-brand-80': 'color-mix(in oklab, var(--wa-color-orange) 82%, var(--wa-color-red) 18%)',
        '--wa-color-brand-90': 'color-mix(in oklab, var(--wa-color-orange) 22%, white 78%)',
        '--wa-color-brand-95': 'color-mix(in oklab, var(--wa-color-orange) 14%, white 86%)',
        '--wa-color-brand-fill': 'var(--wa-color-brand)',
        '--wa-color-brand-fill-normal': 'var(--wa-color-brand)',
        '--wa-color-brand-fill-quiet': 'color-mix(in oklab, var(--wa-color-orange) 14%, white 86%)',
        '--wa-color-brand-border-normal': 'color-mix(in oklab, var(--wa-color-brand) 85%, black 12%)',
        '--wa-color-brand-on': '#fff',
        '--wa-color-brand-on-normal': 'var(--wa-color-brand-on)',
        '--wa-color-brand-on-quiet': 'color-mix(in oklab, var(--wa-color-orange) 18%, white 82%)',
    }

    Object.entries(scale).forEach(([name, value]) => {
        target.style.setProperty(name, value)
    })
}

const resolveEffectiveThemeMode = (themeMode) => {
    if (themeMode === 'system') {
        return media.matches ? 'dark' : 'light'
    }

    return themeMode === 'dark' ? 'dark' : 'light'
}

const applyTheme = (themeMode, seasonTheme, brandColor = null) => {
    const resolvedTheme = resolveTheme(themeMode)
    const resolvedSeason = resolveSeasonTheme(seasonTheme)
    const effectiveMode = resolveEffectiveThemeMode(resolvedTheme)
    const resolvedBrandColor = resolveBrandColor(brandColor)

    normalizeDocumentThemeClasses(root)
    root.classList.add(ROOT_THEME_CLASS, `wa-brand-${resolvedBrandColor}`)
    if (resolvedBrandColor === 'brown') {
        setBrownBrandScale(root)
    }
    root.classList.toggle('wa-dark', effectiveMode === 'dark')
    root.classList.toggle('wa-light', effectiveMode !== 'dark')
    root.dataset.themeMode = effectiveMode
    root.dataset.themeSelection = resolvedTheme
    root.dataset.seasonTheme = resolvedSeason
    root.dataset.brandColor = resolvedBrandColor
    syncThemeIcons(resolvedTheme)
    syncThemeOptions(resolvedTheme)
    syncSeasonOptions(resolvedSeason)
    syncBrandOptions(resolvedBrandColor)
    syncBrandSwatches(resolvedBrandColor)
    syncSeasonSwatches(resolvedSeason)
}

const getInitialTheme = () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (storedTheme && SEASON_OPTIONS.includes(storedTheme)) {
        localStorage.setItem(SEASON_STORAGE_KEY, storedTheme)
        localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME)
        return DEFAULT_THEME
    }

    return resolveTheme(storedTheme)
}
const getInitialSeasonTheme = () => {
    const storedSeason = localStorage.getItem(SEASON_STORAGE_KEY)

    if (storedSeason && SEASON_OPTIONS.includes(storedSeason)) {
        return storedSeason
    }

    const legacyTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (legacyTheme && SEASON_OPTIONS.includes(legacyTheme)) {
        localStorage.setItem(SEASON_STORAGE_KEY, legacyTheme)
        localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME)
        return legacyTheme
    }

    return resolveSeasonTheme(storedSeason)
}
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

const setupGuideAsidePlacement = () => {
    const page = document.querySelector('.site-layout.guide-layout')
    const toggle = document.querySelector('[data-guide-aside-placement-toggle]')

    if (!page || !toggle) {
        return
    }

    const tooltip = document.querySelector('[data-guide-aside-placement-tooltip]')
    const icon = toggle.querySelector('wa-icon')
    const labels = {
        left: toggle.dataset.moveLeftLabel,
        right:toggle.dataset.moveRightLabel,
    }

    const actionForPlacement = (placement) => placement === 'left' ? 'right' : 'left'
    const applyPlacement = (placement, {persist = true} = {}) => {
        const resolvedPlacement = resolveGuideAsidePlacement(placement)
        const nextPlacement = actionForPlacement(resolvedPlacement)
        const label = labels[nextPlacement]

        page.dataset.guideAsidePlacement = resolvedPlacement
        toggle.setAttribute('aria-label', label)
        tooltip && (tooltip.textContent = label)

        if (icon) {
            icon.setAttribute('label', label)
        }

        if (persist) {
            localStorage.setItem(GUIDE_ASIDE_PLACEMENT_STORAGE_KEY, resolvedPlacement)
        }
    }

    applyPlacement(resolveGuideAsidePlacement(), {persist: false})
    toggle.addEventListener('click', () => {
        const currentPlacement = resolveGuideAsidePlacement(page.dataset.guideAsidePlacement)

        applyPlacement(actionForPlacement(currentPlacement))
    })
}

const preloadBannerMedia = (choice, isMobile = heroViewport.matches) => {
    const source = getBannerMediaSource(choice, isMobile)

    if (!source) {
        return
    }

    const existingPreload = document.querySelector(`[data-banner-media-preload="${choice.id}"]`)

    if (existingPreload) {
        return
    }

    const preload = document.createElement('link')

    preload.rel = 'preload'
    preload.as = choice.type === 'image' ? 'image' : 'video'
    preload.href = source
    preload.dataset.bannerMediaPreload = choice.id
    preload.fetchPriority = 'high'
    document.head.append(preload)

    const fallbackImage = getBannerMediaFallback(choice, isMobile)

    if (choice.type === 'video' && fallbackImage) {
        const fallbackPreload = document.createElement('link')

        fallbackPreload.rel = 'preload'
        fallbackPreload.as = 'image'
        fallbackPreload.href = fallbackImage
        fallbackPreload.dataset.bannerMediaPreload = `${choice.id}-fallback`
        fallbackPreload.fetchPriority = 'high'
        document.head.append(fallbackPreload)
    }
}

const setupBannerMediaNavigation = () => {
    document.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return
        }

        const link = event.target.closest?.('a[href], wa-button[href]')
        const heroMedia = document.querySelector('[data-hero-media]')
        const href = link?.getAttribute('href')

        if (!link || !heroMedia || !href || link.hasAttribute('download')) {
            return
        }

        const destination = new URL(href, window.location.href)

        if (destination.origin !== window.location.origin || destination.protocol !== window.location.protocol) {
            return
        }

        if (destination.pathname === window.location.pathname && destination.hash && !destination.search) {
            return
        }

        const choice = consumeNextBannerMedia(
            bannerMediaCatalog,
            heroMedia.dataset.heroMediaKey,
            undefined,
            Math.random,
            heroMedia.dataset.bannerMediaId,
        )

        if (!choice) {
            return
        }

        preloadBannerMedia(choice)
        storeBannerMedia(choice.id)

        if (link.localName === 'wa-button') {
            event.preventDefault()
            event.stopImmediatePropagation()
            window.location.assign(href)
            return
        }
    }, true)
}

const consumeLegacyBannerMediaQuery = () => {
    const url = new URL(window.location.href)
    const mediaId = url.searchParams.get(BANNER_MEDIA_QUERY_PARAM)

    if (!mediaId) {
        return null
    }

    url.searchParams.delete(BANNER_MEDIA_QUERY_PARAM)
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`)
    return mediaId
}

const syncHeroMediaCredit = (choice) => {
    const creditElement = document.querySelector('[data-hero-media-credit]')
    const link = creditElement?.querySelector('[data-hero-media-credit-link]')
    const credit = choice?.credit

    if (!creditElement || !link || !credit?.label || !credit.url) {
        if (creditElement) {
            creditElement.hidden = true
        }

        return
    }

    link.textContent = credit.label
    link.href = credit.url
    creditElement.hidden = false
}

const setupHeroScrollPrompt = () => {
    const hero = document.querySelector('.page-hero')
    const scrollButtons = hero ? Array.from(hero.querySelectorAll('[data-hero-scroll]')) : []
    const content = document.querySelector('#content')

    if (!hero || scrollButtons.length === 0 || !content) {
        return
    }

    window.setTimeout(() => hero.classList.add('is-scroll-prompt-visible'), 5000)
    scrollButtons.forEach((button) => {
        button.addEventListener('click', () => content.scrollIntoView({behavior: 'smooth', block: 'start'}))
    })
}

const setupHeroMedia = () => {
    const mediaElement = document.querySelector('[data-hero-media]')

    if (!mediaElement) {
        return
    }

    const video = mediaElement.querySelector('[data-hero-video]')
    const fallbackElement = mediaElement.querySelector('[data-hero-media-fallback]')
    const catalogKey = mediaElement.dataset.heroMediaKey || 'default'
    const selectedId = consumeBannerMedia() || consumeLegacyBannerMediaQuery()
    const choice = selectedId
        ? selectBannerMedia(bannerMediaCatalog, catalogKey, selectedId)
        : consumeNextBannerMedia(bannerMediaCatalog, catalogKey)
    let fallbackImage = getBannerMediaFallback(choice, heroViewport.matches)
    let activeSource = null

    mediaElement.dataset.bannerMediaId = choice?.id || ''
    syncHeroMediaCredit(choice)

    const applyFallback = () => {
        mediaElement.classList.add('is-media-fallback')
        mediaElement.classList.remove('is-image-media', 'is-video-ready')

        if (fallbackElement) {
            fallbackElement.src = fallbackImage || ''
        }
    }

    const applyFallbackImage = (source) => {
        if (fallbackElement) {
            fallbackElement.src = source || ''
            return
        }

        mediaElement.style.backgroundImage = source
            ? `url(${JSON.stringify(source)})`
            : ''
    }

    const syncMediaSource = () => {
        const source = getBannerMediaSource(choice, heroViewport.matches)
        fallbackImage = getBannerMediaFallback(choice, heroViewport.matches)
        const displaySource = !video || mediaElement.dataset.heroVideoEnabled === 'false'
            ? fallbackImage
            : source

        if (!displaySource || displaySource === activeSource) {
            return
        }

        activeSource = displaySource

        if (!video || choice.type !== 'video' || mediaElement.dataset.heroVideoEnabled === 'false') {
            mediaElement.classList.add('is-image-media')
            mediaElement.classList.remove('is-media-fallback', 'is-video-ready')
            applyFallbackImage(displaySource)
            return
        }

        mediaElement.classList.remove('is-image-media', 'is-media-fallback', 'is-video-ready')
        applyFallbackImage(fallbackImage)
        video.poster = fallbackImage || ''
        video.src = source
        video.defaultPlaybackRate = HERO_VIDEO_PLAYBACK_RATE
        video.playbackRate = HERO_VIDEO_PLAYBACK_RATE
        video.load()

        const playback = video.play()
        playback?.catch(() => {})
    }

    video?.addEventListener('error', applyFallback)
    video?.addEventListener('canplay', () => mediaElement.classList.add('is-video-ready'))
    preloadBannerMedia(choice)
    syncMediaSource()
    heroViewport.addEventListener('change', syncMediaSource)
}

document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = getInitialTheme()
    const initialSeasonTheme = getInitialSeasonTheme()
    const initialBrandColor = resolveBrandColor()
    const page = document.querySelector('.site-layout')

    applyTheme(initialTheme, initialSeasonTheme, initialBrandColor)

    const dropdown = document.querySelector('[data-theme-dropdown]')
    dropdown?.addEventListener('wa-select', (event) => {
        const theme = resolveTheme(event.detail.item?.getAttribute('value') || event.detail.item?.value)

        if (!theme) {
            return
        }

        const brandColor = resolveBrandColor(root.dataset.brandColor)
        const seasonTheme = resolveSeasonTheme(root.dataset.seasonTheme || getInitialSeasonTheme())

        localStorage.setItem(THEME_STORAGE_KEY, theme)
        applyTheme(theme, seasonTheme, brandColor)
    })

    document.querySelectorAll('[data-theme-palette-dropdown]').forEach((themePaletteDropdown) => {
        themePaletteDropdown.addEventListener('wa-select', (event) => {
            const item = event.detail.item
            const value = item?.getAttribute('value') || item?.value
            const group = item?.getAttribute('data-theme-group')

            if (!value || !group) {
                return
            }

            const brandColor = resolveBrandColor(root.dataset.brandColor)
            const theme = resolveTheme(root.dataset.themeSelection || getInitialTheme())
            const seasonTheme = resolveSeasonTheme(root.dataset.seasonTheme || getInitialSeasonTheme())

            if (group === 'brand') {
                const resolvedBrandColor = resolveBrandColor(value)

                localStorage.setItem(BRAND_COLOR_STORAGE_KEY, resolvedBrandColor)
                applyTheme(theme, seasonTheme, resolvedBrandColor)
                return
            }

            if (group === 'season') {
                const resolvedSeasonTheme = resolveSeasonTheme(value)

                localStorage.setItem(SEASON_STORAGE_KEY, resolvedSeasonTheme)
                applyTheme(theme, resolvedSeasonTheme, brandColor)
            }
        })
    })

    setupHeroMedia()
    setupBannerMediaNavigation()
    setupHeroScrollPrompt()
    setupNavigationScrollbars(page)
    setupPageNavigation()
    setupGuideAsidePlacement()
})

media.addEventListener('change', () => {
    const theme = resolveTheme(localStorage.getItem(THEME_STORAGE_KEY))
    const seasonTheme = resolveSeasonTheme(localStorage.getItem(SEASON_STORAGE_KEY))
    if (theme === 'system') {
        applyTheme('system', seasonTheme, resolveBrandColor(root.dataset.brandColor))
    }
})

systemDeviceQueries.forEach((query) => {
    query.addEventListener('change', () => {
        const theme = resolveTheme(root.dataset.themeSelection || getInitialTheme())
        const seasonTheme = resolveSeasonTheme(root.dataset.seasonTheme || getInitialSeasonTheme())

        if (theme === 'system') {
            applyTheme('system', seasonTheme, resolveBrandColor(root.dataset.brandColor))
            return
        }

        syncSystemThemeIcons()
    })
})
