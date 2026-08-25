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

const appendSearchQuery = (url, query, parameter) => {
    if (!query || !parameter) {
        return url
    }

    url.searchParams.set(parameter, query)
    return url
}

const createSearchResult = (result, query = '', options = {}) => {
    const link = document.createElement('a')
    link.className = 'site-search-result'

    try {
        const url = new URL(result.url, window.location.origin)
        if (url.origin !== window.location.origin) {
            return null
        }

        appendSearchQuery(url, query, options.preserveSearchParameter)
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

    const globalElements = {
        trigger:    documentObject.querySelector('[data-search-trigger]'),
        triggerWrap:documentObject.querySelector('[data-search-trigger-wrap]'),
        tooltip:    documentObject.querySelector('[data-search-tooltip]'),
        dialog:     documentObject.querySelector('[data-search-dialog]'),
        input:      documentObject.querySelector('[data-search-input]'),
        status:     documentObject.querySelector('[data-search-status]'),
        results:    documentObject.querySelector('[data-search-results]'),
    }
    const inlineRoot = documentObject.querySelector('[data-inline-search]')
    const inlineElements = {
        root:   inlineRoot,
        form:   inlineRoot,
        input:  inlineRoot?.querySelector('[data-inline-search-input]'),
    }
    const guideRoot = documentObject.querySelector('[data-guide-search]')
    const guideElements = {
        root:   guideRoot,
        input:  guideRoot?.querySelector('[data-guide-search-input]'),
        status: guideRoot?.querySelector('[data-guide-search-status]'),
        results:guideRoot?.querySelector('[data-guide-search-results]'),
    }
    const hasGlobalSearch = globalElements.dialog
        && globalElements.input
        && globalElements.status
        && globalElements.results
    const hasInlineSearch = inlineElements.root
        && inlineElements.input
    const hasGuideSearch = guideElements.root
        && guideElements.input
        && guideElements.status
        && guideElements.results

    if (!hasGlobalSearch && !hasInlineSearch && !hasGuideSearch) {
        return null
    }

    let pagefind
    try {
        const pagefindUrl = new URL('/pagefind/pagefind.js', window.location.origin).href
        pagefind = await import(/* @vite-ignore */ pagefindUrl)
        await pagefind.init?.()
    }
    catch {
        if (globalElements.trigger) {
            globalElements.trigger.hidden = true
        }
        if (globalElements.triggerWrap) {
            globalElements.triggerWrap.hidden = true
        }
        if (globalElements.tooltip) {
            globalElements.tooltip.hidden = true
        }

        return null
    }

    const locale = documentObject.documentElement.lang.startsWith('fr') ? 'fr' : 'en'
    const runSearch = async ({elements, hideStatusWhenEmpty = false, labels, filters, query, requestState, preserveSearchParameter}) => {
        const currentRequestId = ++requestState.id

        elements.results.replaceChildren()
        if (!query) {
            elements.status.hidden = hideStatusWhenEmpty
            elements.status.textContent = labels.prompt
            return
        }

        elements.status.hidden = false
        elements.status.textContent = labels.loading

        try {
            const response = await pagefind.search(query, {filters})
            if (currentRequestId !== requestState.id) {
                return
            }

            const loadedResults = await Promise.all(response.results.slice(0, SEARCH_RESULT_LIMIT).map((item) => item.data()))
            const resultLinks = loadedResults
                .map((result) => createSearchResult(result, query, {preserveSearchParameter}))
                .filter(Boolean)
            resultLinks.forEach((link) => elements.results.append(link))

            elements.status.textContent = resultLinks.length === 0
                ? labels.noResults
                : `${response.results.length} ${labels.resultCount}`
        }
        catch {
            if (currentRequestId === requestState.id) {
                elements.status.textContent = labels.unavailable
            }
        }
    }

    let openGlobalDialog = null
    let inlineSearchAutoOpened = false

    if (hasGlobalSearch) {
        const labels = getSearchLabels(globalElements.dialog)
        const requestState = {id: 0}

        if (globalElements.trigger) {
            globalElements.trigger.hidden = false
        }
        if (globalElements.triggerWrap) {
            globalElements.triggerWrap.hidden = false
        }
        if (globalElements.tooltip) {
            globalElements.tooltip.hidden = false
        }

        const search = () => runSearch({
            elements:globalElements,
            filters: {locale},
            labels,
            query:   String(globalElements.input.value || '').trim(),
            requestState,
        })
        const openDialog = (focusAtEnd = false) => {
            globalElements.dialog.open = true
            windowObject.setTimeout(() => {
                globalElements.input.focus()
                if (focusAtEnd) {
                    const queryLength = String(globalElements.input.value || '').length
                    globalElements.input.setSelectionRange?.(queryLength, queryLength)
                }
            }, 0)
        }

        openGlobalDialog = openDialog
        if (globalElements.trigger) {
            globalElements.trigger.addEventListener('click', openDialog)
        }
        globalElements.input.addEventListener('input', search)
        globalElements.dialog.addEventListener('wa-show', () => {
            globalElements.input.focus()
        })
        globalElements.dialog.addEventListener('wa-hide', () => {
            requestState.id += 1
            inlineSearchAutoOpened = false
            globalElements.input.value = ''
            globalElements.results.replaceChildren()
            globalElements.status.textContent = labels.prompt
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
    }

    if (hasInlineSearch && openGlobalDialog) {
        inlineElements.input.addEventListener('input', () => {
            const query = String(inlineElements.input.value || '').trim()

            if (query.length < 2) {
                inlineSearchAutoOpened = false
                return
            }

            if (inlineSearchAutoOpened || globalElements.dialog.open) {
                return
            }

            inlineSearchAutoOpened = true
            globalElements.input.value = query
            openGlobalDialog(true)
            globalElements.input.dispatchEvent(new Event('input', {bubbles:true}))
        })
        inlineElements.form.addEventListener('submit', (event) => {
            event.preventDefault()
            globalElements.input.value = String(inlineElements.input.value || '').trim()
            openGlobalDialog()
            globalElements.input.dispatchEvent(new Event('input', {bubbles:true}))
        })
    }

    if (hasGuideSearch) {
        const labels = getSearchLabels(guideElements.root)
        const requestState = {id: 0}
        const guideSearchParameter = 'guideSearch'
        const updateGuideSearchUrl = (query) => {
            const url = new URL(windowObject.location.href)

            if (query) {
                url.searchParams.set(guideSearchParameter, query)
            }
            else {
                url.searchParams.delete(guideSearchParameter)
            }

            windowObject.history.replaceState(windowObject.history.state, '', `${url.pathname}${url.search}${url.hash}`)
        }
        const search = () => {
            const query = String(guideElements.input.value || '').trim()
            updateGuideSearchUrl(query)

            return runSearch({
                elements:guideElements,
                hideStatusWhenEmpty:true,
                filters: {locale, scope:'guide'},
                labels,
                preserveSearchParameter:guideSearchParameter,
                query,
                requestState,
            })
        }
        const savedQuery = new URL(windowObject.location.href).searchParams.get(guideSearchParameter) || ''

        guideElements.input.addEventListener('input', search)
        guideElements.input.value = savedQuery
        if (savedQuery) {
            void runSearch({
                elements:guideElements,
                hideStatusWhenEmpty:true,
                filters: {locale, scope:'guide'},
                labels,
                preserveSearchParameter:guideSearchParameter,
                query:savedQuery,
                requestState,
            })
        }
        else {
            guideElements.status.hidden = true
        }
    }

    return {
        dialog:globalElements.dialog,
        guideSearch:guideElements.root,
        inlineSearch:inlineElements.root,
        input:globalElements.input,
        trigger:globalElements.trigger,
    }
}

if (typeof document !== 'undefined') {
    void initSearch()
}

export {appendHighlightedText, createSearchResult, initSearch, toPlainText}
