# Public screenshots — alpha.34

Captured on 2026-10-20 using the existing signed Library **0.3.0-alpha.34** archive on an isolated **Nextcloud 34.0.4** instance, Chromium, English UI, light theme and a **1440 × 1000** viewport. Settings images crop the relevant section; browsing images show the viewport. No image retouching was applied. The extraction capture uses a scroll offset to keep the preview below the Nextcloud header.

The source is the 40-book English Gutenberg EPUB fixture, copied into `/Books/Gutenberg English` for a disposable account. Book IDs and metadata titles are listed in [Gutenberg example books](../../gutenberg-example-books.md). The first scan added all 40 books with zero metadata errors. The daily schedule is demonstration data. The extraction screenshot additionally uses a synthetic EPUB named `Pride and Prejudice - Jane Austen (1813).epub`; it is a filename tutorial, not a complete copy of that book. The final disposable catalogue therefore contains 41 records.

## Image inventory

| Image | Screen |
|---|---|
| [01-add-folder.png](01-add-folder.png) | Add a shelf with its folder and label filled |
| [02-saved-folder.png](02-saved-folder.png) | Saved shelf before its first scan |
| [03-scan-complete.png](03-scan-complete.png) | Completed scan: 40 indexed, zero errors |
| [04-browse.png](04-browse.png) | All publications in Covers view |
| [05-book-details.png](05-book-details.png) | Quick view sidebar |
| [06-automatic-scans.png](06-automatic-scans.png) | Daily scan schedule |
| [appstore-catalogue.png](../appstore-catalogue.png) | Catalogue overview |
| [appstore-details.png](../appstore-details.png) | Full Book details editor |
| [appstore-authors.png](../appstore-authors.png) | Author directory and linked book previews |
| [appstore-inference.png](../appstore-inference.png) | Filename extraction and selected-record preview |

All ten images were visually reviewed. Missing-cover placeholders reflect the fixture. The settings captures also expose narrow Add a shelf fields and an overlapping long Changes found label; these are recorded in the [maintenance audit](../../testing-maintenance-audit-2026-10-20.md#readme-and-screenshot-follow-up) for human follow-up.

## Recreate the screenshots

From the repository root, provide the signed archive and a local copy of the Gutenberg fixture. Start without `LIBRARY_BOOK_FIXTURE_ARCHIVE`: the helper would otherwise pre-index books, skipping the first-use journey. The example fixture path below is local and is not a bundled download.

```bash
export NC_VERSION=34.0.4
export LIBRARY_LISTS_PREFIX=library-public-capture
export LIBRARY_LISTS_WORK_DIR=/tmp/library-public-capture
export LIBRARY_TEST_ARCHIVE="$PWD/dist/library-0.3.0-alpha.34.tar.gz"
GUTENBERG_ARCHIVE=/tmp/library-beta2/gutenberg-en-40.tar.gz
unset LIBRARY_BOOK_FIXTURE_ARCHIVE LIBRARY_BETA_ARCHIVE
bash scripts/dev-lists-instance.sh start
source "$LIBRARY_LISTS_WORK_DIR/$NC_VERSION.env"
docker cp "$GUTENBERG_ARCHIVE" "$LIBRARY_LISTS_CONTAINER:/tmp/books.tar.gz"
docker exec "$LIBRARY_LISTS_CONTAINER" sh -c 'mkdir -p "/var/www/html/data/library-smoke/files/Books/Gutenberg English" && tar -xzf /tmp/books.tar.gz -C "/var/www/html/data/library-smoke/files/Books/Gutenberg English" && chown -R www-data:www-data /var/www/html/data/library-smoke/files/Books'
docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ files:scan --path=library-smoke/files/Books
node scripts/capture-first-library.mjs

# Complete the newly indexed fixture's author and series links before capture.
for job_class in AuthorBackfillJob SeriesBackfillJob; do
    job_id="$(docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ background-job:list --output=json | python3 -c 'import json,sys; jobs=[j for j in json.load(sys.stdin) if j["class"].endswith(sys.argv[1])]; assert len(jobs)==1, jobs; print(jobs[0]["id"])' "$job_class")"
    docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ background-job:execute "$job_id" --force-execute
done
SCREENSHOT_DIR=docs/images node scripts/capture-app-store.mjs
bash scripts/dev-lists-instance.sh stop
```

Both scripts require the disposable-instance ownership label. The first script requires no existing Library roots, saves the shelf through the UI, queues its scan, invokes the worker, captures the completed result and saves a daily schedule. The second starts with the 40-book catalogue and creates its synthetic extraction fixture after capturing browsing screens. Use a fresh instance when repeating the complete sequence; these are first-use capture tools, not idempotent maintenance commands. If capture fails, stop the disposable instance after inspecting the error.

The scripts do not download the books or run the compatibility suite. Existing release archives and developer-instance data are not changed. The signed archive used here has SHA-256 `e71e5f197573d99e2517de25afda2eb17f8343d1a112c3f4da1dfe8d43bdb551`. The current source README and screenshots are documentation updates and do not imply that this preserved archive was rebuilt.
