# Library UX Concept

This document turns the current question — covers, visible metadata, shelves, search and filtering — into a v0.1 user-facing contract. It describes the intended experience and what the current implementation now proves.

## Product answer

Yes, Library should present a **gallery of covers**. The gallery is the primary browsing mode because publications are visual and collection-like. Real extracted covers will come later; v0.1 uses stable cover placeholders so the layout, interactions and data flow can be exercised before cover extraction is finished.

Metadata is visible in two layers. In plain terms, metadata is visible where it helps browsing first, and editable in details when correction matters:

1. **Card metadata**: title, creator/author, publication type, shelf and tags are visible immediately in the gallery.
2. **Detail metadata**: source path, metadata provenance, publication/date/language/publisher, Nextcloud comments, tag editing and Library metadata editing are visible behind a per-item details panel.

A **Shelf** is useful, but it should not become another import silo. For v0.1, shelves are derived from configured Library roots. A root labeled `Photography magazines` or `Manuals` becomes a browse/filter shelf. Later releases can add virtual shelves/collections while keeping Nextcloud Files as canonical storage.

Search and filter should be simple and direct in v0.1:

- search text across title, subtitle, author/creator, publication and path;
- filter by publication type;
- filter by Nextcloud tag;
- filter by shelf/root label.

## User stories

### Gallery browsing

**As a reader, I want to browse a gallery of covers** so that my publication archive feels like a library rather than a file table.

Acceptance:

- items appear as cards in a responsive gallery;
- every card has a visual cover area, even before real cover extraction exists;
- the card shows the title and creator/author when known;
- the card has a direct Read action that hands the file to Nextcloud's viewer/reader route.

### Metadata visibility

**As an archivist, I want metadata visible on cards and detail sections** so that I can quickly judge whether the scanner found useful data and fix wrong values.

Acceptance:

- card view shows the high-signal fields: title, creators, publication type, shelf and tags;
- detail view shows provenance (`metadataSource`), `userEdited`, source path and secondary metadata;
- edit fields remain available without leaving the catalogue;
- scanner-derived and user-edited data stay visibly distinct.

### Shelves without ownership confusion

**As a collector, I want shelves that map to meaningful roots or collections** so that I can browse `Books`, `Comics`, `Camera magazines` or `Manuals` without moving files into a new app-owned silo.

Acceptance:

- configured roots behave as shelves in v0.1;
- shelf names come from root labels, falling back to root paths;
- shelf filtering does not move, copy or re-own source files;
- future virtual shelves/collections remain a catalogue layer, not a storage layer.

### Search and filter

**As a finder, I want to search and filter by tag, type, title and author** so that I can quickly narrow a mixed publication archive.

Acceptance:

- a search box filters title, subtitle, creators, publication and source path;
- a type selector filters book/comic/magazine/journal/manual/catalogue/other;
- a tag field filters by exact Nextcloud system tag name;
- a shelf selector filters by current shelf/root label;
- filters are ordinary GET parameters so the result is bookmarkable and debuggable.

## v0.1 UX shape

```text
Library

[Search title / author...] [Type] [Nextcloud tag] [Shelf] [Apply]

Shelf/gallery
┌────────────┐ ┌────────────┐ ┌────────────┐
│ cover area │ │ cover area │ │ cover area │
│ Title      │ │ Title      │ │ Title      │
│ Creator    │ │ Creator    │ │ Creator    │
│ type/shelf │ │ type/shelf │ │ type/shelf │
│ tags       │ │ tags       │ │ tags       │
│ Read       │ │ Read       │ │ Read       │
│ Details ▸  │ │ Details ▸  │ │ Details ▸  │
└────────────┘ └────────────┘ └────────────┘
```

## Deliberate v0.1 limits

- Cover extraction/storage is not implemented yet; placeholder covers prove the gallery layout now.
- Shelf is currently root-derived only; virtual shelves/collections are future work.
- Tag filtering uses Nextcloud system tags attached to backing files.
- Full-text document search is still out of scope for v0.1.
- Search is server-side and simple; a richer Vue client can replace it later without changing the product contract.

## Next presentation slices

1. Extract or generate real covers and persist cover references.
2. Split detail/edit into a dedicated detail route when the card becomes too dense.
3. Add virtual shelves/collections separate from root folders.
4. Add saved filters such as `Unread manuals`, `Photography magazines`, or `Needs metadata review`.
