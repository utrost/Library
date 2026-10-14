# Alpha.28: incremental scheduled scans

Developer Nextcloud 34.0.3, app 0.2.0-alpha.28, 28 September 2026.

## Design

Nextcloud typed node events enqueue owner-scoped file or directory targets. Repeated events coalesce by path and retain a generation number. Publication files and same-basename OPF sidecars are checked directly. `metadata.opf` and directory events rescan the affected subtree. Missing publications remain in the catalogue as missing; source files are never written by the scanner.

The first scheduled run establishes a complete baseline. Subsequent runs process journal entries only, unless seven days have passed, enabled roots changed, or metadata/index generator revisions changed. A full scan checks for missed events and external storage changes. Journal entries are acknowledged only after a successful job transition, and only if their generation has not advanced. Manual Scan enabled roots remains full.

## Verification

The final local release gate passed (1,041 Python tests, 519 frontend tests, parser parity over 518 vectors, PHP runtime checks, frontend build and Markdown links). A disposable NC34 account passed 74 scheduled-scan integration assertions: initial full checkpoint, file add/change/delete, OPF update, manual correction, journal capture/acknowledgement, a 73 ms changed run visiting three publications and marking one deletion, a 1 ms empty run visiting zero books, file and folder moves (including across roots) without false missing counts, deletion of a configured folder, a shared `metadata.opf` updating four publications, weekly/root/revision full fallback and root-removal cleanup, generation-race retention, and account deletion cleanup of pending changes. The account and its schedule were removed.

## Real-library full baseline

The first normal scheduled pass visited **107,717** entries in **2,972.3 seconds (49m 32s, 36.2 entries/s)**. It finished with zero job errors, zero added or missing publications, zero metadata extractions, and 107,717 fingerprint skips. Its 799 metadata warnings were the existing cached warnings; the pre/post catalogue count, source identity/version observations, and manually corrected record digests matched. The scheduler saved the full-run timestamp, current metadata/index revision, and enabled-root digest. These figures include Nextcloud file traversal and database work on a shared developer host.

The following unchanged **normal scheduled incremental pass** completed its scanner work in **3 ms**: zero publications visited, zero metadata extractions, zero job errors, and zero missing files. The full checkpoint remained unchanged; the 107,717-entry catalogue, source identity/version observations, and manually corrected record digests matched the pre-run values. This is scanner work time; scheduled dispatch follows Nextcloud's Cron cadence and is separate from the 3 ms measurement.

The focused developer-browser smoke passed in Chromium and Firefox: pagination forward/backward, 18 covers near the viewport, selection action visibility, mobile fit, and zero page errors in that run.

## Disposable Nextcloud 33–35 matrix

Each version upgraded from the beta fixture, indexed the same 40 English Gutenberg books, ran the service fixtures, 35 desktop/mobile Playwright checks, metadata-inference Apply smoke, and scheduled-scan smoke. Each instance was removed after its run. All exit and cleanup checks passed; there were no unexpected or flaky Playwright results.

| Nextcloud | Scheduled-scan assertions | Changed three-book scan | Empty scan | Playwright |
| --- | ---: | ---: | ---: | ---: |
| 33.0.9 | 74 passed | 75 ms | 1 ms | 35/35 passed |
| 34.0.4 | 74 passed | 90 ms | 0 ms | 35/35 passed |
| 35.0.0 | 74 passed | 105 ms | 0 ms | 35/35 passed |

The small-fixture times are scanner duration values from the disposable service checks; they are not end-to-end page timings. Raw logs, screenshots and JSON reports are private under `/tmp/library-alpha28-matrix/`; only aggregate results are recorded here.

[Nextcloud's typed server-side node events](https://docs.nextcloud.com/server/stable/developer_manual/basics/events.html) provide the event source. The complete NC33–35 matrix above covers this alpha.28 source.

## Deployment incident and recovery

The first developer full pass was cancelled after an already-running Nextcloud CLI worker used an old `ItemService` class while the deployed scanner used alpha.28. That mixed process falsely marked **16,096** previously indexed files as metadata errors. The catalogue still contained **107,717** books, and source-file version observations and three user-corrected records matched the baseline. An owner-scoped repair checked each affected row's live file identity, ETag, mtime, size, physical existence, stored catalogue item and v7-compatible saved proposals. All **16,096** were eligible and restored; the file statuses returned to **106,918 indexed, 799 metadata warnings and 98,989 suppressed sidecars**. The old idle worker was stopped and a fresh worker started before the repeated full pass. No source book or sidecar was written. This is a deployment-process lesson: refreshing web opcode cache does not refresh already-running CLI workers.

## Rerun

The source report helper exports aggregate counts/digests; keep its raw JSON and stderr private. The first pass after enabling this feature must be full because older file events were not journaled.

```sh
# Existing enabled schedule and no active account scan are required.
NC_USER=uwe EVIDENCE_DIR=/tmp/library-full-check EXPECTED_SCOPE=all \
  node scripts/performance/full-scheduled-scan.mjs
# After the full checkpoint, check an unchanged scheduled run.
NC_USER=uwe EVIDENCE_DIR=/tmp/library-incremental-check \
  EXPECTED_SCOPE=incremental EXPECT_EMPTY=1 \
  node scripts/performance/full-scheduled-scan.mjs
# Disposable account; removes itself in finally.
docker cp tests/php/scheduled_scan_integration.php nextcloud:/tmp/library-scheduled-check.php
docker exec -u www-data nextcloud php /tmp/library-scheduled-check.php
docker exec nextcloud rm -f /tmp/library-scheduled-check.php
```

The scheduler checks for due work every five minutes; job execution also depends on the available Nextcloud worker. Direct changes to storage outside Nextcloud may bypass events and require a Nextcloud file-cache update plus a full scan. Shared or external mounts can have event-visibility gaps and are covered by periodic reconciliation. These timings are single runs on a shared developer host, not capacity guarantees.
