# Changelog

All notable changes for Library are tracked here.

## v0.1.0-alpha.130 - 2026-09-09

### Added

- Added a compact **Useful views** strip to the catalogue with one-click links for recently opened, starred, workflow statuses, scanner conflicts and metadata errors. Links reuse normal catalogue query parameters so active filter chips still explain each view.
- Updated catalogue search copy to name descriptions explicitly alongside title, creator, filename and folder search.

## v0.1.0-alpha.129 - 2026-09-09

### Changed

- Made catalogue text search explicitly cover filename and folder path text via the indexed cached path, so sparse PDFs/comics can be found by the structure they already live in.
- Clarified catalogue search UI copy to say title, creator, filename and folder names are searchable.
- Hardened filename/folder metadata parsing for real staged EPUB/PDF names with middle-initial filename authors such as `Arthur_C_Clarke`, while preserving the existing two-author hyphen-suffix split behavior.
- Broadened archive-source suffix cleanup to strip short `z-lib.org` style source tails before filename metadata parsing.

## v0.1.0-alpha.127 - 2026-09-08

### Added

- Detail-page metadata health score with a weak-field jump list for local cleanup triage.
- Personal rating field with 0–5 star validation.
- Manual cover override from URL or upload, with revert back to extracted/preview cover.
- Creator chip editor that syncs to the existing canonical creators field.
- Dedicated creator discovery pages from the Top creators shortcut panel, using exact full-field creator matching.
- Publication landing pages now show a compact **Publication contents** issue/date context summary with item count, date coverage and year range.
- Batch metadata apply: current filter results can now preview and then write one selected metadata field, with requested/applied/unchanged/skipped feedback.
- Polished batch metadata preview page with summary cards, a real review table and an explicit apply action.

### Changed

- UI/UX polish is now the active priority: settings roots render as shelf cards with collapsed danger zones, the mobile catalogue starts with search and hides sort/filter options, discovery pages use their focused context as the hero, detail pages demote secondary actions/metadata quality, and batch-preview examples become mobile review cards.
- Moved detail-page metadata field help into hover/focus help on the field names so inline guidance no longer stretches the edit form.
- Documented the useful metadata-field audit: sub-genre stays in genre/classification values for now instead of becoming a premature schema column.

## v0.1.0-alpha.112 - 2026-09-08

Release-hardening candidate for Uwe's v0.1 manual test pass.

### Added since the first alpha tag

- Dedicated publication/series discovery pages and dedicated publication-year discovery pages around the existing compact catalogue grid.
- Details page cleanup so publication metadata is shown as one editable surface instead of duplicate read-only/edit sections.
- v0.1 detail metadata editing polish: roomier title/description controls, creators entered one per line, language/genre multi-select picklists, publisher autocomplete and autosave with a stable manual fallback button.
- Root deletion recovery checklist before typed destructive confirmation.
- Hard validation for publication date and language edit/import paths.
- Human test handbook with stable release-hardening case IDs.
- Current state and risk register for v0.1 testing.
- Generated archive install smoke script through `npm run smoke:release-package`.

### v0.1 testing limitations

- Target is Nextcloud 34 only.
- Manual cover override is basic: detail pages accept a URL/upload and can revert to extracted/preview cover, but there is still no app-owned cover-crop/cache workflow.
- Sidecar manifest and ZIP are export/download artifacts; there is no OPF/JSON writer into source folders and no full fresh-install restore from sidecars yet.
- No scheduled/resumable scans or completion/failure notifications.
- Publication, publication-year and creator discovery pages exist; saved views, smart collections and richer issue grouping remain future work.
- No shared global/admin-managed library roots.
- No custom reader, page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.

## v0.1.0-alpha.1 - 2026-09-07

Public alpha candidate built from app version `0.1.0-alpha.82`.

### Added

- Nextcloud-native publication catalogue for files that already live in Nextcloud Files.
- User-configured Library roots with enable/disable, edit, delete and per-root scan actions.
- Background scan jobs with progress/history, metadata-error retry, missing-file recheck, queued-job cancellation and cooperative running-job cancellation.
- File-index and catalogue-item model for EPUB, PDF, CBZ and OPF inputs, with extractor failure isolation.
- General publication metadata model with editable title, subtitle, creators, publication/series, date, language, publisher, description, workflow status, genres and classifications.
- Scanner provenance/candidates, details-page metadata correction summary, field-level differs-from-scanner markers, single-field reset, whole-item reset and scanner-conflict catalogue filter.
- Compact cover-first catalogue cards, database-backed search/filter/sort/pagination, top series/periodicals facet and active filter chips.
- Read handoff, Show in Files and Download source actions.
- Cover route with Nextcloud preview, EPUB package cover, CBZ first-image fallback, placeholder fallback, diagnostic headers and refresh affordance.
- Nextcloud tags/comments on detail pages, tag result feedback and one-click suggested tag buttons.
- Corrected-metadata JSON export, no-write import preview, apply-to-matched-existing-items, sidecar manifest export and sidecar ZIP export.
- Local release packaging script and minimal GitHub Actions CI.

### Known alpha limitations

- Target is Nextcloud 34 only.
- No app-owned cover cache or manual cover override.
- No OPF/JSON sidecar writer into source folders and no fresh-install restore from sidecars yet.
- No scheduled/resumable scans or notifications.
- At this first alpha tag, no dedicated discovery landing pages existed yet.
- No shared global/admin-managed library roots.
- No custom reader, page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.
