# Alpha.17 authors and cleanup verification

Developer: Nextcloud 34.0.3, MariaDB, private instance. Version: `0.2.0-alpha.17`.

Chromium and Firefox passed explicit author splitting, comma preservation, ordered chips, exact deduplication, structured review payloads, Apply, details author links, individual landing pages, suggestions, mobile layout and durable Undo. Screenshots were visually inspected for readable controls and layout.

Backend integration passed ownership and stale guards, atomic rollback, exact author Undo, scanner reset/protection, structured imports and legacy full-field filters. A transaction-only set of 501 matching books confirmed the larger candidate path is complete, deduplicated and private. Individual fixture queries took approximately 3–7 ms against the developer's 84,000-book catalogue.

Actual disposable account deletion passed removal of all app tables, list entries, preferences and scoped queued scans, preserving another account. Bounded expiry retained unexpired history and catalogue data. Legacy backfill preserved unknown punctuation, used the trusted semicolon convention only where known, and left other indexes/provenance intact. All fixtures and temporary credentials were removed.

This report does not claim a new Nextcloud 33/35 matrix or SQLite/PostgreSQL integration run. Existing books migrate gradually when the configured Nextcloud background runner executes the registered five-minute maintenance job.

| Check | Result | Evidence |
| --- | --- | --- |
| Author Playwright: Chromium / Firefox | PASS / PASS | [Results](authors/authors-results.json) |
| Existing approval Playwright: Chromium / Firefox | PASS / PASS | [Results](approval/inference-apply-results.json) |
| Author storage, indexes, stale guards and 501-book candidate path | PASS | [Backend results](integration-results.json) |
| Real account deletion, bounded expiry and author backfill | PASS | [Cleanup results](cleanup-results.json) |
| Local gate | PASS: 1,041 Python, 503 JavaScript, PHP runtimes, translations/build/links | [Log](local-checks.log) |

Screenshots: [desktop author review](authors/chromium-author-review.png), [mobile author review](authors/chromium-author-review-mobile.png), [author links](authors/chromium-author-links.png), [individual author page](authors/chromium-author-browse.png). Maintenance chip punctuation, autosave, reload and rescan protection also passed in both browsers.

Frontend SHA-256: `2005830af4c79340b3970588e3d045b9b603b13e727e0a39c3427b3fac694ab3`. Local and installed asset hashes match. Private app/database backups are kept outside the repository.
