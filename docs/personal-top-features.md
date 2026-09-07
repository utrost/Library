# Personal Top Features Scope

Status: product-priority scope, not all implemented yet  
Audience: Uwe, contributors, early testers  
Source: Uwe's personal top features, 2026-09-07

This document scopes Uwe's personal top features for Library and translates them into small, testable implementation slices. It deliberately separates current support from the recommended next build order.

## Feedback summary

My read: this is the right list. The earlier v0.1 roadmap was mostly release-hardening and metadata-safety oriented. Your list shifts the product from “technically safe catalogue” toward “daily personal library”: multiple shelves, “things I care about”, “what did I touch recently?”, richer text search, reading/workflow state, and serious browse categories.

Two framing points:

- Nextcloud tags are useful for lightweight labels and can approximate some workflows today, but they are not enough for every feature. Stars, reading state, structured status and genre/classification metadata should become canonical Library-native fields when they affect catalogue UX, sorting, export/import or future File-First sidecars.
- Reader apps can keep owning page position and annotations, but Library should record Library-owned reading activity such as last opened, manual read status, stars/bookmarks and “needs OCR” workflow flags because those are catalogue decisions, not reader rendering internals.

## Current support at a glance

### fully implemented multi-root Library

Current support: mostly implemented and smoke-tested.

Implemented today:

- users can configure multiple roots;
- each root has a label/path/enabled state;
- scans can cover all enabled roots or one selected root;
- catalogue shelf filters use root labels/paths;
- root deletion removes Library catalogue/index rows for that root without deleting source files;
- `npm run smoke:multi-root` creates two temporary real Nextcloud folders, scans both, proves both shelf filters, verifies a scoped scan does not mark the other root missing, checks duplicate catalogue-card count, and removes temporary files/tokens.

Still missing before calling it polished release quality:

- stronger root validation and confirmation;
- clearer user-facing explanation of overlapping-root behavior;
- first-run guidance for adding several roots.

### starring/bookmarking

Current support: implemented as the first Library-native personal catalogue field.

This is Library-native rather than only a Nextcloud tag. A star is a fast, personal, first-class catalogue action. It appears as a toggle on item details, as a visible marker on compact catalogue cards, is filterable with `starred=1`, and is included in corrected-metadata export/import. It is not the same as reader bookmarks inside an EPUB/PDF app, and toggling it does not change scanner provenance or Nextcloud tags.

### last read/opened

Current support: implemented as Library-owned open activity.

Library **Read** links now go through a tiny app route, record `last_opened_at` for the current user/item, and then redirect to Nextcloud's existing `/f/{fileId}` handoff. The catalogue can sort by **Recently opened**, details show the last-opened time, and corrected-metadata export/import carries the timestamp. “Last read” still implies reader integration or page-position feedback, which remains future until a reader provider exposes trustworthy events.

### search with description

Current support: partial.

The catalogue already searches title, subtitle, creators, publication/series/periodical and path text. The publication model and concept docs mention description, but the current editable detail form does not expose a description field and catalogue search does not include one. First slice: add a Library-native description field, show/edit it on details, include it in text search, and preserve it through export/import.

### custom status per publication

Current support: partial via existing scan status and tags, but missing as a user-owned catalogue field.

Existing scan status is operational (`indexed`, `metadata_error`, `missing`) and should not be overloaded for personal reading/workflow status. Tags can approximate status today, e.g. `read`, `processed`, `ocr-missing`, but tags mix freeform classification with workflow state and lack status-specific UX.

Recommended model: add a Library-native personal status field with a small initial vocabulary plus optional tags for nuance.

Good initial statuses:

- `unread`
- `reading`
- `read`
- `processed`
- `needs_ocr`
- `reference`
- `archived`

### genres and classifications

Current support: partial via Nextcloud tags, missing as structured Library metadata.

Genres and classifications overlap with tags but deserve a deliberate model because one publication can have multiple fiction genres and multiple non-fiction classifications. Nextcloud tags are still useful as broad cross-app labels; Library-native genres/classifications should drive catalogue facets, import/export and later sidecar write-back.

Recommended split:

- `genres`: user-facing literary/content genres, mostly fiction but not limited to it.
- `classifications`: non-fiction and collection-oriented taxonomy such as photography, programming, philosophy, history, manual, catalogue, OCR-needed, reference collection.
- `tags`: freeform Nextcloud/system labels for ad-hoc cross-app grouping.

## Recommended priority

### P0 — finish multi-root confidence

Status: landed as a confidence-smoke checkpoint.

Why first: if multiple dirs are your top missing feature, we should prove it before adding more item-level metadata. Most code already existed; this checkpoint added proof instead of a broad rewrite.

Scope:

- add a two-root smoke/contract that proves two configured roots are both indexed;
- verify shelf filters show both root labels;
- document overlapping-root behavior explicitly;
- improve first-run/root guidance copy if needed.

Acceptance checks:

- two different roots can be configured and scanned;
- catalogue contains items from both roots;
- shelf filters distinguish both roots;
- a per-root scan does not mark unrelated root files missing;
- duplicate file IDs from overlapping roots do not create duplicate catalogue cards.

### P1 — personal starring

Status: landed as the first personal catalogue feature.

Why second: it is small, high-value and changes the catalogue from “inventory” to “my library”.

Scope:

- add a per-user star/bookmark boolean on Library items;
- show star toggle on the detail page and probably card-level compact affordance;
- add `starred=1` catalogue filter and active filter chip;
- include starred state in corrected-metadata export/import.

Acceptance checks:

- starring one item does not change scanner provenance or Nextcloud tags;
- starred items can be filtered;
- stars survive rescan;
- stars are included in export/import.

### P2 — last opened

Status: landed as a Library-owned open-activity checkpoint.

Why third: it gives immediate everyday utility and enables “Continue reading” without deep reader integration.

Scope:

- route Library **Read** clicks through a tiny Library redirect endpoint;
- record `last_opened_at` for the current user/item;
- redirect to the existing `/f/{fileId}` handoff;
- add recently-opened sort and details display.

Acceptance checks:

- opening through Library updates `last_opened_at`;
- **Show in Files** and **Download source** do not update it;
- recently opened sort works;
- corrected-metadata export/import preserves the timestamp;
- direct Nextcloud Files opens are not claimed as tracked.

### P3 — richer text search

Why fourth: description search is valuable, but it depends on first making description an actual editable/exportable field.

Scope:

- add Library-native `description` field;
- edit/show it on details;
- search text includes description through the existing database-backed catalogue query;
- include description in metadata import/export and scanner candidate/provenance display if scanner sources provide it.

Acceptance checks:

- a term only in description matches catalogue search;
- description edits survive rescan;
- description participates in export/import;
- description does not crowd the compact card by default.

### P4 — custom reading/workflow status

Why fifth: important, but needs careful vocabulary so it does not fight tags or operational scan status.

Scope:

- add a user-editable Library-native status field separate from `library_files.scan_status`;
- expose it on details;
- add a catalogue status filter/facet distinct from operational scan-status filter;
- decide labels and defaults before implementation.

Acceptance checks:

- Library-native status can be set independently of scanner status;
- status survives rescan;
- filtering by status works;
- tags can still be used for extra ad-hoc labels.

### P5 — genres and classifications

Why sixth: powerful, but this is the richest modeling problem. It should follow stars/status/description so we do not over-design taxonomy before seeing real use.

Scope:

- decide whether first storage is JSON arrays on `library_items` or a normalized join table;
- support multiple genres/classifications per item;
- add details editing with suggestions;
- add catalogue facets/filters;
- include values in export/import and future sidecar write-back.

Acceptance checks:

- one book can have multiple genres/classifications;
- filtering by one classification finds the item;
- values are not confused with Nextcloud tags;
- export/import preserves them.

## Suggested immediate implementation slice

Start with **P0 — finish multi-root confidence**, because it validates your top feature without a risky schema migration. If current behavior already passes, the slice becomes documentation and smoke hardening; if it fails, it exposes a foundational bug before we build stars/status on top.

After that, implement **P1 — personal starring** as the first new user-facing field. It is smaller than descriptions/status/genres, provides visible value immediately, and creates the reusable pattern for user-owned per-item fields, filters, export/import and rescan preservation.

## Open product decisions

- Should “bookmark” mean the same as “star”, or should “bookmark” be reserved for reader/page positions while Library uses “star”? My recommendation: use **Star** in Library and leave page bookmarks to reader apps.
- Should `needs_ocr` be a status, a tag, or both? My recommendation: make it a status only if it drives workflow filters; allow tags for extra detail such as `ocr:bad-layout` later.
- Should genres/classifications be user-only or scanner-suggested? My recommendation: user-owned first, scanner suggestions later with the same provenance/conflict model as other metadata fields.
- Should status and star be included in corrected-metadata export even though they are not bibliographic metadata? My recommendation: yes, because they are personal Library corrections/preferences that matter during migration.
