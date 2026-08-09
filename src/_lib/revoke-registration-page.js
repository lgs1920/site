import site from '../_data/site.js'

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
export const renderRevokeRegistrationPage = (pageContent) => `
<section class="page-hero hero-no-video registration-revoke-hero">
    <div class="hero-media" aria-hidden="true"></div>
    <div class="hero-backdrop" aria-hidden="true"></div>

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

export default renderRevokeRegistrationPage
