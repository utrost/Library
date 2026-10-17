# Signed architecture candidate: fresh install and upgrade

On 2026-10-15, the current working tree built and signed `library-0.3.0-alpha.9.tar.gz` with the Library certificate. SHA-256: `1203c309e84c5591bea0069d9229288b0066c8d486133172dbfaf59a7612a4b9`. This is a signed test candidate, not a published release or a committed baseline.

The package gate passed the production dependency audit (zero reported vulnerabilities), Vue build/module-closure check, 1,045 Python tests, PHP runtime checks, signature, archive, SBOM and provenance audits. The signed archive contained 218 entries. Nextcloud's `occ integrity:check-app library` returned exit code 0 with an empty report in every tested instance.

The exact signed archive was tested with the 40 English Gutenberg EPUBs on disposable Nextcloud instances. Fresh installation and upgrade from the archived `0.2.0-beta.2` package each ran the full Playwright and feature matrix:

| Nextcloud | Fresh install | Upgrade from 0.2 | Playwright per run | Library schema per run | Integrity per run | Cleanup per run |
| --- | --- | --- | --- | --- | --- | --- |
| 33.0.9 | Passed | Passed | 35 passed, 0 flaky | 34 tables, 0 differences | Clean | Passed |
| 34.0.4 | Passed | Passed | 35 passed, 0 flaky | 34 tables, 0 differences | Clean | Passed |
| 35.0.0 | Passed | Passed | 35 passed, 0 flaky | 34 tables, 0 differences | Clean | Passed |

The upgrade fixture confirmed all 40 books and a manually corrected description survived both before and after the candidate deployment on all three versions. Playwright covered desktop Chromium and Firefox plus mobile Chromium. Additional smokes covered OPF series, inference apply and suggestions, duplicate review, scheduled scans, scan paging, warning caching and personal lists. All disposable containers were removed.

The fresh-install and upgrade JSON results, logs and Playwright reports are under `/tmp/library-architecture-signed-matrix-20261015/` and `/tmp/library-architecture-upgrade-matrix-20261015/`. The upgrade to Nextcloud 35 emitted a nonfatal **Nextcloud core** warning about a missing `oc_federated_invites` index; Library's physical schema check found no differences.

The candidate still needs the populated-library acceptance cases in the [architecture plan](../../pre-release-architecture-plan.md), owner review with the [human test handbook](../../human-test-handbook.md), and a final versioned release artifact built from a committed tree. This matrix used SQLite instances; separate fresh schema checks covered SQLite, MariaDB and PostgreSQL on NC33–35, and NC34 upgrade checks covered all three engines.
