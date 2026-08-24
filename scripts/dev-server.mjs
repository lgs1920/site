import {spawn} from 'node:child_process'
import {watch} from 'node:fs'

const eleventyCommand = 'node_modules/.bin/eleventy'
const eleventyArguments = ['--serve']
const watchedPaths = ['src', 'eleventy.config.js']

let eleventyProcess
let restartTimer
let isStopping = false
let isRestarting = false

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

startEleventy()
