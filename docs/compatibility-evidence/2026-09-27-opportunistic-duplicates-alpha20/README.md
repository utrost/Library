# Opportunistic duplicate suggestions — alpha.20

Measured and verified 2026-09-27 on the existing **Nextcloud 34.0.3** developer instance, with **84,261 real catalogue items**, MariaDB and Redis. This is not a 33/35 matrix or a 100k/concurrent-user load test.

## Outcome

Implemented an opt-in, per-account persistent metadata index, asynchronous lookups for a catalogue page (at most 100 IDs) and individual metadata sidebars, candidate badges, direct comparisons and reversible private decisions. Enabled and ready for the developer account. No automatic content hashing, file deletion or merging.

## Real measurements

| Measurement | Result |
| --- | --- |
| Indexed catalogue records | 84,261 |
| Matching key rows | 405,906 |
| Initial continuous-process construction | 12.97 seconds; 169 batches of at most 500 |
| Construction PHP peak memory | 20 MiB |
| Normal queued background rebuild | 52.47 seconds, including scheduling and concurrent catalogue requests |
| First HTTP run: one visible book, 20 requests | Median 25.2 ms; p95 26.2 ms; maximum 105.9 ms |
| First HTTP run: 100 visible books, 20 requests | Median 144.3 ms; p95 185.4 ms; maximum 1,471.8 ms (first request) |
| Repeat HTTP run: one visible book, 20 requests | Median 25.6 ms; p95 27.6 ms; maximum 54.5 ms |
| Repeat HTTP run: 100 visible books, 20 requests | Median 136.5 ms; p95 315.0 ms; maximum 421.6 ms |
| Catalogue HTTP before rebuild, 10 requests | Median 167.9 ms; maximum 629.3 ms |
| Catalogue HTTP during rebuild, 28 requests | Median 787.6 ms; p95 1,067.2 ms; maximum 1,212.5 ms |
| Allocated database data and indexes | About 160.7 MiB, including 41.6 MiB of book projections |
| One fixture metadata save including index update | 79.7 ms on final run; earlier runs 100–107 ms |

The initial build has a noticeable contention cost. Ordinary suggestions are fast enough for asynchronous UI use in this environment; initial requests can be slower than steady-state requests. The first real catalogue page contained 12 books with suggestions and no partial results. These are heuristic candidates, not 12 confirmed duplicate books.

### Method and limits

- Continuous construction used the real catalogue through `DuplicateIndexService`, with no per-batch scheduler wait. The 52-second rebuild used ordinary queued jobs while issuing catalogue requests. Database/OS caches were not cleared; neither number is a cold-machine claim.
- HTTP requests used a temporary, revoked application token and Playwright's authenticated API context. Each request creates a fresh server request. Durations include the local route to the developer instance. The script reports nearest-rank p95 and the upper middle observation for even-sized median samples; raw samples are retained.
- The repeat run followed deployment/restart. Background server activity was not artificially stopped. These are single-client measurements, not simultaneous multi-user throughput or guarantees for remote storage.
- Additional PHP measurements sampled 100-book cohorts at the beginning, quarter, middle and end of the catalogue, ten repetitions each. Median lookup times ranged from 81 to 242 ms/page and 2 to 10 ms/book in one warm PHP process. Its 68 MiB peak includes all repeated calls, Nextcloud caches and the list of catalogue IDs. Instrumented SQL counts cover the index service only, excluding Nextcloud access checks and review queries.
- Initial full-page timing is not used to claim the duplicate lookup cost. The first script waited for page load before observing visibility; the corrected repeat recorded the lookup response at 6.52 s and catalogue visibility assertion completing at 10.13 s after navigation. Those aggregate timings include the whole app, resource loading and browser scheduling, without a feature-off control.
- Storage comes from MariaDB allocated table data/index sizes. Its estimated table row counts differ from actual `COUNT(*)`; actual counts above are authoritative. Compacting stored projections and key storage is future tuning.

## Verification

- Chromium and Firefox, desktop and 390 px mobile: catalogue batch of 14 fixture books, badges, individual sidebar suggestions, direct PDF/EPUB comparison, dismissal persistence and reset, readable mobile content, no JavaScript errors.
- Screenshots inspected for practical usability, not pixel equality. Corrected a parent CSS rule that made the settings checkbox oversized. The existing mobile active-filter/header overlap remains outside this slice.
- Nine new service assertions plus rejection checks: incremental indexing, metadata edits immediately change results, stale comparison rejection, bounded input, unavailable IDs, dismissal/reset and no automatic content hashing.
- Existing manual duplicate integration: 28 assertions, including cancellation, exact renamed content (explicit opt-in), fuzzy titles/reversed authors, ISBN, edition flags, quotas, review persistence and expiry cleanup. A regression in expiry table selection was caught and fixed before the final passing run.
- Disposable-account checks: disabled lookups, cross-account book isolation, account deletion including all new index tables, preserving the other account, author backfill and bounded history expiry.
- Fixture source SHA-256 hashes and metadata snapshots unchanged after testing. Temporary files, roots, fixture decisions and authentication tokens removed.
- Local gate: 1,041 Python tests, 513 Vue tests across 32 files, PHP runtime checks, 518 parser parity vectors, 907-key translation guard, production build and Markdown link checks.
- Final source/deployed-file hashes and installed alpha.20 version recorded in `deployment-results.json`.

## Boundaries and follow-ups

- No exhaustive all-pairs comparison: keys with more than 50 records are skipped, candidates are capped at 100 per source, results at 20; affected books are marked partial. Ordinary page requests accept at most 100 IDs.
- Missing metadata or entirely renamed copies can be missed. Automatic checks never hash source files. Explicit manual content checks remain available.
- Matching uses existing name normalization, so `Walter Mitty` and `Mitty, Walter` can match. Normalization may conflate distinct people and is never written back to metadata.
- Relevant metadata changes resurface candidates. Old alpha.19 decisions are retained in manual review but not migrated into automatic hints.
- Derived data remains on disable; re-enable rebuilds it. The new metadata index has no 100k catalogue cap, but only 84,261 real books were measured.
- Rebuild contention, index storage, higher-concurrency behavior and NC33/35 verification remain future work. No App Store readiness claim is made by this developer test.

## Reproduce

- `scripts/benchmark-duplicate-index.php`: copy inside the Nextcloud container and run as its web user with `LIBRARY_BENCHMARK_USER`; actions `status`, `build`, `lookup`. `build` enables and completes the index; it does not force an already-ready index to rebuild.
- `scripts/benchmark-duplicate-suggestions.mjs`: `NC_URL`, `NC_USER`, `NC_CONTAINER`, `EVIDENCE_DIR`. Default run toggles off/on and rebuilds only this account's derived index; `SKIP_REBUILD=1` measures lookups without rebuilding. Requires suggestions already enabled to capture the initial catalogue batch.
- `scripts/smoke-duplicate-suggestions.mjs`: same connection variables; owns and cleans up a temporary 14-book fixture. Requires suggestions enabled.
- `tests/php/duplicate_suggestions_integration.php` and `tests/php/duplicate_integration.php`: loaded through `scripts/duplicate-books-fixture.php`; cleanup always runs.

## Evidence

- [HTTP benchmark and rebuild](http-performance.json)
- [Repeat HTTP benchmark](http-performance-repeat.json)
- [Continuous index build](index-build.jsonl)
- [Four-cohort PHP lookups](lookups.jsonl)
- [Database allocation](storage.json)
- [Service integration results](final-integration.log)
- [Account cleanup and isolation](account-cleanup.log)
- [Browser results](browser/results.json)
- [Desktop comparison](browser/chromium-compare.png)
- [Mobile metadata suggestions](browser/firefox-mobile-metadata.png)
- [Deployment verification](deployment-results.json)
