# Saved guided rules: alpha.13 verification

Date: 2026-09-26. Installed app: `0.2.0-alpha.13`. Target: the existing developer Nextcloud **34.0.3**, `http://100.123.149.120:8088`, container `nextcloud`.

## Result

**PASS** — saved guided rules implemented, deployed and verified with Playwright in Chromium and Firefox. The feature remains metadata-preview only.

| Check | Result |
| --- | --- |
| Create a nested guided rule using the actual UI | PASS, both browsers |
| Save assignments, split delimiters/direction, exact-value transformations, underscore replacement, custom author separator, name formatting and combine-authors option | PASS, both browsers |
| Reload the page, select the saved rule, restore split controls and the same live metadata preview | PASS, both browsers |
| Editing the draft leaves the saved definition unchanged | PASS, both browsers |
| Selecting a rule preserves selected root and example | PASS, both browsers |
| Duplicate names and malformed definitions rejected | PASS, both browsers |
| Cancel deletion, then confirm deletion; current preview retained | PASS, both browsers |
| Existing advanced preset selection | PASS, both browsers |
| Desktop/mobile screenshots; mobile panel has no horizontal overflow | PASS; visually inspected |
| Existing user definitions unchanged after temporary test cleanup | PASS, both browsers |
| Sampled metadata unchanged; no Library writes outside rule preference endpoints | PASS, both browsers |
| Browser uncaught exceptions | None |
| Read-only inference smoke: guided mapping, invalid patterns, root access/traversal rejection, direct/subfolder scope, desktop/mobile | PASS on 40 indexed developer books |
| Python tests | 1,041 passed |
| JavaScript tests | 479 passed, 26 files |
| PHP runtime tests, including rule validator bounds and schema | PASS |
| Translation inventory and generated catalogues (English, German, Arabic) | PASS |
| Production build, whitespace and Markdown links | PASS |

The focused guided-rule scenarios used the existing **Path parsing samples** shelf (20 indexed example documents). The separate read-only smoke sampled 40 books from the developer catalogue. This is not a new 33–35 matrix or a claim that the developer sample is the 40-book Gutenberg fixture. The [alpha.12 matrix](../2026-09-26-alpha12/README.md) describes the previous build only.

## Evidence and reproduction

- [Chromium results](chromium.json), [Firefox results](firefox.json), [Playwright log](playwright.log).
- [Chromium desktop](chromium-saved-rule.png), [Chromium mobile](chromium-mobile.png), [Firefox desktop](firefox-saved-rule.png), [Firefox mobile](firefox-mobile.png).
- [Read-only smoke log](read-only-inference.log), [local check log](local-checks.log).
- Run `node scripts/smoke-guided-rules.mjs` for the guided workflow; `node scripts/smoke-path-inference.mjs` for the read-only regression. Both use temporary app passwords, scoped to the target origin, and remove them in cleanup. The guided test removes only definitions it created and asserts the original definition inventory is unchanged. It expects the existing example shelf.
- Local gate: `PATH=/tmp/library-beta-venv/bin:$PATH bash scripts/check.sh`.

Browser development exposed test assumptions that were corrected before the final pass: the synthetic sample shelf differs from the user's book screenshot; name reversal requires a comma-form name; preview comparison must use rendered text; mobile capture must wait for navigation's closing animation. No pixel matching is used.

## Deployment

Frozen package: [library-0.2.0-alpha.13.tar.gz](library-0.2.0-alpha.13.tar.gz).

SHA-256: `4aaf09382c61eb91d177f821a9acca6c928b2eeca5d1356b09680316b60af4b3`.

Installed versioned JavaScript SHA-256 matches the local/package build: `99cedcc9254a0e2054beb4b9d5bf122ebc37d6f87279ed9844691e4e09e21e8e`. The new PHP validator also matches. Live PHP lint passes. `occ status` reports maintenance off and no pending database upgrade.

Previous developer app backup: `/tmp/library-alpha13-evidence/developer-before-alpha13.tar.gz`. No new disposable instances were created. No publication metadata or source files were edited by these checks. No signing, publishing or git commit was performed.

## Scope limits

Definitions are private per user, selected within the corresponding editor mode, and saved as new names rather than overwritten. The shared limit is 100 personal rules/patterns. Guided rules store no folder scope, example record, execution schedule or application permission. Reloading discards unsaved drafts. Applying suggestions, whole-library background analysis, undo, individual-author browsing, genre/series-position storage, sidecar writing and filing remain separate future work. See the [user guide](../../extracting-metadata.md).
