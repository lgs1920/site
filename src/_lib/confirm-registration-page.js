import site from '../_data/site.js'
import {encodeFormMailTemplate, getFormMailTemplate} from './form-mail-catalog.js'
import {renderHeroBuildInfo} from './hero-build-info.js'
import {renderHeroRouteMarkup} from './hero-route-markup.js'

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

/**
 * Render the localized launch-registration confirmation page.
 *
 * @param {object} pageContent Localized confirmation page content.
 * @returns {string} Rendered HTML fragment.
 */
export const renderConfirmRegistrationPage = (pageContent) => {
    const template = encodeFormMailTemplate(getFormMailTemplate({
        form:  'launch-registration',
        locale: pageContent.locale,
        stage:  'confirmed',
    }))
    const supportTemplate = encodeFormMailTemplate(getFormMailTemplate({
        form:     'launch-registration',
        locale:   pageContent.locale,
        audience: 'support',
        stage:    'confirmed',
    }))

    return `
<section class="page-hero hero-has-video registration-confirm-hero">
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
        ariaLabel: pageContent.locale === 'fr'
            ? 'Trace animée avec trois points d’intérêt.'
            : 'Animated route with three points of interest.',
        poiLabels: pageContent.locale === 'fr'
            ? ['Point d’intérêt 01', 'Point d’intérêt 02', 'Point d’intérêt 03']
            : ['Point of interest 01', 'Point of interest 02', 'Point of interest 03'],
    })}

    <wa-button class="hero-scroll-button" variant="brand" appearance="plain" size="medium" type="button" data-hero-scroll aria-label="${pageContent.locale === 'fr' ? 'Faire défiler vers le contenu' : 'Scroll to content'}">
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
            id="registration-confirm"
            class="hero-panel registration-confirm-panel"
            data-registration-confirmation
            data-confirm-api-url="${escapeHtml(site.registrationApiUrl)}"
            data-confirm-locale="${escapeHtml(pageContent.locale)}"
            data-confirm-template="${escapeHtml(template)}"
            data-confirm-support-template="${escapeHtml(supportTemplate)}"
            data-confirm-loading="${escapeHtml(pageContent.loading)}"
            data-confirm-email-label="${escapeHtml(pageContent.emailLabel)}"
            data-confirm-success-title="${escapeHtml(pageContent.successTitle)}"
            data-confirm-success-message="${escapeHtml(pageContent.successMessage)}"
            data-confirm-invalid-title="${escapeHtml(pageContent.invalidTitle)}"
            data-confirm-invalid-message="${escapeHtml(pageContent.invalidMessage)}"
            aria-live="polite"
        >
            <div class="hero-panel-header">
                <div class="hero-panel-heading">
                    <p class="panel-eyebrow">${escapeHtml(pageContent.panel.eyebrow)}</p>
                    <h2 class="hero-panel-title">${escapeHtml(pageContent.panel.title)}</h2>
                </div>
            </div>

            <div class="registration-confirm-state" data-confirm-state="loading">
                <div class="registration-confirm-loading">
                    <wa-spinner class="registration-confirm-spinner" label="${escapeHtml(pageContent.loading)}"></wa-spinner>
                    <p>${escapeHtml(pageContent.loading)}</p>
                </div>
            </div>

            <div class="registration-confirm-state" data-confirm-state="success" hidden>
                <wa-callout variant="success">
                    <wa-icon slot="icon" variant="regular" name="circle-check"></wa-icon>
                    <strong data-confirm-title></strong>
                    <p data-confirm-message></p>
                    <p class="registration-confirm-warning" data-confirm-warning hidden></p>
                    <p class="registration-confirm-email" data-confirm-email hidden></p>
                </wa-callout>
            </div>

            <div class="registration-confirm-state" data-confirm-state="invalid" hidden>
                <wa-callout variant="warning">
                    <wa-icon slot="icon" variant="regular" name="triangle-exclamation"></wa-icon>
                    <strong data-confirm-title></strong>
                    <p data-confirm-message></p>
                </wa-callout>
            </div>
        </aside>
    </div>
</section>
`
}

export default renderConfirmRegistrationPage
