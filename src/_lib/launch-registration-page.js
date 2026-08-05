import site from '../_data/site.js'

const OFFICIAL_AGPL_URL = 'https://www.gnu.org/licenses/agpl-3.0.html'

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
    const logoMarkup = pageContent.logoMarkup || '<img class="registration-logo" src="/assets/logo/logo-horizontal.svg" alt="LGS1920 Studio logo">'

    return `
<section id="registration-form" class="content-section launch-registration-section">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(pageContent.hero.kicker)}</p>
        <h2>${escapeHtml(pageContent.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(pageContent.hero.lead)}</p>

    <div class="registration-layout">
        <div class="registration-brand-column">
            <div class="registration-brand-lockup">
                ${logoMarkup}
                <p class="registration-slogan">Replay the World Outdoors!</p>
            </div>
        </div>

        <wa-card class="registration-card">
            <form
                class="registration-form"
                data-registration-form
                data-registration-api-url="${escapeHtml(site.registrationApiUrl)}"
                data-registration-success="${escapeHtml(form.successMessage)}"
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

                <input class="registration-honeypot" name="website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">

                <div class="page-cta-actions">
                    <wa-button type="submit" appearance="filled" variant="brand" data-registration-submit>
                        <wa-icon slot="start" variant="regular" name="paper-plane"></wa-icon>
                        ${escapeHtml(form.submitLabel)}
                    </wa-button>
                </div>

                <wa-callout class="registration-status" data-registration-status variant="success" hidden aria-live="polite">
                    <wa-icon slot="icon" variant="regular" name="circle-check"></wa-icon>
                    <span data-registration-status-text></span>
                </wa-callout>
            </form>
        </wa-card>
    </div>
</section>

<section id="registration-privacy" class="content-section registration-privacy-section">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(pageContent.locale === 'fr' ? 'Confidentialité' : 'Privacy')}</p>
        <h2>${escapeHtml(pageContent.locale === 'fr' ? 'Un consentement clair et limité.' : 'Clear and limited consent.')}</h2>
    </div>
    <p class="section-intro">${linkifyContactEmail(pageContent.privacy)}</p>
    <p class="registration-license">${escapeHtml(pageContent.licenseReminder)} <a href="${OFFICIAL_AGPL_URL}" target="_blank" rel="noreferrer">${escapeHtml(pageContent.licenseLink)}</a>.</p>
</section>
`
}

export default renderLaunchRegistrationPage
