# Alice Reader Compatibility Notes

Status: observed on Alice Nextcloud, 2026-09-04

## Installed reader/viewer apps

Enabled reader-relevant apps:

- `epubviewer` `1.9.7` — EPUB Viewer, custom app under `custom_apps/epubviewer`
- `files_pdfviewer` `7.0.0-dev.0` — built-in Nextcloud PDF viewer
- `viewer` `7.0.0-dev.0` — built-in Nextcloud viewer
- `files` `2.6.0` — Files app and `/f/{fileid}` route

`epubviewer` advertises EPUB/CBZ/PDF support and has route:

```text
epubviewer.page.showreader  GET  /apps/epubviewer/
```

It also exposes bookmark/preference routes keyed by `fileId`, but Library should not depend on those for v0.1 reading handoff.

## Test fixtures in Alice Nextcloud

Fixture folder:

```text
/LibrarySpike
```

Observed files:

```text
file_id  path                                           mimetype
82       files/LibrarySpike/reader-handoff.pdf          application/pdf
160      files/LibrarySpike/reader-handoff.epub         application/epub+zip
161      files/LibrarySpike/reader-handoff.cbz          application/comicbook+zip
```

There are also real/user-provided publication files in the same folder, useful later for scanner tests.

## `/f/{fileId}` handoff result

For all three fixture formats, Nextcloud's short file route redirects to Files with `openfile=true`:

```text
/f/82   -> /apps/files/files/82?dir=/LibrarySpike&openfile=true
/f/160  -> /apps/files/files/160?dir=/LibrarySpike&openfile=true
/f/161  -> /apps/files/files/161?dir=/LibrarySpike&openfile=true
```

This keeps Library decoupled from the specific reader app. Files/Viewer decides which installed handler opens inline.

## Direct `epubviewer` route result

The direct route works when given a user-relative file path and the full mimetype:

```text
/apps/epubviewer/?file=/LibrarySpike/reader-handoff.epub&type=application/epub+zip
/apps/epubviewer/?file=/LibrarySpike/reader-handoff.pdf&type=application/pdf
/apps/epubviewer/?file=/LibrarySpike/reader-handoff.cbz&type=application/comicbook+zip
```

Authenticated HTTP smokes returned `200` and template markers:

- EPUB: `data-fileid`, `data-filetype`, `epubviewer`
- PDF: `data-fileid`, `data-filetype`, `pdfreader`
- CBZ: `data-fileid`, `data-filetype`, `cbreader`

Wrong direct-route shapes are fragile:

- passing `type=epub` / `type=pdf` / `type=cbz` returned `Unsupported file type`;
- passing a full WebDAV URL was treated as a path and failed.

## Recommendation for Library v0.1

Keep `DefaultNextcloudFileProvider` as the default opening path:

```text
file_id -> /f/{fileId} -> Files openfile route -> installed inline viewer/reader
```

This is the right v0.1 default because:

- it only requires stable Nextcloud file IDs;
- it survives moves/renames better than path-based reader URLs;
- it delegates format/viewer decisions to Nextcloud;
- it works with the installed EPUB/PDF/CBZ viewer stack.

A future `EpubViewerProvider` can be added only if we need an explicit “Open in EPUB Viewer” action. If added, it must use:

- user-relative path, not WebDAV URL;
- full mimetype, not extension shorthand;
- app-enabled detection for `epubviewer`;
- fallback to `DefaultNextcloudFileProvider`.
