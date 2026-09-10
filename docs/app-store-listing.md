# App Store listing draft

Status: draft copy for a future stable Nextcloud App Store submission.  
Target app version: `0.1.0` after the alpha candidate is accepted.  
Compatibility: Nextcloud 34 only until another version is tested.

## Short description

Publication catalogue for EPUB, PDF and CBZ files stored in Nextcloud Files.

## Full description

Library is a Nextcloud app for people who keep books, comics, magazines, papers or other digital publications in ordinary Nextcloud folders and want a catalogue view on top of those files.

It indexes selected folders, keeps the original files in Nextcloud Files, extracts and stores useful publication metadata, and presents the collection as a searchable cover-first catalogue. Users can browse by title, creator, publication or year, edit catalogue metadata, review weak or conflicting scanner results, save custom views, and hand files off to the existing Nextcloud viewer or download action.

Library does not replace Nextcloud Files. It adds publication-oriented browsing and cleanup workflows while preserving file ownership and storage in Nextcloud.

## Current scope

Included in the v0.1 line:

- user-configured library roots;
- background scanning for EPUB, PDF and CBZ collections;
- catalogue search, sorting, filters and paginated cover views;
- metadata editing for publication fields, creators, dates, genres, classifications, workflow status, stars, descriptions and comments;
- review flows for weak metadata, scanner conflicts, missing files and metadata extraction errors;
- corrected-metadata export and import preview/apply;
- safe handoff to existing Nextcloud viewers, Show in Files and Download source actions.

Not included in v0.1:

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

Prepare screenshots from a clean test instance with non-private sample files:

1. Catalogue gallery or shelf view showing several covers and active search/filter controls.
2. Details page or drawer showing editable publication metadata.
3. Useful views or metadata review workbench showing cleanup-oriented navigation.
4. Settings page showing configured library roots and scan controls without private paths.

Before uploading screenshots, verify that no real filenames, private folder names, user names, server names or credentials are visible.

## Release note draft

Library `0.1.0` is the first stable App Store candidate for Nextcloud 34. It focuses on private publication catalogue browsing and metadata cleanup for files already stored in Nextcloud. It is intentionally conservative: source files remain in Files, metadata import requires preview before apply, and reader behavior is delegated to the installed Nextcloud viewer stack.
