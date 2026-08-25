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
export const renderRevokeRegistrationPage = (pageContent) => {
    return `
<section class="content-section registration-action-section registration-revoke-section" aria-labelledby="registration-revoke-heading">
    <div class="section-heading">
        <h2 id="registration-revoke-heading">${escapeHtml(pageContent.panel.title)}</h2>
    </div>

    <aside
            id="registration-revoke"
            class="hero-panel registration-revoke-panel registration-action-panel"
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
</section>
`
}

export default renderRevokeRegistrationPage
