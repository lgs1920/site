import {spawn} from 'node:child_process'
import {rmSync, watch} from 'node:fs'
import path from 'node:path'

const eleventyCommand = 'node_modules/.bin/eleventy'
const eleventyArguments = ['--serve']
const watchedPaths = ['src', 'eleventy.config.js']
const generatedPaths = ['_site', '.11ty-vite']

let eleventyProcess
let restartTimer
let isStopping = false
let isRestarting = false

/**
 * Removes stale Eleventy and Vite development output before starting the server.
 *
 * @returns {void}
 */
const cleanGeneratedOutput = () => {
    generatedPaths.forEach((generatedPath) => {
        rmSync(path.resolve(generatedPath), {force: true, recursive: true})
    })
}

const startEleventy = () => {
    eleventyProcess = spawn(process.execPath, [eleventyCommand, ...eleventyArguments], {
        env: {
            ...process.env,
            LGS1920_DEPLOY_PLATFORM: 'development',
        },
        stdio: 'inherit',
    })

    eleventyProcess.on('exit', (code, signal) => {
        eleventyProcess = null

        if (isStopping) {
            return
        }

        if (isRestarting) {
            isRestarting = false
            setTimeout(startEleventy, 100)
            return
        }

        process.exit(signal ? 1 : (code ?? 1))
    })
}

const restartEleventy = () => {
    if (isStopping) {
        return
    }

    isRestarting = true

    if (eleventyProcess) {
        eleventyProcess.kill('SIGTERM')
        return
    }

    isRestarting = false
    startEleventy()
}

const scheduleRestart = () => {
    clearTimeout(restartTimer)
    restartTimer = setTimeout(restartEleventy, 250)
}

const closeWatchers = () => watchers.forEach((watcher) => watcher.close())
const stop = () => {
    isStopping = true
    clearTimeout(restartTimer)
    closeWatchers()

    if (eleventyProcess) {
        eleventyProcess.kill('SIGTERM')
    }
}

const watchers = watchedPaths.map((watchedPath) => watch(watchedPath, {recursive:true}, scheduleRestart))

process.on('SIGINT', stop)
process.on('SIGTERM', stop)

cleanGeneratedOutput()
startEleventy()
