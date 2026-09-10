# App Store readiness roadmap

Status: active release-readiness roadmap  
Target: signed Nextcloud App Store release for Nextcloud 34  
Current candidate baseline: `0.1.0-alpha.142`

Library is already packaged and smoke-tested as an alpha candidate on a Nextcloud 34 instance. App Store readiness is a separate hardening track: the release artifact must be clean, signed, documented for reviewers, and backed by repeatable checks that make a stable `0.1.0` upload credible.

## Definition of ready

Library is App-Store-ready when all of these are true:

- `appinfo/info.xml` contains public metadata, support URLs, AGPL licensing, and an explicit Nextcloud 34 compatibility claim.
- The install archive contains only runtime app files plus minimal public metadata files; it does not ship tests, local smoke harnesses, source-only Vue files, local docs, caches, build directories, or dependency folders.
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
- `tar -tzf dist/library-<version>.tar.gz` shows a single top-level `library-<version>/` directory.
- No forbidden dev path appears in the tarball.
- `npm run smoke:release-package` passes after packaging.

### AS-002 — App metadata and reviewer-facing public information

Status: next.

Goal: make `appinfo/info.xml`, README, release notes and App Store copy align with a public Nextcloud app.

Work:

1. Review `summary`, `description`, category, support/bug links, website, author/contact, and license metadata.
2. Add an App Store listing draft with short description, full description, privacy statement, limitations, support URL and screenshot checklist.
3. Keep the README as a one-page external overview and avoid internal host/person/test-environment names.
4. Add docs/tests that prevent stale alpha/private wording from leaking into the App Store-facing surfaces.

Acceptance checks:

- Public metadata docs mention no private hostnames, local paths, or internal test names.
- `info.xml` parses and names Nextcloud 34 compatibility only until another version is tested.
- App Store listing draft has description, privacy, limitations, support and screenshot sections.

### AS-003 — Signing certificate and signed package workflow

Status: blocked on external certificate request.

Goal: make signing repeatable and safe.

Work:

1. Document the local path policy for the private signing key: never commit it, never package it.
2. Add a script or release step for staging the finalized app directory, running `occ integrity:sign-app`, and verifying `appinfo/signature.json` before tarball creation.
3. Document the Nextcloud certificate request step and the public repository URL required by the certificate request.
4. Add package audit checks that fail if a stable App Store package lacks `appinfo/signature.json`, while allowing unsigned alpha rehearsal packages.

Acceptance checks:

- `appinfo/signature.json` is present for signed release mode.
- private key files are never included in the archive.
- The signed archive is not modified after signing.

### AS-004 — App Store release rehearsal

Status: planned.

Goal: prove every step before the real stable upload.

Work:

1. Build a release candidate archive from a clean checkout.
2. Install it on a disposable Nextcloud 34 instance.
3. Run local gate, generated archive install smoke, Vue/browser smoke, and a small real-file scan.
4. Verify the checksum and tarball contents match the published artifact.
5. Prepare GitHub release notes with known limitations and support scope.

Acceptance checks:

- CI is green for the exact commit used for the package.
- Release smoke output records app version, routes, Vue smoke, browser smoke and zero console errors.
- Known limitations are visible in release notes and listing draft.

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
