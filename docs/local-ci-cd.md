# Local CI and test deployment

Run these commands on a workstation with Docker, Node 24, npm 11, Python 3.11 (and `uv` on Ubuntu systems without `ensurepip`), and the repository's signing certificate and private key stored outside the checkout. The commands do not start GitHub Actions. They write logs and receipts under ignored `dist/local-ci/` and keep secrets out of the archive.

## Checks

Commit the source you want to check, then run:

```sh
bash scripts/local-ci.sh quick
bash scripts/local-ci.sh full
```

`quick` installs pinned Python and npm dependencies locally, runs the production dependency audit and app-specific security gates, then runs the Python, PHP, parser, translation, frontend, build, link and lint checks. PHP runs in the cached `php:8.3-cli` Docker image when host PHP is unavailable.

`full` adds pinned CodeQL JavaScript/Python analysis and the disposable 40-book Nextcloud 34 GUI rehearsal. The first run downloads the checksum-verified CodeQL CLI and fixed query-pack versions into the user's cache. The GUI rehearsal runs in an isolated Git worktree. Its temporary signing certificate and archive never replace the archive in this checkout. A successful full run writes `dist/local-ci/last-success.json` for the exact commit and app version. Failed or partial runs do not write that receipt.

## Signed package and test deployment

Set the two signing paths in your shell without storing their values in the repository:

```sh
export NEXTCLOUD_SIGNING_PRIVATE_KEY=/path/outside/repository/library.key
export NEXTCLOUD_SIGNING_CERTIFICATE=/path/outside/repository/library.crt
bash scripts/local-cd.sh package
bash scripts/local-cd.sh preflight
bash scripts/local-cd.sh deploy-test
```

`package` uses the existing signed release packager, which repeats its source checks locally and writes a checksum, SBOM and provenance. `preflight` validates those artifacts, the full local CI receipt, the installed signing certificate and migration-file parity. `deploy-test` backs up the installed app directory, replaces it under maintenance mode, runs `occ upgrade`, refreshes Apache and checks the version, integrity, maintenance state and unchanged catalogue counts. If installation fails, it attempts to restore the prior app files and version; the private rollback directory is printed. Set `LIBRARY_TEST_CONTAINER` if the local test container is not named `nextcloud`.

The deployment command refuses changed migration files because app-file rollback alone cannot undo a database migration. For a migration release, take a database backup and use the separate migration procedure. The local test deployment does not publish to GitHub Releases or the Nextcloud App Store.

For a stable release, run the existing NC33–35 and database compatibility scripts locally against the exact signed archive in addition to this test-instance pipeline. Record their results before publication.

## GitHub Actions status

The repository's CI and Security workflows still have automatic GitHub triggers. Local commands do not consume Actions minutes, but pushing or opening/updating a PR may still schedule hosted jobs. Do not push solely to run these checks. Disabling the hosted workflows requires separate approval because it also removes the shared security checks.
