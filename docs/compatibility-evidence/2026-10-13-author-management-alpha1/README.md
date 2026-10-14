# 0.3.0-alpha.1 author storage, migration and editing

Developer NC34.0.3 (MariaDB), plus disposable NC34.0.4 (SQLite), 2026-10-13. Development build deployed; this is not a signed App Store release or NC33–35 release certification. The signed 0.2.0-beta.3 archive remains unchanged.

## Implemented

- Additive author identities, ordered book relationships and per-user coordination; bounded resumable backfill.
- Conservative NFC/whitespace/case comparison. Commas and initials are not guessed. Original book metadata remains intact.
- Authors navigation, prefix search, unused-author filtering, paged books, preferred/sort/given/family-name editing, revision conflict protection and draft retention.
- Preferred author names survive unchanged rescans; changed source credits on manually corrected identities require review. Editing is blocked while pending/failed migration work remains.
- Account/book cleanup, author-change queueing from import/edit/inference, migration status and explicit retry commands.

## Verification

| Check | Result |
| --- | --- |
| Fresh SQLite NC34.0.4, 40 English Gutenberg EPUBs | Installed and migrated 40/40, zero failures/conflicts. |
| Populated signed 0.2.0-beta.3 → alpha.1 upgrade, same 40 EPUBs | 40/40 preserved, manual description retained, author backfill complete. |
| Storage/directory integration | 23 assertions passed: bounded interruption/resume, idempotence, order, whitespace, commas, initials, accents/NFC, original metadata, stale saves, user isolation, search, protected corrections, failure/retry and editing gate. The one final conflict is deliberately created by this test. |
| Two concurrent SQLite workers | One shared identity and two links for the same new name; no duplicate identities. |
| Author browser workflow on disposable and developer NC34 | Chromium and Firefox passed: directory, two linked books, preferred-name edit, rescan, persistence, detail links and mobile layout. Fixture accounts removed afterward. |
| Main NC34 browser regression suite | 34/35 passed in the full run; the remaining Chromium security scenario passed on rerun after creating the required secondary fixture account. All 35 scenarios passed across those runs, not as one uninterrupted clean run. |
| Local source checks | 1,045 Python tests, 531 frontend tests, PHP runtime suite, translation inventory and production build passed. |

Author screenshots were visually inspected. The first mobile screenshot revealed a sidebar-toggle overlap with the back link; spacing and heading hierarchy were corrected and the developer screenshots rerun. Help remains on label controls. See [directory](chromium-directory.png), [author page](chromium-author.png), [mobile editor](chromium-edit-mobile.png).

## Real-library measurements

The measured scope is **107,717 stored catalogue records**, producing **97,300 author identities** and **142,527 relationships**. This is conservative grouping of the existing credits, not a claim that every identity is already a clean individual person.

The catalogue currently marks 100,577 of these records missing; 6,404 are indexed and 736 have metadata errors. Thus 7,140 are not marked missing. Migration processes metadata records, including retained missing entries; it does not read ebook contents or establish their current physical availability.

- CLI phase: **391.08 seconds**, 215 bounded batches, 107,479 attempted records, approximately **274.83 records/second**. Before that phase, cron had already completed 200 records, and another worker overlapped a small part of the remaining work. Treat this as a measured developer run, not an isolated single-worker benchmark.
- Final state: **107,717 synced, zero pending, zero failures, zero conflicts**.
- Preferred names and relationships are still shadow data for the existing catalogue: `authoritative=false` is intentional.
- Aggregate fingerprints before/after match for the selected book metadata and reading fields (107,717 records), file identifiers/paths/revisions (206,706 rows), and complete list rows (2). The fingerprint script lists its exact columns; this is not a byte-for-byte full-database comparison. Source files are untouched by the migration.
- Final 50-author directory measurement: **23.15 ms warm median**, 23.70 ms warm maximum (10 samples); first sample 145.92 ms. An earlier run's first sample was 42.17 ms, so cold/cache timing varies.
- Prefix search (“A”): **23.38 ms warm median**. First author's book page: **23.70 ms warm median**. These are in-process server service timings, not end-to-end browser page timings or measurements of every possible author/page.

**Real-account Chromium page timing:** 956 ms first load; 776 ms warm median and 815 ms warm maximum over five subsequent loads. The list had 50 rows, no JavaScript page errors and no mobile panel overflow. This measures navigation to visible author rows, including Nextcloud/bootstrap/network/render work; it does not wait for global network idleness. The temporary app password was revoked afterward.

See the JSON artifacts for unrounded values. `AuthorBackfillJob` now uses chunks up to 500 within a five-second budget checked between items. A SQL statement or transaction is not interrupted at the deadline; completion time still depends on the installation's cron schedule.

## Repeating the checks

- `tests/php/author_storage_integration.php`: disposable-only, requires `/tmp/library-author-disposable`, mutates the `library-smoke` fixture books.
- `scripts/smoke-author-directory.mjs`: `NC_CONTAINER`, `NC_URL`, `EVIDENCE_DIR`; creates/removes an isolated account on the chosen server and exercises Chromium/Firefox.
- `NC_USER=USER node scripts/performance/author-browser.mjs`: six read-only real-account Chromium page timings, mobile fit and page-error checks; ephemeral app password removed in `finally`. Optional `NC_CONTAINER`, `NC_URL`, `OUTPUT_JSON`.
- `scripts/performance/author-migration.php USER snapshot`: aggregate hashes of the listed metadata columns; no book names or paths in output.
- Same helper with `migrate`: drains pending work in bounded transactions and reports elapsed time. This writes author data; use `snapshot` and a database backup first.
- Same helper with `directory`: 11 service samples for directory, prefix search and author page.
- `occ library:authors:migrate USER`: read-only progress; `--run` processes a bounded batch, `--retry-failed` explicitly requeues failures.

Copy the PHP helpers into the selected Nextcloud container and run them as `www-data`. Raw logs and intermediate browser attempts are retained in `/tmp/library-alpha3-authors` on the development host. A private full pre-upgrade database dump is retained at `nextcloud-db:/tmp/library-before-03-authors.sql`; previous developer app code is at `nextcloud:/tmp/library-03-authors-deployment/before`. Restoring only the old code is not a database rollback.

## Initial failures and corrections

- The first general browser launch omitted the required book-count/title/root settings. The next attempt lacked the scan worker. Those attempts were stopped and retained; the fixtures and worker were configured before rerunning.
- The long-title Gutenberg example exposed a brittle image-button click: the hover title overlay occupies that point and provides the same details action. The test now clicks the visible title button, keeping detail-response, focus-restoration and navigation assertions intact. No forced click or relaxed timeout was added.
- The full configured run initially lacked the secondary account required by the saved-pattern ownership test. Creating it during active SQLite writes encountered a database-lock error; the account was present for the later Firefox run, and the Chromium scenario passed on an isolated rerun. This is fixture preparation evidence, not a blanket claim that all SQLite concurrency paths were verified.
- Existing navigation unit assertions needed the new Authors entry. Schema-reference tests and version documentation were updated. Translation guards rejected untranslated/ambiguous example tokens; German/Arabic text was corrected rather than bypassing the checks.

## Remaining 0.3 work

Embedded creator sort metadata, merge/reassignment with recovery, canonical names and author-ID filters throughout catalogue/duplicate detection, migration conflict resolution UI, and the explicit authoritative transition remain. No merge or file-write feature is implied by this slice. Repeat the complete signed-package NC33–35 fresh/upgrade matrix before App Store submission.
