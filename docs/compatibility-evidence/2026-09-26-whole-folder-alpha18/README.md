# Alpha.18 whole-folder analysis — developer verification

Tested on the existing developer Nextcloud **34.0.3 (34.0.3.2)** with MariaDB, at `http://100.123.149.120:8088`. Source/deployment version: **0.2.0-alpha.18**. This is a private development build, not a signed release or a renewed 33–35 matrix.

| Check | Result |
| --- | --- |
| Local regression gate | PASS — 1,041 Python tests, 506 JavaScript tests, PHP runtime checks, 843 translated keys, build and document links |
| Existing sample approval smoke | PASS — Chromium/Firefox, backend integration, fixture and token cleanup |
| Server/browser parser parity | PASS — 518 pattern/guided/folder-rule vectors |
| Backend 83-book analysis | PASS — bounded progress, cancellation, actual worker class, three pages, filtering, no duplicates |
| Approval safety | PASS — 40-book Apply, later pages untouched, exact Undo, stale rejection, source EPUBs unchanged |
| Ownership and scope | PASS — cross-owner rejection, traversal rejection, nonrecursive scope, frozen deepest-folder rules |
| Retention | PASS — five-job quota, expired-result cleanup, account-deletion cleanup including analysis tables/workers |
| Chromium and Firefox | PASS — real queued jobs after leaving page, saved results reopening, 40-book review/Apply/Undo, three result pages, filters, cancellation, CSRF rejection |
| Desktop/mobile layout | PASS — screenshots inspected; bounded result/review scroll areas and no horizontal overflow |

The smoke scripts create a uniquely named temporary root with 83 EPUB files, then remove only that root, its app records and temporary authentication token. Other library records and source files are preserved. Tests explicitly assert source content hashes.

An old developer background worker had kept pre-inference PHP classes loaded for two days. It caused mixed-version failures before restart. The developer container was restarted and clean browser/backend runs repeated. Long-running workers must restart when app PHP classes change; the final deployment has no such stale worker.

## Evidence

- [Browser report](browser/analysis-results.json)
- [Backend integration log](analysis-integration-final.log)
- [Cleanup integration log](cleanup-final.log)
- [Local regression gate](local-checks.log)
- [Existing approval regression](approval-regression.log)
- [Deployment identity](deployment-results.json) — all 123 installed source/active asset hashes match; maintenance off, no pending database upgrade
- [Chromium results](browser/chromium-complete.png), [review](browser/chromium-review.png), [mobile review](browser/chromium-review-mobile.png)
- [Firefox results](browser/firefox-complete.png), [review](browser/firefox-review.png), [mobile review](browser/firefox-review-mobile.png)

## Limits

The analysis limit is 100,000 indexed books, 512 KiB of saved rule definitions, 64 KiB/result and 64 MiB/results per job. Five saved analyses per user expire after seven days. Eight-second worker budgets and 40-/20-item limits bound each background/interactive slice. These are implementation limits; **100,000-book performance has not been measured**. Runtime integration here covers MariaDB on NC34; SQLite/PostgreSQL and NC33/35 remain milestone checks. Apply is explicit and atomic per reviewed page, not a global automatic operation. Analysis does not scan file contents, write sidecars, file books, or apply metadata on future scans.
