# NC34 merged-main developer handoff — 2026-10-14

The developer instance at `http://100.123.149.120:8088` now runs Library `0.3.0-alpha.9` from main commit `47e1428` (including merged PRs #101–#103). The server reports Nextcloud `34.0.3`, Library enabled, maintenance mode off and no database upgrade pending. This is a private human-test deployment, not a signed App Store candidate.

## Deployed package

- Audited unsigned archive: `library-0.3.0-alpha.9.tar.gz`.
- SHA-256: `4722bc0274e8cef5e00a93d2bcb3ff1bee28f834c412e67300bfb9c5dba8857a`.
- Package gate: 1,045 Python tests passed; PHP runtime checks passed; production frontend build and single-module closure passed; package, SBOM and provenance audits passed. The package has 211 entries.
- The staged container archive hash matched the local archive. A file-by-file comparison of the installed app directory with the audited package stage found no differences. The previous app directory is retained privately at `/tmp/library-nc34-deploy-20261014/library-before` for rollback.

## Live smoke

| Check | Result |
| --- | --- |
| Authenticated Chromium catalogue | HTTP 200, Vue mounted, initial state present, 100 cards visible |
| Publication sidebar | Opened, rendered its facts, and closed |
| Author profile fixture | Chromium and Firefox passed profile, biography/photo, ownership, pagination, search/sort and mobile checks; fixture cleaned |
| Series assignment fixture | Chromium and Firefox passed selected move, Undo, whole merge and changed-import review; fixture cleaned |
| Server state after checks | Library enabled; maintenance off; no database upgrade pending |

The first basic browser run failed its console-error gate on a `ChunkLoadError` from Nextcloud's `core-unsupported-browser-redirect.js`. The referenced core chunk returned HTTP 200 directly and existed on disk. A second run of the same smoke passed every assertion with zero console errors. The failure was transient in this run; it should be recorded if it recurs during human testing.

Fixture screenshots and detailed results remain in private `/tmp/library-author-profile-*` and `/tmp/library-series-assignment-*` evidence directories because they include test data. The [human test handbook](../../human-test-handbook.md#current-03-human-cases) is the next acceptance step. Its quick pass is H03-01, H03-03, H03-04, H03-05, H03-06 and H03-09. The signed exact-package NC33–35 fresh/upgrade matrix remains a separate release gate.
