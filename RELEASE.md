# Release process

This repo is currently prepared for a first GitHub prerelease named `v0.1.0-alpha.1`.

## Release type

- Public alpha / GitHub prerelease.
- App version in `appinfo/info.xml`: `0.1.0-alpha.82` for the first alpha candidate.
- License: AGPL-3.0-or-later.
- Target runtime: Nextcloud 34.

## Local release gates

Run the complete local check suite before tagging:

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
dist/library-0.1.0-alpha.82.tar.gz
dist/library-0.1.0-alpha.82.tar.gz.sha256
```

The archive contains a top-level `library-0.1.0-alpha.82/` directory and excludes `.git`, `.github`, `node_modules`, `build`, `dist`, caches and bytecode.

## Package install smoke

Before publishing, install the generated package into a clean or disposable Nextcloud 34 instance:

```bash
rm -rf /var/www/html/custom_apps/library
tar -xzf dist/library-0.1.0-alpha.82.tar.gz -C /var/www/html/custom_apps
mv /var/www/html/custom_apps/library-0.1.0-alpha.82 /var/www/html/custom_apps/library
chown -R www-data:www-data /var/www/html/custom_apps/library
sudo -u www-data php occ app:enable library
sudo -u www-data php occ upgrade
```

Then run the live alpha smoke:

```bash
npm run smoke:vue
```

For the development Docker container, the equivalent package install smoke can be done with `docker exec` around the same copy/extract/enable/upgrade steps.

## Tagging

After local gates and the package install smoke pass:

```bash
git tag -a v0.1.0-alpha.1 -m "Library v0.1.0-alpha.1"
git push origin v0.1.0-alpha.1
```

## GitHub prerelease

Create a GitHub prerelease from the annotated tag and attach:

- `dist/library-0.1.0-alpha.82.tar.gz`
- `dist/library-0.1.0-alpha.82.tar.gz.sha256`

Release note summary should link to:

- [CHANGELOG.md](CHANGELOG.md)
- [Alpha test checklist](docs/alpha-test-checklist.md)
- [User and admin guide](docs/user-guide.md)

Mark the GitHub release as a **GitHub prerelease** because important limitations remain: no source-folder sidecar write-back, no fresh-install restore from sidecars, no app-owned cover cache, no scheduling/notifications and no shared-root admin model.
