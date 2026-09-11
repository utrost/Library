# App Store readiness roadmap

Status: active release-readiness roadmap  
Target: signed Nextcloud App Store release for Nextcloud 34  
Current candidate baseline: `0.1.0-alpha.161`

Library alpha.159 passed its full local gate, unsigned package build/audit, and exact-package smoke on a Nextcloud 34 instance. App Store readiness is a separate hardening track: the release artifact must be clean, signed, documented for reviewers, and backed by repeatable checks that make a stable `0.1.0` upload credible.

The current candidate includes aggregate scan-job counters/duration, privacy-safe operation logs, throttled progress/cancellation checks through `Version000100Date20260911140000`, frontend request-race hardening, and repair root-containment enforcement. This is not external telemetry or proof of universal speedup. Alpha.159 exact-package/live evidence is complete; fresh-database migration rehearsal, realistic scale data gates, the signed package/App Store submission, and formal Trust-and-scale phase closure remain deferred.

## Definition of ready

Library is App-Store-ready when all of these are true:

- `appinfo/info.xml` contains public metadata, support URLs, AGPL licensing, and an explicit Nextcloud 34 compatibility claim.
- `appinfo/database.xml` declares the current app-owned Library tables/fields/indexes and validates against `https://apps.nextcloud.com/schema/apps/database.xsd`.
- The install archive contains one top-level `library/` folder that must match the app id `library`; it contains only runtime app files plus minimal public metadata files and does not ship tests, local smoke harnesses, source-only Vue files, local docs, caches, build directories, or dependency folders.
- The release package audit passes before checksum generation is reported as usable.
- A signing certificate and private-key handling process exists, and the final release package includes `appinfo/signature.json` produced after the archive staging directory is finalized.
- The generated archive install smoke passes on a disposable Nextcloud 34 instance.
- The live catalogue/browser smoke passes with zero browser console errors.
- App Store listing text, screenshots, privacy notes, limitations, and support expectations are prepared.
- The final public version decision is made: publish `0.1.0` only after the alpha/manual pass accepts the candidate; prerelease uploads are optional rehearsal artifacts and may not be visible on managed hosting providers.

## Slices

### AS-001 — Runtime package hygiene

Status: started.

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

Status: started.

Goal: make `appinfo/info.xml`, README, release notes and App Store copy align with a public Nextcloud app.

Work:

1. Review `summary`, `description`, category, support/bug links, website, author/contact, and license metadata.
2. Add an [App Store listing draft](app-store-listing.md) with short description, full description, privacy statement, limitations, support URL and screenshot checklist.
3. Keep the README as a one-page external overview and avoid internal host/person/test-environment names.
4. Add docs/tests that prevent stale alpha/private wording from leaking into the App Store-facing surfaces.

Acceptance checks:

- Public metadata docs mention no private hostnames, local paths, or internal test names.
- `info.xml` parses and names Nextcloud 34 compatibility only until another version is tested.
- App Store listing draft has description, privacy, limitations, support and screenshot sections.

### AS-003 — Signing certificate and signed package workflow

Status: started; final signed release remains blocked on external certificate request.

Goal: make signing repeatable and safe.

Work:

1. Document the local path policy for the private signing key: never commit it, never package it.
2. Add `scripts/sign-release-package.sh` plus `npm run package:release -- --signed` for staging the finalized app directory, running `occ integrity:sign-app`, and verifying `appinfo/signature.json` before tarball creation.
3. Require `NEXTCLOUD_SIGNING_PRIVATE_KEY` and `NEXTCLOUD_SIGNING_CERTIFICATE` only at signing time; keep keys outside the repository and outside the archive.
4. Document the Nextcloud certificate request step and the public repository URL required by the certificate request.
5. Add package audit checks that fail if a stable App Store package lacks `appinfo/signature.json`, while allowing unsigned alpha rehearsal packages.
6. Follow the Nextcloud certificate convention: keep `~/.nextcloud/certificates/library.key` private, generate `~/.nextcloud/certificates/library.csr` with `openssl req -nodes -newkey rsa:4096 -keyout library.key -out library.csr -subj "/CN=library"`, store the returned `~/.nextcloud/certificates/library.crt`, sign app registration with `echo -n "library" | openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key | openssl base64`, and sign the exact release archive with `openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key dist/library-0.1.0-alpha.161.tar.gz | openssl base64`.

Guideline notes: App metadata is read from `appinfo/info.xml` and `CHANGELOG.md`; the archive top folder must match the app id `library`; `info.xml` should use the current SPDX license identifier and include the public repository URL.

Acceptance checks:

- `appinfo/signature.json` is present for signed release mode.
- private key files are never included in the archive.
- The signed archive is not modified after signing.

### AS-004 — App Store release rehearsal

Status: alpha.159 exact-package and live rehearsal complete; fresh database migration, realistic scale data, clean-checkout CI, signed stable package/App Store submission, and formal Trust-and-scale phase closure remain pending or deferred.

Goal: prove every step before the real stable upload.

Work:

1. Build a release candidate archive from a clean checkout.
2. Install it on a disposable Nextcloud 34 instance.
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

### AS-005 — Stable `0.1.0` App Store submission

Status: decision-gated.

Goal: publish a stable App Store package once the alpha candidate is accepted.

Work:

1. Bump from alpha to `0.1.0` only after the manual/alpha test pass accepts the candidate.
2. Build, sign, audit and smoke the final package.
3. Create the GitHub release and upload the exact signed artifact/checksum.
4. Submit/update the app on the Nextcloud App Store.
5. Watch the App Store result and record any review or provider-visibility follow-ups.

Acceptance checks:

- Stable package is signed, audited, smoke-tested and attached to a GitHub release.
- App Store entry points to the exact package and public repository.
- Support/issue tracker expectations are clear.
