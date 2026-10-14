# Alpha.24: duplicate SQL and catalogue rendering

Deployed `0.2.0-alpha.24` to the existing Nextcloud **34.0.3** developer instance on 27 September 2026. The real catalogue contains **84,261 publications**. This slice addresses manual duplicate processing and repeated translation/sanitization in the catalogue.

## Measurements

| Operation | Alpha.23 before | Alpha.24 after |
| --- | ---: | ---: |
| Metadata duplicate check, 40-book fixture | 2,717 ms / 5,046 SQL queries | 1,698 ms / 2,455 queries |
| Content duplicate check, same fixture | 3,359 ms / 6,601 queries | 2,298 ms / 3,313 queries |
| Median sampled Library CPU, three 100-card visits | 204 ms | 110 ms |
| Median total long-task time, same visits | 670 ms | 570 ms |
| Catalogue first visible cards, standard browser run | 918 ms | 893 ms |
| Catalogue repeat visible cards, standard browser run | 733 ms | 693 ms |
| Repeat long-task time, standard browser run | 656 ms | 548 ms |
| Catalogue 100-card API, standard run | 153 ms | 154 ms |

Duplicate timings include SQL profiling and result polling. The **40 duplicate fixture books are synthetic**, including deliberately similar records; they are separate from the 40 English Gutenberg books used in the earlier compatibility matrix. Duplicate throughput depends on candidate groups and content sizes, so these timings cannot be extrapolated to a full 84k-library scan. The browser tests use the real 84k catalogue, loading 100 cards.

The CPU profiler uses three successive Chromium visits, a 500 µs sample interval, and 1.8 seconds of observation after cards appear. Before/after Library CPU samples were 214/204/196 ms and 136/110/73 ms; total long tasks were 829/670/356 ms and 684/570/271 ms. Variation is substantial on this shared host. Library CPU is sampled self time, including bundled dependencies. Total long tasks include Nextcloud and browser work. The standard first-visit long-task total barely changed (781 → 780 ms); initial loading still deserves attention. These observations establish a useful reduction in repeated app work, not a concurrent-user capacity or latency guarantee.

## Changes

- Commit duplicate progress in batches of at most ten units, stopping new units after 200 ms or the existing six-second worker budget. An in-progress bounded content read may exceed the 200 ms target before commit.
- Read each frozen comparison group with one bounded query, retaining at most 50 records per batch; insert generated match keys together.
- Retain account/job locking, ownership filters, fresh pre/post content-read revision checks, byte/deadline limits, and fresh checks when a user saves a decision.
- Reuse Nextcloud's already translated and sanitized static labels in a bounded 256-entry cache. Language/locale changes clear it. Dynamic substitutions, options and pluralization keep their native translation paths.
- Add a reusable CPU profiler and aggregate export. Correct CPU attribution for assets served under `/custom_apps/library/` as well as `/apps/library/`.

No database tuning was applied in this slice. Summary aggregation, scan SQL volume and database buffer-pool experiments remain separate follow-ups.

## Verification

- Full source gate: 1,041 Python tests, 518 frontend tests across 34 files, 518 PHP/JS parser parity vectors, PHP runtime checks, release asset/budget checks and documentation links.
- Real Nextcloud duplicate service integration: **28 assertions passed**, including ownership, cancellation, exact-content matches, PDF alternatives, reversed authors, ISBN, edition flags, false-positive exclusion, pagination, saved decisions, stale decision rejection, quotas and expiry cleanup.
- Playwright duplicate checks: **Chromium and Firefox passed**, each finding 23 comparisons in the 14-book fixture. Tested real background jobs, cancellation, reopened scans, paging, preferred/keep/dismiss/reset decisions, reload persistence, mobile layout and CSRF rejection. Fixture files and metadata remained unchanged.
- Playwright real-catalogue checks: **Chromium and Firefox passed** cursor navigation, visible selection actions, viewport cover loading (18 requested covers), mobile width and zero page errors.
- Screenshots were visually reviewed for catalogue and mobile duplicate layout. Private screenshots and raw profiles remain in `/tmp`.
- A stale generic checkbox locator in the duplicate smoke was fixed to target **Compare file contents**. Disposable accounts now skip Nextcloud's first-run wizard through their own user setting. Both initial harness failures were rerun successfully.
- Final cleanup: 84,261 real books, zero owned fixture accounts, temporary tokens or duplicate jobs. Original application bootstrap hash restored. Nextcloud maintenance mode off and no pending database upgrade. Deployment uses backed-up files and explicit PHP opcode invalidation.

**Scope:** alpha.24 verification is on developer NC34.0.3. The full NC33.0.9 / 34.0.4 / 35.0.0 matrix was last run for [alpha.23](../2026-09-27-alpha23/README.md); it has not been repeated for this slice.

## Reproduce

Run serially from the repository root with Docker and installed Playwright dependencies:

```bash
PATH=/tmp/library-beta-venv/bin:$PATH bash scripts/check.sh
EVIDENCE_DIR=/tmp/library-alpha24-processes node scripts/performance/run-fixture.mjs
EVIDENCE_DIR=/tmp/library-alpha24-cpu node scripts/performance/profile-catalogue.mjs
EVIDENCE_DIR=/tmp/library-alpha24-duplicates node scripts/performance/verify-duplicates.mjs
EVIDENCE_DIR=/tmp/library-alpha24-gui node scripts/smoke-performance-fixes.mjs
EVIDENCE_DIR=/tmp/library-alpha24-browser BROWSER=1 SAMPLES=3 \
  BENCH_CASES=catalogue-100 GUI_CASES=catalogue-first,catalogue-repeat \
  node scripts/performance/run.mjs
```

Use the [benchmark guide](../../performance-benchmarking.md) for targeted runs and safe CPU exports. Preserve raw evidence locally; export only explicit aggregates. Duplicate integration/browser checks use an owned temporary user and delete it afterwards.

Evidence: [before process aggregates](before/process-aggregates.json), [after process aggregates](after/process-aggregates.json), [CPU comparison](after/cpu-comparison.json), [browser aggregates](after/browser-aggregates.json), [HTTP/SQL results](after/http-results.md), [verification](verification.json).
