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
    console.log('')
    console.log('  -p, --prod      Deploy to production')
    console.log('  -s, --staging   Deploy to staging')
    console.log('  -t, --test      Deploy to test')
    console.log('  --dry-run       Build and package locally without remote copy')
}

if (hasFlag('-h', '--help')) {
    printHelp()
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
