# Human Architecture Review Notes

Alpha.171 status: `0.1.0-alpha.171` unsigned package deployed to the private Nextcloud 34 test instance.

Audience: Nextcloud administrators, architecture reviewers and security reviewers  
Status: current implementation reference for Library `0.1.0-alpha.171` after unsigned-package deployment

Alpha.161 keeps one server-rendered catalogue route and its existing query/filter service contract, but selects a distinct native Review surface whenever any established review-needed filter is active. Queue links are same-origin server-root URLs, AJAX refinement retains the fail-closed request ownership from alpha.155, browser history traversal reloads authoritative server state, and failed Review requests remain visible as an accessible error instead of replacing the focused surface. No Vue Router, settings migration, detail/sidebar migration, schema change, or PHP fallback removal is included.

Alpha.158 retires remote manual-cover URLs from browser rendering. Details and catalogue cards use the same-origin `library.cover.show` route; legacy `cover_override_url` database values are retained for compatibility but are inert and are cleared by a valid upload or revert. Remote cover SSRF was not present because Library performed no server-side fetch of that value. This slice removes direct browser leakage and intentionally does not introduce server fetching. It does not harden archive extraction, add cover caching, or establish broad privacy completion.

Alpha.155 hardens frontend request ownership: catalogue filtering aborts superseded GETs and also guards state application with a monotonic generation; detail metadata POSTs are serialized with one coalesced latest snapshot; star mutation controls reject repeat activation while pending and expose failures on both catalogue and detail surfaces.

Alpha.154 observes measured scanner, catalogue, and cover operation boundaries with a monotonic clock. It emits aggregate privacy-allowlisted application logs only—not external telemetry or full HTTP latency—and makes no universal speedup claim. Progress persistence and cancellation checks occur initially and then after 100 traversal units or 1000 ms, including unsupported nodes and nested or empty folders. A single filesystem listing/node call or extraction/storage operation remains non-preemptive; the longest such operation is therefore the cancellation bound.

The portable database fields `started_at`, `run_started_at`, and `finished_at` remain epoch seconds. Queue wait and displayed running or cancelled wall durations are second-resolution approximations. Completed and failed worker `duration_ms` values come from the monotonic worker clock and remain integer milliseconds.

Scan counters are aggregate instrumentation, not per-file telemetry. `metadataExtractions` counts attempts entering extraction, including failed extraction attempts; `itemRefreshes` counts successful ensureItem returns, so failed refresh attempts are excluded. Cancellation counters are the latest persisted snapshot and can trail in-process work by up to the polling policy bound. Cancellation duration and queue wait are second-resolution approximations derived from persisted timestamps. Because worker-local phase durations and polling/write counts are not persisted, cancellation events set `worker_metrics_available=false` and emit those fields as null rather than false zero.

This document answers: what changes when Library is installed in a Nextcloud instance, which schema objects and jobs are added, what prerequisites and optional dependencies exist, and which parts of the surrounding Nextcloud stack Library relies on.

## Executive summary

Library is a conventional Nextcloud app with app id `library` and PHP namespace `OCA\Library`.

It does **not** move, copy, rewrite or take ownership of source publication files. Nextcloud Files remains canonical storage. Library adds an app-owned catalogue/index beside those files:

- app navigation entry: **Library**;
- personal settings section: `/settings/user/library`;
- app database tables prefixed `library_`;
- a queued background scan job class;
- HTTP routes under `/apps/library/...`;
- Vue/Vite browser assets shipped inside the app package;
- no app-specific `occ` command classes at the moment.

Current runtime dependencies are Nextcloud 34 APIs plus normal PHP extensions already expected by the deployed Nextcloud environment. PHP `zip`/`ZipArchive` and XML parsing are important for EPUB/CBZ/OPF extraction and sidecar ZIP export. Reader/viewer behaviour is delegated to the installed Nextcloud viewer stack; the `epubviewer` app is useful for EPUB reading in the current Alice test environment but is not declared as a hard app dependency in `appinfo/info.xml`.

## Declared Nextcloud app metadata

Source: `appinfo/info.xml`.

- App id: `library`
- Display name: `Library`
- Namespace: `Library` / PHP namespace `OCA\Library`
- Current deployed alpha version: `0.1.0-alpha.171` (unsigned package on private test instance)
- Licence declaration: `agpl` in `info.xml`; repository license is `AGPL-3.0-or-later`.
- Categories: `files`, `multimedia`
- Nextcloud compatibility: `min-version="34"`, `max-version="34"`
- Navigation entry:
  - name: `Library`
  - route: `library.page.index`
  - icon: `img/app.svg`
  - order: `8`
- Personal settings registration:
  - `OCA\Library\Settings\Personal`
  - `OCA\Library\Settings\PersonalSection`

There is no declared dependency on another app such as `epubviewer` in `info.xml`.

Recent security hardening: public parser/scanner/import/job diagnostics are produced through `OCA\Library\Service\SafeDiagnostics`. User-facing text is bounded to stable diagnostic codes and `libdiag-...` correlation IDs; raw exception messages, SQL fragments, absolute paths and token-like details are kept server-side or sanitized when projecting legacy persisted `scan_error` values. Metadata-error TSV exports also neutralize spreadsheet formulas before download. The native item sidebar now uses normal Nextcloud framework authentication instead of a `PublicPage` boundary, while retaining generic unauthenticated/non-owned/invalid-item 404 responses and an explicit response allowlist.

## Prerequisites

### Runtime platform

Required for the app as currently packaged:

- Nextcloud 34.
- A database supported by Nextcloud migrations/query builder. Development and smoke tests currently run against the Alice Dockerized Nextcloud instance; the migrations use standard Nextcloud schema APIs and app-owned tables.
- PHP runtime matching Nextcloud 34.
- PHP extensions/features:
  - `ZipArchive` / PHP zip extension: used for EPUB metadata/cover extraction, CBZ ComicInfo/cover extraction, and sidecar ZIP export.
  - XML parsing through `simplexml_load_string` / SimpleXML: used for OPF and ComicInfo parsing.
  - Nextcloud preview providers: optional but used first for cover images through `OCP\IPreview`.

If `ZipArchive` is missing, EPUB/CBZ metadata and cover extraction paths degrade or fail depending on the route. The sidecar ZIP export requires ZIP support to generate the archive. The current app should therefore be reviewed as requiring PHP zip for full alpha functionality.

### Nextcloud apps / services used

Library uses public Nextcloud APIs and existing core app surfaces:

- Files app and file cache/file IDs: canonical source files and handoff URLs.
- Files/WebDAV: **Download** links point to `/remote.php/dav/files/{userId}/{path}`.
- Preview manager: cover route first asks Nextcloud preview providers for cover images.
- System tags: Library can display/add/remove Nextcloud system tags for the backing file.
- Comments: Library can display/add Nextcloud file comments for the backing file.
- Background jobs: Library queues scans through Nextcloud's background job system.
- Personal settings: roots/scans/import tools live under the user's settings section.

Reader/viewer dependencies are deliberately soft:

- **Read** uses Library's `/apps/library/items/{itemId}/open` route, records `last_opened_at`, then redirects to Nextcloud's stable `/f/{fileId}` route.
- Actual EPUB/PDF/CBZ rendering is handled by whatever viewer/reader apps are installed.
- On Alice, `epubviewer`, `files_pdfviewer` and `viewer` are known compatible, but `epubviewer` is not required for installing Library and is not called directly by Library.

### Build and development prerequisites

Only needed to build or test from source, not to run an installed release archive:

- Node.js `^24.0.0` and npm `^11.3.0` per `package.json`.
- npm dependencies:
  - runtime/browser bundle inputs: `vue`, `@nextcloud/initial-state`, `@nextcloud/l10n`, `@nextcloud/router`, `@nextcloud/vue`;
  - dev/build/test: `vite`, `vitest`, `@vitejs/plugin-vue`, `@vue/test-utils`, `happy-dom`, `@nextcloud/browserslist-config`, `@vitest/coverage-v8`.
- Python 3 for repository contract tests and Markdown link checks.
- Docker/Nextcloud container access for the included live smoke scripts.

The packaged app ships built `js/` and `css/` assets; it does not require Node.js on the production Nextcloud server.

## What is added to the Nextcloud database

All schema changes are app-owned and use the `library_` prefix. Library does not alter Nextcloud core tables via migrations. `appinfo/database.xml` is the current reviewer-facing schema declaration and should stay aligned with all migrations.

### `library_roots`

Purpose: per-user catalogue roots. These are pointers to existing folders/files in Nextcloud Files; deleting a Library root removes only Library's root/index metadata, not source files.

Columns: `id`, `user_id`, `path`, `label`, `enabled`, `last_scan_at`, `created_at`, `updated_at`.

Indexes: primary `library_roots_id`, `library_roots_user_id`, and unique `library_roots_user_path_unique` on `user_id`, `path`.

Repair resolves stable file IDs only through the current user's folder. After reading node metadata and immediately before each repair upsert, it makes one authoritative observation of the node's current path and the user's currently enabled roots. The resulting path/root pair is passed directly to the write; paths outside the observed enabled scope fail closed, and overlaps preserve the existing enabled root when possible. Nextcloud file/root state and Library's index write do not share a transaction, so a path or root change after that observation remains outside this physical boundary.

### `library_files`

Purpose: file-index rows keyed to stable Nextcloud file IDs and root membership. This table tracks scan state, file identity and file-level diagnostics.

Columns: `id`, `user_id`, `root_id`, `file_id`, `cached_path`, `mime_type`, `extension`, `etag`, `mtime`, `size`, `metadata_input_fingerprint`, `metadata_extractor_revision`, `scan_status`, `scan_error`, `last_scanned_at`, `created_at`, `updated_at`.

Known scan statuses include `indexed`, `metadata_error`, `missing` and `sidecar`.

Indexes: primary `library_files_id`, `library_files_user_id`, `library_files_root_id`, unique `library_files_file_id_unique` on `user_id`, `file_id`, `library_files_usr_root_status` on `user_id`, `root_id`, `scan_status`, `library_files_usr_status_scan` on `user_id`, `scan_status`, `last_scanned_at`, and `library_files_usr_path` on `user_id`, `cached_path(191)`.

### `library_items`

Purpose: editable publication catalogue metadata. One item is normally attached to one indexed primary file row. Scanner-provided values are candidates; user-edited metadata is preserved across rescans.

Columns: `id`, `user_id`, `library_file_id`, `publication_type`, `title`, `subtitle`, `creators`, `publication`, `publication_date`, `language`, `publisher`, `metadata_source`, `user_edited`, `field_sources`, `field_values`, `starred`, `last_opened_at`, `description`, `workflow_status`, `subjects_json`, `classifications_json`, `personal_rating`, `cover_override_url`, `cover_override_data`, `cover_override_mime_type`, `needs_metadata`, `cover_review`, `no_publication`, `title_from_filename`, `no_description`, `weak_metadata`, `unreviewed_import`, `created_at`, `updated_at`.

Important defaults: `publication_type=other`, `metadata_source=filename`, `user_edited=false`, `starred=false`, and each review flag defaults to false.

Indexes: primary `library_items_id`, `library_items_user_id`, unique `library_items_file_unique` on `library_file_id`, legacy/user-sort indexes `library_items_usr_title`, `library_items_usr_file`, `library_items_usr_pubdate`, `library_items_usr_publication`, `library_items_usr_lastopen`, `library_items_usr_workflow`, suggestion indexes `library_items_usr_publisher`, `library_items_usr_creator`, publication-type indexes `library_items_usr_type_title_file`, `library_items_usr_type_file`, edit/star indexes `library_items_usr_edit_title`, `library_items_usr_star_title`, and review-flag indexes `library_items_usr_needmeta_title`, `library_items_usr_coverrev_title`, `library_items_usr_nopub_title`, `library_items_usr_titlefile_title`, `library_items_usr_nodesc_title`, `library_items_usr_weakmeta_title`, `library_items_usr_unrevimp_title`.

### `library_item_search_grams`

Purpose: materialized lowercased search grams for indexed arbitrary substring catalogue search without broad row scans over all text fields.

Columns: `id`, `user_id`, `item_id`, `gram`.

Indexes: primary `library_search_grams_id`, lookup `library_search_grams_lookup` on `user_id`, `gram`, `item_id`, and unique `library_search_grams_item_unique` on `item_id`, `gram`.

### `library_item_identifiers`

Purpose: child rows for exact identifiers such as ISBN and ISSN. Display punctuation is preserved while normalized values support exact search and duplicate-safe catalogue joins.

Columns: `id`, `item_id`, `user_id`, `scheme`, `display_value`, `normalized_value`, `source`, `user_edited`, `valid`, `created_at`, `updated_at`.

Indexes: primary `library_ident_id`, `library_ident_item`, and `library_ident_user_scheme_value` on `user_id`, `scheme`, `normalized_value`.

### `library_item_facets`

Purpose: normalized repeated facet values for subjects, classifications and Nextcloud tags. This keeps exact tag/classification/subject filters and high-cardinality typeahead suggestions indexed separately from the item JSON fields.

Columns: `id`, `user_id`, `item_id`, `facet_type`, `facet_value`, `normalized_value`.

Indexes: primary `library_facets_id`, `library_facets_lookup` on `user_id`, `facet_type`, `normalized_value`, `facet_value`, `library_facets_exact` on `user_id`, `facet_type`, `facet_value`, `item_id`, and unique `library_facets_item_unique` on `item_id`, `facet_type`, `normalized_value`.

### `library_scan_jobs`

Purpose: durable progress/history rows for scans queued through Nextcloud background jobs.

Columns: `id`, `user_id`, `status`, `scope_type`, `root_id`, `roots_total`, `files_indexed`, `files_added`, `paths_updated`, `files_unchanged`, `files_missing`, `error_count`, `metadata_errors`, `summary`, `started_at`, `finished_at`, `run_started_at`, `duration_ms`, `fingerprint_skips`, `metadata_extractions`, `item_refreshes`, `last_progress_at`, `current_path`.

Known job statuses include `queued`, `running`, `completed`, `failed` and `cancelled`. `scope_type` defaults to `all`. Portable timestamp columns remain epoch seconds; completed/failed `duration_ms` comes from a monotonic worker clock.

Index: primary `library_scan_jobs_id` and `library_scan_jobs_user_started` on `user_id`, `started_at`.

### `library_saved_collections`

Purpose: named user-specific saved catalogue filter sets.

Columns: `id`, `user_id`, `name`, `filters_json`, `created_at`, `updated_at`.

Indexes: primary `library_saved_collections_id`, `library_saved_coll_user`, and unique `library_saved_coll_user_name` on `user_id`, `name`.

### Migration/release evidence notes

Historical alpha.153 privacy-safe smallest-root validation remains recorded in release docs. Historical alpha.152 live MySQL migration evidence registered `Version000100Date20260911120000` and confirmed row counts unchanged while title/file/status indexes were usable. Alpha.153 added fingerprint/revision markers for trusted unchanged-file rescans. Later migrations added identifier rows, normalized facet rows, review-flag indexes, typeahead indexes and substring-search grams. The latest source tree declares the full current schema in `appinfo/database.xml`; fresh-database release rehearsal remains separate from this source-level declaration.

## Background jobs

Library adds one Nextcloud queued background job class:

- `OCA\Library\BackgroundJob\ScanJob`
- Extends: `OCP\BackgroundJob\QueuedJob`
- Queued by: `ScanController` through `OCP\BackgroundJob\IJobList`
- Arguments include the Library user id, the Library scan-job row id and optional scope such as a root id.

The job:

1. checks whether the app-owned scan-job row was cancelled before it marks the job running;
2. marks the app-owned scan-job row as running;
3. calls `LibraryScanner` for the requested scope;
4. updates progress counters while scanning;
5. finishes the app-owned row as completed, failed or cancelled;
6. respects cooperative cancellation for queued/running jobs.

Library relies on the host Nextcloud instance's existing background job runner mode (AJAX, webcron, cron or another configured runner). Production review should verify that background jobs are actually executed in the target instance.

## App routes and user-visible surfaces

Source: `appinfo/routes.php`.

### Catalogue and item routes

- `GET /apps/library/` — Vue-backed publication catalogue.
- `GET /apps/library/items/{itemId}` — item detail/workbench page.
- `GET /apps/library/items/{itemId}/sidebar` — authenticated native-sidebar JSON projection; invalid, unauthenticated, nonexistent and non-owned item IDs share the same generic 404 shape.
- `GET /apps/library/items/{itemId}/open` — records Library `last_opened_at`, then redirects to Nextcloud `/f/{fileId}`.
- `POST /apps/library/items/{itemId}` — update Library publication metadata.
- `POST /apps/library/items/{itemId}/reset-field` — reset one field to stored scanner candidate.
- `POST /apps/library/items/{itemId}/reset-fields` — reset all supported fields to scanner candidates.
- `POST /apps/library/bulk/items/reset-filtered-fields` — reset scanner candidates for the explicit catalogue selection.
- `POST /apps/library/items/{itemId}/star` — toggle Library-native starred state.
- `POST /apps/library/items/{itemId}/workflow-status` — set Library-native workflow status.
- `POST /apps/library/items/{itemId}/forget-missing` — remove a Library catalogue entry only after its backing file is missing.

### Root and scan routes

- `POST /apps/library/roots` — create/update root from personal settings.
- `POST /apps/library/roots/{rootId}` — edit root metadata.
- `POST /apps/library/roots/{rootId}/toggle` — enable/disable a root.
- `POST /apps/library/roots/{rootId}/delete` — delete Library root/index metadata only.
- `POST /apps/library/scan` — queue all enabled roots.
- `POST /apps/library/scan/roots/{rootId}` — queue one selected root.
- `POST /apps/library/scan/retry-metadata-errors` — queue retry for current metadata-error rows.
- `POST /apps/library/scan/recheck-missing-files` — queue recheck for missing-file rows.
- `POST /apps/library/scan/jobs/{jobId}/cancel` — cancel queued/running scan job cooperatively.
- `GET /apps/library/scan/progress` — latest progress JSON.

### Export/import routes

- `GET /apps/library/export/metadata` — side-effect-free corrected metadata JSON export.
- `GET /apps/library/export/metadata/sidecar-manifest` — read-only proposed `.library.json` sidecar manifest.
- `GET /apps/library/export/metadata/sidecars.zip` — ZIP download containing proposed `.library.json` sidecar files and manifest; does not write into source folders.
- `POST /apps/library/import/metadata/preview` — preview corrected-metadata import without writing.
- `POST /apps/library/import/metadata/apply` — apply matched corrected metadata to existing Library items.

### Cover, tag and comment routes

- `GET /apps/library/items/{itemId}/cover` — permission-scoped cover response. Uses Nextcloud preview first, then EPUB manifest cover, then CBZ first image, then SVG placeholder. Returns diagnostic headers.
- `POST /apps/library/items/{itemId}/tags` — add/create/assign a Nextcloud system tag to the backing file.
- `POST /apps/library/items/{itemId}/tags/{tagId}` — remove a visible/assignable Nextcloud system tag from the backing file.
- `POST /apps/library/items/{itemId}/comments` — add a Nextcloud file comment to the backing file.

Read-only GET routes are annotated for no CSRF where appropriate. Mutating POST routes are intended to use normal Nextcloud CSRF protection through rendered request tokens.

## Command-line elements

Library currently does **not** register app-specific `occ` commands.

Operational command-line interactions use existing Nextcloud and repository commands:

- Install/enable/upgrade in a Nextcloud instance:
  - `php occ app:enable library`
  - `php occ upgrade`
  - `php occ background-job:list --class='OCA\Library\BackgroundJob\ScanJob' --output=json`
  - `php occ background-job:execute --force-execute <id>` for explicit smoke/debug runs
  - `php occ files:scan --path='<user>/files/<folder>'` when fixture/source files are added directly into Nextcloud data storage during tests
- Repository development/release commands:
  - `npm run check`
  - `npm run build`
  - `npm run test`
  - `npm run package:release`
  - `npm run smoke:vue`
  - `npm run smoke:browser`
  - other focused smoke scripts listed in `package.json` for metadata separation, multi-root, last-opened, descriptions, workflow status, subjects/classifications, conflict review, bulk reset and scale pilots.

The catalogue exposes a dedicated count-only service path for Useful-view and saved-collection badges. Normal count filters execute a database count without materializing item rows or computing facets. Ordinary catalogue/AJAX item DTOs are explicitly projected: they omit unbounded cover override blobs, raw provenance maps, comments and detail-only mutation URLs while retaining tags, descriptions, diagnostics and visible card actions. Their SQL query also avoids selecting cover override data. Scanner-conflict and weak-metadata review views intentionally retain the richer provenance needed by the review workbench; detail, cover, export and import paths remain full-fidelity. Workload-led indexes now cover common sort/filter paths, review flags, exact facets/typeaheads and arbitrary substring search grams. Scanner-conflict counts remain the deliberate exception: they read matching rows and apply the same PHP conflict predicate as the visible catalogue until an equivalent SQL predicate is implemented.

## Data ownership and side effects

Library owns:

- `library_roots`
- `library_files`
- `library_items`
- `library_scan_jobs`
- `library_saved_collections`
- `library_item_identifiers`
- `library_item_facets`
- `library_item_search_grams`
- app navigation/settings registrations
- app assets under the installed `custom_apps/library` directory

Library reads from or calls into:

- Nextcloud Files/filecache through public Files APIs and stable file ids;
- Nextcloud previews;
- Nextcloud system tags;
- Nextcloud comments;
- WebDAV download endpoints;
- `/f/{fileId}` and Files app URLs for handoff.

Library does not currently:

- rewrite source EPUB/PDF/CBZ/OPF files;
- create `.opf` or `.library.json` files next to source documents;
- modify Nextcloud core database schema;
- add a custom reader/viewer implementation;
- require `epubviewer` as a declared hard dependency;
- require internet metadata lookups or AI services;
- register app-specific CLI commands.

Mutating actions that do affect Nextcloud-owned collaboration metadata:

- adding/removing Nextcloud system tags on a backing file;
- adding Nextcloud file comments.

Mutating actions that affect only Library-owned app tables:

- configuring roots;
- scan jobs and scan progress/history;
- file index rows and scan diagnostics;
- publication metadata edits/resets;
- starred state;
- last-opened timestamp from Library Read action;
- workflow status;
- subjects/classifications;
- description;
- import apply for matched corrected metadata.

## Metadata extraction boundaries

Library maps all extractors into one general publication model. It intentionally avoids separate book/comic/PDF-specific tables.

Current extractor sources:

- filename/folder pattern fallback;
- EPUB package OPF inside `.epub` archives;
- standalone `.opf` files;
- same-basename `.opf` or folder `metadata.opf` sidecars for primary files;
- basic PDF Info dictionary fields;
- CBZ `ComicInfo.xml`.

Current cover sources:

1. Nextcloud preview provider via `OCP\IPreview`;
2. EPUB package manifest cover image;
3. first image in CBZ archive;
4. generated SVG placeholder.

Diagnostic cover headers are emitted so reviewers can tell which path was used without inspecting image pixels.

## Security and privacy review notes

- All catalogue rows are scoped by `user_id`; root, file and item services resolve rows for the current user.
- Source file access is still governed by Nextcloud Files permissions; Library stores file ids and cached paths but does not bypass Nextcloud storage ownership.
- The app currently targets personal libraries rather than shared/admin-managed collection roots.
- Corrected metadata exports contain user-edited catalogue metadata and file identity/path information. Treat exports as personal data.
- Sidecar manifest and sidecar ZIP routes are read-only in the source tree, but the downloaded archive contains proposed sidecar metadata and paths.
- Import apply only targets matched existing Library items; it is not a fresh-install restore mechanism yet.
- POST routes should retain CSRF protection; direct app-password POSTs may return 412 even when the route is healthy.

## Architecture review checklist

Use this checklist before approving installation in a non-disposable Nextcloud instance:

1. Confirm the target server is Nextcloud 34.
2. Confirm PHP zip/`ZipArchive` and SimpleXML are available.
3. Confirm background jobs are configured and running.
4. Confirm preview providers are configured if cover quality matters.
5. Confirm desired reader/viewer apps are installed for EPUB/PDF/CBZ rendering; `epubviewer` is optional and environment-specific, not a hard Library dependency.
6. Confirm the Library database tables are acceptable as app-owned per-user metadata.
7. Confirm exports are treated as user data because they contain corrected metadata and paths.
8. Confirm admins understand that Library root deletion, missing-item forget and sidecar ZIP export do not delete or rewrite source files.
9. Run the release package install smoke from `RELEASE.md` on a disposable/test instance before production use.

## Open review questions

- Should the next alpha declare PHP zip/SimpleXML expectations more explicitly in release notes or install docs?
- Should Library eventually register an `occ library:*` command set for scan/repair/export operations, or stay UI/background-job-first?
- Should shared/team libraries get a separate admin-managed root model instead of extending per-user roots?
- Should `epubviewer` be detected and surfaced as a capability label, while keeping `/f/{fileId}` as the default handoff?
- How should Library document the boundary between app-owned corrected-metadata export/import and external file-first tooling that writes source-folder OPF/JSON sidecars?
