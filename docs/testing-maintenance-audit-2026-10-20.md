# Handbook and Playwright maintenance audit — 2026-10-20

Scope: the alpha.34 human handbook, its directly linked navigation guidance, all 23 discovered Playwright specs, the test inventory, and a static sweep of standalone browser diagnostics. Application code, schema and deployed assets are unchanged.

## Handbook corrections

- Consolidated the current guide into H03-01–H03-26 in numeric order, with all 26 cases in the results sheet and one current package reference.
- Moved the old A16x/LIB-HARDEN walkthroughs into the [v0.1 archive](human-test-handbook-v0.1-archive.md); retained historical evidence rather than presenting it as current acceptance work.
- Corrected cover/title → Book details, Quick view → sidebar, author selection instead of creator-text editing, Choose series, single Save/Discard, current imported-change actions, and the Author fragment-search versus Enter-selection distinction.
- Removed the impossible instruction to open the retired editor by disabling JavaScript. Native POST compatibility is tested through explicit requests separately.
- Updated the directly related user-guide and first-library labels. Existing first-library images are explicitly marked as older illustrations; this audit did not recapture public Gutenberg screenshots.
- Changed documentation contracts so they protect the current version, case inventory and workflow instead of requiring obsolete interface phrases in the current handbook.

## Browser test corrections

| Finding | Action |
|---|---|
| Main-search tests applied the query through the filter form | Use the current Search button in search, loading, history, empty-result and edit/rescan journeys. |
| Mobile search still depended on opening Filters | Search with Filters closed, then apply Format and verify both active constraints and Clear all. |
| Language cleanup could pass without any picker | Generate an unresolved `3ng` OPF in the mixed corpus; require the real review row and exercise named selection, multi-code serialization, removal, disabled Apply and available Ignore. Seed equivalent derived evidence in the disposable Gutenberg matrix. |
| Inventory listed 15 of 23 active specs | Register all specs; contract compares the complete discovered set rather than a fixed count. |
| Four PNG baselines were unused, while documentation claimed image comparisons | Remove orphaned images; explain actual DOM/layout assertions and attached checkpoints. Pixel-baseline comparison is not claimed. |
| Series reassignment and author-conflict tools used removed controls/labels | Port to destination typeahead, direct selection, Keep current and Apply suggestion. |
| OPF series smoke tested raw source-field editing | Test canonical series/part editing with Save book details, rescan survival and unchanged imported series evidence/source file markers. |
| Native-conflict smoke scraped a removed form | Build the legacy-client payload explicitly from the current revision/CSRF context; retain stale-409 and reviewed-resubmit checks. Remove temporary authentication afterward. |
| Deletion's no-save counter watched obsolete URLs | Watch the actual `/items/{id}` POST as well as legacy update routes, excluding the deletion endpoint. |
| Screenshot tools clicked a cover expecting a sidebar | Use Quick view; update Save shelf/Scan this shelf labels. Syntax checked; public capture not rerun. |

## Remaining historical diagnostics

Four utilities still require migration before they can be used against the current UI: `smoke-authors.mjs`, `smoke-metadata-fields.mjs`, `smoke-warning-recovery.mjs`, and the intentionally versioned `verify-ux-alpha22.mjs`. They now fail before authentication or fixture creation with a migration notice. Explicit historical replay remains available via `LIBRARY_RUN_HISTORICAL_SMOKE=1`.

The [coverage page](playwright-journeys.md#older-standalone-diagnostics) identifies current replacements and gaps. In particular, the old combined inference/author scenario, omitted-field legacy API checks and rejected-field reset browser scenario are not newly certified by this run. Retiring an unusable replay does not establish replacement coverage.

The signed NC33–35 fresh/upgrade matrix, additional standalone inference diagnostics, public screenshot refresh and manual screen-reader acceptance remain separate work. The main suite's pass count must not be presented as completion of those gates.

## Verification

All browser mutations used disposable accounts/files on Nextcloud 34.0.4. The developer instance and existing library were untouched.

| Check | Result |
|---|---|
| Python source/contracts suite | 1,051 passed |
| Frontend unit suite | 591 passed in 48 files |
| Main Playwright suite | All 77 cases passed across the full run and focused rerun described below |
| Standalone browser diagnostics | Five updated tools passed, covering ten browser executions plus their backend assertions |
| Fixture source files | Hash unchanged before/after the full suite and after the ownership rerun |
| Script syntax, handbook links/anchors and patch whitespace | Passed |

The first fresh-install rehearsal passed 76/77 browser cases. The revised mobile test used an incorrect label locator for Format; switching to its accessible combobox role fixed it, and its focused rerun passed.

The subsequent complete run passed 73/77. Four ownership checks failed at login because the manually assembled second disposable instance lacked `library-lists-other`. The standard fresh-install harness already creates this account. After creating the missing account, all four cases passed in Chromium and Firefox (49.9 seconds), without changing their assertions. This is **73 full-run passes plus four focused passes**, not a claim of one uninterrupted 77-case green run. The coverage guide now documents the second-account prerequisite.

The updated standalone tools passed:

- `smoke-opf-series.mjs`: Chromium and Firefox; canonical correction survives rescan, with source metadata and source-file markers retained.
- `smoke-series-assignment.mjs`: Chromium and Firefox; selected move, Undo, merge and conflict review.
- `smoke-author-conflicts.mjs`: 41 backend assertions plus Chromium/Firefox stale, keep/apply and mobile checks.
- `smoke-native-metadata-conflict.mjs`: Chromium; explicit legacy POST, stale 409, retained draft and reviewed resubmit.
- `smoke-book-deletion.mjs`: Chromium, Firefox and mobile; confirmation/return journeys plus sidecar, protected-root, hidden-file, replacement, permission, partial-failure, concurrency and restoration fixtures.

Standalone fixtures were run serially on the SQLite instance after an initial concurrent attempt encountered a database lock. Temporary accounts and authentication were cleaned up. The disposable instance was removed after verification.

Repeat the main suite through `LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed`; run `npm test` for frontend tests and `python -m pytest -q` in the repository's test environment for source contracts. The standalone tools document their disposable-container inputs in their source.

Local evidence logs are `/tmp/library-handbook-gui-final.log`, `/tmp/library-handbook-ownership-final.log`, `/tmp/library-handbook-contracts-complete.log`, `/tmp/library-handbook-vitest.log`, and the corresponding `/tmp/library-handbook-{opf,series-final,author-conflicts,native-conflict,deletion-final}.log` files. These are local run artifacts, not permanent hosted CI evidence.

The source-tree aggregate remained `9303a6f07320fa15823b5790eefdeb8e720fcc420242653bd39d009cd9283e5b`. The original signed alpha.34 package was preserved, SHA-256 `e71e5f197573d99e2517de25afda2eb17f8343d1a112c3f4da1dfe8d43bdb551`. No application deployment or version bump was made.

### Merge follow-up

PR #129's first hosted run stopped at the dependency audit before executing tests: `follow-redirects` 1.16.0 was flagged by GHSA-q3jh-wrc6-jgq8 and GHSA-8r9p-f939-6h3c. The lockfile was updated only for that transitive package to patched 1.16.1; the production audit then reported zero vulnerabilities. Hosted checks must pass on the updated commit before merging. The Node dependency tree is not shipped in the Nextcloud app archive; the installed alpha.34 package remains unchanged.
