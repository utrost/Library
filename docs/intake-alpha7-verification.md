# Incoming workflow — alpha.7 verification

Date: 2026-11-09. Scope: local development delivery, not full CI, release certification or Store publication. All mutation checks use synthetic files and disposable accounts.

## Changes

- Queue URL retains shelf, date, state filter, cursor history and checked IDs. Details, provider lookup and shelf-scoped path extraction return to it.
- Shelf selection is independent of indexing day. Path extraction opens that shelf, not an implicit checked-book subset.
- Empty filtered windows are skipped automatically, with a maximum of four requests / 200 examined records. A continuation is shown when older records remain.
- Failed pagination retains the previous page and selection. Organisation polling stays on its active tab.
- Incoming and bulk lookup bootstrap without loading the catalogue first. No schema or migration changes.

## Focused source verification

- 26 unit checks pass across incoming context, workbench, archives and validated Details returns.
- English/German translation additions pass the 1,813-key locale inventory and generated-catalogue checks. Existing Arabic fallback policy is unchanged.
- PHP syntax, deployment-helper shell syntax and whitespace checks pass.
- Four Playwright journeys pass on desktop/mobile Chromium against disposable NC34/MariaDB with 60 synthetic PDFs: reload and return context, an empty newest 50-record window, linked Details, lookup reload/return, parser shelf/return, organisation Apply/Undo, active-tab stability and persistent Done decisions. Browser failures and horizontal overflow are checked.
- Screenshots are inspected and retained privately with browser reports. Cold page-to-ready samples were 644 ms desktop and 630 ms mobile; three warm reloads had medians of 450 ms and 459 ms respectively (maximum 476 ms). These are local 60-book fixture measurements, not evidence for a full personal catalogue. Timing samples are attached to the browser report.

## Signed-package delivery

Merged and deployed on 2026-11-09 through [PR #251](https://github.com/utrost/Library/pull/251). The same signed archive passed the populated disposable NC34.0.4/MariaDB upgrade and was installed on developer NC34.0.3/MariaDB.

| Artifact | Value |
| --- | --- |
| Packaged merged commit | `0ed17ade008d1ba74d9941df6d3875d0c39452f5` |
| Archive | `library-0.4.0-alpha.7.tar.gz` |
| SHA-256 | `9aae8ef64b009736baafb95a75d07b010c962247fe85235f683fbdcf93750c0e` |
| Signature | Existing app certificate; installed integrity clean |
| Artifacts | Matching SPDX SBOM, provenance and checksum retained privately |
| Packaged frontend | 1,200,619 bytes, within the unchanged 1,320,000-byte limit |

- Forced a failure after upgrading the populated 60-book disposable fixture. Restoring the database, app, configuration and Library appdata returned alpha.6 with matching fingerprints. Repeating the upgrade with the same archive passed.
- No migration was added or changed. Ten schema/container assertions pass, including rerunning the alpha.6 migration without a schema change.
- All four desktop/mobile journeys pass again on the signed package. First page-to-ready samples were 728/652 ms; warm medians 488/448 ms. An initial browser invocation used an expired ephemeral Docker port after restart; refreshing the fixture address/trusted domain resolved that harness failure before the successful repeat.
- 37 organisation assertions and 20 service assertions pass, including Apply/Undo, later-edit conflicts, stale review decisions and cross-owner refusals. The reused service fixture selects a newest visible synthetic book in this 60-book catalogue instead of its original sole-book minimum ID.
- Developer deployment paused cron, enabled maintenance and drained requests before backups. Books, file records, lists, list entries and sharing fingerprints match before/after installation and again after live-smoke cleanup. Integrity is clean, maintenance is off and cron is running.
- Live desktop/mobile checks used three temporary accounts and three synthetic books. Home/assets, queue selection/reload, Details/lookup/parser returns and Done persistence passed; no horizontal overflow or browser errors, and zero book-metadata POSTs. Queue readiness was 421/405 ms for that three-book fixture account. All three accounts were removed; source hashes were unchanged.
- A separate read-only backend probe against the approximately 108k-book working catalogue measured five samples per case. Pending-page median/max: 19.58/135.92 ms before, 8.45/81.24 ms after. Bounded reviewed-book traversal median/max: 47.05/85.74 ms before, 32.04/58.85 ms after. These service measurements exclude network/rendering and are not a browser performance claim or a controlled speedup benchmark.
- Private rollback backups, browser screenshots/reports and storage notes remain outside Git. No personal incoming files were mapped, moved, extracted or scanned. No GitHub Actions, full CI, full release gate or Store publication ran.

## Boundaries

- No live provider queries, real-book mutation, incoming-storage mapping or archive extraction in this slice.
- Real collection setup requires a confirmed source directory and paths visible in both web and background-worker runtimes. Private storage inspection is kept outside public documentation.
- Review decisions persist server-side. Queue position/selection are URL state: bookmark the queue to resume that exact view; a fresh navigation link starts its default view.
- Cursor history is bounded to 100 visited pages; selected IDs to 50. Partial windows are intentional bounded work, not an exact remaining-count calculation.
- Broader 0.4 functional/release acceptance remains in the [implementation ledger](0.4-implementation-status.md).
