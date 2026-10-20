# Confirmed book deletion — alpha.31

Status: **signed 0.3.0-alpha.31 deployed and verified on developer NC34**, 20 October 2026. Ready for owner testing; this is not the App Store certification matrix.

## Contract

Details offers a separate Delete book action. An authenticated GET to `/items/{itemId}/deletion` previews the file, associated OPF, retention reason and conditional parent cleanup. A CSRF-protected POST to that endpoint accepts only its encrypted, purpose/user/item-bound ten-minute confirmation token. All targets are resolved by owned file ID; cached paths never select replacement files for destructive operations. Stale identities, revisions or permissions require another confirmation.

The importer and deletion service use the same OPF precedence. Shared OPFs remain. Other formats, cover images, hidden files, configured roots, mount roots and ancestor folders are preserved. A request-local storage wrapper checks exact targets inside Nextcloud's existing exclusive delete lock and delegates to the original chain, preserving trash behavior. OPF consumer checks upgrade the parent lock for the deletion; empty-folder removal rechecks the storage directory, including hidden entries, inside the folder lock. Transactional file locking must be enabled. The adapter is restored in `finally` and does not intercept unrelated trash-retention operations.

Successful source deletion is followed by catalogue/derived-link cleanup; reading-list entries remain unavailable. File and database operations cannot be one transaction, so cleanup failures return explicit partial results. Normal change-journal reconciliation remains enabled. Restoring a source file and rescanning imports it again; removed Library-only edits are not recovered.

No database migration. Human acceptance: handbook H03-23.

## Verification and deployment

- [PR #125](https://github.com/utrost/Library/pull/125), merged as `bb5d820801d59a571ff74a9b3d285f30831aa43d`.
- [CI](https://github.com/utrost/Library/actions/runs/39410837338): source and GUI jobs passed, including **47 existing Playwright journeys**, author/directory regression smokes and the new deletion fixture.
- [Security](https://github.com/utrost/Library/actions/runs/39410837339): CodeQL, secret scanning and app-specific static gates passed.
- Local checks: **1,047 Python checks**, PHP runtime suites, **518 parser vectors**, **562 Vitest tests across 41 files**, release/signature/SBOM/provenance audits.
- Packaged fresh NC34 rehearsal: backend deletion scenarios and Chromium, Firefox and mobile confirmation journeys passed. Screenshots inspected in light/dark themes; dialog controls fit at 390 × 844 and desktop widths.
- Backend cases cover exclusive/shared/same-stem OPFs, EPUB/PDF siblings, standalone OPFs, hidden files, retained covers, protected roots, read-only targets, forged/expired/cross-account tokens, changed metadata/source identities, replacement files, replay, injected source/OPF failures, concurrent folder changes, list tombstones, derived-link cleanup and actual trash restoration followed by rescan. SQLite additionally injects catalogue-cleanup failure with a temporary trigger.
- Installed signed-package smoke on NC34 repeated backend cases and Chromium/Firefox/mobile journeys using a newly created isolated account. **Zero page errors, console errors or metadata Save requests**. Cancel/Escape preserved the draft; confirming deletion discarded it and returned to the originating filtered catalogue. Fixture account and temporary credentials were removed afterward. Existing library books were not used for destructive testing.

The first CI run caught a template asset marker omitted from the commit; it was committed before the passing run above. Local rehearsal also caught Nextcloud's closed-dialog display reset and the need to perform the final directory inspection inside the existing storage delete lock; both were corrected before merge.

### Deployment

- Nextcloud **34.0.3.2**, Library **0.3.0-alpha.31**.
- Signed archive: `library-0.3.0-alpha.31.tar.gz`.
- SHA-256: `0b937cb057d1a571cca4f384d9686472edb0e6815f1919b9e57888c2176a2ade`.
- Rollback directory in the developer container: `/tmp/library-before-alpha31-20261020T110150Z`.
- Integrity clean, maintenance mode off, no pending database upgrade. No new database migration.
- Existing catalogue **107,717 before deployment and after installed fixture cleanup**.
- HTTP-served versioned JavaScript and CSS match the signed archive byte for byte; see [asset hashes and verification summary](verification.json).
- Frontend package **957,331 / 1,320,000 bytes**. Whitespace compaction of the final browser module recovered space; identifiers and licenses remain preserved. This replaces the previous 1,319,952-byte frontend without raising its limit.

The final documentation commit follows the application merge and deployment. The signed package provenance identifies the merged application commit above. Screenshots and raw private fixture evidence were inspected locally and are not committed.

### Repeat and human acceptance

Use handbook **H03-23**, with disposable files only. If the immediate parent was deleted, restore it before restoring the source file in Nextcloud Deleted files. Recovery depends on storage/retention support; Library-only edits are not restored by a rescan.

```sh
NC_CONTAINER=<disposable-or-developer-container> NC_URL=<instance-url> node scripts/smoke-book-deletion.mjs
```

The smoke refuses to reuse an existing fixture-state file, creates its own account/files and removes them in `finally`. It never selects existing library books. The full CI rehearsal runs it after the existing GUI suite through `scripts/smoke-fresh-install-mixed.sh`.

The locking adapter uses Nextcloud's storage wrapper implementation and is verified here on NC34. Transactional file locking must be enabled. Exact signed NC33–35 fresh/upgrade certification and owner acceptance remain separate App Store gates.
