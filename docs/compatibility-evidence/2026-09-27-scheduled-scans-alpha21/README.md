# Scheduled scans — alpha.21

Developer verification on **Nextcloud 34.0.3**, 2026-09-27. This slice adds per-account hourly, six-hourly and daily scans; default Off, developer account configured daily after testing. The first run is due one interval after enabling. Nextcloud is configured for Cron.

## Implementation

- `library_scan_schedule`: one private row per configured account, with an indexed due timestamp, interval and last queued job ID.
- A nonparallel timed job considers at most 50 due accounts every five minutes. A transaction locks each schedule, rechecks eligibility and atomically creates the existing scan job, worker queue entry and next due timestamp.
- Pending/running account scans defer automatic queuing. Disabled accounts and accounts without enabled roots are skipped. Turning scheduling off cancels its queued job using an atomic queued-status condition; it does not cancel a running job. Account deletion removes the schedule.
- Actual traversal uses the existing scanner and scan-history UI. It refreshes new/changed metadata, preserves corrections and uses fingerprint skips for unchanged files. This is scheduled discovery, not a file-event listener.
- Fixed an existing counter error: metadata sidecar records are excluded from missing-publication counts.

## Verification

The service integration uses a disposable account on the existing developer instance. It forces only that account's due timestamp, invokes the scheduler and runs the real scan worker. No full scan of the developer's 84k catalogue is forced.

- Initial scan discovers four fixture EPUB books.
- Next scan discovers one addition, updates changed embedded metadata, observes a changed OPF sidecar as a scanner candidate while preserving the user's title correction, and marks exactly one deleted book missing.
- An unchanged book skips metadata extraction. Source file hashes remain unchanged by the scanner.
- Invalid intervals rejected; repeated saving preserves the next due time; no early queueing; queued automatic/manual jobs defer further automatic work.
- Off cancels pending automatic work; disabled accounts and no-enabled-root accounts are skipped; deleting the account removes its schedule and other private state.
- Chromium and Firefox: settings save/reload, next due timestamp, Off, invalid frequency, CSRF rejection and mobile fit. Screenshots reviewed for readability and tooltip placement. No JavaScript errors.
- English, German and Arabic translations. Help text uses the existing label tooltips; operational timing and Cron warnings remain visible.
- Local gate and deployed-file hash verification are recorded alongside this report.

## Limits

This verifies the scheduling path and change handling. It is not an 84k full-traversal benchmark, a concurrent-user load test, or a new NC33/35 compatibility run. Folder walks remain proportional to root size even when extraction is skipped. Actual timing depends on Cron, queue availability and storage. Stale running scans require inspection/cancellation rather than automatic retries that could overlap.

Files copied directly into server storage may require Nextcloud's file-cache scan before Library can see them. Automatic scans do not write OPF files or remove catalogue entries; missing records stay available for review. Existing Library metadata edits remain immediate.

## Reproduce and evidence

- Copy `tests/php/scheduled_scan_integration.php` inside the Nextcloud container and execute as the web user. It creates/deletes its own account and leaves other users' publication files untouched.
- Run `node scripts/smoke-scheduled-scans.mjs` with `NC_URL`, `NC_USER`, `NC_CONTAINER`, `EVIDENCE_DIR` as needed. It temporarily changes schedule options and restores the previous frequency. It creates/revokes a temporary application token.
- [Service and scanner integration](integration.log)
- [Browser results](browser/results.json)
- [Desktop settings](browser/chromium-schedule.png)
- [Mobile settings](browser/firefox-mobile-schedule.png)
- [Configured developer schedule](developer-schedule.json)
- [Deployment verification](deployment-results.json)
