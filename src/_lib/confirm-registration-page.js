import site from '../_data/site.js'
import {encodeFormMailTemplate, getFormMailTemplate} from './form-mail-catalog.js'

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
<section class="content-section registration-action-section registration-confirm-section" aria-labelledby="registration-confirm-heading">
    <div class="section-heading">
        <h2 id="registration-confirm-heading">${escapeHtml(pageContent.panel.title)}</h2>
    </div>

    <aside
            id="registration-confirm"
            class="hero-panel registration-confirm-panel registration-action-panel"
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
</section>
`
}

export default renderConfirmRegistrationPage
