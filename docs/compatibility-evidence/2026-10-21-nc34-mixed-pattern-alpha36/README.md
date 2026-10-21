# Mixed filename/path patterns — alpha.36

Status: **0.3.0-alpha.36 source candidate verified on a disposable Nextcloud 34 instance.** Developer NC34 deployment is recorded separately after merge. No database migration.

## Change

The extraction page now has one collapsed configuration section and a 40-file worklist. Each file may use a supplied, saved or current draft pattern. Bulk assignment considers complete structural matches on the current page, preserves earlier individual choices, and preselects empty fields only. Values from several patterns can be reviewed and applied as one atomic batch. The server re-parses each selected file and value from the live snapshot before preparing that batch; normal stale-review and Undo protection still apply.

## Candidate verification

- Full source check: **1,051 Python checks**, **596 Vitest checks**, PHP runtime checks, **518 parser parity vectors**, translations, build and Markdown links passed on the final source tree. `npm audit` reported zero vulnerabilities. Vite was updated to 7.3.7 to address its newly reported advisory.
- The first signed candidate passed package signature, SBOM, provenance, module-closure and size audits. A final signed archive will be rebuilt from the merged commit for deployment.
- A disposable NC34 34.0.3 installation indexed **40 mixed EPUB/PDF/CBZ/OPF files**, with zero metadata errors and unchanged source-tree SHA-256. The installed candidate passed **77 existing Playwright journeys** across desktop Chromium, desktop Firefox and mobile Chromium, then **3 focused desktop inference journeys**, including a two-pattern review request. The new journey used intercepted disposable sample paths and blocked its review POST before a server write.
- An independent temporary shelf passed Chromium and Firefox Apply/Undo browser checks, stale-review rejection, and the PHP integration for **two differently patterned files in one atomic batch**. It also covered wrong values and wrong root scope. Temporary files and app passwords were removed.
- The installed-package catalogue, sidebar, author directory and deletion smokes passed. Visual inspection of the captured 1280 px worklist shows separate pattern pickers, the selected fields for both example files and no horizontal clipping.

The initial disposable package was built before the last small bulk-selection refinement. The final source check covers that refinement; the merged package and developer NC34 smoke will complete the release record. NC33 and NC35 exact-package certification and human acceptance remain separate App Store gates.
