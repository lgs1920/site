import site from '../_data/site.js'
import studioPresentation from '../_data/pages/studio-presentation.js'
import i18n from '../_data/i18n.js'
import {encodeFormMailTemplate, getFormMailTemplate} from './form-mail-catalog.js'
import {renderStudioPresentationPage} from './studio-presentation-page.js'

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

const renderRegistrationHeroDetails = (pageContent) => {
    const panel = pageContent.hero.panel

    if (!panel) {
        return ''
    }

    const renderItems = (items = []) => items.map((item) => `
        <article>
            <wa-icon${item.family ? ` family="${escapeHtml(item.family)}"` : ''} variant="${escapeHtml(item.iconVariant || 'regular')}" name="${escapeHtml(item.icon)}"></wa-icon>
            <div>
                <strong>${escapeHtml(item.title)}</strong>
                <span>${escapeHtml(item.text)}</span>
            </div>
        </article>`).join('')

    const renderPromiseItems = (items = []) => items.map((item, index) => `
        <article>
            <wa-icon${item.family ? ` family="${escapeHtml(item.family)}"` : ''} variant="${escapeHtml(item.iconVariant || 'regular')}" name="${escapeHtml(item.icon)}"></wa-icon>
            <div>
                <strong>${escapeHtml(item.title)}</strong>
                <span>
                    ${item.textLines?.map((line, lineIndex) => `${lineIndex ? '<br>' : ''}${escapeHtml(line)}`).join('') || escapeHtml(item.text)}
                    ${item.note ? `<wa-button id="registration-details-note-${pageContent.locale}-${index}" class="hero-panel-note-trigger" variant="brand" appearance="plain" size="small" aria-label="${escapeHtml(item.noteLabel)}"><wa-icon variant="regular" name="circle-info"></wa-icon></wa-button><wa-tooltip for="registration-details-note-${pageContent.locale}-${index}" placement="top">${escapeHtml(item.note)}</wa-tooltip>` : ''}
                </span>
            </div>
        </article>`).join('')

    return `
<section id="registration-details" class="content-section registration-details-section"${panel.promise ? ` aria-labelledby="registration-privacy-promise-title-${pageContent.locale}"` : ''}>
    <div class="registration-hero-details">
        <wa-card class="registration-hero-details-card">
            <div class="registration-hero-details-main">
                ${panel.description ? `<p class="hero-panel-description">${escapeHtml(panel.description)}${panel.descriptionBreak ? `<br>${escapeHtml(panel.descriptionBreak)}` : ''}</p>` : ''}
                ${panel.items?.length ? `<div class="hero-metric-list">${renderItems(panel.items)}</div>` : ''}
            </div>
        </wa-card>

        ${panel.promise ? `<aside class="registration-hero-details-promise" aria-labelledby="registration-privacy-promise-title-${pageContent.locale}">
            <div class="hero-panel-promise-heading">
                <wa-icon${panel.promise.family ? ` family="${panel.promise.family}"` : ''} variant="${escapeHtml(panel.promise.iconVariant || 'regular')}" name="${escapeHtml(panel.promise.icon)}"></wa-icon>
                <h3 id="registration-privacy-promise-title-${pageContent.locale}">${escapeHtml(panel.promise.text)}</h3>
            </div>
            ${panel.promise.items?.length ? `<div class="hero-panel-promise-items">${renderPromiseItems(panel.promise.items)}</div>` : ''}
        </aside>` : ''}
    </div>
</section>`
}

/**
 * Render the bilingual launch registration page body.
 *
 * @param {object} pageContent Localized page content.
 * @returns {string} Rendered HTML fragment.
 */
export const renderLaunchRegistrationPage = (pageContent) => {
    const form = pageContent.form
    const logoMarkup = pageContent.logoMarkup || `<img class="registration-logo" src="/assets/logo/logo-horizontal.png" alt="${escapeHtml(pageContent.logoAlt)}">`
    const formTemplate = encodeFormMailTemplate(getFormMailTemplate({form: 'launch-registration', locale: pageContent.locale}))
    const supportFormTemplate = encodeFormMailTemplate(getFormMailTemplate({
        form:     'launch-registration',
        locale:   pageContent.locale,
        audience: 'support',
    }))
    const presentationContent = studioPresentation[pageContent.locale] ?? studioPresentation.en
    const standalonePresentationUrl = i18n.localizedPermalinkPath(pageContent.locale, '/registration/studio/')
    const standalonePresentationLabel = pageContent.standalonePresentationLabel

    return `
    ${renderStudioPresentationPage(presentationContent, {
        variant: 'basic',
        showAction:true,
        action: {
            href:       standalonePresentationUrl,
            label:      standalonePresentationLabel,
            appearance: 'filled',
            variant:    'brand',
        },
    })}
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
            <p class="registration-slogan">${escapeHtml(pageContent.registrationSlogan)}</p>
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
</section>

<section id="registration-privacy" class="content-section registration-privacy-section">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(pageContent.privacyKicker)}</p>
        <h2>${escapeHtml(pageContent.privacyTitle)}</h2>
    </div>
    <p class="section-intro">${linkifyContactEmail(pageContent.privacy)}</p>
    ${pageContent.privacyQuote ? `<div class="overview-privacy registration-privacy-quote-wrap">
        <p class="section-intro overview-privacy-lead">
            <strong>${escapeHtml(pageContent.privacyQuote.title)}</strong>
        </p>
        <blockquote class="overview-privacy-quote registration-privacy-quote">
            <wa-icon class="overview-privacy-quote-mark overview-privacy-quote-mark-open" variant="solid" name="quote-left" aria-hidden="true"></wa-icon>
            <p>${escapeHtml(pageContent.privacyQuote.text)}<br><br><strong>${escapeHtml(pageContent.privacyQuote.rule)}</strong></p>
            <wa-icon class="overview-privacy-quote-mark overview-privacy-quote-mark-close" variant="solid" name="quote-right" aria-hidden="true"></wa-icon>
        </blockquote>
    </div>` : ''}
</section>
`
}

export default renderLaunchRegistrationPage
