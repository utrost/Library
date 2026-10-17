# Signed alpha.10 developer deployment — 2026-10-17

PR [#109](https://github.com/utrost/Library/pull/109) merged as `ca6558535b492c7d9b584425967243e863a30e7a`. Its required `check`, `gui`, CodeQL and security gates passed. The `gui` job ran a disposable Nextcloud installation and browser rehearsal. This is not the final exact-package NC33–35 release matrix.

The signed archive was built from the merged commit's runtime files at `dist/library-0.3.0-alpha.10.tar.gz` and audited with `scripts/audit-release-package.sh --require-signature`. Its SHA-256 is `f5eb90389a94e5390d7bc15700b3053bacb212e048d89435209218e9ba2abd0b`. The archive has a valid signing manifest, SBOM and provenance sidecars. The archive is a local developer deployment artifact; this report does not claim it is an App Store release.

Before upgrading the populated developer Nextcloud 34.0.3.2 instance at `http://100.123.149.120:8088`, a consistent MariaDB dump, the installed app directory and `config.php` were saved outside the repository in `/tmp/library-nc34-pre-alpha10-20261017`. No scan job was running. The signed archive was installed with maintenance mode enabled and `occ upgrade` updated Library from `0.3.0-alpha.9` to `0.3.0-alpha.10`.

After the upgrade, Nextcloud reported maintenance mode off and no pending database upgrade. The new `000300Date20261015120000` migration was recorded; `genres_json` is absent from `oc_library_items`. The catalogue still contained **107,717** item rows. `occ integrity:check-app library` exited 0, the installed app files matched the audited archive staging tree, and `/status.php` returned HTTP 200. An unauthenticated request to `/apps/library/` returned HTTP 401, so this deployment record does not assert an authenticated live browser pass.

The owner can now use the [current human test handbook](../../human-test-handbook.md#current-03-human-cases) on the developer instance. Before App Store submission, run the alpha.10 exact signed archive through fresh and upgraded Nextcloud 33.0.9, 34.0.4 and 35.0.0 instances and record screenshots, results and the archive checksum. Human author, series and detail editing acceptance remains open.
