# Library for Nextcloud

**Working title:** Library  
**Type:** Open-source Nextcloud application  
**Status:** Concept / architecture draft  
**Version:** 0.1-concept  
**Date:** 2026-09-04

## 1. Idea

**Library** is a Nextcloud application for managing and browsing digital publications already stored in Nextcloud.

The model is deliberately similar to **Memories** for photographs and **Music** for audio:

> Nextcloud Files remains the canonical storage. Library adds a publication-specific catalogue, metadata model, search and browsing interface on top.

Library is not another place to import books. Removing Library must leave the underlying collection intact and usable as ordinary Nextcloud files.

Initial media types:

- EPUB ebooks
- PDF books and documents
- CBZ/CBR comics
- scanned magazines
- journals
- manuals
- catalogues and brochures
- other publication-like documents

The project should model **publications**, not assume that every item is a book.

## 2. Motivation

Nextcloud already provides a strong foundation for a personal media archive: ordinary files and directories, WebDAV, desktop/mobile synchronization, sharing, versioning and conventional backup.

What is missing for publications is the equivalent of a media-library view.

Instead of only seeing:

```text
Media/
└── Magazines/
    └── Camera/
        └── 1957/
            ├── Camera_1957_01.pdf
            ├── Camera_1957_02.pdf
            └── Camera_1957_03.pdf
```

Library could present:

```text
CAMERA

1955  1956  [1957]  1958  1959

1957
┌────────┐ ┌────────┐ ┌────────┐
│  JAN   │ │  FEB   │ │  MAR   │
│ cover  │ │ cover  │ │ cover  │
└────────┘ └────────┘ └────────┘
```

The source files remain unchanged.

## 3. Core principles

### Nextcloud owns the files

The existing Nextcloud file is the canonical media object. Library stores an index, metadata and derived data, not another authoritative copy.

```text
Nextcloud Files
      │
      ▼
   Library
 index + metadata
```

### Library organizes; readers render

Library should not initially implement EPUB, PDF or comic rendering.

Library owns:

- discovery and indexing
- classification
- metadata
- covers
- relationships
- browsing
- search
- collections

Existing reader/viewer applications own:

- EPUB/PDF/CBZ/CBR rendering
- page navigation
- bookmarks and annotations
- reading position
- fullscreen reading

This is an important scope boundary.

### Reader integration is replaceable

Library should not depend permanently on one particular reader plugin.

```text
                  Library
                     │
              Reader interface
             /       |        \
            ▼        ▼         ▼
       EPUB reader  PDF       Comic reader
```

A future reader provider might expose:

```text
canOpen(file)
open(fileId)
getProgress(fileId)      # optional
```

Version 0.1 only needs reliable `canOpen`/`open` behaviour.

### Metadata is independent of paths

A file might be:

```text
/scans/camera/1957-04.pdf
```

while Library knows:

```text
Type:         Magazine
Publication:  Camera
Volume:       36
Issue:        4
Date:         April 1957
Language:     English
Topics:       Photography
```

Users should not have to restructure an archive merely to make the catalogue useful.

### Prefer stable Nextcloud file IDs

Library should reference Nextcloud file IDs rather than treating paths as permanent identities. Renaming or moving a file should not make it a new publication.

## 4. Publication model

```text
Publication
├── Book
├── Comic
├── Magazine
├── Journal
├── Manual
├── Catalogue / Brochure
└── Other
```

Common metadata can include title, subtitle, creators, language, publisher, publication date, description, tags, cover, source file, format and dates added/modified.

Specialized types add their own semantics.

**Book:** author, ISBN, edition, series, series position.

**Comic:** series, issue, volume, writers, artists, publisher, reading direction.

**Magazine/Journal:** publication title, volume, issue, date, ISSN.

**Manual/Catalogue:** manufacturer, product, model, revision, document number.

A later version could model magazines down to article level:

```text
Publication → Issue → Article → Page range
```

## 5. Metadata strategy

Metadata should have explicit provenance and precedence:

```text
1. User-edited Library metadata
2. Embedded metadata
3. Sidecar metadata
4. Filename/folder inference
5. External metadata providers       [future]
```

Embedded sources include EPUB package metadata, `ComicInfo.xml` in CBZ archives and PDF document metadata.

Folder and filename patterns can provide useful initial inference:

```text
Camera/1957/Camera_1957_04.pdf
Tintin/05 - The Blue Lotus.cbz
```

Inference must always be manually correctable. In particular, `.pdf` must not imply `Book`: a PDF may be a magazine, manual, comic, paper, catalogue or scan.

External Internet metadata is deliberately deferred. The core application should remain useful without third-party services.

## 6. High-level architecture

```text
                         NEXTCLOUD

                   ┌─────────────────┐
                   │      Files      │
                   │ canonical media │
                   └────────┬────────┘
                            │
                            ▼
                ┌──────────────────────┐
                │       Library        │
                │ scanner / indexer    │
                │ metadata database    │
                │ cover management     │
                │ classification       │
                │ search / catalogue   │
                └──────────┬───────────┘
                           │
                ┌──────────┼──────────┐
                ▼          ▼          ▼
              Web UI     Readers     APIs
                         / Viewers    [later]
                                      │
                                      └── OPDS
```

## 7. Nextcloud app structure

The initial implementation should preferably be a conventional Nextcloud app using the standard PHP/Vue stack.

```text
library/
├── appinfo/
│   ├── info.xml
│   └── routes.php
├── lib/
│   ├── AppInfo/
│   ├── Controller/
│   ├── Db/
│   ├── Service/
│   ├── Scanner/
│   ├── Metadata/
│   └── Reader/
├── src/
│   ├── App.vue
│   ├── components/
│   └── views/
├── img/
├── templates/
└── tests/
```

Likely technologies:

- PHP backend
- Vue frontend
- Nextcloud database abstraction
- Nextcloud Files APIs
- background jobs for indexing

An ExApp or external service should only be added when a concrete requirement justifies it, such as OCR or expensive document analysis.

## 8. Library index

The database is an index, not the authoritative publication store.

A simplified record might contain:

```text
library_items
-------------
id
file_id
media_type
format
title
subtitle
publication
volume
issue
series
series_position
publication_date
language
publisher
cover_reference
metadata_source
created_at
updated_at
```

Creators, series, publications and tags should eventually be normalized relationships rather than comma-separated fields.

## 9. Scanner / indexer

Users select one or more Nextcloud folders as Library roots, for example:

```text
/Media/Books
/Media/Comics
/Media/Magazines
/Documents/Manuals
```

The scanner performs:

```text
Discover file
    ↓
Recognize supported format
    ↓
Extract embedded metadata
    ↓
Inspect filename/folder context
    ↓
Determine publication type
    ↓
Extract/generate cover
    ↓
Create/update index entry
```

Initial formats: EPUB, PDF, CBZ and CBR.

Later, incremental indexing should handle new, changed, renamed, moved and deleted files without repeatedly scanning the entire library.

## 10. Reader integration

Reader functionality should be delegated to compatible existing Nextcloud applications wherever practical.

```text
The Name of the Rose
Umberto Eco

[ Read ]  [ Details ]  [ Show in Files ]
    │
    ▼
compatible Nextcloud reader/viewer
```

Library should eventually define a small reader-provider abstraction. Reading-progress integration can be added when reader apps expose sufficiently stable APIs.

Library itself should not duplicate bookmarks, annotations or reading state in v0.1.

## 11. UI concept

Library appears as a normal Nextcloud navigation application.

```text
LIBRARY
─────────────────────────────────────────────

All    Books    Comics    Magazines    Manuals

[ Search library...                         ]

Recently added

┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│cover │  │cover │  │cover │  │cover │
└──────┘  └──────┘  └──────┘  └──────┘

Browse

Authors
Series
Publications
Years
Tags
```

A magazine detail could show publication, date, volume/issue, cover, page count, tags, source path and actions for **Read**, **Show in Files** and **Edit metadata**.

## 12. Version 0.1 scope

The first release should prove one proposition:

> Publications already stored in Nextcloud can be presented as a useful media library without moving or restructuring them.

### Included

- normal Nextcloud navigation app
- configure one or more Library roots
- discover EPUB/PDF/CBZ/CBR
- basic metadata extraction
- cover extraction/generation
- publication type
- cover-grid browsing
- item detail view
- basic search
- basic author/series/publication grouping
- manual metadata editing
- open/read through a compatible existing reader/viewer
- show original in Nextcloud Files
- manual rescan

### Explicitly excluded

- custom EPUB/PDF/comic renderer
- annotations and bookmarks
- Library-owned reading-position system
- OCR
- full-text document search
- Internet metadata lookup
- recommendations
- OPDS server
- Kobo/Kindle integration
- native mobile apps
- AI classification

These exclusions are intentional: v0.1 should be small enough to build, test and use.

## 13. Roadmap

### 0.1 — Catalogue

```text
files → scan → metadata → covers → catalogue → reader handoff
```

### 0.2 — Organization

Improve metadata editing, creators, series, magazine publication/year/issue handling, collections, tags, filename inference and incremental rescanning.

### 0.3 — Reading ecosystem

Add a reader-provider abstraction, reading progress where supported, **Continue Reading**, OPDS and possible KOReader integration.

### 0.4 — Metadata enrichment

Add optional ISBN/book/comic metadata sources, improved cover discovery and duplicate detection.

### 0.5 — Document intelligence

Optional OCR, full-text indexing, magazine table-of-contents extraction, article-level indexing and page-level search.

For example:

```text
Camera — April 1957

Contents
────────────────────────────────────
p.  3   Editorial
p.  8   Photographing Architecture
p. 18   The Rolleiflex 2.8E
p. 31   Darkroom Techniques
```

## 14. Deployment philosophy

The desired experience is:

```text
Install Library
      ↓
Enable app
      ↓
Select publication folders
      ↓
Scan
      ↓
Browse library
```

The basic catalogue should not require a separate Docker stack. Optional processing services can be introduced later for OCR or other computational features.

## 15. Relationship to dedicated media servers

Library does not need to reproduce every feature of Kavita, Komga or Calibre-Web.

Its architectural distinction is more important:

```text
Dedicated media server:
files → media application → library

Library for Nextcloud:
                ┌── Library
Nextcloud Files ├── Readers
                ├── WebDAV
                ├── Sync clients
                └── other Nextcloud apps
```

Nextcloud remains the common substrate. Library is one interpretation of those files rather than their owner.

## 16. Long-term vision

Library should become the **publication layer of Nextcloud** in the same conceptual family as Memories and Music:

```text
Nextcloud
│
├── Files       → generic files
├── Memories    → photographs
├── Music       → audio
└── Library     → publications
```

The project succeeds if users can maintain an ordinary, durable file archive while gaining the catalogue experience expected from dedicated media software.

## 17. Immediate next step

Before implementation, create a **v0.1 technical specification** covering:

1. supported Nextcloud versions and development environment;
2. exact publication and metadata schema;
3. Nextcloud filesystem/file-ID integration;
4. scanner lifecycle and change detection;
5. EPUB/PDF/CBZ/CBR metadata and cover extraction;
6. reader-plugin integration mechanisms;
7. frontend views and navigation;
8. database migrations;
9. permissions and multi-user behaviour;
10. testing strategy;
11. packaging, signing and eventual App Store publication.

The first technical spike should answer one particularly important question: **how cleanly can Library hand a Nextcloud file to existing reader/viewer apps without coupling itself to their private implementation details?**
