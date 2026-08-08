import site from '../_data/site.js'
import {encodeFormMailTemplate, getFormMailTemplate} from './form-mail-catalog.js'

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

/**
 * Render the localized contact form and its privacy notice.
 *
 * @param {object} pageContent Localized contact page content.
 * @param {string} apiUrl Public backend base URL.
 * @returns {string} Rendered HTML fragment.
 */
export const renderContactPage = (pageContent, apiUrl = site.contactApiUrl) => {
    const form = pageContent.form
    const privacy = pageContent.privacy
    const formTemplate = encodeFormMailTemplate(getFormMailTemplate({form: 'contact', locale: pageContent.locale}))

    return `
<section id="contact-form" class="content-section contact-section">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(pageContent.hero.kicker)}</p>
        <h2>${escapeHtml(pageContent.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(pageContent.hero.lead)}</p>

    <wa-card class="contact-card">
        <form
            class="contact-form"
            data-contact-form
            data-contact-api-url="${escapeHtml(apiUrl)}"
            data-contact-target="${escapeHtml(site.contactTarget)}"
            data-contact-form="contact"
            data-contact-locale="${escapeHtml(pageContent.locale)}"
            data-contact-template="${formTemplate}"
            data-contact-success="${escapeHtml(form.successMessage)}"
            data-contact-error="${escapeHtml(form.errorMessage)}"
        >
            <div class="contact-form-grid">
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

            <wa-input
                name="subject"
                label="${escapeHtml(form.subjectLabel)}"
                placeholder="${escapeHtml(form.subjectPlaceholder)}"
                maxlength="160"
                required
            ></wa-input>

            <wa-textarea
                name="message"
                label="${escapeHtml(form.messageLabel)}"
                placeholder="${escapeHtml(form.messagePlaceholder)}"
                rows="8"
                maxlength="5000"
                required
            ></wa-textarea>

            <wa-checkbox name="consent" required>
                ${escapeHtml(form.consentLabel)}
            </wa-checkbox>

            <input class="contact-honeypot" name="website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">

            <div class="page-cta-actions">
                <wa-button type="submit" appearance="filled" variant="brand" data-contact-submit>
                    <wa-icon slot="start" variant="regular" name="paper-plane"></wa-icon>
                    ${escapeHtml(form.submitLabel)}
                </wa-button>
            </div>

            <wa-callout class="contact-status" data-contact-status variant="success" hidden aria-live="polite">
                <wa-icon slot="icon" variant="regular" name="circle-check"></wa-icon>
                <span data-contact-status-text></span>
            </wa-callout>
        </form>
    </wa-card>
</section>

<section id="contact-privacy" class="content-section contact-privacy-section">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(pageContent.locale === 'fr' ? 'Confidentialité' : 'Privacy')}</p>
        <h2>${escapeHtml(privacy.title)}</h2>
    </div>
    <p class="section-intro">${escapeHtml(privacy.body)}</p>
    <p class="contact-privacy-notice">${escapeHtml(privacy.notice)}</p>
</section>
`
}

export default renderContactPage
