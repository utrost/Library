# Library

Library is an open-source Nextcloud app for browsing and maintaining a personal digital publication catalogue on top of files that already live in Nextcloud Files.

License: AGPL-3.0-or-later. See [LICENSE](LICENSE).

## What it does

Library adds a media-library style layer for EPUB, PDF and CBZ collections without moving or rewriting source files. Nextcloud Files remains the canonical storage location; Library indexes publications with a stable file-ID-based index, extracts useful metadata where possible, and provides a faster paginated cover gallery for browsing, search, cleanup and reader handoff.

Current highlights:

- cover-first catalogue with Compact, Gallery and Shelf views;
- server-backed Home, Shelves and Catalogue surfaces, plus custom collections and discovery pages for creators, years and publications/series;
- count-only useful-view and saved-collection badges that avoid fetching catalogue rows or facets for normal filters, while scanner-conflict counts retain row inspection for correctness;
- bounded ordinary catalogue/AJAX item payloads that keep tags, descriptions, diagnostics and visible card actions while leaving rich provenance to metadata-review and full detail/export/import paths;
- workload-led database indexes for common catalogue filters/sorts, review flags, high-cardinality facet suggestions and indexed arbitrary substring search;
- in-page details drawer with keyboard browsing that preserves native text-field arrow editing, plus full details pages for editing;
- metadata editing for title, creators, publication/series, dates, subjects, classifications, workflow status, stars, descriptions and file comments;
- indexed substring search across title, creators, publication, description, identifiers, filename and folder path;
- scan, repair and review tools for missing files, metadata errors, weak metadata, scanner conflicts and imported metadata changes;
- search and filter by metadata, file format, scan status, workflow status, review flags and collection context, with lazy high-cardinality typeahead suggestions;
- corrected-metadata export/import preview/apply for app metadata handoff, including a reviewed preview-to-apply flow;
- safe reader handoff to existing Nextcloud viewers/readers, Show in Files and Download actions.

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

Current source candidate: `0.1.0-alpha.171`. This is an unpackaged source candidate. Library now has bounded server-backed Home, Shelves and Catalogue payloads; additive server-side facets and filters; and list, compact, gallery and shelf presentation. ISBN/ISSN values have a dedicated identifier spine with normalized exact search, and catalogue queries remain distinct when identifier joins match more than one row. OPF sidecars enrich their primary publication without becoming duplicate catalogue items. Open is the primary file action and the full PHP editor remains available as Advanced details.

Settings scan operations submit asynchronously, show per-root publication counts, and keep cancellation responsive. Running jobs persist a bounded heartbeat and current path; a quiet job is reported as stale without being destructively changed to failed. Source files remain untouched.

Alpha.159 fixes repair-scan root containment: missing-file recheck and metadata-error retry only restore a resolved stable-ID file when its current path is inside an enabled root owned by that user. Alpha.158 covered 726 Python tests; that packaged evidence later passed 727 Python tests, 9 PHP runtime programs, 26 Vitest tests and `release_package_smoke_ok=true`; upgrade reported `No upgrade required`, so the fresh-database migration rehearsal remains pending; verify packaged checksums with the adjacent `.sha256` artifact and use the excluded `RELEASE.md` for release evidence. Recent source-candidate work closed the highest-risk review backlog: arbitrary substring search uses a materialized gram index, mobile filter controls use a grouped panel, high-cardinality facets use lazy typeaheads, import preview connects directly to apply, cover buttons have accessible names, and first-run setup no longer suggests a development path. Exact-package signing and fresh-database release rehearsal remain App Store readiness work rather than current source-candidate claims.
Run local checks (for Docker dev/deploy, `bin/nextcloud-background-worker.sh` runs the general Nextcloud background worker for a safe, repeatable five-minute interval):

```bash
npm run check
```

On a development instance, time the ordinary catalogue API paths with a temporary app password (removed on exit):

```bash
npm run smoke:catalogue-performance
```

The fast endpoint budget defaults to `1.0` second. Override it with `LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS`; set `LIBRARY_CATALOGUE_MEASURE_HYDRATE=1` to print the auxiliary `hydrate=1` comparison without applying the fast budget to it. `NC_URL`, `NC_USER`, and `NC_CONTAINER` select a different dev instance.

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
