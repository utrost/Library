# Library

Library is an open-source Nextcloud application for managing and browsing digital publications already stored in Nextcloud.

The model is deliberately similar to Memories for photographs and Music for audio:

> Nextcloud Files remains the canonical storage. Library adds a publication-specific catalogue, metadata model, search and browsing interface on top.

## Current status

Early bootstrap / v0.1 concept. The repository currently contains a minimal installable Nextcloud app skeleton, a verified reader-handoff spike, the concept/roadmap documentation spine, a roots → scan → file-index slice, editable publication items, a first cover gallery/search and filter presentation slice, and the agreed metadata-storage direction for Nextcloud-native tags/comments.

The current development slice can:

- store user-specific Library roots in an extendable multi-root table;
- configure an initial root path through the bootstrap UI;
- manually scan all enabled roots for the current user from `/settings/user/library` through a queued background scan and record auto-refreshing scan progress, live-ish scan progress, recent scan history, status, counts, duration and summary for progress/history visibility;
- index supported EPUB/PDF/CBZ files by stable Nextcloud file ID;
- create one editable publication item for each indexed file;
- preserve user-edited metadata across rescans;
- generate absolute Nextcloud URLs for reader handoff, Files handoff and Library settings links so browser hrefs stay under the Nextcloud host;
- show indexed files and publication items with a catalogue-first Vue/Vite-backed catalogue page mounted in a conventional Nextcloud `#app-content` shell, responsive, paginated cover gallery, preview-backed covers, placeholder fallbacks and browse-only catalogue cards;
- search and filter the catalogue by title/author text, publication type, file format, scan status, exact Nextcloud tag and root-derived shelf;
- catalogue cards are browse-only while the details page owns publication metadata, tag and comment editing;
- treat Nextcloud system tags as cross-archive classification metadata exposed on catalogue cards and addable/removable from item details;
- show recent Nextcloud file comments as file-level notes/discussion on catalogue cards and item details;
- add new Nextcloud file comments from item details;
- extract first local metadata candidates from EPUB package OPF, standalone OPF files and basic PDF info dictionaries, including UTF-16 BOM encoded PDF Info strings from real PDFs;
- prefer OPF sidecars for PDF/EPUB catalogue defaults when a same-basename `.opf` or folder-level `metadata.opf` is present;
- suppress OPF sidecars as separate catalogue items when they accompany a primary PDF/EPUB/CBZ, while still allowing standalone OPF records;
- clean up stale sidecar OPF catalogue rows on rescan by marking sidecar file-index rows and removing scanner-created duplicate items.
- extract first CBZ ComicInfo.xml metadata for comic title, series, creators, publisher and date;
- extract filename/folder metadata patterns for magazine dates/issues and comic number/title names when OPF/embedded metadata is absent;
- serve CBZ first-image covers when the general Nextcloud preview pipeline cannot generate a cover.
- return cover placeholder diagnostics when previews or CBZ first-image covers are unavailable.
- provide separate Read and Show in Files actions for each catalogue item.
- sort the catalogue grid by title, recently added, publication date or format.
- mark previously indexed files as missing when a root scan no longer sees them, without deleting catalogue metadata.
- filter the catalogue by scan status (`indexed`, `metadata_error`, `missing`) and show per-card scan diagnostics for unhealthy items.
- isolate local metadata extraction failures per file so corrupt EPUB/CBZ/OPF fixtures do not abort an otherwise healthy root scan, and show the scan error in the indexed-file diagnostics.

The next milestone is to harden PDF/EPUB/OPF/CBZ metadata extraction, CBZ first-image covers, preview-backed covers and tag/comment flows with real-collection fixtures and user-edited sidecar cleanup policy.

## v0.1 direction

Library v0.1 should prove this proposition:

> Publications already stored in Nextcloud can be presented as a useful media library without moving or restructuring them.

Included later in v0.1:

- configure one or more Library roots;
- discover EPUB, PDF and CBZ files first;
- store a file-ID-based index;
- extract basic metadata and covers where practical;
- browse/search/edit publication metadata through a paginated cover gallery, shelf filters and detail/edit panels;
- open files through compatible existing Nextcloud viewers/readers;
- show the original file in Nextcloud Files.

Explicit non-goals for v0.1:

- custom EPUB/PDF/comic renderer;
- annotations, bookmarks or Library-owned reading position;
- OCR and full-text document search;
- Internet metadata lookup;
- OPDS/Kobo/Kindle integration;
- AI classification.

## Documents

- [Product concept](docs/product-concept.md)
- [UX concept and user stories](docs/ux-concept.md)
- [Active roadmap](docs/roadmap.md)
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
