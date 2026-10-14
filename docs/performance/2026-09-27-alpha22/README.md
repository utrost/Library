# Performance improvements — alpha.22

Developer deployment: Nextcloud 34.0.3, Library 0.2.0-alpha.22, 84,261 books. Compare with the [alpha.21 audit](../2026-09-27-alpha21/README.md). These are single-user development measurements, not a production concurrency guarantee.

## What changed

- Maintenance and the scheduler atomically fail running jobs whose heartbeat stopped for 15 minutes. Last counters and history remain. Fresh workers remain active; queued jobs are not expired merely because Cron is delayed. A failed/cancelled/completed worker cannot claim or resurrect the job through a late heartbeat.
- Author/facet indexing inserts full canonical names before shared word keys, deduplicates keys, and respects database collation. Multiple authors sharing “Robert” or “R” no longer fail the transaction. Original author order and text remain intact.
- Search grams are inserted in chunks of 200 rows (600 bound parameters). Catalogue identifiers are fetched in one batch scoped to the user. Every gram and identifier retains its previous semantics.
- Catalogue joins now constrain the file owner explicitly, allowing the user/status index to serve the missing-books query.
- Catalogue hydration loads shelves/formats and fixed supported statuses/types. Publication, author and year choices use existing remote suggestions. Expensive review counts load asynchronously only when Review is opened, once per mounted app; pending counts remain marked unknown. Explicit discovery pages retain their grouping behavior.
- Title pagination uses title/ID anchors for Next/Previous, including backward traversal and tied titles. Cursors are bounded and bound to the user, filters and page size. Invalid/changed anchors fall back to offset navigation; direct page-number URLs and other sort modes retain the existing offset path. Data changing between pages can shift positions/count labels.
- Covers use private appdata thumbnails generated on demand, at most 360×520 and 100 KiB. Oversized or malformed input is rejected before decoding; source rasters are limited to 16 million pixels. Nextcloud previews, embedded/archive fallback covers and manual covers use the same bounds. Original publication files are not resized or rewritten.
- Disk cache keys include the live file ETag and manual cover content. The catalogue uses an additional small `cover_revision` column plus indexed file ETag to version browser URLs, so replacing/reverting covers invalidates browser cache without reading image blobs into every catalogue row. The schema migration adds only that nullable column, without a library backfill.
- Cache entries expire after seven days (placeholders after five minutes), are overwritten on replacement, and are evicted by oldest write time within fixed shards: at most 16 entries × 256 shards per account. At the byte ceiling, encoded data could occupy roughly 535 MiB per account plus filesystem metadata; actual small thumbnails use less. Expired unused entries are evicted/replaced when the shard is written. Account deletion removes its shards. This is a write-age cache, not a global storage quota or access-based LRU.
- Every cover request checks live file access before using cache/manual cover data. The cache is private; browser caching remains private. Cache failures fall back to generation. Exclusive shard locks bound simultaneous cache writes. A first cache miss can still cost extraction/resize time.
- Each catalogue cover owns its own reactive loading/error state, avoiding catalogue-wide updates for every image event. IntersectionObserver requests covers within 240 pixels of the viewport; unsupported browsers use native lazy loading. Images decode asynchronously. Selection, error fallback and reduced-motion styling remain.

## Measured results

HTTP medians use three unprofiled requests; SQL counts come from a separate profiled request. Browser values cover the observation window, not a full cold startup or concurrency load test.

| Measurement | Alpha.21 | Alpha.22 |
| --- | ---: | ---: |
| Catalogue 100 SQL statements | 105 | 6 |
| Catalogue auxiliary hydration | 30,911 ms | 624 ms |
| Empty missing-books view | 23,066 ms | 19 ms |
| First catalogue browser transfer | 16.52 MiB | 2.90 MiB |
| First catalogue browser long tasks | 4,836 ms | 788 ms |
| Repeat catalogue browser transfer | 8.31 MiB | 0.05 MiB |
| Apply metadata to 40 books, SQL statements | 3,287 | 1,520 |
| Undo metadata on 40 books, SQL statements | 3,127 | 1,360 |

The first catalogue API took 153 ms; a deep title cursor request took 159 ms. Obtaining its anchor through the old page-399 offset URL took 10.52 seconds outside the cursor measurement. Normal Next navigation receives its anchor from the preceding page. Review counts took 725 ms and are requested only when that surface opens. The 100-book duplicate lookup took 198 ms versus 112 ms in the earlier run; this measurement does not establish an improvement for that endpoint. Lists with 150 lists/6,000 entries required two SQL statements and 3.5 ms for the service index.

Cached cover responses reduced the measured PDF cover from 196 KB to 34 KB and CBZ cover from 469 KB to 88 KB. Originals remain intact. The first catalogue became visible in 920 ms; the principal browser improvement is less transfer and work after rendering.

Full aggregate tables: [HTTP and SQL](http-results.md), [browser surfaces](browser-results.md), [standard processes](process-aggregates.json), [scan](scan-aggregates.json).

### Bounded large-root scan and remaining work

The 120-second scan processed 1,295 books: 386 fingerprint skips and 909 metadata refreshes. All refreshes completed without the author-key collision. Four unsupported-metadata warnings remain. The run stopped at the time budget; it was not a complete 84k scan. Search-gram inserts used 1,255 statements/8.69 seconds, compared with 50,231 statements/59.31 seconds in the earlier capped scan. The earlier run refreshed 388 books and had different cache/derived-index state, so these are not controlled throughput comparisons.

Peak PHP memory was **670 MiB**, above the earlier 530 MiB with less traversal. Total scan SQL was 64,659 statements/72.62 seconds; facet inserts alone used 13,860 statements/16.25 seconds. Next priorities are bounding the scanner working set, batching facet writes and repeated metadata/access reads while preserving permissions, and measuring an appropriate database buffer pool. Direct offset jumps remain slow. This slice has not rerun NC33/35.

Maintenance completed its 200-author batch in 1.58 seconds. The scheduler's no-due-work check took about 1 ms; replacement of a stale worker was separately verified on a disposable account. Final cleanup confirmed 84,261 developer books, no active developer scan, no fixture accounts/tokens/profiler helpers, and the original Application source hash.

## Verification

The full local gate passed: 1,041 Python checks, PHP runtime checks, parser parity and 514 frontend tests. Live isolated checks passed 28 performance assertions and 36 scheduled-scan assertions. Chromium and Firefox passed forward/backward navigation, selection and mobile layout checks; each requested 18 nearby covers rather than all 100. Aggregate results are in [verification](verification-aggregates.json) and [cleanup verification](cleanup-verification.json). Raw logs and screenshots remain locally under `/tmp/library-alpha22-*`; automatic approval review rejected copying them into the repository because they may contain private book information. Only allowlisted aggregate measurements are published here. The GUI test reads real books and toggles selection without changing their metadata or lists. Isolated accounts test file changes/deletion, user corrections, source hashes, shared author prefixes, batched grams, tied-title forward/backward cursors, thumbnail replacement, eviction and deleted-source denial; accounts are cleaned up afterwards.

This slice does not rerun disposable NC33/35, complete an 84k scan, tune the database buffer pool, optimize every snapshot/access lookup, or claim that direct page 400 offset navigation became fast. The schema and SQL use portable Nextcloud APIs; compatibility remains subject to the next release matrix.

## Repeating the measurements

See [the benchmark runbook](../../performance-benchmarking.md). `npm run perf:quick` remains the cheap API/SQL baseline; `perf:browser` measures screens and transfers; `perf:processes` covers disposable mutations. `npm run perf:full` now includes a real deep cursor request. Its anchor is fetched using page 399 outside the cursor timing and retained separately: normal sequential navigation obtains this anchor from the preceding page.

`node scripts/smoke-performance-fixes.mjs` verifies real read-only Chromium/Firefox cursor navigation, nearby cover loading, selection and mobile layout. `scripts/deploy-developer-php.mjs` accepts explicit PHP files, keeps rollback copies, checks hashes and invalidates the affected HTTP opcodes. Both deployment and the SQL profiler use a temporary secret-protected invalidation helper under the existing `ocs-provider` path, then remove it; no Apache configuration is changed. This handles the developer instance's 60-second opcode revalidation interval. Interrupted runs require the cleanup steps in the runbook.
