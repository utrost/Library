# Alpha.3 selected-book sharing — focused verification

Date: 2026-11-07. This is a development deployment checkpoint, not a stable release or full CI certification. All execution is local; GitHub Actions and App Store publication are excluded.

## Scope

`0.4.0-alpha.3` makes the selected-book sharing implementation available for testing: owners share a fixed selection of 1–100 books from a personal list without granting folder access. Existing Files-backed grants remain supported. List edits do not silently expand recipient access.

The populated NC34.0.4/MariaDB 11 upgrade fixture starts from the preserved signed alpha.2 archive with three real synthetic books, saved corrections, a three-entry list and an accepted Files-backed Library grant. The upgrade preserves their records and access. Calling the additive migration against the resulting schema again leaves it unchanged.

## Defects found and corrected

- Sharing lock names previously combined a prefix with a full SHA-256 digest, exceeding Nextcloud's 64-character database lock key limit. MariaDB truncated inserted keys, preventing their release. Both grant and root locks now hash the complete namespaced identity into exactly 64 characters. Repeated create/revoke browser journeys run against database locking on MariaDB.
- Small-file range requests happened to work through the web-server output filter. This was insufficient for predictable large-file behavior. The authorized download response now handles single byte ranges explicitly with bounded chunks, suffix ranges, 416 responses and If-Range fallback. Conditional requests still pass through authorization first.
- The large-file fixture now updates the Nextcloud storage cache after writing through a raw stream, so its advertised size matches the actual file.

## Measured source-build results

The synthetic catalogue contains 100,000 item/file records. The selected 100 books have real Nextcloud source files; the other 99,900 background entries are metadata-only fixtures. This measures a maximum selection against a large owner catalogue, not a full 100k-file scan or an unrestricted folder-wide share.

| Journey | Repeated median | Largest observed visit |
| --- | ---: | ---: |
| Shared listing | 668 ms | 1,268 ms |
| Matching title search | 759 ms | 880 ms |
| No-match search | 462 ms | 656 ms |

Chromium timing includes navigation through usable DOM content. Six visits per case were recorded, with the first excluded from the repeated median. These are local, warmed-instance results; they do not represent a cold database, remote storage or internet latency. Service-only listing/search took roughly 66–83 ms after warmup. Pagination returned 80 then 20 books, with no extra page.

A 536,871,490-byte PDF fixture streamed completely with PHP peak allocated memory of 6 MiB, the same as the four-byte range request. First bytes arrived within 79 ms in this run. Revoking while a second transfer was open denied a new recipient request with 404; the already authorized transfer completed. This is the documented revocation boundary.

Desktop Chromium, desktop Firefox and mobile Chromium selected-book journeys passed, including review, exact selection, excluded/outsider access, cover/download access, byte/suffix/unsatisfiable/conditional requests and revocation. Desktop/mobile screenshots were inspected; horizontal overflow assertions passed. No browser page errors were recorded in the performance journey.

## Reproduce the focused checks

Set `LIBRARY_UPGRADE_FROM_ARCHIVE` to the preserved alpha.2 package, `LIBRARY_TEST_ARCHIVE` to the candidate archive, `REQUIRE_INTEGRITY=1` for a signed candidate and `LIBRARY_SHARING_RESULTS_DIR` to a private evidence directory. Run:

```sh
bash scripts/smoke-sharing-upgrade.sh
```

The harness starts a labelled, disposable NC34/MariaDB pair, runs the populated upgrade and browser checks, builds the scale fixture, measures streaming memory, and removes its containers. Evidence includes synthetic screenshots, timings and logs. Do not publish private environment files or account session data.

`scripts/package-development.sh` packages a clean, committed alpha build using the existing frontend staging, signing, reproducible archive, SBOM and package audit helpers. It deliberately does not invoke full CI or the release gate.

## Deployment and rollback

`scripts/deploy-sharing-alpha3.sh` is limited to the alpha.2 → alpha.3 developer upgrade. It requires an explicitly identified NC34 app, MariaDB and cron container, and the checksum that passed the disposable upgrade. It verifies provenance, signatures, the existing certificate and the exact additive migration set before changing the instance.

The procedure stops cron, enables maintenance, drains old PHP workers and takes private backups of the complete database, config and installed app. It fingerprints every saved book/file, list entry and existing grant before and after the upgrade. On failure it removes the new snapshot table and restores the matching database/config/app set. Replacing app files alone is **not** a complete rollback after migration. Do not run the older same-schema deployment helper for this upgrade. Keep the database backup private and discard it according to the operator's backup retention policy.

The installed-package browser smoke uses newly created, randomly named accounts and synthetic files only. Cleanup deletes only accounts recorded by that fixture; personal books are never edited or deleted.

## Remaining acceptance

PostgreSQL, external/read-only mounts, broader restricted-sharing policies, manual assistive technology, dark-theme review and legacy managed-share recovery remain tracked in [#194](https://github.com/utrost/Library/issues/194), [#196](https://github.com/utrost/Library/issues/196) and [#197](https://github.com/utrost/Library/issues/197). The full NC33–35 signed release matrix is a separate release task. Library-only sharing currently offers attachment downloads without a Nextcloud reader handoff.

Final signed-package identity, exact-package repetition and installed smoke results will be appended after deployment.
