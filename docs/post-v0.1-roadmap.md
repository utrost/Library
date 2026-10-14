# Rough roadmap after v0.1

Development status: `0.3.0-alpha.9`, updated 2026-10-14. Version 0.3 is the first planned App Store release. Signed `0.2.0-beta.3` remains the verified release baseline; author and series identities, reviewed moves/merges, changed-import review and conditional Undo are deployed on developer NC34. Focused source-build checks passed on NC33–35; the signed 0.3 archive and exact-package matrix remain ahead. For the operative release sequence, use the [active roadmap](roadmap.md#active-03-track).

Historical 0.2 progression: alpha.21 implemented [automatic scans](automatic-scans.md) with per-account intervals, scan history and unchanged-file extraction skips. Alpha.23 added bounded folder traversal; alpha.28 added event-journal incremental scheduled scans and weekly full reconciliation.

Historical 0.2 progression: alpha.20 added opportunistic catalogue badges and metadata-sidebar suggestions measured against large catalogue books. See the [performance evidence](compatibility-evidence/2026-09-27-opportunistic-duplicates-alpha20/README.md). Later developer runs covered large catalogue catalogue items; this older measurement is not the current scale claim.

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

Latest author assignment implementation and developer verification: [0.3-alpha.2 report](compatibility-evidence/2026-10-13-author-assignments-alpha2/README.md).
