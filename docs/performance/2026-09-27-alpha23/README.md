# Performance and compatibility — alpha.23

Library **0.2.0-alpha.23** is deployed on developer Nextcloud **34.0.3**, with **84,261 books**. This follows the [alpha.22 measurements](../2026-09-27-alpha22/README.md). Measurements use the developer MariaDB instance; compatibility uses disposable SQLite instances.

## Implementation

### Bounded scans

The scanner uses Nextcloud's public Files search interfaces to enumerate supported publications in pages of 200, including mounted storage and case-insensitive filename extensions. It resolves each search result to a live node, validates its identity/readability and checks physical existence before taking the unchanged-file fast path. Search cache-jail entries can contain relative storage paths, so they are never used directly as the extraction source.

Each page prefetches previous Library file observations in one ownership-scoped query. Prefetched observations must match both the account and the file ID; repeated aliases consume the observation and fall back to a fresh lookup. File updates return their written values rather than rereading the same row. File access is checked for each source; no permission cache persists between requests or jobs.

The root's ETag is rechecked after each page. A changed/unreadable scope stops that root and prevents its missing-file sweep and completed-scan marker. Already processed metadata remains; a stable retry completes the scan. A direct physical deletion with a stale Nextcloud cache is detected. New files placed outside Nextcloud need its file cache updated first, as documented in [automatic scans](../../automatic-scans.md).

PDF extraction reads its existing 256 KiB prefix directly from the public Files stream. EPUB/CBZ archives stream to temporary disk files instead of loading the entire publication into PHP memory; archive I/O and temporary disk space are still proportional to file size. Embedded metadata XML parsing remains a separate allocation. Real 32 MiB PDF/CBZ fixtures verify preserved metadata with less than 4 MiB additional PHP peak allocation.

The working set contains one search page plus scalar IDs used for the final missing sweep. It still grows with the number of observed publications and configured mounts; this is not a universal constant-memory guarantee. Enumeration order changed from recursive folder order to file ID order. A cancelled scan does not mark unvisited books missing.

### Database work and navigation

Facet rows are written in batches of 150/750 parameters, below SQLite's conservative 999-parameter ceiling. Full author names precede derived word keys. MySQL uses a no-op duplicate-key update; SQLite/PostgreSQL use a conflict clause targeting the facet key. This preserves database accent/case collation and the first canonical value. Unknown providers retain the existing insertion fallback.

Read-only inference snapshots fetch metadata and file/root context together. Sample/approval pages read up to 40 snapshots in one query and still validate every source through the live Files API. Apply/Undo retains fresh individual locked reads and identity checks inside its transaction. Per-source Files checks and some analysis/write reads remain; they are not blindly reused across mutations.

Direct catalogue pages first fetch a narrow projection and then hydrate only the selected IDs, retaining the same ownership, filters, sorting and duplicate suppression on both queries. New covering indexes support title-page enumeration and file-status/root checks. Next/Previous retains the title/ID cursor. Offset jumps still have work proportional to skipped eligible records; they do not become constant-time navigation.

### Thumbnail administration and cleanup

**Administration settings → Library** exposes:

- **Cache budget per account (MiB):** default 128; 0 disables disk caching; maximum 1,024.
- **Retention (hours):** default 168; range 1–720.

Help appears on label hover, focus or tap. The server enforces administrator access, CSRF and numeric bounds. Disabling disk caching does not rewrite source covers or disable ordinary private browser caching.

The encoded thumbnail budget is divided across 256 shards and enforced on each write, together with the existing maximum of 16 entries per shard. Filesystem metadata and the small account registry are outside this byte budget. A configured budget is a ceiling, not a target: small/empty shards cannot lend their unused quota to another shard, and the entry limit can cap usage below the selected budget. Very small budgets may be unable to retain larger thumbnails; responses still generate on demand.

Lowering a budget trims existing files gradually during maintenance or subsequent writes. Shortening retention immediately makes older entries unavailable on cache reads. Expired thumbnails are never served. Maintenance considers 20 registered cache owners × 4 shards per invocation; completion delay depends on account count and Cron availability. The owner registry survives removal of the last Library root, so abandoned cached data remains eligible for cleanup. Account deletion removes the registry and cache shards. Cache/lock failures do not block unrelated maintenance.

## Verification and measurements

### HTTP and browser

Three unprofiled requests per operation on the 84,261-book developer library; SQL is measured on a separate request. See [all HTTP/SQL results](http-results.md) and [browser aggregates](browser-aggregates.json).

| Operation | Alpha.23 |
| --- | ---: |
| Catalogue, 100 publications | 153 ms median |
| Direct page 400 | 268 ms median; alpha.22 was approximately 10.5 s |
| Deferred catalogue hydration | 620 ms median |
| Inference sample | 161 ms median |
| List page | 45 ms median |
| Browser catalogue first visibility | 0.92 s |
| Browser repeat visibility | 0.73 s |

Browser timings are one Chromium run per surface, not percentile or capacity claims. The first catalogue visit transferred 2.90 MiB, including shared assets; the repeat transferred 0.053 MiB. Catalogue main-thread long tasks totalled 781 ms first/656 ms repeat. Rendering remains a useful follow-up.

### Standard processes and jobs

One profiled run per operation on the owned 40-book fixture; its files were verified unchanged and its account deleted. See [process aggregates](process-aggregates.json) and [job aggregates](job-aggregates.json).

| Operation | Alpha.22 SQL statements | Alpha.23 SQL statements | Alpha.23 time |
| --- | ---: | ---: | ---: |
| Metadata Prepare, 40 books | 324 | 205 | 116 ms |
| Metadata Apply, 40 books | 1,520 | 1,322 | 367 ms |
| Metadata Undo, 40 books | 1,360 | 1,202 | 297 ms |
| Inference analyse, 40 books | 461 | 421 | 174 ms |
| Inference results, 40 books | 165 | 125 | 95 ms |

Fewer SQL statements do not guarantee a faster individual run: inference analysis/results took 174/95 ms versus 175/92 ms previously. Permission checks, transactions and duplicate index updates still contribute work. The unchanged 40-book scan took 277 ms/248 statements versus 246 ms/245 statements previously; bounded enumeration adds a few queries while improving memory.

With 150 lists/6,000 entries, list navigation took 3.7 ms/2 statements, membership 4.5 ms/3 statements, and a 40-book list page 190 ms/54 statements. Maintenance processed its bounded author backlog in 1.45 s/3,812 statements, with 24 MiB peak allocation. The idle scheduled dispatcher took 0.74 ms/one indexed query; this is not the duration of a scheduled full scan.

### Compatibility and regression

The frozen candidate upgraded from 0.1.0-beta.1 and passed with the **40 English Gutenberg books** on each version. See [compatibility aggregates and candidate hash](compatibility-aggregates.json).

| Nextcloud | Main browser suite | Additional checks | Instance removed |
| --- | ---: | --- | --- |
| 33.0.9 | 35/35 passed | Passed | Yes |
| 34.0.4 | 35/35 passed | Passed | Yes |
| 35.0.0 | 35/35 passed | Passed | Yes |

This is **105 browser executions**, with no skipped/unexpected results. Each version also passed 45 cache/paging/snapshot/streaming assertions, 8 paged-scan assertions, 36 scheduling assertions plus cleanup, list integration, and explicit inference Apply/Undo and scheduled-scan browser workflows. The existing folder-picker test allows one exact Nextcloud core “No nodes selected” cancellation signal after Escape; it verifies the picker closes without changing the path. It does not allow arbitrary page errors.

Developer NC34 passed Chromium/Firefox cursor navigation, 100-card catalogue checks, selection actions and mobile layout; only 18 covers near the viewport were requested initially in each engine. Administrator checks verified non-admin 403, missing-CSRF 412 and invalid-budget 422, with settings restored afterward. Screenshots were inspected for readable controls/layout.

The local gate passed **1,041 Python tests**, **514 frontend tests across 33 files**, PHP runtime checks, **518 parser parity cases**, translation/build checks and Markdown links. All **322 deployed functional/source/asset files** matched the workspace.

### Large-root scans

The profiled 120-second run processed **3,434 publications**, peaking at **34 MiB**, versus **670 MiB** in the earlier alpha.22 profiled run. Before streaming extraction, the intermediate paged implementation still reached 567 MiB profiled/301 MiB unprofiled; controlled large-file tests confirmed the remaining whole-publication buffers. The final run had zero root traversal errors and was intentionally cancelled without a missing-file sweep. See [scan aggregates](scan-aggregates.json).

The unprofiled follow-up also peaked at **34 MiB**, processing **4,156 publications** in 120 seconds with zero root traversal errors. See [unprofiled aggregates](unprofiled-scan-aggregates.json). It recorded **six metadata warnings: five unsupported archives and one author validation failure**. The latter is an isolated metadata-refresh failure (`invalid_authors`), not a traversal failure; exceptional embedded author values need field-level handling/review. See [warning aggregates](metadata-warning-aggregates.json). These are partial scans of root 64 in the 84,261-book developer library; neither proves full-root completion or a successful full-library scheduled run. Enumeration order, derived-index state, warmed file/database caches and the processed subset changed, so scan throughput is diagnostic, not a controlled speedup. The profiled run issued 77,339 SQL statements/74.28 s of SQL time; permission/file checks and metadata refresh transactions remain substantial.

SQL totals cover every logged statement. Per-INSERT figures in the scan export sum only the retained 30 slow SQL shapes and are **lower bounds**, marked `insertCountsComplete: false`. Unprofiled exports have `sqlProfilingEnabled: false`; their zero SQL counters mean profiling is disabled, not that the scan makes no queries. The scheduled service test exposed SQLite expression type affinity in stale-worker recovery. Binding the cutoff as an integer preserves a fresh worker while fencing an abandoned one; the test runner now requires explicit service pass output, since Nextcloud's exception handler can otherwise return exit code zero.

Raw screenshots, request URLs and developer metadata remain under `/tmp/library-alpha23-*`. Repository exports contain only allowlisted numeric/boolean aggregates and app-source/package identifiers.

## Remaining measurements and findings

- Full-root completion and concurrent-user capacity are not established by these bounded runs.
- Test databases were SQLite for NC33–35 and MariaDB on developer NC34. PostgreSQL-specific SQL branches have not been exercised on a live PostgreSQL server.
- Catalogue main-thread work, metadata/duplicate transaction reads and exceptional author import handling remain follow-ups. The unchanged fixture scan did not become faster in its final single sample.
- MariaDB retains its 128 MiB buffer pool on a six-CPU/~31 GiB shared host; server tuning was not changed.

## Cleanup and deployment

Alpha.23 remains deployed on developer NC34. [Deployment verification](deployment-aggregates.json) matched all 322 application source/asset files. [Cleanup verification](cleanup-aggregates.json) confirms the 84,261-book count, zero temporary fixture accounts/benchmark tokens/active scans, and no profiler secrets, hooks or web helpers. The original Application source hash was restored. Fixture source hashes/metadata were unchanged and owned fixture accounts deleted. Administrator cache settings returned to 128 MiB/168 hours.

## Repeat the checks

See the [benchmark runbook](../../performance-benchmarking.md):

```bash
EVIDENCE_DIR=/tmp/library-perf-api npm run perf:full
EVIDENCE_DIR=/tmp/library-perf-browser npm run perf:browser
EVIDENCE_DIR=/tmp/library-perf-processes npm run perf:processes
EVIDENCE_DIR=/tmp/library-perf-jobs npm run perf:jobs
EVIDENCE_DIR=/tmp/library-perf-scan SCAN_BUDGET_SECONDS=120 npm run perf:scan -- 64
# Repeat memory measurements without SQL profiling overhead.
EVIDENCE_DIR=/tmp/library-perf-memory SKIP_SQL=1 SCAN_BUDGET_SECONDS=120 npm run perf:scan -- 64
EVIDENCE_DIR=/tmp/library-perf-matrix npm run perf:matrix
EVIDENCE_DIR=/tmp/library-perf-admin node scripts/smoke-thumbnail-settings.mjs
```

Run measurements sequentially under comparable load. The matrix uses loopback-only disposable instances, the frozen beta upgrade and the 40 English Gutenberg books. It runs Chromium/Firefox/mobile journeys, cache/paging/scheduling/list service checks, and explicit inference Apply/Undo/scheduling smoke scripts, then deletes each instance. Provide fixture/beta archives through the documented environment variables on another host.
