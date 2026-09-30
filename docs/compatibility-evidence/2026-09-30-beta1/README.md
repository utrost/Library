# Library 0.2.0-beta.1 release verification

Candidate date: 2026-09-30. Final signed-archive matrix: PASS, all six installations, 210/210 Playwright executions with no skips or retries. GitHub mixed-fixture CI also passes, including all 35 browser executions and the legacy browser/HTTP/performance checks.

Archive: `library-0.2.0-beta.1.tar.gz`.
SHA-256: `fcaf7090eda1163fba8a18bdb9f865dbbdee6f4849a8f70345a41be8afcdf9e3`.
Earlier candidates `49c1eea…` and `f24a873…` were superseded after the SQLite duplicate bug and mixed-fixture list-column overflow were found, respectively. The matrix below tests the final replacement archive.

## Package and local gates

- The issued Nextcloud certificate matches the existing private key and validates against Nextcloud's code-signing CA. Certificate request #1268 merged on 2026-09-29.
- Runtime archive audit, module closure, SPDX inventory and provenance checks pass. The archive contains one `library/` directory and no private keys, development dependencies or tests.
- App integrity signature and separate SHA-512 App Store registration/archive signatures are generated. Both detached signatures verify locally.
- `info.xml` and `database.xml` validate against the official schemas. The schema reference matches 25 migration-created tables through 47 migrations, normalizing database-generated primary-key names and integer display lengths.
- Local gate: 1,043 Python tests, 531 frontend tests, 518 parser parity cases, PHP runtime tests, translation checks, production build and Markdown links pass.
- Dependency audit after the targeted brace-expansion updates reports zero vulnerabilities. This is a dependency-advisory check, not a claim of comprehensive security certification.

## Final signed-archive matrix

All cases use the same signed archive and 40 English Gutenberg books. Fresh installations use SQLite. Upgrades first install 0.1.0-beta.1, index the 40 books, save a manual description correction, then upgrade and verify the catalogue before and after another scan. Assertions include live browser behaviour, not pixel-perfect screenshot matching.

| Nextcloud | Fresh install | Upgrade | Playwright per installation | Extra checks |
| --- | --- | --- | --- | --- |
| 33.0.9 | PASS | PASS | 35/35 | PASS |
| 34.0.4 | PASS | PASS | 35/35 | PASS |
| 35.0.0 | PASS | PASS | 35/35 | PASS |

Each final case also runs performance/thumbnail fixtures, a 205-publication paging fixture, 74 scheduled-scan assertions, scalar-warning/cache fixtures, personal-list integration, inference Apply/Undo, suggestion previews/saved-rule cleanup, scheduled-scan UI, and duplicate-review browser checks. The duplicate fixture contains 14 books and yields 23 matches in each browser; it verifies cancellation, actual background execution, pagination, review decisions, persistence, mobile layout, CSRF rejection and unchanged source files/metadata. Temporary accounts, roots and containers are cleaned up.

## Developer deployment

The corrected signed archive is deployed on developer Nextcloud 34.0.3 (MariaDB). Installed integrity verification passes. The existing migrations are byte-identical, so no new migration is required. Maintenance mode is off. Catalogue size remains 107,717 items. Chromium/Firefox checks pass for cursor navigation, selection actions, mobile fit and 18 cover requests near the viewport, with no page errors. The earlier beta deployment also passed suggestion/saved-rule checks in both browsers; the final replacement also wraps long shelf/series values inside their list columns, and its developer browser checks were repeated.

A sleeping worker that had retained old PHP for more than two days was recycled after checking that no job was reserved. A same-version redeployment initially invoked `occ upgrade` unnecessarily while maintenance mode was on; the deployment restored the prior package and exited maintenance mode. The corrected redeployment skips that call when the installed version and migrations are unchanged. No catalogue data or source files were reset.

## Findings retained from initial runs

1. **SQLite duplicate detection:** a `HAVING COUNT(*) > ?` threshold was bound as text. SQLite therefore produced no matching groups; MariaDB on the developer instance did not expose this. Bind the threshold as `PARAM_INT`. A regression test demonstrates SQLite's comparison behaviour, and the live duplicate smoke now finds all 23 expected matches.
2. **Browser harness:** an NC33 Firefox metadata test navigated away while Settings' same-URL POST redirect was still loading, causing `OC is not defined`. The test now requires a new main-frame navigation and completed load. Browser-error assertions remain strict.
3. **CI harness:** mixed-fixture tests needed separate one-result search and total-card expectations, sample-dependent filename assertions, the scan worker, and the current 25-table schema check. The independent account was also missing from the mixed fixture, and its square covers exposed an assertion that ignored `object-fit: contain`. The screenshot showed intact, uncropped artwork; the check now accepts contained artwork or matching intrinsic aspect ratio while preserving geometry/action checks.
4. **Release tooling:** corrected signing-directory/key ownership and permissions, allowed the already-required context-help asset in the package audit, corrected XML element order and SPDX/SLSA sidecar formats, and updated two vulnerable transitive brace-expansion versions.
5. **List layout:** after correcting the image assertion, the mixed fixture exposed real overflow from long shelf names. Shelf/series metadata now uses the same bounded, wrapping block layout as author names. The browser checks still reject overflowing fields and inaccessible actions. The replacement signed archive repeated all six installations. A remaining four-pixel scroll measurement came from the trailing action margin: the screenshot showed all controls visible. The test now accounts for that computed margin and explicitly verifies the right edge of every action, retaining field-overflow checks.
6. **Legacy browser launcher:** the CI runner’s system Chrome did not expose its debug endpoint. The mixed-fixture harness now uses the same pinned Playwright Chrome executable as the GUI suite. Its full CI run and a read-only developer NC34 catalogue/sidebar check pass; temporary-token cleanup is confirmed.
7. **Orchestration:** the initial upgrade run's three cases and cleanups passed, but editing the running shell harness caused a trailing parse error after the loop. Final runs use a frozen harness and separate instance prefixes/work directories; their results supersede those preliminary runs.

## Screenshots and limits

Public screenshots use the disposable Gutenberg account. The extraction screenshot uses a synthetic tutorial EPUB with a meaningful filename; it is not a complete copy of the named book. Screenshots are captured after the cover loading/sidebar transitions settle.

- [Catalogue](../../images/appstore-catalogue.png)
- [Book details](../../images/appstore-details.png)
- [Metadata extraction](../../images/appstore-inference.png)

Manual assistive-technology testing remains outstanding; browser accessibility assertions are not screen-reader testing. PostgreSQL was not part of this release matrix. The NC35 image reports two core index warnings (`oc_job_classes_registry` and `oc_federated_invites`), outside Library's schema. They do not invalidate Library integrity or the recorded application checks.

## Rerun and raw evidence

Use `scripts/performance/compatibility-matrix.sh` with `LIBRARY_TEST_ARCHIVE` pointing to the accepted signed archive and `REQUIRE_INTEGRITY=1`. Set `INSTALL_MODE=fresh` for a fresh installation; the default upgrades from `LIBRARY_BETA_ARCHIVE`. Supply `LIBRARY_BOOK_FIXTURE_ARCHIVE` for the Gutenberg corpus. `LIBRARY_LISTS_PREFIX` and `LIBRARY_LISTS_WORK_DIR` isolate simultaneous runs. Do not edit the harness while it is running.

Raw logs, Playwright JSON, screenshots and cleanup records are retained locally under `/tmp/library-beta1-release-fresh/` and `/tmp/library-beta1-release-upgrade/`. Earlier failure evidence remains in `/tmp/library-beta1-fresh/`, `/tmp/library-beta1-fresh33-rerun/` and `/tmp/library-beta1-initial-artifacts/`. Developer evidence is under `/tmp/library-beta1-developer-release/`. Only aggregate results and public fixture screenshots belong in the repository.

## Aggregate evidence

[Machine-readable matrix results](results.json). The signed archive reproduces byte-for-byte, and all 164 source files match the repository. Final package gate: 1,043 Python tests passed; the subsequent CI gate also includes the added pinned-browser setup regression test. GitHub mixed-fixture CI rerun: [36727744264](https://github.com/utrost/Library/actions/runs/36727744264), PASS for both source/build/security checks and the complete mixed-fixture GUI/HTTP/performance rehearsal. Later source changes are documentation/evidence only.
