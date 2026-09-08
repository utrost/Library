# Library UX Concept

This document turns the current question — covers, visible metadata, shelves, search and filtering — into a v0.1 user-facing contract. It describes the intended experience and what the current implementation now proves.

## Product answer

Yes, Library should present a **gallery of covers**. The gallery is the primary browsing mode because publications are visual and collection-like. Covers are now served through Library's cover route: Nextcloud previews when available, first-image CBZ extraction when preview is unavailable, and stable placeholders otherwise.

Metadata is visible in two layers. In plain terms, metadata is visible where it helps browsing first, and editable in details when correction matters:

1. **Card metadata**: compact cards show cover, title, **Read** and **Details** first so browsing works on phones and desktops without dense metadata blocks.
2. **Details disclosure/workbench metadata**: secondary metadata, source path, metadata provenance, scanner candidates, reset actions, Nextcloud comments, tag editing and Library metadata editing are available behind the card Details disclosure and the dedicated item details page.

A **Shelf** is useful, but it should not become another import silo. For v0.1, shelves are derived from configured Library roots. A root labeled `Photography magazines` or `Manuals` becomes a browse/filter shelf. Later releases can add virtual shelves/collections while keeping Nextcloud Files as canonical storage.

Search and filter should be simple and direct in v0.1:

- search text across title, subtitle, author/creator, publication and path;
- filter by publication type;
- filter by file format and scan status;
- filter by exact creator, publication/series/periodical title and publication year;
- filter by Nextcloud tag;
- filter by shelf/root label;
- show active filter chips so one filter can be removed without clearing the whole search.

## User stories

### Gallery browsing

**As a reader, I want to browse a gallery of covers** so that my publication archive feels like a library rather than a file table.

Acceptance:

- items appear as cards in a responsive gallery;
- every card has a visual cover area using preview, CBZ first image or placeholder fallback;
- the default card surface stays compact: cover, title, Read and Details;
- the card has a direct Read action that hands the file to Nextcloud's viewer/reader route.

### Metadata visibility

**As an archivist, I want metadata visible on cards and detail sections** so that I can quickly judge whether the scanner found useful data and fix wrong values.

Acceptance:

- card view shows the high-signal browse controls without crowding the grid;
- Details disclosure/detail view shows provenance (`metadataSource`), `userEdited`, scanner candidates, source path and secondary metadata;
- edit fields live on the dedicated item details page, not inline on catalogue cards;
- scanner-derived, scanner-candidate and user-edited data stay visibly distinct, including **Differs from scanner** labels.

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

[Search...] [Type] [Format] [Creator] [Series/periodical] [Year] [Tag] [Shelf] [Apply]

Shelf/gallery
┌────────────┐ ┌────────────┐ ┌────────────┐
│ cover area │ │ cover area │ │ cover area │
│ Title      │ │ Title      │ │ Title      │
│ Read       │ │ Read       │ │ Read       │
│ Details ▸  │ │ Details ▸  │ │ Details ▸  │
└────────────┘ └────────────┘ └────────────┘
```

## Deliberate v0.1 limits

- Persistent app-owned cover storage/cache is not implemented yet; covers are generated on request through preview/CBZ/placeholder fallbacks.
- Shelf is currently root-derived only; virtual shelves/collections are future work.
- Tag filtering uses Nextcloud system tags attached to backing files.
- Full-text document search is still out of scope for v0.1.
- Search/filter/sort/pagination are server-side and database-backed; Vue renders the catalogue but should not become the permission/query source of truth.

## Next presentation slices

1. Add dedicated creator/series/publication/year landing pages beyond the current filters and top-series shortcuts.
2. Add saved filters such as `Unread manuals`, `Photography magazines`, or `Needs metadata review`.
3. Add virtual shelves/collections separate from root folders.
4. Add cover cache/crop/rebuild workflows only if on-demand preview/CBZ/placeholder covers plus manual override/revert prove insufficient.
