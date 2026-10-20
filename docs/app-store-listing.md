# App Store listing draft

Status: copy and screenshots refreshed against signed 0.3.0-alpha.34 on 2026-10-20; final candidate review remains required before submission.
Target app version: 0.3, subject to exact archive verification.
Compatibility target: Nextcloud 33–35. Current NC34 verification is recorded for alpha.34; the final exact-package NC33–35 matrix remains a release gate.

## Short description

Publication catalogue for EPUB, PDF and CBZ files stored in Nextcloud Files.

## Full description

Library is a Nextcloud app for people who keep books, comics, magazines, papers or other digital publications in ordinary Nextcloud folders and want a catalogue view on top of those files.

It indexes selected folders, keeps the original files in Nextcloud Files, extracts and stores useful publication metadata, and presents the collection as a searchable cover-first catalogue. Users can browse by title, author, series, genre, publication or year, edit catalogue metadata, review weak or conflicting scanner results, save custom views, and hand files off to the existing Nextcloud viewer or download action.

Library does not replace Nextcloud Files. It adds publication-oriented browsing and cleanup workflows while preserving file ownership and storage in Nextcloud.

## Current scope

Included in the 0.3 development build:

- user-configured library roots;
- private reading lists with ordering and notes;
- account-private author, series and genre identities, author profiles, reviewed book moves and merges, changed-import review and conditional Undo;
- filename/path metadata suggestions, saved rules, preview, per-book approval and Apply/Undo;
- optional duplicate suggestions and explicit review decisions;
- scheduled incremental scans with periodic full reconciliation;
- private cover thumbnails and catalogue optimizations for large collections;
- background scanning for EPUB, PDF and CBZ collections;
- catalogue search, sorting, filters and paginated cover views;
- one-save book editing for publication fields, linked authors, series, genres, rating, dates, subjects, classifications and descriptions; separate workflow status, favorites and comments;
- review flows for weak metadata, scanner conflicts, missing files and metadata extraction errors;
- corrected-metadata export and import preview/apply;
- safe handoff to existing Nextcloud viewers, Show in Files and Download source actions;
- confirmed book deletion through Nextcloud, with shared OPF retention and protected-root checks.

Outside the planned 0.3 scope:

- built-in EPUB, PDF or comic reader (Library does not provide a built-in reader);
- page-position sync, annotations or reading statistics;
- OCR or full-text document search;
- internet metadata lookup;
- OPDS, Kobo or Kindle sync;
- AI classification;
- shared/admin-managed library roots.

## Privacy statement

Library runs inside the user's Nextcloud instance. Source publication files remain in Nextcloud Files. The app stores catalogue indexes, extracted metadata, user edits, scan state and saved collection settings in app-owned Nextcloud database tables.

The app does not contact external metadata services, upload publication files to third-party services, or send telemetry. Any remote access, backups, logging or sharing behavior is governed by the hosting Nextcloud instance and its installed apps.

## Support URL

Use the public issue tracker for reproducible bugs and release questions:

https://github.com/utrost/Library/issues

Bug reports are most useful when they include the app version, Nextcloud version, file type, expected behavior, actual behavior and any visible scan or browser-console error.

## Screenshot checklist

Prepared screenshots for owner review:

Captured from signed Library 0.3.0-alpha.34 on disposable Nextcloud 34.0.4 using the public Gutenberg fixture and a synthetic metadata tutorial file. All are below 2 MiB, and contain no real-library filenames or credentials:

1. [Catalogue](images/appstore-catalogue.png)
2. [Publication details](images/appstore-details.png)
3. [Authors and linked book previews](images/appstore-authors.png)
4. [Metadata extraction and live preview](images/appstore-inference.png)

[Capture provenance and reproduction](images/first-library/README.md).

Before uploading, verify that no real filenames, private folder names, user names, server names or credentials are visible.

The three screenshot URLs in `appinfo/info.xml` still target the historical `v0.2.0-beta.3` tag. Before submission, update them to the accepted published 0.3 source tag and include the author screenshot. The refreshed repository images alone do not update those pinned App Store URLs. Review the visible wording and presentation against that final tag.

## Release note draft

Library 0.3 is the planned first App Store candidate for Nextcloud 33–35. It adds reviewed author and series organization to publication catalogue browsing and metadata cleanup for files already stored in Nextcloud. Source files remain in Files, metadata import requires preview before apply, and reader behavior is delegated to the installed Nextcloud viewer stack. Final release wording and screenshots must be reviewed against the exact signed candidate.
