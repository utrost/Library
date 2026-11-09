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

Pending: final merged-source archive, integrity, populated alpha.6 upgrade/rollback, installed-package browser repeat and developer deployment. Record completed outcomes here after execution.

## Boundaries

- No live provider queries, real-book mutation, incoming-storage mapping or archive extraction in this slice.
- Real collection setup requires a confirmed source directory and paths visible in both web and background-worker runtimes. Private storage inspection is kept outside public documentation.
- Review decisions persist server-side. Queue position/selection are URL state: bookmark the queue to resume that exact view; a fresh navigation link starts its default view.
- Cursor history is bounded to 100 visited pages; selected IDs to 50. Partial windows are intentional bounded work, not an exact remaining-count calculation.
- Broader 0.4 functional/release acceptance remains in the [implementation ledger](0.4-implementation-status.md).
