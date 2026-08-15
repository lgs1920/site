const SEARCH_RESULT_LIMIT = 8

const getSearchLabels = (dialog) => ({
    loading:     dialog.dataset.searchLoading || 'Searching…',
    noResults:   dialog.dataset.searchNoResults || 'No matching pages found.',
    prompt:      dialog.dataset.searchPrompt || 'Type a search term to find a page.',
    resultCount: dialog.dataset.searchResultCount || 'results',
    unavailable: dialog.dataset.searchUnavailable || 'Search is temporarily unavailable.',
})

const toPlainText = (value = '') => {
    const template = document.createElement('template')
    template.innerHTML = value
    return template.content.textContent.replace(/\s+/g, ' ').trim()
}

const escapeRegExp = (value = '') => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const createSearchMatcher = (query = '') => {
    const terms = [...new Set(query.trim().split(/\s+/).filter(Boolean))]
        .sort((first, second) => second.length - first.length)

    if (terms.length === 0) {
        return null
    }

    return new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi')
}

const appendHighlightedText = (container, value, query = '') => {
    const matcher = createSearchMatcher(query)

    if (!matcher) {
        container.textContent = value
        return
    }

    let cursor = 0
    let match

    while ((match = matcher.exec(value)) !== null) {
        if (match.index > cursor) {
            container.append(document.createTextNode(value.slice(cursor, match.index)))
        }

        const highlight = document.createElement('mark')
        highlight.textContent = match[0]
        container.append(highlight)
        cursor = matcher.lastIndex
    }

    if (cursor < value.length) {
        container.append(document.createTextNode(value.slice(cursor)))
    }
}

const createSearchResult = (result, query = '') => {
    const link = document.createElement('a')
    link.className = 'site-search-result'

    try {
        const url = new URL(result.url, window.location.origin)
        if (url.origin !== window.location.origin) {
            return null
        }

        link.href = `${url.pathname}${url.search}${url.hash}`
    }
    catch {
        return null
    }

    const title = document.createElement('strong')
    title.className = 'site-search-result-title'
    appendHighlightedText(title, result.meta?.title || result.title || result.url, query)

    const categories = [result.meta?.category, result.meta?.subcategory].filter(Boolean)
    if (categories.length > 0) {
        const category = document.createElement('span')
        category.className = 'site-search-result-category'
        category.textContent = categories.join(' · ')
        link.append(category)
    }

    const excerpt = document.createElement('span')
    excerpt.className = 'site-search-result-excerpt'
    appendHighlightedText(excerpt, toPlainText(result.excerpt), query)

    link.prepend(title)
    link.append(excerpt)
    return link
}

const initSearch = async ({documentObject = globalThis.document, windowObject = globalThis.window} = {}) => {
    if (!documentObject?.body || !windowObject) {
        return null
    }

    const trigger = documentObject.querySelector('[data-search-trigger]')
    const triggerWrap = documentObject.querySelector('[data-search-trigger-wrap]')
    const tooltip = documentObject.querySelector('[data-search-tooltip]')
    const dialog = documentObject.querySelector('[data-search-dialog]')
    const input = documentObject.querySelector('[data-search-input]')
    const status = documentObject.querySelector('[data-search-status]')
    const results = documentObject.querySelector('[data-search-results]')

    if (!trigger || !dialog || !input || !status || !results) {
        return null
    }

    let pagefind
    try {
        pagefind = await import(/* @vite-ignore */ '/pagefind/pagefind.js')
        await pagefind.init?.()
    }
    catch {
        trigger.hidden = true
        if (triggerWrap) {
            triggerWrap.hidden = true
        }
        if (tooltip) {
            tooltip.hidden = true
        }

        return null
    }

    const labels = getSearchLabels(dialog)
    const locale = documentObject.documentElement.lang.startsWith('fr') ? 'fr' : 'en'
    let requestId = 0

    trigger.hidden = false
    if (triggerWrap) {
        triggerWrap.hidden = false
    }
    if (tooltip) {
        tooltip.hidden = false
    }

    const clearResults = () => {
        results.replaceChildren()
    }

    const setStatus = (message) => {
        status.textContent = message
    }

    const search = async () => {
        const query = String(input.value || '').trim()
        const currentRequestId = ++requestId

        clearResults()
        if (!query) {
            setStatus(labels.prompt)
            return
        }

        setStatus(labels.loading)

        try {
            const response = await pagefind.search(query, {filters: {locale}})
            if (currentRequestId !== requestId) {
                return
            }

            const loadedResults = await Promise.all(response.results.slice(0, SEARCH_RESULT_LIMIT).map((item) => item.data()))
            const resultLinks = loadedResults.map((result) => createSearchResult(result, query)).filter(Boolean)
            resultLinks.forEach((link) => results.append(link))

            if (resultLinks.length === 0) {
                setStatus(labels.noResults)
                return
            }

            setStatus(`${response.results.length} ${labels.resultCount}`)
        }
        catch {
            if (currentRequestId === requestId) {
                setStatus(labels.unavailable)
            }
        }
    }

    const openDialog = () => {
        dialog.open = true
        windowObject.setTimeout(() => {
            input.focus()
        }, 0)
    }

    trigger.addEventListener('click', openDialog)
    input.addEventListener('input', search)
    dialog.addEventListener('wa-show', () => {
        input.focus()
    })
    dialog.addEventListener('wa-hide', () => {
        requestId += 1
        input.value = ''
        clearResults()
        setStatus(labels.prompt)
    })
    documentObject.addEventListener('keydown', (event) => {
        const activeElement = documentObject.activeElement
        const isTyping = activeElement?.matches('input, textarea, [contenteditable="true"]')
        const isCommandShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'

        if (isCommandShortcut || (event.key === '/' && !isTyping)) {
            event.preventDefault()
            openDialog()
        }
    })

    return {dialog, input, trigger}
}

if (typeof document !== 'undefined') {
    void initSearch()
}

export {appendHighlightedText, createSearchResult, initSearch, toPlainText}
