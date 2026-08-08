import assert from 'node:assert/strict'
import test from 'node:test'

import {decodeFormMailTemplate, renderFormMail} from '../src/assets/form-mail.js'
import {encodeFormMailTemplate, FormMailCatalogError, getFormMailTemplate} from '../src/_lib/form-mail-catalog.js'

const contactValues = {
    firstName: 'Ada',
    lastName:  'Lovelace',
    email:     'ada@example.com',
    subject:   'Studio question',
    message:   'I would like to know more about Studio.',
}

test('loads every localized form-mail catalog entry', () => {
    for (const form of ['contact', 'launch-registration']) {
        for (const locale of ['en', 'fr']) {
            const template = getFormMailTemplate({form, locale})
            assert.match(template, /{{(?:firstName|lastName|email)}}/)
            assert.doesNotMatch(template, /logo-horizontal\.png/)
        }
    }
})

test('renders the contact catalog with the selected locale and submitted values', () => {
    const template = getFormMailTemplate({form: 'contact', locale: 'fr'})
    const rendered = renderFormMail({template, form: 'contact', locale: 'fr', values: contactValues})

    assert.match(rendered, /Nom : Ada Lovelace/)
    assert.match(rendered, /Objet : Studio question/)
    assert.match(rendered, /## Votre demande/) // Ensure the French template is selected.
    assert.match(rendered, /Si vous ne nous avez pas contacté, veuillez ne pas tenir compte de ce message/)
    assert.doesNotMatch(rendered, /{{[\s\S]*?}}/)
    assert.doesNotMatch(rendered, /logo-horizontal\.png/)
})

test('renders the launch-registration catalog with only its supported fields', () => {
    const template = getFormMailTemplate({form: 'launch-registration', locale: 'fr'})
    const rendered = renderFormMail({
        template,
        form:    'launch-registration',
        locale:  'fr',
        values:  contactValues,
    })

    assert.match(rendered, /Nom : Ada Lovelace/)
    assert.match(rendered, /Pour annuler votre inscription, veuillez cliquer sur le lien ci-dessous/)
    assert.match(rendered, /\[Annuler mon inscription\]\(\{\{revoke-url\}\}\)/)
    assert.doesNotMatch(rendered, /{{(?!revoke-url}})[\s\S]*?}}/)
    assert.doesNotMatch(rendered, /logo-horizontal\.png/)
})

test('escapes Markdown control syntax while preserving a bounded rendered message', () => {
    const template = getFormMailTemplate({form: 'contact', locale: 'en'})
    const rendered = renderFormMail({
        template,
        form:    'contact',
        locale:  'en',
        values:  {...contactValues, message: '[click](https://example.com)\n# not a heading'},
    })

    assert.match(rendered, /\\\[click\\\]/)
    assert.doesNotMatch(rendered, /^# not a heading$/m)
    assert.ok(rendered.length <= 20_000)
})

test('rejects unknown placeholders and unsupported catalog entries before submission', () => {
    assert.throws(
        () => renderFormMail({template: 'Hello {{recipient}}', form: 'contact', locale: 'en', values: contactValues}),
        /Unknown form mail placeholder/,
    )
    assert.throws(
        () => getFormMailTemplate({form: 'contact', locale: 'de'}),
        FormMailCatalogError,
    )
})

test('round-trips UTF-8 templates for browser form data', () => {
    const template = 'Bonjour {{firstName}} — {{locale}}'
    const encoded = encodeFormMailTemplate(template)
    const decoded = decodeFormMailTemplate(encoded)

    assert.equal(decoded, template)
})
