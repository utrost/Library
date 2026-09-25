# Playwright journey coverage

The Playwright suite covers repeatable browser workflows against an explicitly configured disposable Nextcloud instance. The test inventory is in [`tests/gui/catalogue.yaml`](../tests/gui/catalogue.yaml); run it with `npm run test:gui` after installing the pinned browsers with `npx playwright install chromium firefox`.

## Current journeys

| Journey | Test | What it proves |
|---|---|---|
| Search/filter → open | `catalogue-search-detail.spec.ts`, `mobile-catalogue-filters.spec.ts` | Query state, result count, sidebar content, keyboard close/focus return, and phone filter state. |
| Scan → browse | `scan-root-browse.spec.ts` | A newly completed scan for the named root is followed by finding the expected publication in Catalogue. |
| Edit → rescan → review → repair | `metadata-edit-persistence.spec.ts` | A user title survives a root scan, appears as a scanner conflict, and can be restored to the displayed scanner suggestion through **Suggested updates**. The test then restores the original title. |
| Export → preview → apply | `metadata-export-import-roundtrip.spec.ts` | One corrected item is exported, its title is changed in a portable JSON copy, preview reports exactly one matched field, apply updates it, and the original title is restored. |

Selected journeys compare the compact catalogue, sidebar, metadata form, and phone filter panel against Playwright screenshot baselines. Fixture-specific text and covers are masked so the comparisons focus on layout. The tests also attach screenshots at useful checkpoints; Playwright retains a screenshot and video on failure and records a trace on retry. Review baseline updates deliberately on the pinned browser/OS environment.

## Disposable instance and fixture variables

Set `PW_BASE_URL`, `PW_USER`, and `PW_PASSWORD` to a disposable Nextcloud instance with an English test account. GUI tests must not target a personal or production collection: scan tests enqueue background jobs, the metadata journeys edit one item before restoring it, and import apply exercises the mutation endpoint. Ensure the Nextcloud background worker is running.

The scan journey needs `PW_ROOT_PATH`, `PW_SEARCH_TITLE`, and `PW_EXPECTED_CARDS`. The metadata edit/review journey needs `PW_ROOT_PATH`, `PW_ITEM_ID`, and `PW_SEARCH_TITLE`; the item must be in the named root, have a scanner title candidate, and the title must identify exactly one catalogue result. The import journey needs `PW_ITEM_ID` and `PW_SEARCH_TITLE`; the item must be an existing Library item. It exports corrected metadata, changes that item's title in the JSON copy, previews/applies exactly that one item, verifies the imported value, and restores the original title even when an assertion fails.

Run a single journey with, for example:

```bash
npm run test:gui:desktop -- tests/gui/settings/scan-root-browse.spec.ts
```

Playwright projects are serialized because metadata and scan journeys use one shared test account. Checkpoint attachments and failure artifacts can contain catalogue titles and paths; retain them as test data.

## Human checks that remain

Keep a short dogfood pass for subjective metadata/cover usefulness, unfamiliar real-world files, actual reader handoff quality, and manual screen-reader use. Playwright assertions can prove browser-visible state and actions; screenshots cannot decide whether a suggested metadata value is correct for a person's collection. The detailed numbered walkthrough in the [human test handbook](human-test-handbook.md) is historical until refreshed against a current fixture.
