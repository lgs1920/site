export const FORM_MAIL_PLACEHOLDERS = Object.freeze({
    contact:             Object.freeze(['form', 'locale', 'firstName', 'lastName', 'email', 'subject', 'message']),
    'launch-registration': Object.freeze(['form', 'locale', 'firstName', 'lastName', 'email', 'revoke-url']),
})

const MAX_RENDERED_MESSAGE_LENGTH = 20_000
const ANY_PLACEHOLDER_PATTERN = /{{[\s\S]*?}}/g
const UNRESOLVED_PLACEHOLDER_PATTERN = /{{|}}/
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/

/**
 * Decode the UTF-8 Markdown catalog entry embedded in a form.
 *
 * @param {string} encodedTemplate Base64-encoded UTF-8 template.
 * @param {object} [windowObject=window] Browser globals used for decoding.
 * @returns {string} Markdown template.
 */
export const decodeFormMailTemplate = (encodedTemplate, windowObject = globalThis) => {
    if (typeof encodedTemplate !== 'string' || !encodedTemplate) {
        throw new Error('Form mail template is missing')
    }

    const binary = windowObject.atob(encodedTemplate)
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0))
    return new TextDecoder().decode(bytes)
}

const escapeMarkdownValue = (value) => String(value)
    .replace(/\\/g, '\\\\')
    .replace(/([`*_{}[\]()#+!<>|])/g, '\\$1')
    .replace(/\r\n?/g, '\n')

const normalizeValue = (value, name) => {
    if (typeof value !== 'string') {
        throw new Error(`Form mail value is invalid: ${name}`)
    }

    const normalized = value.trim()
    if (CONTROL_CHARACTER_PATTERN.test(normalized)) {
        throw new Error(`Form mail value contains invalid characters: ${name}`)
    }

    return normalized
}

const getPlaceholders = (template) => [...template.matchAll(ANY_PLACEHOLDER_PATTERN)]
    .map(match => match[0])

/**
 * Render a validated site Markdown template with submitted form values.
 *
 * @param {object} options Rendering options.
 * @param {string} options.template Markdown template from the site catalog.
 * @param {'contact'|'launch-registration'} options.form Form identifier.
 * @param {'en'|'fr'} options.locale Page locale.
 * @param {object} options.values Normalized form values.
 * @returns {string} Bounded Markdown message without unresolved placeholders.
 * @throws {Error} If the template or values do not satisfy the site contract.
 */
export const renderFormMail = ({template, form, locale, values = {}} = {}) => {
    const allowedPlaceholders = FORM_MAIL_PLACEHOLDERS[form]
    if (!allowedPlaceholders) {
        throw new Error('Unsupported form mail form')
    }
    if (!['en', 'fr'].includes(locale)) {
        throw new Error('Unsupported form mail locale')
    }
    if (typeof template !== 'string' || !template.trim()) {
        throw new Error('Form mail template is missing')
    }

    const placeholders = getPlaceholders(template)
    for (const placeholder of placeholders) {
        const name = placeholder.slice(2, -2)
        if (!allowedPlaceholders.includes(name)) {
            throw new Error(`Unknown form mail placeholder: ${placeholder}`)
        }
    }

    let renderedMessage = template
    for (const name of allowedPlaceholders) {
        if (name === 'revoke-url') {
            continue
        }

        const value = name === 'form' ? form : name === 'locale' ? locale : normalizeValue(values[name] ?? '', name)
        renderedMessage = renderedMessage.replaceAll(`{{${name}}}`, escapeMarkdownValue(value))
    }

    const unresolvedPlaceholders = renderedMessage.match(ANY_PLACEHOLDER_PATTERN) ?? []
    const onlyAllowedDeferredPlaceholders = form === 'launch-registration'
        && unresolvedPlaceholders.length > 0
        && unresolvedPlaceholders.every(placeholder => placeholder === '{{revoke-url}}')
    if (UNRESOLVED_PLACEHOLDER_PATTERN.test(renderedMessage) && !onlyAllowedDeferredPlaceholders) {
        throw new Error('Form mail template contains unresolved placeholders')
    }

    renderedMessage = renderedMessage.trim()
    if (!renderedMessage || renderedMessage.length > MAX_RENDERED_MESSAGE_LENGTH || CONTROL_CHARACTER_PATTERN.test(renderedMessage)) {
        throw new Error('Rendered form mail message is invalid')
    }

    return renderedMessage
}

export default renderFormMail
