# Rough roadmap after v0.1

Updated 2026-10-20. Developer NC34 runs `0.3.0-alpha.34`; 0.3 remains the first planned App Store release. The [official roadmap](roadmap.md#product-direction) owns the release sequence and outstanding 0.3 gates. This companion defines future feature outcomes and acceptance. Future work described below is planned, not implemented or certified.

## Current direction — 2026-10-20

Each release has one major feature family, delivered in small usable slices. Version assignments express priority, not dates or a promise to include every experiment. Keep catalogue use possible without external services, an LLM or a particular reader.

| Release | Theme | Intended outcome |
| --- | --- | --- |
| 0.4 | Enrich and discover | Improve messy metadata, organise many books efficiently, preserve curation and make Home useful every day. |
| 0.5 | Read and remember | Resume reliably, keep personal reading activity and annotations, and organise related editions/copies. |
| 0.6 | Explore your knowledge | Find passages, connect notes and ask grounded questions across the accessible collection. |

### 0.4 — Enrich and discover

**Target core:** provider-assisted metadata completion, complete Library export/restore, bulk organisation, an incoming-books/cleanup inbox, visible change history and useful dashboards. Citation export is optional after metadata completion is reliable. Front-matter AI extraction and the first reader bridge are explicitly experimental; their readiness does not block the core. These additions do not expand 0.3, which remains focused on acceptance fixes and release readiness.

#### First slice: Improve book details

Provide one action on a book, reusing the existing review and manual-field protection model:

1. Gather embedded/sidecar metadata, identifiers and current accepted values.
2. Search configured providers, starting with Google Books and Open Library. Prefer verified identifier matches; show edition/language ambiguity when searching by title and author.
3. Present field-level candidates alongside current values, source and supporting evidence. A provider result or model assertion is a suggestion, not proof of a match.
4. Apply the user's selected fields atomically with stale-edit protection and retained provenance. Allow safe reversal without overwriting later edits.
5. Extend to explicitly selected books through bounded, cancellable background work with progress, partial-failure reporting and restart-safe execution.

Use optional provider adapters, account-scoped settings, explicit network opt-in and replaceable providers. Recheck access, attribution, caching and reuse terms at implementation time. Cache permitted results and unsuccessful lookups with expiry; deduplicate requests and respect rate limits. Provider failure must not prevent local editing or indexing. A 100k-book collection must not trigger uncontrolled enrichment during normal scans.

Provider assessment as of 2026-10-20:

- [Google Books](https://developers.google.com/books/docs/v1/reference/volumes/list): first candidate for volume search and metadata matches.
- [Open Library](https://openlibrary.org/developers/api): first candidate for works, editions, authors and covers. Its API guidance explicitly excludes bulk downloading; design selective lookups and reuse accordingly.
- [Goodreads](https://www.goodreads.com/group/show/8095-goodreads-developers): investigate only if supported access becomes available; the developer notice says new public API keys are unavailable.
- [Amazon Creators API](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/onboarding/register-for-creators-api): optional investigation. Registration requires an accepted Associates account; validate permitted use before selecting it for a personal catalogue.

Acceptance checks: one-book preview makes no metadata changes; accepted fields retain evidence; ambiguous editions require a decision; manual corrections survive rescans; provider outages/rate limits are recoverable; batch work stays bounded; credentials and private queries do not leak across accounts or into diagnostics.

#### Preserve and organise the user's work

- **Complete Library export/restore:** versioned export of corrected metadata, author/series/genre identities and assignments, profiles/portraits, merge decisions, lists/order/notes, saved searches and extraction rules. Include other user-curated settings and decisions in an explicit coverage manifest. Exclude credentials and regenerable caches; publication binaries remain in Nextcloud Files. Import matches source files, previews ambiguous/missing records and remaps portable identities rather than trusting old database IDs. Prove recovery into a separate instance. Keep full-instance backup as the supported recovery process until this lands.
- **Bulk organisation:** assign authors, series, genres, languages and publisher; adjust series positions; preview the affected books and fields; execute large changes in background jobs with progress and conditional Undo. Preserve author order and manually protected fields.
- **Unified cleanup inbox:** bring uncertain author names, language values, series spellings, missing metadata and scanner/provider changes into task-oriented review. Show examples, retain explicit user mapping decisions and avoid automatic fuzzy merges. Users should be able to fix an issue without learning the source-versus-canonical storage model.

Acceptance checks: exported curation survives restore; imports reject stale/ambiguous targets without partial identity corruption; bulk previews accurately describe changes; interrupted operations resume safely; review decisions remain visible and reversible where current state permits.

#### Incoming books and visible change history

Use the inbox as the organising workflow for 0.4: new files arrive → identify books → review possible duplicates → complete metadata → organise → browse. Connect existing scan, review and enrichment capabilities within the same batch context. Show only unresolved decisions; pause/resume must retain accepted choices, skipped items and errors. Users can browse indexed books before finishing cleanup. A completion summary links to the resulting books and remaining problems.

Give each book an understandable history of what changed, when, why and from which source: import, manual correction, author/series reassignment, batch action, provider acceptance and later AI suggestions. Build on existing provenance and operation journals. Show conditional Undo only when the current state makes reversal safe; explain when later edits prevent it. Historical changes without recorded evidence must not be invented. Define bounded retention and export coverage before adding new history storage.

Acceptance checks: leaving/reopening an incoming batch retains progress; rescans/retries do not duplicate books or accepted actions; outcomes link to the correct filtered results; history reflects committed changes and failed operations accurately, remains account-private and rejects stale Undo.

#### Optional: citation and bibliography export

After metadata completion is reliable, offer copyable citations and BibTeX/RIS export for selected books, including edition information and an optional local reference. Make missing bibliographic fields visible and never fabricate them. Chapter/passage citations follow when their structure and locations exist. Export is read-only and must escape format-specific characters correctly; it does not delay the 0.4 core.

#### Dashboards

Evolve existing Home and maintenance surfaces rather than adding competing navigation:

- **Personal Home:** recently added/changed books, a chosen Up next list, recently finished books/notes, and rediscovery of owned books. Continue reading gains a true resume action only when a compatible reader supplies a saved position.
- **Library health:** new imports needing attention, unidentified books, metadata suggestions, possible duplicates, missing files and stalled jobs, each linking to a concrete review action.
- **Reading insights in 0.5:** reading over time, authors/subjects/languages explored, series completion and optional goals/yearly review, based on actual reader events or explicit manual status.

Widgets are configurable, private, accessible and cheap to load. Use bounded queries or cached aggregates, with loading/empty/error states. An Open event must never be counted as proof of reading or completion. Acceptance includes populated-library dashboard latency and correctness of every linked filtered view.

#### Experimental: extract evidence from book contents

Start with **Identify this book** for a user-selected item. Inspect a bounded sample of title/copyright pages, contents and preface; include relevant back matter only when needed. Prefer EPUB structure and extractable PDF text, then optional OCR. Page, byte and token budgets are explicit; reflowable EPUBs need structural/text limits rather than assumed fixed pages.

Extract candidate title, contributor roles, publisher, date, identifiers, series and topics, with page/section references and short supporting excerpts. Validate identifiers and cross-check candidates against catalogue sources. Evaluate extraction accuracy on a representative fixture set; model self-reported confidence alone is not an acceptance signal. Opening pages can support bibliographic extraction or topic suggestions; a whole-book synopsis requires broader coverage and must disclose its scope.

Offer local or hosted execution, explicit disclosure of text sent externally, user/admin spending and concurrency limits, cancellation and cache invalidation by file revision and extractor/model configuration. Book text is untrusted input and cannot instruct tools, change settings or trigger unrelated requests. No automatic source-file rewriting or silent application of generated values. Separate generated summaries from publisher descriptions.

#### Experimental: reader bridge

Inspect the installed reader's capabilities and prototype a small versioned interface: open at a saved location, report location/progress, and record started/finished activity. Keep existing Open/Files/Download handoff working when integration is absent. Validate a complete open → read → close → resume journey before promoting the bridge to a supported capability.

### 0.5 — Read and remember

**Target core:** reliable reading progress/resume, reading history, bookmarks/highlights/notes, portable personal activity and reviewed edition grouping. Shared libraries are not a dependency.

- Define a capability contract and adapters for supported readers. Store locations against the specific file/version, including format-specific anchors and enough context to detect invalid positions. [Readium locators](https://readium.org/architecture/models/locators/) are a design reference for progression, bookmarks and annotations; adoption requires actual reader interoperability testing.
- Define conflict handling for concurrent devices and offline updates, including rereading and intentional backward navigation. A greater percentage is not automatically the newest position. Retain separate state when editions cannot be mapped safely.
- Export/import Library-owned reading state and annotations; document what remains in an external reader. Surface reader disconnects and failed synchronisation without silently losing state.
- Add the activity-based dashboard described above. Offline reading, device synchronisation and text-to-speech are optional integrations with separate capability checks.

**Reader fork decision:** first inspect capabilities, attempt a narrow upstream extension/API and assess collaboration. A maintained fork is a valid option if the project is abandoned, necessary integration is blocked, or its direction is incompatible. Before choosing it, assign ownership for rendering correctness, accessibility, security updates, browser compatibility, licensing and upstream synchronisation. A fork is not assumed or required by the roadmap.

#### Work, edition, file and personal activity

Design these boundaries before cross-format grouping or shared reading state:

- **Work:** the underlying intellectual work.
- **Edition:** a language, translation or publication of that work.
- **File:** an actual EPUB/PDF/other copy with its own identity and revision.
- **Personal activity:** user-owned progress, notes and ratings, with explicit attachment rules for work, edition or file.

Use additive migrations and backfills that preserve existing item/file IDs, curated identities, list links and corrections. Review grouping decisions and make them reversible. Keep file-specific anchors unless a separately verified mapping permits a transfer. Multiple formats can appear under one book while each source file remains independently accessible.

This also supports better duplicate review: explain evidence, show identifier/series/edition conflicts, distinguish editions and formats, group likely copies, and remember decisions. Deleting a file remains an explicit separate action.

#### Wishlist and books without files

Once the work/edition model is in place, allow records added by ISBN, title or a supported link without requiring a local publication file. Store Want to read, Borrowed or Looking for a copy status plus a recommendation/research note. Keep possession and reading status distinct. When a matching file arrives, suggest a reviewed link to the existing record rather than silently creating or merging identities. Series views can distinguish owned, read and missing-from-collection entries when series membership is known.

Acceptance checks: records without files remain usable and exportable; file matching handles ambiguous editions explicitly; attaching or removing a file preserves wishlist notes and reading state; bibliographic records never imply that a file is available to open.

#### Reading-copy quality checks

Alongside duplicate/edition review, show evidence useful for choosing a preferred reading copy: searchable text versus scanned images, table-of-contents availability, missing fonts or structural problems, language mismatches and suspected incomplete/damaged files. Treat uncertain findings as reviewable observations; file size alone is not a quality ranking. Checks are bounded and cached by file revision, and do not rewrite or delete publications.

Acceptance checks: known-good and damaged fixtures produce explainable findings; unsupported analysis is distinguished from failure; changing a file invalidates old findings; choosing a preferred copy preserves all other files and their independent locations.

**Additional organisation candidates:** multiple series memberships, ordering for prequels/short stories/omnibus editions/nonnumeric parts, larger series merges and convenient position editing. These can move forward after core acceptance if capacity permits.

Acceptance checks: resume works across supported sessions/devices; stale/offline events do not lose later activity; changed files and unmappable editions give understandable recovery; annotations retain usable anchors; export/restore preserves personal activity; reviewed grouping neither deletes files nor merges unrelated editions automatically.

### 0.6 — Explore your knowledge

Optional full-text/OCR and semantic indexing can power questions such as:

- “Which books I own would help me understand orbital mechanics?”
- “Find the passage I highlighted about institutional trust.”
- “Build a reading path from introductory to advanced statistics.”
- “What do these three authors disagree about?”

Begin with metadata/contents retrieval, then deepen to indexed passages and annotations. Answers link to the actual book and location, distinguish quoted evidence from generated interpretation, expose incomplete coverage and say when the collection does not support an answer. Suggestions based only on metadata must be labelled accordingly.

**Article and chapter discovery:** expose useful pieces within magazines, anthologies and reference books, starting with reliable tables of contents. Model their parent publication, title, contributor and location without pretending each piece is a separate source file. Search can find an article, short story or technical chapter and open its location; users can bookmark or cite it. Review inferred boundaries and contributor assignments. Validate parent/child access checks, missing or inaccurate contents, changed-file anchors and citation accuracy before deeper automated extraction.

Indexing is optional, budgeted and resumable, with local/hosted choices and deletion/revision invalidation. Apply account and file-access checks before retrieval, rendering passages or sending context to a model; revoke cached access when permissions change. Evaluate retrieval relevance, citation correctness, unsupported claims, prompt-injection handling and large-library latency before enabling broad synthesis.

Acceptance checks: cited passages open correctly in accessible files; private books/notes never enter another user's results; deleted/replaced sources stop contributing stale evidence; users can disable and remove derived indexes; costs and index coverage are visible.

### Nextcloud integration across releases

Library should participate in the user's Nextcloud workspace. These optional slices can ship independently after the first metadata-completion slice; validate public interfaces and supported companion-app versions before implementation.

| Stage | Integration | User outcome |
| --- | --- | --- |
| 0.4 | Notes/Text document links | Create a reading note or attach an existing note from Book details; open it in the installed editor; retain a link back to the book. |
| 0.4 | Unified Search | Find accessible Library books and canonical authors from Nextcloud's global search, using bounded existing catalogue queries. |
| 0.4 | Smart Picker and link previews | Insert a book reference into supported Notes, Text, Talk or Collectives surfaces; show a permitted title/cover preview and a link to Library. |
| 0.4 | Native Nextcloud Dashboard | Offer Up next/recently opened books, then genuine Continue reading when the reader bridge is available. Reuse Library Home data and respect widget resource budgets. |
| 0.5 | Reader → notes | Send a selected highlight with attribution and a stable passage link to a chosen reading note; associate one note with multiple books when useful. |
| 0.6 | Connected knowledge | Retrieve linked notes and passages together; explore references to Collectives research pages while preserving each application's access boundaries. |

**Notes workflow:** Book details → Create reading note / Link existing note → choose destination → edit in Notes or Text → return through the book reference. A note may contain the user's thoughts, quotations and links to several sources. Later, the reader can offer Add highlight to note with a preview. Copying a quotation is a deliberate write to the chosen document, not a side effect of opening a book.

**Ownership:** keep one authoritative note document in Nextcloud, using supported Notes APIs or user-owned Markdown files opened through the supported editor. Library stores stable relationships and passage anchors rather than a second independently editable copy of the same prose. Existing per-list notes remain list context; Nextcloud file comments remain file discussion. Linking a note does not migrate either kind of existing content automatically.

Track stable note/file identities where supported and handle renames, moves, deletion and revoked access. Unlinking a note or deleting a book must not delete the note. Preserve readable bibliographic references when a book is unavailable. App removal or unavailable integrations must leave note documents usable. Include link mappings in complete Library export/restore, and state explicitly whether note contents are included or supplied by a separate Files backup.

**Sharing:** sharing a note does not grant access to its linked book. Preview resolution checks the viewing user's permissions, including cached previews; inaccessible books must not leak titles, covers or private annotations. Before appending private highlights to a shared note, show the destination and sharing context. Use revision checks and recoverable append operations to protect simultaneous edits; retries must not duplicate quotations or overwrite free-form prose.

**Further candidates:** optional Activity/Notifications for completed scans, enrichment and actionable failures; investigate Nextcloud's available AI/task-processing infrastructure before creating a parallel provider setup; later Deck/Tasks links for user-requested reading plans. Check capabilities first and retain explicit consent and resource budgets. These investigations have no fixed release commitment.

Acceptance: test with Notes/editor installed and absent; link/create/open/back, rename/delete, concurrent edits and duplicate retries; verify cross-account preview isolation and sharing boundaries; ensure disabling Library leaves ordinary notes intact. No private companion-app database writes or required second login credential store.

Interface references, checked 2026-10-20: [Notes REST API](https://github.com/nextcloud/notes/blob/main/docs/api/README.md), [Notes Markdown storage](https://github.com/nextcloud/notes/wiki), [Unified Search providers](https://docs.nextcloud.com/server/stable/developer_manual/digging_deeper/search.html), [Smart Picker/reference providers](https://docs.nextcloud.com/server/stable/developer_manual/digging_deeper/reference.html), and [Dashboard widgets](https://docs.nextcloud.com/server/stable/developer_manual/digging_deeper/dashboard.html). These establish available extension points, not compatibility certification for a future Library adapter.

### Unassigned future tracks and boundaries

- **Shared libraries and admin-managed roots:** the previous 0.4 allocation is superseded. Retain as a focused future release with a design for shared corrections, ownership, access revocation, personal overlays and backups. No delivery version is assigned.
- OPDS/device integrations, public publishing, contributor-role expansion and further provider families remain candidates. Prioritise them using actual usage and interoperability evidence.
- **Non-goals for 0.3:** provider/LLM enrichment, full Library export, true reader progress and semantic discovery. The future roadmap must not expand the current release gate.
- Release each slice only with migrations, recovery, ownership, performance and human workflow acceptance appropriate to its new responsibilities. The first implementation after 0.3 is the one-book metadata-completion preview; experiments may proceed separately without turning into hidden release dependencies.

## Historical proposals — superseded sequencing

Everything below preserves earlier planning and evidence. It is not the current release allocation or implementation checklist. In particular, the old **v0.4 shared-libraries** assignment and the requirement to finish sharing before reader integration are superseded by the current direction above.

Historical 0.2 progression: alpha.21 implemented [automatic scans](automatic-scans.md) with per-account intervals, scan history and unchanged-file extraction skips. Alpha.23 added bounded folder traversal; alpha.28 added event-journal incremental scheduled scans and weekly full reconciliation.

Historical 0.2 progression: alpha.20 added opportunistic catalogue badges and metadata-sidebar suggestions measured against a large catalogue. See the performance evidence. Later developer runs covered catalogue items; this older measurement is not the current scale claim.

Alpha.19: [possible duplicate review](duplicate-review.md) is implemented. Private background discovery, optional content hashes, comparison evidence and reversible review decisions are available. Automatic deletion, merging and work/edition grouping remain future scope.

This is a deliberately rough post-v0.1 roadmap. It is not a promise of dates or exact scope. The intent is to keep each minor release centered on **one major feature family**, so Library can keep shipping coherent, testable slices instead of becoming a bag of unrelated improvements.

Historical scope note (2026-09-25): the `0.1.0-beta.1` candidate declared Nextcloud 33–35 support and passed the exact-package 40-book smoke matrix. Conservative filename/directory patterns, provenance, a metadata detail workbench and custom collections had landed. The v0.2 section below records the original feature direction, not today's release checklist.

Baseline assumption: v0.1 is the first manually tested candidate for a safe personal publication catalogue on Nextcloud 33–35. Nextcloud Files remains canonical storage, and every later release must preserve the source-file safety and File-First boundaries proven in v0.1.

## v0.2 — Filename and directory metadata parsing

Major feature: **Parsing metadata from filenames and directories**.

The [inference feature design](v0.2-inference.md) specifies the guided rule builder, supported placeholders, saved templates and folder assignments, mixed-structure matching, review/apply, provenance and conditional undo. This first step can ship independently of sidecar writing and filing; it reuses and extends the catalogue model and background jobs.

The [personal lists and notes implementation](v0.2-personal-lists.md) is accepted for the current feature slice: private membership, descriptions, per-book notes, ordering and batch add. Alpha.12 improves list query speed and verifies the complete browser suite on Nextcloud 33–35. It is independent of inference and preserves existing saved filter collections. Export/import and shared lists remain future scope.

The inference preview now has guided splits/transformations, explicit author handling, live selected-record previews and privately saved guided rules and advanced patterns, plus folder assignments and combined previews with precedence and conflict reporting. See the [user guide](extracting-metadata.md). Dedicated series/series-position/genre storage, manual editing and JSON round-trip are implemented in alpha.15. Alpha.16 adds sample-scoped selected-field review/Apply, fixed approval records, stale checks and conditional Undo. Alpha.17 completes scheduled history expiry, account-deletion cleanup, ordered author storage/browsing and author Apply/Undo. Alpha.18 adds whole-folder background analysis, saved paged results, cancellation and page-scoped review/Apply/Undo. Sidecar writes and filing remain open; previewing alone does not modify publications.

The [metadata and filing proposal](v0.2-metadata-and-filing.md) develops this into a reviewable workflow: infer fields from filenames and paths, apply accepted metadata, then optionally write OPF sidecars or file books using destination rules. It proposes explicit source-folder writes and approved moves as a new product capability, with queued execution and targeted catalogue refresh. Embedded metadata writers follow separately. This proposal supersedes the earlier blanket deferral of such operations to external tools for future versions.

Why this should come first: real personal libraries often contain scans, magazines, comics and manuals with weak or missing embedded metadata. Before relying on network providers, Library should become excellent at extracting reviewable candidates from the structure users already have.

Beta status: basic dated-magazine, year/issue, folder-serial and numbered-comic patterns plus scanner provenance are implemented. The development build has private saved rules/templates, folder assignments and saved analysis results; broader real-corpus coverage and automatic convention discovery remain candidates; this is not a promise that all five slices below belong in 0.2.

User outcome:

- A folder of messy PDFs/CBZs becomes much more browsable after scan, even without OPF/ComicInfo/provider data.
- Common patterns like dated magazines, issue numbers, volume labels, creator-title filenames and publication/year folders become scanner candidates with clear provenance.
- Users can review and reset filename-derived candidates without confusing them with manually trusted metadata.

Candidate slices:

1. Prototype folder selection, teach-by-example and live previews using varied real relative paths.
2. Add user-owned, saved/versioned templates and folder rules, including fixed values and explicit handling of mixed conventions.
3. Extend canonical field storage and provenance for the supported placeholder vocabulary.
4. Add full-scope review, selected-field apply, background batches, stale-preview detection and conditional undo.
5. Add rule reuse, dismissals and portable template import/export; default to suggestions on subsequent scans.

Non-goals:

- No internet metadata lookup.
- No machine-learning classification.
- No automatic destructive rename/move of source files.

Acceptance checks:

- A staged mixed folder gets materially better title/publication/date candidates from filenames/directories.
- Every derived field records provenance as filename or directory based.
- User-edited metadata still wins across rescans.
- Bad patterns are easy to identify from a report before broadening rules.

## v0.3 — Author management

Implemented through alpha.9: [author management](v0.3-author-management.md) provides normalized per-user identities, ordered book relationships, profiles, reviewed merging, conditional Undo and queued large-author operations. [Series management](v0.3-series-management.md) adds one linked series per book, selected-book moves, whole/empty-series merges, later-import redirects, changed-import review and conditional Undo. No dedicated author aliases table is planned. Human acceptance and exact signed 0.3 package verification are the next release gates.

This replaces external metadata providers as the 0.3 focus. The provider proposal below remains a later candidate. The owner chose 0.3 as the first Store release; the signed 0.2 beta remains a preserved baseline.

## Later candidate — External metadata providers

Major feature: **Getting metadata from a provider**.

Why this follows filename parsing and author management: Library should know what it can infer locally and where it is weak. Provider lookup can then target missing/low-confidence rows instead of spraying external data over everything.

User outcome:

- A user can ask Library to search one or more external metadata providers for candidate matches.
- Provider results are previewed and compared before applying.
- Provider values remain candidates with provenance and confidence, not silent replacements for user metadata.

Possible provider families:

- Open Library / ISBN sources for books.
- Crossref / DOI sources for papers and articles.
- MusicBrainz-like or Discogs-like provider patterns if music-score/catalogue use cases justify them later.
- ComicVine/Grand Comics Database-style comic providers only if API/license/access constraints are acceptable.
- Generic provider interface first; individual providers can remain optional plugins/adapters.

Candidate slices:

1. Add provider adapter interface and provider-result cache table.
2. Add a one-item provider lookup preview on the detail page.
3. Add provider match review/apply for selected fields only.
4. Add a batch provider lookup preview for current filter results with safety caps.
5. Document provider provenance, rate limits, cache behavior and privacy expectations.

Non-goals:

- No automatic overwrite of user-edited fields.
- No mandatory provider accounts for core Library use.
- No uncontrolled background enrichment across the whole library.

Acceptance checks:

- Provider lookup can be run for one item without changing metadata.
- Applying provider data writes only explicitly selected fields.
- Cached provider payloads can be inspected or discarded.
- The app behaves well when a provider is unavailable, rate-limited or returns ambiguous matches.

## v0.4 — Shared libraries and admin-managed roots

Historical allocation, superseded 2026-10-20: this feature family is now unassigned; current 0.4 is **Enrich and discover**.

Major feature: **Shared Library roots for households and teams**.

Why this belongs after personal catalogue hardening: personal roots are enough for v0.1, but a family archive or team document shelf needs shared configuration and clear permission behavior.

User outcome:

- An admin can define a shared Library root once.
- Users with Nextcloud file access can browse the shared catalogue without each configuring the same root manually.
- Personal metadata such as stars and last-opened activity can stay personal while shared publication metadata is governed explicitly.

Candidate slices:

1. Add admin settings surface for shared roots.
2. Add permission-aware catalogue visibility for shared roots.
3. Split shared publication metadata from personal overlay fields.
4. Add admin/user docs for ownership, repair, deletion and backup boundaries.
5. Add multi-user smoke tests for access and non-access cases.

Non-goals:

- No bypass of Nextcloud Files permissions.
- No public/anonymous library sharing.
- No group policy complexity beyond the first admin-managed root model.

Acceptance checks:

- A user only sees shared-root catalogue items when Nextcloud Files grants access.
- Personal stars/last-opened do not leak between users.
- Admin root deletion still leaves source files untouched.
- Docs explain who owns shared metadata corrections.

## v0.5 — Reading integrations and activity

Historical proposal: current 0.5 scope and acceptance are defined under **Read and remember** above, with an optional bridge experiment in 0.4 and no dependency on shared libraries.

Major feature: **Reader-aware activity beyond Library's own open timestamp**.

Why this should wait: v0.1 proves handoff through Nextcloud readers/viewers. Deeper reading activity should come after catalogue, metadata review and shared-root ownership are stable.

User outcome:

- Library can show richer reading state when a compatible reader exposes it.
- Users can distinguish “opened recently” from true reading progress.
- Reading integrations remain optional; Library still works as a catalogue without them.

Candidate slices:

1. Add a reader-integration capability registry.
2. Add explicit fields for reading progress only when a trustworthy source exists.
3. Add UI that separates Library-owned activity from reader-owned progress.
4. Add import/export support for Library-owned reading state where appropriate.
5. Add docs for supported readers and unsupported expectations.

Non-goals:

- No custom EPUB/PDF/comic renderer as a default goal.
- No pretending open timestamp equals page progress.
- No mandatory reader plugin dependency for catalogue use.

Acceptance checks:

- Existing Read/Show in Files/Download source actions still work.
- Reader progress is only shown when backed by a real integration.
- Missing reader capability degrades gracefully to v0.1 behavior.

## Later candidates

These are **not committed release promises**. They can be pulled forward if v0.1 testing changes the priority:

- Additional contributor roles beyond the current author identity model.
- Saved views and smart collections.
- Cover crop/rebuild workflows beyond the current bounded private thumbnails and manual override/revert.
- OPDS/Kobo/Kindle export or sync.
- OCR/full-text search for scanned PDFs.
- Internet/AI classification only after provenance, privacy and review workflows are strong.
- Public sharing or publishing of a curated catalogue.
- Broader Nextcloud version support and App Store signing/release process.
- Remaining Trust/scale work: request/autosave/star races; cover validation, remote privacy, archive budgets and caching; query/payload completion; missing-file batching; root transaction/overlap hardening; and representative scale gates.

## Sequencing principle

Prefer this order unless testing says otherwise:

1. Make weak local metadata better and reviewable.
2. Add external data only as explicit candidates.
3. Make corrections portable beside the files.
4. Share libraries safely.
5. Integrate deeper reading state.

That keeps Library faithful to its core idea: files stay in Nextcloud, metadata improvements stay inspectable, and user corrections stay safe.

Latest author assignment implementation and developer verification: 0.3-alpha.2 report.
