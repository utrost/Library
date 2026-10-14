# Series assignments, alpha.9 — focused compatibility check

Candidate: `0.3.0-alpha.9` development source, built with the production Vue bundle. This is not a signed App Store archive. The NC33–35 matrix used disposable SQLite installations; the populated developer NC34 upgrade used MariaDB. The two EPUB fixture books carried Calibre and EPUB 3 series metadata. Every check used an isolated temporary account that was deleted afterward.

| Nextcloud | Service integration | Chromium | Firefox |
| --- | --- | --- | --- |
| 33.0.9 | Pass | Pass | Pass |
| 34.0.4 | Pass | Pass | Pass |
| 35.0.0 | Pass | Pass | Pass |
| Developer 34, MariaDB, populated upgrade | Pass | Pass | Pass |

The service integration covers a selected-book move, unchanged-rescan preservation, original-provenance Undo, whole-series merge, an empty-source redirect merge and Undo, future imports following the old-name redirect, stale preview rejection, changed-import conflict, both **Keep assignment** and **Use imported series**, and rejection of stale Undo. The browser smoke covers destination search, selected-book preview and apply, Undo, whole-series preview and apply, both imported-change review choices, plus screenshots and zero page errors in each engine. Final browser evidence is under `/tmp/library-series-alpha9/final-nc33/`, `final-nc34/` and `final-nc35/`; each directory includes `results.json` and preview/Undo/merge/review screenshots.

The final repository gate passed 1,046 Python tests, 532 Vitest tests, the 1,067-key translation inventory, production build, module closure and Markdown links. The developer instance upgraded from alpha.8 to alpha.9, passed its schema update and code integrity check, and still had 107,717 catalogue items afterward. Its temporary accounts were removed; there were zero remaining series operation rows and zero series conflicts. Its screenshots and `results.json` are under `/tmp/library-series-alpha9/developer-nc34/`.

The first browser attempt showed the fixture's series projection was still pending, so the smoke now advances that queue before opening the page. A later attempt used an unsupported regex label selector in Playwright; switching to the first returned option resolved the test script issue. After empty-series controls were added, one rerun assumed the move panel had closed when it had correctly stayed open; the script now checks its state before expanding it. All final runs above passed after those corrections. No application failure was hidden by those reruns.

The focused matrix verifies source builds and a two-book workflow. It does not replace the signed exact-package NC33–35 fresh/upgrade matrix, large-series performance checks, PostgreSQL checks, or manual accessibility review required before App Store submission. The [series management guide](../../v0.3-series-management.md) describes the current 500-book interactive limit and source-metadata behavior.
