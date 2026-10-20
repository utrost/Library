# NC34 catalogue search regression — alpha.29

## Diagnosis and fix

On the 107,717-book developer catalogue, the partial canonical-author subquery combined with the content-search candidate set caused MariaDB to scan the catalogue title index. The measured results SELECT alone took 8.50 seconds. Author suggestions had a similar joined-name predicate (3.75 seconds). The Creator filter required a complete name, so `Heinlein` returned no books.

Resolve selective canonical author names and linked book IDs before the catalogue query. Small candidate sets use primary-key membership; over 500 authors or books retains an unbounded SQL fallback. Renames remain immediately searchable. Preserve existing exact creator filters; unmatched typed names fall back to partial canonical display/sort-name searches. Visible catalogue labels now say Author. Integration checks also exposed and fixed an incorrectly quoted SQL language expression. No schema change or reindex is needed.

## Measurements

Three read-only CLI samples against the same database, page size 100. Result count and first-page ID fingerprint remain identical for the content search. Cold runs include cache effects; these are targeted measurements, not a universal latency guarantee.

| Case | Before | Candidate | Results |
| --- | --- | --- | --- |
| Content `Heinlein` | 8.15–10.08 s initial reproduction | 0.49 s repeated; first candidate run 1.13 s | 276 unchanged |
| Author `Heinlein` | 0 results in 4–13 ms | 0.41–0.43 s | 190 |
| Author suggestions | 3.76 s | 0.20–0.21 s | 10 |

A separate paired probe recorded identical content fingerprints before/after, with candidate warm runs 490/491 ms. Installed alpha.28 browser reproduction took 19.9 seconds for content search and returned zero author-filter results (122 ms). The shared host was also running other probes; use this as a regression reproduction, not an isolated latency benchmark. No browser errors occurred. Raw private evidence is kept under `/tmp/library-search-*.jsonl`; no book names, paths, credentials or raw profiles are committed.

## Repeat

```sh
docker cp scripts/performance/sql-profiler.php nextcloud:/tmp/library-performance-sql-profiler.php
docker cp scripts/performance/search.php nextcloud:/tmp/library-search-probe.php
docker exec -u www-data nextcloud php /tmp/library-search-probe.php > /tmp/library-search-results.jsonl
MOBILE=1 node scripts/performance/search-browser.mjs
```

Use `LIBRARY_BENCHMARK_USER` / `LIBRARY_SEARCH_QUERY` in the container for a different account/query. Browser overrides: `NC_CONTAINER`, `NC_URL`, `NC_USER`, `SEARCH_QUERY`. Browser credentials are temporary and removed in finally; unexpected Library writes are blocked. The existing duplicate-suggestion lookup POST is allowed, as during ordinary browsing.

## Verification and deployment

Candidate MariaDB integration passed partial display/sort-name matches, case-insensitive names, minimum length, literal wildcard handling, combined language filters and account isolation. A rolled-back isolated fixture passed 501 matching authors, 503 linked books and final-page pagination without truncation. Developer books were not edited.

Local checks passed: 1,045 Python source contracts, 552 frontend tests in 39 files, PHP runtime suites, 518 parser vectors, translation inventory and production build. Packaged browser verification, merge, signing and installed smoke are pending. Alpha.28 remains deployed until those gates pass. Exact-package NC33–35 App Store certification and owner acceptance remain separate gates.
