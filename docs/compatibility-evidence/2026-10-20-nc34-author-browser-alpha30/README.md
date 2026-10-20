# Authors, Series and Genres browsing — alpha.30

Status: **signed 0.3.0-alpha.30 deployed and verified on developer NC34**, 20 October 2026. Ready for owner testing; this is not the App Store certification matrix.

## Changes

Authors, Series and Genres share displayed-name sorting, compact rows, up to three cover/title previews, automatic three-letter search and retained directory navigation context. Genres now supports paging beyond 50 entries. Typeahead requests keep their lightweight response. One additive index supports active-author display-name ordering; original metadata and author identities are unchanged.

The shared browser uses 50-entry pages, stable ID tie-breakers, lazy cached covers, request cancellation and stale-response protection. Preview lookup is a single bounded batch, with at most 150 books per page. Genre creation stays available in a collapsed disclosure above its directory.

## Verification

- [PR #124](https://github.com/utrost/Library/pull/124), merged as `f8efea26d999aaa0690d08673b28ffe5b0a1c1a0`.
- [CI](https://github.com/utrost/Library/actions/runs/39402942920): source and GUI jobs passed; **47 Playwright journeys** passed across Chromium, Firefox and mobile. Expanded directory smoke passed afterward on Chromium and Firefox.
- [Security](https://github.com/utrost/Library/actions/runs/39402942441): CodeQL, secret scanning and static gates passed.
- Local checks: **1,045 Python checks**, PHP runtime suites, **518 parser vectors**, **558 Vitest tests across 40 files**, package/signature/provenance audits, plus six focused Playwright journeys.
- SQL fixtures verify 50+5 pagination, reverse/surname ordering, distinct three-book limits, duplicate credits, inactive genre links, ownership isolation and invalid sorts.
- Desktop/mobile screenshots inspected, including long unbroken names, empty fields, loaded/fallback covers and light/dark themes. Links, profile entry, sorting, search, cover/title entry and restored Back navigation passed.
- Installed NC34 smoke repeated those navigation paths for all three directories: **zero page errors, console errors or attempted book writes**. A second settled-page capture explicitly verified loaded cover images. Temporary app passwords were removed.
- Existing Heinlein search regression passed on desktop/mobile: content search **276 results**, Author filter **190 results**, no book mutations or browser errors. Browser interaction time was 2.2–2.6 seconds on this run, including debounce and rendering.

The first expanded local smoke hit a Nextcloud core chunk load error while the harness navigated away immediately after the editor URL changed. The harness now waits for loading to settle before another navigation; errors remain fatal. Final local repeats and hosted CI passed.

## Measurements

Developer NC34, **107,717 books**. Six serial calls per service case: first call and median of five warm calls. Database caches were not forcibly flushed; “first” is a first-process/request observation, not a guaranteed cold-storage benchmark. Browser timings end when rows are ready, before every lazy cover loads. Shared-host timing varies.

| Case | Alpha.29 warm service | Alpha.30 first / warm service | SQL queries after | Response after |
| --- | ---: | ---: | ---: | ---: |
| Authors first page | 23 ms | 232 / 29 ms | 3 | 15,452 B |
| Authors page two | — | 78 / 27 ms | 3 | 15,410 B |
| Authors reverse order | — | 132 / 27 ms | 3 | 17,845 B |
| Author prefix search | 75 ms | 961 / 75 ms | 3 | 15,642 B |
| Unused authors | 2,262 ms | 2,584 / 2,280 ms | 3 | 5,604 B |
| Series first page | 23 ms | 279 / 28 ms | 3 | 18,615 B |
| Genres first page | 0.2 ms | 4 / 0.7 ms | 2 | 196 B |

Alpha.29 defaults to surname order and has no previews; alpha.30 defaults to displayed-name order with previews. The author page includes 65 preview books in this sample; reverse order includes 62. Series includes 103, Genres one. Typeahead callers omit previews and retain the lightweight behavior. The extra preview data adds one bounded SQL query, not a query per row. `EXPLAIN` confirms use of `library_authors_display` after migration; the same candidate without that index took about 211 ms warm for its first author page.

Browser first / warm median: **1,041 / 855 ms before**, **1,326 / 979 ms after**. A second baseline warm median was 1,101 ms; these results indicate similar overall latency with more content, not a demonstrated browser speedup. The after-run warm maximum was 2,529 ms. A settled-cover repeat measured 1,060 ms first / 930 ms warm median, with a 1,014 ms warm maximum. Series and Genres initial mobile row readiness was 948 ms and 858 ms respectively.

**Remaining limitation:** the existing unused-author filter still takes about 2.3 seconds. Its count/filter work needs a separate optimization. The frontend package is also close to its unchanged limit: **1,319,952 / 1,320,000 bytes**. Further UI expansion should first recover bundle headroom.

[Aggregate measurements and served asset hashes](measurements.json) contain no account names, book titles, paths or credentials. Authenticated and disposable-fixture screenshots were inspected and remain local; generated screenshots are excluded from repository history.

## Deployment

- Nextcloud **34.0.3.2**, Library **0.3.0-alpha.30**.
- Signed archive: `library-0.3.0-alpha.30.tar.gz`.
- SHA-256: `9fa80e894333108c4b24b81aea019f70c3a804d6e9aa4a15c52cdb3109abf131`.
- Rollback app directory in the developer container: `/tmp/library-before-alpha30-20261020T095900Z`.
- App integrity clean; maintenance mode off; no pending database upgrade.
- Catalogue **107,717 before and after**. The additive migration creates `library_authors_display`; no author/book rows are rewritten. The index can remain if rolling back the app.
- HTTP-served versioned JavaScript and CSS SHA-256 hashes match the signed archive exactly; hashes are in the measurements file.

The final documentation commit follows the code merge and deployment. Package provenance identifies the merged application commit above; documentation is not part of the deployed runtime package.

## Repeat and human testing

Use handbook **H03-21** (Authors) and **H03-22** (Series/Genres). Also check profile actions and genre creation after browsing. No bulk cleanup or automatic merging of imported names was performed.

Repeat service probes by copying `scripts/performance/author-directory.php`, `related-directories.php` and `sql-profiler.php` to the same temporary directory inside the developer container, then running PHP as `www-data` with the owned user ID. These probes only read catalogue data.

```sh
NC_USER=<owned-user> SMOKE_AUTHORS=1 node scripts/performance/author-browser.mjs
MOBILE=1 NC_USER=<owned-user> node scripts/performance/search-browser.mjs
```

Browser probes create an ephemeral app password and delete it in `finally`; book writes are blocked. Normal duplicate-suggestion lookup may refresh its derived cache. Run serially for comparable timing. Use `scripts/smoke-fresh-install-mixed.sh` for the disposable fixture/GUI suite; its fixture accounts are isolated and removed afterward.

Exact signed NC33–35 fresh/upgrade certification and owner acceptance remain separate App Store gates.
