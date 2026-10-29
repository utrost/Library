# Library 0.3.0-rc.1 certification

Status: the signed candidate passed the six-case exact-package matrix and is installed on developer NC34. The owner accepted the current candidate on 2026-10-29. The [GitHub prerelease](https://github.com/utrost/Library/releases/tag/v0.3.0-rc.1) is public; App Store registration and submission await an owner token.

The signed RC archive is `dist/library-0.3.0-rc.1.tar.gz`, SHA-256 `caffb1ac1a93b961813d75270861d8185dcabfff95d17c233bade68e9e45eb07`, built once from merged commit `44fe95c8a769af27e5df67cff9d8dde14cb30b24`. Its detached App Store signature, SPDX SBOM and provenance are in `dist/`; the archive passed package, signature and module audits. Later certification-helper and documentation edits did not alter the archive.

## Disposable screenshot fixture

- Forty Project Gutenberg English EPUBs from the filenames documented in [Gutenberg example books](../../gutenberg-example-books.md).
- Deterministic fixture archive SHA-256: `1d23e69505f4928689e22be13a452ec45c898de40d3d91ab263097e715e11e1a`.
- Isolated Nextcloud 34.0.4 account: 40 indexed, zero metadata errors; author and series backfills completed before capture.
- Five 1440 × 1000 App Store images refreshed and visually inspected. [Capture provenance](../../images/first-library/README.md) records the source and reproduction steps.
- An initial capture failed because a concurrent SQLite write locked the disposable database. A repeat after the lock cleared completed successfully; this is not evidence of a persistent app error.

## Local source gate

`uv run --with pytest bash scripts/check.sh` passed after the schema correction and again after the installed-package evidence update: 1,053 Python checks, PHP runtime checks, 598 Vitest checks in 50 files, production asset build and module closure, whitespace validation and Markdown links. The unsigned rehearsal package also passed module and package audits; it is not the signed release candidate.

## PostgreSQL schema rehearsal

The first disposable NC34/PostgreSQL fresh install indexed all 40 Gutenberg books but physical-schema parity found the alpha.40 `workflow_sort_rank` column and `library_items_usr_wfrank_title` index missing from `appinfo/database.xml`. The existing migration had created both physically. The declaration and a local regression check were added; no new migration was needed. Repeating the fresh install passed with 40 indexed books and no schema errors. A populated upgrade from signed 0.2.0-beta.3 also passed, retaining all 40 books and a user-corrected description through upgrade and rescan. These runs used a source-equivalent unsigned rehearsal archive and must be repeated with the final signed archive.

## Exact-package checks so far

- Hosted check, GUI, CodeQL and security jobs passed on the merged source commit.
- Fresh install on Nextcloud 33.0.9, 34.0.4 and 35.0.0 passed installed integrity, physical-schema parity, five service integrations, **79 browser checks per version** (31 Chromium desktop, 31 Firefox desktop, 15 Chromium mobile and two isolated rescan journeys) and the focused series, inference, duplicate and scheduled-scan smokes. All three disposable instances were removed after certification. Evidence is under `/tmp/library-rc1-matrix-final-fresh-all`.
- Populated upgrades from signed `0.2.0-beta.3` to the exact signed RC passed the same integrity, schema, service, 79-browser-check and focused-smoke gates on Nextcloud 33.0.9, 34.0.4 and 35.0.0. All three cases preserved 40 books and a user-corrected description through upgrade and rescan, and all three disposable instances were removed. Evidence is under `/tmp/library-rc1-matrix-final-upgrade-all`; [machine-readable results](matrix-summary.json) record all six cases and their archive checksum.
- PostgreSQL on Nextcloud 34.0.4 passed signed-package fresh install and a populated upgrade from signed `0.2.0-beta.3`, including integrity and schema parity. The upgrade preserved 40 books and a user-corrected description through rescan.
- MariaDB 11 on Nextcloud 34.0.4 passed signed-package fresh install and upgrade from signed `0.2.0-beta.3`, with integrity and physical-schema parity. The database-engine harness now accepts the exact signed archive; its formerly empty shell branch was corrected. The populated developer MariaDB upgrade remains a separate live gate.
- A separate disposable Nextcloud 34.0.4 instance recovered from an interrupted deployment at the **code-replaced, database-not-upgraded** boundary. Restarting and completing `occ upgrade` preserved all 40 books and the manual correction through rescan; integrity, schema parity and maintenance-mode checks passed. This does not exercise interruption inside a running database migration.
- The private `dist/app-store-handoff-rc1/README.txt` contains owner registration and release submission instructions. No App Store API token is stored, and no public submission has been made.
- An isolated signed-package NC34 editor smoke staged and discarded a title edit at 1440px and 390px. It observed zero book update requests, zero browser errors and no horizontal overflow; the saved title and metadata revision remained unchanged. Its disposable instance was removed.

## Developer NC34 deployment and live smoke

- Before deployment, signed alpha.43 had clean integrity. Maintenance mode was enabled and a private rollback snapshot of the app, config and full MariaDB database was created at `/tmp/library-before-rc1-20261024T163249Z`. The 850,532,233-byte compressed database dump passed `zstd -t` and SHA-256 verification.
- The exact signed archive was copied with matching host/container SHA-256 and upgraded Nextcloud 34.0.3.2 to Library `0.3.0-rc.1`. Physical-schema parity and app integrity pass; maintenance mode and pending database upgrade are both false. The installed frontend has the versioned `library-main-0-3-0-rc-1` asset.
- Before upgrade, immediately after upgrade and after the installed smokes, the raw catalogue remained **107,861 rows** with identical latest-update and update-sum values. The owner had 107,717 rows; two marked-for-deletion books were hidden, so the visible catalogue API returned **107,715** both before and after. The remaining 144 rows belong to other accounts. No book update request was submitted by the editor smoke.
- The installed editor staged and discarded a title change at 1440px and 390px: zero book updates, zero browser errors, no horizontal overflow and unchanged saved title/revision. The read-only sidebar HTTP smoke passed. Temporary app credentials were removed.
- The live catalogue smoke passed before and after installation on the same 107k-book data. Repeated substring-search median was **0.399 → 0.311 seconds** (slowest **1.829 → 1.722**); author-name median **0.286 → 0.287**. The seven sampled sort requests were **0.043–0.113 seconds before** and **0.044–0.263 seconds after**. These are five-request samples for search and single requests for sorting on the shared developer instance, not guaranteed limits. Logs remain at `/tmp/library-rc1-live-performance-before.log` and `/tmp/library-rc1-live-performance-after.log`.

## Release gates

- [x] Full local source checks.
- [x] Hosted CI on the final merged app source commit.
- [x] Owner acceptance of the current RC on 2026-10-29; individual H03-01–26 and manual accessibility results were not separately attested.
- [x] Final signed archive, detached App Store signature, checksum, SBOM and provenance.
- [x] Exact signed archive: NC33/34/35 fresh and populated 0.2.0-beta.3 upgrade matrices, interruption recovery at the documented boundary, plus SQLite, MariaDB and PostgreSQL validation.
- [x] Developer NC34 installed smoke, integrity, catalogue count and performance median.
- [x] GitHub tag/prerelease and public asset verification. Tag resolves to the certified source commit; the downloaded archive matches the SHA-256 above and verifies with the App Store certificate. All five release-tag screenshots returned HTTP 200.
- [ ] App Store prerelease registration, listing and installation.
