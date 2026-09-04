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
```

This answers: which Nextcloud file backs this catalogue item?

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
```

This answers: what publication-like object should Library display?

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

The first integration slices read and display existing system tags and recent comments. Library can also add an existing or newly created user-visible/assignable system tag to the primary source file, and can add a plain Nextcloud file comment as a file-level note. Tag removal remains deferred.

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

Format adapters such as EPUB, PDF and CBZ must map into this general model. EPUB metadata, PDF document metadata, ComicInfo.xml and filename/folder inference are candidate sources, not separate catalogue schemas.

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

## Sidecars/export

File-first portability matters, but v0.1 should not write sidecars by default. A later export/import feature can create reviewable files such as:

```text
.Library/metadata.json
```

or per-file sidecars if the user explicitly opts in.
