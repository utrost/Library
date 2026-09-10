# Library UX Concept

This document defines the v0.1 Library interface as one consistent catalogue workspace. It is not a feature inventory. It is the UX contract that keeps browse, filters, actions, batch tools and review flows from becoming separate competing interfaces.

## Product answer

Library should feel like a **gallery of covers** with librarian tools nearby, not like an admin table. The primary job is to help an external Nextcloud user find, recognize, open and improve publication-like files that already live in Nextcloud Files.

The core rule is **one workspace, progressive disclosure**:

1. **Browse stays primary.** The user lands in a visual result set: covers, titles, quick status, primary open/detail actions and paging.
2. **Refine stays near the result set.** Search, sort and filters live inside the same polished disclosure pattern as the other workspace jobs. The slash shortcut opens **Refine results** and focuses search, so the cover grid stays primary without burying search.
3. **Act is scoped and explicit.** Single-item actions live on cards/details. Multi-item actions always say which result set they affect and use preview/apply or clear feedback.
4. **Review is a workbench, not more metadata noise.** Weak metadata, scanner conflicts, missing files and extraction errors open focused review flows from the same catalogue context.
5. **Admin stays secondary.** Roots, scans, exports and repair tools are reachable, but they should not dominate the reader-facing catalogue.

In this model, metadata is visible where it helps browsing and correction:

- **Cards** show the minimum needed to recognize and open an item.
- **Drawers/details** show richer metadata, provenance, health, comments, tags and edits.
- **Review panels** show only the comparisons needed for a decision.

A **Shelf** is a browsing concept, not a new storage silo. In v0.1 shelves come from configured Library roots. Later virtual shelves or saved collections should still behave like catalogue views over files that remain in Nextcloud Files.

## Overarching layout

```text
[ Refine ] [ Browse ] [ Batch ] [ Review ] [ Admin ]       workspace menu bar

Library
One catalogue workspace for finding, browsing, acting on and reviewing publication files.

[active filter chips] [result count]                       current result explanation

Cover result set
┌────────────┐ ┌────────────┐ ┌────────────┐
│ cover      │ │ cover      │ │ cover      │
│ title      │ │ title      │ │ title      │
│ Read       │ │ Read       │ │ Read       │
│ Details    │ │ Details    │ │ Details    │
└────────────┘ └────────────┘ └────────────┘
```

The expandable blocks must look and behave consistently:

- summary row: menu-bar card with a coloured icon, short label, one-line purpose, count/scope badge when available and a summary arrow;
- body: one focused job, not a mixed drawer of unrelated controls;
- scope language: `this item`, `current results`, `this shelf`, `all enabled roots` or `whole catalogue`;
- feedback: changed/unchanged/skipped/error counts for every non-trivial action;
- keyboard: the slash shortcut opens Refine results and focuses search; `Escape` clears the focused search;
- mobile first: collapsed by default unless it is part of the immediate task.

## Interaction model

### Find

Search and quick filters answer: “What am I looking at right now?”

Rules:

- keep search, sort, starred-only and page size in **Refine results**, with `/` as the fast path into search;
- show active filter chips for every applied constraint;
- use the same result grid for search results, shelves, smart views, creator pages, years and publication pages;
- never hide the current context: shelf, smart view, creator, year, publication and result count should remain visible.

### Browse

Browse shortcuts answer: “Where can I go from here?”

Rules:

- Continue reading, Recently added, Rediscover, Top creators, Top years, Top publications, Publication contents issue/date summaries and Useful views are all shortcuts into normal catalogue results;
- shortcuts should create ordinary filters/contexts, not special one-off pages with different behavior;
- empty shortcut panels should explain what metadata or activity would make them useful.

### Select and act

Actions answer: “What will happen, and to what?”

Rules:

- card actions stay simple: Read and Details;
- detail actions are item-scoped: star, workflow status, metadata edit, tags, comments, Show in Files, Download source;
- batch actions are current-result-scoped and must say so in the label, preview page and result message;
- destructive or broad changes require preview/apply or typed/explicit confirmation depending on risk.

### Review

Review flows answer: “What needs a decision?”

Rules:

- weak metadata, scanner conflicts, missing files and extraction errors should enter a consistent review queue pattern;
- each review card compares current value, proposed value, source and consequence;
- accept/skip/reset actions should be per field or per item before they become batch operations;
- review flows must not write source files in v0.1.

### Admin

Admin tools answer: “How is the catalogue maintained?”

Rules:

- roots and scans are settings/admin surfaces, not primary browse controls;
- scan state appears in the catalogue only as health/status context;
- exports/import previews belong behind admin or batch-style disclosure, not beside every card.

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

- card view shows high-signal browse controls without crowding the grid;
- drawer/detail view shows provenance (`metadataSource`), `userEdited`, scanner candidates, source path and secondary metadata;
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

- a search box filters title, subtitle, creators, publication, description and source path;
- search, sort, starred-only and page-size controls live inside **Refine results** and open with the same workspace menu pattern;
- deeper filters use the same Refine results disclosure pattern;
- a type selector filters book/comic/magazine/journal/manual/catalogue/other;
- a tag field filters by exact Nextcloud system tag name;
- a shelf selector filters by current shelf/root label;
- filters are ordinary GET parameters so the result is bookmarkable and debuggable.

## v0.1 implemented workspace

The catalogue now uses the workspace model in the app UI as a menu bar above the **Library** heading:

1. **Refine results** opens search, sort, common filters, full facets and saved-filter context. The `/` shortcut opens the panel and focuses search.
2. **Browse shortcuts** holds Continue reading, Recently added, Rediscover, Useful views, top publications, top years, top creators and saved collections.
3. **Batch actions** holds current-result tag apply/remove, metadata reset, metadata edit preview/apply and cover-refresh requests.
4. **Review queue** holds weak metadata cards, metadata-error shortcuts, scanner-conflict shortcuts and the review-next workbench.
5. **Admin tools** holds settings, exports, sidecar downloads and cached metadata/archive/cover diagnostics.

New UI surfaces should reuse the same visual pattern before adding another panel: coloured icon, label, one-line purpose, scope badge, focused body and explicit action feedback.

## Deliberate v0.1 limits

- Persistent app-owned cover storage/cache is not implemented yet; covers are generated on request through preview/CBZ/placeholder fallbacks.
- Shelf is currently root-derived only; virtual shelves/collections are future work.
- Tag filtering uses Nextcloud system tags attached to backing files.
- Full-text document search is still out of scope for v0.1.
- Search/filter/sort/pagination are server-side and database-backed; Vue renders the catalogue but should not become the permission/query source of truth.
