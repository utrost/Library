# Changelog

All notable changes for Library are tracked here.

## v0.1.0-alpha.160 - 2026-09-11

- Added the first native Nextcloud application-shell scaffold using documented public `@nextcloud/vue` component subpaths. Library/Review navigation now uses same-origin, webroot-aware server-generated route paths, derives its active destination from review filters, and keeps the intentionally empty sidebar inert.
- Reduced the production shell to one budgeted runtime module with no hashed chunks; added fail-closed static/re-export/literal-dynamic closure checks, a separate total-package frontend budget, an exact asset manifest, source-map rejection, and reproducible archive metadata.
- Hardened release packaging to reject unsafe, non-canonical, duplicate-normalized, or unsupported archive entries before module reads; recursively reject nested orphan chunks; and exclude internal implementation reports while enforcing the public root-file allowlist.
- Exposed Library as the active destination, Review as a live link to the existing scanner-conflict catalogue filter, and Settings as a safe native footer link to the existing personal-settings route. Build-time `appName` and `appVersion` replacements satisfy the supported `@nextcloud/vue` convention. The unchanged catalogue, AJAX filters, five-panel workspace, cards, forms, discovery URLs and PHP detail route remain in place inside Library.
- Fixed the alpha.160 live-package proxy regression: the smoke proxy now normalizes raw and JSON-escaped upstream origins at the proxy boundary, while unknown runtime exceptions and every uncorrelated CSP failure remain fatal. The rebuilt exact package passed the fail-closed browser smoke with zero console errors; the package-excluded remediation record contains the authoritative command results and artifact identity.
- This is scaffold-first only: review and settings functionality have not migrated into new shell surfaces, the sidebar has no detail content and stays closed, Vue Router was not added, and the duplicate no-Vue fallback renderer remains available.

## v0.1.0-alpha.159 - 2026-09-11

- Prevented metadata-error retry and missing-file recheck from restoring a stable-ID file after it moves outside every enabled root owned by the current user.
- Repair reads node metadata, then makes one authoritative observation of the current path and the user's currently enabled roots immediately before upsert. That observation preserves the original root for overlaps, reassigns legitimate stable-ID moves between enabled roots, and fails closed when the observed path is outside the enabled repair scope.
- Added focused PHP scanner coverage with explicit metadata-read side effects for path movement and root disablement before the final authorization observation, plus static `/Books` versus `/Bookshelf`, overlap, cross-root, and per-user lookup cases. The observation and index upsert cannot be atomic across Nextcloud file/root storage and Library's database write; a storage change after that observation remains outside this physical boundary. The full local gate, unsigned package build/audit, and exact-package live smoke completed successfully; fresh-database migration, realistic scale, signing/App Store submission, and formal Trust-and-scale closure remain pending or deferred.

## v0.1.0-alpha.158 - 2026-09-11

- Removed the remote cover URL control and made validated JPEG, PNG, or WebP uploads the only manual cover override.
- Detail and catalogue covers now always use the same-origin `library.cover.show` route. Existing `cover_override_url` values remain schema-compatible but inert; upload and revert clear them.
- URL-only submissions write nothing and return a bounded, privacy-safe result. `remote cover SSRF was not present` because the server never fetched these URLs; alpha.158 removes direct browser leakage and intentionally does not introduce server fetching.
- Added production-path PHP regressions, source contracts, and an exact-package browser gate that safely seeds a tracker-style legacy value, captures catalogue/detail requests, proves upload/render/revert, and checks temporary-second-user read/mutation isolation with full restoration.

## v0.1.0-alpha.157 - 2026-09-11

- Invalidated and aborted catalogue requests at debounced user intent, preserved the newest controls, and made failure fallback submit the failed request's captured query.
- Added bounded JPEG, PNG, and WebP dimension inspection before full image decode, including defensive JPEG marker/length handling; full decoder structural and MIME validation remains authoritative afterward.
- Made valid uploaded covers clear prior remote overrides, added bounded privacy-safe rejection feedback, and precisely counted scan cancellation checks next to each runtime check.
- Added focused runtime regressions for debounce-window ownership, captured fallback queries, pre-decode image limits, upload precedence/feedback, and cancellation-check counts.

## v0.1.0-alpha.156 - 2026-09-11

- Hardened manual cover uploads with bounded reads, upload-error rejection, exact JPEG/PNG/WebP server-side detection, structural completeness checks, and explicit encoded-byte, dimension, and pixel-count limits.
- Invalid or malformed uploaded covers now leave the existing override untouched, while persisted MIME is always the canonical server-detected value rather than client metadata.
- Added dependency-free PHP runtime behavior coverage for the validator and the real controller/upload-service integration seam.

## v0.1.0-alpha.155 - 2026-09-11

- Hardened catalogue AJAX filtering with request cancellation, monotonic response ownership, rejection fallback, and unmount cleanup so stale responses cannot replace newer results.
- Serialized detail metadata autosaves with one coalesced latest snapshot, latest-request-only status ownership, and manual-submit cleanup.
- Made catalogue and detail star controls ignore rapid repeat clicks while pending, restore controls after every outcome, roll back failed optimistic updates, and show accessible failure feedback.

## v0.1.0-alpha.154 - 2026-09-11

- Added dependency-free, monotonic, aggregate operation instrumentation for scans, catalogue builds, and cover builds. Metrics stay in process or in aggregate scan-job columns; this is not external telemetry and it is not proof of a universal speedup.
- Persisted scan duration and extraction/write-elision counters, fixed exact scan-job creation IDs, and made competing terminal transitions conditional.
- Throttled scan progress and cancellation polling to the initial observation and then 100 traversal units or 1000 ms, including unsupported nodes and nested/empty folders, with an authoritative final transition. A single filesystem listing/node call or extraction/storage operation remains non-preemptive.
- Added privacy-safe structured terminal events whose fixed contexts exclude identifiers, paths, search values, metadata, URLs, SQL, and exception details.

## v0.1.0-alpha.153 - 2026-09-11

- Added a conservative unchanged-file metadata fast path: trusted indexed files with an existing catalogue item, a matching current pipeline revision and an unchanged primary/selected-OPF fingerprint skip content extraction and catalogue-item writes.
- Fingerprints cover root and file identity, path, ETag, modification time, size, MIME type and extension for the primary file and selected OPF sidecar. Missing or weak provider metadata fails open to normal extraction.
- Added nullable fingerprint/revision schema fields and migration `Version000100Date20260911130000`; the first successful stable scan after upgrade warms those markers.
- Added focused PHP runtime coverage and a privacy-preserving live two-scan smoke contract. Performance instrumentation remains next, so this release makes no measured speedup claim.

## v0.1.0-alpha.152 - 2026-09-11

- Added seven additive user-scoped B-tree indexes for measured catalogue sort/filter and file diagnostic queries without changing query result behavior.
- Existing scan-job, root and saved-collection indexes are not duplicated; no starred index was added, and redundant legacy single-user indexes are retained for compatibility.
- `LOWER(...)`, leading-wildcard text search, JSON predicates and scanner-conflict row inspection remain outside ordinary B-tree benefits.
- Unchanged-rescan optimization and performance instrumentation remain the next scale work.

## v0.1.0-alpha.151 - 2026-09-10

- Ordinary catalogue and AJAX item DTOs now omit unbounded cover override blobs, raw provenance maps, comments and detail-only mutation URLs; tags, descriptions, diagnostics and visible card actions remain available.
- Normal catalogue SQL no longer selects cover override data.
- Scanner-conflict and weak-metadata review views intentionally retain the rich provenance required for review, while detail, cover, export and import paths remain full-fidelity.
- Creator landing URL duplication, description/lazy detail loading, workload-led indexes, unchanged-rescan short-circuiting, the saved raw-tag bug and SQL-native scanner-conflict counting remain pending.

## v0.1.0-alpha.150 - 2026-09-10

- Useful-view and saved-collection count badges now use a count-only catalogue path instead of fetching paginated item rows and catalogue facets.
- Kept scanner-conflict count semantics aligned with the visible catalogue while leaving SQL-only conflict counting as a documented follow-up.

## v0.1.0-alpha.149 - 2026-09-10

- Batch operations no longer silently truncate selections at 100 items.
- Selections and filter results above the explicit 5,000-item cap are rejected with a visible message before mutation.
- Batch mutation endpoints now require Nextcloud CSRF tokens.

## v0.1.0-alpha.148 - 2026-09-09

- Added a metadata review workbench for scanner-conflict and weak-metadata catalogue views with a **Review next conflict** flow.
- The workbench compares current value, scanner candidate, path-template candidate, sidecar value and source provenance, with explicit per-field accept actions and no source-file writes.
- Polished catalogue search copy so the UI explicitly says descriptions are searchable, and protected the backend description query in smoke markers.

## v0.1.0-alpha.141 - 2026-09-09

- Added keyboard polish to the in-page details drawer: Esc closes, and arrow keys browse neighbouring catalogue items.
- Added an accessible drawer hint so keyboard controls are discoverable without leaving the browsing surface.

## v0.1.0-alpha.140 - 2026-09-09

- Added catalogue cover loading polish with a subtle shimmer while lazy covers resolve.
- Added a broken-cover fallback badge so failed cover image requests do not leave blank cards.
- Kept reduced-motion behavior for the new cover-loading animation.

## v0.1.0-alpha.139 - 2026-09-09

- Added cover-catalogue view-mode buttons.
- Gallery view enlarges covers for visual browsing; Shelf view becomes a horizontal snap-scrolling shelf.
- Kept Compact as the fast default while preserving no-navigation toggling and reduced-motion styling.

## v0.1.0-alpha.138 - 2026-09-09

- Added a browsing-first home dashboard with Continue reading, Recently added and Rediscover rails.
- Added an in-page details drawer so users can peek at title, cover and key facts without losing catalogue position.
- Added a visual issue strip on publication pages to make series and periodical browsing feel more like a shelf.
- Added subtle motion/depth styling with reduced-motion fallbacks for the new browsing surfaces.

## v0.1.0-alpha.137 - 2026-09-09

- Added a reload-safe post-scan completion summary in Library settings for completed and failed scans.
- Stored metadata-error scan counters separately from root/job failures so scan summaries match extraction behavior.
- Linked scan summary counters to filtered review views and added a metadata-error TSV export action.

## v0.1.0-alpha.136 - 2026-09-09

### Added

- Added **Publication contents** read-only issue/date grouping on publication pages, with stable issue/date order, year/month buckets, conservative volume labels, gap hints and an **Unknown issue/date** bucket so weak comics and periodicals stay visible.
- Publication discovery pages now default to issue/date ordering while keeping catalogue cards compact and non-editable.

## v0.1.0-alpha.135 - 2026-09-09

### Added

- Added a **Weak metadata cockpit** to the catalogue with count cards for missing creator, missing publication/series, missing date, filename-derived title, filename/path-derived metadata, placeholder covers, scanner conflicts, metadata extraction errors, no description and unsupported archive/container candidates.
- Added stable query filters for missing date, filename-derived titles, missing descriptions and unsupported archive/container candidates, all counted through the existing catalogue query path.

## v0.1.0-alpha.134 - 2026-09-09

### Changed

- Polished the post-scan **Changes found** panel into human-readable scan change cards for added, moved/renamed, unchanged, missing and metadata-error counts.
- Clarified scan result review actions for recently changed files, files missing from disk and metadata errors.

## v0.1.0-alpha.133 - 2026-09-09

### Added

- Added explicit scan change summaries for added, moved/renamed path updates, unchanged, missing and metadata-error counts.
- Added a post-scan **Changes found** panel in Library settings with review links for changed, missing and errored rows.
- Preserved stable Nextcloud file-ID indexing while reporting path changes so moves/renames update cached paths without duplicate catalogue rows.

## v0.1.0-alpha.132 - 2026-09-09

### Added

- Added in-app **Custom collections** so users can save the current catalogue search/filter setup under a name, reopen it from Library with a count badge, and delete stale collections without relying on browser bookmarks.
- Added a per-user `library_saved_collections` table, service and controller routes for saved collection persistence.

## v0.1.0-alpha.131 - 2026-09-09

### Added

- Expanded **Useful views** into a fuller smart-collection dashboard: added cleanup views for Needs metadata, Placeholder covers, No creator, No publication/series, Weak filename metadata and Unreviewed imports.
- Added smart-view count badges and backend catalogue filters for the new cleanup views, while preserving normal query parameters and active filter chips.

## v0.1.0-alpha.130 - 2026-09-09

### Added

- Added a compact **Useful views** strip to the catalogue with one-click links for recently opened, starred, workflow statuses, scanner conflicts and metadata errors. Links reuse normal catalogue query parameters so active filter chips still explain each view.
- Updated catalogue search copy to name descriptions explicitly alongside title, creator, filename and folder search.

## v0.1.0-alpha.129 - 2026-09-09

### Changed

- Made catalogue text search explicitly cover filename and folder path text via the indexed cached path, so sparse PDFs/comics can be found by the structure they already live in.
- Clarified catalogue search UI copy to say title, creator, filename and folder names are searchable.
- Hardened filename/folder metadata parsing for real staged EPUB/PDF names with middle-initial filename authors such as `Arthur_C_Clarke`, while preserving the existing two-author hyphen-suffix split behavior.
- Broadened archive-source suffix cleanup to strip short `z-lib.org` style source tails before filename metadata parsing.

## v0.1.0-alpha.127 - 2026-09-08

### Added

- Detail-page metadata health score with a weak-field jump list for local cleanup triage.
- Personal rating field with 0–5 star validation.
- Manual cover override from URL or upload, with revert back to extracted/preview cover.
- Creator chip editor that syncs to the existing canonical creators field.
- Dedicated creator discovery pages from the Top creators shortcut panel, using exact full-field creator matching.
- Publication landing pages now show a compact **Publication contents** issue/date context summary with item count, date coverage and year range.
- Batch metadata apply: current filter results can now preview and then write one selected metadata field, with requested/applied/unchanged/skipped feedback.
- Polished batch metadata preview page with summary cards, a real review table and an explicit apply action.

### Changed

- UI/UX polish is now the active priority: settings roots render as shelf cards with collapsed danger zones, the mobile catalogue starts with search and hides sort/filter options, discovery pages use their focused context as the hero, detail pages demote secondary actions/metadata quality, and batch-preview examples become mobile review cards.
- Moved detail-page metadata field help into hover/focus help on the field names so inline guidance no longer stretches the edit form.
- Documented the useful metadata-field audit: sub-genre stays in genre/classification values for now instead of becoming a premature schema column.

## v0.1.0-alpha.112 - 2026-09-08

Release-hardening candidate for the v0.1 manual test pass.

### Added since the first alpha tag

- Dedicated publication/series discovery pages and dedicated publication-year discovery pages around the existing compact catalogue grid.
- Details page cleanup so publication metadata is shown as one editable surface instead of duplicate read-only/edit sections.
- v0.1 detail metadata editing polish: roomier title/description controls, creators entered one per line, language/genre multi-select picklists, publisher autocomplete and autosave with a stable manual fallback button.
- Root deletion recovery checklist before typed destructive confirmation.
- Hard validation for publication date and language edit/import paths.
- Human test handbook with stable release-hardening case IDs.
- Current state and risk register for v0.1 testing.
- Generated archive install smoke script through `npm run smoke:release-package`.

### v0.1 testing limitations

- Target is Nextcloud 34 only.
- Manual cover override is basic: detail pages accept a URL/upload and can revert to extracted/preview cover, but there is still no app-owned cover-crop/cache workflow.
- Sidecar manifest and ZIP are export/download artifacts; source-folder OPF/JSON writing and full restore from sidecars are intentionally outside the app roadmap.
- No scheduled/resumable scans or completion/failure notifications.
- Publication, publication-year and creator discovery pages exist; saved views, smart collections and richer issue grouping remain future work.
- No shared global/admin-managed library roots.
- No custom reader, page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.

## v0.1.0-alpha.1 - 2026-09-07

Public alpha candidate built from app version `0.1.0-alpha.82`.

### Added

- Nextcloud-native publication catalogue for files that already live in Nextcloud Files.
- User-configured Library roots with enable/disable, edit, delete and per-root scan actions.
- Background scan jobs with progress/history, metadata-error retry, missing-file recheck, queued-job cancellation and cooperative running-job cancellation.
- File-index and catalogue-item model for EPUB, PDF, CBZ and OPF inputs, with extractor failure isolation.
- General publication metadata model with editable title, subtitle, creators, publication/series, date, language, publisher, description, workflow status, genres and classifications.
- Scanner provenance/candidates, details-page metadata correction summary, field-level differs-from-scanner markers, single-field reset, whole-item reset and scanner-conflict catalogue filter.
- Compact cover-first catalogue cards, database-backed search/filter/sort/pagination, top series/periodicals facet and active filter chips.
- Read handoff, Show in Files and Download source actions.
- Cover route with Nextcloud preview, EPUB package cover, CBZ first-image fallback, placeholder fallback, diagnostic headers and refresh affordance.
- Nextcloud tags/comments on detail pages, tag result feedback and one-click suggested tag buttons.
- Corrected-metadata JSON export, no-write import preview, apply-to-matched-existing-items, sidecar manifest export and sidecar ZIP export.
- Local release packaging script and minimal GitHub Actions CI.

### Known alpha limitations

- Target is Nextcloud 34 only.
- No app-owned cover cache or manual cover override.
- Source-folder OPF/JSON sidecar writing and fresh-install sidecar restore are intentionally outside the app roadmap.
- No scheduled/resumable scans or notifications.
- At this first alpha tag, no dedicated discovery landing pages existed yet.
- No shared global/admin-managed library roots.
- No custom reader, page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.
