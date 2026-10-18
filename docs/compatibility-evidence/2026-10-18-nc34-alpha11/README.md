# Signed alpha.11 developer deployment — 2026-10-18

PR [#111](https://github.com/utrost/Library/pull/111) merged as `c6cce72c4811478b5d8676000db1878e91ce3070`. Its `check`, `gui`, CodeQL, and security jobs passed. The `gui` job exercised a disposable Nextcloud installation. This is not the exact signed-package NC33–35 release matrix.

The signed developer archive was staged from the merged commit's runtime files at `dist/library-0.3.0-alpha.11.tar.gz`. SHA-256: `909c0aa3debce5549fa7f3fec7e511e81147523a43382b2bf20bc13fbf487910`. Signing used the approved Library certificate. The release-package audit passed for signature presence, archive contents, module closure, SBOM and provenance. The package was staged after CI without rerunning the repository's package-script test suites; the provenance identifies this manual developer staging path. It is not an App Store upload artifact.

Before upgrading the populated developer Nextcloud 34.0.3.2 instance at `http://100.123.149.120:8088`, a single-transaction MariaDB dump, installed app directory and `config.php` were saved outside the repository in `/tmp/library-nc34-pre-alpha11-20261018`. The compressed dump is 910 MiB with SHA-256 `97be43af702955a39a868c3fd72090d808a0eb9be12d9ff78fcd5905fb60692a`. No Library scan job was running. The catalogue held **107,717** item rows.

The signed archive was installed with maintenance mode enabled. `occ upgrade` updated Library from `0.3.0-alpha.10` to `0.3.0-alpha.11` and applied migration `000300Date20261018010000`. Apache was reloaded after installation.

After the upgrade, Nextcloud reported maintenance mode off and no pending database upgrade. The new `protected_fields_json` column and migration record are present. The catalogue still holds **107,717** item rows. `occ integrity:check-app library` exited 0, installed app files matched the audited staging tree, and `/status.php` returned HTTP 200. The installed app version reported by `occ app:list` is `0.3.0-alpha.11`.

No authenticated browser session was run against the populated developer instance in this deployment pass. Owner acceptance should follow the [current human test handbook](../../human-test-handbook.md#current-03-human-cases), especially changed-field rescan protection, author preferred-name search, metadata editing and reader handoff. Before App Store submission, run the exact signed candidate through fresh and upgraded Nextcloud 33.0.9, 34.0.4 and 35.0.0 instances with the 40 Gutenberg books and record screenshots, results and its checksum.
