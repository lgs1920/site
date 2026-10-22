import {execFileSync} from 'node:child_process'

const args = process.argv.slice(2)

/**
 * Check whether one of the supplied flags was provided.
 *
 * @param {...string} flags Flags to search for.
 * @returns {boolean} Whether any flag is present.
 */
const hasFlag = (...flags) => flags.some((flag) => args.includes(flag))

const targets = [
    hasFlag('--test', '-t') ? 'test' : null,
    hasFlag('--staging', '-s') ? 'staging' : null,
    hasFlag('--production', '--prod', '-p') ? 'production' : null,
].filter(Boolean)

if (targets.length !== 1) {
    throw new Error('Use exactly one of --test/-t, --staging/-s, or --production/--prod/-p to dispatch a GitHub Site deployment')
}
const [target] = targets

const currentRef = execFileSync('git', ['branch', '--show-current'], {encoding: 'utf8'}).trim()
const sourceRef = currentRef || execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'}).trim()
const workflowArguments = ['workflow', 'run', 'deploy-site.yml']

// GitHub requires --ref to locate the workflow file when the source is detached.
if (currentRef) {
    workflowArguments.push('--ref', currentRef)
}

workflowArguments.push('-f', `target=${target}`, '-f', `ref=${sourceRef}`)
execFileSync('gh', workflowArguments, {stdio: 'inherit'})
console.log(`GitHub Site deployment workflow dispatched for ${target}`)
