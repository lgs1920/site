import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import config from './config.js'

const COLORS = {
    green:  '\x1b[32m',
    red:    '\x1b[31m',
    reset:  '\x1b[0m',
    yellow: '\x1b[33m',
}

const SUPPORTED_PLATFORMS = new Set(['production', 'staging', 'test'])
const SUPPORTED_PRODUCTS = new Set(['site'])

const shellEscape = (value) => `'${String(value).replace(/'/g, `'\\''`)}'`

const runCommand = ({ args, command, cwd, env = process.env, label }) => {
    const result = spawnSync(command, args, {
        cwd,
        env,
        stdio: 'inherit',
    })

    if (result.status !== 0) {
        throw new Error(`${COLORS.red}${label} failed with exit code ${result.status}.${COLORS.reset}`)
    }
}

const readCommand = ({ args, command, cwd, label }) => {
    const result = spawnSync(command, args, {
        cwd,
        encoding: 'utf8',
        stdio:    ['ignore', 'pipe', 'pipe'],
    })

    if (result.status !== 0) {
        const details = result.stderr?.trim() || result.stdout?.trim() || 'unknown error'
        throw new Error(`${COLORS.red}${label} failed: ${details}${COLORS.reset}`)
    }

    return result.stdout.trim()
}

export class Deployment {
    constructor({ dryRun = false, platform, product, root }) {
        this.dryRun = dryRun
        this.platform = platform
        this.product = product
        this.root = root

        if (!SUPPORTED_PLATFORMS.has(this.platform)) {
            throw new Error(`${COLORS.red}Unsupported platform: ${this.platform}${COLORS.reset}`)
        }

        if (!SUPPORTED_PRODUCTS.has(this.product)) {
            throw new Error(`${COLORS.red}Unsupported product: ${this.product}. Run this command from the site repo.${COLORS.reset}`)
        }

        this.remote = config.remote[this.platform]
        this.site = config.site[this.platform]
        this.buildOutput = path.join(this.root, config.local.buildOutput)
        this.distRoot = path.join(this.root, config.local.distRoot)
        this.remotePath = `${this.remote.path}/${this.platform}/${this.product}`
        this.remoteReleasePath = `${this.remotePath}/${config.remote.releases}`
        this.remoteCurrentPath = `${this.remotePath}/${config.remote.current}`
    }

    configure = () => {
        this.branch = readCommand({
            args:    ['rev-parse', '--abbrev-ref', 'HEAD'],
            command: 'git',
            cwd:     this.root,
            label:   'Git branch lookup',
        })

        this.commit = readCommand({
            args:    ['rev-parse', '--short', 'HEAD'],
            command: 'git',
            cwd:     this.root,
            label:   'Git commit lookup',
        })

        this.timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)
        this.release = `${this.timestamp}-${this.commit}`
        this.localReleasePath = path.join(this.distRoot, this.release)
        this.localArchivePath = `${this.localReleasePath}.zip`
        this.password = process.env[`LGS1920_PASSWORD_${this.platform.toUpperCase()}`]

        if (!this.dryRun && !this.password) {
            throw new Error(`${COLORS.red}Missing environment variable LGS1920_PASSWORD_${this.platform.toUpperCase()}.${COLORS.reset}`)
        }
    }

    build = () => {
        fs.rmSync(path.join(this.root, '.11ty-vite'), { force: true, recursive: true })
        fs.rmSync(this.buildOutput, { force: true, recursive: true })
        fs.rmSync(this.localReleasePath, { force: true, recursive: true })
        fs.rmSync(this.localArchivePath, { force: true, recursive: true })
        fs.mkdirSync(this.distRoot, { recursive: true })

        console.log(`--- Building ${COLORS.yellow}${this.product}${COLORS.reset} for ${COLORS.yellow}${this.platform}${COLORS.reset}`)
        runCommand({
            args:    ['run', 'build'],
            command: 'bun',
            cwd:     this.root,
            label:   'Site build',
        })

        if (!fs.existsSync(this.buildOutput)) {
            throw new Error(`${COLORS.red}Build output not found: ${this.buildOutput}${COLORS.reset}`)
        }

        fs.cpSync(this.buildOutput, this.localReleasePath, { force: true, recursive: true })
        console.log(`    > ${COLORS.green}Build copied to ${this.localReleasePath}${COLORS.reset}`)
    }

    writeMetadata = () => {
        fs.writeFileSync(path.join(this.localReleasePath, 'branch.json'), JSON.stringify({
            branch: this.branch,
        }, null, 2))

        fs.writeFileSync(path.join(this.localReleasePath, 'build.json'), JSON.stringify({
            commit:      this.commit,
            date:        Date.now(),
            generatedAt: new Date().toISOString(),
            release:     this.release,
        }, null, 2))

        fs.writeFileSync(path.join(this.localReleasePath, 'deployment.json'), JSON.stringify({
            platform: this.platform,
            product:  this.product,
            release:  this.release,
            site:     this.site,
        }, null, 2))

        console.log(`    > ${COLORS.yellow}Deployment metadata written${COLORS.reset}`)
    }

    zip = () => {
        console.log('    > Zipping release')
        runCommand({
            args:    ['-rq', this.localArchivePath, '.'],
            command: 'zip',
            cwd:     this.localReleasePath,
            label:   'Zip archive creation',
        })
        console.log(`    > ${COLORS.green}Archive created: ${this.localArchivePath}${COLORS.reset}`)
    }

    runRemote = (command, label) => {
        runCommand({
            args:    [
                '-p', this.password,
                'ssh',
                '-o', 'StrictHostKeyChecking=no',
                `${this.remote.user}@${this.remote.host}`,
                command,
            ],
            command: 'sshpass',
            cwd:     this.root,
            label,
        })
    }

    ensureRemoteDirectories = () => {
        console.log(`--- Preparing remote path ${COLORS.yellow}${this.remoteReleasePath}${COLORS.reset}`)
        this.runRemote(
            `mkdir -p ${shellEscape(this.remoteReleasePath)}`,
            'Remote directory creation'
        )
        console.log(`    > ${COLORS.green}Remote directories ready${COLORS.reset}`)
    }

    copy = () => {
        console.log('--- Copying archive to remote host')
        runCommand({
            args:    [
                '-p', this.password,
                'scp',
                '-o', 'StrictHostKeyChecking=no',
                this.localArchivePath,
                `${this.remote.user}@${this.remote.host}:${this.remoteReleasePath}/`,
            ],
            command: 'sshpass',
            cwd:     this.root,
            label:   'Archive upload',
        })
        console.log(`    > ${COLORS.green}Archive copied successfully${COLORS.reset}`)
    }

    activate = () => {
        console.log(`--- Activating release ${COLORS.yellow}${this.release}${COLORS.reset}`)
        this.runRemote(
            [
                `mkdir -p ${shellEscape(this.remotePath)}`,
                `rm -rf ${shellEscape(`${this.remoteReleasePath}/${this.release}`)}`,
                `unzip -oq ${shellEscape(`${this.remoteReleasePath}/${this.release}.zip`)} -d ${shellEscape(`${this.remoteReleasePath}/${this.release}`)}`,
                `ln -sfn ${shellEscape(`${this.remoteReleasePath}/${this.release}`)} ${shellEscape(this.remoteCurrentPath)}`,
                `rm -f ${shellEscape(`${this.remoteReleasePath}/${this.release}.zip`)}`,
            ].join(' && '),
            'Remote release activation'
        )
        console.log(`    > ${COLORS.green}Remote release activated${COLORS.reset}`)
    }

    launch = async () => {
        this.configure()
        this.build()
        this.writeMetadata()
        this.zip()

        if (this.dryRun) {
            console.log('')
            console.log(`--- ${COLORS.yellow}Dry run complete${COLORS.reset}`)
            console.log(`    > Archive ready at ${COLORS.green}${this.localArchivePath}${COLORS.reset}`)
            return
        }

        this.ensureRemoteDirectories()
        this.copy()
        this.activate()

        console.log('')
        console.log('---')
        console.log(`    ${COLORS.yellow}👍 ${COLORS.green}Deployment completed successfully${COLORS.reset}`)
        console.log('---')
    }
}
