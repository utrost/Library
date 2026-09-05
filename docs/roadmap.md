# Library Roadmap

Status: active planning roadmap  
Last updated: 2026-09-04  
Companion documents: [Product concept](product-concept.md), [UX concept and user stories](ux-concept.md), [v0.1 technical specification draft](v0.1-technical-spec.md), [Metadata storage and Nextcloud integration](metadata-storage.md), [Reader handoff spike](reader-handoff-spike.md), [Alice reader compatibility notes](alice-reader-compatibility.md), [Alice scale pilot notes](alice-scale-pilot.md)

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
- Scan-job progress/history table and UI summary for the latest queued background scan: live-ish scan progress, status, root count, indexed file count, error count and duration.
- First local metadata extraction for EPUB package OPF, standalone OPF files, filename/folder patterns and basic PDF info dictionaries including UTF-16 BOM encoded PDF Info strings.
- Indexed-file list showing root, cached path, MIME type/extension and scan status.
- Publication catalogue gallery with placeholder covers, card-level title/creator/type/shelf/tag metadata, direct Read links and collapsible detail/edit sections.
- Bounded catalogue pagination with page-size controls, smoke-tested through a 1000-real-file / 16.52 GiB staged Alice scale pilot after the planned 10 → 100 → 1000 → 10000 guardrail path.
- Server-side catalogue search/filter controls for title/author text, publication type, file format filter, scan status, exact Nextcloud tag and root-derived shelf.
- Read-only Nextcloud system tag exposure on publication item cards for cross-archive interests/projects/collections.
- Minimal Nextcloud system tag assignment/removal from Library item cards for visible/assignable tags.
- Read-only recent Nextcloud file comments on publication item cards as file-level notes/discussion.
- Minimal Nextcloud file comment writing from Library item cards.
- Per-file metadata extraction error isolation with visible indexed-file diagnostics for corrupt EPUB/CBZ/OPF inputs.
- Metadata storage decision documented: Library DB is canonical for publication metadata; Nextcloud system tags/comments are surfaced as file-level integration metadata.
- Alice Nextcloud sandbox compatibility evidence for PDF, EPUB and CBZ inline opening.
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

## Phase 2.75 — Presentation, shelves and catalogue finding

Goal: answer the first real product UX questions before adding deeper extraction: what does browsing feel like, where is metadata visible, and how does a mixed archive become findable?

Status: first UX concept and implementation slice landed. The current implementation uses placeholder covers rather than extracted images, root-derived shelves rather than virtual collections, and simple server-side filters rather than a rich Vue client.

User outcome:

- The user sees a gallery of publication cards instead of only a raw table.
- High-signal metadata is visible on each card: title, creator/author, type, shelf and Nextcloud tags.
- Secondary metadata and editing are available in a collapsible detail panel.
- Search and filters can narrow by title/author text, semantic publication type, file format, exact Nextcloud tag and shelf.

Backend/frontend slices:

1. Add a checked-in UX concept/user-story document for gallery, metadata visibility, shelves and search/filtering. **Landed.**
2. Derive a v0.1 Shelf from the configured Library root label/path. **Landed.**
3. Render a responsive cover gallery with stable placeholder covers. **Landed.**
4. Move noisy metadata/edit/tag/comment controls behind per-card details. **Landed.**
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

Status: first slice landed. Catalogue cards now request item covers from a Library route that resolves the owned catalogue item to its Nextcloud file and asks the public Nextcloud preview manager for a cover-sized preview. The route also does first-image cover extraction for CBZ archives when the generic preview path is unavailable. Unsupported files still return the existing stable placeholder artwork, so the gallery remains usable while deeper EPUB/CBZ/PDF cover extraction evolves.

Status: first extraction slices landed and smoke-tested on Alice. EPUB package OPF, standalone OPF, same-basename OPF sidecars, folder-level `metadata.opf` sidecars, basic PDF info fields, CBZ ComicInfo.xml metadata and CBZ first-image covers now populate catalogue item candidates/presentation. Sidecar OPFs are suppressed as separate catalogue items when paired with primary publication files, and stale sidecar cleanup removes scanner-created duplicate OPF items on rescan. User-edited sidecar cleanup policy and richer real-world PDF/CBZ handling remain open.

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
4. Add fallback download/open externally action.
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

## Immediate next implementation slice

Recommended next slice after scanner-side metadata error isolation:

1. Harden cover-route error diagnostics and unsupported preview visibility now that one corrupt PDF/EPUB/CBZ/OPF no longer aborts a whole scan or catalogue page.
2. Keep Library structured fields separate: assigning or removing `photography` or `project-library` Nextcloud tags must not alter publication form/title/creator fields.
3. Smoke it against Alice with deliberately unsupported preview/cover fixtures and verify healthy catalogue items still render.
4. Document the visible failure state before adding richer review queues or Library-native tag tables.

This slice deliberately stops before Library-native tag tables, Internet enrichment and OCR. It should make the existing cover/preview path safer and more transparent against real-collection messiness.
