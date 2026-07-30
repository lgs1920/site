import assert from 'node:assert/strict'
import test from 'node:test'

import {
    CHANGELOG_PAGE_SIZE,
    changelog,
    createChangelogPagination,
    getChangelogPagePath,
    renderChangelogIndex,
} from '../src/_lib/changelog-docs.js'

test('builds localized changelog page paths', () => {
    assert.equal(CHANGELOG_PAGE_SIZE, 10)
    assert.equal(getChangelogPagePath('en', 1), '/changelog/')
    assert.equal(getChangelogPagePath('en', 2), '/changelog/page/2/')
    assert.equal(getChangelogPagePath('fr', 1), '/fr/changelog/')
    assert.equal(getChangelogPagePath('fr', 4), '/fr/changelog/page/4/')
})

test('creates accessible previous, current, and next page links', () => {
    const pagination = createChangelogPagination({locale:'fr', currentPage:2, totalPages:4})

    assert.equal(pagination.previous.url, '/fr/changelog/')
    assert.equal(pagination.next.url, '/fr/changelog/page/3/')
    assert.equal(pagination.pages[1].current, true)
    assert.equal(pagination.pages.length, 4)

    const html = renderChangelogIndex({
        locale: 'fr',
        directory: {sourceLabel:'source', sourceUrl:'https://example.test/source'},
        entries: changelog.entries.slice(0, CHANGELOG_PAGE_SIZE),
        intro: 'Release notes.',
        pagination,
    })

    assert.match(html, /aria-label="Pagination de l’historique"/)
    assert.match(html, /aria-current="page">2<\/span>/)
    assert.match(html, /href="\/fr\/changelog\/page\/3\/"/)
})

test('release navigation crosses changelog page boundaries', () => {
    assert.match(changelog.entries[CHANGELOG_PAGE_SIZE - 1].older.url, /^\/changelog\/page\/2\/#/)
    assert.match(changelog.entries[CHANGELOG_PAGE_SIZE].newer.url, /^\/changelog\/#/)
})
