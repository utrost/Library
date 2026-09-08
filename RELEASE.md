# Release process

This repo is prepared for Uwe's v0.1 manual testing pass from app version `0.1.0-alpha.112`. The existing public prerelease tag is `v0.1.0-alpha.1`; create a new tag only after Uwe's manual test pass is accepted.

## Release type

- Private/early-tester v0.1 candidate on a Nextcloud 34 test instance.
- App version in `appinfo/info.xml`: `0.1.0-alpha.112`.
- License: AGPL-3.0-or-later.
- Target runtime: Nextcloud 34.

## Local release gates

Run the complete local check suite before handing the build to a tester:

```bash
npm run check
```

This runs Python contract tests, frontend Vitest, frontend build, whitespace checks and Markdown link checks.

## Build the release package

Create the app archive with:

```bash
scripts/package-release.sh
```

The script runs `npm ci`, `npm run build`, `python -m pytest -q`, then writes:

```text
dist/library-0.1.0-alpha.112.tar.gz
dist/library-0.1.0-alpha.112.tar.gz.sha256
```

The archive contains a top-level `library-0.1.0-alpha.112/` directory and excludes `.git`, `.github`, `node_modules`, `build`, `dist`, caches and bytecode.

## Generated archive install smoke

Before Uwe tests v0.1 functionality, install and smoke the generated archive, not only a copied checkout:

```bash
npm run smoke:release-package
```

That script verifies the archive checksum, disables the currently installed app if present, removes the development copy from `custom_apps/library`, extracts `dist/library-0.1.0-alpha.112.tar.gz`, fixes ownership/permissions, runs PHP lint on key app files, enables the app, runs `occ upgrade`, lists app routes and runs the live Vue/browser smoke scripts.

For a non-Docker disposable instance, the equivalent manual steps are:

```bash
sha256sum -c dist/library-0.1.0-alpha.112.tar.gz.sha256
rm -rf /var/www/html/custom_apps/library
mkdir -p /var/www/html/custom_apps
tar -xzf dist/library-0.1.0-alpha.112.tar.gz -C /var/www/html/custom_apps
mv /var/www/html/custom_apps/library-0.1.0-alpha.112 /var/www/html/custom_apps/library
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

Do not retag `v0.1.0-alpha.1`. If Uwe's v0.1 test pass accepts this candidate and a new prerelease is wanted, create a new annotated tag such as:

```bash
git tag -a v0.1.0-alpha.2 -m "Library v0.1.0-alpha.2"
git push origin v0.1.0-alpha.2
```

## GitHub prerelease

Create a GitHub prerelease from the accepted annotated tag and attach:

- `dist/library-0.1.0-alpha.112.tar.gz`
- `dist/library-0.1.0-alpha.112.tar.gz.sha256`

Release note summary should link to:

- [CHANGELOG.md](CHANGELOG.md)
- [Current state and risk register](docs/current-state-and-risk-register.md)
- [Human test handbook](docs/human-test-handbook.md)
- [Public alpha test checklist](docs/alpha-test-checklist.md)
- [User and admin guide](docs/user-guide.md)

Mark any GitHub release as a **GitHub prerelease** because important limitations remain: no source-folder sidecar write-back, no fresh-install restore from sidecars, no app-owned cover cache/manual cover override, no scheduling/notifications, no creator pages/saved views/smart collections, and no shared-root admin model.
