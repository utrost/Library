# 0.3.0 release candidate verification

The signed `0.3.0-rc.1` archive was built from commit `44fe95c8a769af27e5df67cff9d8dde14cb30b24`. Its SHA-256 is `caffb1ac1a93b961813d75270861d8185dcabfff95d17c233bade68e9e45eb07`. The [GitHub prerelease](https://github.com/utrost/Library/releases/tag/v0.3.0-rc.1) and [Nextcloud App Store listing](https://apps.nextcloud.com/apps/library) contain the release artifacts.

The exact signed package passed fresh-install and populated-upgrade checks on Nextcloud 33, 34 and 35. SQLite, MariaDB and PostgreSQL were exercised. Package integrity, schema parity, browser journeys and interruption recovery at the code-replaced boundary passed. A disposable beta-channel Nextcloud 34 installation from the App Store feed passed integrity checks.

The repository no longer publishes raw test runs, browser traces, local infrastructure details or catalogue records. Reproduce current checks with the scripts in this repository and retain run output outside Git. Historical results here describe the certified release and are not a substitute for rerunning checks after code changes.
