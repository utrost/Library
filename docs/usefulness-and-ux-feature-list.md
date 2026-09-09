# Usefulness and UX Feature List

Status: combined product feature list and prioritization notes
Audience: Uwe, contributors, early testers
Source: Uwe + Hermes discussion, 2026-09-09

This document collects the next usefulness and UX ideas after the v0.1 release-hardening work. It is intentionally product-facing: it describes why each feature matters, what already exists, and what remains to build. The active implementation roadmap remains [Library Roadmap](roadmap.md); this file is the feature backlog that feeds it.

## Product stance

Library is already useful as a private Nextcloud publication catalogue: roots, scans, compact cards, animated cover loading, broken-cover fallback, metadata editing, provenance, filtering, discovery pages, export/import and first repair workflows exist. The next gains should make Library better at daily use with real messy archives:

- files get added, deleted, renamed and moved;
- PDFs, scans, magazines and comics often have weak embedded metadata;
- folder structure and filenames often carry the real collection knowledge;
- users need repeatable views and repair workflows, not only one-off filters;
- File-First metadata should eventually survive a fresh install without trusting only the app database.

## Current implemented baseline

These items are already implemented and should be treated as foundations, not future work:

- database-backed catalogue text search includes title, subtitle, creators, publication/series/periodical, **description**, filename and folder path text;
- current search copy tells users they can search title, creator, filename or folder;
- Library-native description is editable, searchable and included in corrected-metadata export/import;
- Library roots can be scanned all together or one selected root at a time;
- root rescans mark previously indexed but no-longer-seen files as `missing` instead of deleting catalogue rows;
- missing files can be rechecked from Library settings;
- missing catalogue items can be forgotten only after their source file remains missing;
- file rows are keyed by Nextcloud file ID, so the index is designed around stable file identity rather than fragile path-only identity;
- scanner provenance and candidates are visible enough to support review and reset workflows;
- filename/folder extraction has first conservative rules for common weak-metadata cases;
- import/export/apply and sidecar manifest/ZIP flows exist without writing into source folders.

## Feature backlog

### 1. Saved views and smart collections

Origin: Hermes recommendation.

Why it matters: the catalogue now has many filters, but daily use needs one-click destinations rather than repeated manual filter setup.

Candidate views:

- Recently opened;
- Starred;
- To read / Reading / Finished / Needs action;
- Needs metadata;
- Scanner conflicts;
- Metadata errors;
- Placeholder covers;
- No creator;
- No publication/series;
- Weak filename-derived metadata;
- Unreviewed imports;
- specific user-defined genre/classification/status combinations.

Current support:

- **Useful views** is now a built-in smart-collection dashboard on the catalogue.
- Daily navigation views cover Recently opened, Starred and the core workflow statuses: To read, Reading, Finished and Needs action.
- Cleanup views cover Needs metadata, Scanner conflicts, Metadata errors, Placeholder covers, No creator, No publication/series, Weak filename metadata and Unreviewed imports.
- **Custom collections** let users save the current in-app search/filter setup under a name, reopen it from Library, see a result count, and delete it again without using browser bookmarks.
- Every built-in smart view and custom collection maps to explicit normal catalogue query parameters, keeps permission/user scoping inside `ItemService::queryCatalogue()`, preserves active filter chips, and shows a count badge.
- Empty smart views keep the same filtered-empty guidance as normal catalogue filters.
- User-defined saved views are now implemented for arbitrary current filter combinations; future polish is limited to richer management/reordering if real use asks for it.

Acceptance checks:

- each built-in view maps to explicit query parameters;
- smart views do not bypass permission/user scoping;
- active filter chips still explain what the view selected;
- count badges are derived from the same catalogue query path;
- empty smart views explain how to create matching items.

Status: **implemented for the in-app smart-collection feature set**. Built-in views cover daily and cleanup destinations; user-defined saved views are implemented as named custom collections for arbitrary current catalogue filters.

### 2. Re-indexing, moving, adding and deleting files

Origin: Uwe.

Why it matters: real libraries are not static. Users add files, remove duplicates, rename folders, move publications between folders, and delete files outside Library through Nextcloud Files. Library must keep the catalogue trustworthy without ever deleting source files on its own.

Current support:

- all-root and per-root scans exist;
- files are indexed by stable Nextcloud file ID;
- current cached paths are updated during indexing;
- files missing from a root scan are marked `missing`, not deleted;
- **Recheck missing files** can revisit missing rows;
- **Forget missing item** can remove an app-owned catalogue row only after the backing file is missing.

Missing or weak UX:

- no explicit **Re-index changed files** action that says what changed since the last scan;
- no move/rename summary such as “17 paths updated, 3 files added, 2 missing”;
- no dedicated moved-file review surface;
- no safe duplicate/path-change report;
- no scheduled or resumable incremental scan policy;
- no completion notification linking directly to added/moved/missing review views.

Possible first slice:

1. Extend scan summaries with added, updated-path, unchanged, metadata-error and missing counts.
2. Add a post-scan **Changes found** panel with links to filtered catalogue views.
3. Add tests proving a same file ID with a changed path updates `cached_path` without creating a duplicate catalogue item.
4. Keep source deletion in Nextcloud Files only; Library remains app-index cleanup and review.

Acceptance checks:

- moving or renaming a file updates Library's cached path on the next scan;
- the item keeps user-edited metadata, star/status/description and provenance;
- no duplicate card appears for one file ID;
- deletion outside Library marks the row missing first;
- forgetting missing rows removes only app-owned rows;
- scan summary tells the user what was added, moved/renamed, missing or errored.

### 3. Configurable metadata extraction from path and filename

Origin: Uwe.

Why it matters: many collections encode metadata in folder layout rather than file internals. A user may know that one root follows a structure such as:

```text
/<genre>/<Author>/<Series>/<title>.epub
```

For that root, Library should be able to map path segments and filename parts into reviewable metadata candidates.

Current support:

- first conservative filename/folder parsing exists;
- provenance distinguishes scanner-derived values from user-edited values;
- user-edited metadata wins across rescans.

Missing UX/product layer:

- no per-root configurable path template;
- no template preview on sample files before applying;
- no field-level confidence/preview report for template-derived values;
- no way to mark a template as applying only to one folder subtree;
- no conflict UI dedicated to “template says X, embedded metadata says Y, user says Z”.

Possible first slice:

1. Add a per-root read-only template preview tool before writing any metadata candidates.
2. Support a tiny first grammar, for example:
   - `/<genre>/<Author>/<Series>/<title>`
   - `/<classification>/<Author>/<title>`
   - `/<publication>/<year>/<title>`
3. Show sample matches and failures for the first N files in the selected root.
4. Only after preview, store the template and let the scanner produce candidate values with `path-template` provenance.

Acceptance checks:

- template values are scanner candidates, not silent user metadata;
- user-edited values remain protected across rescans;
- unmatched paths are skipped with understandable diagnostics;
- preview shows exact path, extracted fields and warnings;
- template changes do not rewrite source files or move folders;
- export/import and future sidecars can carry trusted values after the user accepts them.

### 4. Weak-metadata discovery dashboard

Origin: Hermes recommendation, reinforced by Uwe's point about sparse PDFs/comics.

Why it matters: searchable filenames help find known items, but cleanup needs a cockpit for things that are hard to browse because metadata is absent or suspicious.

Candidate views:

- missing creator;
- missing publication/series;
- missing date;
- title identical or near-identical to filename;
- only filename/path-derived metadata;
- placeholder cover;
- scanner conflict;
- metadata extraction error;
- no description;
- unsupported archive/container type.

Current implementation:

1. Built-in **Needs metadata** and **Weak filename metadata** smart views are implemented in the catalogue.
2. The **Weak metadata cockpit** now shows count cards for missing creator, missing publication/series, missing date, filename-derived title, filename/path-derived metadata, placeholder cover, scanner conflict, metadata extraction error, no description and unsupported archive/container candidates.
3. Every count links to the normal filtered catalogue URL (`noCreator=1`, `noPublication=1`, `noDate=1`, `titleFromFilename=1`, `weakMetadata=filename`, `coverReview=placeholder`, `scannerConflicts=1`, `status=metadata_error`, `noDescription=1`, `unsupportedContainer=1`).

Acceptance status:

- **implemented**: weak views are derived from indexed metadata and provenance via the same catalogue query/count path as other filters, not manual lists;
- **implemented**: view links are stable/shareable query URLs;
- **implemented**: compact cards remain browse-first while Details carries repair actions.

### 5. Metadata review workbench

Origin: Hermes recommendation.

Why it matters: field provenance, scanner candidates and conflict filters exist, but the repair process still feels like jumping between details pages and filters.

Missing workflow:

- review next item;
- accept/reject/skip per field;
- show current value, scanner candidate, path-template candidate, sidecar value and source provenance together;
- mark field reviewed without necessarily changing it;
- batch-safe actions for common cases.

Possible first slice:

1. Add a **Review next conflict** flow from scanner-conflict and weak-metadata views.
2. Keep all mutations explicit and per field.
3. Use existing reset/apply paths where possible.

Acceptance checks:

- no source files are changed;
- user-edited values are never silently overwritten;
- each accepted value records provenance/history clearly enough for later export/sidecar decisions.

### 6. Description search polish

Origin: Uwe.

Why it matters: descriptions often contain the words a user remembers, especially for essays, manuals, scans and collected articles.

Current support:

- **implemented**: Library-native description is included in database-backed catalogue search the same way title, creator, filename and folder path search are included;
- descriptions are editable on details and travel through corrected-metadata export/import.

Follow-up UX:

- make the search help text mention description explicitly, not only title/creator/filename/folder;
- optionally highlight which field matched in search results;
- consider a `has description` / `missing description` weak-metadata view.

Possible first slice:

1. Update catalogue search placeholder/help to include description explicitly.
2. Add a smoke marker/test proving description remains part of the search surface copy and backend query.

Acceptance checks:

- a term that appears only in `description` matches catalogue search;
- the search UI communicates that descriptions are searchable;
- compact cards do not show long description snippets by default.

### 7. Publication/series issue grouping

Origin: Hermes recommendation.

Why it matters: comics, magazines and periodicals need sequence-oriented browsing rather than only a flat publication filter.

Current support:

- publication pages show **Publication contents** read-only issue/date grouping;
- stable issue/date order uses dated rows first and keeps weak rows visible;
- year/month buckets and conservative volume labels are derived from existing dates, titles, subtitles and paths;
- simple gap hints flag missing numeric issue candidates;
- an **Unknown issue/date** bucket keeps rows without issue/date candidates from disappearing;
- the grouping works for comics, magazines, journals and other publication rows without requiring every item to be a book.

Remaining UX:

- richer editable issue metadata;
- dedicated next/previous issue routes;
- richer contents pages for periodicals and comics beyond the read-only grouping.

First slice shipped:

1. Publication discovery pages include issue/date grouping derived from existing fields and filename/path candidates.
2. Grouping stays read-only until metadata confidence improves.

Acceptance checks:

- publication pages show a stable issue order;
- unknown issue/date rows remain visible instead of disappearing;
- grouping works for comics and periodicals without requiring every item to be a book.

### 8. File-First sidecar write-back and fresh-install restore

Origin: Hermes recommendation, aligned with Uwe's File-First preference.

Why it matters: export/import is useful, but corrections become fully durable only when reviewed metadata can live next to source files.

Current support:

- corrected metadata JSON export;
- import preview and apply for matched existing catalogue rows;
- sidecar manifest export;
- sidecar ZIP download of proposed `.library.json` files;
- no source-folder writes during these exports.

Missing:

- explicit source-folder sidecar write preview;
- write selected `.library.json` sidecars into source folders;
- skip/backup behavior for existing sidecars;
- scan-time restore from sidecars on a fresh install;
- conflict handling when DB, sidecar, embedded metadata and path-template candidates disagree.

Acceptance checks:

- sidecar writes are opt-in and preview every target path;
- existing source files and existing sidecars are not overwritten without an explicit choice;
- fresh install plus scan can restore trusted corrections from sidecars.

### 9. Scan completion notifications and scan summaries

Origin: Hermes recommendation, connected to Uwe's re-indexing concern.

Why it matters: after large scans, users need to know whether anything useful happened and where to go next.

Current support:

- settings show a reload-safe post-scan completion summary for completed and failed jobs;
- scan jobs store added, moved/renamed, unchanged, missing and metadata-error counts separately from root/job failure counts;
- counter cards link to filtered review views, and metadata-error rows also offer a metadata-error TSV export.

Still missing UX:

- Nextcloud notification bell delivery outside the settings page;
- per-root progress percentage or estimated remaining time;
- scheduled/resumable incremental scans.

Acceptance checks now covered:

- summary survives page reload;
- counters match scan behavior;
- failed extraction rows link to review/export routes.

### 10. Cover cache and crop/rebuild workflows

Origin: Hermes recommendation.

Why it matters: covers make browsing feel good, but current on-demand previews do not give full user control.

Current support:

- Nextcloud preview, EPUB package cover, CBZ first image and placeholder fallback;
- refresh affordance;
- manual override/revert.

Missing:

- app-owned cover cache;
- crop/fit adjustments;
- rebuild stale cached covers;
- batch rebuild after extractor improvements.

Priority note: do this after saved views/review/re-indexing unless real testing shows cover quality is the daily blocker.

### 11. Shared/admin-managed libraries

Origin: Hermes recommendation.

Why it matters: a household or team archive should not require each user to configure identical roots manually.

Missing:

- admin-defined shared roots;
- permission-aware shared catalogue visibility;
- clear split between shared publication metadata and personal overlay fields such as stars/status/last-opened;
- shared-library onboarding and governance rules.

Priority note: defer until personal-root workflows and File-First durability feel solid.

### 12. External metadata providers

Origin: Hermes recommendation.

Why it matters: external lookup can fill gaps that filenames and sidecars cannot, but it can also create noisy or privacy-sensitive candidate data.

Possible future providers:

- Open Library / ISBN sources for books;
- Crossref / DOI sources for papers;
- comic providers if licensing and API access are acceptable.

Priority note: delay until local filename/path extraction, review UX and sidecar durability are strong. Provider values should be candidates with provenance, never silent overwrites.

## Sleek browsing experience track

These items intentionally put metadata/admin/check surfaces aside and focus on making Library feel fast, elegant and personal.

### 13. Better cover wall / shelf mode

Status: implemented for the first visual-browsing slice.

- A Compact / Gallery / Shelf view-mode toggle now keeps Compact as the fast default while Gallery view enlarges covers and Shelf view offers a horizontal snap-scrolling shelf.
- A browsing-first home dashboard now puts **Continue reading**, **Recently added** and **Rediscover** above the grid.
- Compact cards retain the fast cover-first default, while subtle shadows, hover lift and reduced-motion fallbacks add polish without turning the catalogue into an admin page.
- Remaining: dominant-colour cover backgrounds, richer placeholder/broken-cover art and stronger shelf-specific cover treatments.

### 14. Fast visual browsing gestures

Status: first slice implemented.

- Cards can open a sleek in-page details drawer so users can peek without losing catalogue scroll/context.
- The drawer has previous/next controls for neighbouring items.
- Remaining: keyboard card navigation, mobile swipe affordances, prefetch-on-hover and stronger scroll restoration.

### 15. Series/publication visual page

Status: first slice implemented.

- Publication pages now include a horizontal **visual issue strip** above the detailed issue/date grouping.
- This makes comics, magazines and periodicals feel more shelf-like while preserving unknown issue/date rows below.
- Remaining: richer issue-cover strips, editable issue metadata, dedicated next/previous issue routes and magazine-style contents pages.

## Recommended next order

1. **Re-indexing and changed-file summaries** — because real archives move and change, and this reinforces trust.
2. **Configurable path/filename extraction preview** — because sparse PDFs/comics/scans need local structure-aware metadata before provider lookup.
3. **Useful views / weak-metadata dashboard** — because it turns all existing filters into daily entry points and cleanup queues.
4. **Description search UI polish** — small follow-up: already implemented in backend; make it explicit in the search UX.
5. **Metadata review workbench** — build after weak views and path-template candidates give it enough useful input.
6. **Sidecar write-back / fresh-install restore** — make accepted corrections truly File-First durable.
7. **Scan notifications and scheduled/resumable scans** — improve confidence for larger libraries.
8. **Publication issue grouping and saved custom views** — deepen the browsing experience.
9. **Cover cache/crop/rebuild** — only if manual testing shows cover quality blocks browsing.
10. **Shared libraries and external providers** — important later, but best after the personal/local metadata loop is solid.

## Open product decisions

- Should configurable path extraction be per root, per folder subtree, or both?
- Should path templates write scanner candidates automatically after preview, or require an explicit “apply template to this root” step?
- Which template grammar is enough for v0.2 without becoming a mini programming language?
- Should moved/renamed files be shown as a review queue, or only as scan summary counters?
- Should “weak metadata” be a built-in derived status, a saved smart view, or both?
- Should descriptions be shown as search-match snippets, or remain details-only to protect compact browsing?
- Should sidecar write-back use only `.library.json`, or eventually support OPF write-back for compatible book workflows?
