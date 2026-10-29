# Public screenshots — 0.3.0-rc.2

The five `appstore-*.png` images were captured on 2026-10-24 from the **0.3.0-rc.1 source-equivalent rehearsal package** on an isolated **Nextcloud 34.0.4** instance, Chromium, English UI, light theme and a **1440 × 1000** viewport. The six numbered first-library images remain historical alpha.38 captures from 2026-10-21. The extraction capture uses a scroll offset to keep the preview below the Nextcloud header; no image retouching was applied.

The RC source is the 40-book English Gutenberg EPUB fixture, indexed under `/LibraryLists` for a disposable account. The files were recovered from local Project Gutenberg downloads in `epub-noimages-en`, with filenames and book pages listed in [Gutenberg example books](../../gutenberg-example-books.md). A deterministic tar archive has SHA-256 `1d23e69505f4928689e22be13a452ec45c898de40d3d91ab263097e715e11e1a`. The first scan indexed 40 books with zero metadata errors. The extraction capture additionally uses a synthetic metadata tutorial file. The numbered first-library captures use the earlier `/Books/Gutenberg English` arrangement.

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
| [appstore-inference-worklist.png](../appstore-inference-worklist.png) | Per-file pattern assignment and Apply now |

All five RC App Store images were visually reviewed and are below 2 MiB. Missing-cover placeholders reflect the fixture. The six numbered settings images retain their earlier review and [maintenance audit](../../testing-maintenance-audit-2026-10-20.md#readme-and-screenshot-follow-up).

## Recreate the RC App Store images

Use a clean disposable instance and the exact signed RC archive when available. First rebuild the fixture from the 40 named Project Gutenberg EPUBs: `tar --sort=name --mtime=@0 --owner=0 --group=0 --numeric-owner -czf /tmp/gutenberg-en-40.tar.gz -C "$GUTENBERG_EN_DIR" .`. Verify the SHA-256 above before use. Set `LIBRARY_TEST_ARCHIVE` to the signed archive, `LIBRARY_BOOK_FIXTURE_ARCHIVE` to that fixture, and start `scripts/dev-lists-instance.sh` with a unique `LIBRARY_LISTS_PREFIX` and `LIBRARY_LISTS_WORK_DIR`. Execute the `AuthorBackfillJob` and `SeriesBackfillJob` through `occ background-job:execute --force-execute`; then run `SCREENSHOT_DIR=docs/images node scripts/capture-app-store.mjs`. Stop and remove the disposable instance afterwards. The capture script checks the disposable label and starts with exactly 40 indexed books.

## Recreate the historical first-library images

From the repository root, provide the signed archive and a local copy of the Gutenberg fixture. Start without `LIBRARY_BOOK_FIXTURE_ARCHIVE`: the helper would otherwise pre-index books, skipping the first-use journey. The example fixture path below is local and is not a bundled download.

```bash
export NC_VERSION=34.0.4
export LIBRARY_LISTS_PREFIX=library-public-capture
export LIBRARY_LISTS_WORK_DIR=/tmp/library-public-capture
export LIBRARY_TEST_ARCHIVE="$PWD/dist/library-0.3.0-alpha.38.tar.gz"
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

The scripts do not download the books or run the compatibility suite. Existing release archives and developer-instance data are not changed. The historical alpha.38 capture archive had SHA-256 `fff87da8366ab6ff9d553cdd73144f0eb2c8a7f383679ca3d9fa0adff06b5b61`; see its verification record. The RC App Store images and signed-package results are tracked in the [RC certification record](../../release-verification.md).
