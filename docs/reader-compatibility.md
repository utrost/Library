# Reader compatibility

Library opens indexed EPUB, PDF and CBZ files through Nextcloud's stable file route, `/f/{fileId}`. Nextcloud Files then selects an installed viewer. This keeps Library independent of private routes in EPUB and PDF viewer apps.

The reader-relevant apps in a typical setup are `files`, `viewer`, `files_pdfviewer` and, for EPUB or CBZ, an optional reader such as `epubviewer`. The default provider is `DefaultNextcloudFileProvider`. This reader-provider boundary keeps handoff behavior in one place.

The generic handoff is:

```text
/f/{fileId} -> /apps/files/files/{fileId}?dir={encodedDirectory}&openfile=true
```

Direct reader routes may need a user-relative path and full MIME type. They should be used only if the normal Files handoff cannot serve a format. This document contains no instance-specific file IDs or paths.

If a direct reader route is required, use a user-relative path, not WebDAV URL.
