# Alpha.19 duplicate review — developer verification

**Result: PASS for this feature on the existing developer Nextcloud 34.0.3 / MariaDB instance.** App version: `0.2.0-alpha.19`.

No disposable Nextcloud instances were created. This report makes no new Nextcloud 33/35, PostgreSQL/SQLite or full-library scale claim.

## Checks

| Check | Result | Evidence |
| --- | --- | --- |
| Local regression gate | PASS: 1,041 Python checks, 510 JavaScript tests in 31 files, PHP runtime suites, 518 parser-parity cases, translations and build | [Local checks](local-checks.log) |
| Final UI refinements | PASS: four focused component tests and production build after final layout/saved-scope changes | [Component tests](final-component-tests.log), [build](final-build.log) |
| Duplicate service integration | PASS: 28 assertions on 14 temporary indexed books | [Integration](integration-final.log) |
| Chromium desktop/mobile | PASS: 14 books, 23 candidate pairs, no page errors | [Browser results](browser/duplicates-results.json) |
| Firefox desktop/mobile | PASS: same workflow and layout checks | [Browser results](browser/duplicates-results.json) |
| Files and metadata unchanged | PASS: source identities, SHA-256 contents and metadata snapshots equal before/after review | [Unchanged check](unchanged-final.log) |
| Account deletion | PASS: all five duplicate tables and queued jobs cleaned for the deleted test user; second user's data retained | [Cleanup](cleanup-final.log) |
| Deployment | PASS: 130 deployed source/assets matched local SHA-256 hashes; installed alpha.19, maintenance off, no pending upgrade | [Deployment](deployment-results.json) |
| Fixture cleanup | PASS: temporary books, roots, scans, decisions and temporary browser tokens removed | [Fixture cleanup](fixture-cleanup-final.log), [browser runner](../../../scripts/smoke-duplicates.mjs) |

The local regression gate was followed by focused component/build checks and full duplicate browser checks after the final UI refinements. The final backend integration also exercises the expiry-lock and bounded-content-read refinements.

## Functional coverage

- Renamed byte-identical EPUB with unrelated manually assigned title/author is found through optional content checking.
- Reversed author names and a small title spelling difference produce explained suggestions.
- An EPUB/PDF pair is marked as alternative formats, without asserting identical contents.
- Shared valid ISBN and differing language/publication year are surfaced.
- An unrelated book with the same file size is excluded when its content and metadata do not match.
- Ten-pair pagination, filters, preference, keep-both, dismissal and reset work; decisions survive reload and carry over to another scan of unchanged revisions.
- Cross-owner reads are rejected. Stale revisions and invalid preferred IDs are rejected. Invalid browser CSRF is rejected.
- Scans continue through real queued jobs after leaving the page. Cancellation, saved-scan reopening, quota and expiry cleanup work.
- Review decisions do not alter source files or catalogue metadata. Temporary fixtures are cleaned up.

## Visual review

Screenshots were inspected for usability, rather than compared to reference pixels. The first inspection found a publication-date label overlapping its value and tiny files displayed as `0 MiB`. Both were corrected. Final desktop comparisons are side by side; 390px mobile comparisons stack, long paths wrap, labels do not overlap, and action buttons remain reachable by scrolling. Reopening a saved scan restores its root and content-check setting.

- [Chromium overview](browser/chromium-overview.png)
- [Chromium comparison](browser/chromium-comparisons.png)
- [Chromium mobile preference](browser/chromium-preferred-mobile.png)
- [Firefox overview](browser/firefox-overview.png)
- [Firefox comparison](browser/firefox-comparisons.png)
- [Firefox mobile preference](browser/firefox-preferred-mobile.png)

## Scope and outstanding work

The [user guide](../../duplicate-review.md) documents heuristics, limits, private retention and the absence of file deletion/merging. This run uses controlled fixtures; it is not a precision/recall evaluation across the user's 84,000-book catalogue. Large-library performance and a fresh 33–35 release matrix remain milestone work.

Two existing developer background errors were observed outside the duplicate workflow: a creator-facet unique-key collision during legacy author backfill and an ambiguous `file_id` query. They are recorded in the [risk register](../../current-state-and-risk-register.md) for separate investigation. This feature pass is not a claim that unrelated background tasks are error-free.

## Reproduce

- Local checks: `PATH=/tmp/library-beta-venv/bin:$PATH bash scripts/check.sh`
- Browser feature checks: `node scripts/smoke-duplicates.mjs`
- Developer fixture helper: `scripts/duplicate-books-fixture.php` with `create`, `integration`, `verify`, and `cleanup`; integration loads `tests/php/duplicate_integration.php` inside the developer container.
- Account cleanup: `tests/php/library_cleanup_integration.php` inside the developer container; it creates and deletes its own temporary users.

Run the duplicate browser and quota integration tests sequentially when using the same account: the three-scan quota is deliberately shared across that account. Private deployment backups are kept under `/tmp/library-alpha19-evidence/` and are not included in this report or release artifacts.
