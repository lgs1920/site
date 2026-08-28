const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const renderFaqBody = (value = '') => escapeHtml(value)
    .replace(/&lt;br&gt;/g, '<br>')

const renderFaqLinks = (links = []) => {
    if (!links || links.length === 0) {
        return ''
    }

    return links.map((link, index) => {
        const separator = index < links.length - 1 ? ', ' : '.'

        return `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>${separator}`
    }).join('')
}

const renderFaqImage = (image, creditLabel = '') => {
    if (!image?.src) {
        return ''
    }

    return `
        <figure class="faq-answer-media">
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || '')}" width="1280" height="453" loading="lazy" decoding="async">
            <figcaption>
                ${escapeHtml(creditLabel)} <a href="${escapeHtml(image.pageUrl)}" target="_blank" rel="noreferrer">${escapeHtml(image.author)}</a>, <a href="${escapeHtml(image.licenseUrl)}" target="_blank" rel="noreferrer">${escapeHtml(image.license)}</a>
            </figcaption>
        </figure>`
}

export const renderFaqPage = ({ kicker, title, intro, items = [], creditLabel = '' }) => `
<section class="content-section faq-page">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(kicker)}</p>
        <h2>${escapeHtml(title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(intro)}</p>

    <div class="faq-list">
        ${items.map((item, index) => `
            <wa-details id="${escapeHtml(item.id || `faq-item-${index + 1}`)}" summary="${escapeHtml(item.summary)}">
                <div class="faq-answer${item.image ? ' faq-answer-with-media' : ''}">
                    <div class="faq-answer-copy">
                        <p>${renderFaqBody(item.body)}</p>
                        ${item.bodyAfter ? `<p>${renderFaqBody(item.bodyAfter)}</p>` : ''}
                        ${item.bodyFinal ? `<p>${renderFaqBody(item.bodyFinal)}</p>` : ''}
                        ${item.links ? `<p>${renderFaqLinks(item.links)}</p>` : ''}
                    </div>
                    ${renderFaqImage(item.image, creditLabel)}
                </div>
            </wa-details>
        `).join('')}
    </div>
</section>
`

export default renderFaqPage
