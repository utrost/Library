# Current state and risk register

This snapshot prepares Library for the v0.1 alpha test pass. It documents what is implemented and verified now, where the app is safe to test, and which risks remain intentionally outside the current release candidate.

## Deployment posture

- Target: private Nextcloud 34 test instance, currently smoke-tested in the `nextcloud` Docker container.
- App id: `library`.
- Current app version: `0.1.0-alpha.157`.
- Intended audience now: trusted early testers on a disposable or private Nextcloud 34 instance.
- Not yet claimed: public Nextcloud App Store readiness, signed release artifacts, multi-version Nextcloud compatibility, or a public-internet operational hardening guarantee.
- Storage model: Nextcloud Files remains canonical; Library stores app-owned root, file-index, scan-job and catalogue metadata rows. Source folders untouched is a release-critical boundary, and tester reports should explicitly confirm source folders untouched after repair/delete/export workflows.

## Implemented product surface

Implemented and ready for v0.1 testing:

- Per-user Library roots with add/edit/enable/disable/delete, typed delete confirmation and recovery guidance.
- Queued all-root and per-root scans, scan progress/history, metadata-error retry, missing-file recheck, queued cancellation and cooperative running-job cancellation.
- Conservative unchanged-file rescans: an ordinary trusted indexed file with an existing item and current pipeline revision skips metadata content extraction and item writes only when its primary plus selected OPF sidecar identity/path/ETag/mtime/size/type fingerprint matches. Retry and recheck remain forced extraction paths.
- EPUB, PDF, CBZ and OPF indexing with extractor failure isolation and missing-file diagnostics.
- General editable publication metadata: title, subtitle, creators, publication/series, date, language, publisher, description, workflow status, genres and classifications.
- Scanner provenance/candidates, differs-from-scanner labels, correction counts, single-field reset, whole-item reset, conflict review filter and batch scanner-candidate reset.
- Compact cover-first catalogue with database-backed search, filters, facets, sort modes and pagination, active filter chips, built-in Useful views for daily/cleanup smart collections with count badges, a weak-metadata cockpit for sparse/suspicious catalogue rows, and in-app Custom collections for user-defined saved filters. Useful-view and saved-collection badges use a count-only path that does not fetch catalogue rows or facets for normal filters. Ordinary catalogue/AJAX item DTOs omit unbounded cover override blobs, raw provenance maps, comments and detail-only mutation URLs, and their SQL path avoids selecting cover override data; tags, descriptions, diagnostics and visible card actions remain. Scanner-conflict and weak-metadata review views intentionally retain rich provenance, while detail, cover, export and import paths remain full.
- Dedicated publication/series, publication-year and creator discovery pages around the compact catalogue grid, with publication pages showing a compact **Publication contents** issue/date coverage summary.
- Read, Show in Files and Download source actions.
- Detail workbench for publication metadata, Nextcloud tags/comments, cover refresh, scanner provenance and file diagnostics.
- Nextcloud tag feedback, suggested tag buttons and filter-result batch tag add/remove.
- Cover route using Nextcloud preview, EPUB package cover, CBZ first image and placeholder fallback with diagnostic headers and no-store refresh paths.
- Corrected metadata JSON export, import preview, matched-item import apply, sidecar manifest export and sidecar ZIP export without writing into source folders.
- Cached Import Health metadata overview with explicit refresh, so heavy archive/container and cover diagnostics stay out of catalogue paging/search/filter paths.
- Library-native starring/bookmarking, last-opened activity and recently opened sorting.

## Current security and safety controls

- Mutating browser forms use Nextcloud request tokens/CSRF protection unless deliberately documented otherwise for safe GET handoff routes.
- Routes resolve data for the current user; roots and catalogue items are user-scoped.
- Root deletion and missing-item forget are app-owned-row operations only; source files remain in Nextcloud Files.
- Import apply updates matched existing Library catalogue rows; it is not a blind fresh-install restore and invalid rows are skipped rather than aborting the whole batch.
- Sidecar manifest/ZIP exports are read-only/download-only and do not write `.library.json` files into source folders.
- Temporary app-password smoke tokens are created only for live verification and deleted afterwards; token values are never documented.

## Known weak points and deferred hardening

These are acceptable for the v0.1 alpha test pass but should stay visible:

1. **Nextcloud version scope:** only Nextcloud 34 has been targeted and smoke-tested.
2. **Release packaging:** generated archive install smoke is now scripted, but app signing/App Store packaging is still future work.
3. **Cover lifecycle:** on-demand previews/fallbacks, refresh affordances and manual cover override/revert exist, but no app-owned cover cache or crop/rebuild workflow exists.
4. **Metadata portability:** export/import/apply and sidecar manifest/ZIP exist, and source-folder OPF/JSON writing plus full sidecar restore are intentionally external-tool workflows rather than app responsibilities.
5. **Scanning operations:** queued scans, progress, retry, recheck and cancellation exist; scheduled/resumable scans and notifications remain future work.
6. **Discovery:** publication/series, publication-year and creator pages exist, publication pages show compact issue/date coverage, and the weak-metadata cockpit links sparse/suspicious metadata counts back to filtered catalogue views; richer identity/issue grouping remain future work.
7. **Shared libraries:** users manage personal roots; admin-managed shared/global roots are not implemented.
8. **Readers and content services:** Library delegates reading to Nextcloud and does not provide page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.
9. **Real-collection evidence:** generated scale and selected live smokes are strong for a v0.1 candidate, but Uwe's manual test pass should still use real mixed files to find weak metadata/cover cases.
10. **Catalogue scale follow-ups:** alpha.154 added aggregate operation instrumentation and throttled progress/cancellation persistence, not external telemetry or proof of universal speedup. Alpha.155 closes the identified catalogue request, detail autosave and star-toggle races. Alpha.156 adds strict bounded JPEG/PNG/WebP validation for manual cover uploads. Remote privacy, archive budgets/cache, query/payload completion, missing batching, root transaction/overlap, and representative scale gates remain pending.

## Verification evidence

Historical exact-package migration evidence for alpha.153 remains relevant:

- The archive checksum passed; the package was installed and enabled over alpha.152 after creating a 12,223,391-byte rollback SQL dump.
- Migration registry entry `000100Date20260911130000` is present. Item and file row counts remained exactly 7,120 each across migration, and both fast-path columns are physically nullable `varchar(64)`.
- SHA-256 equality was confirmed across source, archive and installed copies for the fast-path helpers, metadata service, file/item/scanner services, migration, database schema and app metadata.
- A privacy-safe 40-file smallest-root smoke reported one root, 40 indexed, zero missing and zero errors on both scans. Warm-up rewrote 40 item rows and established 40 markers; the unchanged second scan rewrote zero item rows and retained 40 markers. Item/file row counts stayed at 40, and `source_observation_changes=0` confirmed equal before/after path/ETag/mtime/size/MIME observations.
- Vue, API and browser exact-package smokes passed; browser console errors were zero.

The 40-file result measures write elision, not throughput or latency. Alpha.154 instrumentation does not establish a universal speedup.

The historical alpha.153 release-hardening evidence set also includes:

- Focused release-hardening contract tests.
- Full Python contract suite.
- Frontend Vitest suite and Vite production build.
- Plain-PHP fast-path runtime tests and the aggregate-only two-scan live smoke after migration.
- Markdown link check and `git diff --check`.
- Generated `dist/library-0.1.0-alpha.153.tar.gz` plus SHA-256 verification.
- Generated alpha.153 archive install into the live `nextcloud` container, then PHP lint, `occ app:enable library`, `occ upgrade`, router listing and live Vue/browser smokes.

Alpha.157 verification is complete for the local gate (718 Python tests, 7 PHP runtime programs, 26 Vitest tests, production build and Markdown links), unsigned 116-entry package audit/archive/checksum, exact-package checksum and install/enable, PHP lint, route listing, live Vue/API smoke, and browser smoke with zero console errors and mutation-restoration markers. Its 40-file unchanged-root smoke ran twice with `indexed=40`, `missing=0`, `errors=0`, zero catalogue rewrites, 40 markers and `source_observation_changes=0` both times; `release_package_smoke_ok=true`. The upgrade reported `No upgrade required`, so this was not a fresh database migration rehearsal and that rehearsal remains pending.

Older shipped slices have also been live-smoked for catalogue browsing, metadata separation, multi-root confidence, last-opened activity, description search, workflow status, genres/classifications, scanner-conflict review, batch operations, root recovery, single metadata surface and publication/year/creator discovery pages.

## Practical next hardening slices

If the v0.1 alpha test pass finds issues, prioritize fixes in this order:

1. Source-file safety, root deletion, missing-item forget, or import apply surprises.
2. Install/upgrade/package problems from generated archive.
3. Browser/runtime errors or mobile-blocking layout failures.
4. Scan stuck states, cancellation surprises, or misleading progress/history.
5. Metadata corruption, validation gaps or bad scanner provenance/reset behavior.
6. Reader/file handoff failures for common EPUB/PDF/CBZ files.
7. Cover quality failures that confuse browsing.
8. Documentation contradictions that cause testers to expect unimplemented future features.

## v0.1 testing stance

Functionality is broad enough for the v0.1 alpha test pass. The goal now is not to hide limitations; it is to prove that the current Library workflows are safe, understandable and recoverable on real files.
