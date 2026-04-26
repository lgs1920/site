const STORAGE_KEY = 'lgs1920-site-theme'
const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')

const applyTheme = (mode) => {
    const effectiveMode = mode === 'system'
                          ? (media.matches ? 'dark' : 'light')
                          : mode

    root.classList.remove('wa-light', 'wa-dark')
    root.classList.add(effectiveMode === 'dark' ? 'wa-dark' : 'wa-light')
    root.dataset.themeMode = mode
}

const syncSelector = (mode) => {
    const selector = document.querySelector('[data-theme-selector]')
    if (selector && selector.value !== mode) {
        selector.value = mode
    }
}

const getInitialMode = () => localStorage.getItem(STORAGE_KEY) || 'dark'

document.addEventListener('DOMContentLoaded', () => {
    const initialMode = getInitialMode()
    applyTheme(initialMode)
    syncSelector(initialMode)

    const selector = document.querySelector('[data-theme-selector]')
    selector?.addEventListener('change', (event) => {
        const mode = event.target.value
        localStorage.setItem(STORAGE_KEY, mode)
        applyTheme(mode)
    })
})

media.addEventListener('change', () => {
    const mode = localStorage.getItem(STORAGE_KEY) || 'dark'
    if (mode === 'system') {
        applyTheme('system')
    }
})
