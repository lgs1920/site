import {readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

export const FORM_MAIL_FORMS = Object.freeze(['contact', 'launch-registration'])
export const FORM_MAIL_LOCALES = Object.freeze(['en', 'fr'])

const defaultTemplateDirectory = fileURLToPath(new URL('../_includes/form-mail', import.meta.url))

/** Error raised when a site form-mail catalog entry is missing or invalid. */
export class FormMailCatalogError extends Error {
    constructor(message) {
        super(message)
        this.name = 'FormMailCatalogError'
    }
}

const normalizeForm = (form) => {
    const normalized = typeof form === 'string' ? form.trim().toLowerCase() : ''
    if (!FORM_MAIL_FORMS.includes(normalized)) {
        throw new FormMailCatalogError('Unsupported form mail catalog form')
    }

    return normalized
}

const normalizeLocale = (locale) => {
    const normalized = typeof locale === 'string' ? locale.trim().toLowerCase().split('-')[0] : ''
    if (!FORM_MAIL_LOCALES.includes(normalized)) {
        throw new FormMailCatalogError('Unsupported form mail catalog locale')
    }

    return normalized
}

/**
 * Read the Markdown template for one form and locale.
 *
 * @param {object} options Catalog lookup options.
 * @param {string} options.form Form identifier.
 * @param {string} options.locale Supported locale.
 * @param {string} [options.templateDirectory] Catalog root used by tests or builds.
 * @returns {string} Markdown template.
 * @throws {FormMailCatalogError} If the catalog entry is unavailable.
 */
export const getFormMailTemplate = ({form, locale, templateDirectory = defaultTemplateDirectory} = {}) => {
    const normalizedForm = normalizeForm(form)
    const normalizedLocale = normalizeLocale(locale)
    const templatePath = path.join(templateDirectory, normalizedForm, `${normalizedLocale}.md`)

    let template
    try {
        template = readFileSync(templatePath, 'utf8')
    }
    catch {
        throw new FormMailCatalogError(`Missing form mail template for ${normalizedForm}/${normalizedLocale}`)
    }

    if (!template.trim()) {
        throw new FormMailCatalogError(`Empty form mail template for ${normalizedForm}/${normalizedLocale}`)
    }

    return template
}

/**
 * Encode a Markdown template for a form data attribute.
 *
 * @param {string} template Markdown template.
 * @returns {string} Base64-encoded UTF-8 template.
 */
export const encodeFormMailTemplate = (template) => Buffer.from(template, 'utf8').toString('base64')

export default getFormMailTemplate
