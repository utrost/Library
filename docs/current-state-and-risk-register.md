# Current state and risk register

Current private deployment: **0.2.0-beta.1**, the signed App Store candidate, on developer Nextcloud 34.0.3 (`http://100.123.149.120:8088`). Integrity verification and Chromium/Firefox checks pass; maintenance mode is off and the catalogue contains 107,717 items. The exact signed archive passed fresh-install and populated-upgrade checks on NC33–35, including 210/210 Playwright executions. See [final release verification](compatibility-evidence/2026-09-30-beta1/README.md). Owner acceptance, App Store account registration and publication remain pending. Manual assistive-technology testing and PostgreSQL coverage remain outstanding.

This snapshot records the beta release posture and the remaining risks; later sections preserve historical alpha evidence where useful.

## Alpha.25 author-field recovery — 2026-09-27

Invalid extracted authors now produce a field-level Review warning while retaining valid metadata and accepted author values. Fixture, incremental schedule and developer browser checks passed. The alpha.25 real all-root scheduled scan passed: 107,717 publication files, all seven roots, zero root failures, unchanged pre-existing source markers and user corrections. It discovered 23,448 additional publication files; the catalogue contained 107,707 items at that point. There were 799 metadata warnings (786 archive, three author-field, ten other extraction failures) for Review. See the [acceptance report](performance/2026-09-27-alpha25/README.md). The alpha.28 catalogue contains 107,717 entries with the same 799 warnings.

## Alpha.24 measured improvements — 2026-09-27

[Developer NC34 verification](performance/2026-09-27-alpha24/README.md) reduces manual duplicate SQL and repeated catalogue translation/sanitization work. Duplicate comparison remains bounded and conservative. CPU and browser measurements are small samples on the shared developer host. Alpha.24 has not repeated the NC33–35 matrix; alpha.23 remains the last full compatibility result.

## Alpha.22 performance fixes — 2026-09-27

[Measured fixes and verification](performance/2026-09-27-alpha22/README.md) address the stale worker and shared author-key failures. Catalogue hydration now uses lightweight choices, Review counts load on demand, missing status queries use the file-owner index, title navigation uses cursors, identifier reads and search writes are batched, and covers use bounded private thumbnails with independent viewport loading. This entry records developer NC34 verification for alpha.22; alpha.23 below includes NC33–35 compatibility. Concurrent-user capacity remains pending. The alpha.21 audit below records the original findings rather than the current fixed state.

## Performance audit — 2026-09-27

[Whole-app audit on 84,261 books](performance/2026-09-27-alpha21/README.md) found two operational blockers: stale running scan job 14 prevents due scheduled scans, and an author-facet uniqueness collision fails maintenance and some scan metadata refreshes. Daily configuration is **not proof of successful real-library scheduled execution**. Neither issue was repaired by this measurement task. Other priorities: 30.9-second deferred hydration, 23.1-second empty missing view, 10.3-second deep pagination, excessive search-index INSERTs, and heavy cover/render work. First-page catalogue, indexed duplicate hints, lists and small metadata actions are fast. [Reusable benchmark commands](performance-benchmarking.md) and sanitized evidence are available; no optimization was deployed.

## Alpha.21 update — 2026-09-27

[Scheduled scans](automatic-scans.md) are available and the developer account is configured daily. New/changed/deleted publications and OPF sidecars were verified in a disposable account on the existing NC34 instance. User corrections remain protected. Folder traversal still scales with root size; this slice does not claim a full 84k scan benchmark or NC33/35 verification.

## Alpha.20 update — 2026-09-27

The current developer deployment adds optional indexed duplicate suggestions to catalogue pages and the metadata sidebar. [Measurements and verification](compatibility-evidence/2026-09-27-opportunistic-duplicates-alpha20/README.md) cover 84,261 real catalogue books on Nextcloud 34.0.3. Initial background indexing slows concurrent catalogue requests and uses approximately 161 MiB of database storage. Suggestions are bounded heuristics, never automatic deletion or a guarantee of uniqueness. Legacy alpha.19 decisions are retained but not backfilled into automatic hints. This slice has not been rerun on disposable NC33/35 or tested with concurrent users at production scale.

## Deployment posture

- Target: private Nextcloud 34 test instance, currently smoke-tested in the `nextcloud` Docker container.
- App id: `library`.
- Historical alpha.29 deployment: `0.2.0-alpha.29`, installed on `nextcloud`, with frozen whole-folder analyses, cancellation, saved result pages, ordered authors and explicit 40-book Apply/Undo. See the [alpha.18 developer verification](compatibility-evidence/2026-09-26-whole-folder-alpha18/README.md). Alpha.28 passed 105 browser executions on disposable Nextcloud 33.0.9, 34.0.4 and 35.0.0 with 40 English Gutenberg books, plus service and extra smoke checks; see the [verification report](performance/2026-09-28-alpha28/README.md). Alpha.26 has developer NC34 scanner index reuse, transaction rollback and measured fixed-sample verification; see [measurements](performance/2026-09-27-alpha26/README.md). Recent process and mutation checks used owned disposable fixtures; the real catalogue remained unchanged. Earlier read-only list and inference evidence is in the [alpha.12 report](compatibility-evidence/2026-09-26-alpha12/README.md). That historical build was unsigned; the current signed beta is described above.
- Latest UX check: private list movement/removal remains available during list editing, notes and drafts persist, and catalogue selection uses the inline list picker. Static help uses hover/focus/tap tooltips; fields retain their accessible names and original label associations. Versioned frontend URLs include alpha.22. Inference supports explicit whole-folder analysis and paged review/Apply with conditional Undo; authors are stored and browsable individually; see the [extraction guide](extracting-metadata.md).
- Development cadence: deploy small slices here, run minimal feature checks, obtain user UX feedback, then run deeper tests/all Playwright scenarios and the disposable compatibility matrix at a milestone. Do not recreate Nextcloud or run the full suite after every edit.
- Deployment recovery (2026-09-25): app/database backups are in `/tmp/library-dev-before-alpha1-GhDlNl`. An old duplicate uppercase `custom_apps/Library` folder (alpha.171) caused the instance integrity check to fail; it was preserved at `/var/www/html/data/library-deployment-backups/Library-alpha171` inside the container. Maintenance mode is off and no database upgrade is pending. Keep backups until the development deployment has been accepted.
- Intended audience now: trusted early testers on a disposable or private Nextcloud 34 instance.
- Not yet claimed: public Nextcloud App Store readiness, signed release artifacts, or a public-internet operational hardening guarantee. The app declares Nextcloud 33–35 compatibility; the exact beta archive passed all 9 main Playwright smoke executions on 33.0.9, 34.0.4 and 35.0.0 with 40 English Gutenberg books, documented in the [final compatibility assessment](compatibility-evidence/2026-09-25-beta1/final-compatibility-assessment.md).
- Storage model: Nextcloud Files remains canonical; Library stores app-owned root, file-index, scan-job and catalogue metadata rows. Source folders untouched is a release-critical boundary, and tester reports should explicitly confirm source folders untouched after repair/delete/export workflows.

## Implemented product surface

Implemented and ready for v0.1 testing:

- Native Library/Review shell destinations. Review presents the existing scanner-conflict, weak-metadata, metadata-error, and missing-field filters as shareable, webroot-aware queues with focused results and explicit loading, error, and empty states. Settings remains `/settings/user/library`; detail and fallback rendering remain PHP-backed.
- Per-user Library roots with add/edit/enable/disable/delete, typed delete confirmation and recovery guidance.
- Asynchronous Settings operations for queued all-root and per-root scans, per-root publication counts, scan progress/history, metadata-error retry, missing-file recheck, queued cancellation and cooperative running-job cancellation. Running jobs persist a bounded heartbeat and current path; stale status is observational without being destructively changed to failed.
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

These remain visible for the beta release decision and stable follow-up:

1. **Nextcloud version scope:** app metadata declares Nextcloud 33–35. The exact beta archive installed and passed the main screenshot-producing Playwright journeys on 33.0.9, 34.0.4 and 35.0.0 with 40 English Gutenberg books. This matrix does not cover every UI path or a representative mixed-format library.
2. **Release packaging:** the beta source is committed/tagged locally, and its unsigned archive passed package audit and the disposable matrix. A public branch/tag, hosted CI on the exact commit, signing certificate, signed archive and App Store submission remain open.
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

Alpha.171 exact-package and security-hardening evidence is current: PRs #69 and #70 merged on `main`, CI passed, `scripts/package-release.sh` built and audited `dist/library-0.1.0-alpha.174.tar.gz` with SHA-256 `dee035479b847c091490ad7a57e9d04ef121180ddd6dd73ae7f6d5f00ac7e97f`, and the package was installed into the private `nextcloud` container. Deployed checksums matched for `appinfo/info.xml` and `lib/Service/SafeDiagnostics.php`; live reflection showed legacy `PDOException SQLSTATE[...]` text becomes a safe `metadata_extraction_failed` diagnostic with no SQLSTATE/table/exception leakage; the Vue route smoke returned `vue_smoke_ok=true` with temporary-token cleanup at zero. Real-world mixed corpus acceptance, a signed package and App Store submission, manual AT testing, and formal Trust-and-scale phase closure remain deferred.

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

## Alpha.17 author and maintenance slice

Scheduled approval-history expiry and account-deletion cleanup are implemented. Ordered author arrays, individual-author facets/browsing and author Apply/Undo are implemented; legacy records migrate gradually through the background runner. Developer Nextcloud 34/MariaDB evidence is recorded in the [alpha.17 report](compatibility-evidence/2026-09-26-authors-cleanup-alpha17/README.md). This slice has no new Nextcloud 33/35 or PostgreSQL/SQLite integration claim. Whole-folder inference jobs and source-file writes remain future scope.

## Alpha.19 duplicate review

Private duplicate discovery and review decisions are implemented; see the [guide and limits](duplicate-review.md). Developer 34/MariaDB verification covers matching, persistent decisions, live revision checks, ownership, background jobs, cleanup and browser layouts. This is not an exhaustive duplicate detector and does not delete or merge files. No new 33/35 or PostgreSQL/SQLite integration claim.

During this slice, existing developer background activity also logged a creator-facet unique-key collision during legacy author backfill and an ambiguous `file_id` query outside the duplicate service. These require a separate maintenance/scanner investigation; the duplicate-specific tests passed independently. Do not treat this feature report as an assertion that the entire developer log is error-free.

## Alpha.23 performance follow-up

Developer Nextcloud 34.0.3 runs alpha.23. The scanner uses bounded public Files search pages and live source resolution/existence checks, with conservative missing sweeps when a scope changes. PDF metadata prefixes and archive copies use Files streams instead of whole-publication PHP buffers; stale-worker timestamp cutoffs use integer bindings on SQLite. Facet writes, read-only inference snapshots and scan observations are batched; direct catalogue pages use narrow projections/covering indexes. Administrator thumbnail budgets/retention and rotating cleanup are implemented, including a registry surviving root removal. See the [measurements and compatibility report](performance/2026-09-27-alpha23/README.md) for exact verification and remaining limits. Large scans still visit every registered publication and use scalar observed-ID sets; database tuning, full-library completion and concurrent production load require separate measurements.

Alpha.27 recovers ten previously missing PDFs and caches unchanged deterministic warnings while retaining Review visibility. The catalogue now contains 107,717 items. Developer NC34 browser and integration checks passed; source observations and manual corrections matched. See [alpha.27 verification](performance/2026-09-27-alpha27/README.md). A new alpha.27 33–35 matrix and PostgreSQL runtime check remain open.

Alpha.28 adds event-journal incremental scheduled scans and weekly full reconciliation. Developer NC34 fixture, real-library measurements and the NC33–35 full matrix: [alpha.28 report](performance/2026-09-28-alpha28/README.md). Direct storage changes require a Nextcloud cache update or full reconciliation.

Alpha.29 adds local suggested path assignments with explicit review and reusable guided rules. Developer NC34 Chromium/Firefox and mobile evidence: [alpha.29 report](compatibility-evidence/2026-09-29-inference-suggestions-alpha29/README.md). The full version matrix remains alpha.28.
