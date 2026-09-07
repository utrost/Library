# Changelog

All notable changes for Library are tracked here.

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
- No dedicated creator/series/publication/year landing pages, saved views or smart collections.
- No shared global/admin-managed library roots.
- No custom reader, page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.
