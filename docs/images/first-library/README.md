# First library screenshots

Captured on 2026-10-05 using the signed Library 0.2.0-beta.1 archive on an isolated Nextcloud 34.0.4 instance, Chromium, English UI, light theme and a 1440 × 1000 viewport. Settings screenshots crop the relevant section; catalogue and details screenshots show the viewport. No DOM styling or image retouching was applied.

The source is the existing 40-book English Gutenberg EPUB fixture, copied into `/Books/Gutenberg English` for the disposable account. Book IDs and metadata titles are listed in [Gutenberg example books](../../gutenberg-example-books.md). The recorded first scan added all 40 books with zero metadata errors. The daily schedule is demonstration data in this disposable instance.

## Recreate the screenshots

From the repository root, provide the existing signed archive and the Gutenberg fixture. Start without `LIBRARY_BOOK_FIXTURE_ARCHIVE`: the normal helper would otherwise pre-index books, skipping the first-use journey.

```bash
export NC_VERSION=34.0.4
export LIBRARY_LISTS_PREFIX=library-first-steps
export LIBRARY_LISTS_WORK_DIR=/tmp/library-first-steps
export LIBRARY_TEST_ARCHIVE="$PWD/dist/library-0.2.0-beta.1.tar.gz"
unset LIBRARY_BOOK_FIXTURE_ARCHIVE LIBRARY_BETA_ARCHIVE
bash scripts/dev-lists-instance.sh start
source "$LIBRARY_LISTS_WORK_DIR/$NC_VERSION.env"
docker cp /tmp/library-beta-matrix/gutenberg-en-40.tar.gz "$LIBRARY_LISTS_CONTAINER:/tmp/books.tar.gz"
docker exec "$LIBRARY_LISTS_CONTAINER" sh -c 'mkdir -p "/var/www/html/data/library-smoke/files/Books/Gutenberg English" && tar -xzf /tmp/books.tar.gz -C "/var/www/html/data/library-smoke/files/Books/Gutenberg English" && chown -R www-data:www-data /var/www/html/data/library-smoke/files/Books'
docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ files:scan --path=library-smoke/files/Books
node scripts/capture-first-library.mjs
bash scripts/dev-lists-instance.sh stop
```

The capture script requires the disposable-instance ownership label and no existing Library roots. It saves the first root through the UI, queues its scan, invokes the disposable worker, captures the completed result, saves a daily schedule and captures the catalogue/sidebar. It does not download the books or run the compatibility test suite. If capture fails, stop the disposable instance after inspecting the error; use a fresh instance for another first-scan capture.

All six images were visually reviewed. The isolated instance was removed after capture. Existing release archives and developer-instance data were not changed.
