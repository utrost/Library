# Alpha.16: reviewed inference Apply and conditional Undo

Test target: existing developer **Nextcloud 34.0.3**, MariaDB, `http://100.123.149.120:8088`. No disposable instances were created. Previous 33–35 evidence does not certify this slice or its new batch table.

## Scope

- At most 40 selected sample books; field-level selection and explicit replacement approval.
- Server-confirmed fixed Before/After review; metadata/source snapshots reject stale preparation and stale Apply.
- Atomic metadata/index writes, private durable history, idempotent Apply/Undo and conservative seven-day Undo.
- Authors remain preview-only pending structured author storage and individual-author browsing.
- No source-document changes, automatic scan-time inference or whole-folder jobs.

## Verification

| Check | Result |
| --- | --- |
| Python contracts | PASS — 1,041 tests |
| JavaScript tests | PASS — 501 tests in 29 files |
| PHP runtime checks, including proposal validation | PASS |
| Translations, build, whitespace and Markdown links | PASS |
| Chromium + Firefox: selection, review, Apply, reload history, Undo | PASS |
| Chromium + Firefox: CSRF rejection and selection invalidation | PASS |
| Firefox: stale Apply rejection, disabled retry and reload recovery control | PASS |
| Desktop/mobile screenshots reviewed for usable controls and overflow | PASS |
| MariaDB: exact Undo, cross-user denial, stale preparation, later-edit Undo refusal | PASS |
| MariaDB: whole-batch rollback, including search/facet indexes | PASS |
| MariaDB: moved file rejection, expiry, idempotent retries, forced-rescan preservation | PASS |
| Existing guided and folder-rule smokes, Chromium + Firefox | PASS |
| Existing 40-record read-only inference smoke | PASS |
| Existing metadata editors, rescan protection and JSON round-trip, Chromium + Firefox | PASS |

Tests use a uniquely named temporary root and EPUB, adding a second owned file only for transactional rollback and movement checks. Real library metadata is not edited. Cleanup removes the exact fixture root/files, fixture-owned batch history and temporary authentication token. The source EPUB content hash is checked. A forced extraction verifies accepted values survive rescanning.

A late stale record in a two-book batch is injected after preparation: the first book's attempted title/publisher update and derived indexes roll back, and the batch remains unapplied. Undo restores exact prior metadata and provenance; a later manual edit blocks it. Direct HTTP mutation without a CSRF token is rejected. Selection changes invalidate the old approval, and a rejected stale Apply offers a sample reload instead of an enabled retry button.

Screenshot review caught inherited definition-list spacing on mobile; confirmation values now use an explicit responsive layout. Evaluation is semantic and visual, without pixel matching.

## Evidence and reproduction

- [Structured browser and integration results](inference-apply-results.json)
- [Desktop review](chromium-review.png), [mobile review](firefox-review-mobile.png), [stale rejection](firefox-stale-review.png), [Undone result](chromium-undone.png)
- [Full local gate](check-final.log)
- [Apply smoke](library-alpha16-apply-smoke.log), [guided regression](library-alpha16-guided-smoke.log), [folder-rule regression](library-alpha16-folder-smoke.log), [read-only smoke](library-alpha16-readonly-smoke.log), [metadata regression](library-alpha16-metadata-regression.log), [integration/cleanup rerun](library-alpha16-integration-cleanup.log)

Run `scripts/check.sh` and `node scripts/smoke-inference-apply.mjs`. The latter requires Docker access and permission to create/delete its owned developer fixture. Its PHP integration companion is `tests/php/inference_batches_integration.php`. Run preference-mutating guided/folder smokes sequentially. Backups of the developer app and affected DB tables are private in `/tmp/library-alpha16-evidence/`; they contain user data and are excluded from this report.

## Limits

See the [extraction guide](../../extracting-metadata.md) for the workflow and [metadata storage](../../metadata-storage.md) for transactions and retention. This is sample-scoped approval, not a whole-library/background inference runner. Authors cannot be applied. Undo conservatively rejects any later publication-metadata or scanner-provenance change to an affected book. Source files are never rewritten.

Reviews expire after 30 minutes; applied/undone history expires seven days after the transition. Expired records are cleaned on the user's next history/prepare request. Global scheduled expiry and account-deletion cleanup remain operational follow-up work before broad deployment. SQLite/PostgreSQL locking branches and Nextcloud 33/35 have no integration evidence for this slice yet. No claim of a signed or public-ready release is made.

## Package identity

Frozen archive SHA-256: `dc0134f3dcee6524e011765f0241ba93130b81700217e00a37b45609765d0dfa`.

Versioned JavaScript SHA-256: `667747384d31aba9d7e32646d82d36b6693a459f6ad8a9eb558d0b96b0a9b705`, matching the deployed asset. Installed Library version is `0.2.0-alpha.16`; maintenance is off and no database upgrade is pending.
