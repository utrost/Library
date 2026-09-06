# Alice scale pilot notes

Status: first staged copy-based pilot completed on Alice dev Nextcloud, 2026-09-05.

## Source replica counts at pilot time

```text
/mnt/compute/Nextcloud/Books
supported files: 817
supported size: 13.72 GiB
formats: PDF, EPUB

/mnt/compute/Nextcloud/Projects/Scanned books
supported files: 786
supported size: 71.73 GiB
formats: PDF
```

The replica folders are outside the dev Nextcloud data tree, so the first pilot copied staged samples into a temporary `/LibraryScalePilot/...` folder under the dev user's files and removed them after each stage.

## Staged pilot results

All timings are from the Alice dev container path with the app served over authenticated HTTP using a temporary app password. Temporary roots, copied files, app DB rows and the token were removed after the run.

```text
10 Books sample
copied: 10 files / 0.58 MiB
Nextcloud files:scan: 0.33 s
Library scan route: 0.12 s
indexed files: 10
catalogue items: 9 before UTF-16 PDF fix; fixed regression verified separately with 20/20 items
page smoke: HTTP 200, pagination summaries OK

100 Books sample
copied: 100 files / 29.91 MiB
Nextcloud files:scan: 0.35 s
Library scan route: 1.09 s
indexed files: 100
catalogue items: 93 before UTF-16 PDF fix
page smoke: HTTP 200, pagination summaries OK

100 mixed sample
copied: 50 Books + 50 Scanned files / 801.90 MiB
Nextcloud files:scan: 0.33 s
Library scan route: 1.02 s
indexed files: 100
catalogue items: 96 before UTF-16 PDF fix
page smoke: HTTP 200, pagination summaries OK

1000 smallest mixed sample
copied: 767 Books + 233 Scanned files / 16.52 GiB
formats: 694 PDF, 306 EPUB
Nextcloud files:scan: 4.22 s
Library scan route: 43.39 s
indexed files: 1000
catalogue items: 953 before UTF-16 PDF fix
page smoke: HTTP 200, pagination summaries OK
```

## Finding: UTF-16 PDF Info strings

The pilot surfaced real PDFs with PDF Info strings encoded as UTF-16 with BOM bytes. The first PDF extractor treated the raw bytes as UTF-8 and then attempted to insert them into `library_items.title`, producing MariaDB errors such as:

```text
Incorrect string value: '\xFE\xFF\x00C\x00h...' for column `nextcloud`.`oc_library_items`.`title`
```

The fix decodes `\xFE\xFF` as UTF-16BE and `\xFF\xFE` as UTF-16LE before inserting PDF Info title/author values. A 20-file real-sample verification after the fix produced:

```text
indexed files: 20
catalogue items: 20
missing item rows: 0
```

## Current bottleneck

The catalogue render path is no longer the first scale blocker for the tested range: paginated pages returned in roughly 40–90 ms for 25-card and 500-card views after scans.

The next bottleneck is the synchronous Library scan route. On the 1000-file / 16.52 GiB sample it took about 43 s. Before larger or repeated full-replica runs, the scanner should gain progress visibility and/or an asynchronous job path.
## Generated stress pilot, 2026-09-06

Uwe asked for a larger generated-document ladder: 100 documents, then 1k, then 10k. This run used temporary generated minimal PDF fixtures under `/LibraryScale-<count>-<timestamp>`, temporarily disabled existing Library roots so the scan only measured the generated root, decoded catalogue initial state for pagination checks, then removed fixture files, Library DB rows, temporary root and app password after each stage.

The reusable harness is checked in as:

```text
npm run smoke:scale -- <count>
```

Results:

```text
100 generated PDFs
generate files: 0.20 s
Nextcloud files:scan: 0.43 s
Library scan: 1.23 s
indexed files: 100
catalogue items: 100
pagination: 25/page 1, 25/page 2, 100/page 1 and 500/page 1 all OK
cleanup: 100 items, 100 file-index rows, 1 temp root, temp token removed

1000 generated PDFs
generate files: 1.67 s
Nextcloud files:scan: 1.08 s
Library scan: 9.12 s
indexed files: 1000
catalogue items: 1000
pagination: 25/page 1, 25/page 2, 100/page 1 and 500/page 1 all OK
cleanup: 1000 items, 1000 file-index rows, 1 temp root, temp token removed

10000 generated PDFs
generate files: 13.00 s
Nextcloud files:scan: 7.50 s
Library scan: 91.19 s
indexed files: 10000
catalogue items: 10000
pagination: 25/page 1, 25/page 2, 100/page 1 and 500/page 1 all OK
cleanup: 10000 items, 10000 file-index rows, 1 temp root, temp token removed
```

Observed page latencies on the 10k stage stayed under a quarter second for the sampled paginated pages:

```text
limit=25 page=1: 0.21 s
limit=25 page=2: 0.16 s
limit=100 page=1: 0.16 s
limit=500 page=1: 0.19 s
```

Interpretation: paginated catalogue rendering is not the first blocker for 10k generated lightweight documents. The synchronous Library scan remains roughly linear in this synthetic case, about 91 s for 10k. Real documents with heavier PDF/EPUB/CBZ metadata and preview behaviour may be slower; keep real-data pilots separate from generated stress.

## Real-sample pilot harness, 2026-09-06

Generated stress is intentionally separate from real-document pilots. Real samples exercise the metadata paths that synthetic tiny PDFs do not: EPUB package metadata, large/scanned PDFs, UTF-16 PDF Info strings and future CBZ fixtures.

The reusable harness is checked in as:

```text
npm run smoke:real-scale -- <count>
```

Default source roots on Alice host:

```text
/mnt/compute/Nextcloud/Books
/mnt/compute/Nextcloud/Projects/Scanned books
```

The source folders are host-visible but not mounted inside the Nextcloud container. The harness therefore selects supported real files smallest-first on the host, copies them into a temporary `/LibraryRealScale-<count>-<timestamp>` user folder inside the container data tree, runs `occ files:scan`, disables other Library roots, adds a temporary Library root, runs the Library scanner, verifies that every selected supported file produced a catalogue item, verifies paginated catalogue initial state, then removes temporary files, DB rows, root and app password.

Override sources with:

```text
REAL_SCALE_SOURCES="/path/one::/path/two" npm run smoke:real-scale -- 20
```

First checked result after adding the harness:

```text
100 real smallest-first sample
selected: 100 files / 29.91 MiB
formats: 44 PDF, 56 EPUB
Nextcloud files:scan: 0.60 s
Library scan: 1.34 s
indexed files: 100
catalogue items: 100
missing item rows: 0
pagination: 25/page 1, 25/page 2 and 100/page 1 all OK
cleanup: 100 items, 100 file-index rows, 1 temp root, temp token removed
```

The first 100-file run exposed another real PDF Info encoding case: `Splitgrade Prospekt - Jürgen Heiland.pdf` had a single-byte high character in `/Author`, producing an invalid UTF-8 insert for `creators`. The PDF Info decoder now keeps the earlier UTF-16 BOM handling and falls back to ISO-8859-1 conversion when a non-BOM string is not valid UTF-8.
