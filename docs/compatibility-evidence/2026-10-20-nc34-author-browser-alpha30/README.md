# Authors, Series and Genres browsing — alpha.30

Status: implementation and verification in progress; developer NC34 still runs alpha.29 until the deployment record below is completed.

## Changes

Authors, Series and Genres share displayed-name sorting, compact rows, three bounded cover/title previews, automatic search and retained directory navigation context. Genres now supports paging beyond 50 entries. Typeahead requests keep their lightweight response. One additive index supports active-author display-name ordering; original metadata and author identities are unchanged.

## Baseline

Developer NC34, 107,717 books: directory browser warm median 855 ms. Service first page warm median 23 ms; author prefix search 75 ms; unused-author filter 2,262 ms. Repeatable probes: `scripts/performance/author-directory.php` and `scripts/performance/author-browser.mjs`.

## Verification and deployment

Local source/package checks passed: 1,045 Python checks, PHP runtime suites, 518 inference parser vectors and 558 Vitest tests across 40 files. The six focused Playwright journeys passed on Chromium, Firefox and mobile Chromium. SQL fixture checks cover 50+5 pagination, reverse/surname ordering, distinct previews, inactive genre links and ownership isolation.

The first expanded smoke hit a Nextcloud core chunk load error while the test navigated away immediately after the editor URL changed. The harness now waits for page loading to settle before another navigation; errors remain fatal. Final repeated smoke and hosted CI are recorded below when complete.

Human acceptance: handbook H03-21. Exact signed NC33–35 certification remains a separate App Store gate.
