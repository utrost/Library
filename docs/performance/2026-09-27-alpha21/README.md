# Whole-app performance audit — 27 September 2026

## Conclusion

The first catalogue page and everyday list/metadata actions are fast, but the app has serious large-library bottlenecks and two background-job correctness failures. Do not infer that the whole app is fast from its initial render. No application optimizations were deployed in this audit.

Measured on the existing **Nextcloud 34.0.3 / Library 0.2.0-alpha.21** developer instance: **84,261 books**, 160,154 indexed files, seven enabled roots; the largest root has 77,121 books. This is a single-user, shared-host diagnostic baseline, not a capacity or concurrent-user certification. NC33/35 were not rerun for this audit.

## Findings and next work

| Priority | Finding | Evidence / proposed work |
| --- | --- | --- |
| P0 | Scheduled scans can remain blocked indefinitely | Existing running job 14 last reported progress **14 September, 10:28 UTC**, across container restarts. Daily scheduling is configured but the active-job check will defer it. Add worker heartbeat/lease recovery and review the stale job. It was left unchanged. |
| P0 | Maintenance fails; scan metadata updates also encounter author-facet uniqueness errors | Maintenance failed in **33 ms**, SQLSTATE 23000 on `library_facets_item_unique`. Large scan recorded eight extraction errors; six logged diagnostics explicitly show this collision. Fix author normalization/deduplication and transactional retry behavior before trusting background progress. |
| P1 | Deferred catalogue hydration is very expensive | **30.9 s** median HTTP. SQL accounts for almost all profiled app time. Publication-value grouping alone costs **19.7 s**; years, workflow values and summary counts add seconds. Fetch only needed facets/counts; cache or maintain suitable summaries with invalidation. |
| P1 | Empty missing-books view is expensive | **23.1 s** for zero results. The plan scans title-ordered items and joins files before rejection. Start with indexed missing-file candidates; preserve permissions and root semantics. |
| P1 | Deep pagination degrades badly | Page 400 takes **10.3 s** versus **163 ms** for page 1. Wide joined SELECT costs 9.76 s. Prototype cursor pagination takes **6–20 ms**; implement stable title/ID cursors and appropriate navigation semantics. |
| P1 | Metadata refresh emits excessive individual writes | Capped large-root scan: **394 books in 120.7 s**, **70,956 SQL statements**, including **50,231 search-gram INSERTs** costing 59.3 s. Batch index writes and avoid unchanged index rebuilds. |
| P1 | Catalogue has a large download/render burden | First browser observation transfers **16.52 MiB**, with **4.84 s** in main-thread long tasks. Largest cover is approximately 3.84 MiB. Bound fallback thumbnail dimensions/bytes; prioritize visible covers and profile rendering separately. |
| P2 | Per-book SQL remains common | Catalogue 100 has **105 SQL statements**, including 100 identifier lookups. Inference sample 40 has **212**; real list page 25 has **81** including file/access lookups. Batch lookups without weakening live permission checks. |
| P2 | Database working set exceeds buffer pool | Search grams occupy **2,021 MiB** alone; InnoDB buffer pool is **128 MiB**. Review host/container memory budgets and benchmark pool changes separately after query/write fixes. |

### Healthy paths

- Opportunistic duplicate lookup: **23 ms** for one book, **112 ms** for 100 books, with the existing ready index.
- Real list index **16 ms HTTP**; 150 synthetic lists containing 6,000 entries list in **3.8 ms service time**, two SQL statements.
- Apply metadata to 40 synthetic books **562 ms**; Undo **526 ms**.
- Repeat unchanged scan of 40 real Gutenberg books **227 ms**, 40 fingerprint skips, no metadata extraction.
- Typical first-page catalogue request **163 ms**, search `science` **418 ms**.

[Complete HTTP/SQL table](http-results.md) · [Complete process table](process-results.md)

## Browser observations

Chromium at 1440×1000 with real session cookies. No request interception, which would disable browser caching. One navigation per surface, with a repeated catalogue navigation; screenshots and resource/paint/long-task details are in [browser](browser/).

| Surface | First visible surface ms | TTFB ms | Observed transfer MiB | Long-task total ms |
| --- | ---: | ---: | ---: | ---: |
| Catalogue, first | 923 | 181 | 16.52 | 4,836 |
| Catalogue, repeat | 817 | 257 | 8.31 | 5,782 |
| Home | 1,118 | 938 | 0.03 | 255 |
| Shelves | 1,147 | 981 | 0.00 | 78 |
| Lists | 190 | 35 | 0.00 | 132 |
| Extract metadata | 195 | 37 | 0.01 | 83 |
| Review | 218 | 53 | 0.00 | 97 |
| Settings | 434 | 374 | 0.04 | 205 |

**Visible surface is not fully interactive readiness.** Catalogue observation occurred at 8.1/8.8 seconds because work continued after the first cards appeared. The screenshot shows the catalogue and duplicate badges rendering correctly; timings reveal work that a static screenshot misses. The long-task observation attributes total browser blocking, not a proven breakdown between Vue work, layout and image processing.

Completed cover downloads were cached: the repeated observation's image transfer came from different/not-previously-completed images, not repeat downloads of the completed first set. Cover headers use private caching (3,600 seconds for real covers; 300 for placeholders). Representative cover requests: PDF preview 24 ms / 196 kB; CBZ first image 65 ms / 469 kB; selected EPUB returned a tiny placeholder, so its timing does **not** measure EPUB extraction. Earlier Home/Shelves runs were slower (about 4/2.4 s) with preceding hydration activity; this variability merits isolated follow-up.

Pending-request snapshots can retain cancelled requests across navigation; their ages alone do not prove continued server work. The separate 30.9-second hydration HTTP benchmark establishes that endpoint's cost.

## Scans, jobs and normal processes

| Scan | Elapsed | Books processed | SQL count / execution time | PHP peak |
| --- | ---: | ---: | ---: | ---: |
| Gutenberg root 61 refresh | 7.40 s | 40 | 5,099 / 6.25 s | 26 MiB |
| Same root, unchanged repeat | 0.227 s | 40 | 252 / 0.107 s | 24 MiB |
| Large root 64, budget capped | 120.7 s | 394 | 70,956 / 81.61 s | 530 MiB |

The first Gutenberg refresh briefly overlapped a SQL diagnostic probe; treat its elapsed time as indicative. The unchanged repeat and capped large-root run were separate measurements. Large-root scan traversed 2,298 units, performed 394 metadata extractions and 388 item refreshes, and was cooperatively cancelled at its 120-second budget. Extraction consumed 27.2 s; item refresh 78.6 s. **This was not a completed 84k scan, and no full-scan completion estimate is claimed.** PHP peaks include bootstrap and profiler overhead.

The real scans refreshed derived catalogue/search data; they did not write book contents. They were invoked directly with real scan-job records, so these timings exclude queue waiting and normal worker progress-write overhead. Cancellation metrics are in the JSON result; the cancelled job record may not contain its partial counters. Diagnostic job 56 was cancelled, repeat job 57 completed, old user job 14 was untouched.

Maintenance failed on the author-facet collision. The scheduled dispatcher took 1.5 ms with nothing due; that is **not** evidence of successful scheduled full-library scanning. Daily scheduling's first due time is 28 September 08:53:54 UTC, but job 14 blocks it unless recovered.

A disposable 40-book account covered list creation/addition/notes/reordering, metadata prepare/Apply/Undo, completed whole-folder inference, and metadata/content-hash duplicate discovery. The latter took 2.23/3.42 s on deliberately candidate-dense synthetic data; do not extrapolate to the real 84k library. Source fixture hashes and metadata restoration were checked; the account was deleted. Large list setup (150 × 40 entries) was outside measured actions.

## SQL and infrastructure

SQL profiling aggregates normalized statements and records EXPLAIN plans for slow SELECTs. Bound parameters are not saved. Driver execution times exclude some result materialization; profiling adds overhead. HTTP medians are from separate unprofiled requests, three sequential samples each; their reported p95 is merely the maximum of three, not a reliable population percentile.

Important plans and hotspots:

- Deep page: title index scans an estimated 73k items with file/root joins and OFFSET 39,900. Removing wide columns alone still took seconds in a read-only prototype.
- Missing view: title-ordered item traversal rejects rows after joins. Indexed missing-file candidate lookup took roughly 1–16 ms for zero rows, but that prototype is only the candidate stage.
- Hydration: publication grouping 19.7 s; years 2.7 s; workflow values 2.1 s; summary counts 1.7 s; needs-metadata count 1.4 s. Several plans use temporary sorting or broad scans.
- Search indexing: individual INSERTs dominate refreshed scans. Also inspect facet uniqueness before optimizing batch failure/retry semantics.
- Cursor prototype returned 100 full rows in 20/7/6 ms. Cursor acquisition was excluded (normally supplied by the preceding page); stable title/ID ordering differs from the current title-only ordering. This is an experiment, not a deployed optimization or arbitrary-page-jump solution.

MariaDB 11.8.9, performance schema and global slow-query log off; neither setting was changed. Allocated table sizes include indexes: search grams 2,021 MiB (15.35 million rows), items 420 MiB, facets 417 MiB, duplicate terms 119 MiB, files 83 MiB, duplicate index 42 MiB. Six host CPUs, approximately 31 GiB RAM, shared with other containers. Brief sampling showed about 12% I/O wait and 43 MB/s reads. Swap was nearly occupied, but swap-in activity was small and memory PSI averages were zero; this does not establish active memory thrashing.

## Coverage, cleanup and reproducibility

[Runbook](../../performance-benchmarking.md) describes quick, browser, process, job, scan and full modes. Clean quick run: approximately **35 seconds** for 27 HTTP cases plus separate SQL samples and inventory. Later cover cases add a small cost. All final quick/browser requests returned 200; all eight final GUI surfaces appeared. Maintenance failure remains an audit finding, not a passing test.

Earlier harness issues (missing POST cookie jar, incorrect inference/review URLs and shelf selector) were corrected. Their results are excluded; only three valid expensive GET cases are retained from that early run, with provenance. This audit does not cover multi-user load, every file format, remote-storage latency, a completed large-library hash run, initial duplicate-index rebuild, every queue worker's lifecycle or a fresh NC33/35 matrix.

Temporary HTTP instrumentation was removed and original deployed Application restored. Temporary credentials and fixture users were cleaned up; see `cleanup-verification.json`. No database configuration or production optimization was deployed. Evidence contains sanitized SQL shapes, timings, plans and developer screenshots, not credentials or exported book contents. Screenshots and resource IDs still expose developer-library information; review before publishing externally.
