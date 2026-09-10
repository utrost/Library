# Human Architecture Review Notes

Audience: Nextcloud administrators, architecture reviewers and security reviewers  
Status: current implementation reference for Library `0.1.0-alpha.143`

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
- Current version: `0.1.0-alpha.143`
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
- Files/WebDAV: **Download source** links point to `/remote.php/dav/files/{userId}/{path}`.
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

All schema changes are app-owned and use the `library_` prefix. Library does not alter Nextcloud core tables via migrations.

### `library_roots`

Purpose: per-user catalogue roots. These are pointers to existing folders/files in Nextcloud Files; deleting a Library root removes only Library's root/index metadata, not source files.

Columns:

- `id` integer unsigned autoincrement primary key
- `user_id` string(64), not null
- `path` string(1024), not null
- `label` string(255), nullable
- `enabled` boolean, not null, default true
- `last_scan_at` integer unsigned, nullable
- `created_at` integer unsigned, not null
- `updated_at` integer unsigned, not null

Indexes:

- `library_roots_user_id` on `user_id`
- `library_roots_user_path_unique` unique on `user_id`, `path`

### `library_files`

Purpose: file-index rows keyed to stable Nextcloud file IDs and root membership. This table tracks scan state and file-level diagnostics.

Columns:

- `id` integer unsigned autoincrement primary key
- `user_id` string(64), not null
- `root_id` integer unsigned, not null
- `file_id` integer unsigned, not null; Nextcloud file id
- `cached_path` string(1024), not null
- `mime_type` string(255), not null
- `extension` string(32), nullable
- `etag` string(255), nullable
- `mtime` integer unsigned, nullable
- `size` bigint unsigned, nullable
- `scan_status` string(32), not null, default `indexed`
- `scan_error` string(1024), nullable; added by a later migration
- `last_scanned_at` integer unsigned, not null
- `created_at` integer unsigned, not null
- `updated_at` integer unsigned, not null

Known scan statuses include:

- `indexed`
- `metadata_error`
- `missing`
- `sidecar`

Indexes:

- `library_files_user_id` on `user_id`
- `library_files_root_id` on `root_id`
- `library_files_file_id_unique` unique on `user_id`, `file_id`

### `library_items`

Purpose: editable publication catalogue metadata. One item is normally attached to one indexed file row. Scanner-provided values are candidates; user-edited metadata is preserved across rescans.

Columns:

- `id` integer unsigned autoincrement primary key
- `user_id` string(64), not null
- `library_file_id` integer unsigned, not null
- `publication_type` string(32), not null, default `other`
- `title` string(512), not null
- `subtitle` string(512), nullable
- `creators` string(1024), nullable
- `publication` string(512), nullable; series/periodical/publication grouping field
- `publication_date` string(64), nullable
- `language` string(64), nullable
- `publisher` string(512), nullable
- `metadata_source` string(32), not null, default `filename`
- `user_edited` boolean, not null, default false
- `field_sources` text, nullable; JSON object of per-field scanner provenance
- `field_values` text, nullable; JSON object of latest stored scanner candidates
- `starred` boolean, nullable; Library-native personal star/bookmark state
- `last_opened_at` integer unsigned, nullable; Library-native read/open activity timestamp
- `description` text, nullable; Library-native long description
- `workflow_status` string(32), nullable; Library-native workflow state
- `genres_json` text, nullable; JSON array of Library-native genres
- `classifications_json` text, nullable; JSON array of Library-native classifications
- `created_at` integer unsigned, not null
- `updated_at` integer unsigned, not null

Indexes:

- `library_items_user_id` on `user_id`
- `library_items_file_unique` unique on `library_file_id`

### `library_scan_jobs`

Purpose: durable progress/history rows for scans queued through Nextcloud background jobs.

Columns:

- `id` integer unsigned autoincrement primary key
- `user_id` string(64), not null
- `status` string(32), not null, default `running`
- `scope_type` string(32), nullable; e.g. all roots, single root, metadata errors, missing files
- `root_id` integer unsigned, nullable
- `roots_total` integer unsigned, not null, default 0
- `files_indexed` integer unsigned, not null, default 0
- `error_count` integer unsigned, not null, default 0
- `summary` text, nullable
- `started_at` integer unsigned, not null
- `finished_at` integer unsigned, nullable

Known job statuses include:

- `queued`
- `running`
- `completed`
- `failed`
- `cancelled`

Index:

- `library_scan_jobs_user_started` on `user_id`, `started_at`

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
- `GET /apps/library/items/{itemId}/open` — records Library `last_opened_at`, then redirects to Nextcloud `/f/{fileId}`.
- `POST /apps/library/items/{itemId}` — update Library publication metadata.
- `POST /apps/library/items/{itemId}/reset-field` — reset one field to stored scanner candidate.
- `POST /apps/library/items/{itemId}/reset-fields` — reset all supported fields to scanner candidates.
- `POST /apps/library/bulk/items/reset-fields` — bulk reset selected item ids from settings/review workflow.
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
  - other focused smoke scripts listed in `package.json` for metadata separation, multi-root, last-opened, descriptions, workflow status, genres/classifications, conflict review, bulk reset and scale pilots.

## Data ownership and side effects

Library owns:

- `library_roots`
- `library_files`
- `library_items`
- `library_scan_jobs`
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
- genres/classifications;
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
