# Architecture candidate: exact unsigned archive

On 2026-10-15, the source tree built `library-0.3.0-alpha.9.tar.gz` (SHA-256 `9638e7db4295d3d50d854adf2d4d68c3bcd432ef0a4d35952909789b5ae9f7dc`). This was an unsigned test artifact from the current working tree, later replaced in `dist/` by the [signed candidate](../2026-10-15-signed-architecture-candidate/README.md). It is not a published release.

The package gate completed `npm ci`, the production dependency audit (zero reported vulnerabilities), the Vue build and module-closure check, 1,045 Python tests, PHP runtime checks, and archive, SBOM and provenance audits. The candidate archive contained 217 entries.

The exact archive was installed into disposable fresh Nextcloud instances with the 40 English Gutenberg EPUBs. Each instance used SQLite and was removed after the checks:

| Nextcloud | Indexed books | Scanner errors | Physical schema | Playwright | Feature smokes | Cleanup |
| --- | ---: | ---: | --- | --- | --- | --- |
| 33.0.9 | 40 | 0 | 34 tables, 0 differences | 35 passed, 0 flaky | Passed | Passed |
| 34.0.4 | 40 | 0 | 34 tables, 0 differences | 35 passed, 0 flaky | Passed | Passed |
| 35.0.0 | 40 | 0 | 34 tables, 0 differences | 35 passed, 0 flaky | Passed | Passed |

Playwright covered desktop Chromium and Firefox plus mobile Chromium. The additional smokes covered OPF series handling, inference apply, duplicate review, inference suggestions and scheduled scans. Service integration checks covered performance fixes, scan paging, scheduled scans, scanner warning caching and personal lists.

Run command:

```bash
EVIDENCE_DIR=/tmp/library-architecture-matrix-20261015 \
LIBRARY_BOOK_FIXTURE_ARCHIVE=/tmp/library-beta2/gutenberg-en-40.tar.gz \
LIBRARY_TEST_ARCHIVE="$PWD/dist/library-0.3.0-alpha.9.tar.gz" \
INSTALL_MODE=fresh bash scripts/performance/compatibility-matrix.sh
```

The generated JSON results, logs and Playwright reports are under `/tmp/library-architecture-matrix-20261015/`. These checks do not cover a signed archive, an upgrade with the Gutenberg fixture, a real populated 100,000-file scan, or human review of the UI. Fresh schema and NC34 upgrade checks across SQLite, MariaDB and PostgreSQL are recorded in the [architecture plan](../../pre-release-architecture-plan.md).
