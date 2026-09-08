# Current state and risk register

This snapshot prepares Library for Uwe's v0.1 test pass. It documents what is implemented and verified now, where the app is safe to test, and which risks remain intentionally outside the current release candidate.

## Deployment posture

- Target: private Nextcloud 34 test instance, currently smoke-tested in the `nextcloud` Docker container.
- App id: `library`.
- Current app version: `0.1.0-alpha.111`.
- Intended audience now: Uwe and trusted early testers on a disposable or private Nextcloud 34 instance.
- Not yet claimed: public Nextcloud App Store readiness, signed release artifacts, multi-version Nextcloud compatibility, or a public-internet operational hardening guarantee.
- Storage model: Nextcloud Files remains canonical; Library stores app-owned root, file-index, scan-job and catalogue metadata rows. Source folders untouched is a release-critical boundary, and tester reports should explicitly confirm source folders untouched after repair/delete/export workflows.

## Implemented product surface

Implemented and ready for v0.1 testing:

- Per-user Library roots with add/edit/enable/disable/delete, typed delete confirmation and recovery guidance.
- Queued all-root and per-root scans, scan progress/history, metadata-error retry, missing-file recheck, queued cancellation and cooperative running-job cancellation.
- EPUB, PDF, CBZ and OPF indexing with extractor failure isolation and missing-file diagnostics.
- General editable publication metadata: title, subtitle, creators, publication/series, date, language, publisher, description, workflow status, genres and classifications.
- Scanner provenance/candidates, differs-from-scanner labels, correction counts, single-field reset, whole-item reset, conflict review filter and batch scanner-candidate reset.
- Compact cover-first catalogue with database-backed search, filters, facets, sort modes and pagination.
- Dedicated publication/series and publication-year discovery pages around the compact catalogue grid.
- Read, Show in Files and Download source actions.
- Detail workbench for publication metadata, Nextcloud tags/comments, cover refresh, scanner provenance and file diagnostics.
- Nextcloud tag feedback, suggested tag buttons and filter-result batch tag add/remove.
- Cover route using Nextcloud preview, EPUB package cover, CBZ first image and placeholder fallback with diagnostic headers and no-store refresh paths.
- Corrected metadata JSON export, import preview, matched-item import apply, sidecar manifest export and sidecar ZIP export without writing into source folders.
- Library-native starring/bookmarking, last-opened activity and recently opened sorting.

## Current security and safety controls

- Mutating browser forms use Nextcloud request tokens/CSRF protection unless deliberately documented otherwise for safe GET handoff routes.
- Routes resolve data for the current user; roots and catalogue items are user-scoped.
- Root deletion and missing-item forget are app-owned-row operations only; source files remain in Nextcloud Files.
- Import apply updates matched existing Library catalogue rows; it is not a blind fresh-install restore and invalid rows are skipped rather than aborting the whole batch.
- Sidecar manifest/ZIP exports are read-only/download-only and do not write `.library.json` files into source folders.
- Temporary app-password smoke tokens are created only for live verification and deleted afterwards; token values are never documented.

## Known weak points and deferred hardening

These are acceptable for Uwe's v0.1 test pass but should stay visible:

1. **Nextcloud version scope:** only Nextcloud 34 has been targeted and smoke-tested.
2. **Release packaging:** generated archive install smoke is now scripted, but app signing/App Store packaging is still future work.
3. **Cover lifecycle:** on-demand previews/fallbacks and refresh affordances exist, but no app-owned cover cache or manual cover override exists.
4. **Metadata portability:** export/import/apply and sidecar manifest/ZIP exist, but there is no OPF/JSON writer into source folders and no full fresh-install restore-from-sidecars workflow.
5. **Scanning operations:** queued scans, progress, retry, recheck and cancellation exist; scheduled/resumable scans and notifications remain future work.
6. **Discovery:** publication/series and year pages exist; dedicated creator pages, saved views and smart collections remain future work.
7. **Shared libraries:** users manage personal roots; admin-managed shared/global roots are not implemented.
8. **Readers and content services:** Library delegates reading to Nextcloud and does not provide page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.
9. **Real-collection evidence:** generated scale and selected live smokes are strong for a v0.1 candidate, but Uwe's manual test pass should still use real mixed files to find weak metadata/cover cases.

## Verification evidence

Most recent release-hardening target evidence should include:

- Focused release-hardening contract tests.
- Full Python contract suite.
- Frontend Vitest suite and Vite production build.
- Markdown link check and `git diff --check`.
- Generated `dist/library-0.1.0-alpha.111.tar.gz` plus SHA-256 verification.
- Generated archive install into the live `nextcloud` container, then PHP lint, `occ app:enable library`, `occ upgrade`, router listing and live Vue/browser smokes.

Older shipped slices have also been live-smoked for catalogue browsing, metadata separation, multi-root confidence, last-opened activity, description search, workflow status, genres/classifications, scanner-conflict review, batch operations, root recovery, single metadata surface and publication/year discovery pages.

## Practical next hardening slices

If Uwe's v0.1 test pass finds issues, prioritize fixes in this order:

1. Source-file safety, root deletion, missing-item forget, or import apply surprises.
2. Install/upgrade/package problems from generated archive.
3. Browser/runtime errors or mobile-blocking layout failures.
4. Scan stuck states, cancellation surprises, or misleading progress/history.
5. Metadata corruption, validation gaps or bad scanner provenance/reset behavior.
6. Reader/file handoff failures for common EPUB/PDF/CBZ files.
7. Cover quality failures that confuse browsing.
8. Documentation contradictions that cause testers to expect unimplemented future features.

## v0.1 testing stance

Functionality is broad enough for Uwe's v0.1 test pass. The goal now is not to hide limitations; it is to prove that the current Library workflows are safe, understandable and recoverable on real files.
