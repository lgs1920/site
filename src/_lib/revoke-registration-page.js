import site from '../_data/site.js'
import i18n from '../_data/i18n.js'
import {renderHeroBuildInfo} from './hero-build-info.js'
import {renderHeroRouteMarkup} from './hero-route-markup.js'

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

/**
 * Render the localized launch-registration cancellation page.
 *
 * @param {object} pageContent Localized cancellation page content.
 * @returns {string} Rendered HTML fragment.
 */
export const renderRevokeRegistrationPage = (pageContent) => {
    const labels = i18n.ui[pageContent.locale] ?? i18n.ui.en

    return `
<section class="page-hero hero-has-video registration-revoke-hero">
    <div class="hero-media"
         aria-hidden="true"
         data-hero-media
         data-hero-media-key="outdoor"
         data-hero-video-enabled="true">
        <img class="hero-media-fallback"
             data-hero-media-fallback
             alt=""
             aria-hidden="true"
             decoding="async">
        <video class="hero-video"
               data-hero-video
               muted
               loop
               playsinline
               autoplay
               preload="metadata"
               disablepictureinpicture></video>
    </div>
    <div class="hero-media-credit" data-hero-media-credit hidden>
        <a data-hero-media-credit-link target="_blank" rel="noreferrer noopener"></a>
    </div>
    ${renderHeroBuildInfo(pageContent.locale)}
    <div class="hero-backdrop" aria-hidden="true"></div>
    ${renderHeroRouteMarkup({
        ariaLabel: labels.heroRouteDescription,
        poiLabels: [labels.heroRoutePoiOne, labels.heroRoutePoiTwo, labels.heroRoutePoiThree],
    })}

    <wa-button class="hero-scroll-button" variant="brand" appearance="plain" size="medium" type="button" data-hero-scroll aria-label="${escapeHtml(labels.scrollToContent)}">
        <wa-icon variant="solid" name="angles-down" aria-hidden="true"></wa-icon>
    </wa-button>

    <div class="hero-shell">
        <div class="hero-copy">
            <wa-badge variant="brand" appearance="filled">${escapeHtml(pageContent.hero.badge)}</wa-badge>
            <p class="hero-kicker">${escapeHtml(pageContent.hero.kicker)}</p>
            <h1>${escapeHtml(pageContent.hero.title)}</h1>
            <p class="hero-lead">${escapeHtml(pageContent.hero.lead)}</p>
        </div>

        <aside
            id="registration-revoke"
            class="hero-panel registration-revoke-panel"
            data-registration-revoke
            data-revoke-api-url="${escapeHtml(site.registrationApiUrl)}"
            data-revoke-locale="${escapeHtml(pageContent.locale)}"
            data-revoke-loading="${escapeHtml(pageContent.loading)}"
            data-revoke-email-label="${escapeHtml(pageContent.emailLabel)}"
            data-revoke-success-title="${escapeHtml(pageContent.successTitle)}"
            data-revoke-success-message="${escapeHtml(pageContent.successMessage)}"
            data-revoke-invalid-title="${escapeHtml(pageContent.invalidTitle)}"
            data-revoke-invalid-message="${escapeHtml(pageContent.invalidMessage)}"
            aria-live="polite"
        >
            <div class="hero-panel-header">
                <div class="hero-panel-heading">
                    <p class="panel-eyebrow">${escapeHtml(pageContent.panel.eyebrow)}</p>
                    <h2 class="hero-panel-title">${escapeHtml(pageContent.panel.title)}</h2>
                </div>
            </div>

            <div class="registration-revoke-state" data-revoke-state="loading">
                <div class="registration-revoke-loading">
                    <wa-spinner class="registration-revoke-spinner" label="${escapeHtml(pageContent.loading)}"></wa-spinner>
                    <p>${escapeHtml(pageContent.loading)}</p>
                </div>
            </div>

            <div class="registration-revoke-state" data-revoke-state="success" hidden>
                <wa-callout variant="success">
                    <wa-icon slot="icon" variant="regular" name="circle-check"></wa-icon>
                    <strong data-revoke-title></strong>
                    <p data-revoke-message></p>
                    <p class="registration-revoke-email" data-revoke-email hidden></p>
                </wa-callout>
            </div>

            <div class="registration-revoke-state" data-revoke-state="invalid" hidden>
                <wa-callout variant="warning">
                    <wa-icon slot="icon" variant="regular" name="triangle-exclamation"></wa-icon>
                    <strong data-revoke-title></strong>
                    <p data-revoke-message></p>
                </wa-callout>
            </div>
        </aside>
    </div>
</section>
`
}

export default renderRevokeRegistrationPage
