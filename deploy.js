import {execFileSync} from 'node:child_process'
import path from 'node:path'
import { Deployment } from './deployment/Deployment.js'

const args = process.argv.slice(2)

const hasFlag = (...flags) => flags.some((flag) => args.includes(flag))
const selectedPlatforms = [
    hasFlag('-p', '--prod') ? 'production' : null,
    hasFlag('-s', '--staging') ? 'staging' : null,
    hasFlag('-t', '--test') ? 'test' : null,
].filter(Boolean)

const printHelp = () => {
    console.log('Usage: bun run deploy [-p|--prod] [-s|--staging] [-t|--test] [--dry-run]')
    console.log('       bun run deploy -- --prod --release --release-tag v1.0.0 [--auto]')
    console.log('')
    console.log('  -p, --prod      Deploy to production')
    console.log('  -s, --staging   Deploy to staging')
    console.log('  -t, --test      Deploy to test')
    console.log('  --dry-run       Build and package locally without remote copy')
    console.log('  --release       Create a GitHub production release instead of deploying locally')
    console.log('  --release-tag   Release tag to create, for example v1.0.0')
    console.log('  --auto          Publish the GitHub release as a pre-release immediately')
}

/**
 * Read the value following a command-line option.
 *
 * @param {string} option Option name.
 * @returns {string|undefined} Option value.
 */
const readOptionValue = (option) => {
    const inlineValue = args.find((argument) => argument.startsWith(`${option}=`))
    if (inlineValue) {
        return inlineValue.slice(option.length + 1)
    }

    const optionIndex = args.indexOf(option)
    return optionIndex >= 0 ? args[optionIndex + 1] : undefined
}

/**
 * Create a GitHub pre-release for the site without deploying locally.
 *
 * @returns {void}
 */
const createGitHubRelease = () => {
    if (!hasFlag('-p', '--prod')) {
        throw new Error('--release requires --prod')
    }

    const tag = readOptionValue('--release-tag')
    if (!tag || !/^v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(tag)) {
        throw new Error('--release requires a semantic --release-tag such as v1.0.0')
    }

    const status = execFileSync('git', ['status', '--porcelain'], {encoding: 'utf8'}).trim()
    if (status) {
        throw new Error('GitHub release requires a clean working tree')
    }

    const target = execFileSync('git', ['branch', '--show-current'], {encoding: 'utf8'}).trim()
        || execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'}).trim()
    const releaseArguments = [
        'release',
        'create',
        tag,
        '--target',
        target,
        '--title',
        `LGS1920 site ${tag}`,
        '--generate-notes',
        hasFlag('--auto') ? '--prerelease' : '--draft',
    ]

    execFileSync('gh', releaseArguments, {stdio: 'inherit'})
}

if (hasFlag('-h', '--help')) {
    printHelp()
    process.exit(0)
}

if (hasFlag('--release')) {
    createGitHubRelease()
    process.exit(0)
}

if (selectedPlatforms.length !== 1) {
    printHelp()
    process.exit(1)
}

const deployment = new Deployment({
    dryRun:  hasFlag('--dry-run'),
    platform:selectedPlatforms[0],
    product: path.basename(process.cwd()),
    root:    process.cwd(),
})

deployment.launch().catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
})
