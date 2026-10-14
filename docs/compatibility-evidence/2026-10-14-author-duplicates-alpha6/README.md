# Author-aware duplicates: 0.3.0-alpha.6

Development source verification on 2026-10-14. This is not a signed App Store release matrix. The focused fixture creates two real EPUBs in a temporary account, sets similar titles with distinct source credits, and removes the account afterward. It is separate from the 40-book English Gutenberg compatibility fixture used for the broader alpha.5 workflow.

| Nextcloud | Fresh install | Focused merge/index/undo check |
| --- | --- | --- |
| 33.0.9 | `0.3.0-alpha.6` enabled | Passed |
| 34.0.4 | `0.3.0-alpha.6` enabled | Passed |
| 35.0.0 | `0.3.0-alpha.6` enabled | Passed |

Each focused run reported zero duplicate suggestions before the author merge and one afterward. It checked similar-title matching through refreshed index entries, cleared prior decisions on merge and undo, returned to zero suggestions after undo, and confirmed that book source credits remained intact. It also checked that an exact preferred-name creator filter includes the differently credited book after merge and excludes it after undo. The disposable instances and fixture accounts were removed.

On the populated developer NC34.0.3 MariaDB instance, the focused check also passed. The full duplicate browser workflow passed in Chromium and Firefox: 19 fixture books, 24 matches, series conflict suppression, cancellation, background jobs, paging, preference/keep/dismiss/reset decisions, mobile layout, CSRF handling and unchanged files/metadata. Author assignment and imported-credit conflict browser workflows passed in both engines after the service changes. The installed version was confirmed as `0.3.0-alpha.6`.

The developer account had 107,717 catalogue records at measurement time. An opportunistic lookup on the first 100 indexed nonmissing books used 11 SQL statements per run and found eight match entries, with no limited source. Five CLI runs measured 496.12, 23.56, 22.96, 23.09 and 22.70 ms; warm median was 23.09 ms. The first run includes cold-cache effects. The large creator-filter fallback returned 1,625 “Unbekannt” books, with 100 on the first page, in a single 438.28 ms CLI observation. The sample is not random and these are service timings, not browser latency or a scale guarantee.

Reproduce the focused check after installing this source:

```sh
NC_CONTAINER=CONTAINER node scripts/smoke-duplicate-author-identities.mjs
docker cp scripts/performance/duplicate-identity-lookup.php CONTAINER:/tmp/duplicate-identity-lookup.php
docker exec -u www-data CONTAINER php /tmp/duplicate-identity-lookup.php USER_ID
```

The complete local repository gate passed: 1,046 Python tests, 532 Vitest tests, translation inventory, PHP runtime checks including 63 duplicate-matcher assertions, inference parser parity, production build, whitespace and Markdown links. The signed exact-package fresh/upgrade matrix remains before App Store submission. Durable author merges beyond 500 books, partial preferred-name search/sort and typeahead, portable identity decisions, saved-filter migration, and series merge/split remain open.
