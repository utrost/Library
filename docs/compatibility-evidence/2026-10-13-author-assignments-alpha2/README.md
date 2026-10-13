# Author assignments — 0.3.0-alpha.2

Date: 2026-10-13. Development build on `develop/0.3`; unsigned and not submitted to the App Store.

## Delivered

Reviewed author merge, selected-book reassignment, explicit separate identities for homonyms, private operation history and conditional undo. Merged spellings redirect later imports. Original metadata stays intact. Preferred names appear in catalogue/Home, personal lists and detail headings; sidebar author chips open identity pages.

## Verification

| Check | Result |
| --- | --- |
| Python repository contracts | 1,045 passed |
| Frontend unit suite | 531 passed, 36 files |
| Existing PHP runtime suite | Passed |
| Inference parser parity | 518 vectors passed |
| Translation inventory and generated catalogues | 989 keys; English, German, Arabic passed |
| Production build | Passed; one runtime module, no extra chunks |
| Assignment service integration | 22 assertions on disposable SQLite; 23 on developer MariaDB |
| Assignment browser workflow | Chromium and Firefox passed on both instances |
| Main Playwright suite, NC34.0.4 / 40 English Gutenberg books | 35 passed |
| Developer upgrade | NC34.0.3, Library alpha.1 → alpha.2; maintenance off, no pending DB upgrade |
| Developer author migration state | 107,717 synced; zero pending/conflict/failed |
| Aggregate before/after fingerprints | Matched for selected book metadata columns, tracked file rows and list definitions |

The service assertions cover ownership isolation, stale previews, self-merge rejection, selection bounds, earliest-position deduplication, preserved source metadata, redirect-based later imports, undo retaining later imports, selected-book reassignment, unchanged rescan preservation, changed-assignment undo rejection and repeat-undo rejection. Browser checks cover review/apply/undo, canonical catalogue display, creating a distinct homonym and phone-width layout without page errors. All mutations used short-lived fixture accounts, deleted afterwards; no real-user author was merged or reassigned.

The fingerprints cover the columns listed in `scripts/performance/author-migration.php`, not every database table or file byte. The catalogue count includes retained missing items and must not be read as 107,717 physically available ebooks.

Screenshots were inspected visually. An oversized checkbox was corrected and the developer browser checks repeated. The new author screenshots contain only generated fixture metadata; the main suite uses the existing 40 English Gutenberg books.

## Measurements

Developer MariaDB, real user catalogue, 11 calls per size (one first call + ten warm calls):

| Added preferred-name lookup | First | Warm median | Warm maximum |
| --- | ---: | ---: | ---: |
| 100 books | 10.09 ms | 1.82 ms | 4.23 ms |
| 500 books | 6.69 ms | 4.64 ms | 4.98 ms |

This is the additional author lookup/decoration, not complete catalogue loading. It uses one scoped relationship query per page of at most 500 books. Source credits were identical before/after decoration. Other regression work was running on the host; these are observations, not isolated load-test guarantees.

The Authors directory rendered 50 real-account rows in 1.235 seconds on the first Chromium navigation; five subsequent loads had a median of 0.997 seconds and maximum of 1.043 seconds. No page errors or phone-width overflow. This is somewhat slower than alpha.1's earlier 0.776-second warm median, measured under different host activity; it is not evidence of a causal regression or a performance improvement.

Two-book preview plus apply: approximately 3.5 ms on disposable SQLite and 4.71 ms on developer MariaDB. These small fixtures do not establish worst-case 500-book write latency.

## Reproduce

```sh
# Isolated account, service assertions, Chromium/Firefox and screenshots; cleans up account.
NC_CONTAINER=nextcloud NC_URL=http://100.123.149.120:8088 \
  EVIDENCE_DIR=/tmp/library-author-assignments node scripts/smoke-author-assignments.mjs

# Read-only real-account additional author-query timings, aggregate output only.
docker cp scripts/performance/author-display.php nextcloud:/tmp/library-author-display.php
docker exec -u www-data nextcloud php /tmp/library-author-display.php USER_ID

# Read-only directory browser measurements; temporary credential revoked afterwards.
NC_USER=USER_ID node scripts/performance/author-browser.mjs
```

Main Playwright setup follows `scripts/performance/compatibility-matrix.sh`: provision the Gutenberg fixture, create the secondary list-security account, select a unique title and start the ScanJob worker before running the 35 scenarios. The disposable deployment helper now reloads Apache after copying PHP so same-version deployments cannot retain obsolete routes in OPcache.

## Corrections and limits

An early homonym test returned HTTP 405 because Apache retained an earlier route definition after a same-version deployment. Reloading Apache corrected it; the helper now does that automatically. Translation inventory issues and version/projection contract expectations were corrected before the passing runs. These earlier failed attempts are not counted as passes.

Interactive operations stop at 500 books or an 8 MiB journal payload; they roll back completely on limits or stale state. Larger merges still need the planned background implementation. History is account-private and retained until account deletion; the UI lists the latest 20 operations. Undo conservatively rejects changed/deleted affected books and preserves unrelated later imports.

Canonical text filtering/search/sorting, duplicate detection integration, embedded sort-name import, conflict-resolution/unused-author cleanup UI, deeper concurrency/interruption coverage and the signed exact-package NC33–35 fresh/upgrade release matrix remain pending. This NC34 development evidence does not certify a 0.3 App Store release.

Final deployed service/controller/migration files and versioned frontend assets match the repository SHA-256 values in `deployment-hashes.json`. The final main suite completed in approximately 3.4 minutes: 35 passed, no failures or retries. Its known Nextcloud file-picker cancellation signal was accepted only by the existing narrowly scoped close-phase assertion.

A follow-up after the regression jobs finished measured the Authors page at 0.991 seconds first / 0.756 seconds warm median / 0.783 seconds warm maximum, close to the earlier alpha.1 observation. The additional display lookup measured 3.33 ms warm median for 100 books and 4.83 ms for 500 (warm maxima 3.49 / 10.98 ms). Both measurement sets are retained; host scheduling and cache state vary.

Final code review added identity deduplication to the display projection: distinct source credits resolving to the same person produce one canonical chip. Its focused regression is the 23rd developer service assertion and passed with a repeated Chromium/Firefox workflow. The final main 35-test run preceded this narrow projection adjustment; no new NC33/35 or signed-package verification is claimed.
