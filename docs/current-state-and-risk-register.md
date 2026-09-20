# Current state and risk register

Current app version: `0.1.0-alpha.172` unsigned package, built from merged `main` and deployed on the private Nextcloud 34 test instance. Accessibility-tree evidence is not screen-reader testing; manual AT testing is pending.

This snapshot prepares Library for the v0.1 alpha test pass. It documents what is implemented and verified now, where the app is safe to test, and which risks remain intentionally outside the current release candidate.

## Deployment posture

- Target: private Nextcloud 34 test instance, currently smoke-tested in the `nextcloud` Docker container.
- App id: `library`.
- Current deployed version: `0.1.0-alpha.172`; the unsigned exact package has been built, audited, installed on the private `nextcloud` container, and live-smoked.
- Intended audience now: trusted early testers on a disposable or private Nextcloud 34 instance.
- Not yet claimed: public Nextcloud App Store readiness, signed release artifacts, multi-version Nextcloud compatibility, or a public-internet operational hardening guarantee.
- Storage model: Nextcloud Files remains canonical; Library stores app-owned root, file-index, scan-job and catalogue metadata rows. Source folders untouched is a release-critical boundary, and tester reports should explicitly confirm source folders untouched after repair/delete/export workflows.

## Implemented product surface

Implemented and ready for v0.1 testing:

- Native Library/Review shell destinations. Review presents the existing scanner-conflict, weak-metadata, metadata-error, and missing-field filters as shareable, webroot-aware queues with focused results and explicit loading, error, and empty states. Settings remains `/settings/user/library`; detail and fallback rendering remain PHP-backed.
- Per-user Library roots with add/edit/enable/disable/delete, typed delete confirmation and recovery guidance.
- Asynchronous Settings operations for queued all-root and per-root scans, per-root publication counts, scan progress/history, metadata-error retry, missing-file recheck, queued cancellation and cooperative running-job cancellation. Running jobs persist a bounded heartbeat and current path; stale status is observational and does not force a terminal transition.
- Conservative unchanged-file rescans: an ordinary trusted indexed file with an existing item and current pipeline revision skips metadata content extraction and item writes only when its primary plus selected OPF sidecar identity/path/ETag/mtime/size/type fingerprint matches. Retry and recheck remain forced extraction paths.
- EPUB, PDF, CBZ and OPF indexing with extractor failure isolation and missing-file diagnostics.
- General editable publication metadata: title, subtitle, creators, publication/series, date, language, publisher, description, workflow status, subjects and classifications.
- Scanner provenance/candidates, differs-from-scanner labels, correction counts, single-field reset, whole-item reset, conflict review filter and batch scanner-candidate reset.
- Bounded server-backed Home, Shelves and Catalogue surfaces with lazy shelf children, database-backed search, additive filters/facets, grouped filter reset actions, Home/Shelves active-filter callouts, pending draft indicators for delayed search/typeahead fields, richer filtered-empty recovery actions, lazy high-cardinality typeahead suggestions, sort modes, pagination and list/cover views. ISBN/ISSN exact normalized search uses the identifier child table; arbitrary text substrings use a materialized search-gram index; distinct catalogue selection prevents duplicate publications when one item has multiple matching identifier rows. Ordinary catalogue/AJAX item DTOs are explicitly projected: they omit unbounded cover override blobs, raw provenance maps, comments and detail-only mutation URLs while retaining tags, descriptions, diagnostics and visible card actions.
- Dedicated publication/series, publication-year and creator discovery pages around the compact catalogue grid, with publication pages showing a compact **Publication contents** issue/date coverage summary.
- Open, Show in Files and Download actions.
- Detail workbench for publication metadata, Nextcloud tags/comments, cover refresh, scanner provenance and file diagnostics.
- Nextcloud tag feedback, suggested tag buttons and explicit-selection batch tag add/remove.
- Cover route using Nextcloud preview, EPUB package cover, CBZ first image and placeholder fallback with diagnostic headers and no-store refresh paths.
- Corrected metadata JSON export, reviewable import preview, connected matched-item import apply, sidecar manifest export and sidecar ZIP export without writing into source folders.
- Cached Import Health metadata overview with explicit refresh, so heavy archive/container and cover diagnostics stay out of catalogue paging/search/filter paths.
- Library-native starring/bookmarking, last-opened activity and recently opened sorting.

## Current security and safety controls

- Mutating browser forms use Nextcloud request tokens/CSRF protection unless deliberately documented otherwise for safe GET handoff routes.
- Routes resolve data for the current user; roots and catalogue items are user-scoped.
- Root deletion and missing-item forget are app-owned-row operations only; source files remain in Nextcloud Files.
- Import apply updates matched existing Library catalogue rows; it is not a blind fresh-install restore and invalid rows are skipped rather than aborting the whole batch.
- Sidecar manifest/ZIP exports are read-only/download-only and do not write `.library.json` files into source folders.
- Temporary app-password smoke tokens are created only for live verification and deleted afterwards; token values are never documented.
- Metadata-error TSV exports neutralize spreadsheet formulas before download by prefixing formula-looking cells after separator/control-character trimming.
- Parser/scanner/import/job failures use bounded public diagnostics with stable codes and `libdiag-...` correlation IDs; raw exception text, SQLSTATE/table names, absolute paths and token-looking details stay in server-only logs or are sanitized from legacy persisted strings before user-facing projection.
- Item sidebar/detail/cover projections are user-scoped through normal authenticated Nextcloud routes; invalid IDs, unauthenticated requests and non-owned items retain generic not-found/placeholder responses, and the sidebar DTO is allowlisted.
- Supply-chain gates now pin GitHub Actions by immutable commit SHA with reviewed update comments, install hashed Python CI requirements, run production `npm audit`, enable Dependabot for npm/actions/pip, run CodeQL plus local secret/app-static checks, and emit/audit SPDX SBOM plus provenance sidecars for release packages.

## Known weak points and deferred hardening

These are acceptable for the v0.1 alpha test pass but should stay visible:

1. **Nextcloud version scope:** only Nextcloud 34 has been targeted and smoke-tested.
2. **Release packaging:** unsigned generated archive build/audit/install/live smoke is complete for alpha.171, with SBOM/provenance sidecars generated and audited, but app signing/App Store packaging is still future work.
3. **Cover lifecycle:** on-demand previews/fallbacks, refresh affordances and uploaded manual cover override/revert exist, but no app-owned cover cache or crop/rebuild workflow exists. Legacy remote URL values are inert and never rendered or fetched.
4. **Metadata portability:** export/import/apply and sidecar manifest/ZIP exist, and source-folder OPF/JSON writing plus full sidecar restore are intentionally external-tool workflows rather than app responsibilities.
5. **Scanning operations:** queued scans, progress, retry, recheck and cancellation exist; scheduled/resumable scans and notifications remain future work.
6. **Discovery:** publication/series, publication-year and creator pages exist, publication pages show compact issue/date coverage, and the weak-metadata cockpit links sparse/suspicious metadata counts back to filtered catalogue views; richer identity/issue grouping remain future work.
7. **Shared libraries:** users manage personal roots; admin-managed shared/global roots are not implemented.
8. **Readers and content services:** Library delegates reading to Nextcloud and does not provide page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.
9. **Real-collection evidence:** generated scale and selected live smokes are strong for a v0.1 candidate, but Uwe's manual test pass should still use real mixed files to find weak metadata/cover cases.
10. **Catalogue scale follow-ups:** aggregate operation instrumentation, request-race hardening, projected catalogue payloads, review-flag indexes, exact facet indexes, lazy typeahead suggestions and arbitrary-substring search grams have landed. Remaining scale risks are representative fresh-package/fresh-database evidence, non-preemptive filesystem/extraction operations, archive budgets/cache, broader privacy review, root transaction/overlap limits and any real-library query shape not covered by the current workload-led indexes.

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

Alpha.159 verification is complete for the local gate (727 Python tests, 9 PHP runtime programs, 26 Vitest tests, production build and Markdown links), unsigned 120-entry package build/audit, and exact-package checksum/install/enable, PHP, routes, scanner, live Vue/API, browser and privacy smoke. The package smoke ended with `release_package_smoke_ok=true`; browser console errors and cross-origin cover requests were zero, and deterministic second-user isolation passed. The exact `dist/library-0.1.0-alpha.159.tar.gz` SHA-256 is `4287ec3f7a798ba6e6000900ca69aee1540b163146f53262a05e49095718c5d7`. The upgrade reported `No upgrade required`, so this was not a fresh-database migration rehearsal.

Alpha.171 exact-package and security-hardening evidence is current: PRs #69 and #70 merged on `main`, CI passed, `scripts/package-release.sh` built and audited `dist/library-0.1.0-alpha.172.tar.gz` with SHA-256 `dee035479b847c091490ad7a57e9d04ef121180ddd6dd73ae7f6d5f00ac7e97f`, and the package was installed into the private `nextcloud` container. Deployed checksums matched for `appinfo/info.xml` and `lib/Service/SafeDiagnostics.php`; live reflection showed legacy `PDOException SQLSTATE[...]` text becomes a safe `metadata_extraction_failed` diagnostic with no SQLSTATE/table/exception leakage; the Vue route smoke returned `vue_smoke_ok=true` with temporary-token cleanup at zero. Real-world mixed corpus acceptance, a signed package and App Store submission, manual AT testing, and formal Trust-and-scale phase closure remain deferred.

Historical alpha.158 verification completed its local, unsigned package, exact-package and live gates, including the privacy and 40-file unchanged-root evidence recorded in the release documents.

Older shipped slices have also been live-smoked for catalogue browsing, metadata separation, multi-root confidence, last-opened activity, description search, workflow status, subjects/classifications, scanner-conflict review, batch operations, root recovery, single metadata surface and publication/year/creator discovery pages.

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
