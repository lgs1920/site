export const BANNER_MEDIA_QUERY_PARAM = 'bannerMedia'
export const BANNER_MEDIA_STORAGE_KEY = 'lgs1920:banner-media'
export const BANNER_MEDIA_QUEUE_STORAGE_KEY = 'lgs1920:banner-media-queue:v2'

const getBannerMediaStorage = () => {
    try {
        return globalThis.sessionStorage
    } catch {
        return null
    }
}

export const storeBannerMedia = (mediaId, storage = getBannerMediaStorage()) => {
    if (!mediaId || !storage) {
        return
    }

    try {
        storage.setItem(BANNER_MEDIA_STORAGE_KEY, mediaId)
    } catch {
        return
    }
}

export const consumeBannerMedia = (storage = getBannerMediaStorage()) => {
    if (!storage) {
        return null
    }

    try {
        const mediaId = storage.getItem(BANNER_MEDIA_STORAGE_KEY)
        storage.removeItem(BANNER_MEDIA_STORAGE_KEY)
        return mediaId
    } catch {
        return null
    }
}

const shuffle = (values, random) => {
    for (let index = values.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1))
        const value = values[index]
        values[index] = values[swapIndex]
        values[swapIndex] = value
    }

    return values
}

export const getBannerMediaChoices = (catalog, catalogKey = 'default') => {
    const choices = catalog[catalogKey] ?? catalog.default ?? []

    return Array.isArray(choices)
        ? choices.filter(choice => choice?.id && choice.type && choice.selectable !== false)
        : []
}

export const selectBannerMedia = (catalog, catalogKey = 'default', selectedId = null, random = Math.random, excludedId = null) => {
    const choices = getBannerMediaChoices(catalog, catalogKey)
    const selectedChoice = choices.find(choice => choice.id === selectedId)

    if (selectedChoice) {
        return selectedChoice
    }

    const availableChoices = choices.length > 1 && excludedId
        ? choices.filter(choice => choice.id !== excludedId)
        : choices

    if (availableChoices.length === 0) {
        return null
    }

    return availableChoices[Math.min(availableChoices.length - 1, Math.floor(random() * availableChoices.length))]
}

export const consumeNextBannerMedia = (catalog, catalogKey = 'default', storage = getBannerMediaStorage(), random = Math.random, excludedId = null) => {
    const choices = getBannerMediaChoices(catalog, catalogKey)

    if (choices.length === 0) {
        return null
    }

    const availableChoices = choices.length > 1 && excludedId
        ? choices.filter(choice => choice.id !== excludedId)
        : choices

    if (!storage) {
        return availableChoices[Math.min(availableChoices.length - 1, Math.floor(random() * availableChoices.length))]
    }

    const choiceIds = new Set(availableChoices.map(choice => choice.id))
    let queue = []

    try {
        queue = JSON.parse(storage.getItem(BANNER_MEDIA_QUEUE_STORAGE_KEY) || '[]')
    } catch {
        queue = []
    }

    queue = Array.isArray(queue) ? queue.filter(id => choiceIds.has(id)) : []

    if (queue.length === 0) {
        queue = shuffle(availableChoices.map(choice => choice.id), random)
    }

    const nextId = queue.shift()

    try {
        if (queue.length > 0) {
            storage.setItem(BANNER_MEDIA_QUEUE_STORAGE_KEY, JSON.stringify(queue))
        } else {
            storage.removeItem(BANNER_MEDIA_QUEUE_STORAGE_KEY)
        }
    } catch {
        return choices.find(choice => choice.id === nextId) || choices[0]
    }

    return availableChoices.find(choice => choice.id === nextId) || availableChoices[0]
}

export const getBannerMediaSource = (choice, isMobile = false) => {
    if (!choice) {
        return null
    }

    return choice.type === 'video'
        ? (isMobile ? choice.mobileSrc : choice.desktopSrc) || choice.desktopSrc || choice.mobileSrc
        : choice.src
}

export const getBannerMediaFallback = (choice, isMobile = false) => {
    if (!choice) {
        return null
    }

    if (choice.type === 'video') {
        return (isMobile ? choice.mobileFallbackImage : choice.desktopFallbackImage)
            || choice.fallbackImage
            || choice.mobileFallbackImage
            || choice.desktopFallbackImage
            || null
    }

    return choice.src
}
