# UI/UX follow-up — alpha.33

Status: **signed 0.3.0-alpha.33 deployed on developer NC34**, 20 October 2026. Ready for owner acceptance with handbook H03-25. No database migration or dependency upgrade.

## Scope and finding map

The [alpha.32 review](../../ui-ux-follow-up-alpha32-2026-10-20.md) numbered nine findings; the initial ArrowUp defect inside F01 is tracked separately as the tenth fix.

| Finding | Implementation |
| --- | --- |
| F01 — picker Enter behavior | First suggestion visibly selected across pickers; Enter accepts it. Subject creation is explicit. Invalid language input provides guidance. |
| F02 — directory query ambiguity | Draft and applied search are stored separately. Short queries explain retained results; sorting preserves the applied scope. Pending valid input is applied when sorting. |
| F03 — lost browsing position | Details links record item, scroll position and focus in tab storage. Back restores after rendering, with an expiring scroll fallback for missing items. Modified/new-tab clicks are excluded. |
| F04 — catalogue control density | One content search, combined mobile Filters/Sort/View, selection alongside count/pagination, secondary collections and duplicate status. Filter forms retain the current search. |
| F05 — book identity | Titles and authors below covers, stable text on hover/focus, secondary labelled Quick view, readable title wrapping. |
| F06 — inconsistent profile browsing | Shared Author/Series book toolbar and cards. Series search covers all pages; part/title/date ordering and Covers/List preserve return context. Numeric series parts sort naturally. |
| F07 — preview width | Directory previews allocate one, two or three columns according to actual preview count. |
| F08 — settings hierarchy | Shelf creation is visually subordinate to its settings section; mobile folder input gets the available width. |
| F09 — publication/series confusion | Separate field labels, contextual help and explicit action names explain which value will change, even when both suggestions match. |
| F10 — initial ArrowUp | Shared cyclic keyboard navigation starts at the correct edge and wraps consistently. |

Save/Discard, stale-edit rejection, ownership checks and field authority are preserved. Series sorting is allowlisted, search uses bound parameters with escaped LIKE characters, results retain the 50-book page bound and stable ID tie-breaker. No per-book requests were introduced. The frontend package limit remains **1,320,000 bytes**.

## Verification

- Local source checks: **1,047 passed**; frontend unit checks: **578 in 46 files passed**; PHP runtime suites and **518 inference vectors** passed.
- English, German and Arabic translation inventory: **1,276 keys**, generated catalogues current, **92 semantic sentinels**.
- New owned-account backend fixture checks series search across 55 books/two pages, numeric parts, date/title ordering, escaped wildcard, invalid sort and ownership isolation; its generated rows are rolled back.
- The final hosted packaged NC34 rehearsal passed **all 68 Playwright journeys**, followed by catalogue/ownership, preferred-author, directory and deletion regression smokes. The local full rehearsal also passed 68 journeys and its regression smokes; a focused repetition passed all 10 new journeys. New Playwright journeys cover subject/language Enter and ArrowUp, partial directory searches, both in-app and browser Back, and Series toolbar return state on desktop/mobile. Existing Save/Discard, stale tabs, directory, inference, lists and settings journeys remain in the suite.
- Read-only candidate-asset comparison captured 16 desktop/mobile/light/dark states against the existing catalogue: zero page errors and zero attempted Library mutations. At 390 × 844 the first card moved from approximately **503 px to 374 px**, about **129 px / 26% less preceding chrome**. This is a layout observation, not a performance claim. Representative images were inspected; final installed-package evidence is recorded separately below.

Early runs exposed stale search selectors after removing the duplicate input, and one real regression where applying filters dropped the current search; both were corrected. The first complete browser run passed 65/67 journeys; the two new Series tests incorrectly assumed the mixed-file fixture already had an assigned series. The corrected journey explicitly creates an assignment on its disposable book when needed and removes it in `finally`. The next run exposed an empty-array versus omitted-property mismatch in fixture cleanup, corrected without changing the API. CodeQL then flagged URL-keyed object storage; browse positions now use `Map`, and the final scan passes. A final review added distinct cover/title link restoration, verified in hosted CI and against the installed package. Failed or cancelled attempts are not counted as successful verification.

Nextcloud's existing folder-picker cancellation diagnostic (“No nodes selected”) retains its narrow allowance. No blanket browser-error suppression was added.

## Repeatable checks

```sh
npm run check
LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed
```

The second command builds a package, installs a disposable NC34 container, imports 40 mixed-format files, runs the GUI and regression journeys, then removes the container. Use the Python environment from `requirements-ci.txt` and installed Playwright browsers. For a targeted rerun against an existing disposable fixture, use the documented `PW_*` variables and `npx playwright test tests/gui/details/ux-follow-up.spec.ts`.

Human acceptance: **H03-25**, retaining H03-24 regression cases, in the [test handbook](../../human-test-handbook.md).

## Deployment

- [PR #127](https://github.com/utrost/Library/pull/127), merged as `35f9dd4eeb1f9934ef7aeb3c65c12b0a4e96e91d`.
- [Required source and GUI CI](https://github.com/utrost/Library/actions/runs/39440912102) and [security checks](https://github.com/utrost/Library/actions/runs/39440911547), including CodeQL, passed. The merged application tree matches the checked PR tree.
- Nextcloud **34.0.3.2**, Library **0.3.0-alpha.33**, MySQL backend.
- Signed archive `library-0.3.0-alpha.33.tar.gz`, SHA-256 **`2f2ba6c37252d3d02c2df147078ac2ee0bbee7985616e40530e123ae2ce476ee`**.
- Package frontend **994,807 / 1,320,000 bytes**; signature, SBOM and source provenance audits passed. Provenance identifies the merged runtime commit.
- Rollback directory: `/tmp/library-before-alpha33-20261020T145420Z` inside the developer container.
- Integrity clean, maintenance off, no pending upgrade; catalogue **107,717 → 107,717**. Versioned JS/CSS, shared/base CSS and English translations served over HTTP match the signed archive byte for byte.
- Installed desktop/mobile smoke staged and discarded title, author, series, subject and language edits; stored metadata remained identical. Sticky actions, old bookmark feedback, bottom disclosures, directory draft/sort/reload state and Files location links passed. **Zero Library mutation attempts and zero page errors**; temporary credentials removed. The known external Files duplicate-viewer-handler console diagnostic remains outside Library.
- Installed isolated MySQL series integration passed the 55-book, two-page search/order and ownership checks. The standalone author-profile smoke passed in Chromium and Firefox with 53 fixture books: paging, search/sort/views, profile/photo operations, stale-edit rejection, ownership and mobile layout. Fixtures were cleaned up; final real catalogue count remains **107,717**, integrity is clean and review credentials remaining are **zero**.
- Installed cover and title navigation restored both position and focus at 1440 and 390 px. In the longer journey, badges changed the raw desktop scroll value by 28 px while the returned book's viewport position was **exactly preserved**. The harness now checks that visible anchor; earlier probes incorrectly assumed unchanged content height and one accessed the scroll container before mount.

Sanitized results and hashes: [verification summary](verification.json), [candidate layout comparison](candidate-screens.json). Raw screenshots and logs remain private. The documentation commit follows deployment and is not the package's runtime commit.

## Installed visual sweep

[111 installed-package captures](screens.json) completed with zero page errors, zero attempted Library mutations and zero page-level overflow. Representative catalogue, directory, profile, editor and settings images were inspected against the alpha.32 baseline. The first mobile card remains at approximately 374 px. A pre-existing mobile profile Back-link overlap with Nextcloud’s navigation toggle is still visible in both baselines; it is a separate follow-up, not a regression introduced here.

## Limits

This is developer NC34 verification, not the exact signed NC33–35 fresh/upgrade certification. Manual screen-reader and physical touch-device checks, owner acceptance and App Store certification remain separate gates. Screenshot inspection cannot establish accessibility conformance. Private screenshots include catalogue data and remain local.
