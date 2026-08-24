import site from '../_data/site.js'
import i18n from '../_data/i18n.js'

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

/**
 * Render the localized build metadata shown in custom-rendered heroes.
 *
 * @param {string} locale The current page locale.
 * @returns {string} Rendered hero build metadata markup.
 */
export const renderHeroBuildInfo = (locale = 'en') => {
    const labels = i18n.ui[locale] ?? i18n.ui.en

    return `
    <div class="hero-build-info" aria-label="${escapeHtml(labels.heroBuildInfo)}">
        ${site.version ? `
            <span class="hero-build-info-item">
                <wa-icon variant="regular" name="code-branch" aria-hidden="true"></wa-icon>
                <span>${escapeHtml(site.version)}</span>
            </span>
            <span class="hero-build-info-separator" aria-hidden="true">·</span>
        ` : ''}
        <span class="hero-build-info-item">
            <wa-icon variant="regular" name="calendar-days" aria-hidden="true"></wa-icon>
            <wa-format-date date="${escapeHtml(site.buildDate)}" lang="${escapeHtml(locale)}" year="numeric" month="short" day="numeric"></wa-format-date>
        </span>
    </div>
`
}
