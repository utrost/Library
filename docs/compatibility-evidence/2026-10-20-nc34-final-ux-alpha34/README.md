# Final UX findings — alpha.34

Status: **candidate**, implementing all eight findings from the [alpha.33 final sweep](../../ui-ux-final-sweep-alpha33-2026-10-20.md). Developer NC34 remains on alpha.33 until the deployment section is completed. No database migration or dependency upgrade.

| Finding | Change |
| --- | --- |
| F01 | Error and destructive-action foregrounds use Nextcloud's error-text token in light and dark themes. |
| F02 | Author/Series profiles keep applied search and draft text separately, including a cleared but unsubmitted query. Book links and view changes preserve both. |
| F03 | All eight catalogue facets share keyboard selection, visible active options, scrolling, minimum-input guidance, loading, retry and no-match feedback. |
| F04 | Shared mobile page spacing reserves the Nextcloud navigation toggle's area above Back links and page headings. |
| F05 | Covers/List uses the same visible selected state across catalogue and profiles; the profile search/button and sort/view controls wrap as groups. |
| F06 | User-facing publication filters say “Publication / periodical”; folder scopes say “Shelf”. Series remains a separate entity. |
| F07 | Language review reuses the book editor's named language picker and chips, serializing canonical codes through the existing protected form. Each row has unique accessible control IDs. |
| F08 | Readable secondary text, subordinate Review result headings, the shared Genres frame, and consistent maintenance gutters/mobile navigation. |

## Verification

- Local source checks: **1,047 passed**; frontend checks: **591 in 48 files passed**; PHP runtime suites and **518 inference vectors** passed.
- English/German/Arabic catalogues: **1,275 keys**, **92 semantic sentinels**; generated output current.
- Added profile draft/applied/cleared-query tests, all-facet desktop/mobile keyboard tests, language-form serialization and distinct-row accessibility tests.
- Added Playwright profile/view/Back journeys, publication/year/publisher keyboard and failed-lookup/retry journeys, maintenance navigation/Escape/focus and light/dark error-contrast checks. These join the existing Save/Discard, stale edits, typeahead, deletion and directory journeys.
- All **nine focused Playwright journeys passed** in Chromium, Firefox and mobile Chromium after the corrections. All **77 packaged browser journeys passed locally**. A subsequent preferred-author smoke still used immediate Enter for free-text search; it now uses the explicit Apply author action. Final CI and remaining backend smokes are in progress. Early installed-package screenshots exposed a mobile spacing specificity conflict and Nextcloud styles exposing a closed native dialog; both were corrected. The desktop active-option style also needed to cover the navigation sidebar, which sits outside the content root. The mobile run also exposed deferred filter-panel autofocus stealing a newly selected field and unreliable native Escape handling; both now have explicit guards and regression tests. Failed preliminary runs are not acceptance evidence.

Human acceptance: **H03-26** in the [handbook](../../human-test-handbook.md), retaining the existing editor/deletion regression cases.

## Reproduction

```sh
npm run check
LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed
```

The packaged rehearsal creates and removes a disposable NC34 instance. Targeted browser journeys live in `tests/gui/details/final-ui-consistency.spec.ts`; never point the mutating complete suite at a real library account. Installed owner checks block Library writes and retain private screenshots outside the repository.

## Deployment

Pending required CI, merge, signed package and installed smoke. The frontend budget remains **1,320,000 bytes**. No schema migration is required.

## Limits

Developer NC34 verification does not replace exact signed NC33–35 fresh/upgrade certification, human screen-reader/touch testing or owner acceptance. Screenshot inspection alone is not an accessibility conformance claim.
