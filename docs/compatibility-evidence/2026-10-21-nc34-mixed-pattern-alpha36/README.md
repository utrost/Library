# Mixed filename/path patterns — alpha.36

Status: **signed 0.3.0-alpha.36 deployed on developer Nextcloud 34.0.3**. No database migration.

## Change

The extraction page now has one collapsed configuration section and a 40-file worklist. Each file may use a supplied, saved or current draft pattern. Bulk assignment considers complete structural matches on the current page, preserves earlier individual choices, and preselects empty fields only. Values from several patterns can be reviewed and applied as one atomic batch. The server re-parses each selected file and value from the live snapshot before preparing that batch; normal stale-review and Undo protection still apply.

## Candidate verification

- Full source check: **1,051 Python checks**, **596 Vitest checks**, PHP runtime checks, **518 parser parity vectors**, translations, build and Markdown links passed on the final source tree. `npm audit` reported zero vulnerabilities. Vite was updated to 7.3.7 to address its newly reported advisory.
- The final merged-commit archive passed package signature, SBOM, provenance, module-closure and size audits. Frontend package size was **1,030,660 / 1,320,000 bytes**.
- A disposable NC34 34.0.3 installation indexed **40 mixed EPUB/PDF/CBZ/OPF files**, with zero metadata errors and unchanged source-tree SHA-256. The installed candidate passed **77 existing Playwright journeys** across desktop Chromium, desktop Firefox and mobile Chromium, then **3 focused desktop inference journeys**, including a two-pattern review request. The new journey used intercepted disposable sample paths and blocked its review POST before a server write.
- An independent temporary shelf passed Chromium and Firefox Apply/Undo browser checks, stale-review rejection, and the PHP integration for **two differently patterned files in one atomic batch**. It also covered wrong values and wrong root scope. Temporary files and app passwords were removed.
- The installed-package catalogue, sidebar, author directory and deletion smokes passed. Visual inspection of the captured 1280 px worklist shows separate pattern pickers, the selected fields for both example files and no horizontal clipping.

The initial disposable package was built before the last small bulk-selection refinement. The final source check and hosted GUI run cover that refinement. The [hosted GUI run](https://github.com/utrost/Library/actions/runs/39586765880) passed all **79 browser journeys** and the mixed Apply/Undo smoke; the [security run](https://github.com/utrost/Library/actions/runs/39586765854) passed CodeQL and app-specific gates.

## Deployment and installed smoke

- [PR #132](https://github.com/utrost/Library/pull/132) merged as `227e81896f523788d4551f703c25e53da3ab7b1c`. All required checks passed.
- Final signed archive: `library-0.3.0-alpha.36.tar.gz`; SHA-256 **`0c6655fb8498e36a06fed2f8cd2f86f581c7098bb345e1e8bc85c44d4e7be611`**.
- Developer NC34: app integrity clean, maintenance mode off, no database upgrade pending. Owner catalogue **107,717 → 107,717** before and after deployment and temporary-shelf smoke. Rollback app directory: `/tmp/library-before-alpha36-20261021T105846Z`.
- Browser-served versioned JavaScript and CSS match the signed installed package byte for byte. The read-only path-inference smoke passed with 40 sample books, no metadata writes, clean browser errors and no mobile overflow.
- The suggestion smoke passed in Chromium and Firefox with no page errors. Its first run reported a false mobile overflow because it measured an inline heading's zero `clientWidth`; the corrected predicate checks elements with a measurable layout box. The second run passed, and each temporary rule and login token was removed.
- A separate temporary shelf on developer NC34 passed Chromium/Firefox reviewed Apply, Undo, stale rejection and the two-pattern PHP integration. It removed its files and app password. Existing library books were untouched.

See [sanitized deployment results](verification.json). NC33 and NC35 exact-package certification and human acceptance remain separate App Store gates.
