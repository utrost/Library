# Release process

This repo is prepared for the v0.1 manual testing pass from app version `0.1.0-alpha.162`. The existing public prerelease tag is `v0.1.0-alpha.1`; create a new tag only after the manual test pass is accepted.

## Release type

- Private/early-tester v0.1 candidate on a Nextcloud 34 test instance.
- App version in `appinfo/info.xml`: `0.1.0-alpha.162`.
- License: AGPL-3.0-or-later.
- Target runtime: Nextcloud 34.

## Local release gates

Run the complete local check suite before handing the build to a tester:

```bash
npm run check
```

This runs Python contract tests, focused PHP runtime tests, frontend Vitest, frontend build, whitespace checks and Markdown link checks.

## Build the release package

Create the app archive with:

```bash
scripts/package-release.sh
```

The script runs the test/build gates, applies the intentional frontend manifest, creates a reproducible archive, audits it, then writes:

```text
dist/library-0.1.0-alpha.162.tar.gz
dist/library-0.1.0-alpha.162.tar.gz.sha256
```

The archive contains one `library/` directory and excludes development material. Its frontend manifest is the current versioned Vue JS/CSS plus referenced `style.css`, `library-detail.js`, `library-shell.js`, and `scan-progress.js`. Historical assets, unversioned aliases, orphan chunks, and source maps are rejected. The active module closure is limited to 2,000,000 bytes/eight chunks; the complete frontend manifest is separately limited to 1,200,000 bytes. Entries are sorted and normalized to owner/group 0, directory mode 0755, file mode 0644, and one mtime. `SOURCE_DATE_EPOCH` selects it; the fallback is `946684800` (2000-01-01T00:00:00Z). Gzip name/timestamp metadata is disabled.

Audit an existing package with:

```bash
npm run audit:release-package
```

The audit must print `release_package_audit_ok=true` and `module_closure_ok=true`. It enforces archive safety, the exact frontend manifest, both budgets, and source-map rejection. Closure follows relative static imports, re-exports, and literal dynamic imports, and rejects bare, absolute, URL, or non-literal specifiers. There is currently no browser-URL allowlist. Unsigned alpha rehearsals are allowed; stable releases require `appinfo/signature.json`.

## Signed App Store package

A stable App Store package must be signed after the app directory is staged and before the tarball/checksum are written:

```bash
export NEXTCLOUD_SIGNING_PRIVATE_KEY=/path/to/private.key
export NEXTCLOUD_SIGNING_CERTIFICATE=/path/to/certificate.crt
npm run package:release -- --signed
```

The signing script copies the staged app, private key and certificate into a temporary Nextcloud container directory, runs `occ integrity:sign-app`, copies only `appinfo/signature.json` back into the staged app, removes the temporary directory, and then lets the package script create and audit the archive. Private key files must never be committed or shipped.

For a signed package, the audit runs with `--require-signature`. The same requirement is applied automatically for stable version strings without a prerelease suffix.

Nextcloud App Store developer guideline notes:

- App metadata is read from `appinfo/info.xml` and `CHANGELOG.md`.
- The app-owned database schema is declared in `appinfo/database.xml` and should validate against `https://apps.nextcloud.com/schema/apps/database.xsd` before release.
- The archive must contain one top-level folder whose name matches the app id; for this app that folder is `library/`.
- Keep certificate files outside the repository, using the documented Nextcloud convention:
  - `~/.nextcloud/certificates/library.key`
  - `~/.nextcloud/certificates/library.csr`
  - `~/.nextcloud/certificates/library.crt`
- Generate the key and certificate signing request with:

```bash
mkdir -p ~/.nextcloud/certificates
cd ~/.nextcloud/certificates
openssl req -nodes -newkey rsa:4096 -keyout library.key -out library.csr -subj "/CN=library"
```

- Register the app by pasting the public certificate and signing the app id with:

```bash
echo -n "library" | openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key | openssl base64
```

- Upload a release by providing the tarball download URL and a signature over the exact archive:

```bash
openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key dist/library-0.1.0-alpha.162.tar.gz | openssl base64
```

## Generated archive install smoke

Before manual v0.1 functionality testing, install and smoke the generated archive, not only a copied checkout:

```bash
npm run smoke:release-package
```

That script verifies and installs the exact generated archive before running live smokes. The generated `.sha256` file is the archive checksum sidecar and is not packaged. `/tmp/library-alpha162-codex-remediation.md` is the package-excluded alpha.162 remediation and gate record; it is not a shipped sidecar. The release version in `package.json`, `package-lock.json`, `appinfo/info.xml`, versioned frontend asset names, archive/checksum names, exact-package smoke expectation, and this evidence-sidecar reference must remain identical. The following older sections remain historical evidence only.

Alpha.159 verification evidence:

- The full local gate passed with 727 Python tests, 9 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks.
- `npm run package:release` built the unsigned alpha archive and passed its package audit with 120 archive entries.
- Archive `dist/library-0.1.0-alpha.159.tar.gz` has SHA-256 `4287ec3f7a798ba6e6000900ca69aee1540b163146f53262a05e49095718c5d7`.
- `npm run smoke:release-package` verified the exact package checksum, install/enable, PHP, routes, scanner, Vue/API/browser and privacy behavior, and ended with `release_package_smoke_ok=true`.
- Browser console errors and cross-origin cover requests were both zero; deterministic second-user isolation passed.
- `occ upgrade` reported `No upgrade required`. This verifies the existing database state, not a fresh-database migration; that rehearsal remains pending.

Realistic scale data gates, a signed package and App Store submission, and formal Trust-and-scale phase closure remain deferred. Alpha.159 does not close those gates.

Historical alpha.158 verification evidence:

- `npm run check` passed with 726 Python tests, 8 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks.
- `npm run package:release` passed its audit as an allowed unsigned alpha package, staged 118 archive entries, and created the archive and SHA-256 checksum.
- The live cover-privacy gate safely seeded and restored a legacy tracker-style URL, captured catalogue and detail requests, observed zero non-Nextcloud cover requests, proved upload/render/revert, and proved temporary-second-user read/mutation isolation. Cleanup removed both temporary app passwords and the deterministic temporary user without emitting credentials or identifiers.
- Remote cover SSRF was not present because no server fetch occurred. Alpha.158 removes direct browser leakage and intentionally does not introduce server fetching; archive hardening, cover caching, and broader privacy work remain separate.
- `npm run smoke:release-package` verified the checksum, installed and enabled the exact alpha.158 package, passed PHP lint and route listing, and ended with `release_package_smoke_ok=true`.
- The privacy-safe unchanged-root smoke ran the same 40-file root twice. Both scans reported `indexed=40`, `missing=0`, `errors=0`, zero catalogue rewrites, 40 markers and `source_observation_changes=0`.
- Live Vue/API smoke passed. Browser smoke passed with zero console errors and the mutation-restoration markers.
- `occ upgrade` reported `No upgrade required`. This verifies operation against the existing database state, not a fresh database migration; a fresh migration rehearsal remains pending.

Historical alpha.153 package evidence:

- The pre-upgrade installed version was `0.1.0-alpha.152`. A 12,223,391-byte rollback SQL dump was created before migration; the release record intentionally omits its host-local path.
- Database rows were unchanged across migration: `library_items=7,120` and `library_files=7,120` both before and after. The migration registry contains `000100Date20260911130000`, and the physical `metadata_input_fingerprint` and `metadata_extractor_revision` columns are nullable `varchar(64)`.
- The checksum for the exact alpha.153 archive passed, and that archive was installed and enabled. This remains historical evidence and is separate from the alpha.158 result above.
- The privacy-safe smallest-root smoke contained 40 files. Both scans reported `roots=1`, `indexed=40`, `missing=0`, `errors=0`. The warm-up scan rewrote 40 item rows and established 40 markers; the second unchanged scan rewrote 0 item rows and retained 40 markers. Item and file row counts remained 40, and changes to the observed source path/ETag/mtime/size/MIME values remained 0.
- Vue, API and browser smoke passed against the installed exact package; browser console errors were 0.

The 40-file results verify write elision only. Alpha.154 adds measured aggregate operation boundaries, but those observations are not proof of a universal speedup. The historical alpha.158 package/install/API/browser/40-file rehearsal is complete; its fresh database migration rehearsal remains pending.

For a non-Docker disposable instance, the equivalent manual steps are:

```bash
(cd dist && sha256sum -c library-0.1.0-alpha.162.tar.gz.sha256)
rm -rf /var/www/html/custom_apps/library
mkdir -p /var/www/html/custom_apps
tar -xzf dist/library-0.1.0-alpha.162.tar.gz -C /var/www/html/custom_apps
chown -R www-data:www-data /var/www/html/custom_apps/library
sudo -u www-data php -l /var/www/html/custom_apps/library/appinfo/routes.php
sudo -u www-data php occ app:enable library
sudo -u www-data php occ upgrade
sudo -u www-data php occ router:list library
```

Then run the live smoke scripts from the repository against that instance if configured:

```bash
npm run smoke:vue
npm run smoke:browser
```

## Human test handoff

After automated gates and generated archive install smoke pass, use:

- [Current state and risk register](docs/current-state-and-risk-register.md)
- [Human test handbook](docs/human-test-handbook.md)
- [Public alpha test checklist](docs/alpha-test-checklist.md)
- [User and admin guide](docs/user-guide.md)

The handbook is the detailed human-executable test plan. The shorter alpha checklist is the quick smoke guide.

## Tagging

Do not retag `v0.1.0-alpha.1`. If the v0.1 test pass accepts this candidate and a new prerelease is wanted, create a new annotated tag such as:

```bash
git tag -a v0.1.0-alpha.2 -m "Library v0.1.0-alpha.2"
git push origin v0.1.0-alpha.2
```

## GitHub prerelease

Create a GitHub prerelease from the accepted annotated tag and attach:

- `dist/library-0.1.0-alpha.162.tar.gz`
- `dist/library-0.1.0-alpha.162.tar.gz.sha256`

Release note summary:

- Ordinary trusted unchanged indexed files with existing items and the current metadata pipeline revision skip extraction and catalogue-item writes when primary plus selected-OPF identity/path/ETag/mtime/size/type inputs match.
- Weak/unavailable storage metadata, changed root/path/content/sidecar/revision state, prior missing/metadata-error/sidecar state, missing items, retry and recheck all use normal extraction. The first successful stable post-upgrade scan warms nullable markers.
- Aggregate scan/catalogue/cover operation instrumentation and progress throttling are included; this is not external telemetry and makes no universal speedup claim.

Supporting links:

- [CHANGELOG.md](CHANGELOG.md)
- [Current state and risk register](docs/current-state-and-risk-register.md)
- [Human test handbook](docs/human-test-handbook.md)
- [Public alpha test checklist](docs/alpha-test-checklist.md)
- [User and admin guide](docs/user-guide.md)

Mark any GitHub release as a **GitHub prerelease** because important limitations remain: no app-owned cover cache/crop workflow, no scheduling/notifications, and no shared-root admin model.
