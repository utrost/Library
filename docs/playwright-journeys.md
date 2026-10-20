# Playwright journey coverage

The main Playwright suite covers repeatable browser workflows against an explicitly configured disposable Nextcloud instance. Every discovered spec file is registered in [`tests/gui/catalogue.yaml`](../tests/gui/catalogue.yaml); run it with `npm run test:gui` after installing the pinned browsers with `npx playwright install chromium firefox`. The 0.3 author and series slices also have focused browser scripts; see the [alpha.9 evidence](compatibility-evidence/2026-10-14-series-assignments-alpha9/README.md). Focused source-build checks do not replace an exact signed-package release matrix.

## Current journeys

| Journey | Test | What it proves |
|---|---|---|
| Search/filter → open | `catalogue-search-detail.spec.ts`, `mobile-catalogue-filters.spec.ts` | Query state, result count, sidebar content, keyboard close/focus return, and phone filter state. |
| Scan → browse | `scan-root-browse.spec.ts` | A newly completed scan for the named root is followed by finding the expected publication in Catalogue. |
| Destination author | `author-destination.spec.ts` | Three-letter search, direct keyboard selection, creation only after no matches, review cancellation, unchanged assignments and mobile wrapping. Temporary authors are removed. |
| Editor entry points | `editor-entry-points.spec.ts` | Author/series links, old bookmarks, Back context, authorization, feedback and consistent bottom disclosures. |
| Edit book details once | `unified-book-editor.spec.ts` | Title, rating, author, series, and genre changes remain drafts until **Save book details**; one save persists them, a stale tab is rejected, and the fixture is restored. |
| Edit → rescan → review → repair | `metadata-edit-persistence.spec.ts` | A title edited in **Book details** survives a root scan, appears as a scanner conflict, and can be restored through **Suggested updates**. The test then restores the original title. |
| Export → preview → apply | `metadata-export-import-roundtrip.spec.ts` | One item corrected in **Book details** is exported, its title is changed in a portable JSON copy, preview reports exactly one matched field, apply updates it, and the original title is restored. |

Journeys assert browser state, layout bounds, focus and selected computed styles; they attach screenshots at useful checkpoints. **There are no active pixel-baseline comparisons.** Four unreferenced pre-overhaul PNG baselines were removed during the handbook audit. Playwright retains a screenshot and video on failure and records a trace on retry. Inspect checkpoint images manually for visual quality; a passing functional assertion is not a design review.

## Coverage boundaries

The inventory is checked against every `tests/gui/**/*.spec.ts` file, so new suites cannot silently disappear from this catalogue. The table above summarizes core journeys; the inventory also includes author browsing, list layout, lists, inference, help, thumbnail administration and the three UI consistency suites.

Some browser cases deliberately intercept lookup/profile responses to exercise errors, keyboard behavior and draft navigation deterministically. These prove client behavior, not database ordering or ownership. The author-browser and series-toolbar journeys use real directory data. Backend assertions and the disposable integration fixtures cover SQL/ownership separately.

Book deletion uses the separate [`smoke-book-deletion.mjs`](../scripts/smoke-book-deletion.mjs) harness and isolated files; it is not part of `npm run test:gui`. Do not infer deletion coverage from the main suite's pass count. The signed NC33–35 matrix, real-reader quality, screen-reader use and human visual evaluation remain separate gates.

## Disposable instance and fixture variables

Set `PW_BASE_URL`, `PW_USER`, and `PW_PASSWORD` to a disposable Nextcloud instance with an English test account. GUI tests must not target a personal or production collection: scan tests enqueue background jobs, the metadata journeys edit one item before restoring it, and import apply exercises the mutation endpoint. Ensure the Nextcloud background worker is running.

The ownership cases also require the independent, unprivileged fixture account `library-lists-other` with the disposable password defined in `smoke-fresh-install-mixed.sh`. That harness creates it automatically. A manually assembled instance must create it too; the narrower `dev-lists-instance.sh start` helper alone does not provide every full-suite fixture.

The maintenance-control journey requires an unresolved `3ng` source language. The disposable harness generates it with `generate-mixed-publications.py --language-review`, then imports it normally. Missing review data fails the test instead of bypassing the picker. Selection/removal is tested without submitting a mapping. The Gutenberg compatibility harness seeds equivalent derived review evidence on a second disposable book with `scripts/performance/language-review-fixture.php`; it does not rewrite the ebook or its saved bibliographic fields. The candidate fixture is removed with that container.

The scan journey needs `PW_ROOT_PATH`, `PW_SEARCH_TITLE`, and `PW_EXPECTED_CARDS`. The metadata edit/review journey needs `PW_ROOT_PATH`, `PW_ITEM_ID`, and `PW_SEARCH_TITLE`; the item must be in the named root, have a scanner title candidate, and the title must identify exactly one catalogue result. The import journey needs `PW_ITEM_ID` and `PW_SEARCH_TITLE`; the item must be an existing Library item. It exports corrected metadata, changes that item's title in the JSON copy, previews/applies exactly that one item, verifies the imported value, and restores the original title even when an assertion fails.

Run a single journey with, for example:

```bash
npm run test:gui:desktop -- tests/gui/settings/scan-root-browse.spec.ts
```

Playwright projects are serialized because metadata and scan journeys use one shared test account. Checkpoint attachments and failure artifacts can contain catalogue titles and paths; retain them as test data.

## Older standalone diagnostics

These scripts are outside the main suite and still contain known obsolete UI assumptions. They are **not current acceptance gates** and now stop before authentication or fixture creation with an explanation. `LIBRARY_RUN_HISTORICAL_SMOKE=1` is reserved for deliberately replaying an older interface. Do not count an old successful run as current coverage:

| Script | Stale behavior | Current coverage / remaining work |
|---|---|---|
| `smoke-authors.mjs` | Legacy creator chips, autosave and creator landing routes | Current author identity editing/browsing is in `unified-book-editor` and `author-browser`; port the older combined inference/author scenario before reuse. |
| `smoke-metadata-fields.mjs` | Removed raw series/genre editor and old cover-to-sidebar behavior | Unified editor, OPF-series and import journeys cover current flows; omitted-field legacy API checks need an explicit request harness. |
| `smoke-warning-recovery.mjs` | Removed provenance markup and reset-form selectors | Port the rejected-field reset scenario to current bottom disclosures; not proven by a normal-title save test. |
| `verify-ux-alpha22.mjs` | Explicitly version-specific alpha.22 labels and layout | Historical evidence only. Current layout coverage is in the three UI consistency suites and the human handbook. |

Other standalone scripts are not automatically certified by `npm run test:gui`. In particular, the full compatibility harness and its additional inference smokes must be rerun before a signed release verdict. This audit reran OPF series, series reassignment, author conflicts, native POST conflicts and book deletion separately; see the [audit record](testing-maintenance-audit-2026-10-20.md).

## Recorded rehearsals

Alpha.27 passed 41/41 hosted CI journeys; alpha.28 passed all 44/44 hosted CI journeys, including three destination-author cases. These are historical results. The deployed alpha.34 passed 77 hosted CI journeys; see its [verification record](compatibility-evidence/2026-10-20-nc34-final-ux-alpha34/README.md). The alpha.23 rehearsal below is retained as historical evidence.

On 2026-10-19, `LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed` passed against a disposable Nextcloud 34.0.4 instance with Library 0.3.0-alpha.23 installed from its release package. All 40 generated EPUB, PDF, CBZ, and sidecar fixtures were indexed; author and series backfills completed before browser testing. Results: 1,045 source checks passed, all 37 Playwright cases passed across desktop Chromium, desktop Firefox, and mobile Chromium, and the subsequent Vue, sidebar HTTP, and basic browser smoke checks passed. The harness verified that the fixture source tree was unchanged and removed the instance afterward. This run does not establish Nextcloud 33 or 35 compatibility for alpha.23.

## Human checks that remain

Keep a short dogfood pass for subjective metadata/cover usefulness, unfamiliar real-world files, actual reader handoff quality, author/series organization and manual screen-reader use. Playwright assertions can prove browser-visible state and actions; screenshots cannot decide whether a suggested metadata value is correct for a person's collection. Use the current [0.3 human test cases](human-test-handbook.md#current-03-human-cases); older cases live in the separate [v0.1 archive](human-test-handbook-v0.1-archive.md).
