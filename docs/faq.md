# FAQ and troubleshooting

For a guided introduction with screenshots, start with [Your first library](first-library.md).

This page covers the first installation and scan. For normal use, see the [user and admin guide](user-guide.md).

## How do I install Library?

Library currently supports Nextcloud 33–35, with runtime smoke coverage on 33.0.9, 34.0.4 and 35.0.0. Install the packaged archive so it creates one `custom_apps/library` directory, set ownership to the web-server account, and run:

```bash
sudo -u www-data php /var/www/html/occ app:enable library
```

Exact paths, the PHP command and the web-server account vary between packages and containers. See the [README install section](../README.md#install). Do not copy `src/`, tests or development dependencies into a production app directory; use the release archive.

## Why does Library not appear in the app navigation?

Check that the app is enabled and compatible:

```bash
sudo -u www-data php /var/www/html/occ app:list
sudo -u www-data php /var/www/html/occ status
```

Library should be listed under enabled apps and Nextcloud should report a supported version (33–35 for the current candidate). If enabling fails, inspect the command output and Nextcloud log before retrying. Confirm that the archive extracted to `custom_apps/library/appinfo/info.xml`, not a nested versioned directory.

## Why is my first scan still queued?

Library scans run as Nextcloud background jobs. Configure Nextcloud to use system Cron and run `cron.php` at the normal interval. For a one-off diagnostic, an administrator can run:

```bash
sudo -u www-data php -f /var/www/html/cron.php
```

Then refresh **Library settings**. A queued job that never starts usually indicates that Nextcloud background jobs are not running. A running job with a current path or heartbeat is active; a stale warning means the heartbeat has stopped and the server log should be checked.

## Why is the catalogue count lower than the file count?

Library indexes supported publication files: PDF, EPUB, CBZ and standalone OPF. Paired same-basename OPF files and folder-level `metadata.opf` files enrich a primary publication and are intentionally hidden as separate catalogue items. Unsupported files are ignored. Use scan diagnostics to find metadata errors or missing records.

## Why is some metadata sparse or wrong?

Library reads local embedded metadata and conservative filename/folder hints. It does not contact internet metadata services. Open **Advanced details** to correct fields. Manual Library edits are preserved across rescans; current scanner candidates remain available for comparison and reset.

## Does Library change or delete my source files?

Normal scanning and Library metadata editing do not rewrite publication files. Library stores its index, corrected metadata and workflow state in app-owned database tables. Deleting a Library root removes that root's Library catalogue data, not the files in Nextcloud Files. Nextcloud tag and comment actions intentionally update the backing file's Nextcloud metadata.

## Why does an author's preferred name differ from the book's credit?

In 0.3, an author identity has a preferred display name while each book retains its imported credit. This lets “John Doe” and “Doe, John” point to one person after review without changing ebook metadata. Open **Authors** to edit the profile or reassign a book. Ambiguous initials and namesakes require your decision; Library does not silently merge them.

## How do I move books between series?

Open **Series**, choose the source and expand **Move or merge books**. Select books for a partial move, or leave the selection empty for a whole-series merge. Review the preview before confirming. The [series guide](v0.3-series-management.md) explains redirects, limits and conditional Undo.

## Why does a changed author or series import need review?

Library protects a manually chosen relationship when imported credits, series name or part change. Compare the current assignment with the incoming values in the relevant **Review imported … changes** queue, then keep your assignment or use the new import. An unchanged rescan preserves that decision; a later source change can ask again.

## What should I back up?

Use the normal Nextcloud backup procedure for the database, configuration, custom apps and data directory, including appdata. Keep those parts from the same backup point. This is the full recovery path for reading lists, author and series edits, biographies, portraits and manual book corrections. **Export corrected metadata** is a partial, book-level interchange file; it cannot restore those other records. See the [recovery guide](recovery.md).

## Why is the catalogue slow?

First confirm that scanning is complete and background jobs are healthy. Avoid loading hundreds of cards per page; the default bounded page size is intended for normal browsing. High-cardinality publisher, tag, classification and folder controls use remote suggestions instead of eager full lists. Administrators diagnosing a development or release candidate can run the repository's `npm run smoke:catalogue-performance` gate against a test instance; its fast-path target defaults to one second.

## How do I report a useful problem?

Include the Library version, Nextcloud version, database type, browser/device, approximate item count and file formats. Name the exact page or scan step, expected and actual behavior, and include bounded log or browser-console excerpts. Do not publish filenames, paths, credentials or private metadata.
