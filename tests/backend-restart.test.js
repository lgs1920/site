import assert from 'node:assert/strict'
import test from 'node:test'

import {
    buildBackendPingUrl,
    isBackendAlive,
    pingBackend,
    restartBackend,
    waitForBackend,
} from '../src/assets/backend-restart.js'

const response = (payload, status = 200) => ({
    ok:     status >= 200 && status < 300,
    status,
    json:   async () => payload,
})

test('builds the backend ping endpoint without duplicate slashes', () => {
    assert.equal(buildBackendPingUrl('https://api.lgs1920.fr/'), 'https://api.lgs1920.fr/ping')
})

test('recognizes only an explicit alive response', () => {
    assert.equal(isBackendAlive({alive:true}), true)
    assert.equal(isBackendAlive({alive:false}), false)
    assert.equal(isBackendAlive({}), false)
})

test('pings the backend with a cache-free JSON request', async () => {
    let requestUrl
    let requestOptions
    const fetchImpl = async (url, options) => {
        requestUrl = url
        requestOptions = options
        return response({alive:true})
    }

    assert.equal(await pingBackend({apiUrl:'https://api.lgs1920.fr/', fetchImpl}), true)
    assert.equal(requestUrl, 'https://api.lgs1920.fr/ping')
    assert.equal(requestOptions.cache, 'no-store')
    assert.equal(requestOptions.headers.Accept, 'application/json')
})

test('requests a restart with the protected XHR header', async () => {
    let requestUrl
    let requestOptions
    const fetchImpl = async (url, options) => {
        requestUrl = url
        requestOptions = options
        return response({alive:true})
    }

    assert.equal(await restartBackend({restartUrl:'https://studio.lgs1920.fr/start-backend.php', fetchImpl}), true)
    assert.equal(requestUrl, 'https://studio.lgs1920.fr/start-backend.php')
    assert.equal(requestOptions.method, 'POST')
    assert.equal(requestOptions.headers['X-Requested-With'], 'XMLHttpRequest')
})

test('waits for the backend to become available after a restart', async () => {
    let attempts = 0
    const fetchImpl = async () => {
        attempts++
        return response({alive: attempts > 1})
    }

    assert.equal(await waitForBackend({apiUrl:'https://api.lgs1920.fr', fetchImpl, intervalMs:0, attempts:3}), true)
    assert.equal(attempts, 2)
})

test('rejects an unsuccessful backend response', async () => {
    const fetchImpl = async () => response({alive:false}, 503)

    await assert.rejects(
        pingBackend({apiUrl:'https://api.lgs1920.fr', fetchImpl}),
        /Backend ping failed with status 503/
    )
})
