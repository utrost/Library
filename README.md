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
- scan, repair and review tools for missing files, metadata errors, weak metadata, scanner conflicts and imported metadata changes, with safe user-facing diagnostics;
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

## Install
Library currently targets Nextcloud 34. Until an App Store release exists, install a packaged archive as a Nextcloud administrator:
```bash
tar -xzf library-<version>.tar.gz -C /var/www/html/custom_apps
chown -R www-data:www-data /var/www/html/custom_apps/library
sudo -u www-data php /var/www/html/occ app:enable library
```

The archive must contain one top-level `library/` directory. Paths and the web-server account vary by installation; container users can run the same commands with `docker exec`. After enabling the app, each user opens **Library settings**, adds a folder already visible in Nextcloud Files, and selects **Scan this root**. See the [user and admin guide](docs/user-guide.md) for the full first-scan walkthrough and [FAQ and troubleshooting](docs/faq.md) for common problems.

For a source checkout, install Node 24/npm 11 and run `npm ci && npm run package:release`; then install the resulting `dist/library-<version>.tar.gz` with the archive commands above. Source checkouts are for development; the release archive is the supported handoff format.
## Try it
Current candidate: `0.1.0-alpha.174`. The current unsigned archive has passed exact-package installation, deployment on the private Nextcloud 34 test instance, and a schema-only fresh SQLite Nextcloud 34 rehearsal. Library now has bounded server-backed Home, Shelves and Catalogue payloads; additive server-side facets and filters; and list, compact, gallery and shelf presentation. ISBN/ISSN values have a dedicated identifier spine with normalized exact search, and catalogue queries remain distinct when identifier joins match more than one row. OPF sidecars enrich their primary publication without becoming duplicate catalogue items. Open is the primary file action and the full PHP editor remains available as Advanced details.

Settings scan operations submit asynchronously, show per-root publication counts, and keep cancellation responsive. Running jobs persist a bounded heartbeat and current path; a quiet job is reported as stale without being destructively changed to failed. Source files remain untouched.

Historical package evidence remains reproducible: Alpha.159 fixes repair-scan root containment: its lineage covered 726 Python tests and later passed 727 Python tests, 9 PHP runtime programs, 26 Vitest tests and `release_package_smoke_ok=true`; its upgrade reported `No upgrade required`. Verify a packaged candidate with its adjacent `.sha256` artifact; detailed evidence stays in the excluded `RELEASE.md`. The schema-only fresh-install rehearsal proved package enablement and migration creation but did not exercise a realistic first catalogue.

The reproducible mixed-library gate (`npm run smoke:fresh-install-mixed`) covers a disposable Nextcloud 34 install followed by 1,000 balanced synthetic PDF, EPUB, CBZ and standalone OPF publications, catalogue/API/browser smoke and the one-second fast-endpoint budget. It also runs the checked-in Playwright workflows catalogued in `tests/gui/catalogue.yaml` in desktop Chromium, desktop Firefox and mobile Chromium. Install their pinned browser revisions once with `npx playwright install chromium firefox`; use `LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed` for the smaller pull-request rehearsal. Against an explicitly provisioned disposable instance, `npm run test:gui`, `npm run test:gui:desktop`, `npm run test:gui:mobile`, and Playwright `--grep` expressions run all or selected workflows; explicit `PW_BASE_URL`, `PW_USER`, `PW_PASSWORD`, and deterministic fixture variables prevent fallback to a personal Nextcloud instance. Exact run evidence is recorded in the App Store readiness roadmap. Package signing and human alpha acceptance remain separate release gates. Recent hardening also neutralizes spreadsheet formulas in metadata-error TSV exports and replaces raw exception exposure with bounded public diagnostics plus server-only exception context.

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
- [User and admin guide](docs/user-guide.md) · [FAQ and troubleshooting](docs/faq.md) · [Human test handbook](docs/human-test-handbook.md)
- [Public alpha test checklist](docs/alpha-test-checklist.md) · [Current state and risk register](docs/current-state-and-risk-register.md) · [Active roadmap](docs/roadmap.md)
- [Release process](RELEASE.md) · [Changelog](CHANGELOG.md) · [App Store listing draft](docs/app-store-listing.md) · [App Store readiness roadmap](docs/app-store-readiness.md)
- [Product concept](docs/product-concept.md) · [Human architecture review notes](docs/architecture-review.md) · [Nextcloud app guidelines extracted from Library](docs/nextcloud-app-guidelines.md) · [UX concept](docs/ux-concept.md)
- [Usefulness and UX feature list](docs/usefulness-and-ux-feature-list.md) · [Metadata storage and Nextcloud integration](docs/metadata-storage.md) · [Personal top features scope](docs/personal-top-features.md) · [Post-v0.1 roadmap](docs/post-v0.1-roadmap.md)
