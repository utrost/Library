# DNB lookup — focused development verification

**Historical source-run record.** Both adapters are now included in the signed alpha.8 development deployment; see [current delivery evidence](providers-alpha8-verification.md). Live LoC acceptance remains open.

Date: 2026-11-12. Scope: unreleased source changes after alpha.7, installed on a disposable Nextcloud 34.0.3 / SQLite instance. This is not a signed-package deployment or full release certification. No existing library books were changed.

## Results

- Production frontend build: passed; 919,868 runtime JavaScript bytes, within the existing budget.
- English/German translation inventory and generated catalogues: passed. Arabic remains frozen.
- Focused Vue checks: 11 passed across metadata comparison, candidate selection and cover controls.
- Provider fault fixtures: passed for Open Library, Google Books and DNB, with no public requests. DNB coverage includes malformed/oversized XML, DTD/entity rejection, SRU diagnostics, redirects, request pacing and Retry-After, escaped CQL, invalid identifiers, mismatched records, ISBN mismatch warnings, account-isolated positive/empty caches, and disabling before cache access.
- Synthetic 50-book integration: passed, including DNB batch search, comparison, selected-field Apply, conditional Undo, provider preference, disabled options, editor Save and DNB provenance. Existing stale-review and ownership assertions also pass. Example setup time: 125 ms; this is fixture setup, not a large-catalogue benchmark.
- Desktop Chromium and mobile Chromium: passed DNB selection, explicit Search, comparison, Discard, Save, source-labelled receipts and Undo, without horizontal overflow or browser page errors. Search responses are synthetic; saved approvals, book updates and Undo use the installed backend.
- Live public DNB examples: ISBN lookup, title/author lookup and uncached exact-record retrieval passed. Observed elapsed times were 380 ms for one ISBN result and 1,058 ms for eight title/author results, including provider pacing. These are single observations, not service-level guarantees.
- Live HTTP/browser smoke: administrator disable/re-enable, real DNB ISBN lookup and comparison, saving a publisher with `provider:dnb` evidence, and restoring it through Undo all passed on a disposable book.

Screenshots and detailed execution logs remain local; committed fixtures contain synthetic metadata only. The live query examples use a public catalogue ISBN and a well-known title, not personal library data.

## Repeating the focused checks

Use `scripts/dev-lists-instance.sh` with a unique disposable prefix, NC34, and no release archive to install the source build. Copy `tests/php/metadata_provider_faults.php`, `tests/php/metadata_batch_integration.php` and `tests/php/fixtures/` into its `/tmp` directory, readable by the web user. Run both PHP scripts as `www-data` with `LIBRARY_DISPOSABLE_FIXTURE=1`.

The batch script writes `/tmp/library-dnb-fixture.json` inside the disposable instance. Copy it out and set `PW_DNB_FIXTURE` to that file. Run `tests/gui/metadata/dnb-lookup.spec.ts` with the disposable environment and the `desktop-chromium` and `mobile-chromium` projects. Each uses a separate server approval. Rerun the PHP fixture before repeating browser saves, since successful Save/Undo consumes its approval.

Live provider calls are explicit development checks, never an automatic part of the deterministic fixtures. Google Books live testing remains pending an administrator-supplied API key. No full CI, GitHub Actions, App Store publication, signed release gate, or deployment to the development library was performed for this addition.
