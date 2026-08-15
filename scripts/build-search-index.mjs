import {spawnSync} from 'node:child_process'

const result = spawnSync('pagefind', ['--site', '_site'], {
    cwd:     process.cwd(),
    env:     process.env,
    stdio:   'inherit',
})

if (result.error) {
    console.error(result.error.message)
}

process.exitCode = result.status ?? 1
