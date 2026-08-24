import {loadGuidePageContent} from '../_lib/load-page-content.js'

const guidePageSlugs = {
    "/user-guide/": "overview",
    "/user-guide/getting-started/first-steps/": "getting-started/first-steps",
    "/user-guide/getting-started/import-source-data/": "getting-started/import-source-data",
    "/user-guide/reference/actions/": "reference/actions",
    "/user-guide/reference/objects/": "reference/objects",
    "/user-guide/reference/site-header/": "reference/site-header",
    "/user-guide/reference/site-header/search/": "reference/site-header/search",
    "/user-guide/reference/studio-interface/": "reference/studio-interface",
    "/user-guide/reference/studio-interface/dialogs/backend-restart/": "reference/studio-interface/dialogs/backend-restart",
    "/user-guide/reference/studio-interface/dialogs/cesium-token/": "reference/studio-interface/dialogs/cesium-token",
    "/user-guide/reference/studio-interface/dialogs/confirm/": "reference/studio-interface/dialogs/confirm",
    "/user-guide/reference/studio-interface/dialogs/geocoding/": "reference/studio-interface/dialogs/geocoding",
    "/user-guide/reference/studio-interface/dialogs/initial-error/": "reference/studio-interface/dialogs/initial-error",
    "/user-guide/reference/studio-interface/dialogs/journey-loader/": "reference/studio-interface/dialogs/journey-loader",
    "/user-guide/reference/studio-interface/dialogs/layer-information/": "reference/studio-interface/dialogs/layer-information",
    "/user-guide/reference/studio-interface/dialogs/layer-token/": "reference/studio-interface/dialogs/layer-token",
    "/user-guide/reference/studio-interface/dialogs/profile-sync/": "reference/studio-interface/dialogs/profile-sync",
    "/user-guide/reference/studio-interface/dialogs/pwa-update/": "reference/studio-interface/dialogs/pwa-update",
    "/user-guide/reference/studio-interface/dialogs/support/": "reference/studio-interface/dialogs/support",
    "/user-guide/reference/studio-interface/dialogs/video-download/": "reference/studio-interface/dialogs/video-download",
    "/user-guide/reference/studio-interface/dialogs/widget-mount-error/": "reference/studio-interface/dialogs/widget-mount-error",
    "/user-guide/reference/studio-interface/drawers/flythrough/": "reference/studio-interface/drawers/flythrough",
    "/user-guide/reference/studio-interface/drawers/information/": "reference/studio-interface/drawers/information",
    "/user-guide/reference/studio-interface/drawers/journey-editor/": "reference/studio-interface/drawers/journey-editor",
    "/user-guide/reference/studio-interface/drawers/journey-groups/": "reference/studio-interface/drawers/journey-groups",
    "/user-guide/reference/studio-interface/drawers/layers/": "reference/studio-interface/drawers/layers",
    "/user-guide/reference/studio-interface/drawers/pois/": "reference/studio-interface/drawers/pois",
    "/user-guide/reference/studio-interface/drawers/settings/": "reference/studio-interface/drawers/settings",
    "/user-guide/reference/studio-interface/drawers/widget-management/": "reference/studio-interface/drawers/widget-management",
    "/user-guide/reference/studio-interface/drawers/widgets-editor/": "reference/studio-interface/drawers/widgets-editor",
    "/user-guide/reference/studio-interface/widgets/": "reference/studio-interface/widgets",
    "/user-guide/workflows/appearance/": "workflows/appearance",
    "/user-guide/workflows/common-problems/": "workflows/common-problems",
    "/user-guide/workflows/export/": "workflows/export",
    "/user-guide/workflows/journey-reports/": "workflows/journey-reports",
    "/user-guide/workflows/journeys-and-tracks/": "workflows/journeys-and-tracks",
    "/user-guide/workflows/points-of-interest/": "workflows/points-of-interest",
    "/user-guide/workflows/scene-and-camera/": "workflows/scene-and-camera",
    "/user-guide/workflows/shortcuts/": "workflows/shortcuts",
    "/user-guide/workflows/snapshots-and-video/": "workflows/snapshots-and-video",
    "/user-guide/workflows/use-map-layers/": "workflows/use-map-layers",
    "/user-guide/workflows/widgets-and-overlays/": "workflows/widgets-and-overlays"
}

const guidePages = Object.fromEntries(
    Object.entries(guidePageSlugs).map(([url, slug]) => [url, {
        layout:  'layouts/page.html',
        locales: loadGuidePageContent(slug),
    }]),
)

const normalizeUrl = (url = '') => {
    const normalizedUrl = url.split('#')[0].split('?')[0].replace(/index\.html$/, '')

    if (!normalizedUrl) {
        return '/'
    }

    return normalizedUrl.endsWith('/') ? normalizedUrl : `${normalizedUrl}/`
}

const getCanonicalGuidePath = (url = '') => {
    const normalizedUrl = normalizeUrl(url)

    return normalizedUrl.startsWith('/fr/')
        ? normalizedUrl.slice(3)
        : normalizedUrl
}

const getGuidePageDefinition = (url = '') => guidePages[getCanonicalGuidePath(url)] ?? null

const getGuidePageContent = (url = '', locale = 'en') => {
    const definition = getGuidePageDefinition(url)

    if (!definition) {
        return null
    }

    return definition.locales?.[locale] ?? definition.locales?.en ?? null
}

export {guidePages, getGuidePageDefinition, getGuidePageContent}
export default guidePages
