# Metadata Storage and Nextcloud Integration

Status: design direction for v0.1+

Library is file-first and Nextcloud-native, but the publication catalogue is richer than simple file properties. The storage model therefore deliberately separates file identity, catalogue metadata and Nextcloud-wide collaboration metadata.

## Principles

- Nextcloud Files remains the canonical storage for original publication files.
- Library references stable Nextcloud file IDs, not paths, as source-file identity.
- Library stores canonical publication metadata in its own app tables.
- Nextcloud system tags are used as a shared cross-archive classification layer.
- Nextcloud comments are exposed as file-level discussion/notes, not structured metadata.
- Nextcloud FilesMetadata can mirror selected Library summary fields later, but is not the primary catalogue database.
- Optional sidecar/export files are future portability features, not v0.1 primary storage.

## Three different metadata layers

### 1. Technical source-file metadata

Stored in `library_files` and refreshed by scans:

```text
file_id
storage_id
cached_path
mime_type
extension
etag
mtime
size
scan_status
scan_error
```

This answers: which Nextcloud file backs this catalogue item?

Metadata extraction is best-effort. If a supported file is corrupt or a local extractor fails, Library keeps the file-index row, records `scan_status=metadata_error` plus a short `scan_error`, and still attempts a filename-derived catalogue item. A bad file should be diagnostic noise, not a root-scan stopper.

### 2. Library publication metadata

Stored in Library's own app tables, beginning with `library_items`:

```text
title
subtitle
publication_form / current column: publication_type
creators
publication / series-like grouping
publication_date
language
publisher
metadata_source
user_edited
scanner_field_sources_json
scanner_candidates_json
```

This answers: what publication-like object should Library display? The current implementation also stores scanner field sources and scanner candidate values as JSON maps so user-edited rows can compare current values with refreshed scanner candidates and reset one field or the whole item when wanted.

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
