# Library

Library is an open-source Nextcloud app for browsing and maintaining a personal digital publication catalogue on top of files that already live in Nextcloud Files.

License: AGPL-3.0-or-later. See [LICENSE](LICENSE).

## What it does

Library adds a media-library style layer for EPUB, PDF and CBZ collections without moving or rewriting source files. Nextcloud Files remains the canonical storage location; Library indexes publications with a stable file-ID-based index, extracts useful metadata where possible, and provides a faster paginated cover gallery for browsing, search, cleanup and reader handoff.

Current highlights:

- cover-first catalogue with Compact, Gallery and Shelf views;
- home dashboard, useful views, custom collections and discovery pages for creators, years and publications/series;
- in-page details drawer with keyboard browsing plus full details pages for editing;
- metadata editing for title, creators, publication/series, dates, genres, classifications, workflow status, stars, descriptions and file comments;
- search across title, creators, description, filename and folder path;
- scan, repair and review tools for missing files, metadata errors, weak metadata and scanner conflicts;
- search and filter by metadata, file format, scan status, workflow status and collection context;
- corrected-metadata export/import preview/apply plus read-only sidecar manifest/ZIP exports;
- safe reader handoff to existing Nextcloud viewers/readers, Show in Files and Download source actions.

## Current scope

The v0.1 line is an alpha-quality personal library companion for Nextcloud 34. It is meant for private testing with real collections before wider release.

Implemented safety boundary:

- source files stay in Nextcloud Files;
- scans and metadata edits update Library-owned catalogue/index data;
- sidecar exports are download-only and do not write into source folders;
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

Current testing candidate: `0.1.0-alpha.142`.

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
- [Changelog](CHANGELOG.md)
- [Product concept](docs/product-concept.md)
- [Active roadmap](docs/roadmap.md)
- [Human architecture review notes](docs/architecture-review.md)
- [UX concept](docs/ux-concept.md)
- [Usefulness and UX feature list](docs/usefulness-and-ux-feature-list.md)
- [Metadata storage and Nextcloud integration](docs/metadata-storage.md)
- [Personal top features scope](docs/personal-top-features.md)
- [Post-v0.1 roadmap](docs/post-v0.1-roadmap.md)
