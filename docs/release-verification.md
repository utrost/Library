# 0.3.0 release candidate verification

## RC3 replacement certification

RC3 includes a bounded indexed-candidate path for title/description search. Record the exact source commit, signed archive SHA-256, NC33–35 fresh and populated-upgrade matrix, SQLite/MariaDB/PostgreSQL checks, interruption recovery, installed-package integrity, and repeated 107k-catalogue search timings before publication. RC1 and RC2 evidence below do not certify RC3.

## RC2 certification stopped at performance gate

The signed RC2 archive (`f4f6a237753ba2260f46ead00d5fb1a176451b73538ce9040e3be68ebec4c0ee`) passed source checks, hosted CI, NC33–35 fresh and populated-upgrade browser/service matrices, all 18 database engine checks and interruption recovery. It was installed on developer NC34 with clean integrity, matching package files, maintenance mode off and unchanged catalogue counts. Five read-only content searches on the large catalogue took 24–43 seconds (median 29.2 seconds), exceeding the under-two-second release target. RC2 was not published. An initial fresh NC34 run stopped because the harness assumed one pass of a time-bounded author backfill was sufficient; the corrected harness and full rerun passed. A cancelled Nextcloud folder picker logged a page error in Firefox while the journey passed; record this observation during RC3 certification.

## Published RC1 record (withdrawal pending)

The signed `0.3.0-rc.1` archive was built from commit `44fe95c8a769af27e5df67cff9d8dde14cb30b24`. Its SHA-256 is `caffb1ac1a93b961813d75270861d8185dcabfff95d17c233bade68e9e45eb07`. The [GitHub prerelease](https://github.com/utrost/Library/releases/tag/v0.3.0-rc.1) and [Nextcloud App Store listing](https://apps.nextcloud.com/apps/library) contain the release artifacts.

The exact signed package passed fresh-install and populated-upgrade checks on Nextcloud 33, 34 and 35. SQLite, MariaDB and PostgreSQL were exercised. Package integrity, schema parity, browser journeys and interruption recovery at the code-replaced boundary passed. A disposable beta-channel Nextcloud 34 installation from the App Store feed passed integrity checks.

The repository no longer publishes raw test runs, browser traces, local infrastructure details or catalogue records. Reproduce current checks with the scripts in this repository and retain run output outside Git. Historical results here describe the certified release and are not a substitute for rerunning checks after code changes.
