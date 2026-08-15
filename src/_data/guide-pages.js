import overview from './guide-pages/index.js'
import firstSteps from './guide-pages/getting-started/first-steps.js'
import importSourceData from './guide-pages/getting-started/import-source-data.js'
import actions from './guide-pages/reference/actions.js'
import objects from './guide-pages/reference/objects.js'
import {siteHeader, siteSearch} from './guide-pages/reference/site-header.js'
import studioInterface from './guide-pages/reference/studio-interface.js'
import backendRestart from './guide-pages/reference/studio-interface/dialogs/backend-restart.js'
import cesiumToken from './guide-pages/reference/studio-interface/dialogs/cesium-token.js'
import confirm from './guide-pages/reference/studio-interface/dialogs/confirm.js'
import geocoding from './guide-pages/reference/studio-interface/dialogs/geocoding.js'
import initialError from './guide-pages/reference/studio-interface/dialogs/initial-error.js'
import journeyLoader from './guide-pages/reference/studio-interface/dialogs/journey-loader.js'
import layerInformation from './guide-pages/reference/studio-interface/dialogs/layer-information.js'
import layerToken from './guide-pages/reference/studio-interface/dialogs/layer-token.js'
import profileSync from './guide-pages/reference/studio-interface/dialogs/profile-sync.js'
import pwaUpdate from './guide-pages/reference/studio-interface/dialogs/pwa-update.js'
import support from './guide-pages/reference/studio-interface/dialogs/support.js'
import videoDownload from './guide-pages/reference/studio-interface/dialogs/video-download.js'
import widgetMountError from './guide-pages/reference/studio-interface/dialogs/widget-mount-error.js'
import flythrough from './guide-pages/reference/studio-interface/drawers/flythrough.js'
import information from './guide-pages/reference/studio-interface/drawers/information.js'
import journeyEditor from './guide-pages/reference/studio-interface/drawers/journey-editor.js'
import journeyGroups from './guide-pages/reference/studio-interface/drawers/journey-groups.js'
import layers from './guide-pages/reference/studio-interface/drawers/layers.js'
import pois from './guide-pages/reference/studio-interface/drawers/pois.js'
import settings from './guide-pages/reference/studio-interface/drawers/settings.js'
import widgetManagement from './guide-pages/reference/studio-interface/drawers/widget-management.js'
import widgetsEditor from './guide-pages/reference/studio-interface/drawers/widgets-editor.js'
import widgets from './guide-pages/reference/studio-interface/widgets.js'
import appearance from './guide-pages/workflows/appearance.js'
import commonProblems from './guide-pages/workflows/common-problems.js'
import exportPage from './guide-pages/workflows/export.js'
import journeyReports from './guide-pages/workflows/journey-reports.js'
import journeysAndTracks from './guide-pages/workflows/journeys-and-tracks.js'
import pointsOfInterest from './guide-pages/workflows/points-of-interest.js'
import sceneAndCamera from './guide-pages/workflows/scene-and-camera.js'
import shortcuts from './guide-pages/workflows/shortcuts.js'
import snapshotsAndVideo from './guide-pages/workflows/snapshots-and-video.js'
import useMapLayers from './guide-pages/workflows/use-map-layers.js'
import widgetsAndOverlays from './guide-pages/workflows/widgets-and-overlays.js'

const guidePages = {
    '/user-guide/': overview,
    '/user-guide/getting-started/first-steps/': firstSteps,
    '/user-guide/getting-started/import-source-data/': importSourceData,
    '/user-guide/reference/actions/': actions,
    '/user-guide/reference/objects/': objects,
    '/user-guide/reference/site-header/': siteHeader,
    '/user-guide/reference/site-header/search/': siteSearch,
    '/user-guide/reference/studio-interface/': studioInterface,
    '/user-guide/reference/studio-interface/dialogs/backend-restart/': backendRestart,
    '/user-guide/reference/studio-interface/dialogs/cesium-token/': cesiumToken,
    '/user-guide/reference/studio-interface/dialogs/confirm/': confirm,
    '/user-guide/reference/studio-interface/dialogs/geocoding/': geocoding,
    '/user-guide/reference/studio-interface/dialogs/initial-error/': initialError,
    '/user-guide/reference/studio-interface/dialogs/journey-loader/': journeyLoader,
    '/user-guide/reference/studio-interface/dialogs/layer-information/': layerInformation,
    '/user-guide/reference/studio-interface/dialogs/layer-token/': layerToken,
    '/user-guide/reference/studio-interface/dialogs/profile-sync/': profileSync,
    '/user-guide/reference/studio-interface/dialogs/pwa-update/': pwaUpdate,
    '/user-guide/reference/studio-interface/dialogs/support/': support,
    '/user-guide/reference/studio-interface/dialogs/video-download/': videoDownload,
    '/user-guide/reference/studio-interface/dialogs/widget-mount-error/': widgetMountError,
    '/user-guide/reference/studio-interface/drawers/flythrough/': flythrough,
    '/user-guide/reference/studio-interface/drawers/information/': information,
    '/user-guide/reference/studio-interface/drawers/journey-editor/': journeyEditor,
    '/user-guide/reference/studio-interface/drawers/journey-groups/': journeyGroups,
    '/user-guide/reference/studio-interface/drawers/layers/': layers,
    '/user-guide/reference/studio-interface/drawers/pois/': pois,
    '/user-guide/reference/studio-interface/drawers/settings/': settings,
    '/user-guide/reference/studio-interface/drawers/widget-management/': widgetManagement,
    '/user-guide/reference/studio-interface/drawers/widgets-editor/': widgetsEditor,
    '/user-guide/reference/studio-interface/widgets/': widgets,
    '/user-guide/workflows/appearance/': appearance,
    '/user-guide/workflows/common-problems/': commonProblems,
    '/user-guide/workflows/export/': exportPage,
    '/user-guide/workflows/journey-reports/': journeyReports,
    '/user-guide/workflows/journeys-and-tracks/': journeysAndTracks,
    '/user-guide/workflows/points-of-interest/': pointsOfInterest,
    '/user-guide/workflows/scene-and-camera/': sceneAndCamera,
    '/user-guide/workflows/shortcuts/': shortcuts,
    '/user-guide/workflows/snapshots-and-video/': snapshotsAndVideo,
    '/user-guide/workflows/use-map-layers/': useMapLayers,
    '/user-guide/workflows/widgets-and-overlays/': widgetsAndOverlays,
}

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

export { guidePages, getGuidePageDefinition, getGuidePageContent }
export default guidePages
