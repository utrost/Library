# Repeatable performance benchmarks

Baseline: [27 September 2026, alpha.21, 84,261 books](performance/2026-09-27-alpha21/README.md). [Alpha.22 fixes and measurements](performance/2026-09-27-alpha22/README.md) provide the next comparison. [Alpha.23 implementation and verification](performance/2026-09-27-alpha23/README.md) covers bounded scans, additional batching, direct page navigation and administrator cache limits.

## Everyday loop

Run from the repository root on the developer host with Docker access, installed npm dependencies and Playwright Chromium. The current profiler adapter targets **NC34 / Doctrine DBAL3** and the app's current empty bootstrap hook. It deliberately refuses an unknown hook. This is development instrumentation; don't install it as part of a release.

```bash
# Usually ~35–40 seconds; API timings, SQL shapes/plans, inventory.
EVIDENCE_DIR=/tmp/library-perf-before npm run perf:quick

# Change/deploy one slice, then rerun under comparable conditions.
EVIDENCE_DIR=/tmp/library-perf-after npm run perf:quick
npm run perf:compare -- /tmp/library-perf-before/results.json /tmp/library-perf-after/results.json

# Real browser surfaces, resource sizes, paint/long tasks, screenshots.
EVIDENCE_DIR=/tmp/library-perf-browser npm run perf:browser

# Lists, Apply/Undo, whole-folder inference, manual duplicates, synthetic scale.
EVIDENCE_DIR=/tmp/library-perf-processes npm run perf:processes
```

The comparison prints matching HTTP medians; it is not a statistical regression gate. Check errors/status and absolute costs, not percentage changes alone. `perf:quick` and browser modes exit nonzero for HTTP failures, missing visible GUI surfaces or cleanup errors. They do not implement performance budgets. One browser navigation is diagnostic, not a stable percentile estimate.

Use **one benchmark at a time**. Avoid deployment, scans, backups and unrelated load during comparisons. Record other activity rather than silently treating busy-host measurements as controlled. Keep the same library, cache conditions, viewport and host. Do not flush production caches for a synthetic “cold” result.

## Catalogue CPU attribution

```bash
# Three read-only Chromium visits; creates and deletes its exact temporary token.
EVIDENCE_DIR=/tmp/library-cpu-before node scripts/performance/profile-catalogue.mjs
# Deploy the change, then repeat independently of other measurements.
EVIDENCE_DIR=/tmp/library-cpu-after node scripts/performance/profile-catalogue.mjs
python3 scripts/performance/export-aggregates.py \
  --cpu_before /tmp/library-cpu-before --cpu_after /tmp/library-cpu-after \
  --out /tmp/library-cpu-safe
```

Sampling uses a 500 µs interval and waits 1.8 seconds after cards appear. Aggregate Library CPU includes code served under both `/apps/library/` and `/custom_apps/library/`; long tasks include Nextcloud and browser work. Raw CPU profiles stay local. Compare repeated visits and source attribution before drawing conclusions from total long-task changes. See [alpha.24 results](performance/2026-09-27-alpha24/README.md).

## Configuration and targeted checks

Defaults: `NC_URL=http://100.123.149.120:8088`, `NC_CONTAINER=nextcloud`, `NC_USER=uwe`. SQL/CLI execution assumes `/var/www/html` and `custom_apps/library`. These are local Docker tools, not a remote-host orchestrator.

```bash
# Cheap targeted endpoint; SKIP_SQL avoids the temporary app bootstrap edit.
SKIP_SQL=1 SAMPLES=3 BENCH_CASES=duplicates-100 npm run perf:quick

# Target a GUI surface; browser command includes one catalogue HTTP sample.
GUI_CASES=lists,inference npm run perf:browser

# Slow paths, including deep page, empty missing view and deferred hydration.
# Expect several minutes, with meaningful database load.
EVIDENCE_DIR=/tmp/library-perf-full npm run perf:full
```

`SAMPLES` defaults to 3. HTTP timings include response-body transfer; each SQL probe is an additional request. `BROWSER=1` enables Chromium; `SKIP_BROWSER=1` suppresses it. `COMPREHENSIVE=1` adds deep/missing cases; `HYDRATE=1` adds hydration. `DEEP_CURSOR=1` obtains a page-399 anchor outside the measured cursor request; full mode enables this explicitly. `review-counts` is measured only in comprehensive mode or when selected. `BENCH_CASES` explicitly selects endpoint labels (see baseline table or `run.mjs`). Browser cases: `catalogue-first,catalogue-repeat,home,shelves,lists,inference,review,settings`.

The quick/browser scenarios read real user data and can populate normal caches. Metadata export endpoints are measured but response bodies are not saved. The runner installs a temporary secret-protected opcode invalidation helper under `ocs-provider`, invalidates Application before profiling and after restoration, then deletes the helper. This avoids the developer server's 60-second revalidation delay. The SQL logger is enabled only on requests carrying a random secret, after app bootstrap, and removed afterwards; earlier Nextcloud bootstrap SQL is not measured. SQL parameters are used in memory for EXPLAIN and are not serialized. Plans are observations, not guarantees of future planner behavior.

## Jobs and scans: explicit mutating diagnostics

```bash
# Executes actual maintenance and the scheduled dispatcher; may change indexes,
# expire history, or enqueue due scheduled work. A job exception is a failure.
EVIDENCE_DIR=/tmp/library-perf-jobs npm run perf:jobs

# Scans an existing root, refreshing derived metadata/search indexes.
# First inspect inventory.json and choose the intended root ID.
EVIDENCE_DIR=/tmp/library-perf-scan SCAN_BUDGET_SECONDS=120 npm run perf:scan -- 61

# Read-only query-plan alternatives (can still be expensive).
EVIDENCE_DIR=/tmp/library-perf-probes node scripts/performance/run-cli.mjs probes
```

Root **0 or omitted means all roots**. Prefer an explicit small root first. The scan budget is cooperative, checked at progress callbacks, not a hard PHP kill deadline. A budget cancellation is recorded as `budgetCancelled`, not a completed scan. Don't extrapolate a short partial scan to a full-library completion promise. Direct scanner execution excludes queue latency and normal worker progress persistence. The CLI's `services` mode also runs history cleanup and the scheduler, so it is not read-only.

`perf:processes` creates and deletes a separate `library-perf-*` account. It generates 40 tiny publications, enables that account's duplicate index, performs real mutations, validates original fixture hashes/restored metadata, and cleans up in `finally`. Its 150-list / 6,000-entry setup is outside timings. It doesn't mutate the real user's lists or metadata. Fixture operations run warm within one PHP process; compare them to the same fixture, not directly to HTTP latency.

## Evidence and cleanup

HTTP evidence defaults to a timestamped `/tmp/library-performance-*` folder. CLI/process tools have stable defaults; **set a new `EVIDENCE_DIR` for every retained run** to avoid overwriting previous results. Outputs include JSON/JSONL, inventory, normalized SQL and plans, screenshots for browser mode, and stderr for CLI jobs. Review screenshots, resource IDs and diagnostics before external publication; they can reveal library information. Never include app passwords, profiler secrets or database backups.

Normal cleanup restores the exact original `Application.php`, removes the secret/hook and revokes the temporary auth token. SIGINT/SIGTERM request shutdown; hard termination/host failure can bypass cleanup. Do not deploy while the temporary hook is installed. If recovery is needed:

1. Compare live `/var/www/html/custom_apps/library/lib/AppInfo/Application.php` with the run's `Application.original.php` and `Application.profiled.php`.
2. If live content exactly matches the profiled copy, restore the original via `docker cp` and restore `www-data` ownership. If another edit occurred, remove only the benchmark `require` manually; don't overwrite newer work.
3. Remove any exact run-owned `ocs-provider/library-performance-opcache-*.php` helper (match the run-owned helper suffix on the developer container; do not remove another active run’s helper), and the local `opcache-helper.php` secret-bearing copy. Remove container `/tmp/library-performance-secret` first, then the hook only after Application no longer requires it. This prevents leaving a dangling require.
4. List the user's tokens with `occ user:auth-tokens:list`; revoke only the token named `library-performance-<run timestamp>` using `user:auth-tokens:delete USER ID`.
5. Check for the exact disposable `library-perf-*` account from an interrupted fixture run and delete that account, not the real user. Check diagnostic scan-job status if a scan was interrupted.

Tiny support scripts remaining in container `/tmp` are not web endpoints; they may be deleted once no benchmark is running. Original/profiled source backups are retained in local evidence for recovery. The app version and server DB configuration are not changed by the harness.

## What to repeat after fixes

- Background correctness: reproduce maintenance collision, repair, rerun; separately prove stale-job recovery and actual scheduled execution.
- Query changes: targeted endpoint three samples plus SQL plans, then quick regression baseline.
- Covers/UI: browser mode with resource sizes and long tasks; inspect screenshots and user interactions separately.
- Scanner writes: same controlled small root refreshed/unchanged, then capped real large root. Retain cancellation/error counts and memory, not just throughput.
- Release milestone: existing full functional Playwright and NC33–35 compatibility matrix. These performance tools supplement that suite.

## Compatibility and administrator cache checks

```bash
# Defaults to 33.0.9, 34.0.4 and 35.0.0, one disposable instance at a time.
LIBRARY_BETA_ARCHIVE=/tmp/library-beta-matrix/library-0.1.0-beta.1.tar.gz \
LIBRARY_BOOK_FIXTURE_ARCHIVE=/tmp/library-beta-matrix/gutenberg-en-40.tar.gz \
EVIDENCE_DIR=/tmp/library-matrix npm run perf:matrix
# Restrict a repeat after a failure.
NC_VERSIONS='35.0.0' EVIDENCE_DIR=/tmp/library-matrix-35 npm run perf:matrix
EVIDENCE_DIR=/tmp/library-admin-smoke node scripts/smoke-thumbnail-settings.mjs
# CLI memory excludes the optional SQL logger when SKIP_SQL=1.
SKIP_SQL=1 SCAN_BUDGET_SECONDS=120 EVIDENCE_DIR=/tmp/library-scan-memory npm run perf:scan -- 64
```

The matrix stages one candidate archive and upgrades from the beta before scanning the Gutenberg fixture. Its PHP checks add a separate 205-document fixture to exercise search-page boundaries, physical deletion and changing scopes; that account is removed before the main browser suite. All screenshots/logs remain in the local evidence directory. A capped scan is intentionally cancelled and never sweeps unvisited files; root traversal errors now fail the CLI benchmark rather than appearing as success. Source changes/order/cache state mean scan throughput is diagnostic unless the workload is controlled.

Export only aggregate allowlists for sharing; SQL, URLs, book metadata and screenshots stay local:

```bash
python3 scripts/performance/export-aggregates.py \
  --api /tmp/library-perf-api --browser /tmp/library-perf-browser \
  --processes /tmp/library-perf-processes --jobs /tmp/library-perf-jobs \
  --scan /tmp/library-perf-scan --memory /tmp/library-perf-memory \
  --matrix /tmp/library-perf-matrix --out /tmp/library-shareable-aggregates
```

The matrix requires explicit service pass output as well as successful process exits. Nextcloud can handle a PHP exception and return exit code zero, so an empty/cleanup-only service log is a failed check.
