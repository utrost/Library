# Alpha.26: faster scanner metadata refresh

Developer Nextcloud **34.0.3**, app **0.2.0-alpha.26**, 27 September 2026. Measurements use the existing real library of **107,707 catalogue items**, with **107,717 publication files** across seven roots. This deployment adds short scanner transactions, reuses prepared metadata, and avoids rewriting valid derived indexes.

## Fixed 500-book comparison

The same fixed sample contains 250 EPUB, 230 PDF and 20 CBZ files, spread across file-ID strata. Every benchmark forces metadata extraction. No publication source is written. Timing includes extraction, scanner bookkeeping and item refresh; sample selection and resetting scanner markers are outside the measured interval.

| Case | Duration | Books/sec |
| --- | ---: | ---: |
| Original alpha.25, profiler off | 74.29 s | 6.73 |
| Original alpha.25, later control repeat, profiler off | 61.92 s | 8.07 |
| Alpha.26, existing indexes verified, profiler off | 22.95 s | 21.78 |
| Alpha.26, cached index fingerprint, profiler off | 20.59 s | 24.29 |
| Alpha.26, actual index rebuild, profiler off | 63.61 s | 7.86 |

Valid existing indexes show a substantial repeat-refresh improvement. Newly indexed books and changed index inputs still require rebuilding: this sample does **not** demonstrate a threefold improvement for that workload. These are individual runs on a shared developer host, not statistical capacity estimates. Extraction cost varies by format and source storage.

With SQL profiling enabled, alpha.25 took 71.09 seconds with 22,760 SQL statements and 44.82 seconds of summed SQL time. Alpha.26's legacy-index verification took 20.96 seconds with 16,973 statements, 6.48 seconds of summed SQL time, and **zero derived-index write statements**. Profiled and unprofiled times come from separate runs. Zero SQL/write counters in unprofiled evidence mean instrumentation was disabled. PHP peak for the fixed sample was **30 MiB**.

Before/after aggregate digests match for all 500 source-file version observations, canonical metadata, facets, search grams, identifiers and duplicate payloads. Source observations cover file ID, ETag, mtime and size; fixture checks additionally compare source bytes. No source titles, paths, authors, hashes, screenshots or raw SQL logs are exported into this report.

[Numeric and boolean sample evidence](sample-measurements.json). [Fixture and browser evidence](fixture-verification.json).

## How index reuse works

`library_items.scanner_index_hash` is a nullable 64-character internal fingerprint of canonical inputs to facets, substring search, identifiers and duplicate lookup, including relevant file attributes and an explicit index-generator revision. Scanner metadata is parsed once before a short owner-scoped transaction. The canonical row is locked; canonical metadata and derived writes commit together or roll back together. User-edited metadata remains protected.

A matching fingerprint skips derived-index writes. For older NULL fingerprints, the scanner verifies stored index contents against the prepared expected values and records the fingerprint only when they agree. Missing/stale legacy indexes are rebuilt. Numeric search grams are normalized to strings before comparison; Unicode author and search cases are covered. Explicit index repairs invalidate the fingerprint. A missing-file transition and a generator-revision change also force rebuilding. The existing metadata pipeline remains v6 because extracted metadata semantics have not changed.

The fingerprint is internal and is excluded from catalogue/UI exports. Migration `Version000200Date20260927160000` adds the nullable column. All 45 schema methods replay against an empty Doctrine schema on NC34; all 24 table field sets match the maintained XML, and the new column is nullable string(64). Historical schema type/index validation is documented in the [schema reference](../../database-schema.md).

## Acceptance and limitations

The scanner integration fixture passes 28 assertions, including repeat extraction without index writes, title/ISBN/path invalidation, missing legacy index repair, revision changes, missing-file return, manual corrections, owner isolation, source-byte preservation and rollback after an injected failure during search-index writes. Author recovery passes 32 integration assertions; scheduled incremental checks pass 36 and cover/catalogue performance fixtures pass 45. Chromium and Firefox pass real-catalogue cursor navigation, selection controls, viewport cover loading and mobile width with zero page errors.

The local gate passes 1,041 Python tests, 518 frontend tests across 34 files, 518 parser parity vectors, PHP runtime programs, translations, frontend build and documentation links. This build is verified on developer NC34/MariaDB. The most recent full NC33–35 matrix remains alpha.23; PostgreSQL runtime acceptance remains open.

## Full ordinary scheduled scan — PASS

The normal Cron worker completed the all-root scan in **50 minutes 2 seconds**. This follows the prior v6 metadata refresh and mainly checks unchanged books; it is a different workload from that four-hour forced refresh.

| Measurement | Result |
| --- | ---: |
| Publication files checked | 107,717 |
| Enabled roots completed | 7 / 7 |
| Unchanged metadata extractions skipped | 106,918 |
| Metadata extractions / item refreshes | 799 / 789 |
| Added / missing / path changes / root failures | 0 / 0 / 0 / 0 |
| Catalogue before → after | 107,707 → 107,707 |
| Average publications checked/second | 35.877 |
| Native PHP peak / observed process high-water memory | 64.3 MiB / 96.5 MiB |

All **206,706 pre-existing source-file identity/version observations** and all **three user-corrected records** match their before-state digests. The daily interval remains 86,400 seconds and the next due time is in the future. Native Nextcloud job history reports success. The scheduler's changed last-job ID matched this all-root scan; its one-shot queue row was not caught by the polling interval. The observer did not execute the scanner or directly queue a job. An idle old worker was stopped gracefully before the next normal Cron dispatch so the deployed classes were loaded.

A subsequent [warning investigation](warning-triage.md) found 736 synthetic-shelf warnings, ten PDF database-overflow bugs, and 14 real EPUBs with metadata readable by an independent ZIP reader.

The same warning counts remain: **786 archive warnings**, **3 invalid-author Review warnings**, and **10 extraction failures without a catalogue item**. These are source/metadata issues retained for Review. Successful job completion does not mean every source imported without a warning.

Chromium and Firefox passed again after full-scan completion, with zero page errors. Owned fixture accounts and browser tokens were removed, as were the temporary container helpers; no forced benchmark markers remain. Maintenance mode is off and the installed version is alpha.26. [Full scheduled-scan aggregate evidence](full-scan-verification.json). Raw identifiers, book values, logs, source digests and screenshots remain private in `/tmp`.

## Repeat measurements

From the repository root, with Docker access to the developer instance:

```bash
EVIDENCE_DIR=/tmp/library-index-check node scripts/performance/run-index-speed.mjs select
EVIDENCE_DIR=/tmp/library-index-check node scripts/performance/run-index-speed.mjs verify
SKIP_SQL=1 EVIDENCE_DIR=/tmp/library-index-check node scripts/performance/run-index-speed.mjs legacy
SKIP_SQL=1 EVIDENCE_DIR=/tmp/library-index-check node scripts/performance/run-index-speed.mjs cached
SKIP_SQL=1 EVIDENCE_DIR=/tmp/library-index-check node scripts/performance/run-index-speed.mjs rebuild
EVIDENCE_DIR=/tmp/library-index-after node scripts/performance/run-index-speed.mjs verify
```

The selection is fixed until `select` is run again. The benchmark refuses to overlap an active scan for the target account. `legacy` clears only the selected internal fingerprints; `rebuild` marks only that sample stale and refreshes it. These modes refresh scanner-owned metadata/indexes and require a developer account/library. A failed rebuild can leave stale markers, repaired by rerunning it. Use `NC_USER` and `NC_CONTAINER` for another developer setup. Omit `SKIP_SQL=1` for statement/time/write instrumentation. Keep raw JSONL, stderr and screenshots private.

For an original-code control, the `baseline` mode loads an archived ItemService into its CLI process before Nextcloud bootstrap. It requires the archived original class at `/tmp/library-index-speed-old-ItemService.php` inside the container; it does not replace the web deployment. Archive that class before deploying an optimization if a later control comparison is desired.

The scanner integration test uses its own disposable account and removes it in `finally`:

```bash
docker cp scripts/performance/sql-profiler.php nextcloud:/tmp/library-performance-sql-profiler.php
docker cp tests/php/scanner_index_speed_integration.php nextcloud:/tmp/library-scanner-index-speed-integration.php
docker exec -u www-data nextcloud php /tmp/library-scanner-index-speed-integration.php
```

The existing scheduled acceptance observer can be rerun with:

```bash
NC_USER=uwe EVIDENCE_DIR=/tmp/library-full-scheduled-acceptance \
  node scripts/performance/full-scheduled-scan.mjs
```

It advances an existing enabled daily schedule once, waits for normal Cron/worker dispatch, and checks terminal completion, root markers, user corrections, source-file version markers and the retained schedule. `RESUME=1` observes an already prepared run. Stopping the observer does not cancel the scan. Full-library raw evidence stays private; export only explicit aggregate allowlists.
