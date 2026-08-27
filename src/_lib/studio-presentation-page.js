const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const renderCardBody = (value = '') => escapeHtml(value).replace(/&lt;br&gt;/g, '<br>')

const renderIntro = (paragraphs = []) => paragraphs
    .map((paragraph) => `<p class="section-intro">${escapeHtml(paragraph)}</p>`)
    .join('\n')

const renderCards = (items = []) => `
    <div class="feature-grid">
        ${items.map((item) => `
            <wa-card class="feature-card${item.items?.length ? ' studio-presentation-privacy-card' : ''}">
                <div class="card-heading">
                    <wa-icon variant="regular" name="${escapeHtml(item.icon)}" aria-hidden="true"></wa-icon>
                    <h3>${escapeHtml(item.title)}</h3>
                </div>
                ${item.items?.length ? `<div class="hero-panel-promise-items studio-presentation-privacy-items">
                    ${item.items.map((promiseItem) => `
                    <article>
                        <wa-icon variant="regular" name="${escapeHtml(promiseItem.icon)}" aria-hidden="true"></wa-icon>
                        <div>
                            <strong>${escapeHtml(promiseItem.title)}</strong>
                            <span>
                                ${escapeHtml(promiseItem.body)}
                                ${promiseItem.note ? `<wa-button id="${escapeHtml(promiseItem.noteId)}" class="hero-panel-note-trigger" variant="brand" appearance="plain" size="small" aria-label="${escapeHtml(promiseItem.noteLabel)}">
                                    <wa-icon variant="regular" name="circle-info" aria-hidden="true"></wa-icon>
                                </wa-button>
                                <wa-tooltip for="${escapeHtml(promiseItem.noteId)}" placement="top">${escapeHtml(promiseItem.note)}</wa-tooltip>` : ''}
                            </span>
                        </div>
                    </article>`).join('')}
                    </div>` : `<p>${renderCardBody(item.body)}</p>`}
            </wa-card>`).join('')}
    </div>`

const renderPracticalCards = (items = []) => `
    <div class="intro-indication-grid">
        ${items.map((item) => `
            <wa-card class="intro-indication">
                <wa-icon variant="regular" name="${escapeHtml(item.icon)}" aria-hidden="true"></wa-icon>
                <div>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${renderCardBody(item.body)}</p>
                </div>
            </wa-card>`).join('')}
    </div>`

const renderPrivacyQuote = (privacyQuote) => privacyQuote ? `
<div class="overview-privacy studio-presentation-privacy-quote-wrap">
    <p class="section-intro overview-privacy-lead">
        <strong>${escapeHtml(privacyQuote.title)}</strong>
    </p>
    <blockquote class="overview-privacy-quote studio-presentation-privacy-quote">
        <wa-icon class="overview-privacy-quote-mark overview-privacy-quote-mark-open" variant="solid" name="quote-left" aria-hidden="true"></wa-icon>
        <p>${escapeHtml(privacyQuote.text)}<br><br><strong>${escapeHtml(privacyQuote.rulesTitle)}<br><span class="overview-privacy-quote-rules">${privacyQuote.rules.map((rule) => escapeHtml(rule)).join('<br>')}</span></strong><span class="overview-privacy-quote-closing">${escapeHtml(privacyQuote.closing)}</span></p>
        <wa-icon class="overview-privacy-quote-mark overview-privacy-quote-mark-close" variant="solid" name="quote-right" aria-hidden="true"></wa-icon>
    </blockquote>
</div>` : ''

const renderBasicPresentation = (presentation, {showAction = true, action = null} = {}) => {
    const basicAction = action ?? presentation.basic.action

    return `
<section id="studio-presentation" class="content-section studio-presentation-section studio-presentation-basic" aria-labelledby="studio-presentation-title">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(presentation.basic.kicker)}</p>
        <h2 id="studio-presentation-title">${escapeHtml(presentation.basic.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(presentation.basic.intro)}</p>

    ${renderCards(presentation.basics)}

    ${showAction && basicAction ? `<div class="page-cta-actions">
        <wa-button href="${escapeHtml(basicAction.href)}" appearance="${escapeHtml(basicAction.appearance || 'outlined')}" variant="${escapeHtml(basicAction.variant || 'brand')}">
            <wa-icon slot="start" variant="regular" name="circle-info" aria-hidden="true"></wa-icon>
            ${escapeHtml(basicAction.label)}
        </wa-button>
    </div>` : ''}
</section>`
}

const renderFullPresentation = (presentation) => `
<section id="studio-overview" class="content-section intro-details-section" aria-labelledby="studio-overview-title">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(presentation.overview.kicker)}</p>
        <h2 id="studio-overview-title">${escapeHtml(presentation.overview.title)}</h2>
    </div>

    ${renderIntro(presentation.overview.intro)}

    <div class="section-heading">
        <h3>${escapeHtml(presentation.overview.simpleTitle)}</h3>
    </div>
    <p class="section-intro">${escapeHtml(presentation.overview.simpleIntro)}</p>

    ${renderCards(presentation.basics)}

    ${renderPrivacyQuote(presentation.privacyQuote)}
</section>

<section id="studio-workflow" class="content-section workflow-section" aria-labelledby="studio-workflow-title">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(presentation.workflow.kicker)}</p>
        <h2 id="studio-workflow-title">${escapeHtml(presentation.workflow.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(presentation.workflow.intro)}</p>

    <div class="workflow-list-wrap">
        <svg class="workflow-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 50 -2 C 34 1, 66 4, 50 7 C 34 9.5, 66 11, 50 12.5 C 34 16, 66 21, 50 25 C 34 29, 66 33, 50 37.5 C 34 41, 66 46, 50 50 C 34 54, 66 59, 50 62.5 C 34 66, 66 71, 50 75 C 34 79, 66 84, 50 87.5 C 34 92, 66 98, 50 102"></path>
        </svg>
        <ol class="workflow-list">
            ${presentation.workflow.steps.map((step) => `
            <li>
                <span class="workflow-poi" aria-hidden="true">
                    <span class="workflow-poi-icon">
                        <wa-icon variant="solid" name="location-dot"></wa-icon>
                    </span>
                    <b>${escapeHtml(step.index)}</b>
                </span>
                <div>
                    <h3>${escapeHtml(step.title)}</h3>
                    <p>${escapeHtml(step.body)}</p>
                </div>
            </li>`).join('')}
        </ol>
    </div>
</section>

<section id="studio-outputs" class="content-section" aria-labelledby="studio-outputs-title">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(presentation.outputs.kicker)}</p>
        <h2 id="studio-outputs-title">${escapeHtml(presentation.outputs.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(presentation.outputs.intro)}</p>

    ${renderCards(presentation.outputs.items)}
</section>

<section id="studio-before-starting" class="content-section" aria-labelledby="studio-before-starting-title">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(presentation.practical.kicker)}</p>
        <h2 id="studio-before-starting-title">${escapeHtml(presentation.practical.title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(presentation.practical.intro)}</p>

    ${renderPracticalCards(presentation.practical.items)}
</section>`

/**
 * Render the Studio introduction in its full-page or embedded form.
 *
 * @param {object} pageContent Localized Studio presentation page content.
 * @param {{variant?: 'full'|'basic', showAction?: boolean, action?: {href?: string, label?: string}}} options Rendering options.
 * @returns {string} Rendered HTML fragment.
 */
export const renderStudioPresentationPage = (pageContent, {variant = 'full', showAction = true, action = null} = {}) => variant === 'basic'
    ? renderBasicPresentation(pageContent.presentation, {showAction, action})
    : renderFullPresentation(pageContent.presentation)

export default renderStudioPresentationPage
