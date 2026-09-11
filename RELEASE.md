# Release process

This repo is prepared for the v0.1 manual testing pass from app version `0.1.0-alpha.157`. The existing public prerelease tag is `v0.1.0-alpha.1`; create a new tag only after the manual test pass is accepted.

## Release type

- Private/early-tester v0.1 candidate on a Nextcloud 34 test instance.
- App version in `appinfo/info.xml`: `0.1.0-alpha.157`.
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

The script runs `npm ci`, `npm run build`, `python -m pytest -q`, the focused PHP runtime suite, stages runtime app files, audits the tarball, then writes:

```text
dist/library-0.1.0-alpha.157.tar.gz
dist/library-0.1.0-alpha.157.tar.gz.sha256
```

The archive contains a single top-level `library/` directory, which must match the app id `library` for Nextcloud App Store uploads. For App Store hygiene it excludes `.git`, `.github`, `node_modules`, `build`, `dist`, `tests`, `scripts`, `src`, `docs`, `package.json`, package locks, local release docs, local tool configs, caches and bytecode. It keeps the runtime app directories plus minimal public files: `README.md`, `LICENSE`, and `CHANGELOG.md`.

Audit an existing package with:

```bash
npm run audit:release-package
```

The audit must print `release_package_audit_ok=true` before a package is considered uploadable. Unsigned alpha rehearsal packages are allowed, but stable release packages require `appinfo/signature.json`.

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
openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key dist/library-0.1.0-alpha.157.tar.gz | openssl base64
```

## Generated archive install smoke

Before manual v0.1 functionality testing, install and smoke the generated archive, not only a copied checkout:

```bash
npm run smoke:release-package
```

That script verifies the archive checksum and exact alpha.157 version, disables the currently installed app if present, removes the development copy from `custom_apps/library`, extracts `dist/library-0.1.0-alpha.157.tar.gz`, fixes ownership/permissions, runs PHP lint on key app files including the current migrations and fast-path classes, enables the app, runs `occ upgrade`, lists app routes, invokes the repository-side unchanged-file smoke, and then runs the live Vue/browser smokes. The unchanged-file smoke selects the smallest already-indexed non-empty enabled root without printing private identifiers, runs the production scanner twice, and emits aggregate acceptance evidence only.

Alpha.157 verification evidence:

- `npm run check` passed with 718 Python tests, 7 PHP runtime programs, 26 Vitest tests, the production build and Markdown-link checks.
- `npm run package:release` passed its audit as an allowed unsigned alpha package, staged 116 archive entries, and created the archive and SHA-256 checksum.
- `npm run smoke:release-package` verified the checksum, installed and enabled the exact alpha.157 package, passed PHP lint and route listing, and ended with `release_package_smoke_ok=true`.
- The privacy-safe unchanged-root smoke ran the same 40-file root twice. Both scans reported `indexed=40`, `missing=0`, `errors=0`, zero catalogue rewrites, 40 markers and `source_observation_changes=0`.
- Live Vue/API smoke passed. Browser smoke passed with zero console errors and the mutation-restoration markers.
- `occ upgrade` reported `No upgrade required`. This verifies operation against the existing database state, not a fresh database migration; a fresh migration rehearsal remains pending.

Historical alpha.153 package evidence:

- The pre-upgrade installed version was `0.1.0-alpha.152`. A 12,223,391-byte rollback SQL dump was created before migration; the release record intentionally omits its host-local path.
- Database rows were unchanged across migration: `library_items=7,120` and `library_files=7,120` both before and after. The migration registry contains `000100Date20260911130000`, and the physical `metadata_input_fingerprint` and `metadata_extractor_revision` columns are nullable `varchar(64)`.
- The checksum for the exact alpha.153 archive passed, and that archive was installed and enabled. This remains historical evidence and is separate from the alpha.157 result above.
- The privacy-safe smallest-root smoke contained 40 files. Both scans reported `roots=1`, `indexed=40`, `missing=0`, `errors=0`. The warm-up scan rewrote 40 item rows and established 40 markers; the second unchanged scan rewrote 0 item rows and retained 40 markers. Item and file row counts remained 40, and changes to the observed source path/ETag/mtime/size/MIME values remained 0.
- Vue, API and browser smoke passed against the installed exact package; browser console errors were 0.

The 40-file results verify write elision only. Alpha.154 adds measured aggregate operation boundaries, but those observations are not proof of a universal speedup. The alpha.157 package/install/API/browser/40-file rehearsal is complete; only the fresh database migration rehearsal remains pending from that evidence set.

For a non-Docker disposable instance, the equivalent manual steps are:

```bash
(cd dist && sha256sum -c library-0.1.0-alpha.157.tar.gz.sha256)
rm -rf /var/www/html/custom_apps/library
mkdir -p /var/www/html/custom_apps
tar -xzf dist/library-0.1.0-alpha.157.tar.gz -C /var/www/html/custom_apps
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

- `dist/library-0.1.0-alpha.157.tar.gz`
- `dist/library-0.1.0-alpha.157.tar.gz.sha256`

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
