# Playwright journey coverage

The main Playwright suite covers repeatable browser workflows against an explicitly configured disposable Nextcloud instance. The test inventory is in [`tests/gui/catalogue.yaml`](../tests/gui/catalogue.yaml); run it with `npm run test:gui` after installing the pinned browsers with `npx playwright install chromium firefox`. The 0.3 author and series slices also have focused browser scripts; see the [alpha.9 evidence](compatibility-evidence/2026-10-14-series-assignments-alpha9/README.md). Focused source-build checks do not replace an exact signed-package release matrix.

## Current journeys

| Journey | Test | What it proves |
|---|---|---|
| Search/filter → open | `catalogue-search-detail.spec.ts`, `mobile-catalogue-filters.spec.ts` | Query state, result count, sidebar content, keyboard close/focus return, and phone filter state. |
| Scan → browse | `scan-root-browse.spec.ts` | A newly completed scan for the named root is followed by finding the expected publication in Catalogue. |
| Destination author | `author-destination.spec.ts` | Three-letter search, direct keyboard selection, creation only after no matches, review cancellation, unchanged assignments and mobile wrapping. Temporary authors are removed. |
| Editor entry points | `editor-entry-points.spec.ts` | Author/series links, old bookmarks, Back context, authorization, feedback and consistent bottom disclosures. |
| Edit book details once | `unified-book-editor.spec.ts` | Title, rating, author, series, and genre changes remain drafts until **Save**; one save persists them, a stale tab is rejected, and the fixture is restored. |
| Edit → rescan → review → repair | `metadata-edit-persistence.spec.ts` | A title edited in **Book details** survives a root scan, appears as a scanner conflict, and can be restored through **Suggested updates**. The test then restores the original title. |
| Export → preview → apply | `metadata-export-import-roundtrip.spec.ts` | One item corrected in **Book details** is exported, its title is changed in a portable JSON copy, preview reports exactly one matched field, apply updates it, and the original title is restored. |

Selected journeys compare the compact catalogue, sidebar, metadata form, and phone filter panel against Playwright screenshot baselines. Fixture-specific text and covers are masked so the comparisons focus on layout. The tests also attach screenshots at useful checkpoints; Playwright retains a screenshot and video on failure and records a trace on retry. Review baseline updates deliberately on the pinned browser/OS environment.

## Disposable instance and fixture variables

Set `PW_BASE_URL`, `PW_USER`, and `PW_PASSWORD` to a disposable Nextcloud instance with an English test account. GUI tests must not target a personal or production collection: scan tests enqueue background jobs, the metadata journeys edit one item before restoring it, and import apply exercises the mutation endpoint. Ensure the Nextcloud background worker is running.

The scan journey needs `PW_ROOT_PATH`, `PW_SEARCH_TITLE`, and `PW_EXPECTED_CARDS`. The metadata edit/review journey needs `PW_ROOT_PATH`, `PW_ITEM_ID`, and `PW_SEARCH_TITLE`; the item must be in the named root, have a scanner title candidate, and the title must identify exactly one catalogue result. The import journey needs `PW_ITEM_ID` and `PW_SEARCH_TITLE`; the item must be an existing Library item. It exports corrected metadata, changes that item's title in the JSON copy, previews/applies exactly that one item, verifies the imported value, and restores the original title even when an assertion fails.

Run a single journey with, for example:

```bash
npm run test:gui:desktop -- tests/gui/settings/scan-root-browse.spec.ts
```

Playwright projects are serialized because metadata and scan journeys use one shared test account. Checkpoint attachments and failure artifacts can contain catalogue titles and paths; retain them as test data.

## Recorded rehearsals

Alpha.27 passed 41/41 hosted CI journeys; alpha.28 adds three destination-author cases. See the [alpha.28 record](compatibility-evidence/2026-10-19-nc34-author-destination-alpha28/README.md) for current results. The alpha.23 rehearsal below is retained as historical evidence.

On 2026-10-19, `LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed` passed against a disposable Nextcloud 34.0.4 instance with Library 0.3.0-alpha.23 installed from its release package. All 40 generated EPUB, PDF, CBZ, and sidecar fixtures were indexed; author and series backfills completed before browser testing. Results: 1,045 source checks passed, all 37 Playwright cases passed across desktop Chromium, desktop Firefox, and mobile Chromium, and the subsequent Vue, sidebar HTTP, and basic browser smoke checks passed. The harness verified that the fixture source tree was unchanged and removed the instance afterward. This run does not establish Nextcloud 33 or 35 compatibility for alpha.23.

## Human checks that remain

Keep a short dogfood pass for subjective metadata/cover usefulness, unfamiliar real-world files, actual reader handoff quality, author/series organization and manual screen-reader use. Playwright assertions can prove browser-visible state and actions; screenshots cannot decide whether a suggested metadata value is correct for a person's collection. Use the current [0.3 human test cases](human-test-handbook.md#current-03-human-cases); later alpha.174 cases in that handbook are historical.
