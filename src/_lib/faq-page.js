const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const renderFaqLinks = (links = []) => {
    if (!links || links.length === 0) {
        return ''
    }

    return links.map((link, index) => {
        const separator = index < links.length - 1 ? ', ' : '.'

        return `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>${separator}`
    }).join('')
}

export const renderFaqPage = ({ kicker = 'FAQ', title = 'Common questions', intro, items = [] }) => `
<section class="content-section faq-page">
    <div class="section-heading">
        <p class="section-kicker">${escapeHtml(kicker)}</p>
        <h2>${escapeHtml(title)}</h2>
    </div>

    <p class="section-intro">${escapeHtml(intro)}</p>

    <div class="faq-list">
        ${items.map((item, index) => `
            <wa-details id="${escapeHtml(item.id || `faq-item-${index + 1}`)}" summary="${escapeHtml(item.summary)}">
                <p>
                    ${escapeHtml(item.body)}
                    ${renderFaqLinks(item.links)}
                </p>
            </wa-details>
        `).join('')}
    </div>
</section>
`

export default renderFaqPage
