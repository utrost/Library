# Library Product Concept

Status: concept baseline  
Audience: contributors, reviewers and early testers  
Scope: durable product direction, not an implementation promise

## One-sentence concept

Library is a Nextcloud-native catalogue for digital publications that already live in Nextcloud Files.

It gives EPUBs, PDFs, comics, magazines, manuals and other publication-like documents the kind of browsing layer that Memories gives to photos and Music gives to audio, while leaving the original files exactly where they are.

## Product thesis

Nextcloud is already good at owning files: sync, WebDAV, sharing, versions, backup, permissions and ordinary folders. Publication collections need a second layer: metadata, covers, series, issue chronology, search and reader handoff.

Library should therefore be an interpretation of existing files, not a replacement archive and not a separate media server.

```text
Nextcloud Files  ->  durable canonical files
Library          ->  publication index, metadata, covers, browsing
Reader apps      ->  rendering, bookmarks, annotations, reading progress
```

Removing Library must not damage the collection. A user should still have ordinary folders full of EPUB, PDF, CBZ, CBR and related files.

## Primary users

- A Nextcloud user with a mixed personal publication archive: books, scans, manuals, magazines, comics and PDFs.
- A household or small group where each user may have different access to shared files.
- A collector who already has a meaningful folder structure but wants a media-library view without renaming everything.
- A user who values file-first storage more than a dedicated book-server import workflow.

## Core principles

### Files are canonical

Library stores an index and user metadata. It does not import publications into a new storage area and does not become the authority for the binary file.

### Stable file IDs beat paths

Library should use Nextcloud file IDs for identity. Paths are useful for display, diagnostics and rescans, but a rename or move should not turn one publication into a new item.

### Publication type is not file format

`PDF` is a format, not a product category. A PDF can be a book, magazine, manual, academic paper, brochure, catalogue or scan. Library should model the publication type explicitly and keep it manually correctable.

### Readers render

Library should not build an EPUB/PDF/comic reader in v0.1. It should open files through the existing Nextcloud Files/viewer route and later through replaceable reader providers when useful.

The Alice compatibility spike supports this default: `/f/{fileId}` hands EPUB, PDF and CBZ files to the installed inline viewer stack without Library knowing private reader routes.

### Metadata has provenance

Metadata should be editable and should remember where it came from. User edits outrank every scanner candidate. For scanner-created defaults, OPF sidecars outrank embedded PDF/EPUB/CBZ metadata, and embedded metadata outranks filename/folder guesses. Current item details keep refreshed scanner candidates visible beside user-edited values so conflicts can be reviewed or reset without silently overwriting corrections. Internet providers are future optional enrichment, not a core dependency.

## Publication model

Library models publication-like items first, not only books.

Initial categories:

- Book
- Comic
- Magazine
- Journal
- Manual
- Catalogue or brochure
- Other publication

Common fields should cover title, subtitle, creators, language, publisher, date, description, tags, source file, format, cover and timestamps.

Specialized fields can grow by type:

- Book: author, ISBN, edition, series, series position.
- Comic: series, issue, volume, writer, artist, publisher, reading direction.
- Magazine/journal: publication title, volume, issue, date, ISSN.
- Manual/catalogue: manufacturer, product, model, revision, document number.

v0.1 can keep the operational model simple: one indexed file maps to one catalogue item. The schema should not make that irreversible because later magazine/article or multi-file publication support may need more structure.

## v0.1 user story

A user can install Library, choose one or more folders, scan them, and browse a useful publication catalogue without moving files.

Minimum useful flow:

```text
Install app
  -> choose roots
  -> queue scans for all roots or one root
  -> see compact cover grid/list
  -> search, filter and sort
  -> edit wrong metadata on details
  -> compare/reset scanner candidates when useful
  -> open publication inline through existing viewer
  -> show original file in Nextcloud Files
  -> export corrected metadata or preview an export before a future import/apply step
```

## What v0.1 should include

- Normal Nextcloud navigation app.
- Per-user Library roots.
- Manual scan of EPUB, PDF and CBZ first; CBR only if dependency cost stays low.
- File-ID-based index.
- Basic metadata extraction and filename/folder inference.
- Explicit publication type.
- Cover extraction or preview-backed cover generation where practical.
- Cover-grid/list browsing.
- Item detail view.
- Basic search.
- Basic discovery by exact creator, series/periodical/publication and year filters.
- Manual metadata editing.
- Field-level scanner-candidate provenance and reset workflow.
- Read-only corrected-metadata export and no-write import preview.
- Default reader handoff through `/f/{fileId}`.
- Show original in Files.
- Download original source file.

## Explicit v0.1 non-goals

- Custom EPUB, PDF or comic rendering.
- Reader-owned page-position bookmarks, annotations or reading position. Library-native star/bookmark support now exists for catalogue items; last-opened activity remains planned.
- OCR.
- Full-text document search.
- Internet metadata lookup.
- Recommendation engine.
- OPDS server.
- Kobo/Kindle integration.
- Native mobile app.
- AI classification.
- Shared/global catalogue administration beyond respecting existing file permissions.

## Personal-library priorities

Uwe's current personal top features are scoped in [Personal top features](personal-top-features.md). They refine the product thesis toward daily use: fully trusted multi-root browsing, personal starring/bookmarking, last opened activity, description search, custom reading/workflow status, and richer genres/classifications.

Feedback captured there: use Nextcloud tags for lightweight cross-app labels, but make stars, Library-owned reading activity, workflow status, and structured genres/classifications canonical Library-native fields when they need first-class filters, export/import or File-First sidecar portability. The first of those fields, personal starring, is now implemented as Library-native catalogue state.

## Design tension to preserve

Library should feel like a media library, but behave like a Nextcloud app:

- respect permissions;
- avoid duplicate storage;
- degrade gracefully when files move or readers are absent;
- keep manual corrections safe;
- stay useful without external services;
- make future enrichment optional rather than mandatory.

## First architectural bet

Use a conventional Nextcloud app first: PHP backend, AppFramework controllers, Nextcloud database APIs, background jobs and a Vue frontend when the catalogue UI needs it.

Do not introduce an ExApp or extra Docker service until a concrete requirement justifies it, such as OCR, heavy document analysis or large-scale metadata enrichment.
