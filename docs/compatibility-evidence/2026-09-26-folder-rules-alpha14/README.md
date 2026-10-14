# Folder rules: alpha.14 implementation and verification

Date: 2026-09-26. **PASS** on the existing developer Nextcloud **34.0.3**, `http://100.123.149.120:8088`, container `nextcloud`. Installed Library version: **0.2.0-alpha.14**.

## Implemented slice

- Assign saved guided rules or advanced patterns to a loaded Library root/subfolder, with explicit inclusion of descendants.
- Preserve a fixed definition snapshot for each assignment; deleting the original definition does not alter its assignments.
- Evaluate a mixed sample with deeper-folder precedence and ancestor fallback. Match relative to the assigned folder, regardless of which folder is sampled.
- Merge agreeing same-depth rules; display conflicting proposals without silently choosing one. Ambiguous parser matches stop ancestor fallback.
- Show the evaluated rules, source folders and per-field matching rule in the preview.
- Recheck folder identity and read access when loading assignments; isolate all preference writes by authenticated user.
- Confirm assignment removal. A confirmed Library root deletion also removes its assignments while keeping reusable definitions.

This remains a sample-preview feature, not automatic inference or metadata Apply. The [user guide](../../extracting-metadata.md) documents operation and limitations.

## Verification

| Check | Result |
| --- | --- |
| Assign root fallback and deeper `Author - Title` rule through the UI | PASS, Chromium and Firefox |
| Show both proposals when equally specific rules conflict | PASS, both browsers |
| Refuse assignment while the folder input differs from the loaded sample | PASS, both browsers |
| Reject traversal, inaccessible root, missing definition and duplicate assignment | PASS, both browsers |
| Cancel and confirm assignment removal | PASS, both browsers |
| Guided series, part in series `2.5`, title and author | PASS, both browsers |
| Retain assigned snapshot after deleting the saved definition and reloading | PASS, both browsers |
| Fall back for unmatched child; stop fallback for ambiguous child | PASS, both browsers |
| Root switching clears previous assignments from evaluation | PASS, both browsers |
| Desktop/mobile screenshots and panel width | PASS; screenshots visually inspected, no mobile panel overflow |
| Existing guided-rule save/load/delete workflow | PASS, both browsers |
| Read-only inference smoke | PASS, 40 developer catalogue records |
| Existing definitions and assignments after test cleanup | Unchanged |
| Sampled metadata and unrelated Library endpoints | Metadata unchanged; no unrelated writes observed |
| Temporary authentication tokens | Removed |
| Python regression suite | 1,041 passed |
| JavaScript suite | 495 passed, 28 files |
| PHP runtime suite | PASS, including ownership, schema/path bounds, immutable snapshots, replacement/revoked-access checks, CSRF attributes and confirmed root cleanup |
| Translation inventory, generated catalogues, production build, whitespace and Markdown links | PASS |

The new browser workflow used the existing **Path parsing samples** shelf with 20 indexed documents. The separate read-only regression sampled 40 developer records. No new disposable instances were created, and this is not a new 33–35 compatibility matrix. Previous exact-version matrix evidence remains in the [alpha.12 report](../2026-09-26-alpha12/README.md).

Root deletion, replacement and revoked access were exercised with PHP test doubles; no real developer root or source folder was deleted or renamed. Live dependency resolution separately confirmed that the root controller receives the cleanup service. CSRF protection on new writes was checked through controller attributes; this focused run did not repeat the earlier two-user browser security matrix.

## Evaluation and refinements

Initial browser testing found an over-broad assertion: reusable definitions belong to the account, while assignments belong to a root. The assertion was corrected to inspect the assignment list rather than the global definition selector.

Screenshot review led to product changes before the final pass:

1. Require the user to load a changed folder before creating an assignment, avoiding confusion between draft and loaded scope.
2. Remove the generic “No fields extracted” paragraph when actual conflicting proposals are shown.
3. Sort assignment rows by folder, then name, for predictable browsing.

Conflicts are visible rather than resolved by ordering. Decimal series positions survive parsing. Saved copies survive definition deletion. Desktop layouts preserve the side-by-side preview; narrow layouts retain a scrollable preview above the controls. A help popup visible in one conflict screenshot is contextual hover help, not a persistent paragraph. No pixel comparisons were used.

## Evidence

- [Chromium checks](chromium.json), [Firefox checks](firefox.json), [folder workflow log](folder-rules-playwright.log).
- [Chromium assignments](chromium-folder-rules.png), [conflicts](chromium-conflicts.png), [guided series](chromium-guided-series.png), [mobile](chromium-mobile.png).
- [Firefox assignments](firefox-folder-rules.png), [conflicts](firefox-conflicts.png), [guided series](firefox-guided-series.png), [mobile](firefox-mobile.png).
- [Guided regression log](guided-regression.log), [read-only regression log](read-only-inference.log), [local gate log](local-checks.log).

Reproduce using `node scripts/smoke-folder-rules.mjs`, then `node scripts/smoke-guided-rules.mjs` and `node scripts/smoke-path-inference.mjs`. The mutating preference tests should run sequentially, as each verifies that the original inventory is restored. Each creates uniquely named temporary definitions and removes only its own IDs. The scripts expect the existing developer example shelf. Local gate: `PATH=/tmp/library-beta-venv/bin:$PATH bash scripts/check.sh`.

## Deployment identity

Package: [library-0.2.0-alpha.14.tar.gz](library-0.2.0-alpha.14.tar.gz).

SHA-256: `ebac6ec0b86654a9cbc9537808bfaa1c34be5afaa2c0d4899c7a87477bd0647c`.

Installed versioned JavaScript matches the local build: `d387803e8d7563823b961aa614230f7baebcb6f2dd9a079e3291a31013134b87`. The folder controller, store and root controller hashes also match. Live PHP lint passes; maintenance is off and no database upgrade is pending.

Previous app backup: `/tmp/library-alpha14-evidence/developer-before-alpha14.tar.gz`. No source files or publication metadata were edited by these tests. No signing, publishing or git commit was performed.

## Remaining work

Canonical genre/series-position storage, selected-field approval and Apply, stale-preview protection, durable provenance/undo, full-scope background work and later rule portability remain open. Folder rules do not yet run during scans, and changing/deleting an original definition does not migrate its fixed assignment copies. Review a newly assigned version and remove the old assignment explicitly. The preview processes the current sample page, not the whole root in one job.
