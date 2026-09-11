# Alpha.160 implementation report

## Chronology and evidence status

The original alpha.160 archive passed its then-current gates. The independent final review later found fail-open browser and module classification, incomplete payload accounting, source-map/stale-asset packaging, non-reproducible metadata, and contradictory evidence wording. Those earlier results are historical regression evidence, not acceptance of the remediated artifact.

The remediation adds executable fail-closed browser classification, proxy-boundary origin normalization, fail-closed module validation, a recursively enforced frontend manifest, separate active-runtime and total-package budgets, source-map rejection, decoded/canonical webroot-aware navigation validation, regular-file enforcement for release-critical archive entries, and normalized archives. The generated `dist/*.sha256` file is the archive checksum sidecar and is excluded from the archive. Run logs and `/tmp/library-alpha160-codex-remediation-3.md` are package-excluded evidence, not sidecars and not shipped.

The remediation gates were rerun on 2026-09-11. The authoritative command results, final artifact identity, timestamp, and outcome are recorded in `/tmp/library-alpha160-codex-remediation-3.md`; this report intentionally does not duplicate the generated digest.

## Release boundary

The active budget measures the current versioned browser entry and recursively validated relative chunk closure. The total-package budget recursively measures every file below `library/js` and `library/css`; the exact shipped manifest permits only the current versioned Vue JS/CSS, `style.css`, `library-detail.js`, `library-shell.js`, and `scan-progress.js`. Nested/unlisted files, historical versioned assets, unversioned build aliases, orphan chunks, and production source maps are excluded and rejected.

Module closure rejects bare, absolute, browser-URL, and non-literal dynamic specifiers. There is currently no browser-URL exception; adding one requires an explicit allowlist and independent validation.

Archives use sorted entries, numeric owner/group 0, normalized modes, and normalized mtime. `SOURCE_DATE_EPOCH` selects the epoch; the documented fallback is `946684800` (2000-01-01T00:00:00Z). Gzip timestamps and names are suppressed.

Alpha archives remain unsigned unless invoked with `--signed`. Automated remediation does not close manual usability, fresh-install migration, realistic-scale, signing, or App Store submission gates.
