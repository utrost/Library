# Author identity search and series foundation: 0.3.0-alpha.5

This is development verification, not an App Store package sign-off. The tested package supports Nextcloud 33–35. Tests used a disposable `library-smoke` account with 40 English Gutenberg books except where the populated developer library is identified below.

| Nextcloud | Install/data check | Focused browser check | Preferred-author search/provenance |
| --- | --- | --- | --- |
| 33.0.9 | Fresh install; 40 books indexed, no scan errors | Chromium and Firefox passed series navigation, edit, catalogue link, mobile layout, and page-error checks | Passed |
| 34.0.4 | Fresh install with 40 books; populated alpha.4 → alpha.5 upgrade | Chromium passed series workflow | Passed |
| 35.0.0 | Fresh install; 40 books indexed, no scan errors | Chromium and Firefox passed the same series workflow | Passed |

The first NC35 Firefox run completed the app assertions and screenshot but logged one failed Nextcloud core JavaScript chunk. A fresh rerun passed with no failed requests or page errors. The screenshots were inspected by layout and visible content rather than pixel equality: [NC33 Chromium](33.0.9-chromium-series.png), [NC33 Firefox](33.0.9-firefox-series.png), [NC34 Chromium](series-34.png), [NC35 Chromium](35.0.0-chromium-series.png), [NC35 Firefox](35.0.0-firefox-series.png).

The populated developer NC34 MariaDB upgrade synchronized 107,717 catalogue records into 188 series and 441 book relationships, with zero pending or failed records and no orphan relationships. Most records have no series. A mostly blank 500-record batch took 0.35 seconds after the guarded batch path; the remaining warm-cache backfill took about 8.75 seconds. A 30-book series catalogue filter took about 39.9 ms. An exact preferred-author-name search over the developer library returned in 478.6 ms from PHP CLI; its 2,000 matches include ordinary text matches as well as identity matches. These are single-run measurements, not latency guarantees. The developer's real books and lists were left intact; its next scheduled metadata scan will apply pipeline v9.

The focused PHP integration probe changes a disposable account's author profile, then asserts that exact preferred-name search and author-ID filtering find its book, the original book credit remains intact, and a biography-only edit preserves imported sort-name provenance. It passed on all three versions. Repeat after installing the app and scanning a disposable `library-smoke` account:

```bash
docker cp tests/php/author_identity_search_integration.php CONTAINER:/tmp/author_identity_search_integration.php
docker exec -u www-data CONTAINER env LIBRARY_DISPOSABLE=1 php /tmp/author_identity_search_integration.php
```

Repository checks after the final source changes: 1,046 Python tests, 532 Vitest tests, translation inventory (1,036 keys in en/de/ar), PHP syntax checks and `git diff --check` passed. The production asset build and OPF 2/EPUB 3 `file-as` parser checks passed before the final PHP-only search/provenance edits.

Remaining release work is tracked in [the 0.3 author plan](../../v0.3-author-management.md): large durable author merges, full canonical-name search/sort and duplicate-index integration, concurrent recovery verification, series split/merge and multiple series editing, and an exact signed-package release matrix. Subjects/genres, language mapping, publishers and work/edition identities remain separate decisions.
