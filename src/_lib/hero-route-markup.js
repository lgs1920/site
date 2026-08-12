const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export const renderHeroRouteMarkup = ({
    ariaLabel = 'Animated route with three points of interest.',
    poiLabels = ['Point of interest 01', 'Point of interest 02', 'Point of interest 03'],
} = {}) => `
    <div class="hero-route-layer" data-hero-route>
        <canvas class="hero-route-canvas" data-hero-route-canvas aria-hidden="true"></canvas>

        <svg class="hero-route-fallback" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 5 74 C 18 14, 30 88, 45 52 S 72 7, 95 28"></path>
        </svg>

        <p class="hero-route-description hero-route-sr-only">${escapeHtml(ariaLabel)}</p>

        <div class="hero-route-annotations">
            ${poiLabels.map((label, index) => `
                <div class="hero-route-poi" data-hero-route-poi data-route-point="${0.25 + index * 0.25}" data-route-poi-index="${index}" role="img" aria-label="${escapeHtml(label)}">
                    <wa-icon variant="solid" name="location-dot" aria-hidden="true"></wa-icon>
                </div>
            `).join('')}
        </div>
    </div>
`

export default renderHeroRouteMarkup
