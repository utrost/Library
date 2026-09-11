# Library

Library is an open-source Nextcloud app for browsing and maintaining a personal digital publication catalogue on top of files that already live in Nextcloud Files.

License: AGPL-3.0-or-later. See [LICENSE](LICENSE).

## What it does

Library adds a media-library style layer for EPUB, PDF and CBZ collections without moving or rewriting source files. Nextcloud Files remains the canonical storage location; Library indexes publications with a stable file-ID-based index, extracts useful metadata where possible, and provides a faster paginated cover gallery for browsing, search, cleanup and reader handoff.

Current highlights:

- cover-first catalogue with Compact, Gallery and Shelf views;
- home dashboard, useful views, custom collections and discovery pages for creators, years and publications/series;
- count-only useful-view and saved-collection badges that avoid fetching catalogue rows or facets for normal filters, while scanner-conflict counts retain row inspection for correctness;
- bounded ordinary catalogue/AJAX item payloads that keep tags, descriptions, diagnostics and visible card actions while leaving rich provenance to metadata-review and full detail/export/import paths;
- seven additive user-scoped indexes for measured catalogue sort/filter and file diagnostic queries, without duplicating existing scan-job/root/saved-collection indexes or adding a speculative starred index;
- in-page details drawer with keyboard browsing plus full details pages for editing;
- metadata editing for title, creators, publication/series, dates, genres, classifications, workflow status, stars, descriptions and file comments;
- search across title, creators, description, filename and folder path;
- scan, repair and review tools for missing files, metadata errors, weak metadata and scanner conflicts;
- search and filter by metadata, file format, scan status, workflow status and collection context;
- corrected-metadata export/import preview/apply for app metadata handoff;
- safe reader handoff to existing Nextcloud viewers/readers, Show in Files and Download source actions.

## Current scope

The v0.1 line is an alpha-quality personal library companion for Nextcloud 34. It is meant for private testing with real collections before wider release.

Implemented safety boundary:

- source files stay in Nextcloud Files;
- scans and metadata edits update Library-owned catalogue/index data;
- metadata import applies only after a preview step.

Not in scope for v0.1:

- built-in EPUB/PDF/comic reader;
- page-position sync or annotations;
- OCR/full-text document search;
- internet metadata lookup;
- OPDS/Kobo/Kindle integration;
- AI classification;
- shared/admin-managed library roots.

## Try it

Current source candidate: `0.1.0-alpha.161`. Review is now a native shell destination with accessible, shareable query-backed cleanup queues, focused results, explicit loading/error/empty states, and preserved back/forward-safe GET URLs. Settings remains the existing personal-settings route, while PHP detail/fallback rendering and the closed sidebar remain unchanged for later slices.

Alpha.159 fixes repair-scan root containment: missing-file recheck and metadata-error retry only restore a resolved stable-ID file when its current path is inside an enabled root owned by that user. The full local gate passed 727 Python tests, 9 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks. The unsigned alpha package was built and audited, and exact-package smoke verified checksum, install/enable, PHP, routes, scanner, Vue/API/browser and privacy behavior with `release_package_smoke_ok=true`, zero browser console errors, zero cross-origin cover requests and second-user isolation. Verify an exact archive checksum with its adjacent `.sha256` artifact; the excluded `RELEASE.md` records verification evidence without duplicating the digest.

Alpha.158 verification passed: the local gate completed 726 Python tests, 8 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks. The unsigned alpha package audit passed with 118 archive entries and produced the archive plus checksum. Exact-package smoke verified the checksum, installed and enabled alpha.158, passed PHP lint and route listing, and scanned the same 40-file root twice with `indexed=40`, `missing=0`, `errors=0`, zero catalogue rewrites, 40 markers and `source_observation_changes=0` on both scans. Live Vue/API and browser smokes passed with zero browser console errors and mutation restoration. The cover-privacy browser gate seeded and restored a legacy tracker-style value, captured catalogue/detail requests with zero non-Nextcloud cover requests, proved upload/render/revert, and proved deterministic temporary-second-user isolation with cleanup. The package gate ended with `release_package_smoke_ok=true`.

The alpha.159 upgrade command reported `No upgrade required`; therefore a fresh-database migration rehearsal remains pending. Realistic scale data gates, a signed package and App Store submission, and formal Trust-and-scale phase closure also remain deferred.

Alpha.154 adds aggregate operation instrumentation and bounded scan progress/cancellation polling. Metrics are in-memory or aggregate scan-job fields and privacy-safe Library log events; there is no external telemetry and no claim of universal speedup. Cancellation is checked initially and after 100 traversal units or 1000 ms, including unsupported nodes and nested/empty folders. A single filesystem listing/node call or extraction/storage operation remains non-preemptive. Queue wait and running/cancelled wall durations use portable epoch-second storage and are second-resolution approximations; completed/failed worker duration remains monotonic integer milliseconds.

Ordinary trusted rescans now avoid repeating metadata content extraction and catalogue-item writes when an indexed file already has an item and its current pipeline revision plus primary/selected-OPF identity, path, ETag, modification time, size and type fingerprint are unchanged. Weak or unavailable storage-provider signals fall back to extraction. This is a conservative correctness optimization; the new instrumentation does not establish a measured speedup.

Run local checks:

```bash
npm run check
```

Build a release archive:

```bash
scripts/package-release.sh
```

The package script builds Vue assets, runs Python contracts and writes `dist/library-<version>.tar.gz` plus a checksum.

## More documentation

- [User and admin guide](docs/user-guide.md)
- [Human test handbook](docs/human-test-handbook.md)
- [Public alpha test checklist](docs/alpha-test-checklist.md)
- [Current state and risk register](docs/current-state-and-risk-register.md)
- [Release process](RELEASE.md)
- [App Store listing draft](docs/app-store-listing.md)
- [App Store readiness roadmap](docs/app-store-readiness.md)
- [Changelog](CHANGELOG.md)
- [Product concept](docs/product-concept.md)
- [Active roadmap](docs/roadmap.md)
- [Human architecture review notes](docs/architecture-review.md)
- [UX concept](docs/ux-concept.md)
- [Usefulness and UX feature list](docs/usefulness-and-ux-feature-list.md)
- [Metadata storage and Nextcloud integration](docs/metadata-storage.md)
- [Personal top features scope](docs/personal-top-features.md)
- [Post-v0.1 roadmap](docs/post-v0.1-roadmap.md)
