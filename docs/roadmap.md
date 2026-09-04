# Library Roadmap

Status: active planning roadmap  
Last updated: 2026-09-04  
Companion documents: [Product concept](product-concept.md), [v0.1 technical specification draft](v0.1-technical-spec.md), [Metadata storage and Nextcloud integration](metadata-storage.md), [Reader handoff spike](reader-handoff-spike.md), [Alice reader compatibility notes](alice-reader-compatibility.md)

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
- Scanner that indexes PDF, EPUB and CBZ files by stable Nextcloud file ID, then creates/refreshes inferred catalogue items.
- Indexed-file list showing root, cached path, MIME type/extension and scan status.
- Publication catalogue list with basic metadata edit forms and user-edit preservation across rescans.
- Read-only Nextcloud system tag exposure on publication item cards for cross-archive interests/projects/collections.
- Metadata storage decision documented: Library DB is canonical for publication metadata; Nextcloud system tags/comments are surfaced as file-level integration metadata.
- Alice Nextcloud sandbox compatibility evidence for PDF, EPUB and CBZ inline opening.
- Concept, technical-spec and reader-handoff notes.
- Lightweight repository tests protecting the current skeleton, docs contracts, roots/file-index slice and catalogue-item slice.

This is now a development catalogue spine, not a polished usable catalogue. The next milestone is either comments/tag editing, a cleaner UI around the catalogue list or deeper local metadata/covers.

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

Status: first read-only tag exposure slice landed and smoke-tested on Alice.

User outcome:

- The user can see the system-wide Nextcloud tags already assigned to each source file.
- Tags can tie publications into interests, projects and collections such as photography, simiono, manuals or music.
- Library keeps structured publication metadata separate from cross-archive tags.

Backend/frontend slices:

1. Add a small service that reads visible Nextcloud system tags for the primary file IDs of listed Library items. **Landed.**
2. Show those tags on the catalogue item cards/detail area. **Landed for item cards.**
3. Keep tag editing deferred until the read path and permission behaviour are smoke-tested.
4. Add comments as a later adjacent slice after tags.

Tests/smokes:

- Contract tests for `ISystemTagManager`/`ISystemTagObjectMapper` use.
- Template test proving item cards expose `nextcloudTags`.
- Alice smoke: assign a `photography` system tag to a fixture file and verify Library displays it.

Exit criteria:

- Existing Nextcloud file tags are visible in Library without duplicating them into Library-specific tag tables.

## Phase 3 — Format metadata and cover extraction

Goal: populate catalogue items with useful initial metadata and covers without external services.

User outcome:

- EPUBs can show embedded title/creator where available.
- CBZs can show ComicInfo metadata and first-image covers where available.
- PDFs can show basic document metadata and a preview-backed cover where practical.
- Items without cover still render as usable placeholders.

Backend slices:

1. Add metadata adapter interface.
2. Implement EPUB metadata extraction from package metadata.
3. Implement CBZ ZIP inspection, first-image detection and optional `ComicInfo.xml` parsing.
4. Decide whether CBR is included in v0.1 based on available extraction dependencies in the Nextcloud app environment.
5. Implement PDF basic metadata extraction using a low-risk dependency path or Nextcloud capabilities.
6. Add cover cache references without duplicating original media.
7. Add error isolation: one corrupt file must not abort the whole scan.

Frontend slices:

1. Add cover component with placeholder state.
2. Add cover grid for all items.
3. Add metadata-source indicators in detail/edit views.

Tests/smokes:

- Fixture-based extraction tests for EPUB, PDF and CBZ.
- Corrupt/unsupported archive test.
- Alice smoke with tiny fixtures.

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
2. Add filters for type, format, root and scan status.
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

Recommended next slice after read-only Nextcloud tag exposure:

1. Decide whether to continue the Nextcloud-native path with file comments and/or tag editing, or switch back to local format metadata extraction.
2. If continuing Nextcloud-native integration, add read-only file comments to item cards/detail using the public Comments API.
3. Keep comments as discussion/notes and do not map them into structured publication metadata.
4. Smoke it against Alice with a fixture comment on a `/LibrarySpike` file.

This slice deliberately stops before Library-native tag tables, rich embedded metadata and covers. It would round out the first read-only Nextcloud collaboration metadata pass.
