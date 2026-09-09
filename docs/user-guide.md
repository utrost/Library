# Library user and admin guide

Status: current v0.1 development guide  
Audience: early users, household admins, Nextcloud admins and product reviewers  
Scope: what the app does today, how the main processes work, and which missing features are most visible from user stories

Library is a Nextcloud-native catalogue for publication-like files that already live in Nextcloud Files. It does not import, move or render the original documents. Nextcloud Files remains the canonical storage layer; Library adds discovery, metadata, covers, browsing, search, diagnostics and reader handoff.

This guide describes the implemented state of the app, not the long-term design.

## Who this guide is for

- **Reader / collector:** wants to browse and open books, scans, manuals, comics, magazines or catalogues already stored in Nextcloud.
- **Collection maintainer:** corrects titles, publication type, authors/creators, dates, tags and notes after scanning.
- **Household / small-team admin:** prepares folders, installs/enables the app, asks users to configure roots, and watches scan health.
- **Nextcloud administrator:** owns app deployment, background job execution, preview provider health, backups and server-level permissions.
- **Product reviewer:** uses the flows below to judge whether the current v0.1 shape is useful enough and what crucial feature may be missing.

## Product boundary

Library owns:

- a per-user list of Library roots;
- a scan/index of supported files under those roots;
- one catalogue item per indexed primary publication file;
- editable publication metadata;
- field-level scanner candidates and provenance for reset/review workflows;
- provenance and scan diagnostics;
- a database-backed item query for catalogue search, filters, sorting, facets and pagination;
- cover URLs with preview/CBZ/placeholder diagnostics;
- handoff links to read/open files, show them in Nextcloud Files and download the original source file;
- exposure and editing of Nextcloud system tags on the backing file;
- exposure and adding of Nextcloud file comments;
- read-only corrected-metadata JSON export for user-edited catalogue rows;
- read-only sidecar manifest export that maps corrected rows to suggested `.library.json` sidecar paths.

For the next personal-library direction, see [Personal top features](personal-top-features.md): multi-root confidence, starring/bookmarking, last-opened activity, description search and Library-native workflow status now have checked implementation/smoke coverage; next priority is genres/classifications.

Library does **not** own:

- the binary files themselves;
- folder permissions, shares or WebDAV storage;
- a custom EPUB/PDF/CBZ reader;
- page-position bookmarks, annotations or reader-owned reading position; Library-native star/bookmark support and last-opened activity exist for catalogue items;
- OCR or full-text document search;
- internet metadata lookup;
- OPDS, Kobo or Kindle sync;
- AI classification;
- a shared global collection manager;
- a complete import/write-back workflow for corrected metadata.

## Current app surfaces

### Library catalogue

Open the **Library** app from Nextcloud navigation. The catalogue page is the normal reader-facing entry point.

Current catalogue capabilities:

- browse publication cards in a paginated cover gallery;
- see title, creator, publication type, file format, shelf/root and Nextcloud tags;
- open the publication through **Read**;
- open the original file context through **Show in Files**;
- fetch the original source file through **Download source**;
- open the item workbench through **Details**;
- search title, subtitle, creators, publication, description and file path from the compact quick-filter row;
- use the always-visible quick-filter row for search, sort, starred-only and page-size changes without opening the full filter panel; search fetches updated results after a short debounce and select changes update immediately without a whole-page refresh; press `/` to focus catalogue search and `Escape` to clear it;
- filter by exact creator field and open a creator landing page as read-only discovery; creator identity splitting remains future work;
- use active filter chips to see current filters and remove one filter without clearing the whole search;
- use **Batch actions for current results** to apply or remove a Nextcloud tag from current filter results; this filter-result batch tagging workflow keeps tags separate from Library metadata;
- use the same batch panel for a filter-result metadata reset: Library resets only current scanner-conflict results to stored scanner candidates, preserving current filters and reporting requested/reset/skipped counts;
- run preview-and-apply batch metadata edits for one selected publication field across current filter results; the polished review page first reports requested/changed/unchanged/skipped counts plus example items, then an explicit apply button writes only changed rows;
- use filter-result cover refresh to request fresh cover previews for the current result set; this reloads the filtered catalogue with no-store cover URLs and does not change source files or metadata;
- see first-run guidance when no Library root exists, disabled-root guidance when roots are saved but disabled, and filter-specific recovery actions when a search returns no matches;
- browse compact cover-first cards on mobile and desktop where extra metadata and actions are tucked behind a touch-friendly **Details** disclosure;
- filter by series or periodical title for magazines, journals and recurring publications;
- filter by publication year as read-only discovery for dated books, magazines, journals and comics;
- use the **Top series and periodicals** panel to open the first dedicated publication discovery page for a recurring publication, with item counts and the compact cover gallery in that named context;
- use the **Top publication years** panel to open a dedicated publication year discovery page for dated books, magazines, journals and comics;
- use the **Top creators** panel to open a dedicated creator landing page for the exact full creator field;
- see **No series or periodicals found yet** when the shortcut panel has no publication metadata yet; this is only guidance, with no new series schema;
- filter by publication type, file format, scan status, workflow status, exact Nextcloud tag, shelf and starred state;
- sort by title, recently added, recently opened, publication date, series/periodical or format;
- choose page size up to the current 500-item clamp;
- see page counts and previous/next links;
- see scan diagnostics on unhealthy catalogue cards only;
- open **Library settings**, **Export corrected metadata** and **Export sidecar manifest** from the secondary catalogue action area.

The catalogue cards are intentionally browse-only. Editing happens on the detail page so the grid stays fast to scan. The no-Vue fallback renderer is also expected to preserve the same core browse actions.

Implementation note for reviewers: the catalogue is no longer an app-layer filter over a fully loaded item list. The DB-backed catalogue query path is implemented in `ItemService::queryCatalogue()`, including total counts, facets, filters, sort modes and page slicing. Exact Nextcloud tag filtering is implemented by resolving visible tag names to file IDs, then applying the database query to those file IDs.

### Item details page

Open **Details** from a catalogue card. This is the item workbench.

Current details capabilities:

- view cover, title, creator, type, format and shelf;
- star or unstar the publication as Library-native personal catalogue state;
- set a Library-native workflow status such as `to-read`, `reading`, `finished`, `reference`, `paused`, `abandoned` or `needs-action`; this is separate from operational scan status and Nextcloud tags;
- see and edit a Library-native description that also participates in catalogue search;
- see the last time Library opened the item when it has been read through the Library **Read** action;
- use **Read**, **Show in Files** and **Download source** actions;
- inspect publication metadata;
- inspect a transparent, local **Metadata health** score and weak-field jump list for cleanup targets;
- inspect a metadata correction summary with scanner-candidate and differing-field counts;
- compare current field values with stored scanner candidates, including **Differs from scanner** labels when they disagree;
- reset one field, all fields on one item, or **Bulk reset selected items to scanner** from Library settings when scanner candidates are available;
- edit publication metadata fields:
  - title;
  - subtitle;
  - publication type;
  - creators;
  - publication / series / periodical name;
  - publication date;
  - publisher;
  - language;
  - personal rating (0–5 stars);
  - genres and classifications, where sub-genre remains a genre/classification value until a real taxonomy proves it needs a separate field;
- inspect backing file metadata:
  - Nextcloud file ID;
  - Library file-index ID;
  - cached path;
  - shelf;
  - format and MIME type;
  - scan status and scan error;
- inspect provenance:
  - metadata source;
  - whether the item has user-edited metadata;
  - scanner field sources and scanner candidate values;
- add or remove assignable visible Nextcloud system tags on the backing file;
- choose from tag suggestions for visible/assignable Nextcloud tags while still allowing a new tag name;
- see recent Nextcloud comments for the backing file;
- add a new Nextcloud file comment;
- forget a missing item when the backing file row has already been marked `missing`.

Manual Library metadata edits set provenance to `user` and are preserved across rescans. Stored scanner candidates continue to refresh in the background on later scans, so a user can compare or reset fields without losing current manual values. Tag and comment changes are Nextcloud file-level changes; they do not mutate Library publication metadata.

Library-native workflow status is implemented as an app-owned per-publication field. It is edited on the detail page, filtered in the catalogue with the separate `workflowStatus` filter, shown inside catalogue card **Details**, and carried through corrected-metadata export/import. It is separate from operational scan status (`indexed`, `metadata_error`, `missing`) and separate from Nextcloud tags, which remain useful as extra ad-hoc labels.

### Personal Library settings

Open **Library settings** from the catalogue page or directly at `/settings/user/library`.

Current settings capabilities:

- add/update a per-user root path and label;
- edit, enable/disable or delete a configured Library root without deleting source files from Nextcloud Files;
- queue a scan for one selected root through **Scan this root**;
- queue a scan for all enabled roots through **Scan enabled roots**;
- list configured roots with enabled state and last scan timestamp;
- inspect latest scan progress and recent scan history;
- see scan scope as `all` or a specific root ID;
- inspect indexed file rows with file ID, root label, cached path, format, scan status and scan error;
- open **Export corrected metadata** and **Export sidecar manifest**.

Deleting a Library root removes Library catalogue/index data for that root, but never deletes the source files from Nextcloud Files. The current confirmation is still minimal: the settings form includes a delete action and explanatory copy, but there is not yet a richer typed confirmation or recovery wizard.

## Supported file and metadata behaviour

### Supported primary formats

The scanner currently considers these publication files:

- PDF;
- EPUB;
- CBZ;
- standalone OPF.

Paired OPF sidecars are treated specially: a same-basename `.opf` or folder-level `metadata.opf` can provide metadata for a primary PDF/EPUB/CBZ and is suppressed as a separate catalogue item when paired. Scanner-created sidecar items can be removed on rescan. Manually edited OPF sidecar items stay visible as standalone records until a deliberate merge/migration workflow exists. In normal catalogue browsing, sidecar OPFs are hidden from the catalogue query by `scan_status = sidecar` filtering.

### Metadata sources

Library creates initial catalogue metadata from these local sources:

- EPUB package OPF metadata;
- same-basename or folder-level OPF sidecars;
- standalone OPF files;
- PDF Info dictionary fields;
- CBZ `ComicInfo.xml` fields;
- conservative filename/folder patterns for magazines, dated issues and numbered comics;
- filename fallback when no richer source is available.

Current PDF Info hardening includes:

- `/Title` mapped to title;
- `/Author` mapped to creators;
- `/Subject` mapped as PDF Subject-as-subtitle;
- normalized PDF CreationDate/ModDate values mapped to publication date;
- UTF-16 BOM strings;
- PDF hex Info strings;
- PDF literal octal escapes;
- nested PDF literal parentheses, such as `Camera (Special Issue)`;
- non-BOM single-byte strings that need conversion before MariaDB insert.

PDF `/Creator`, `/Producer` and `/Keywords` are not promoted into canonical publication metadata yet. Creator/Producer usually describe generating software, and keywords need a reviewable keyword/tag model before they become catalogue truth.

Publication type is deliberately separate from file format. A PDF stays conservative and defaults to `other` unless metadata or a user edit gives it a better type. A CBZ can default to `comic`.

### Scan states

The file index can expose these important scan states:

- `indexed`: the file was seen and indexed normally.
- `metadata_error`: the file was seen, but metadata extraction failed. The scan continues and the error is attached to the file row.
- `missing`: the file was indexed before but was not seen during a later scan of that root.
- `sidecar`: an OPF was retained in the file index as a sidecar rather than shown as a normal catalogue item.

The catalogue exposes `indexed`, `metadata_error` and `missing` as scan-status filters. Sidecar rows are implementation diagnostics and are hidden from normal catalogue results.

### Covers

Library serves covers through its own item cover route:

- uses Nextcloud preview generation where available;
- uses an EPUB package-manifest cover image as a fallback cover;
- uses the first image in a CBZ as a fallback cover;
- offers **Refresh cover preview** on item details as a no-store retry of the cover route when the browser or preview looks stale, with the cover-quality explanation on the refresh action instead of a permanent body panel;
- returns a stable SVG placeholder when no cover provider succeeds;
- includes diagnostic response headers so smokes can distinguish preview, CBZ first-image and placeholder outcomes.

There is no app-owned cover cache yet. **Refresh cover preview** is a request-level retry affordance, not a persistent cover-cache management UI. **Manual cover override** is available on item details for URL/upload fixes, with revert back to extracted or preview covers.

### Reader and source-file actions

Library exposes three separate source-file actions:

- **Read:** opens Nextcloud's stable short file route `/f/{fileId}` and lets the installed Nextcloud viewer/reader stack decide how to render the file.
- **Show in Files:** opens the source file's containing folder context in the Files app, with `openfile=false` so the user sees the folder/file context rather than forcing the reader.
- **Download source:** uses the user's WebDAV path under `/remote.php/dav/files/{user}/{path}` to download the original file.

Library does not implement a reader in v0.1.

## Everyday user processes

### First-time setup as a user

1. Put publication files in ordinary Nextcloud folders.
2. Open **Library settings**.
3. Add a root path such as `/Books`, `/Manuals` or `/Shared/Photography Library`.
4. Give the root a human label if the folder name is not the shelf name you want.
5. Click **Scan enabled roots** or **Scan this root**.
6. Wait for scan progress/history to show completion.
7. Return to the **Library** app catalogue.
8. Use filters/search to inspect the first scan result.
9. Open **Details** for a few representative items and correct metadata that matters.

### Browsing and opening publications

1. Open **Library**.
2. Search or filter by shelf, type, format, exact Nextcloud tag or scan status.
3. Use **Read** to hand the file to Nextcloud's viewer stack via the stable file route.
4. Use **Show in Files** when you need the source folder context, sharing UI, file actions or ordinary Nextcloud metadata.
5. Use **Download source** when you need the original file bytes.
6. Use **Details** when the visible card metadata is wrong or incomplete.

### Correcting a bad catalogue item

1. Open the item's **Details** page.
2. Edit publication metadata in the single metadata workbench. Title and description use roomier fields; creators can be entered one per line; language and genre are multi-select picklists; publisher has type-ahead/autocomplete suggestions.
3. Let the autosave enhancement save changes after edits, or press **Save metadata** as the accessible fallback/manual save action.
4. Confirm provenance shows the item is user-edited.
5. Use the scanner-candidate table to see where the scanner agrees or differs.
6. Use **Reset to scanner** on a single field, or the whole-item reset action, only when the stored scanner candidate is preferable.
7. Rescan later without fear that scanner metadata will overwrite your correction; scanner candidates refresh separately.

### Using Nextcloud tags from Library

1. Open an item's **Details** page.
2. Add a visible/assignable Nextcloud tag such as `photography`, `project-library`, `manuals` or `to-review`; the input offers tag suggestions from assignable visible tags, and one-click suggested tag buttons let you apply unassigned suggestions without typing.
3. Review tag result feedback on the detail page. Library reports when a tag was added, when it was already assigned, when an empty tag was ignored, and when a tag is not assignable.
4. Remove a tag from the details page when needed.
5. Return to the catalogue.
6. Filter by the exact tag name.

Tags remain Nextcloud file-level metadata. They are useful for cross-archive classification across Files and Library, not just Library-only categories.

### Using comments from Library

1. Open an item's **Details** page.
2. Add a short Nextcloud comment as a file-level note.
3. Use comments for discussion, review notes or provenance hints.
4. Do not use comments as structured catalogue fields; use the publication metadata form for that.

Library can add comments but does not yet provide a Library-specific comment management surface such as edit/delete controls.

### Investigating scan problems

1. Open **Library settings**.
2. Check latest scan status, scan scope, indexed count and error count.
3. Inspect indexed file diagnostics for `metadata_error` or `missing`.
4. In the catalogue, filter by scan status:
   - `metadata_error` for files where extraction failed but the scan continued;
   - `missing` for previously indexed files no longer seen under the root;
   - `indexed` for normal rows.
5. Open **Show in Files** for a problem item to inspect the underlying file.
6. If a root-specific problem is suspected, use **Scan this root** rather than scanning every enabled root.

### Forgetting missing catalogue entries

The **Forget missing item** action only appears for missing catalogue entries on the item details page.

Use it when:

- a file was deliberately removed, renamed or moved outside the configured root;
- a rescan already marked the backing file as `missing`;
- you want to remove the stale Library catalogue row instead of keeping it as a diagnostic.

Forgetting a missing item removes this Library catalogue entry and its app-owned file-index row. It does not delete source files from Nextcloud Files. Ordinary item deletion for still-present files remains deferred to Nextcloud Files: delete or move the file there, rescan the root, then use **Forget missing item** if you do not want to keep the stale diagnostic.

### Export corrected metadata

Use **Export corrected metadata** from the catalogue or Library settings to download a side-effect-free JSON download of user-edited catalogue rows; this corrected-metadata export is the portable input for preview/apply.

The read-only corrected-metadata JSON export is implemented. It includes stable file identity and Library metadata needed for a first recovery/import story:

- schema version and export kind;
- export timestamp;
- item count;
- Library item ID and library file row ID;
- Nextcloud file ID;
- cached file path;
- root path and shelf label;
- publication title, subtitle, type, creators, publication, publication date, publisher and language;
- metadata provenance and user-edited flags;
- scan status and scan diagnostics.

The export itself is read-only. **Export sidecar manifest** is also read-only: it lists each corrected row with its source path and suggested `.library.json` sidecar path so a future writer or external script has a reviewable target map. **Export sidecar ZIP** downloads the same corrected metadata as a downloadable ZIP of proposed `.library.json` files plus the manifest. It does not write sidecar files into source folders.

Settings also provide **Preview metadata import** and **Apply metadata import**. Preview reports matches, missing items and differing fields without writing. Apply writes matched corrected metadata to existing Library items, skips missing/unchanged rows, and still does not write OPF files, JSON sidecars or any other source-folder files. Sidecar manifest imports are accepted as the same preview/apply source, and individual `.library.json` sidecar files can be pasted into the import form, so a downloaded `library-metadata-sidecar-manifest.json` or one proposed sidecar can restore matched scanned items without writing source folders.

## Admin processes

### Installing or enabling the app

The current development target is a conventional Nextcloud 34 app with app id `library`.

A Nextcloud administrator should:

1. place the app under `custom_apps/library`;
2. enable it through normal Nextcloud app management or `occ app:enable library`;
3. run or allow app database migrations through the normal Nextcloud upgrade flow;
4. make sure Nextcloud background jobs execute regularly, because Library scan requests are queued as background jobs;
5. verify that the Library navigation entry appears;
6. verify that `/settings/user/library` opens for a normal user;
7. verify that the catalogue loads through the Vue app or fallback without browser console errors.

### Preparing folders and permissions

Library scans what the current user can access through Nextcloud Files. Admins should therefore prepare permissions in Nextcloud first:

- create or share folders in Nextcloud Files;
- ensure users can access the folders they should scan;
- avoid treating Library roots as a separate permission model;
- prefer meaningful top-level or shared-folder names because root labels become shelves.

Each user configures their own Library roots. There is no polished global root provisioning UI yet.

### Running and monitoring scans

1. Ask the user to open **Library settings** and click **Scan enabled roots** or **Scan this root**.
2. Ensure background jobs are actually running on the server.
3. Watch scan progress/history in the settings page.
4. Use indexed file diagnostics to distinguish:
   - unsupported files, which simply do not enter the index;
   - metadata errors, where an indexed file may need parser hardening;
   - missing files, where a previously indexed file was not seen on a later scan;
   - OPF sidecar rows, which can support another item while staying out of normal catalogue browsing.

Library scan jobs currently expose progress/history, status, scope, indexed counts, error counts, duration and summary. **Cancel queued scan** is available before a job starts, and **Cancel scan** is available for running jobs; running-job cancellation is cooperative and stops at the next scan progress checkpoint. Scheduled scan UI and notification flow remain future work.

### Import health

After a real-library scan, the catalogue can show an **Import health** panel when it finds repair-worthy data. The panel is intentionally separate from normal browsing so the cover-first shelf stays calm while maintainers still get collection-scale diagnostics.

Current import health checks include:

- **metadata-error review** — counts files with `metadata_error` or `scanError`, groups them by extension/error, links to `?status=metadata_error`, and shows example paths with a suggested repair action;
- **archive/container check** — reads lightweight file magic for EPUB/CBZ rows and highlights archive magic mismatches such as a `.cbz` file that is really 7z/RAR or an EPUB that is not a readable ZIP container;
- **cover health** — separates Nextcloud preview generation expectations from Library cover-route fallback expectations, because Nextcloud may not preview CBZ while Library can still use a valid ZIP CBZ first-image fallback;
- **non-ZIP CBZ** guidance — recommends converting 7z/RAR archives to real ZIP/CBZ or adding explicit extractor support before expecting reliable metadata and covers.

Use this panel after large imports to decide whether to repair source archives, add parser fixtures, or tag/filter affected rows for manual cleanup.

### Preview and reader dependencies

Library depends on existing Nextcloud capabilities for two visible behaviours:

- **Read:** hands off through Nextcloud file/viewer routes rather than rendering directly.
- **Covers:** asks Nextcloud's preview system first, then falls back for CBZ or placeholder.

If reading or covers look wrong, verify the relevant Nextcloud viewer/preview apps and server preview configuration before assuming Library corrupted metadata.

### Backup and removal expectations

Library stores app-owned database rows for roots, indexed files, catalogue items and scan jobs. The original files stay in Nextcloud Files.

Removing Library should not delete publication files. It will, however, remove the catalogue layer unless the app tables are backed up/restored with the Nextcloud database.

Current uninstall/removal boundaries:

1. **Disable the app** with `occ app:disable library` when you want to stop Library without deleting app code or source files.
2. **Remove the app** through normal Nextcloud app management or by deleting `custom_apps/library` only after disabling it. This removes the app code, not the original publications in Nextcloud Files.
3. Keep a Nextcloud database backup if you need to preserve Library roots, scan history, file index rows and corrected catalogue metadata.
4. Use **Export corrected metadata** to keep a JSON snapshot of user-edited catalogue rows before removal, **Export sidecar manifest** to review suggested file-neighbour `.library.json` paths for those rows, and **Export sidecar ZIP** when you want a portable archive of those proposed sidecar JSON files without writing them into the source folders.
5. Use **Preview metadata import** and **Apply metadata import** only against an existing Library catalogue where rows can be matched by Library/file identity or path.
6. Treat full restore/write-back as not yet implemented: there is currently no OPF/JSON writer that can reconstruct user-corrected Library metadata after app removal without an existing catalogue to match.

## User stories for judging v0.1 usefulness

### Story 1: Personal mixed archive

As a user with PDFs, EPUBs and CBZs already in Nextcloud, I want to point Library at one or more folders and get a browsable catalogue without moving files.

Current support: mostly present.

Acceptance checks:

- I can save a root path.
- A scan discovers supported files.
- The catalogue shows cards with titles, formats and shelves.
- I can open items through Nextcloud.
- I can download the source file when viewer handoff is not what I need.

Visible gaps:

- root deletion now requires users to Type DELETE to confirm, and root deletion recovery guidance has landed so users know to export corrected metadata, keep a database backup for exact rollback, and re-add/scan the same source folder when rebuilding catalogue rows;
- first-run empty state could guide non-technical users more explicitly;
- no bulk rescan scheduling or completion notifications.

### Story 2: Correcting messy scanner metadata

As a collection maintainer, I want to fix incorrect titles, types, creators and dates without those edits being lost on rescan.

Current support: present for the current fields.

Acceptance checks:

- Details page exposes publication metadata editing in a single editable field surface rather than duplicating the same values as read-only metadata and edit fields.
- Saved edits set provenance to user-edited.
- Rescan does not overwrite user-edited metadata.
- Scanner candidates refresh on rescan, while current user-edited values stay untouched.
- PDF Info extraction handles current hardened cases including PDF Subject-as-subtitle, normalized PDF CreationDate/ModDate, hex strings, octal escapes and nested PDF literal parentheses.

Implemented correction helpers:

- field-level scanner candidates are stored, and a manual edit keeps scanner candidates available for later reset;
- Reset to scanner remains available after editing when a stored scanner candidate differs from the current value;
- whole-item reset to scanner candidates can apply all stored scanner values at once;
- The edit form keeps short field-shape hints as hover/focus help on the field names for dates, language codes and creator separators; hard validation for publication dates and language codes now blocks clearly invalid values while creator separators remain guidance;
- Library settings include **Bulk reset selected items to scanner** for item IDs copied from the scanner-conflict review filter;
- the catalogue **Batch actions for current results** panel includes a filter-result metadata reset that applies scanner candidates only to current scanner-conflict results;
- rows where the current value differs from the scanner candidate show a **Differs from scanner** label;
- the details page includes a read-only metadata correction summary with a scanner candidate count and differing-field count;
- **Preview metadata import** accepts a Library corrected metadata JSON export and reports matches/field changes; **No changes are written during preview**.

Visible gaps:

- no bulk edit undo/history or multi-field apply workflow yet: arbitrary one-field batch metadata editing now has a preview-and-apply path across the current filter result, but richer cross-field validation rules, multi-field edits, and history remain future work;
- bulk editing remains future work for multi-field edits, undo/history, and richer cross-field validation rules;
- scanner-conflict filtering is the first review view for scanner/sidecar/user metadata conflicts; richer queues remain future work.

### Story 3: Classifying across projects

As a user, I want to tag publications with existing Nextcloud concepts like `photography`, `manuals`, `simiono` or `to-review` and filter the catalogue by those tags.

Current support: basic present.

Acceptance checks:

- visible assignable Nextcloud tags appear on cards/details;
- details can add/remove assignable tags;
- detail pages show tag result feedback for added, already-assigned, empty and not-assignable tag outcomes;
- one-click suggested tag buttons can add unassigned visible/assignable Nextcloud tags without typing;
- catalogue can filter by exact tag;
- tag/comment operations do not change Library publication metadata.

Visible gaps:

- batch tagging exists for current catalogue filter results, including applying or removing one Nextcloud tag from every matched item; richer taxonomy batch workflows remain future work;

### Story 4: Shared household library

As a household admin, I want family members to browse publications they are allowed to see while keeping ordinary Nextcloud permissions as the authority.

Current support: partial.

Acceptance checks:

- Library routes are user-scoped and do not introduce a separate global permission model.
- Users configure roots under their own account.
- The scanner resolves roots through the current user's Nextcloud folder view.

Visible gaps:

- no admin-managed shared library root provisioning;
- no explicit multi-user catalogue sharing layer;
- no role distinction inside Library beyond Nextcloud access;
- no UI explaining what another user must do after a folder is shared with them.

### Story 5: Finding a document in a large archive

As a user with hundreds or thousands of documents, I want catalogue browsing to stay responsive and searchable.

Current support: useful first pass.

Acceptance checks:

- paginated catalogue renders with bounded page sizes;
- filters combine across text, type, format, tag, shelf and scan status;
- sorting options cover title, recently added, publication date and format;
- database-backed item queries provide filtered totals and page slices;
- generated 10k stress and staged real-pilot evidence have verified the basic shape, but real pilots should be rerun after parser changes before treating them as release evidence.

Visible gaps:

- no full-text search inside documents;
- publication/series, publication-year and creator landing pages exist so far, and publication pages show **Publication contents** issue/date coverage; richer creator identity splitting, issue grouping beyond the compact context summary and saved views remain future work;
- no saved views or smart collections;
- no user-facing explanation of query performance limits for very large libraries.

### Story 6: Trusting scan health

As an admin or maintainer, I want to know whether scans are progressing, completed, failed, or produced per-file metadata errors.

Current support: good development baseline.

Acceptance checks:

- scans are queued as background jobs;
- settings page shows progress and history;
- file rows retain scan status and error text;
- one bad metadata file does not abort the whole root scan;
- one selected root can be scanned without scanning every enabled root.

Visible gaps:

- **Retry metadata errors** / metadata-error retry works from Library settings;
- **Recheck missing files** / missing-file recheck works from Library settings;
- **Cancel queued scan** works for queued scan jobs that have not started yet;
- **Cancel scan** works for running scan jobs cooperatively at progress checkpoints;
- no notification when a long scan completes or fails;
- no per-root progress percentage or estimated remaining time;
- no scheduled/resumable incremental scan policy;
- running-job cancellation stops only at scanner progress checkpoints, not inside one long metadata extraction call.

### Story 7: Covers make the library feel browsable

As a reader, I want recognizable covers so the catalogue feels like a media library, not a file table.

Current support: first pass.

Acceptance checks:

- cover route returns an image for every item;
- Nextcloud preview covers appear when available;
- CBZ first-image covers work when generic previews do not;
- placeholder covers keep unsupported items usable;
- item details keep the cover-quality explanation on the refresh action so placeholders and fallback sources are understandable without adding a permanent diagnostic body panel;
- item details can set a manual cover override from a URL or uploaded image and revert back to extracted/preview covers;
- diagnostic headers explain whether a response came from preview, EPUB package cover, CBZ first image or placeholder.

Visible gaps:

- no persistent app-owned cover cache yet;
- no crop/rebuild workflow for an app-owned cached cover store.

### Story 8: Keeping sidecars and metadata files sane

As a collector, I want OPF sidecars to enrich publications without cluttering the catalogue.

Current support: basic present.

Acceptance checks:

- same-basename and folder-level OPF sidecars can override extracted metadata;
- paired sidecar OPFs are hidden as separate catalogue items;
- scanner-created stale sidecar items can be cleaned on rescan;
- manually edited OPF sidecar records are preserved as visible standalone records until a merge workflow exists.
- corrected Library metadata can be exported as JSON, mapped to suggested `.library.json` paths with **Export sidecar manifest**, and downloaded as proposed sidecar files with **Export sidecar ZIP**.

Visible gaps:

- no user-facing explanation of sidecar precedence in the UI;
- no source-folder writer that creates OPF/JSON sidecars in place;
- conflict visibility exists for scanner/user candidates, but there is no richer dedicated conflict UI for scanner/sidecar/user precedence disagreements.

### Story 9: Removing or migrating Library safely

As an admin, I want to disable or remove Library without risking source files and with at least a portable snapshot of important corrections.

Current support: partial but much safer than the early prototype.

Acceptance checks:

- source files remain ordinary Nextcloud files;
- root deletion and missing-item forgetting delete app rows, not source files;
- read-only corrected-metadata JSON export is implemented for user-edited rows;
- docs explain that a full restore still needs the Nextcloud database or future importer.

Visible gaps:

- import from the corrected-metadata JSON export exists for matched existing catalogue rows, but not for rebuilding a fresh catalogue from files alone;
- no write-back to OPF or JSON sidecars in source folders;
- no guided uninstall/export checklist inside the UI;
- no automated validation that an export can recreate a catalogue in a fresh install.

## Prioritized next gaps after the 1k real-corpus pilot

The 1k real-corpus pilot proved that the catalogue can handle a realistic staged shelf, but it also showed where the next work should concentrate. Real-corpus filename hardening landed after the pilot, so the next gap order is now:

1. Keep metadata-quality work safe by splitting the extractor seam. `PublicationMetadataService` should remain the façade, but filename, PDF, OPF/EPUB and CBZ parsing should move into narrower adapters before more real-corpus rules accumulate. This refactor is now complete for the current extractor families: filename/folder parsing lives in `FilenameMetadataExtractor`, PDF Info parsing/decoding lives in `PdfInfoMetadataExtractor`, EPUB package/standalone OPF parsing lives in `OpfEpubMetadataExtractor`, and CBZ ComicInfo parsing lives in `CbzComicInfoMetadataExtractor`.
2. Improve the metadata correction workflow. Details editing exists, field-level scanner candidates are recorded and shown on item details, manual edit keeps scanner candidates available for later reset, and rescans refresh scanner candidates while current user-edited values stay untouched. Individual fields can show a **Reset to scanner** action when a stored scanner candidate differs from the current value, and whole-item reset to scanner candidates can apply all stored candidates at once. The edit form shows hints for dates, language codes and creator separators; first hard validation now blocks invalid publication date and language values while creator separators remain guidance. Rows where the current value differs from the scanner candidate show a **Differs from scanner** label. The details page includes a read-only metadata correction summary with scanner candidate count and differing-field count. Scanner conflicts filter is available from the catalogue as the first review workflow; bulk editing and richer validation remain future work.
3. Make corrected metadata portable back into a fresh install or files. Read-only export, no-write import preview, apply-to-matched-existing-items, sidecar manifest export, sidecar manifest imports, and sidecar ZIP export exist; write-back to JSON or OPF sidecars in source folders does not.
4. Add repair-oriented scan lifecycle controls. Queued scans, progress, metadata-error retry, **Recheck missing files**, **Cancel queued scan** and cooperative running-job cancellation work; scheduled scans and completion notifications do not.
5. Improve the cover quality path. Preview, EPUB package cover, CBZ first image, placeholders, a refresh-cover retry affordance, and manual cover override/revert work; app-owned cover cache and crop/rebuild workflows do not.
6. Add discovery by publication structure. Search/filter/pagination, the first dedicated publication discovery page, publication contents issue/date context, the first dedicated publication year discovery page and the first dedicated creator discovery page exist; richer grouping and saved views do not.
7. Polish root/onboarding/shared-library workflows. Root lifecycle exists with typed root-delete confirmation, root deletion recovery guidance and first-run guidance; richer validation and admin-managed shared roots remain future work.

## Crucial missing-feature candidates exposed by the guide

These are the highest-signal gaps to judge before pushing v0.1 further:

1. **Root management polish beyond the first lifecycle slice** — users can edit, enable/disable, delete and scan one root, and root deletion asks users to Type DELETE to confirm; the workflow still needs clearer recovery consequences and richer validation before release.
2. **Scan lifecycle controls** — queued scans, metadata-error retry, missing-file recheck, queued-job cancellation and cooperative running-job cancellation work, but scheduled scans and completion notifications are absent.
3. **Metadata correction workflow** — details editing, field-level scanner candidates, single-field reset-to-scanner, whole-item reset to scanner candidates, non-blocking edit guidance, first hard validation for publication dates and language codes, field-level **Differs from scanner** labels, a read-only metadata correction summary and the first scanner-conflict review filter exist. Bulk edit remains future work. Richer validation remains future work.
4. **Tag UX** — tag add/remove, tag suggestions, one-click suggested tag buttons, tag result feedback, and filter-result bulk tagging apply/remove work; richer taxonomy batch workflows remain future work.
5. **Cover quality path** — preview/CBZ/EPUB/placeholder covers, a refresh-cover retry affordance, and manual cover override/revert work, but app-owned cover cache and crop/rebuild workflows remain missing.
6. **Shared-library administration** — Library respects Nextcloud permissions, but does not yet have an admin-managed shared root/catalogue story.
7. **Discovery by publication structure** — search/filter, creator/publication/year filters, active chips, top-series shortcuts, the first dedicated publication discovery page, the first dedicated publication year discovery page and the first dedicated creator discovery page exist; richer creator identity splitting, publication grouping, smart collections and saved views remain future work.
8. **User-facing onboarding and empty states** — first-run root guidance, disabled-root guidance and filtered-empty recovery actions exist; richer guided tours and sample/demo fixtures remain future work.
9. **Metadata portability beyond export/preview/apply** — corrected Library metadata can be exported as JSON, previewed for restore matches/field changes, applied to matched existing Library items, mapped to suggested `.library.json` paths with a read-only sidecar manifest and downloaded as a sidecar ZIP, but there is no OPF/JSON sidecar writer into source folders or fresh-install migration story that makes corrections fully file-first durable.
10. **Real-collection metadata hardening** — PDF hardening has improved, but more real EPUB/OPF/CBZ/PDF samples are needed to find weak metadata, cover and sidecar cases before release.

DB-backed catalogue query path is implemented and is no longer a missing-feature candidate. Corrected-metadata JSON export, no-write import preview and apply-to-matched-items are implemented, but OPF/JSON write-back remains missing.

## Practical review script

Use this script when deciding what to build next. Genre and classification filters are Library-native catalogue filters, separate from Nextcloud tags, and are preserved in corrected-metadata export/import:

1. Install/enable Library on a Nextcloud 34 sandbox.
2. Add one small root with 20-100 mixed real files.
3. Run **Scan this root** and wait for completion.
4. Browse the catalogue without touching settings.
5. Find one PDF, one EPUB and one CBZ if available.
6. Open each with **Read**, **Show in Files** and **Download source**.
7. Correct metadata on three items, including Library-native genres/classifications where useful.
8. Add one Nextcloud tag and one comment; keep it separate from Genre and classification filters.
9. Export corrected metadata and inspect the JSON; preview/apply it only after reviewing matched rows.
10. Rescan.
11. Confirm edits survived and diagnostics are understandable.
12. Try to remove or temporarily disable a root.
13. Try to answer: “what should I fix next if I had 5,000 files?”

If step 12 feels unsafe or unclear, continue root lifecycle polish. If step 13 feels blocked by organization rather than performance, prioritize grouping/saved views. If metadata looks weak across real files, continue real-collection metadata hardening.
