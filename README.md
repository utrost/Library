# Library

Library is an open-source Nextcloud application for managing and browsing digital publications already stored in Nextcloud.

License: AGPL-3.0-or-later. See [LICENSE](LICENSE).

The model is deliberately similar to Memories for photographs and Music for audio:

> Nextcloud Files remains the canonical storage. Library adds a publication-specific catalogue, metadata model, search and browsing interface on top.

## Current status

Current v0.1 development catalogue. The repository contains a conventional Nextcloud 34 app with a Vue/Vite catalogue, per-user roots, queued scans with cooperative running-job cancellation, file indexing, editable publication metadata, field-level scanner provenance, corrected-metadata export/import preview, database-backed search/filter/sort/pagination, compact cover-first browse cards and a detail workbench for editing metadata, tags and comments.

The current development slice can:

- store user-specific Library roots in an extendable multi-root table;
- configure an initial root path through the bootstrap UI;
- manually scan all enabled roots or one selected root for the current user from `/settings/user/library` through a queued background scan, use **Cancel queued scan** before a job starts or cancel queued/running scan jobs cooperatively, and record auto-refreshing scan progress, live-ish scan progress, scan scope, recent scan history, status, counts, duration and summary for progress/history visibility;
- retry rows currently marked `metadata_error` from Library settings and **Recheck missing files** from the same surface without running a full library scan or marking unrelated indexed files missing;
- index supported EPUB/PDF/CBZ files by stable Nextcloud file ID;
- create one editable publication item for each indexed file;
- preserve user-edited metadata across rescans while refreshing stored scanner candidates;
- show field-level scanner provenance, **Differs from scanner** labels, scanner-conflict review filter, bulk reset selected scanner-conflict items, single-field reset and whole-item reset-to-scanner actions on item details;
- generate absolute Nextcloud URLs for reader handoff, Files handoff and Library settings links so browser hrefs stay under the Nextcloud host;
- show indexed files and publication items with a catalogue-first Vue/Vite-backed catalogue page mounted in a conventional Nextcloud `#app-content` shell, responsive, paginated cover gallery, preview-backed covers, placeholder fallbacks and browse-only catalogue cards;
- search and filter the catalogue by title/author text, exact creator field, publication/series/periodical title, publication year, publication type, file format, scan status, scanner conflicts, exact Nextcloud tag and root-derived shelf;
- catalogue cards are browse-only, compact and cover-first on mobile and desktop: the default card surface is cover, title, **Read** and **Details**, while secondary metadata/actions stay behind the Details disclosure; the details page owns publication metadata, tag and comment editing;
- treat Nextcloud system tags as cross-archive classification metadata exposed on catalogue cards and addable/removable from item details;
- show recent Nextcloud file comments as file-level notes/discussion on catalogue cards and item details;
- add new Nextcloud file comments from item details;
- extract first local metadata candidates from EPUB package OPF, standalone OPF files and basic PDF info dictionaries, including UTF-16 BOM, PDF hex Info strings, literal octal escapes, nested PDF literal parentheses, non-BOM single-byte PDF Info strings, PDF Subject-as-subtitle and normalized PDF CreationDate/ModDate values from real PDFs;
- prefer OPF sidecars for PDF/EPUB catalogue defaults when a same-basename `.opf` or folder-level `metadata.opf` is present;
- suppress OPF sidecars as separate catalogue items when they accompany a primary PDF/EPUB/CBZ, while still allowing standalone OPF records;
- clean up stale sidecar OPF catalogue rows on rescan by marking sidecar file-index rows and removing scanner-created duplicate items while keeping manually edited OPF sidecar items visible as standalone records until an explicit merge/migration exists;
- extract first CBZ ComicInfo.xml metadata for comic title, series, creators, publisher and date;
- extract filename/folder metadata patterns for magazine dates/issues and comic number/title names when OPF/embedded metadata is absent;
- EPUB cover extraction landed: extract EPUB cover images from EPUB package manifests when Nextcloud preview cannot provide a cover;
- expose **Refresh cover preview** on item details to retry the cover route with no-store response headers when a cover looks stale;
- attach a cover-quality explanation to the **Refresh cover preview** action so the fallback ladder is available as help text without taking over the detail page;
- serve CBZ first-image covers when the general Nextcloud preview pipeline cannot generate a cover;
- return cover diagnostics on every cover response, including preview-backed, CBZ first-image and placeholder covers;
- provide separate Read, Show in Files and Download source actions for each catalogue item;
- sort the catalogue grid by title, recently added, publication date, series/periodical or format;
- mark previously indexed files as missing when a root scan no longer sees them, without deleting catalogue metadata, and recheck only those missing rows later when a file may have returned.
- forget missing item catalogue entries from the details page after their backing file is no longer seen, without deleting source files.
- edit, enable/disable and delete Library roots from the personal settings surface with typed root-delete confirmation, without deleting source files from Nextcloud Files.
- export corrected metadata as a side-effect-free JSON download for user-edited catalogue rows.
- export a read-only sidecar manifest and a sidecar ZIP of proposed `.library.json` files without writing sidecars into source folders.
- preview corrected metadata imports before writing changes, then apply matched corrected metadata to existing Library items when the preview is acceptable.
- star/unstar publications from item details, show starred state on compact catalogue cards, filter the catalogue with `starred=1`, and carry starred state through corrected-metadata export/import without changing scanner provenance.
- record Library **Read** clicks as `last_opened_at`, route them through a Library redirect to Nextcloud's `/f/{fileId}` handoff, sort by recently opened, and carry last-opened state through corrected-metadata export/import without treating Files/download opens as tracked activity.
- set a Library-native workflow status on publication details, filter with `workflowStatus=<status>`, show the status in catalogue Details, and carry it through corrected-metadata export/import as user catalogue state separate from operational scan status and Nextcloud tags.
- store Library-native genres and classifications as multi-value catalogue metadata, edit them on details pages with simple suggestions, filter with `genre=<value>` or `classification=<value>`, show them in catalogue Details, and carry them through corrected-metadata export/import separate from Nextcloud tags.
- store a Library-native description on catalogue items, edit it on details pages, include it in database-backed catalogue search, and carry it through corrected-metadata export/import without crowding compact cards by default.
- filter the catalogue by scan status (`indexed`, `metadata_error`, `missing`) and show per-card scan diagnostics for unhealthy items.
- query catalogue search, filters, sort modes and pagination through database-backed item queries instead of loading the full catalogue into app-layer arrays.
- isolate local metadata extraction failures per file so corrupt EPUB/CBZ/OPF fixtures do not abort an otherwise healthy root scan, and show the scan error in the indexed-file diagnostics.

The next milestone is release hardening around real collection use: metadata repair/review flows, scan repair controls, cover quality, first-run onboarding, and publication/creator/year landing pages.

## v0.1 direction

Library v0.1 should prove this proposition:

> Publications already stored in Nextcloud can be presented as a useful media library without moving or restructuring them.

Current personal-library metadata now includes Library-native genres and classifications alongside stars, last-opened activity, workflow status and description text.

Current v0.1 proof includes or is converging on:

- configure one or more Library roots;
- discover EPUB, PDF and CBZ files first;
- store a file-ID-based index;
- extract basic metadata and covers where practical, with extractor failures isolated per file;
- browse/search/filter/sort publication metadata through a database-backed paginated cover gallery with compact cards, shelf filters, publication filters and detail/edit pages;
- open files through compatible existing Nextcloud viewers/readers;
- show the original file in Nextcloud Files and download the original source file.

Explicit non-goals for v0.1:

- custom EPUB/PDF/comic renderer;
- page-position bookmarks, annotations or reader-owned reading position; Library-native star/bookmark support and last-opened activity exist for catalogue items;
- OCR and full-text document search;
- Internet metadata lookup;
- OPDS/Kobo/Kindle integration;
- AI classification.

## Documents

- [Product concept](docs/product-concept.md)
- [User and admin guide](docs/user-guide.md)
- [Human architecture review notes](docs/architecture-review.md)
- [Public alpha test checklist](docs/alpha-test-checklist.md)
- [Changelog](CHANGELOG.md)
- [Release process](RELEASE.md)
- [UX concept and user stories](docs/ux-concept.md)
- [Active roadmap](docs/roadmap.md)
- [Personal top features scope](docs/personal-top-features.md)
- [Original concept summary](docs/concept.md)
- [v0.1 technical specification draft](docs/v0.1-technical-spec.md)
- [Metadata storage and Nextcloud integration](docs/metadata-storage.md)
- [Reader handoff spike](docs/reader-handoff-spike.md)
- [Alice reader compatibility notes](docs/alice-reader-compatibility.md)
- [Alice scale pilot notes](docs/alice-scale-pilot.md)

## Development target

The first integration target is a private Nextcloud Docker instance on Alice running Nextcloud 34.

The app id is:

```text
library
```

For the current Alice sandbox, clone this repository outside the Nextcloud data volume and copy the working tree into `/var/www/html/custom_apps/library` inside the container for each smoke test. A host symlink is not used yet because `/home/uwe` is not world-traversable from the container user.

## Local checks and packaging

Run the local gate with:

```bash
npm run check
```

Build a release archive with:

```bash
scripts/package-release.sh
```

The package script builds Vue assets, runs Python contracts and writes `dist/library-<version>.tar.gz` plus a SHA-256 checksum.
