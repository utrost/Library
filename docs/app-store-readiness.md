# App Store readiness roadmap

**Current developer candidate: 0.3.0-alpha.43.** The signed alpha.43 package is installed on developer NC34 with clean integrity and 107,717 catalogue rows before and after upgrade. All seven catalogue sort choices now return promptly on the measured library; see the [alpha.43 deployment record](compatibility-evidence/2026-10-24-nc34-alpha43/README.md). Exact signed NC33–35 certification and human acceptance remain release gates.

Previous deployment checkpoint: signed **0.3.0-alpha.36** added the mixed filename/path worklist. Its [verification and deployment record](compatibility-evidence/2026-10-21-nc34-mixed-pattern-alpha36/README.md) remains historical; alpha.43 is now installed.

Prior checkpoint: alpha.32 introduced the first UI consistency pass. Its verification record is retained as historical evidence; alpha.43 is now installed.

Alpha.31 introduced confirmed book-file deletion with shared-OPF protection and empty-folder cleanup, retained in alpha.32. Historical verification: [alpha.31 record](compatibility-evidence/2026-10-20-nc34-book-deletion-alpha31/README.md).

Alpha.30 adds a shared compact browser for Authors, Series and Genres, with displayed-name sorting, bounded book previews and genre pagination. One additive index supports ordering; no author identities or book values change. Alpha.30 is a historical browser checkpoint; its features are retained in alpha.32. Verification and deployment status: [alpha.30 record](compatibility-evidence/2026-10-20-nc34-author-browser-alpha30/README.md).

Alpha.29 fixes selective content-search performance and surname searches in the **Author** filter. See the [search verification record](compatibility-evidence/2026-10-20-nc34-search-alpha29/README.md). The alpha.29 search verification is historical and remains covered by alpha.30 regression checks; that search change required no migration.

Alpha.28 adds direct destination-author typeahead for merge/reassign, starting after three letters and offering creation after an empty search. See the [alpha.28 verification record](compatibility-evidence/2026-10-19-nc34-author-destination-alpha28/README.md). The alpha.28 deployment is historical; alpha.43 is now installed.

## Submission decision — 2026-10-13

The owner has chosen **0.3 as the first App Store release**. Hold the 0.2 submission. The signed 0.2.0-beta.3 archive and verification below remain the preserved baseline, not evidence for the new author/series schema. Author and series work is included in the current alpha.32 development candidate; see the [active roadmap](roadmap.md#active-03-track).

Before submitting 0.3: obtain human acceptance of author and series workflows, resolve release-blocking findings, verify a populated upgrade from the preserved 0.2 baseline and interruption recovery, refresh listing/screenshots, then sign and run an exact-package NC33–35 fresh/upgrade matrix. Developer upgrades and focused source checks do not replace the exact signed NC33–35 release matrix.

## Alpha.31 deletion and editor handoff — 2026-10-20

The signed alpha.33 package is deployed on developer NC34 with clean integrity and an unchanged 107,717-book catalogue. Authors, series and genres now share compact rows with inline selection and accessible icon actions. Text links are underlined; File metadata is collapsed at the bottom with a Files link and indexed size. The [verification and deployment record](compatibility-evidence/2026-10-20-nc34-ux-follow-up-alpha33/README.md) tracks checks and deployment status. Owner acceptance and the exact signed NC33–35 matrix remain open.

## Alpha.25 editor handoff — 2026-10-19

The signed alpha.25 package was deployed on developer NC34 with clean integrity and the unchanged 107,717-book catalogue. It keeps Save/Discard visible through the whole details page and preserves direct author/series selection. The [verification and deployment record](compatibility-evidence/2026-10-19-nc34-editor-actions-alpha25/README.md) tracks its signed package and browser checks. Owner acceptance and the exact signed NC33–35 release matrix remain open.

## Historical developer checkpoints

## Alpha.23 developer handoff — 2026-10-18

The [signed alpha.23 package](compatibility-evidence/2026-10-18-nc34-unified-editor-alpha23/README.md) was deployed on populated developer NC34. Upgrade and integrity checks passed, the catalogue remains at 107,717 items, and authenticated Chromium smoke covered the unified editor and an unreviewed imported-language record. Owner acceptance with the [human handbook](human-test-handbook.md#current-03-human-cases) and the exact signed NC33–35 fresh/upgrade matrix remain open.

## Alpha.11 developer handoff — 2026-10-18

The signed `0.3.0-alpha.11` package from merged PR #111 is [deployed on populated developer NC34](compatibility-evidence/2026-10-18-nc34-alpha11/README.md). Hosted checks passed; the additive metadata-protection migration completed, 107,717 catalogue rows remain, and app integrity and package identity passed. Owner acceptance with the [human handbook](human-test-handbook.md#current-03-human-cases) and an exact signed NC33–35 fresh/upgrade matrix remain open.

## Alpha.10 developer handoff — 2026-10-17

The signed `0.3.0-alpha.10` package from merged PR #109 was [deployed on populated developer NC34](compatibility-evidence/2026-10-17-nc34-alpha10/README.md). The migration completed, 107,717 catalogue rows remain, app integrity passed and the installed files match the audited archive. That checkpoint handed the app to owner testing. Its exact-package NC33–35 matrix was not run before alpha.11 superseded it.

## Release checkpoint — updated 2026-10-20

Current candidate baseline: `0.3.0-alpha.43`. Author and series management are implemented in the current candidate. The [signed alpha.23 package](compatibility-evidence/2026-10-18-nc34-unified-editor-alpha23/README.md) includes the unified book editor; alpha.24 adds Save/Discard and direct author/series selection, and alpha.25 fixes the bar's full-page scrolling boundary. Fresh source installs on NC33–35 and a populated NC34 upgrade passed for alpha.5; focused author/duplicate integration passed on NC33–35 for alpha.6. Large author operation verification for alpha.7 is tracked in the [alpha.7 report](compatibility-evidence/2026-10-14-author-large-merges-alpha7/README.md); preferred-author suggestions in the [alpha.8 report](compatibility-evidence/2026-10-14-author-suggestions-alpha8/README.md); reviewed series moves/merges in the [alpha.9 report](compatibility-evidence/2026-10-14-series-assignments-alpha9/README.md). The exact signed 0.3 NC33–35 release matrix remains pending.

At the alpha.9 checkpoint, the app was deployed on developer NC34/MariaDB. Its app version was `0.3.0-alpha.9`; 107,717 catalogue books remained after migration and temporary fixture cleanup. Focused service and Chromium/Firefox series workflows passed on NC33.0.9, NC34.0.4, NC35.0.0 and the populated developer instance. See the [alpha.9 report](compatibility-evidence/2026-10-14-series-assignments-alpha9/README.md). The [human test handbook](human-test-handbook.md#current-03-human-cases) now covers author/series acceptance.

A later alpha.9 frontend asset fixes a blank publication panel when a book has linked authors: the template called an undefined URL helper. The developer NC34 panel now renders its sections and linked authors in Chromium; see the [sidebar hotfix record](compatibility-evidence/2026-10-14-sidebar-hotfix-alpha9/README.md). This targeted check does not extend the earlier NC33–35 source evidence to the new asset, and the exact signed 0.3 package matrix remains open.

The then-current merged main (`47e1428`, including PRs #101–#103) was deployed to developer NC34. Its audited unsigned package matches the installed app files exactly; the catalogue/sidebar and disposable author/series browser smokes passed. See the [human-test handoff](compatibility-evidence/2026-10-14-nc34-main-handoff/README.md) for the checksum, results and the transient Nextcloud core-script error on the first browser run. Owner acceptance remains open.

Preserved baseline: `0.2.0-beta.3`. It is signed and [publicly released as a GitHub prerelease](https://github.com/utrost/Library/releases/tag/v0.2.0-beta.3). All six NC33–35 cases passed with 210 final main Playwright tests; hosted CI and public URL verification passed. See the [beta.3 report](compatibility-evidence/2026-10-13-beta3/README.md), including the earlier timeout attempts and successful reruns.

The signed [beta.2 baseline](compatibility-evidence/2026-10-13-beta2/README.md) passed six fresh/upgrade cases and 210/210 main Playwright executions. That evidence remains historical and does not certify beta.3.

Current 0.3 checklist:

- [x] Implement per-user author identities, profiles, reviewed relationships, large merge tasks and rescan conflict review.
- [x] Implement per-user series identities, reviewed moves/merges, redirects, conditional Undo and changed-import review.
- [x] Pass focused source-build service and two-browser checks on NC33–35; upgrade the populated developer NC34 instance without changing its 107,717-book count.
- [ ] Record owner and human-tester acceptance for author, series, lists, inference and mixed real-file workflows, including manual assistive-technology results where available.
- [ ] Resolve release-blocking findings and decide explicitly whether remaining multiple-series, nonnumeric part ordering and canonical author search/sort limits are acceptable for the first Store version.
- [ ] Build, sign and audit one exact 0.3 archive; verify the populated 0.2→0.3 upgrade and interruption/recovery path.
- [ ] Run fresh and upgrade exact-package matrices on NC33.0.9, NC34.0.4 and NC35.0.0; refresh listing/screenshots for the accepted build.
- [ ] Publish the accepted 0.3 source/tag and release assets, obtain hosted CI evidence, then submit and verify the App Store listing.

Preserved 0.2 beta.3 checklist (historical):

- [x] Obtain and verify the signing certificate; request #1268 was merged.
- [x] Prepare public listing text, Gutenberg screenshots and first-library documentation.
- [x] Fix issue/series duplicate matching and add regression cases.
- [x] Verify beta.3 on developer NC34, including Chromium and Firefox.
- [x] Commit the runtime source and build, sign and audit beta.3.
- [x] Verify the exact beta.3 archive on NC33–35, fresh and upgrade.
- [x] Publish source/tag and release assets; verify public download and screenshot URLs.
- [x] Pass hosted CI for the release source.
- [ ] Owner acceptance of the developer build and listing.
- [ ] Owner App Store registration/submission, followed by Store installation verification.

Manual assistive-technology testing and PostgreSQL coverage remain limitations. Author management is planned for 0.3.

## Historical readiness track

The dated alpha and beta records below preserve what was known at those checkpoints. Their pending items are not the current checklist; signing and older installation rehearsals have since completed.

Target: signed Nextcloud App Store release for Nextcloud 33–35

Library alpha.159 passed its full local gate, unsigned package build/audit, and exact-package smoke on a Nextcloud 34 instance. App Store readiness is a separate hardening track: the release artifact must be clean, signed, documented for reviewers, and backed by repeatable checks that make a stable `0.1.0` upload credible.

The historical alpha candidate included aggregate scan-job counters/duration, privacy-safe operation logs, throttled progress/cancellation checks, frontend request-race hardening, repair root-containment enforcement, workload-led catalogue/review indexes, materialized substring-search grams, lazy high-cardinality typeahead suggestions, the mobile filter panel and the review issue batch (#32-37). This is not external telemetry or proof of universal speedup. Alpha.159 exact-package/live evidence is complete and remains preserved as historical package evidence. Alpha.171 exact-package, fresh SQLite Nextcloud 34 installation and a reproducible 1,000-publication mixed synthetic first-scan rehearsal are complete for the unsigned archive. A signed package/App Store submission, formal Trust-and-scale phase closure, manual AT testing and a comparable real-world mixed corpus remain deferred.

## Definition of ready

Library is App-Store-ready when all of these are true:

- `appinfo/info.xml` contains public metadata, support URLs, AGPL licensing, and an explicit Nextcloud 33–35 compatibility claim.
- `appinfo/database.xml` declares the current app-owned Library tables/fields/indexes and validates against `https://apps.nextcloud.com/schema/apps/database.xsd`.
- The install archive contains one top-level `library/` folder that must match the app id `library`; it contains only runtime app files plus minimal public metadata files and does not ship tests, local smoke harnesses, source-only Vue files, local docs, caches, build directories, or dependency folders.
- The release package audit passes before checksum generation is reported as usable.
- A signing certificate and private-key handling process exists, and the final release package includes `appinfo/signature.json` produced after the archive staging directory is finalized.
- The generated archive install smoke passes on disposable Nextcloud 33.0.9, 34.0.4 and 35.0.0 instances.
- The live catalogue/browser smoke passes with zero browser console errors.
- App Store listing text, screenshots, privacy notes, limitations, and support expectations are prepared.
- The beta is published as a prerelease after the exact-package and signing gates; stable `0.1.0` remains gated on beta feedback and the manual accessibility/release pass.

## Slices

### AS-001 — Runtime package hygiene

Status: implementation complete; retain the package audit and archive smoke as release gates.

Goal: make the unsigned archive look like a real App Store runtime artifact, not a repository snapshot.

Work:

1. Add an archive audit script that checks required runtime entries and rejects dev-only paths.
2. Exclude `tests/`, `scripts/`, `src/`, `docs/`, `node_modules/`, `build/`, `dist/`, `package.json`, package lock files, local release docs, and local tool configs from the staged archive.
3. Keep minimal public files: `README.md`, `LICENSE`, `CHANGELOG.md`.
4. Run the audit from `scripts/package-release.sh` before reporting the archive path/checksum.
5. Keep generated-archive install smoke working against the reduced artifact.

Acceptance checks:

- `npm run package:release` prints `release_package_audit_ok=true`.
- `tar -tzf dist/library-<version>.tar.gz` shows a single top-level `library/` directory.
- No forbidden dev path appears in the tarball.
- `npm run smoke:release-package` passes after packaging.

### AS-002 — App metadata and reviewer-facing public information

Status: draft copy and public-surface checks are in place; final screenshots and final author/contact presentation remain open for release review.

Goal: make `appinfo/info.xml`, README, release notes and App Store copy align with a public Nextcloud app.

Work:

1. Review `summary`, `description`, category, support/bug links, website, author/contact, and license metadata.
2. Add an [App Store listing draft](app-store-listing.md) with short description, full description, privacy statement, limitations, support URL and screenshot checklist.
3. Keep the README as a one-page external overview and avoid internal host/person/test-environment names.
4. Add docs/tests that prevent stale alpha/private wording from leaking into the App Store-facing surfaces.

Acceptance checks:

- Public metadata docs mention no private hostnames, local paths, or internal test names.
- `info.xml` parses and names the tested Nextcloud 33–35 compatibility range.
- App Store listing draft has description, privacy, limitations, support and screenshot sections.

### AS-003 — Signing certificate and signed package workflow

Status: certificate issued and verified; signed beta.1 and beta.2 rehearsals completed. See the current checkpoint for beta.3.

Goal: make signing repeatable and safe.

Work:

1. Keep the documented local path policy for the private signing key: `~/.nextcloud/certificates/library.key`, never commit it, never package it.
2. Add `scripts/sign-release-package.sh` plus `npm run package:release -- --signed` for staging the finalized app directory, running `occ integrity:sign-app`, and verifying `appinfo/signature.json` before tarball creation.
3. Require `NEXTCLOUD_SIGNING_PRIVATE_KEY` and `NEXTCLOUD_SIGNING_CERTIFICATE` only at signing time; keep keys outside the repository and outside the archive.
4. Document the Nextcloud certificate request step and the public repository URL required by the certificate request.
5. Add package audit checks that fail if a stable App Store package lacks `appinfo/signature.json`, while allowing unsigned alpha rehearsal packages.
6. Follow the Nextcloud certificate convention: keep `~/.nextcloud/certificates/library.key` private, generate `~/.nextcloud/certificates/library.csr` with `openssl req -nodes -newkey rsa:4096 -keyout library.key -out library.csr -subj "/CN=library"`, store the returned `~/.nextcloud/certificates/library.crt`, sign app registration with `echo -n "library" | openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key | openssl base64`, and create the signed package with `npm run package:release -- --signed`.

Guideline notes: App metadata is read from `appinfo/info.xml` and `CHANGELOG.md`; the archive top folder must match the app id `library`; `info.xml` should use the current SPDX license identifier and include the public repository URL.

Acceptance checks:

- `appinfo/signature.json` is present for signed release mode.
- private key files are never included in the archive.
- The signed archive is not modified after signing.

### AS-004 — App Store release rehearsal

Status: the alpha.171 unsigned exact-package, fresh SQLite Nextcloud 34 install and 1,000-publication balanced synthetic mixed-corpus rehearsal are complete historical gates. Beta.1 exact-package installation and all 9 smoke executions passed on each of Nextcloud 33.0.9, 34.0.4 and 35.0.0 using 40 English Gutenberg books. Earlier alpha.174 matrix attempts used a temporary compatibility declaration and brittle screenshot/geometry checks; their historical evidence is retained. A comparable real-world mixed corpus, signed beta package/App Store submission, and formal Trust-and-scale phase closure remain pending or deferred.

Goal: prove every step before the real stable upload.

Work:

1. Build a release candidate archive from a clean checkout.
2. Install it on disposable Nextcloud 33.0.9, 34.0.4 and 35.0.0 instances.
3. Run local gate, generated archive install smoke (including the aggregate-only two-scan unchanged-file contract after migration), Vue/browser smoke, and a small real-file scan.
4. Verify the checksum and tarball contents match the published artifact.
5. Prepare GitHub release notes with known limitations and support scope.

Acceptance checks:

- CI is green for the exact commit used for the package.
- Release smoke output records exact app version, routes, privacy-safe unchanged-file aggregates, Vue smoke, browser smoke and zero console errors.
- Known limitations are visible in release notes and listing draft.

Alpha.153 rehearsal evidence: the exact archive checksum passed and the package was installed and enabled over alpha.152 after a rollback dump was created. Database row counts stayed at 7,120 items and 7,120 files across migration; registry and physical-schema inspection confirmed migration `000100Date20260911130000` and two nullable `varchar(64)` marker columns. Source, archive and installed SHA-256 values matched for the fast-path helpers, metadata service, file/item/scanner services, migration and app XML metadata. The privacy-safe 40-file two-scan smoke indexed all files with zero missing/errors, rewrote 40 item rows and established 40 markers on warm-up, then rewrote zero item rows and retained all markers on the unchanged scan; row counts stayed at 40, and `source_observation_changes=0` confirmed equal before/after path/ETag/mtime/size/MIME observations. Vue, API and browser smokes passed with zero console errors.

Alpha.158 rehearsal evidence: the local gate passed 726 Python tests, 8 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks. Packaging passed audit as an unsigned alpha, staged 118 entries, and created the archive/checksum. Exact-package smoke passed checksum verification, alpha.158 install/enable, PHP lint and route listing. Both runs over the unchanged 40-file root reported `indexed=40`, `missing=0`, `errors=0`, zero catalogue rewrites, 40 markers and `source_observation_changes=0`. Live Vue/API and browser smokes passed. The focused cover gate observed zero non-Nextcloud cover requests with a restored legacy tracker-style seed, proved upload/render/revert and deterministic temporary-second-user isolation, and completed cleanup. The upgrade reported `No upgrade required`, so this is not a fresh database migration rehearsal.

Alpha.159 rehearsal evidence: the local gate passed 727 Python tests, 9 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks. The unsigned package was built and audited with 120 archive entries. Exact-package smoke verified checksum, install/enable, PHP, routes, scanner, Vue/API/browser and privacy behavior and ended with `release_package_smoke_ok=true`; browser console errors and cross-origin cover requests were zero, and second-user isolation passed. The exact archive SHA-256 is `4287ec3f7a798ba6e6000900ca69aee1540b163146f53262a05e49095718c5d7`. The upgrade reported `No upgrade required`, so this is not a fresh-database migration rehearsal.

Alpha.171 unsigned rehearsal evidence: the local package gate passed 1,015 Python tests plus the PHP runtime programs, production Vue build and package audit. `npm run package:release` created `dist/library-0.1.0-alpha.174.tar.gz`; `sha256sum -c` passed and the exact archive used for the mixed rehearsal had SHA-256 `7867b3aa35e206df991db17155dbe1130e28bf4860756a10eeef72d6ffa5691f`. The package audit reported `release_package_audit_ok=true`, `unsigned_alpha_package=true`, `release_package_entries=130`, `package_frontend_bytes=886077`, one top-level `library/` directory and no dev-only paths. Exact-package smoke installed/enabled the archive on Nextcloud 34, linted packaged PHP, listed routes, ran the unchanged-file scanner contract, Vue/API smoke, sidebar HTTP smoke and a basic authenticated browser smoke with `browser_console_errors=0`, ending with `release_package_smoke_ok=true` and `release_package_version=0.1.0-alpha.174`. Fresh SQLite Nextcloud 34 install rehearsal in a disposable container enabled the same archive, reported `library_version=0.1.0-alpha.174`, created all eight expected app tables, recorded `migration_count=33`, `last_migration=000100Date20260916160000`, and ended with `fresh_install_smoke_ok=true`. During rehearsal, the subjects migration was changed to avoid unsupported DBAL `renameColumn()` on fresh install, and the search-gram migration was kept schema-only because synchronous full-catalogue backfill on the large dev catalogue produced 15M rows/lock contention; scanner and item writes maintain grams after install.

The reproducible mixed first-scan rehearsal then installed that exact archive on Nextcloud `34.0.4`, generated and scanned 1,000 byte-deterministic balanced synthetic publications (250 PDF, 250 EPUB, 250 CBZ and 250 standalone OPF), and created 1,000 file rows plus 1,000 catalogue items. The Library scan completed in 12.44 seconds with 1,000 metadata extractions, zero metadata errors, zero missing item rows and zero sidecar rows. The generated source fixture hash was `1f3f8781b2a1f5d69fd6cafe45afe8560f802dc92fb2922724ab68ebf24c136c`; the actual staged Nextcloud tree matched before and after the Library scan (`9921b09eafb6d81a74b87a88f1d52e305a4b71806c706ebdeb612883c5de0b72`). The catalogue performance gate consumed complete response bodies and passed every exercised fast path under the 1.0-second budget: observed paths ranged from 0.024 to 0.072 seconds. Vue/API smoke, owned sidebar HTTP read and authenticated browser smoke passed; the browser rendered the expected 100 cards, opened/rendered/closed one detail sidebar and reported zero console errors. Every temporary app-password cleanup marker was zero, and the run ended with `fresh_install_mixed_smoke_ok=true`. This synthetic gate exercises every supported extractor and the new-user lifecycle, but it is not a claim about every production server or damaged real-world document corpus.

Playwright-foundation rehearsal evidence: the pull-request-sized disposable rehearsal installed the exact unsigned alpha.171 archive with SHA-256 `e99dd740858bf4216477a50c722a74234f9931c8dd9ee2b72684897e5a8860fd` on Nextcloud `34.0.4` and scanned 40 balanced deterministic publications without changing the generated source tree. Five checked-in workflows passed: catalogue search/detail and existing-root folder-picker cancellation in desktop Chromium and Firefox, plus catalogue filter apply/clear in mobile Chromium. Browser errors are collected from the login page onward; only the observed Nextcloud login-status 404 pair is allowed during the completed login phase, and only the exact Nextcloud `FilePicker: No nodes selected` cancellation rejection is allowed immediately after closing that picker. Existing catalogue-performance, Vue/API, sidebar HTTP and CDP browser gates then passed; the CDP gate rendered 40 cards, opened/rendered/closed the sidebar and reported zero console errors. Authentication cleanup markers were zero and the run ended with `playwright_gui_ok=true` and `fresh_install_mixed_smoke_ok=true`. The final local repository gate passed 1,022 Python tests, 433 Vitest tests, the production build and Markdown-link checks.

Alpha.171 security-hardening deployment evidence: PRs #69 and #70 merged on `main`, CI passed for both the PR branch and the post-merge `main` run, and the refreshed unsigned package was deployed to the private `nextcloud` container. The deployed archive SHA-256 is `dee035479b847c091490ad7a57e9d04ef121180ddd6dd73ae7f6d5f00ac7e97f`. Live reflection confirmed legacy `PDOException SQLSTATE[...]` text sanitizes to a public `metadata_extraction_failed` diagnostic without SQLSTATE/table/exception leakage, deployed checksums matched for `appinfo/info.xml` and `lib/Service/SafeDiagnostics.php`, and the authenticated Vue route smoke returned `vue_smoke_ok=true` with temporary-token cleanup markers at zero. This updates the private-test deployment evidence; it does not replace the earlier disposable mixed-corpus and Playwright-foundation rehearsal archives.

### AS-005 — App Store submission

Historical beta.3 checkpoint: owner submission was pending. The owner later chose 0.3 as the first App Store target; use the current 0.3 checklist above.

Goal: publish the accepted beta candidate, then promote a subsequent accepted release to stable.

Work:

1. Freeze and version the accepted candidate as `0.2.0-beta.3`.
2. Build, sign, audit and smoke the final package.
3. Create the GitHub release and upload the exact signed artifact/checksum.
4. Submit/update the app on the Nextcloud App Store.
5. Watch the App Store result and record any review or provider-visibility follow-ups.

Acceptance checks:

- Submitted package is signed, audited, smoke-tested and attached to a GitHub release.
- App Store entry points to the exact package and public repository.
- Support/issue tracker expectations are clear.

Latest author assignment implementation and developer verification: [0.3-alpha.2 report](compatibility-evidence/2026-10-13-author-assignments-alpha2/README.md).

Author profiles, photos/biographies and paged catalogue implemented: [0.3-alpha.3 evidence](compatibility-evidence/2026-10-13-author-profiles-alpha3/README.md). Other metadata normalization priorities are documented in the [author concept](v0.3-author-management.md#other-metadata-worth-normalising): series first, subjects/genres later; languages need consistent codes and identifiers already have dedicated storage.

Imported author conflict review is implemented and deployed: [0.3-alpha.4 verification](compatibility-evidence/2026-10-13-author-conflicts-alpha4/README.md). Per-book decisions survive unchanged rescans; stale previews are rejected.

Alpha.5 adds account-scoped author-ID catalogue filtering, guarded removal of unused authors, OPF creator sort-name import, and shared series records with a paged directory. Developer NC34 upgraded from alpha.4; 107,717 items reconciled to 188 series and 441 links with zero pending/failed records. Focused Chromium/Firefox checks on the 40 English Gutenberg books passed on NC33 and NC34 and in Chromium on NC35. The first NC35 Firefox pass completed the app flow but logged one failed Nextcloud core chunk; the rerun passed with no failed requests or page errors. These focused source-build checks do not replace the signed exact-package matrix. Remaining author work: large merge jobs, canonical search/sort and duplicate-index integration, and wider interruption/concurrency coverage. Series identity merging, multiple series per book editing, and natural ordering of nonnumeric part labels remain future work.
