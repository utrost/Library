# UI/UX follow-up — alpha.33

Status: **candidate verification in progress**. Developer NC34 remains on signed alpha.32 until the Deployment section records the new installation. No database migration or dependency upgrade.

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
- New Playwright journeys cover subject/language Enter and ArrowUp, partial directory searches, both in-app and browser Back, and Series toolbar return state on desktop/mobile. Existing Save/Discard, stale tabs, directory, inference, lists and settings journeys remain in the suite.
- Read-only candidate-asset comparison captured 16 desktop/mobile/light/dark states against the existing catalogue: zero page errors and zero attempted Library mutations. At 390 × 844 the first card moved from approximately **503 px to 374 px**, about **129 px / 26% less preceding chrome**. This is a layout observation, not a performance claim. Representative images were inspected; final installed-package evidence is recorded separately below.

Early runs exposed stale search selectors after removing the duplicate input, and one real regression where applying filters dropped the current search; both were corrected. The first complete browser run passed 65/67 journeys; the two new Series tests incorrectly assumed the mixed-file fixture already had an assigned series. The corrected journey explicitly creates an assignment on its disposable book when needed and removes it in `finally`. Failed attempts are not counted as successful verification.

Nextcloud's existing folder-picker cancellation diagnostic (“No nodes selected”) retains its narrow allowance. No blanket browser-error suppression was added.

## Repeatable checks

```sh
npm run check
LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed
```

The second command builds a package, installs a disposable NC34 container, imports 40 mixed-format files, runs the GUI and regression journeys, then removes the container. Use the Python environment from `requirements-ci.txt` and installed Playwright browsers. For a targeted rerun against an existing disposable fixture, use the documented `PW_*` variables and `npx playwright test tests/gui/details/ux-follow-up.spec.ts`.

Human acceptance: **H03-25**, retaining H03-24 regression cases, in the [test handbook](../../human-test-handbook.md).

## Deployment

Pending required checks, merge, signed package and installed smoke. Alpha.32 remains the developer baseline until this section is updated.

## Limits

This is developer NC34 verification, not the exact signed NC33–35 fresh/upgrade certification. Manual screen-reader and physical touch-device checks, owner acceptance and App Store certification remain separate gates. Screenshot inspection cannot establish accessibility conformance. Private screenshots include catalogue data and remain local.
