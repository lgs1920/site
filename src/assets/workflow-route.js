const WORKFLOW_ROUTE_DURATION = 24_000
const WORKFLOW_ROUTE_MARKER_RADIUS = 0.95
const WORKFLOW_ROUTE_MARKER_CORE_RADIUS = 0.38
const WORKFLOW_ROUTE_MARKER_HALO_RADIUS = 2.6

const setupWorkflowRoute = (route) => {
    const path = route.querySelector('path')
    const marker = route.querySelector('[data-workflow-route-marker]')
    const markerCore = route.querySelector('[data-workflow-route-marker-core]')
    const markerHalo = route.querySelector('[data-workflow-route-marker-halo]')
    const wrapper = route.closest('.workflow-list-wrap')
    const points = [...(wrapper?.querySelectorAll('.workflow-poi') || [])]

    if (!path || !marker || !markerCore || !markerHalo || !wrapper) {
        return null
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pathLength = path.getTotalLength()
    let animationFrame = null
    let elapsed = 0
    let lastTimestamp = null
    let isVisible = false
    let markerShapeSignature = ''

    const syncMarkerShape = () => {
        const bounds = route.getBoundingClientRect()

        if (!bounds.width || !bounds.height) {
            return
        }

        const signature = `${bounds.width}:${bounds.height}`

        if (signature === markerShapeSignature) {
            return
        }

        markerShapeSignature = signature
        marker.setAttribute('rx', `${WORKFLOW_ROUTE_MARKER_RADIUS * bounds.height / bounds.width}`)
        marker.setAttribute('ry', `${WORKFLOW_ROUTE_MARKER_RADIUS}`)
        markerCore.setAttribute('rx', `${WORKFLOW_ROUTE_MARKER_CORE_RADIUS * bounds.height / bounds.width}`)
        markerCore.setAttribute('ry', `${WORKFLOW_ROUTE_MARKER_CORE_RADIUS}`)
        markerHalo.setAttribute('rx', `${WORKFLOW_ROUTE_MARKER_HALO_RADIUS * bounds.height / bounds.width}`)
        markerHalo.setAttribute('ry', `${WORKFLOW_ROUTE_MARKER_HALO_RADIUS}`)
    }

    const getScreenPoint = (point) => {
        const transform = route.getScreenCTM()

        if (!transform) {
            return null
        }

        return new DOMPoint(point.x, point.y).matrixTransform(transform)
    }

    const syncPoints = (markerScreenPoint) => {
        points.forEach((point) => {
            if (!markerScreenPoint) {
                point.classList.remove('is-route-active')
                return
            }

            const bounds = point.getBoundingClientRect()
            const pointCenter = bounds.top + bounds.height / 2
            const activeStart = pointCenter - bounds.height * 0.42
            const activeEnd = pointCenter + bounds.height * 0.42
            const isPartiallyUnder = markerScreenPoint.y >= activeStart
                && markerScreenPoint.y <= activeEnd

            point.classList.toggle('is-route-active', isPartiallyUnder)
        })
    }

    const render = (progress) => {
        const point = path.getPointAtLength(pathLength * progress)
        const markerScreenPoint = getScreenPoint(point)

        syncMarkerShape()
        marker.setAttribute('cx', point.x)
        marker.setAttribute('cy', point.y)
        markerCore.setAttribute('cx', point.x)
        markerCore.setAttribute('cy', point.y)
        markerHalo.setAttribute('cx', point.x)
        markerHalo.setAttribute('cy', point.y)
        syncPoints(markerScreenPoint)
    }

    const stop = () => {
        if (animationFrame !== null) {
            window.cancelAnimationFrame(animationFrame)
            animationFrame = null
        }

        lastTimestamp = null
    }

    const draw = (timestamp) => {
        animationFrame = null

        if (!isVisible || document.hidden) {
            stop()
            return
        }

        if (lastTimestamp === null) {
            lastTimestamp = timestamp
        }
        else {
            elapsed += timestamp - lastTimestamp
            lastTimestamp = timestamp
        }

        const progress = reducedMotionQuery.matches
            ? 1
            : (elapsed % WORKFLOW_ROUTE_DURATION) / WORKFLOW_ROUTE_DURATION

        render(progress)

        if (!reducedMotionQuery.matches) {
            animationFrame = window.requestAnimationFrame(draw)
        }
    }

    const start = () => {
        if (!isVisible || document.hidden) {
            return
        }

        if (reducedMotionQuery.matches) {
            render(1)
            return
        }

        if (animationFrame === null) {
            animationFrame = window.requestAnimationFrame(draw)
        }
    }

    const setVisible = (nextVisibility) => {
        isVisible = nextVisibility
        route.classList.toggle('is-visible', isVisible && !document.hidden)

        if (!isVisible || document.hidden) {
            stop()
            return
        }

        start()
    }

    const onReducedMotionChange = () => {
        stop()
        if (reducedMotionQuery.matches && isVisible && !document.hidden) {
            render(1)
        }
        else {
            start()
        }
    }

    reducedMotionQuery.addEventListener('change', onReducedMotionChange)
    render(0)

    return {
        setVisible,
    }
}

const setupWorkflowRouteVisibility = () => {
    const routes = [...document.querySelectorAll('.workflow-route')]
    const entries = routes
        .map((route) => ({controller: setupWorkflowRoute(route), route}))
        .filter(({controller}) => controller)
    const controllers = entries.map(({controller}) => controller)

    if (!controllers.length) {
        return
    }

    const visibleRoutes = new Set()
    const syncDocumentVisibility = () => {
        entries.forEach(({controller, route}) => {
            controller.setVisible(visibleRoutes.has(route))
        })
    }

    if (!('IntersectionObserver' in window)) {
        controllers.forEach((controller) => controller.setVisible(true))
        return
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                visibleRoutes.add(entry.target)
            }
            else {
                visibleRoutes.delete(entry.target)
            }
        })

        syncDocumentVisibility()
    }, {threshold: 0.01})

    routes.forEach((route) => observer.observe(route))
    document.addEventListener('visibilitychange', syncDocumentVisibility)
}

document.addEventListener('DOMContentLoaded', setupWorkflowRouteVisibility)
