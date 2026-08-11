import site from '../_data/site.js'
import {encodeFormMailTemplate, getFormMailTemplate} from './form-mail-catalog.js'

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const linkifyContactEmail = (value = '') => escapeHtml(value)
    .replace(
        escapeHtml(site.contactEmail),
        `<a href="mailto:${site.contactEmail}">${escapeHtml(site.contactEmail)}</a>`,
    )

/**
 * Render the bilingual launch registration page body.
 *
 * @param {object} pageContent Localized page content.
 * @returns {string} Rendered HTML fragment.
 */
export const renderLaunchRegistrationPage = (pageContent) => {
    const form = pageContent.form
    const logoMarkup = pageContent.logoMarkup || '<img class="registration-logo" src="/assets/logo/logo-horizontal.png" alt="LGS1920 Studio logo">'
    const formTemplate = encodeFormMailTemplate(getFormMailTemplate({form: 'launch-registration', locale: pageContent.locale}))
    const supportFormTemplate = encodeFormMailTemplate(getFormMailTemplate({
        form:     'launch-registration',
        locale:   pageContent.locale,
        audience: 'support',
    }))

    return `
<section id="registration-form" class="content-section launch-registration-section">
    <div class="section-heading">
        ${pageContent.hero.kicker ? `<p class="section-kicker">${escapeHtml(pageContent.hero.kicker)}</p>` : ''}
        <h2>${escapeHtml(pageContent.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(pageContent.registrationIntro)}</p>

    <div class="registration-layout">
        <div class="registration-brand-column">
            <div class="registration-brand-lockup">
                ${logoMarkup}
            </div>
        </div>

        <wa-card class="registration-card">
            <form
                class="registration-form"
                data-registration-form
                data-registration-api-url="${escapeHtml(site.registrationApiUrl)}"
                data-registration-target="${escapeHtml(site.contactTarget)}"
                data-registration-form="launch-registration"
                data-registration-locale="${escapeHtml(pageContent.locale)}"
                data-registration-template="${formTemplate}"
                data-registration-support-template="${supportFormTemplate}"
                data-registration-success="${escapeHtml(form.successMessage)}"
                data-registration-duplicate="${escapeHtml(form.duplicateMessage)}"
                data-registration-pending="${escapeHtml(form.pendingMessage)}"
                data-registration-resend-label="${escapeHtml(form.resendButtonLabel)}"
                data-registration-resend-success="${escapeHtml(form.resendSuccessMessage)}"
                data-registration-resend-error="${escapeHtml(form.resendErrorMessage)}"
                data-registration-resend-rate-limit="${escapeHtml(form.resendRateLimitMessage)}"
                data-registration-delivery-error="${escapeHtml(form.deliveryErrorMessage)}"
                data-registration-rate-limit="${escapeHtml(form.rateLimitMessage)}"
                data-registration-error="${escapeHtml(form.errorMessage)}"
            >
                <div class="registration-form-grid">
                    <wa-input
                        name="firstName"
                        label="${escapeHtml(form.firstNameLabel)}"
                        placeholder="${escapeHtml(form.firstNamePlaceholder)}"
                        autocomplete="given-name"
                        maxlength="80"
                        required
                    ></wa-input>
                    <wa-input
                        name="lastName"
                        label="${escapeHtml(form.lastNameLabel)}"
                        placeholder="${escapeHtml(form.lastNamePlaceholder)}"
                        autocomplete="family-name"
                        maxlength="80"
                        required
                    ></wa-input>
                </div>

                <wa-input
                    name="email"
                    type="email"
                    label="${escapeHtml(form.emailLabel)}"
                    placeholder="${escapeHtml(form.emailPlaceholder)}"
                    autocomplete="email"
                    maxlength="254"
                    required
                ></wa-input>

                <wa-checkbox name="consent" required>
                    ${escapeHtml(form.consentLabel)}
                </wa-checkbox>

                <input class="registration-honeypot" name="website" type="text" maxlength="200" tabindex="-1" autocomplete="off" aria-hidden="true">

                <div class="page-cta-actions">
                    <wa-button type="submit" appearance="filled" variant="brand" data-registration-submit>
                        <wa-icon slot="start" variant="regular" name="paper-plane"></wa-icon>
                        ${escapeHtml(form.submitLabel)}
                    </wa-button>
                </div>

                <wa-callout class="registration-status" data-registration-status variant="success" hidden aria-live="polite">
                    <wa-icon slot="icon" variant="regular" name="circle-check" data-registration-status-icon></wa-icon>
                    <div class="wa-split">
                        <span data-registration-status-text></span>
                        <div class="registration-resend wa-cluster wa-justify-content-end" data-registration-resend hidden>
                            <wa-button type="button" appearance="outlined" variant="brand" data-registration-resend-button>
                                <wa-icon slot="start" variant="regular" name="envelope"></wa-icon>
                                ${escapeHtml(form.resendButtonLabel)}
                            </wa-button>
                        </div>
                    </div>
                </wa-callout>
            </form>
        </wa-card>
    </div>

    <p class="registration-slogan">Replay the World Outdoors!</p>
</section>

<section id="registration-privacy" class="content-section registration-privacy-section">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(pageContent.locale === 'fr' ? 'Confidentialité' : 'Privacy')}</p>
        <h2>${escapeHtml(pageContent.locale === 'fr' ? 'Un consentement clair et limité.' : 'Clear and limited consent.')}</h2>
    </div>
    <p class="section-intro">${linkifyContactEmail(pageContent.privacy)}</p>
</section>
`
}

export default renderLaunchRegistrationPage
