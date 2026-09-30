# Metadata Storage and Nextcloud Integration

Status: implemented storage through `0.2.0-alpha.28`, updated 2026-09-27. The future-schema section is a proposal. See the [database schema reference](database-schema.md) for all 24 app tables and migration ownership.

The [v0.2 metadata and filing proposal](v0.2-metadata-and-filing.md) explores explicit OPF sidecar writing, later embedded metadata writers, and filing based on accepted metadata. Source-folder writes described there are proposed capabilities; the current development build keeps source documents intact.

Library is file-first and Nextcloud-native, but the publication catalogue is richer than simple file properties. The storage model therefore deliberately separates file identity, catalogue metadata and Nextcloud-wide collaboration metadata.

## Principles

- Nextcloud Files remains the canonical storage for original publication files.
- Library references stable Nextcloud file IDs, not paths, as source-file identity.
- Library stores canonical publication metadata in its own app tables.
- Nextcloud system tags are used as a shared cross-archive classification layer.
- Nextcloud comments are exposed as file-level discussion/notes, not structured metadata.
- Nextcloud FilesMetadata can mirror selected Library summary fields later, but is not the primary catalogue database.
- Sidecar manifest/ZIP export and matched-item import are portability tools, not primary storage; Library does not write sidecars into source folders.

## Series and genre storage (alpha.15)

The nullable `library_items.series_name`, `series_number` and `genre` columns store the API fields `series`, `seriesNumber` and `genre`. Series and genre are limited to 255 Unicode characters; series position is text limited to 64 characters. Control characters and non-string values are rejected. Empty strings clear values. Leading zeros, decimals and labels remain intact.

These fields participate in manual editing, scanner-candidate review/reset, bulk edits and corrected-metadata JSON export/import. Partial imports preserve omitted fields; older editor requests that omit the new fields preserve them. Manual changes use the existing item-level rescan protection.

The migration adds nullable columns without rewriting historical metadata. `publication` continues to hold legacy series/periodical data; no ambiguous automatic backfill is performed. Reviewed inference Apply/Undo is implemented, including ordered authors. Dedicated series/genre filters and automatic embedded series/genre import remain future work. The current metadata pipeline revision is `metadata-pipeline-v6`; scans can re-evaluate older candidates. Source documents are never modified by these edits.

## Three different metadata layers

### 1. Technical source-file metadata

Stored in `library_files` and refreshed by scans:

```text
id
user_id
root_id
file_id
cached_path
mime_type
extension
etag
mtime
size
metadata_input_fingerprint
metadata_extractor_revision
scan_status
scan_error
last_scanned_at
created_at
updated_at
```

This answers: which Nextcloud file backs this catalogue item?

Metadata extraction is best-effort. If a supported file is corrupt or a local extractor fails, Library keeps the file-index row, records `scan_status=metadata_error` plus a bounded safe `scan_error`, and still attempts a filename-derived catalogue item. User-facing diagnostics use stable codes and `libdiag-...` correlation IDs; raw exception text, SQLSTATE/table names, absolute paths and token-looking details stay in server-only logs or are sanitized from legacy persisted values before projection. A bad file should be diagnostic noise, not a root-scan stopper.

### 2. Library publication metadata

Stored in Library's own app tables, beginning with `library_items`:

```text
id
user_id
library_file_id
title
subtitle
publication_form / current column: publication_type
creators
authors_json
series_name
series_number
genre
publication / series-like grouping
publication_date
language
publisher
metadata_source
user_edited
field_sources
field_values
starred
last_opened_at
description
workflow_status
subjects_json
genres_json (retained legacy subject data)
classifications_json
personal_rating
cover_override_url
cover_override_data
cover_override_mime_type
cover_revision
needs_metadata
cover_review
no_publication
title_from_filename
no_description
weak_metadata
unreviewed_import
created_at
updated_at
```

This answers: what publication-like object should Library display? The current implementation also stores scanner field sources and scanner candidate values as JSON maps so user-edited rows can compare current values with refreshed scanner candidates and reset one field or the whole item when wanted. ISBN and ISSN values live in the child `library_item_identifiers` table: display punctuation is preserved, normalized values support exact search, and invalid checksums remain reviewable instead of being silently rewritten. Repeated subjects, classifications and Nextcloud tag facets are also projected into `library_item_facets` for exact filters and high-cardinality suggestions. Arbitrary catalogue text search is accelerated by `library_item_search_grams`, a materialized per-item gram table.

`publication_type` is the current implementation column name. The product language should move toward `publication_form` because this field describes the form of the publication, not the binary file format.

### 3. Nextcloud-wide collaboration metadata

Surfaced from Nextcloud APIs for the primary source file:

```text
system tags
comments
```

This answers: how does this file relate to wider Nextcloud interests, projects and collections?

Examples of good system tags:

```text
photography
simiono
camera-repair
manuals
music
piano
project-library
needs-metadata
reference
```

Tags should connect things across Nextcloud. They should not replace structured fields such as title, creator, issue number, date, language or identifier.

## Recommended v0.1 behaviour

For each Library item, show:

```text
Catalogue metadata
  title, form/type, publication, creators, date, language, publisher

Source file
  path, file id, format/mimetype, scan status

Nextcloud tags
  system tags currently assigned to the primary source file

Comments
  recent file-level Nextcloud comments as notes/discussion
```

The first integration slices read and display existing system tags and recent comments. Library can also add an existing or newly created user-visible/assignable system tag to the primary source file, remove an assigned visible/assignable tag from that source file, and add a plain Nextcloud file comment as a file-level note.

## Future canonical schema direction

The current `library_items` table is intentionally simple. The durable direction is:

```text
library_files
  technical file identity/index

library_items
  canonical publication item, one primary file in v0.1

library_item_creators
  repeated creator names with roles and order

library_item_identifiers
  isbn, issn, doi, catalogue numbers, manual numbers, etc.

library_item_tags
  optional Library-native tags/categories if system tags are not enough

library_extracted_metadata
  raw/candidate metadata with source and extractor version
```

Format adapters such as EPUB, PDF and CBZ must map into this general model. EPUB package OPF, standalone OPF files, PDF document metadata, ComicInfo.xml and filename/folder inference are candidate sources, not separate catalogue schemas.

The first local extraction slice maps EPUB package OPF (`metadata_source=epub-opf`), standalone OPF (`metadata_source=opf`) and basic PDF info dictionary fields (`metadata_source=pdf-info`) into the same `library_items` columns. PDF remains conservatively `other` unless stronger evidence says otherwise.

OPF sidecar precedence is now explicit for primary publication files: Library first looks for a same-basename OPF sidecar such as `Camera_1957_04.pdf` + `Camera_1957_04.opf`, then for folder-level `metadata.opf`. Sidecar metadata is marked `metadata_source=sidecar-opf`; sidecar values override embedded/PDF candidates while still respecting Library's existing user-edit precedence. sidecar OPF files are not indexed as separate catalogue items when they accompany a primary PDF/EPUB/CBZ; rescans clean up stale sidecar OPF catalogue rows by marking the file index row `scan_status=sidecar` and removing scanner-created catalogue items. The conservative exception is that manually edited OPF sidecar items stay visible as standalone records instead of being silently hidden or deleted; a later merge/migration workflow can adopt those corrections into the primary publication item deliberately. standalone OPF files can still be indexed for metadata-only experiments or genuinely OPF-backed records.

## Nextcloud FilesMetadata mirror

Nextcloud 34 exposes `OCP\FilesMetadata\IFilesMetadataManager`. Library may later mirror a compact summary such as:

```text
library-title
library-form
library-year
library-tags
library-item-id
```

That mirror is useful for WebDAV/search/app integration, but Library's own normalized tables remain authoritative.

## Sidecars/export/import preview

File-first portability matters, but v0.1 should not write sidecars by default. The current app can export user-edited corrected metadata as side-effect-free JSON, preview/apply that export against matched existing catalogue rows, map corrected rows to proposed `.library.json` paths through a sidecar manifest, accept that sidecar manifest or one individual `.library.json` sidecar object as an import source for matched scanned items, and download those proposed JSON files as a sidecar ZIP archive. These export/import paths remain side-effect-free for source folders. A later write-back feature can create reviewable files such as OPF or `.library.json` sidecars beside source publications.

```text
.Library/metadata.json
```

or per-file sidecars if the user explicitly opts in. Writing OPF/JSON sidecars into source folders and reconstructing a catalogue in a fresh install remain future work.

## Filename and folder parsing

Real magazine and comic archives often have no OPF/ComicInfo metadata, or the metadata appears only in scanner-friendly file and folder names. Library therefore treats filename/folder parsing as a first-class low-precedence metadata source (`metadata_source=filename-pattern`). It currently recognizes conservative patterns such as:

```text
Camera 1957-04.pdf
The New Yorker - 2023-11-20.pdf
c't 2024-17.pdf
Aperture No. 251 Spring 2023.pdf
Tintin 010 - The Shooting Star.cbz
Camera/1957/04.pdf
```

Filename/folder candidates may populate `publication`, `title`, `subtitle`, `publication_date` and `publication_type` (`magazine` for periodical-like date/issue patterns, `comic` for numbered CBZ title patterns). Embedded PDF/EPUB/ComicInfo metadata and OPF sidecars still override filename-derived candidates, and user-edited Library metadata still overrides all scanner candidates on rescan.

## Real-world-ish metadata fixture matrix

The extractor hardening track preserves a small real-world-ish metadata fixture matrix. It covers EPUB with sparse OPF metadata, PDF with missing or encoded Info fields, CBZ without ComicInfo.xml, nested ComicInfo.xml, and sidecar OPF collisions. These cases should produce best-effort filename or embedded candidates, not scanner aborts, and failures should surface through `metadata_error`/`scan_error` diagnostics.

## Inference approval batches (alpha.17)

`library_inference_batches` stores user-owned immutable proposals, before/after metadata snapshots, original source-file identity/content markers, rule context and batch status. IDs are random 128-bit values; every operation also checks session ownership. Public replies expose only reviewed fields and paths after live access checks, never the internal full snapshots.

Apply/Undo lock the batch and target metadata rows in a transaction, recheck exact snapshots, and update selected columns plus provenance through ItemService. Search, facets and review flags are refreshed in the same transaction. MySQL/PostgreSQL use the public Nextcloud row-lock API introduced in 33; SQLite claims a write lock before reading. Apply/Undo has developer MariaDB/NC34 evidence and the alpha.23 disposable NC33–35 matrix; PostgreSQL runtime evidence remains pending.

Prepared reviews expire after 30 minutes. Apply/Undo transitions retain history for seven days; history/prepare requests remove expired rows for the current user. A registered five-minute maintenance job deletes at most 500 globally expired rows per run, using the expiry index and rechecking the expiry in each delete so concurrent transitions are retained. The limit is 100 unexpired batches per user, 40 books per batch, and 256 KiB per prepared payload. After-snapshots increase the applied payload size. Physical deletion follows the configured Nextcloud background runner; expiry authorization is enforced immediately. `UserDeletedEvent` removes all user-owned Library tables, list entries through list ownership, app preferences and queued scans for that user. It preserves other users and does not delete source documents itself.

Author Apply accepts validated ordered arrays in `library_items.authors_json`, with a compatible display in `creators`. Both columns and author facets are restored by Undo. Names are trimmed and exact duplicates removed without changing their order or splitting punctuation. Limits are 32 names, 255 Unicode characters each and 1,024 characters in the combined display. Subjects are accepted as one explicit label. Approval context is supplied by the user's client and retained as provenance; the server validates field values, access and snapshots, rather than re-running the browser parser.

### Author migration and indexing

`authors_json` is nullable for unmigrated rows. New EPUB/OPF scans retain ordered creator nodes; canonical arrays survive import, edits and scanner resets. `field_values.authors` retains the scanner's structured candidate while the existing creators provenance remains authoritative. Legacy rows are backfilled in transactions of one item, at most 200 per maintenance run, replacing only creator facets. Other metadata, provenance, facet types and search grams are retained. Unknown/manual legacy conventions are opaque; untouched trusted extractor output uses the established semicolon convention. Oversized invalid legacy names retain their creator text for manual correction.

Author filters merge indexed individual identities and compatible full-field matches. Up to 500 distinct candidates use an inline ID set; larger sets use complete indexed subqueries, with no truncation or duplicate books. Suggestions remain bounded and respect the current filters. Author pages, pagination and saved filters use the same predicate.

Adding structured author snapshots invalidates previously prepared reviews whose older snapshots lack that column. Reload the sample and review again; historical batches remain subject to the existing conservative stale checks.


## Whole-folder inference analysis (alpha.18)

`library_infer_jobs` stores owner, root, frozen folder/file identities and rule definition, initial count/highest item ID, cursor/progress, result byte count, status and seven-day expiry. `library_infer_results` stores one immutable proposal/revision per job/item, with owner and status indexes for pages/filters. Public responses omit internal assignment file IDs.

`InferenceParser` executes bounded advanced/guided rules with browser-preview semantics, including explicit ordered authors and deepest-folder precedence. PHP/JavaScript parity has 518 vectors. Analysis snapshots saved folder assignments on the server, never trusts client-supplied assignment availability, and revalidates live assignment identities for each worker slice. It does not mutate catalogue rows, indexes or source documents.

`InferenceAnalysisJob` processes at most 40 items/eight seconds per invocation and queues a continuation with its cursor. Owner-authorized CSRF-protected advancement while the page is open processes at most 20 items/eight seconds. One scope query supplies each slice. Per-item job-row locking serializes overlapping invocations and cancellation; SQLite claims its database write lock. Results commit with their cursor, avoiding duplicates after retry. New item IDs beyond the start boundary are excluded. File identity/location/access is checked before parsing and again before saved results are disclosed; changed revisions become unavailable for selection. Existing approval batches independently reject stale Apply/Undo.

Quota: five unexpired jobs/account; 100,000 initially indexed books/job; saved definition up to 512 KiB; each result at most 64 KiB and all results at most 64 MiB/job. Storage-limit stops are explicitly partial. Analysis expires after seven days; the five-minute maintenance job selects up to five expired jobs and deletes at most 400 result rows/job/run before deleting their empty parent. Account deletion also removes analysis tables and queued analysis arguments. Discard removes analysis results, preserving independently applied metadata and approval history.

Apply remains an explicit review of at most 40 books/256 KiB per atomic batch. Its provenance context references the analysis ID; it does not need to copy a potentially large folder-rule registry into every approval. There is no automatic or global multi-page Apply. Large-library HTTP/SQL measurements and the renewed NC33–35 matrix are recorded in the [alpha.23 report](performance/2026-09-27-alpha23/README.md). A complete 100k-book analysis and PostgreSQL runtime integration remain unverified.

Deployment note: stop/restart long-running Nextcloud job workers when replacing application PHP classes. The developer instance had a worker running for two days with old Library methods; restarting its container resolved mixed-version worker failures. Fresh worker and browser runs then passed.


## Other implemented storage

- Private lists use `library_lists` and `library_list_entries`; names, descriptions, order and per-book notes are app-owned and user-scoped through the list owner. They are distinct from `library_saved_collections`, which stores saved filters.
- Manual duplicate scans use five `library_dup_*` job/snapshot/key/pair/choice tables. Optional browsing suggestions use four separate index/state/term/hint tables. These store comparison evidence and review choices; they do not delete or merge source publications. Alpha.24 batches worker SQL while retaining live access/revision checks. See [duplicate review](duplicate-review.md).
- `library_scan_schedule` stores per-account automatic-scan intervals, due times and the last dispatched scan job. The scan history and counters remain in `library_scan_jobs`; reliable execution depends on Nextcloud Cron.
- `library_thumbnail_users` tracks cache owners after root removal. Private thumbnail bytes live in Nextcloud appdata, not in this registry table or source folders. Cache keys include source revisions; administrator budgets and expiry maintenance bound storage.
- Guided rules, advanced patterns and folder assignments live in per-user app preferences; they do not have dedicated schema tables. Administrator thumbnail settings use app configuration.

See the [schema inventory](database-schema.md), [automatic scans](automatic-scans.md), [metadata extraction guide](extracting-metadata.md) and [performance runbook](performance-benchmarking.md) for details.


## Invalid extracted authors (alpha.25)

Source authors that exceed the supported limits or contain invalid values are omitted from scanner reset candidates and flagged with `metadata_authors_invalid`. Other valid fields can refresh; existing accepted authors and user corrections remain intact. Manual/import validation stays strict. Correcting the source author field clears the warning on rescan. The pipeline revision is v6. See the [acceptance report](performance/2026-09-27-alpha25/README.md).

## Scanner index fingerprint (alpha.26)

`library_items.scanner_index_hash` is an internal nullable string(64), added by `Version000200Date20260927160000`. It tracks canonical inputs and the derived-index generator revision. Matching fingerprints avoid facet, search, identifier and duplicate-index rewrites. A NULL legacy marker is established only after comparing stored index contents; stale/missing contents rebuild. Explicit index repair invalidates the marker. Missing-file transitions and generator-revision changes force rebuilding.

Scanner parsing happens before a short owner-scoped transaction; canonical updates, derived indexes and the marker commit together. Failed derived writes roll back the whole refresh. Manual corrections remain protected. The marker is excluded from public catalogue exports. See [measurements and repeat commands](performance/2026-09-27-alpha26/README.md).

## Scalar validation and warning caching (alpha.27)

Scanner pipeline v7 validates scalar metadata against database field limits before persistence. Invalid extracted fields are isolated; prior accepted values and user corrections survive. Complete rejected UTF-8 proposals are retained up to 8 KiB per field within a 60,000-byte proposal JSON limit; `field_values.rejectedFields` records affected names. Reset and batch-edit paths enforce the same limits. Review disables unsafe acceptance/reset actions with hover help.

Recognized deterministic warnings can reuse a stable source/sidecar fingerprint after successful item persistence. Their Review status and diagnostic remain visible. Explicit Retry, changed sources/sidecars/paths or pipeline revisions, and missing items invalidate caching; transient failures are retried. `library_scan_jobs.cached_warning_skips` exposes the number reused. Unchanged indexed v6 records can adopt v7 only after their saved scalar proposals pass validation. See [measured verification](performance/2026-09-27-alpha27/README.md).

## Incremental scan journal (alpha.28)

`library_scan_changes` stores owner-scoped, hashed file/directory targets and a monotone generation per target. Repeated Nextcloud node events coalesce. The scheduled worker snapshots target generations before scanning and deletes only matching generations after the scan job completes successfully. Later events, failed jobs and cancellations retain their entries. `library_scan_schedule` holds the last complete full-scan time, metadata/index revision and enabled-root digest. A first full pass, changed root/revision or seven-day age triggers full reconciliation. Manual full scans remain available. See [automatic scans](automatic-scans.md) and [verification](performance/2026-09-28-alpha28/README.md).
