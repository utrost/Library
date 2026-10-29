# 0.3.0 release candidate verification

## Published RC3 replacement

The signed `0.3.0-rc.3` archive comes from sanitized source commit `d4e30b0fb54c0995e6ccf40639588afce3e2adf1`. SHA-256: `684d341737abeb7e091d14f66afe2360be4fbfd4a610a347567fae4628094d2e`. The detached App Store signature, SPDX inventory and provenance identify this exact archive. The [GitHub prerelease](https://github.com/utrost/Library/releases/tag/v0.3.0-rc.3) is public; its downloaded archive matched the checksum. All five versioned screenshot links returned PNG images. Hosted Security and CI runs on the exact commit passed, as did 1,053 source checks, 598 frontend checks, PHP runtime checks, parser parity, production build, translation/link checks and package audits.

The exact signed package passed fresh-install and populated-beta-upgrade browser/service matrices on Nextcloud 33, 34 and 35. Each mode and version passed 31 Chromium desktop, 31 Firefox desktop and 15 Chromium mobile journeys, plus service, integrity, schema and cleanup checks. All 18 SQLite, MariaDB and PostgreSQL fresh-install/upgrade checks passed. An interrupted upgrade recovered after code replacement and preserved the disposable 40-book fixture and a manual metadata edit. Firefox logged a Nextcloud folder-picker cancellation page error during a passing journey; no Library assertion failed.

On the 107,861-book developer catalogue, five repeated read-only content searches took 496, 645, 716, 571 and 733 ms (median 645 ms), below the two-second target. A later desktop search had a 3,536 ms outlier; mobile took 1,728 ms. Author typeahead had a 2,484 ms median over five runs and displayed loading feedback; selecting the author returned results in 279–376 ms. No browser errors or book mutations occurred in those probes. The installed NC34 app reported `0.3.0-rc.3`, clean integrity, maintenance mode off, byte-identical package files, and unchanged counts of 107,861 books and 206,850 files.

The Nextcloud App Store accepted RC3 as a non-nightly prerelease (HTTP 201), and its [public release page](https://apps.nextcloud.com/apps/library/releases) listed RC3 for NC33–35. Store deletion of RC1 returned 204, then 404 on repeat. Old GitHub release archives, including RC1, were removed; their download URLs returned 404. Immediately afterward the Store installation API still served a cached RC1 record, and a disposable beta-channel install selected RC1 before its archive was removed. **Recheck Store feed propagation and a disposable RC3 install before calling in-app installation verified.** GitHub-owned pull-request refs and cached old commit views require a separate GitHub Support cleanup; rewritten public branches/tags and audited visible issue/PR text are sanitized.

## RC2 certification stopped at performance gate

The signed RC2 archive (`f4f6a237753ba2260f46ead00d5fb1a176451b73538ce9040e3be68ebec4c0ee`) passed source checks, hosted CI, NC33–35 fresh and populated-upgrade browser/service matrices, all 18 database engine checks and interruption recovery. It was installed on developer NC34 with clean integrity, matching package files, maintenance mode off and unchanged catalogue counts. Five read-only content searches on the large catalogue took 24–43 seconds (median 29.2 seconds), exceeding the under-two-second release target. RC2 was not published. An initial fresh NC34 run stopped because the harness assumed one pass of a time-bounded author backfill was sufficient; the corrected harness and full rerun passed. A cancelled Nextcloud folder picker logged a page error in Firefox while the journey passed; record this observation during RC3 certification.

## Withdrawn RC1 historical record

The signed `0.3.0-rc.1` archive was the first public candidate. Its GitHub archive and App Store release have been withdrawn. This historical result does not certify RC3.

The exact signed package passed fresh-install and populated-upgrade checks on Nextcloud 33, 34 and 35. SQLite, MariaDB and PostgreSQL were exercised. Package integrity, schema parity, browser journeys and interruption recovery at the code-replaced boundary passed. A disposable beta-channel Nextcloud 34 installation from the App Store feed passed integrity checks.

The repository no longer publishes raw test runs, browser traces, local infrastructure details or catalogue records. Reproduce current checks with the scripts in this repository and retain run output outside Git. Historical results here describe the certified release and are not a substitute for rerunning checks after code changes.
