const ROUTE_DURATION = 13_000
const ROUTE_PATH_SAMPLE_COUNT = 260
const ROUTE_DASH_SIZE = 0.16
const ROUTE_GAP_SIZE = 0.12
const ROUTE_LINE_WIDTH = 2.4
const TRAIL_PATH_SAMPLE_COUNT = 320
const ROUTE_TURNS = 2
const TRAIL_DURATION = 2_200
const TRAIL_LEAD_DURATION = 1_150
const NEON_OUTER_RADIUS = 0.09
const NEON_MIDDLE_RADIUS = 0.046
const NEON_CORE_RADIUS = 0.018
const ROUTE_EDGE_FADE_LENGTH = 0.14
const ROUTE_HEAD_MIN_OPACITY = 0.24
const ROUTE_SHAPE_STRETCH = 0.16
const ROUTE_SHAPE_SQUEEZE = 0.09
const ROUTE_SHAPE_CYCLE = 5_800
const HERO_ROUTE_MOBILE_BREAKPOINT = 960

const GLOW_VERTEX_SHADER = `
    attribute float aAlpha;
    uniform float uSize;
    varying float vAlpha;

    void main() {
        vAlpha = aAlpha;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * (300.0 / max(1.0, -modelViewPosition.z));
        gl_Position = projectionMatrix * modelViewPosition;
    }
`

const GLOW_FRAGMENT_SHADER = `
    precision mediump float;

    uniform vec3 uColor;
    varying float vAlpha;

    void main() {
        vec2 centeredPoint = gl_PointCoord - 0.5;
        float distanceFromCenter = length(centeredPoint);
        float softEdge = 1.0 - smoothstep(0.08, 0.5, distanceFromCenter);
        float brightCore = 1.0 - smoothstep(0.0, 0.18, distanceFromCenter);
        float alpha = vAlpha * (softEdge * 0.82 + brightCore * 0.36);

        if (alpha <= 0.005) {
            discard;
        }

        gl_FragColor = vec4(uColor, alpha);
    }
`

const NEON_VERTEX_SHADER = `
    varying float vRouteProgress;

    void main() {
        vRouteProgress = uv.x;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const NEON_FRAGMENT_SHADER = `
    precision mediump float;

    uniform vec3 uBaseColor;
    uniform vec3 uGlowColor;
    uniform float uGlowMix;
    uniform float uOpacity;
    uniform float uPastSpan;
    uniform float uFutureSpan;
    uniform float uProgress;
    varying float vRouteProgress;

    void main() {
        float offset = vRouteProgress - uProgress;
        float span = offset < 0.0 ? uPastSpan : uFutureSpan;
        float distanceFromMarker = abs(offset) / max(span, 0.0001);
        float normalizedFade = clamp(1.0 - distanceFromMarker, 0.0, 1.0);
        float fade = smoothstep(0.0, 1.0, normalizedFade);
        float colorFade = smoothstep(0.0, 1.0, normalizedFade) * uGlowMix;
        vec3 color = mix(uBaseColor, uGlowColor, colorFade);
        float alpha = fade * uOpacity;

        if (alpha <= 0.004) {
            discard;
        }

        gl_FragColor = vec4(color, alpha);
    }
`

const parseRgbColor = (value, fallback) => {
    const match = value.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i)

    if (!match) {
        return fallback
    }

    return {
        r: Number(match[1]) / 255,
        g: Number(match[2]) / 255,
        b: Number(match[3]) / 255,
    }
}

const readThemeColor = (property, fallback) => {
    const probe = document.createElement('span')
    probe.style.position = 'absolute'
    probe.style.color = `var(${property})`
    probe.style.visibility = 'hidden'
    document.body.append(probe)

    const value = getComputedStyle(probe).color
    probe.remove()

    return parseRgbColor(value, fallback)
}

const setupHeroRoute = async () => {
    const layer = document.querySelector('[data-hero-route]')
    const canvas = layer?.querySelector('[data-hero-route-canvas]')

    if (!layer || !canvas) {
        return
    }

    try {
        const [
            THREE,
            {Line2},
            {LineGeometry},
            {LineMaterial},
        ] = await Promise.all([
            import('three'),
            import('three/addons/lines/Line2.js'),
            import('three/addons/lines/LineGeometry.js'),
            import('three/addons/lines/LineMaterial.js'),
        ])
        const root = document.documentElement
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        const toThreeColor = ({r, g, b}) => new THREE.Color(r, g, b)
        const createGlowMaterial = (color, size) => new THREE.ShaderMaterial({
            blending:    THREE.AdditiveBlending,
            depthWrite:  false,
            fragmentShader:GLOW_FRAGMENT_SHADER,
            transparent: true,
            uniforms:    {
                uColor: {value: toThreeColor(color)},
                uSize:  {value: size},
            },
            vertexShader:GLOW_VERTEX_SHADER,
        })
        const createNeonMaterial = (baseColor, glowColor, opacity, glowMix) => new THREE.ShaderMaterial({
            blending:      THREE.AdditiveBlending,
            depthWrite:    false,
            fragmentShader:NEON_FRAGMENT_SHADER,
            side:          THREE.DoubleSide,
            toneMapped:    false,
            transparent:   true,
            uniforms:      {
                uBaseColor:  {value:toThreeColor(baseColor)},
                uFutureSpan:{value:TRAIL_LEAD_DURATION / ROUTE_DURATION},
                uGlowColor:  {value:toThreeColor(glowColor)},
                uGlowMix:    {value:glowMix},
                uOpacity:   {value:opacity},
                uPastSpan:  {value:TRAIL_DURATION / ROUTE_DURATION},
                uProgress:  {value:0},
            },
            vertexShader:NEON_VERTEX_SHADER,
        })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
        const renderer = new THREE.WebGLRenderer({
            alpha:          true,
            antialias:      true,
            canvas,
            powerPreference:'low-power',
        })
        const sceneRoot = new THREE.Group()
        const randomBetween = (minimum, maximum) => minimum + Math.random() * (maximum - minimum)
        let routeState = null
        let animationStartedAt = null

        const createRouteState = () => {
            const routeColor = readThemeColor('--hero-route-path-color', {r:0.25, g:0.38, b:0.07})
            const glowColor = readThemeColor('--hero-route-glow-color', {r:0.4, g:0.65, b:0.05})
            const routeGroup = new THREE.Group()
            const diagonalDirection = Math.random() < 0.5 ? 1 : -1
            const diagonalHeight = randomBetween(2.35, 2.75)
            const createDiagonalPoint = (side, depth) => {
                const z = depth === 'entry'
                    ? randomBetween(2.25, 3.25)
                    : randomBetween(-4.2, -2.65)

                return new THREE.Vector3(
                    side === 'entry' ? -4.45 : 4.45,
                    (side === 'entry' ? diagonalDirection : -diagonalDirection) * diagonalHeight,
                    z,
                )
            }

            const entryPoint = createDiagonalPoint('entry', 'entry')
            const exitPoint = createDiagonalPoint('exit', 'exit')
            const spiralCenter = new THREE.Vector3(
                randomBetween(-0.45, 0.45),
                randomBetween(-0.25, 0.35),
                randomBetween(0.15, 0.55),
            )
            const routeStartAngle = randomBetween(0, Math.PI * 2)
            const spiralDirection = Math.random() < 0.5 ? -1 : 1
            const spiralRadiusX = randomBetween(2.25, 2.75)
            const spiralRadiusY = randomBetween(1.45, 1.9)
            const spiralHeight = randomBetween(5.55, 6.25)
            const spiralTop = randomBetween(2.35, 2.9)
            const spiralControlPointCount = 66
            const getSpiralPoint = (progress) => {
                const angle = routeStartAngle + progress * Math.PI * 2 * ROUTE_TURNS * spiralDirection
                const radiusX = 0.18 + progress * spiralRadiusX
                const radiusY = 0.12 + progress * spiralRadiusY

                return new THREE.Vector3(
                    spiralCenter.x + Math.cos(angle) * radiusX,
                    spiralCenter.y + Math.sin(angle) * radiusY,
                    spiralCenter.z + spiralTop - progress * spiralHeight + Math.sin(angle * 0.5) * 0.24,
                )
            }
            const spiralPoints = Array.from({length: spiralControlPointCount}, (_, index) => {
                return getSpiralPoint(index / (spiralControlPointCount - 1))
            })
            const spiralStartPoint = spiralPoints[0]
            const spiralEndPoint = spiralPoints[spiralPoints.length - 1]
            const spiralStartTangent = new THREE.Vector3()
                .subVectors(spiralPoints[1], spiralPoints[0])
                .normalize()
            const spiralEndTangent = new THREE.Vector3()
                .subVectors(spiralPoints[spiralPoints.length - 1], spiralPoints[spiralPoints.length - 2])
                .normalize()
            const getRouteNormal = (direction) => {
                const normal = new THREE.Vector3(-direction.y, direction.x, 0)

                if (normal.lengthSq() < 0.001) {
                    normal.set(0, 1, 0)
                }

                return normal.normalize()
            }
            const entryApproach = spiralStartPoint.clone()
                .sub(spiralStartTangent.clone().multiplyScalar(randomBetween(0.78, 1.12)))
            const entryDirection = new THREE.Vector3().subVectors(entryApproach, entryPoint).normalize()
            const entryNormal = getRouteNormal(entryDirection)
            const entryBend = entryPoint.clone()
                .lerp(entryApproach, randomBetween(0.34, 0.52))
                .add(entryNormal.clone().multiplyScalar(randomBetween(0.95, 1.4)))
            entryBend.z += randomBetween(-0.3, 0.35)
            const entrySway = entryPoint.clone()
                .lerp(entryApproach, randomBetween(0.62, 0.74))
                .add(entryNormal.clone().multiplyScalar(randomBetween(-0.55, -0.85)))
            entrySway.z += randomBetween(-0.22, 0.22)
            const exitDeparture = spiralEndPoint.clone()
                .add(spiralEndTangent.clone().multiplyScalar(randomBetween(0.82, 1.18)))
            const exitDirection = new THREE.Vector3().subVectors(exitPoint, exitDeparture).normalize()
            const exitNormal = getRouteNormal(exitDirection)
            const exitBend = exitDeparture.clone()
                .lerp(exitPoint, randomBetween(0.42, 0.62))
                .add(exitNormal.clone().multiplyScalar(randomBetween(-1.2, -0.65)))
            exitBend.z += randomBetween(-0.35, 0.3)
            const exitSway = exitDeparture.clone()
                .lerp(exitPoint, randomBetween(0.7, 0.8))
                .add(exitNormal.clone().multiplyScalar(randomBetween(0.45, 0.8)))
            exitSway.z += randomBetween(-0.2, 0.2)
            const routeControlPoints = [
                entryPoint,
                entryBend,
                entrySway,
                entryApproach,
                ...spiralPoints,
                exitDeparture,
                exitBend,
                exitSway,
                exitPoint,
            ]
            const routeCurve = new THREE.CatmullRomCurve3(routeControlPoints, false, 'centripetal', 0.28)
            const routePathPoints = routeCurve.getSpacedPoints(ROUTE_PATH_SAMPLE_COUNT)
            const routePositions = new Float32Array(routePathPoints.length * 3)

            routePathPoints.forEach((point, index) => {
                routePositions[index * 3] = point.x
                routePositions[index * 3 + 1] = point.y
                routePositions[index * 3 + 2] = point.z
            })

            const routeGeometry = new LineGeometry()
            routeGeometry.setPositions(routePositions)
            const routeMaterial = new LineMaterial({
                alphaToCoverage:true,
                color:          toThreeColor(routeColor),
                dashed:         true,
                dashSize:       ROUTE_DASH_SIZE,
                depthWrite:     false,
                gapSize:        ROUTE_GAP_SIZE,
                linewidth:      ROUTE_LINE_WIDTH,
                opacity:        0.96,
                transparent:    true,
            })
            routeMaterial.onBeforeCompile = (shader) => {
                shader.uniforms.uRouteLength = {value: routeCurve.getLength()}
                shader.fragmentShader = shader.fragmentShader.replace(
                    'uniform float linewidth;',
                    'uniform float linewidth;\n\t\tuniform float uRouteLength;',
                )
                shader.fragmentShader = shader.fragmentShader.replace(
                    'float alpha = opacity;',
                    `float routeProgress = clamp(vLineDistance / max(uRouteLength, 0.0001), 0.0, 1.0);
                    float routeStartFade = smoothstep(0.0, ${ROUTE_EDGE_FADE_LENGTH}, routeProgress);
                    float routeEndFade = smoothstep(0.0, ${ROUTE_EDGE_FADE_LENGTH}, 1.0 - routeProgress);
                    float routeEdgeFade = min(routeStartFade, routeEndFade);
                    float edgeOpacity = mix(${ROUTE_HEAD_MIN_OPACITY}, 1.0, routeEdgeFade);
                    float alpha = opacity * edgeOpacity;`,
                )
            }
            const routeLine = new Line2(routeGeometry, routeMaterial)
            routeLine.computeLineDistances()
            routeLine.frustumCulled = false
            routeLine.renderOrder = 4

            const neonOuterMaterial = createNeonMaterial(routeColor, glowColor, 0.1, 0.5)
            const neonMiddleMaterial = createNeonMaterial(routeColor, glowColor, 0.2, 0.78)
            const neonCoreMaterial = createNeonMaterial(routeColor, glowColor, 0.72, 1)
            const neonMaterials = [neonOuterMaterial, neonMiddleMaterial, neonCoreMaterial]
            const neonOuter = new THREE.Mesh(
                new THREE.TubeGeometry(routeCurve, TRAIL_PATH_SAMPLE_COUNT, NEON_OUTER_RADIUS, 8, false),
                neonOuterMaterial,
            )
            const neonMiddle = new THREE.Mesh(
                new THREE.TubeGeometry(routeCurve, TRAIL_PATH_SAMPLE_COUNT, NEON_MIDDLE_RADIUS, 8, false),
                neonMiddleMaterial,
            )
            const neonCore = new THREE.Mesh(
                new THREE.TubeGeometry(routeCurve, TRAIL_PATH_SAMPLE_COUNT, NEON_CORE_RADIUS, 6, false),
                neonCoreMaterial,
            )
            neonOuter.frustumCulled = false
            neonMiddle.frustumCulled = false
            neonCore.frustumCulled = false
            neonOuter.renderOrder = 1
            neonMiddle.renderOrder = 2
            neonCore.renderOrder = 3

            const markerPositions = new Float32Array(3)
            const markerAlphas = new Float32Array([1])
            const markerGeometry = new THREE.BufferGeometry()
            markerGeometry.setAttribute('position', new THREE.Float32BufferAttribute(markerPositions, 3))
            markerGeometry.setAttribute('aAlpha', new THREE.Float32BufferAttribute(markerAlphas, 1))
            const markerMaterial = createGlowMaterial(glowColor, 1.55)
            const marker = new THREE.Points(markerGeometry, markerMaterial)
            marker.renderOrder = 5

            routeGroup.add(neonOuter, neonMiddle, neonCore, routeLine, marker)
            sceneRoot.add(routeGroup)

            const poiItems = Array.from(layer.querySelectorAll('[data-hero-route-poi]')).map((element) => ({
                element,
                point: Number(element.dataset.routePoint) || 0,
                position: routeCurve.getPointAt(Number(element.dataset.routePoint) || 0),
            }))

            return {
                marker,
                markerMaterial,
                neonMaterials,
                poiItems,
                routeCurve,
                routeGroup,
            }
        }

        const disposeRouteState = () => {
            if (!routeState) {
                return
            }

            sceneRoot.remove(routeState.routeGroup)
            routeState.routeGroup.traverse((object) => {
                object.geometry?.dispose()

                const materials = Array.isArray(object.material)
                    ? object.material
                    : [object.material]

                materials.filter(Boolean).forEach(material => material.dispose())
            })
            routeState.poiItems.forEach(({element}) => {
                element.classList.remove('is-revealed')
            })
            routeState = null
        }

        const rebuildRoute = () => {
            const nextRouteState = createRouteState()

            disposeRouteState()
            routeState = nextRouteState
            animationStartedAt = null
        }

        scene.add(sceneRoot)
        camera.position.set(0, 0, 9.5)
        camera.lookAt(0, 0, 0)
        rebuildRoute()

        const dimensions = {height: 0, width: 0}
        const worldPosition = new THREE.Vector3()
        const projectAnnotation = (element, localPosition) => {
            if (!element || !dimensions.width || !dimensions.height) {
                return
            }

            worldPosition.copy(localPosition)
            routeState.routeGroup.localToWorld(worldPosition)
            worldPosition.project(camera)

            const isVisible = worldPosition.z > -1 && worldPosition.z < 1
                && worldPosition.x > -1.15 && worldPosition.x < 1.15
                && worldPosition.y > -1.15 && worldPosition.y < 1.15

            if (!isVisible) {
                element.style.visibility = 'hidden'
                return
            }

            const x = (worldPosition.x * 0.5 + 0.5) * dimensions.width
            const y = (-worldPosition.y * 0.5 + 0.5) * dimensions.height
            element.style.left = `${x}px`
            element.style.top = `${y}px`
            element.style.visibility = 'visible'
        }

        const syncPoi = (item, reached) => {
            item.element.classList.toggle('is-revealed', reached)
        }

        const updateTrail = (progress) => {
            routeState.neonMaterials.forEach((material) => {
                material.uniforms.uProgress.value = progress
            })
        }

        const resize = () => {
            const bounds = layer.getBoundingClientRect()

            if (!bounds.width || !bounds.height) {
                return
            }

            dimensions.width = bounds.width
            dimensions.height = bounds.height
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
            renderer.setSize(bounds.width, bounds.height, false)
            camera.aspect = bounds.width / bounds.height
            camera.updateProjectionMatrix()

            const aspect = bounds.width / bounds.height
            const isMobile = bounds.width < HERO_ROUTE_MOBILE_BREAKPOINT
            const routeScale = isMobile
                ? Math.max(0.36, Math.min(0.5, aspect * 0.58))
                : Math.max(0.54, Math.min(0.72, aspect * 0.46))
            const routeHeightScale = routeScale
            sceneRoot.scale.set(routeScale, routeHeightScale, routeScale)
            sceneRoot.position.x = 0
            sceneRoot.position.y = isMobile ? 2 : 0
            sceneRoot.updateMatrixWorld(true)
        }

        const render = (timestamp = 0) => {
            if (!routeState) {
                return
            }

            if (animationStartedAt === null && timestamp > 0) {
                animationStartedAt = timestamp
            }

            const elapsed = animationStartedAt === null
                ? 0
                : (timestamp - animationStartedAt) % ROUTE_DURATION
            const progress = reducedMotionQuery.matches
                ? 1
                : Math.max(0, Math.min(1, elapsed / ROUTE_DURATION))
            const reachedAll = reducedMotionQuery.matches

            updateTrail(progress)
            routeState.routeCurve.getPointAt(progress, routeState.marker.position)
            routeState.markerMaterial.uniforms.uSize.value = reducedMotionQuery.matches
                ? 1.55
                : 1.55 + Math.sin(timestamp * 0.008) * 0.1
            sceneRoot.rotation.x = reducedMotionQuery.matches
                ? 0.18
                : 0.2 + Math.sin(timestamp * 0.00025) * 0.08
            sceneRoot.rotation.y = reducedMotionQuery.matches
                ? 0
                : Math.sin(timestamp * 0.00032) * 0.18
            sceneRoot.rotation.z = reducedMotionQuery.matches
                ? 0.06
                : Math.sin(timestamp * 0.00023) * 0.1
            const shapePhase = timestamp / ROUTE_SHAPE_CYCLE * Math.PI * 2
            const shapeWave = Math.sin(shapePhase)
            const horizontalStretch = reducedMotionQuery.matches
                ? 1
                : 1 + shapeWave * ROUTE_SHAPE_STRETCH
            const verticalSqueeze = reducedMotionQuery.matches
                ? 1
                : 1 - shapeWave * ROUTE_SHAPE_SQUEEZE

            routeState.routeGroup.scale.set(horizontalStretch, verticalSqueeze, 1)
            sceneRoot.updateMatrixWorld(true)

            routeState.poiItems.forEach((item) => {
                const reached = reachedAll || progress >= item.point
                projectAnnotation(item.element, item.position)
                syncPoi(item, reached)
            })

            renderer.render(scene, camera)
        }

        let paletteSignature = `${root.dataset.brandColor || ''}:${root.dataset.seasonTheme || ''}`
        const restartRoute = () => {
            rebuildRoute()
            render(0)
        }
        const syncPalette = () => {
            const nextPaletteSignature = `${root.dataset.brandColor || ''}:${root.dataset.seasonTheme || ''}`

            if (nextPaletteSignature === paletteSignature) {
                return
            }

            paletteSignature = nextPaletteSignature
            restartRoute()
        }
        const paletteObserver = new MutationObserver(syncPalette)

        paletteObserver.observe(root, {
            attributes:     true,
            attributeFilter:['data-brand-color', 'data-season-theme'],
        })

        const observeVisibility = () => {
            let isVisible = true
            let animationFrame = null

            const syncVisibilityClass = () => {
                layer.classList.toggle('is-visible', isVisible && !document.hidden)
            }

            const draw = (timestamp) => {
                animationFrame = null

                if (!isVisible || document.hidden) {
                    syncVisibilityClass()
                    return
                }

                render(timestamp)

                if (!reducedMotionQuery.matches) {
                    animationFrame = window.requestAnimationFrame(draw)
                }
            }

            const restart = () => {
                syncVisibilityClass()

                if (!isVisible || document.hidden) {
                    return
                }

                if (reducedMotionQuery.matches) {
                    render(0)
                    return
                }

                if (animationFrame === null && isVisible && !document.hidden) {
                    animationFrame = window.requestAnimationFrame(draw)
                }
            }

            const intersectionObserver = new IntersectionObserver(([entry]) => {
                isVisible = entry.isIntersecting
                syncVisibilityClass()

                if (isVisible) {
                    restart()
                }
            }, {threshold: 0.01})

            intersectionObserver.observe(layer)
            document.addEventListener('visibilitychange', restart)
            reducedMotionQuery.addEventListener('change', restart)
            layer.classList.add('is-observed')
            restart()
        }

        resize()
        new ResizeObserver(resize).observe(layer)
        layer.classList.add('is-enhanced', 'is-ready')
        observeVisibility()
    }
    catch (error) {
        layer.dataset.routeError = 'true'
        console.warn('The hero route animation could not be initialized', error)
    }
}

document.addEventListener('DOMContentLoaded', setupHeroRoute)
