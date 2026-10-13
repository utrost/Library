# Beta 3 release verification

The signed Library 0.2.0-beta.3 candidate is deployed on developer Nextcloud 34.0.3. Developer duplicate and series checks pass in Chromium and Firefox. All six disposable fresh/upgrade cases passed, with **210/210 final main Playwright tests**, zero skipped tests and zero flaky results in the final executions. [Hosted CI](https://github.com/utrost/Library/actions/runs/38412388968) passed for the runtime source. The [GitHub prerelease](https://github.com/utrost/Library/releases/tag/v0.2.0-beta.3) is public; App Store submission remains with the owner.

## Exact archive

- Archive: `dist/library-0.2.0-beta.3.tar.gz`.
- SHA-256: `91e9e06d5113cfdc1111860e695442a4f58c0665f8e739b40ffde0cefa1ee91a`.
- Runtime/package source: `fee20308f70e740c40273097bd61c9870b89cd54`.
- Signed app integrity, package audit, SPDX inventory, provenance and detached release/registration signatures passed.
- Local gate: 1,045 Python tests, 531 frontend tests across 36 files, PHP runtime tests including 56 duplicate matcher assertions, 518 inference parser vectors, translation checks, production build and Markdown links passed.
- Final packaging dependency audit: zero vulnerabilities.
- Versioned runtime bundle: 918,544 bytes, no dynamic runtime chunks.
- Beta.1 and beta.2 signed archives remain unchanged.

## Duplicate correction

Stored series positions and explicit title issue/volume numbers now count against title-and-author matches. Leading-zero and equivalent decimal positions compare consistently. Shared valid ISBN and identical-content evidence remain independent.

The 19-book browser fixture checks the reported comic naming pattern, a same-issue alternative, conflicting imported Calibre series positions, content/ISBN matches, pagination, cancellation, persisted decisions, reset, CSRF and mobile layout. Both developer browsers passed with zero page errors and unchanged source files and metadata. The indexed suggestion projection is also checked for both series fields. Separate developer browser checks verify that legacy suggestion dismissals remain hidden after the signature format changes, and that resetting them still works.

A read-only comparison of a real 42-record series sample reduced title/author candidate pairs from **780 to 12**, excluding 768 pairs. None of the 42 records were marked missing. Running both matchers over the sample took 62.6 ms in one measurement. This is an in-memory title/author comparison, not a full-library throughput benchmark or a content/ISBN comparison. See [aggregate results](real-series-comparison.json).

Existing saved scans retain their earlier results. Run a new scan after upgrading. Catalogue suggestions use the updated matcher on the next lookup; no full metadata refresh is required.

## Developer deployment

The final signed archive is installed with clean Library integrity, maintenance off and no pending database upgrade. No schema change is required. Other App Store app updates were temporarily disabled for this Library-only deployment, and the temporary configuration override was removed.

- [Duplicate browser results](developer-duplicates.json)
- [Series browser results](developer-series.json)
- [Catalogue suggestions and legacy dismissal results](developer-suggestions.json)

Manual series corrections survived rescanning and source identity markers were unchanged.

The first focused deployment exposed an already-running Nextcloud CLI worker retaining old PHP classes. It produced old matching results despite updated files. With no active scan or reserved job, that idle worker was stopped; the complete developer browser check then passed. Operators using persistent workers must reload them after app upgrades.

## Compatibility matrix

Each case installs the exact archive, checks signed integrity, imports the same 40 English Gutenberg books and runs the main Playwright suite plus service checks, series import/manual correction, inference Apply/Undo, duplicate review, inference suggestions and scheduled scans. Disposable databases use SQLite; developer verification uses MariaDB.

| Nextcloud | Fresh install | Upgrade from beta.1 |
| --- | --- | --- |
| 33.0.9 | Pass, 35 main tests | Pass, 35 main tests |
| 34.0.4 | Pass after rerun, 35 main tests | Pass after rerun, 35 main tests |
| 35.0.0 | Pass, 35 main tests | Pass, 35 main tests |

Raw evidence: `/tmp/library-beta3/final-{fresh,upgrade}-{version}/nextcloud-{version}/`.

Early disposable runs against the preceding package were deliberately stopped when the App Store prerelease changelog section was added. Those runs are retained under `/tmp/library-beta3/superseded/` and are not final-package evidence. A subsequent six-case round passed before the final legacy-dismissal compatibility correction; its evidence is retained under `/tmp/library-beta3/superseded-decisions/`. The final matrix verifies the correction too.

Two NC34 attempts on the final archive encountered timeouts during the six-case concurrent run: Chromium login waiting for network idle (20 seconds), and Firefox waiting for the details response (10 seconds). Screenshots and logs are retained in `/tmp/library-beta3/failed-concurrent-nc34/`. The login screenshot showed a rendered catalogue; the details failure stopped before the sidebar appeared. The failed cases were stopped and rerun with only two browser cases active; both complete cases then passed, including supplementary checks and cleanup. No assertions or timeouts were relaxed. These earlier failures are not counted as clean executions.

## Repeat the checks

Use the existing `scripts/performance/compatibility-matrix.sh` with:

```bash
export LIBRARY_TEST_ARCHIVE="$PWD/dist/library-0.2.0-beta.3.tar.gz"
export LIBRARY_BETA_ARCHIVE="$PWD/dist/library-0.2.0-beta.1.tar.gz"
export LIBRARY_BOOK_FIXTURE_ARCHIVE=/tmp/library-beta2/gutenberg-en-40.tar.gz
export REQUIRE_INTEGRITY=1 PLAYWRIGHT_HTML_OPEN=never
INSTALL_MODE=fresh EVIDENCE_DIR=/tmp/library-beta3-repeat-fresh bash scripts/performance/compatibility-matrix.sh
INSTALL_MODE=upgrade EVIDENCE_DIR=/tmp/library-beta3-repeat-upgrade bash scripts/performance/compatibility-matrix.sh
```

The fixture archive is the exported 40 English Gutenberg EPUBs. Parallel runs require distinct `LIBRARY_LISTS_PREFIX` and `LIBRARY_LISTS_WORK_DIR` values. Limit this six-CPU developer host to two simultaneous browser cases; running six at once caused substantial contention. The developer duplicate smoke is `EVIDENCE_DIR=/tmp/library-duplicates-repeat node scripts/smoke-duplicates.mjs`; it creates and removes only its uniquely named fixture folder and root.

## Publication and remaining acceptance

The public GitHub prerelease contains the archive, checksum, detached signature, SPDX inventory and provenance. All five downloads and three screenshot URLs returned HTTP 200 without authentication and matched the local files byte for byte. The downloaded archive signature verified with the public certificate. See [public URL evidence](public-urls.json) and [machine-readable verification results](results.json). The tag points to the exact runtime source commit listed above; later branch commits contain documentation and test-harness updates only. Owner acceptance and App Store account submission remain. All disposable instances were removed. Private handoff instructions are in `dist/app-store-handoff-beta3/README.txt`.

Beta release notes now include the `[Unreleased]` section used for prereleases by the [official App Store developer guide](https://nextcloudappstore.readthedocs.io/en/latest/developer.html). Registration proof signs the app ID; release proof signs the archive. The handoff keeps them separate.

Manual screen-reader testing and PostgreSQL coverage remain outside this verification. This release does not claim a new full-library scan or benchmark; the previous [beta.2 full refresh](../2026-10-13-beta2/README.md) remains the recorded scan evidence. Dedicated author identities and merging are planned for 0.3.

Browser evidence from disposable NC34: [desktop duplicate review](duplicates-desktop.png) and [mobile duplicate review](duplicates-mobile.png).
