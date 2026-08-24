import {loadPageContent} from '../../_lib/load-page-content.js'

const interpolate = (value, variables) => {
    if (typeof value === 'string') {
        return value.replace(/{{(count|latestVersion)}}/g, (_, key) => variables[key])
    }

    if (Array.isArray(value)) return value.map((item) => interpolate(item, variables))
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, interpolate(item, variables)]))
    }

    return value
}

const createLocalizedChangelog = (locale) => {
    const content = loadPageContent(`../_content/changelog/${locale}/page.json`)

    return {
        ...content,
        getHero: ({changelog: changelogData}) => interpolate(content.hero, {
            count:        changelogData.count,
            latestVersion:changelogData.latest?.version || content.latestVersionFallback,
        }),
    }
}

export default {
    layout:   'layouts/page.html',
    pageClass:'legal-page changelog-page',
    path:     '/changelog/',
    en:       createLocalizedChangelog('en'),
    fr:       createLocalizedChangelog('fr'),
}
