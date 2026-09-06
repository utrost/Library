# Library user and admin guide

Status: current v0.1 development guide  
Audience: early users, household admins, Nextcloud admins and product reviewers  
Scope: what the app does today, how the main processes work, and which missing features are most visible from user stories

Library is a Nextcloud-native catalogue for publication-like files that already live in Nextcloud Files. It does not import, move or render the original documents. Nextcloud Files remains the canonical storage layer; Library adds discovery, metadata, covers, browsing, search, diagnostics and reader handoff.

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
- provenance and scan diagnostics;
- catalogue search, filters, sorting and pagination;
- cover URLs with preview/CBZ/placeholder diagnostics;
- handoff links to read/open files and show them in Nextcloud Files;
- exposure and editing of Nextcloud system tags on the backing file;
- exposure and adding of Nextcloud file comments.

Library does **not** own:

- the binary files themselves;
- folder permissions, shares or WebDAV storage;
- a custom EPUB/PDF/CBZ reader;
- bookmarks, annotations or reading position;
- OCR or full-text document search;
- internet metadata lookup;
- OPDS, Kobo or Kindle sync;
- AI classification;
- a shared global collection manager.

## Current app surfaces

### Library catalogue

Open the **Library** app from Nextcloud navigation. The catalogue page is the normal reader-facing entry point.

Current catalogue capabilities:

- browse publication cards in a paginated cover gallery;
- see title, creator, publication type, file format, shelf/root and Nextcloud tags;
- open the publication through **Read**;
- open the original file context through **Show in Files**;
- open the item workbench through **Details**;
- search by title/creator/path text;
- filter by publication type, file format, scan status, exact Nextcloud tag and shelf;
- sort by title, recently added, publication date or format;
- choose page size up to the current 500-item clamp;
- see scan diagnostics on unhealthy catalogue cards only.

The catalogue cards are intentionally browse-only. Editing happens on the detail page so the grid stays fast to scan.

### Item details page

Open **Details** from a catalogue card. This is the item workbench.

Current details capabilities:

- view cover, title, creator, type, format and shelf;
- use **Read** and **Show in Files** actions;
- inspect publication metadata;
- edit publication metadata fields:
  - title;
  - subtitle;
  - publication type;
  - creators;
  - publication / series / periodical name;
  - publication date;
  - publisher;
  - language;
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
- add or remove assignable visible Nextcloud system tags on the backing file;
- see recent Nextcloud comments for the backing file;
- add a new Nextcloud file comment.

Manual Library metadata edits set provenance to `user` and are preserved across rescans.

### Personal Library settings

Open **Library settings** from the catalogue page or directly at `/settings/user/library`.

Current settings capabilities:

- add/update a per-user root path and label;
- edit, enable/disable or delete a configured Library root without deleting source files from Nextcloud Files;
- queue a scan for one selected root;
- list configured roots with enabled state and last scan timestamp;
- queue a background scan of enabled roots;
- inspect latest scan progress and recent scan history;
- inspect indexed file rows with file ID, root label, cached path, format, scan status and scan error.

Deleting a Library root removes Library catalogue/index data for that root, but never deletes the source files from Nextcloud Files.

## Supported file and metadata behaviour

### Supported primary formats

The scanner currently considers these publication files:

- PDF;
- EPUB;
- CBZ;
- standalone OPF.

Paired OPF sidecars are treated specially: a same-basename `.opf` or folder-level `metadata.opf` can provide metadata for a primary PDF/EPUB/CBZ and is suppressed as a separate catalogue item when paired.

### Metadata sources

Library creates initial catalogue metadata from these local sources, in practical order of usefulness:

- OPF package metadata from EPUB files;
- same-basename or folder-level OPF sidecars;
- standalone OPF files;
- PDF Info dictionary fields such as title and author;
- CBZ `ComicInfo.xml` fields;
- conservative filename/folder patterns for magazines, dated issues and numbered comics;
- filename fallback when no richer source is available.

Publication type is deliberately separate from file format. A PDF defaults conservatively unless metadata or a user edit gives it a better type. A CBZ can default to comic.

### Covers

Library serves covers through its own item cover route:

- uses Nextcloud preview generation where available;
- uses the first image in a CBZ as a fallback cover;
- returns a stable SVG placeholder when no cover provider succeeds;
- includes diagnostic response headers so smokes can distinguish preview, CBZ first-image and placeholder outcomes.

## Everyday user processes

### First-time setup as a user

1. Put publication files in ordinary Nextcloud folders.
2. Open **Library settings**.
3. Add a root path such as `/Books`, `/Manuals` or `/Shared/Photography Library`.
4. Give the root a human label if the folder name is not the shelf name you want.
5. Click **Scan enabled roots**.
6. Wait for scan progress/history to show completion.
7. Return to the **Library** app catalogue.
8. Use filters/search to inspect the first scan result.
9. Open **Details** for a few representative items and correct metadata that matters.

### Browsing and opening publications

1. Open **Library**.
2. Search or filter by shelf, type, format, tag or scan status.
3. Use **Read** to hand the file to Nextcloud's viewer stack via the stable file route.
4. Use **Show in Files** when you need the source folder context, sharing UI, file actions or ordinary Nextcloud metadata.
5. Use **Details** when the visible card metadata is wrong or incomplete.

### Correcting a bad catalogue item

1. Open the item's **Details** page.
2. Edit publication metadata.
3. Save metadata.
4. Confirm provenance shows the item is user-edited.
5. Rescan later without fear that scanner metadata will overwrite your correction.

### Using Nextcloud tags from Library

1. Open an item's **Details** page.
2. Add a visible/assignable Nextcloud tag such as `photography`, `project-library`, `manuals` or `to-review`.
3. Return to the catalogue.
4. Filter by the exact tag name.

Tags remain Nextcloud file-level metadata. They are useful for cross-archive classification across Files and Library, not just Library-only categories.

### Using comments from Library

1. Open an item's **Details** page.
2. Add a short Nextcloud comment as a file-level note.
3. Use comments for discussion, review notes or provenance hints.
4. Do not use comments as structured catalogue fields; use the publication metadata form for that.

### Investigating scan problems

1. Open **Library settings**.
2. Check latest scan status, indexed count and error count.
3. Inspect indexed file diagnostics for `metadata_error` or `missing`.
4. In the catalogue, filter by scan status:
   - `metadata_error` for files where extraction failed but the scan continued;
   - `missing` for previously indexed files no longer seen under the root;
   - `indexed` for normal rows.
5. Open **Show in Files** for a problem item to inspect the underlying file.

### Forgetting missing catalogue entries

The **Forget missing item** action only appears for missing catalogue entries on the item details page.

Use it when:

- a file was deliberately removed, renamed or moved outside the configured root;
- a rescan already marked the backing file as `missing`;
- you want to remove the stale Library catalogue row instead of keeping it as a diagnostic.

Forgetting a missing item removes this Library catalogue entry and its app-owned file-index row. It does not delete source files from Nextcloud Files. Ordinary item deletion for still-present files remains deferred to Nextcloud Files: delete or move the file there, rescan the root, then use **Forget missing item** if you do not want to keep the stale diagnostic.

### Export corrected metadata

Use **Export corrected metadata** from the catalogue or Library settings to download a side-effect-free JSON download of user-edited catalogue rows.

The export includes stable file identity and Library metadata needed for a first recovery/import story:

- Library item ID and library file row ID;
- Nextcloud file ID;
- cached file path;
- root path and shelf label;
- publication title, subtitle, type, creators, publication, publication date, publisher and language;
- metadata provenance and user-edited flags;
- scan status and scan diagnostics.

The export is read-only. It does not write OPF files, JSON sidecars or any other source-folder files. It is not a complete restore/import feature yet, but it gives admins a portable snapshot of corrected metadata before disabling or removing the app.

## Admin processes

### Installing or enabling the app

The current development target is a conventional Nextcloud 34 app with app id `library`.

A Nextcloud administrator should:

1. place the app under `custom_apps/library`;
2. enable it through normal Nextcloud app management or `occ app:enable library`;
3. make sure the app's database migrations have run;
4. make sure Nextcloud background jobs execute regularly, because Library scan requests are queued as background jobs;
5. verify that the Library navigation entry appears;
6. verify that `/settings/user/library` opens for a normal user.

### Preparing folders and permissions

Library scans what the current user can access through Nextcloud Files. Admins should therefore prepare permissions in Nextcloud first:

- create or share folders in Nextcloud Files;
- ensure users can access the folders they should scan;
- avoid treating Library roots as a separate permission model;
- prefer meaningful top-level or shared-folder names because root labels become shelves.

Each user configures their own Library roots. There is no polished global root provisioning UI yet.

### Running and monitoring scans

1. Ask the user to open **Library settings** and click **Scan enabled roots**.
2. Ensure background jobs are actually running on the server.
3. Watch scan progress/history in the settings page.
4. Use indexed file diagnostics to distinguish:
   - unsupported files, which simply do not enter the index;
   - metadata errors, where an indexed file may need parser hardening;
   - missing files, where a previously indexed file was not seen on a later scan.

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
4. Use **Export corrected metadata** to keep a JSON snapshot of user-edited catalogue rows before removal.
5. Treat import/write-back as not yet implemented: there is currently no sidecar/JSON importer that can reconstruct user-corrected Library metadata after app removal.
6. Before uninstalling a real archive, keep both the database backup and the corrected-metadata export until a restore/import flow exists.

## User stories for judging v0.1 usefulness

### Story 1: Personal mixed archive

As a user with PDFs, EPUBs and CBZs already in Nextcloud, I want to point Library at one or more folders and get a browsable catalogue without moving files.

Current support: mostly present.

Acceptance checks:

- I can save a root path.
- A scan discovers supported files.
- The catalogue shows cards with titles, formats and shelves.
- I can open items through Nextcloud.

Visible gaps:

- root management needs disable/delete/edit polish;
- first-run empty state could guide non-technical users more explicitly;
- no bulk rescan scheduling or scan cancellation UI.

### Story 2: Correcting messy scanner metadata

As a collection maintainer, I want to fix incorrect titles, types, creators and dates without those edits being lost on rescan.

Current support: present for the current fields.

Acceptance checks:

- Details page exposes publication metadata editing.
- Saved edits set provenance to user-edited.
- Rescan does not overwrite user-edited metadata.

Visible gaps:

- no field-level provenance: one user edit protects the item as a whole;
- no reset/revert-to-scanner action;
- no bulk edit or multi-select correction workflow;
- no validation guidance for dates, language codes or creator formatting.

### Story 3: Classifying across projects

As a user, I want to tag publications with existing Nextcloud concepts like `photography`, `manuals`, `simiono` or `to-review` and filter the catalogue by those tags.

Current support: basic present.

Acceptance checks:

- visible assignable Nextcloud tags appear on cards/details;
- details can add/remove assignable tags;
- catalogue can filter by exact tag.

Visible gaps:

- no tag autocomplete or picker;
- exact-match tag filter only;
- no bulk tagging;
- Nextcloud tag permission edge cases are intentionally quiet rather than explained in the UI.

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
- generated 10k stress and the current real 100-file sample have verified the basic shape; earlier staged real pilots remain useful scale evidence but should be rerun after parser changes before treating them as release evidence.

Visible gaps:

- filtering currently happens after loading the user's item list into the app layer, so larger real libraries may need database-level query/pagination;
- no full-text search inside documents;
- no grouping/browse pages for creator, series, publication or year;
- no saved views or smart collections.

### Story 6: Trusting scan health

As an admin or maintainer, I want to know whether scans are progressing, completed, failed, or produced per-file metadata errors.

Current support: good development baseline.

Acceptance checks:

- scans are queued as background jobs;
- settings page shows progress and history;
- file rows retain scan status and error text;
- one bad metadata file does not abort the whole root scan.

Visible gaps:

- no scan cancellation/retry control;
- no notification when a long scan completes or fails;
- no per-root progress percentage or estimated remaining time;
- no scheduled/resumable incremental scan policy.

### Story 7: Covers make the library feel browsable

As a reader, I want recognizable covers so the catalogue feels like a media library, not a file table.

Current support: first pass.

Acceptance checks:

- cover route returns an image for every item;
- Nextcloud preview covers appear when available;
- CBZ first-image covers work when generic previews do not;
- placeholder covers keep unsupported items usable.

Visible gaps:

- no persistent app-owned cover cache yet;
- EPUB cover extraction is not a dedicated path yet;
- preview failures are diagnostic, not user-friendly;
- no manual cover override.

### Story 8: Keeping sidecars and metadata files sane

As a collector, I want OPF sidecars to enrich publications without cluttering the catalogue.

Current support: basic present.

Acceptance checks:

- same-basename and folder-level OPF sidecars can override extracted metadata;
- paired sidecar OPFs are hidden as separate catalogue items;
- scanner-created stale sidecar items can be cleaned on rescan.

Visible gaps:

- no user-facing explanation of sidecar precedence;
- no tool to create/export sidecars from corrected Library metadata;
- no conflict UI when scanner/sidecar/user metadata disagree.

## Crucial missing-feature candidates exposed by the guide

These are the highest-signal gaps to judge before pushing v0.1 further:

1. **Root management polish beyond the first lifecycle slice** — users can now edit, enable/disable, delete and scan one root, but the workflow still needs stronger confirmation, clearer consequences and richer validation before release.
2. **Database-level catalogue querying** — current app-layer filtering/pagination is adequate for pilots, but real 10k+ archives will likely need DB-backed filters, sort and pagination.
3. **Scan lifecycle controls** — queued scans exist, but cancellation, retry, scheduled scans and completion notifications are absent.
4. **Metadata correction workflow** — details editing works, but there is no bulk edit, reset-to-scanner, field-level provenance or validation guidance.
5. **Tag UX** — tag add/remove works, but lacks autocomplete, picker, bulk tagging and clear permission feedback.
6. **Cover quality path** — preview/CBZ/placeholder covers work, but EPUB covers, cover cache and manual overrides remain missing.
7. **Shared-library administration** — Library respects Nextcloud permissions, but does not yet have an admin-managed shared root/catalogue story.
8. **Discovery by publication structure** — search/filter exists, but there are no creator/series/publication/year landing pages, smart collections or saved views.
9. **User-facing onboarding and empty states** — the current app is smoke-testable and usable by a technical tester, but a first-time user still needs clearer guidance.
10. **Export/import of corrected metadata** — corrected Library metadata is in the app DB only; metadata export is documented as missing, but there is no sidecar export or migration story for durable file-first metadata portability.

## Practical review script

Use this script when deciding what to build next:

1. Install/enable Library on a Nextcloud 34 sandbox.
2. Add one small root with 20-100 mixed real files.
3. Run a scan and wait for completion.
4. Browse the catalogue without touching settings.
5. Find one PDF, one EPUB and one CBZ if available.
6. Open each with **Read** and **Show in Files**.
7. Correct metadata on three items.
8. Add one Nextcloud tag and one comment.
9. Rescan.
10. Confirm edits survived and diagnostics are understandable.
11. Try to remove or temporarily disable a root.
12. Try to answer: “what should I fix next if I had 5,000 files?”

If step 11 feels unsafe or unclear, continue root lifecycle polish. If step 12 feels blocked, prioritize DB-backed browsing/querying and scan lifecycle controls.
