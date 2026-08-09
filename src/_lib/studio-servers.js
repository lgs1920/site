import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {load as parseYaml} from 'js-yaml'

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const studioRoot = path.resolve(siteRoot, '..', 'studio')

const readJsonFile = (filePath) => {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }
    catch {
        return null
    }
}

const readYamlFile = (filePath) => {
    try {
        return parseYaml(fs.readFileSync(filePath, 'utf8'))
    }
    catch {
        return null
    }
}

/**
 * Read the Studio server configuration for a deployment platform.
 *
 * @param {string} platform Deployment platform.
 * @returns {object|null} Studio server configuration.
 */
export const readStudioServers = (platform) => {
    const configuredServersPath = process.env.LGS1920_STUDIO_SERVERS_FILE
    const serversPath = configuredServersPath || path.join(studioRoot, 'servers.json')
    const generatedServers = readJsonFile(serversPath)

    if (generatedServers?.platform === platform) {
        return generatedServers
    }

    const deploymentConfigPath = process.env.LGS1920_STUDIO_DEPLOY_CONFIG
        || path.join(studioRoot, 'deployment', 'deploy.yml')
    const deploymentConfig = readYamlFile(deploymentConfigPath)

    if (!deploymentConfig?.backend?.[platform]) {
        return null
    }

    return {
        platform,
        backend: deploymentConfig.backend[platform],
        studio:  deploymentConfig.studio?.[platform] || {},
        site:    deploymentConfig.site?.[platform] || {},
    }
}

/**
 * Build the public backend URL used by the site.
 *
 * @param {object|null} servers Studio server configuration.
 * @returns {string} Backend URL.
 */
export const buildStudioBackendUrl = (servers) => {
    const backend = servers?.backend
    if (!backend?.domain) {
        return ''
    }

    const protocol = backend.protocol || 'https'
    const port = Number(backend.port)
    const hasNonDefaultPort = Number.isInteger(port)
        && port > 0
        && !((protocol === 'http' && port === 80) || (protocol === 'https' && port === 443))
    const backendTarget = `${protocol}://${backend.domain}${hasNonDefaultPort ? `:${port}` : ''}`
    const studio = servers?.studio

    if (servers?.platform !== 'development' && studio?.domain && studio?.protocol && studio.proxy) {
        return `${studio.protocol}://${studio.domain}${studio.proxy}${backendTarget}`
    }

    if (servers?.platform !== 'development' && servers.site?.protocol) {
        return `${servers.site.protocol}://${backend.domain}`
    }

    return backendTarget
}

/**
 * Build the Studio backend restart endpoint.
 *
 * @param {object|null} servers Studio server configuration.
 * @returns {string} Backend restart URL.
 */
export const buildStudioBackendRestartUrl = (servers) => {
    const studio = servers?.studio
    if (!studio?.domain || !studio?.protocol) {
        return ''
    }

    return `${studio.protocol}://${studio.domain}/start-backend.php`
}
