import test from 'node:test'
import assert from 'node:assert/strict'
import {
    consumeBannerMedia,
    consumeNextBannerMedia,
    getBannerMediaFallback,
    getBannerMediaSource,
    selectBannerMedia,
    storeBannerMedia,
} from '../src/assets/banner-media-state.js'

const catalog = {
    outdoor: [
        {id:'image', type:'image', src:'/assets/trail.jpg'},
        {id:'video', type:'video', desktopSrc:'/assets/trail.mp4', mobileSrc:'/assets/trail-mobile.mp4', fallbackImage:'/assets/trail.jpg'},
    ],
}

test('selects a banner media choice randomly and keeps an explicit choice', () => {
    assert.equal(selectBannerMedia(catalog, 'outdoor', null, () => 0).id, 'image')
    assert.equal(selectBannerMedia(catalog, 'outdoor', null, () => 0.99).id, 'video')
    assert.equal(selectBannerMedia(catalog, 'outdoor', 'video', () => 0).id, 'video')
})

test('stores a media choice for one navigation and consumes it once', () => {
    const values = new Map()
    const storage = {
        getItem: key => values.get(key) || null,
        removeItem: key => values.delete(key),
        setItem: (key, value) => values.set(key, value),
    }

    storeBannerMedia('video', storage)
    assert.equal(consumeBannerMedia(storage), 'video')
    assert.equal(consumeBannerMedia(storage), null)
})

test('consumes a shuffled media queue without repeating choices until it is empty', () => {
    const values = new Map()
    const storage = {
        getItem: key => values.get(key) || null,
        removeItem: key => values.delete(key),
        setItem: (key, value) => values.set(key, value),
    }
    const randomValues = [0, 0, 0, 0, 0]
    const random = () => randomValues.shift() ?? 0
    const selectedIds = Array.from({length: 2}, () => consumeNextBannerMedia(catalog, 'outdoor', storage, random).id)

    assert.equal(new Set(selectedIds).size, 2)
})

test('skips the currently displayed media when consuming the next choice', () => {
    const values = new Map()
    const storage = {
        getItem: key => values.get(key) || null,
        removeItem: key => values.delete(key),
        setItem: (key, value) => values.set(key, value),
    }

    assert.notEqual(consumeNextBannerMedia(catalog, 'outdoor', storage, () => 0, 'image').id, 'image')
})

test('resolves responsive video sources and image fallbacks', () => {
    const video = catalog.outdoor[1]

    assert.equal(getBannerMediaSource(video, false), '/assets/trail.mp4')
    assert.equal(getBannerMediaSource(video, true), '/assets/trail-mobile.mp4')
    assert.equal(getBannerMediaFallback(video), '/assets/trail.jpg')
    assert.equal(getBannerMediaFallback({...video, desktopFallbackImage:'/assets/trail.webp'}), '/assets/trail.webp')
    assert.equal(getBannerMediaFallback({...video, mobileFallbackImage:'/assets/trail-mobile.webp'}, true), '/assets/trail-mobile.webp')
    assert.equal(getBannerMediaFallback(catalog.outdoor[0]), '/assets/trail.jpg')
})
