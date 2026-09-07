# Library Roadmap

Status: active planning roadmap  
Last updated: 2026-09-06
Companion documents: [Product concept](product-concept.md), [User and admin guide](user-guide.md), [UX concept and user stories](ux-concept.md), [v0.1 technical specification draft](v0.1-technical-spec.md), [Metadata storage and Nextcloud integration](metadata-storage.md), [Reader handoff spike](reader-handoff-spike.md), [Alice reader compatibility notes](alice-reader-compatibility.md), [Alice scale pilot notes](alice-scale-pilot.md)

## Roadmap stance

Library should become useful in small, vertical slices. Each phase should leave the app installable and smoke-testable on a real Nextcloud instance.

The roadmap is intentionally conservative:

- Nextcloud Files remains the source of truth.
- Library starts as an index/catalogue, not a renderer.
- Per-user behaviour comes before shared/global library management.
- External metadata, OCR, OPDS and device sync are later additions, not prerequisites.
- Nextcloud system tags are the preferred cross-archive classification layer for interests, projects, collections and statuses.

## Current baseline

What exists now:

- Minimal conventional Nextcloud app skeleton.
- App ID: `library`.
- Navigation entry and bootstrap page.
- Default reader handoff provider that generates `/f/{fileId}` links.
- User-specific `library_roots` and `library_files` tables.
- `library_items` table for one editable publication item per indexed file.
- Bootstrap UI for saving an initial root path and manually scanning enabled roots.
- Scanner that indexes PDF, EPUB, CBZ and standalone OPF files by stable Nextcloud file ID, then creates/refreshes inferred catalogue items.
- Scan-job progress/history table and UI summary for the latest queued background scan plus recent scan history: auto-refreshing scan progress and live-ish scan progress, status, root count, indexed file count, error count and duration.
- First local metadata extraction for EPUB package OPF, standalone OPF files, filename/folder patterns and basic PDF info dictionaries including UTF-16 BOM encoded PDF Info strings, PDF hex Info strings, PDF literal octal escapes, nested PDF literal parentheses, PDF Subject-as-subtitle and normalized PDF CreationDate/ModDate values.
- Indexed-file list showing root, cached path, MIME type/extension and scan status.
- Publication catalogue gallery with preview/CBZ/placeholder covers and compact cover-first cards on mobile and desktop; the default card surface is cover, title, Read and Details, with secondary metadata/actions behind a Details disclosure.
- Bounded catalogue pagination with page-size controls, smoke-tested through a 1000-real-file / 16.52 GiB staged Alice scale pilot after the planned 10 → 100 → 1000 → 10000 guardrail path.
- Database-backed catalogue search/filter controls for title/author text, exact creator field, publication/series/periodical title, publication year, publication type, file format, scan status, exact Nextcloud tag and root-derived shelf, plus active filter chips.
- Read-only Nextcloud system tag exposure on publication item cards for cross-archive interests/projects/collections.
- Dedicated item details page where the details page owns metadata, tag and comment editing while catalogue cards stay browse-only.
- Minimal Nextcloud system tag assignment/removal from item details for visible/assignable tags.
- Read-only recent Nextcloud file comments on publication item cards and item details as file-level notes/discussion.
- Minimal Nextcloud file comment writing from item details.
- Per-file metadata extraction error isolation with visible indexed-file diagnostics for corrupt EPUB/CBZ/OPF inputs.
- Metadata storage decision documented: Library DB is canonical for publication metadata; Nextcloud system tags/comments are surfaced as file-level integration metadata.
- metadata/tag/comment separation smoke is checked in: Nextcloud tag/comment actions do not mutate Library publication metadata.
- Scan/admin controls are separated into the personal settings surface at `/settings/user/library`; the app page is catalogue-first with absolute Nextcloud URLs and a Vue/Vite catalogue mounted in the conventional scrollable `#app-content` shell.
- Concept, technical-spec and reader-handoff notes.
- Lightweight repository tests protecting the current skeleton, docs contracts, roots/file-index slice and catalogue-item slice.

This is now a development catalogue spine with a first usable shelf/gallery presentation, not a polished media server. Phase 3.1 adds preview-backed covers through Nextcloud's preview pipeline and CBZ first-image covers while keeping placeholders for unsupported files. Scanner hardening now records per-file metadata errors without aborting the rest of the root scan; browsing now includes Show in Files links, sort modes, scan status filtering, pagination, missing-file status, cover placeholder diagnostics and a real-world-ish metadata fixture matrix.

## Phase 0 — Concept and spike baseline

Goal: make the product boundary explicit before adding catalogue code.

Status: mostly done.

Deliverables:

- Product concept captured in a short contributor-facing document.
- v0.1 scope and non-goals documented.
- Reader handoff mechanism tested against Alice Nextcloud.
- README links to the active documentation spine.
- Local tests pass.

Exit criteria:

- A new contributor can explain what Library owns and what it deliberately delegates.
- Reader integration has a low-coupling default path.
- The next implementation slice does not require deciding whether Library is a renderer, importer or media server.

## Phase 1 — Roots and operational file index

Goal: let a user choose Library roots and produce a durable index of supported publication files.

Status: first development slice landed and smoke-tested on Alice. Further hardening remains before v0.1 release quality.

User outcome:

- The user can configure one or more folders as Library roots.
- The first screen may start with one path for simplicity, but the data model and scanner are multi-root from day one.
- Roots are user-specific: each user owns their own configured root list and scan state.
- A manual scan discovers supported files under enabled roots.
- The app shows a basic list of discovered items with file name, path, format, root and status.
- Moving/renaming a file should preserve identity when the Nextcloud file ID is unchanged.

Backend slices:

1. Add database migrations for `library_roots` and `library_files`; `library_roots` must include `user_id`, `path`, optional `label`, `enabled` and timestamps.
2. Add per-user root storage service that returns a list of roots, not a singleton.
3. Add a settings/root-management controller endpoint; the first UI can restrict itself to one configured path while still calling list-based backend APIs.
4. Add a scanner service that recursively walks every enabled root for the current user.
5. Detect initial supported formats: EPUB, PDF, CBZ; leave CBR behind a documented dependency decision.
6. Store file ID, root ID, storage ID if needed, cached path, MIME type, extension, etag/mtime, size, scan status and scan timestamps.
7. Deduplicate overlapping root discoveries by file ID.
8. Mark missing files conservatively instead of deleting index rows immediately.

Frontend slices:

1. Add a simple roots/settings page.
2. Add a manual scan action.
3. Add a file-index list view.
4. Show scan status and basic errors.

Tests/smokes:

- Migration/schema tests or install smoke.
- Scanner unit tests with fake file nodes where possible.
- Alice integration smoke with a small fixture folder.
- Verify permissions: only current-user accessible roots/files appear.

Exit criteria:

- On Alice, Library can scan `/LibrarySpike` or a similar folder and list at least PDF, EPUB and CBZ files by stable file ID.
- Rescanning does not duplicate unchanged files.
- Deleting or moving a fixture produces a safe status change rather than metadata loss.

## Phase 2 — Catalogue item model and metadata precedence

Goal: turn indexed files into editable publication catalogue items.

Status: first development slice landed and smoke-tested on Alice. It currently uses filename inference only; richer embedded metadata extraction remains Phase 3.

User outcome:

- The user sees publication-like records, not only raw files.
- The user can correct title, publication type and important metadata manually.
- Manual edits survive rescans.

Backend slices:

1. Add `library_items` table keyed to `library_files` for v0.1 one-file-one-item behaviour.
2. Add explicit publication type enum: book, comic, magazine, journal, manual, catalogue, other.
3. Add metadata-source/provenance fields for user edits, embedded metadata and filename inference.
4. Implement update rules where user-edited fields are not overwritten by rescans.
5. Add item read/update controllers.
6. Add filename/folder inference for simple cases such as series issue numbers and year folders.

Frontend slices:

1. Add item detail view.
2. Add metadata edit form.
3. Add publication type selector.
4. Show source file and cached path diagnostics.

Tests/smokes:

- Metadata precedence tests.
- Manual edit survives rescan test.
- PDF does not default to Book solely because it is PDF.
- Alice smoke: edit a discovered PDF into Magazine and verify it remains Magazine after rescan.

Exit criteria:

- Library can present and manually correct a small mixed folder as a publication catalogue.
- Rescans improve empty metadata but do not destroy user corrections.

## Phase 2.5 — Nextcloud-native tags and comments

Goal: make Library a better Nextcloud citizen before adding deeper extractor-specific metadata.

Status: first tag/comment exposure, minimal tag assignment/removal and minimal comment writing slices landed and smoke-tested on Alice.

User outcome:

- The user can see the system-wide Nextcloud tags already assigned to each source file.
- Tags can tie publications into interests, projects and collections such as photography, simiono, manuals or music.
- Library keeps structured publication metadata separate from cross-archive tags.

Backend/frontend slices:

1. Add a small service that reads visible Nextcloud system tags for the primary file IDs of listed Library items. **Landed.**
2. Show those tags on the catalogue item cards/detail area. **Landed for item cards.**
3. Keep tag editing minimal until richer permission behaviour is needed. **Minimal add/remove tag flows landed.**
4. Add comments as a later adjacent slice after tags. **Read-only recent comments and minimal add-comment flow landed for item cards.**

Tests/smokes:

- Contract tests for `ISystemTagManager`/`ISystemTagObjectMapper` use.
- Template test proving item cards expose `nextcloudTags`.
- Contract tests for Nextcloud comment read/write API use.
- Alice smoke: assign a `photography` system tag to a fixture file and verify Library displays it.
- Alice smoke: post a file-level comment through Library and verify it appears through both Library and Nextcloud's comment API.

Exit criteria:

- Existing Nextcloud file tags are visible in Library without duplicating them into Library-specific tag tables.
- Existing Nextcloud file comments are visible as file-level notes/discussion.
- Library can add a simple file-level Nextcloud comment without treating it as canonical publication metadata.

## Phase 2.6 — Details-owned editing workbench

Goal: keep the catalogue fast to scan while giving each publication a proper workbench for metadata, Nextcloud integration metadata and file diagnostics.

Status: landed for the current v0.1 development baseline. The dedicated detail route, metadata edit form, Nextcloud tag add/remove, comment add flows, scanner-candidate provenance, reset-to-scanner actions, conflict labels and summary counts have landed and are smoke-tested.

User outcome:

- The catalogue cards are browse-only and stay visually light.
- The details page owns metadata, tag and comment editing.
- The detail workbench layout separates publication editing from Nextcloud/file/provenance diagnostics.
- Every details-page form keeps CSRF protection and returns to the detail page after save.

Backend/frontend slices:

1. Add dedicated item detail route with publication/file/provenance/Nextcloud sections. **Landed.**
2. Move Library publication metadata editing to details. **Landed and edit/restore smoked.**
3. Move Nextcloud tag editing to details. **Landed and add/remove smoked.**
4. Move Nextcloud comment writing to details. **Landed and add/delete smoked.**
5. Simplify catalogue cards to read-only browse cards. **Landed and browser-smoked with zero catalogue POST forms.**
6. Add a scannable two-column detail workbench layout with explicit labelled primary/secondary sections. **Landed.**
7. Add field-level scanner provenance, reset-to-scanner actions, conflict labels and correction summary counts. **Landed.**
8. Later: add section-level affordances such as collapse, recent activity, hard validation and richer review queues only after real usage shows the page is too busy.

Tests/smokes:

- Static contract proving catalogue cards have no POST/request-token fields.
- HTTP smoke proving details page contains edit, tag and comment forms with `returnTo=details`.
- Browser smoke proving catalogue remains browse-only and detail workbench has labelled sections and no unlabelled controls.

Exit criteria:

- A user can browse from the catalogue without inline form clutter.
- All mutating item actions are available on the detail page and return there after completion.
- The details page is readable enough to become the durable home for future richer metadata work.

## Phase 2.75 — Presentation, shelves and catalogue finding

Goal: answer the first real product UX questions before adding deeper extraction: what does browsing feel like, where is metadata visible, and how does a mixed archive become findable?

Status: first UX concept and implementation slice landed. The current implementation uses placeholder/preview covers, root-derived shelves rather than virtual collections, and server-side filters presented through a Vue catalogue.

User outcome:

- The user sees a gallery of publication cards instead of only a raw table.
- High-signal browsing starts with compact cover-first cards: cover, title, Read and Details.
- Secondary metadata, tags, source actions and editing are available behind card Details disclosure and on the dedicated details page.
- Search and filters can narrow by title/author text, semantic publication type, file format, exact Nextcloud tag and shelf.

Backend/frontend slices:

1. Add a checked-in UX concept/user-story document for gallery, metadata visibility, shelves and search/filtering. **Landed.**
2. Derive a v0.1 Shelf from the configured Library root label/path. **Landed.**
3. Render a responsive cover gallery with stable placeholder covers. **Landed.**
4. Move noisy metadata/edit/tag/comment controls out of catalogue cards and onto dedicated details pages, leaving compact cards cover-first on all widths. **Landed through Phase 2.6/2.75.**
5. Add GET-based filters for query, type, tag and shelf. **Landed; extended with file format filter.**
6. Replace placeholders with extracted/generated cover images. **Deferred to Phase 3 cover work.**
7. Add virtual/user-defined shelves or collections without changing file ownership. **Deferred.**

Exit criteria:

- A user can explain whether Library is a shelf/gallery product, where metadata appears, and how to find items in a mixed publication archive.
- The implementation keeps shelves as catalogue presentation, not a new storage location.
- Filter by PDF, EPUB, CBZ or OPF through the file format filter without changing the semantic publication type.

## Phase 3 — Format metadata and cover extraction

Goal: populate catalogue items with useful initial metadata and covers without external services.

### Phase 3.1 — Preview-backed covers

Status: first slice landed. Catalogue cards now request item covers from a Library route that resolves the owned catalogue item to its Nextcloud file and asks the public Nextcloud preview manager for a cover-sized preview. The route also does first-image cover extraction for CBZ archives when the generic preview path is unavailable. Every cover response now includes `X-Library-Cover-Status` and `X-Library-Cover-Reason` diagnostics for preview-backed, CBZ first-image and placeholder outcomes. Unsupported files still return the existing stable placeholder artwork, so the gallery remains usable while deeper EPUB/CBZ/PDF cover extraction evolves.

Status: first extraction slices landed and smoke-tested on Alice. EPUB package OPF, standalone OPF, same-basename OPF sidecars, folder-level `metadata.opf` sidecars, basic PDF info fields, nested PDF literal parentheses, PDF Subject-as-subtitle, normalized PDF CreationDate/ModDate values, CBZ ComicInfo.xml metadata and CBZ first-image covers now populate catalogue item candidates/presentation. Sidecar OPFs are suppressed as separate catalogue items when paired with primary publication files, and stale sidecar cleanup removes scanner-created duplicate OPF items on rescan. User-edited sidecar cleanup policy is conservative: manually edited OPF sidecar items stay visible as standalone records until a deliberate merge/migration workflow exists. PDF Creator/Producer/Keywords are deliberately not promoted into canonical publication metadata until a reviewable keyword/provenance model exists. Richer real-world PDF/CBZ handling remains open.

User outcome:

- EPUBs can show embedded title/creator where available.
- CBZs can show ComicInfo.xml metadata and first-image covers where available. **First-image cover extraction landed.**
- PDFs can show basic document metadata and a preview-backed cover where practical.
- Items without cover still render as usable placeholders.

Backend slices:

1. Add metadata adapter interface. **First `PublicationMetadataService` seam landed; it should still split into narrower adapters as extraction grows.**
2. Implement EPUB metadata extraction from package metadata. **First OPF title/creator/language/publisher/date slice landed.**
3. Implement standalone OPF metadata extraction for OPF files/sidecar experiments. **First OPF title/creator/language/publisher/date slice landed for indexed `.opf` files.**
4. Prefer OPF sidecars for PDF/EPUB catalogue defaults. **Same-basename `.opf` wins over folder-level `metadata.opf`; both override embedded/PDF candidates while user edits still win.**
5. Suppress OPF sidecars as separate catalogue items when they accompany primary PDF/EPUB/CBZ files. **Landed for same-basename `.opf` and folder-level `metadata.opf`; standalone OPF still indexes.**
6. Implement CBZ ZIP inspection, first-image detection and optional `ComicInfo.xml` parsing. **First CBZ ComicInfo metadata slice landed for title, series, creators, publisher and date.**
7. Add robust filename/folder parsing for magazines and comics that lack OPF/ComicInfo metadata. **First conservative patterns landed: dated magazine filenames, year+issue filenames, folder serial/year month files and numbered comic CBZ names.**
8. Decide whether CBR is included in v0.1 based on available extraction dependencies in the Nextcloud app environment.
9. Implement PDF basic metadata extraction using a low-risk dependency path or Nextcloud capabilities. **First `/Title` and `/Author` info dictionary slice landed; PDF still stays publication type `other`.**
10. Add cover cache references without duplicating original media.
11. Add error isolation: one corrupt file must not abort the whole scan. **First per-file metadata error isolation landed with `metadata_error` scan status and visible `scanError` diagnostics.**

Frontend slices:

1. Add cover component with placeholder state.
2. Add cover grid for all items.
3. Add metadata-source indicators in detail/edit views.

Tests/smokes:

- Fixture-based extraction tests for EPUB, PDF and CBZ.
- Alice smoke with tiny EPUB/PDF/OPF fixtures for title/creator/source mapping.
- Alice smoke with PDF + same-basename `.opf` and PDF + folder-level `metadata.opf` sidecar precedence fixtures.
- Alice smoke proving paired sidecar OPFs do not create catalogue rows while an orphan OPF still does.
- Corrupt/unsupported archive test.

Exit criteria:

- A folder of mixed fixtures produces visible catalogue cards with sensible titles and covers/placeholders.
- Extraction failures are visible but non-fatal.

## Phase 4 — Browsing, grouping and search

Goal: make the catalogue useful for actual collection browsing.

User outcome:

- The user can browse all items as a cover grid/list.
- The user can search titles, creators, publication names and tags.
- The user can browse by author/creator, series, publication and year.
- Magazine-like sequences can be seen as publication/year/issue groups.

Backend slices:

1. Add list/search endpoints with pagination.
2. Add filters for type, format, root and scan status. **GET filters landed for type, file format, shelf/root, Nextcloud tag and scan status.**
3. Add normalized or semi-normalized creator/series/publication structures only when needed by the UI.
4. Add sort modes: recently added, title, publication date, series position.
5. Keep query results permission-scoped to current user.

Frontend slices:

1. Build main Library grid/list view.
2. Add search input.
3. Add type tabs/filters.
4. Add grouping pages for authors/series/publications/years.
5. Add empty/error states.

Tests/smokes:

- Query/filter tests with mixed fixtures.
- Permission-scope tests.
- Browser smoke of grid/detail/open-file flow.

Exit criteria:

- The catalogue is useful enough to browse a real small collection without looking at the Files app tree.
- Search and filters remain fast enough for a normal personal library slice.

## Phase 5 — Reader handoff and Files integration polish

Goal: make opening and locating source files reliable and unsurprising.

User outcome:

- Every item has Read/Open and Show in Files actions.
- Compatible installed viewers open inline through Nextcloud.
- If inline opening is unavailable, Library gives a clear fallback.

Backend/frontend slices:

1. Keep `/f/{fileId}` as the default provider.
2. Add capability labels such as “Open in Nextcloud viewer”.
3. Add direct Files location action if practical.
4. Add fallback Download source action. **Landed as a WebDAV source-file link.**
5. Optionally add an explicit EPUB Viewer provider only if `/f/{fileId}` proves insufficient.

Tests/smokes:

- PDF, EPUB and CBZ handoff smoke on Alice.
- Missing-file fallback test.
- Unsupported/no-reader messaging test.

Exit criteria:

- Library can confidently delegate reading without private route coupling.
- The user can always get back to the original file.

## Phase 6 — v0.1 release hardening

Goal: package a small but coherent catalogue release.

Deliverables:

- Installation and development docs.
- Upgrade/migration smoke.
- Basic accessibility and responsive UI pass.
- Translation skeleton if aligned with Nextcloud app expectations.
- App signing/release packaging research.
- Screenshot/demo fixture set.
- Known limitations documented honestly.

Exit criteria:

- Fresh install, enable, configure roots, scan, browse, edit metadata, open file and uninstall behaviours are all tested.
- Uninstalling/removing Library leaves original files intact.
- v0.1 can be shared as a developer/early-tester release even if not yet App Store ready.

## Post-v0.1 candidates

### 0.2 — Organization

- Better metadata editor.
- Creators/series/publications/tags normalized relationships.
- Better magazine publication/year/issue handling.
- Collections.
- Incremental rescanning triggered by file events/background jobs.
- Duplicate hints.

### 0.3 — Reading ecosystem

- Reader-provider abstraction beyond the default file route.
- Reading progress only where reader apps expose stable APIs.
- Continue Reading.
- OPDS.
- KOReader or device handoff experiments.

### 0.4 — Metadata enrichment

- Optional ISBN/book metadata providers.
- Optional comic metadata providers.
- Improved cover discovery.
- Review queue for proposed metadata changes.

### 0.5 — Document intelligence

- Optional OCR.
- Full-text indexing.
- Magazine table-of-contents extraction.
- Article-level indexing.
- Page-level search.

## Prioritized v0.1 gap stack after the 1k real-corpus pilot

The 1k real-corpus pilot moved the biggest uncertainty from “can Library browse a large-ish mixed shelf?” to “can Library keep improving messy metadata without making the scanner unsafe or unmaintainable?” Real-corpus filename hardening landed after the pilot: staging prefixes and archive suffixes are stripped, conservative title/creator filename patterns are promoted, and volume labels such as `Volume 71` are kept as issue context instead of creators.

Current priority order:

1. **P0 — Keep metadata quality work safe: split the extractor seam.** `PublicationMetadataService` has become the main hotspot because it owns OPF, EPUB, PDF, CBZ and filename parsing. Before adding more real-corpus rules, split it into narrower extractor adapters behind the existing service façade while preserving behaviour and tests. This refactor is now complete for the current extractor families: filename/folder parsing lives in `FilenameMetadataExtractor`, PDF Info parsing/decoding lives in `PdfInfoMetadataExtractor`, EPUB package/standalone OPF parsing lives in `OpfEpubMetadataExtractor`, and CBZ ComicInfo parsing lives in `CbzComicInfoMetadataExtractor`.
2. **P1 — Metadata correction workflow.** Details editing works, but one user edit still protects the whole item from rescan overwrite. The P1 field-level provenance foundation is now started: scanner field sources and scanner candidate values are stored as JSON maps and displayed on the details page while preserving item-level `user_edited` protection. Manual edits preserve stored scanner candidates. Rescans refresh scanner candidates for user-edited items without overwriting user-edited fields. The single-field reset-to-scanner path has landed so individual fields can be restored from stored scanner candidates without dropping the whole user-edited item. Whole-item reset to scanner candidates has landed for applying all stored candidates at once while keeping the item row user-edited. Non-blocking edit guidance has landed for date, language and creator fields; validation guidance has landed as hints, but hard validation remains future work. Field-level conflict visibility has landed as a details-table label when current values differ from scanner candidates. Metadata correction summary has landed as read-only counts for scanner candidates and fields differing from scanner. Conflict review remains future work.
3. **P2 — Discovery by publication structure.** Series and periodicals UX is the next common-use priority. Search/filter/pagination are implemented, and the catalogue now supports filtering and sorting by series or periodical title through the existing publication field. A top series and periodicals panel now lists item counts and links into the filtered catalogue, with empty-state guidance when no series metadata exists. The publication year filter has landed as read-only discovery for dated books, magazines, journals and comics. Creator filtering has landed as exact full-field matching for read-only discovery; creator identity splitting remains future work. Active filter chips have landed as read-only navigation so users can remove one filter without clearing the whole search. Compact cover-first cards have landed for mobile and desktop so browsing prioritizes covers and keeps secondary metadata/actions behind a touch disclosure. The next discovery layer is creator, series, publication and year pages plus saved views or smart collections.
4. **P3 — Scan lifecycle repair controls.** Queued per-root scans and progress/history exist. Missing pieces are retry metadata errors, check missing files, cancellation, scheduled/resumable scans and completion/failure notifications.
5. **P4 — Cover quality path.** Preview/CBZ/placeholder covers are good enough for browsing, and first EPUB cover extraction from package manifests has landed. Missing pieces are app-owned cache, refresh controls, manual cover override and user-friendly preview-failure explanations.
6. **P5 — Metadata portability.** Corrected metadata export exists, **Metadata import preview** landed, and the first apply flow applies matched corrected metadata to existing Library items. OPF/JSON sidecar write-back and fresh-install restore remain future work so corrections become fully File-First durable.
7. **P6 — Root/onboarding/shared-library polish.** Root lifecycle works, but release polish needs stronger destructive-action confirmation, first-run guidance, recovery copy and eventually admin-managed shared-root provisioning.

Immediate implementation stance: use the cleaner extractor boundary to support common browsing UX first. Series and periodicals should get practical catalogue affordances before more import/export work: filters, grouping, issue/date context and eventually dedicated publication pages.

## Combined missing operational processes, 2026-09-06

This section combines the role-facing gaps from the [User and admin guide](user-guide.md) with the latest product review questions: deletion/update processes, Library removal, cover rescans, folder/root scoped rescans and whether cover extraction remains optional.

### Current answers

- **Item metadata update:** present. The details page owns publication metadata editing and user-edited items are preserved across rescans.
- **Root add/update:** first lifecycle slice landed. Users can save roots, edit label/path, enable/disable, delete roots and scan one selected root from settings.
- **Deletion:** first item-forget slice landed. Root deletion removes Library catalogue/index data for that root without deleting source files; missing files are marked `missing` on rescan; the details page can forget missing item rows. Source-file deletion remains deliberately deferred to Nextcloud Files.
- **Library removal/uninstall:** first guide/export slice landed. Original Nextcloud files remain canonical, disable/remove commands and consequences are documented, and corrected user-edited metadata can be downloaded as side-effect-free JSON before removal. Restore/import still requires DB backup or future import work.
- **Folder/root-based rescan:** partly present. The scan route can queue all enabled roots or one selected root for the current user; arbitrary folder/subtree scans are still absent.
- **Cover rescan:** not present as a separate process because covers are generated on request through Nextcloud preview/CBZ/placeholder responses; there is no app-owned cover cache yet.
- **Cover extraction optionality:** present by behaviour. Cover failure must not block catalogue indexing or browsing; placeholders remain the safe fallback.

### Phase 3.5 — Operational lifecycle and scoped scans

Goal: make Library safe to administer before expanding metadata enrichment or reader features.

User/admin outcome:

- A user can manage roots without direct DB or test-harness help.
- A user can scan one root/folder when they change a known part of the archive instead of scanning everything.
- A maintainer can remove stale/missing catalogue entries deliberately without risking source files.
- An admin can explain what happens when Library is disabled, uninstalled or removed.
- Cover extraction remains optional, but failed/stale covers have an understandable refresh path once a cache exists.

Recommended vertical slices:

1. **Root lifecycle UI and routes.** First slice landed: per-root edit label/path, enable/disable and delete actions in `/settings/user/library`; source files are untouched and settings copy explains that delete affects Library catalogue/index data, not Nextcloud Files. Remaining polish: stronger confirmation, validation and clearer recovery story.
2. **Per-root scan.** First slice landed: the settings page can queue a scan for one root ID as well as “scan all enabled roots”; scan job rows track scope (`all` vs `root`) and render scope in progress/history.
3. **Deletion/forget policy.** First slice landed: missing items can be forgotten from the details page, and normal source-file deletion remains deferred to Nextcloud Files.
4. **Root removal policy.** For root deletion, choose one conservative v0.1 behaviour and document it in the UI: either remove root plus scanner-created index/items, or require disabling first and keep delete behind a stronger confirmation. Avoid deleting source files from Library.
5. **Library removal/uninstall guide.** First slice landed: exact admin commands and data implications are documented; app disable/remove leaves original files, but app DB metadata is lost unless the database is backed up or metadata is exported.
6. **Scoped folder/subtree rescan.** After per-root scan lands, consider optional folder-path scan under a configured root. This should validate the path is inside a user-owned Library root and should not mark unrelated root files missing.
7. **Metadata retry filters.** Add “retry metadata errors” and “check missing files” flows once scoped scanning exists, so repair jobs do not require a full library scan.
8. **Cover lifecycle only after cache.** Keep current on-demand preview/CBZ/placeholder covers as the v0.1 baseline. Add cover cache, per-item cover refresh, per-root cover refresh and manual cover override only when real usage proves cover quality is a blocker.
9. **DB-backed catalogue query path.** First slice landed: text/type/format/tag/shelf/status filtering, sort modes, counts, facets and page slicing now run through database-backed catalogue queries instead of loading the full catalogue into app-layer arrays.
10. **Metadata portability.** Metadata export foundation.** First slice landed: user-edited catalogue rows can be downloaded as side-effect-free JSON with stable file identity, root/shelf labels, publication metadata and provenance. Import/write-back to OPF or JSON sidecars remains future work.

### Immediate next implementation slice

Recommended next slice: **release-facing metadata repair and review polish**.

Minimum first cut:

1. Expand PDF/EPUB/OPF/CBZ fixture coverage with real Alice samples that currently produce weak, missing or wrong metadata. First PDF hardening landed for PDF hex Info strings and PDF literal octal escapes. Follow-up PDF hardening maps `/Subject` to Library subtitle, normalizes `/CreationDate`/`/ModDate` into `publicationDate`, and walks nested PDF literal parentheses while leaving Creator/Producer/Keywords out of canonical publication metadata.
2. Keep user-edited metadata precedence and sidecar OPF cleanup policy intact while improving scanner candidates.
3. Preserve the database-backed catalogue query path under text/type/format/tag/shelf/status filters during every smoke.
4. Smoke on Alice with generated scale fixtures and at least one real staged sample.
5. Keep metadata export/import write-back as a later portability slice; the current export route is read-only.

Non-goals for this slice:

- deleting source files from Nextcloud Files;
- cover cache or cover refresh;
- internet metadata enrichment;
- OCR/full-text search;
- shared global library administration.

The root/update/delete/scoped-rescan, missing-item forget, corrected-metadata export/import-preview, DB-backed catalogue-query and compact catalogue boundaries are now in place. The next risk is whether real users can repair, review and trust messy metadata at collection scale without a bulk/review workflow, scan repair controls or better onboarding.
