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
