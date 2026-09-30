# Alpha.15: series, part in series and genre

Developer verification on Nextcloud **34.0.3**, existing `nextcloud` container at `http://100.123.149.120:8088`. No disposable instances were created. The earlier alpha.12 matrix on 33.0.9 / 34.0.4 / 35.0.0 does **not** certify this migration or package on those versions.

## Implemented

- Nullable canonical columns for series name, text series position and genre; no historical metadata backfill.
- Sidebar and maintenance editing, bulk edit field choices, scanner-candidate plumbing, corrected-metadata JSON export/import.
- Text numbering preserves leading zeros, decimals and labels. Server validation rejects non-text, control characters and overlong values.
- Partial imports preserve omitted metadata. Older editor requests that omit the new fields preserve them.
- Inference compares these fields against dedicated storage; advanced patterns accept `%genre%`. Inference remains preview-only.
- Sidebar fields use available width. Mobile sidebar width respects the Nextcloud content inset.

## Verification

| Check | Result |
| --- | --- |
| Python contracts | PASS — 1,041 tests |
| JavaScript tests | PASS — 497 tests in 28 files |
| PHP runtime and migration checks | PASS |
| Production build, translations and Markdown links | PASS |
| Chromium and Firefox metadata smoke | PASS |
| Chromium and Firefox saved guided rules | PASS |
| Chromium and Firefox folder assignment rules | PASS |
| Read-only inference, 40 records | PASS |

The metadata smoke creates one uniquely named temporary root and EPUB via Nextcloud's file API. It edits only this fixture, saves/reloads both editors, checks `01`, `2.5` and `Volume II`, rejects a 65-character position over HTTP, verifies old-client omission behavior, checks the inference sample API, exports/imports the fixture and tests a genre-only partial import. It checks the source content hash and removes the exact fixture root/file and temporary authentication token afterward.

Forced rescans invalidate only the fixture's stored extractor revision and assert exactly one extraction and item refresh. This exercises edit protection rather than the unchanged-file shortcut. Explicit clearing is included. Existing real publication records are not edited. Existing rule tests clean up their temporary definitions and assignments and check preference inventories.

Screenshots are reviewed for readable controls, usable widths and unobstructed actions, without pixel matching. The first screenshots exposed narrow desktop fields and a clipped mobile sidebar; both were fixed before the final run.

## Limits and next slice

No inference Apply, undo, automatic rule execution during scans or source-file writes. New fields have no dedicated catalogue filters/search or numerical series sorting. Existing embedded-series extraction and legacy Publication data retain their current meaning. The next slice is a durable review/apply plan with selected-field approval, stale-preview rejection and undo; it should use these canonical fields.

Private developer backups (app archive and affected DB tables) remain under `/tmp/library-alpha15-evidence/` on the host and are excluded from this report. They contain user data and are not release artifacts.

## Evidence

- [Metadata browser results](metadata-fields-results.json)
- [Desktop sidebar](chromium-metadata-sidebar.png) and [mobile sidebar](chromium-sidebar-mobile.png)
- [Maintenance form](firefox-metadata-maintenance.png) and [mobile maintenance](firefox-metadata-mobile.png)
- [Full local gate](check-final.log)
- [Metadata smoke](library-alpha15-metadata-smoke.log), [guided rules](library-alpha15-guided-smoke.log), [folder rules](library-alpha15-folder-smoke.log), [40-record inference](library-alpha15-inference-smoke.log)

Reproduce with `scripts/check.sh`, `scripts/smoke-metadata-fields.mjs`, `scripts/smoke-guided-rules.mjs`, `scripts/smoke-folder-rules.mjs` and `scripts/smoke-path-inference.mjs`. Run preference-mutating smokes sequentially. The metadata smoke requires Docker access and creates/deletes its own fixture; do not point it at an instance without authorization.

Frozen app package SHA-256: `bdc7f6d6662959f843840cb2916bb140fe5c723ad1e1db5fcda32d1a6d8cfe1e`.

Deployed versioned JavaScript SHA-256: `618410a0b1cdca4917d5d22ecfb84e5c011b1119903cf5d73381ee3be07082f7`, matching the local build. Nextcloud reports maintenance off and no pending database upgrade.
