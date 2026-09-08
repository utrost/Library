# Changelog

All notable changes for Library are tracked here.

## v0.1.0-alpha.111 - 2026-09-08

Release-hardening candidate for Uwe's v0.1 manual test pass.

### Added since the first alpha tag

- Dedicated publication/series discovery pages and dedicated publication-year discovery pages around the existing compact catalogue grid.
- Details page cleanup so publication metadata is shown as one editable surface instead of duplicate read-only/edit sections.
- Root deletion recovery checklist before typed destructive confirmation.
- Hard validation for publication date and language edit/import paths.
- Human test handbook with stable release-hardening case IDs.
- Current state and risk register for v0.1 testing.
- Generated archive install smoke script through `npm run smoke:release-package`.

### v0.1 testing limitations

- Target is Nextcloud 34 only.
- No app-owned cover cache or manual cover override.
- Sidecar manifest and ZIP are export/download artifacts; there is no OPF/JSON writer into source folders and no full fresh-install restore from sidecars yet.
- No scheduled/resumable scans or completion/failure notifications.
- Publication and publication-year discovery pages exist; dedicated creator pages, saved views and smart collections remain future work.
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
