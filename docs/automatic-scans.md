# Automatic Library scans

Available in **0.2.0-alpha.21** under **Library settings → Folders and scanning → Automatic scans**.

Choose **Off**, **Every hour**, **Every 6 hours**, or **Every day**, then **Save schedule**. The first scan is due after that interval; the next due time is shown in UTC. The default is Off. Daily is a sensible starting point for a large library. Use **Scan enabled roots** for an immediate run.

## What gets updated

The first scheduled run scans all enabled roots. Later scheduled runs use a durable journal of Nextcloud file changes; a full reconciliation runs at least every seven days and after root or scanner-version changes:

- Adds newly discovered supported publications.
- Refreshes extracted metadata for changed books or changed OPF sidecars.
- Preserves Library corrections and exposes new scanner values for review.
- Marks disappeared publications as missing. It does not delete their catalogue records or your notes.
- Skips metadata extraction for unchanged files when their stored fingerprint and extractor revision are still valid.
- Updates the optional duplicate-suggestion index through the normal catalogue update hooks.

Changes made through Library's metadata editor are already saved immediately; they do not wait for a scan. File changes need to be visible to Nextcloud. If files were copied directly into server storage outside Nextcloud, its file cache may need updating first.

## Timing and controls

Nextcloud background jobs check for due schedules every five minutes. The scan runs when a worker is available; the due time is not an exact appointment. Reliable unattended execution needs a working system Cron configuration. Library shows a warning when Nextcloud uses another background mode.

At most 50 due accounts are considered in one scheduling pass. A pending or running scan for your account postpones automatic queuing by five minutes. Running scans with no heartbeat for 15 minutes are atomically marked failed by maintenance or the scheduler, retaining their counters and history. The next due scheduling pass can then queue a replacement. Queued jobs are not expired merely because Cron is delayed. Disabled accounts and accounts without enabled roots are skipped until the next interval. If execution fails, inspect scan history; the next scheduled attempt remains due at the configured interval.

Progress, completion totals, errors and cancellation use the existing scan history. Turning scheduling Off cancels its queued scan. A scan already running continues unless cancelled in scan history. Removing an account also removes its schedule.

Since alpha.28, typed Nextcloud create, write, touch, before-delete, delete, rename and copy events populate an owner-scoped, coalesced change journal. Capturing folder deletion before its node disappears also covers deletion of a configured root folder. Changed publication files are checked directly. A same-basename OPF change also checks the matching PDF/EPUB/CBZ; `metadata.opf` and folder changes scan the affected subtree. Journal generations captured at scan start are acknowledged only after successful job completion. Events arriving during the run remain pending. Failure or cancellation also leaves them pending. Explicit **Scan enabled roots** still runs a full scan.

Full reconciliation enumerates registered publications through public Files search in pages of 200, including mounted storage. It resolves live nodes and checks physical existence before processing, and skips the missing sweep if a root changes during traversal. Direct storage changes made outside Nextcloud may not emit node events; update Nextcloud's file cache, and use a full scan when you need immediate reconciliation. The weekly full pass is the safety net for missed events, shared or external mount changes that do not emit an event in your user view, and deletions outside the event path.

## Developer verification

[Alpha.21 verification](compatibility-evidence/2026-09-27-scheduled-scans-alpha21/README.md) covers new and changed files, deleted books, OPF changes, preserved corrections, unchanged-file extraction skips, schedule persistence, cancellation, disabled accounts and account cleanup on developer Nextcloud 34.0.3. The developer account is configured daily. The [alpha.26 full ordinary scan](performance/2026-09-27-alpha26/README.md) covered 107,717 publication files in 50 minutes. Alpha.28 adds the change journal; [alpha.28 verification](performance/2026-09-28-alpha28/README.md) records its disposable-account and real-library measurements.
