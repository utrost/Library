# Rough roadmap after v0.1

This is a deliberately rough post-v0.1 roadmap. It is not a promise of dates or exact scope. The intent is to keep each minor release centered on **one major feature family**, so Library can keep shipping coherent, testable slices instead of becoming a bag of unrelated improvements.

Baseline assumption: v0.1 is the first manually tested candidate for a safe personal publication catalogue on Nextcloud 34. Nextcloud Files remains canonical storage, and every later release must preserve the source-file safety and File-First boundaries proven in v0.1.

## v0.2 — Filename and directory metadata parsing

Major feature: **Parsing metadata from filenames and directories**.

Why this should come first: real personal libraries often contain scans, magazines, comics and manuals with weak or missing embedded metadata. Before relying on network providers, Library should become excellent at extracting reviewable candidates from the structure users already have.

User outcome:

- A folder of messy PDFs/CBZs becomes much more browsable after scan, even without OPF/ComicInfo/provider data.
- Common patterns like dated magazines, issue numbers, volume labels, creator-title filenames and publication/year folders become scanner candidates with clear provenance.
- Users can review and reset filename-derived candidates without confusing them with manually trusted metadata.

Candidate slices:

1. Add a pattern registry for filename and directory metadata rules.
2. Expose filename/directory provenance clearly in the detail workbench.
3. Add a real-corpus review report that shows which patterns fired and which rows remain weak.
4. Add conservative pattern tests for magazine dates, issue numbers, numbered comics, creator-title names and noisy archive suffixes.
5. Add user-facing docs that explain filename parsing as suggestions, not authority.

Non-goals:

- No internet metadata lookup.
- No machine-learning classification.
- No automatic destructive rename/move of source files.

Acceptance checks:

- A staged mixed folder gets materially better title/publication/date candidates from filenames/directories.
- Every derived field records provenance as filename or directory based.
- User-edited metadata still wins across rescans.
- Bad patterns are easy to identify from a report before broadening rules.

## v0.3 — External metadata providers

Major feature: **Getting metadata from a provider**.

Why this follows filename parsing: by v0.3, Library should know what it can infer locally and where it is weak. Provider lookup can then target missing/low-confidence rows instead of spraying external data over everything.

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

- Creator identity splitting and dedicated creator pages.
- Saved views and smart collections.
- App-owned cover cache plus crop/rebuild workflows beyond the current manual cover override/revert.
- OPDS/Kobo/Kindle export or sync.
- OCR/full-text search for scanned PDFs.
- Internet/AI classification only after provenance, privacy and review workflows are strong.
- Public sharing or publishing of a curated catalogue.
- Broader Nextcloud version support and App Store signing/release process.

## Sequencing principle

Prefer this order unless testing says otherwise:

1. Make weak local metadata better and reviewable.
2. Add external data only as explicit candidates.
3. Make corrections portable beside the files.
4. Share libraries safely.
5. Integrate deeper reading state.

That keeps Library faithful to its core idea: files stay in Nextcloud, metadata improvements stay inspectable, and user corrections stay safe.