# Final UX findings — alpha.34

Status: **signed 0.3.0-alpha.34 deployed on developer NC34**, addressing all eight findings from the [alpha.33 final sweep](../../ui-ux-final-sweep-alpha33-2026-10-20.md). Ready for owner acceptance with H03-26. No database migration or dependency upgrade.

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
- All **nine focused Playwright journeys passed** in Chromium, Firefox and mobile Chromium after the corrections. All **77 packaged browser journeys passed locally**. A subsequent preferred-author smoke still used immediate Enter for free-text search; it now uses the explicit Apply author action. The corrected full hosted rehearsal passed, including the preferred-author, directory and deletion smokes. Early installed-package screenshots exposed a mobile spacing specificity conflict and Nextcloud styles exposing a closed native dialog; both were corrected. The desktop active-option style also needed to cover the navigation sidebar, which sits outside the content root. The mobile run also exposed deferred filter-panel autofocus stealing a newly selected field and unreliable native Escape handling; both now have explicit guards and regression tests. Failed preliminary runs are not acceptance evidence.

Human acceptance: **H03-26** in the [handbook](../../human-test-handbook.md), retaining the existing editor/deletion regression cases.

## Installed visual and interaction checks

The installed-package sweep captured **111 states** across the main screen families, desktop/mobile and light/dark styling, with zero page errors, attempted book mutations or measured root overflow. Representative profile, language-review, Review queue and Genres images were inspected. Focused checks also passed at **320 px** with touch emulation.

- Error-text contrast: **10.09:1 light**, **12.60:1 dark**, above our 4.5:1 regression-test threshold. These measurements do not certify the whole application.
- At 390 px with touch emulation, both profile toolbars measure **153 px** high. Covers/List has a visible selected state; long author names and controls wrap within the page.
- Real language-review rows accepted **German → de**, then removed the staged selection without submitting a mapping.
- Author, Series and List Back-link starts passed pointer hit tests at 1440/390/320 px. Profile drafts and displayed results survived view changes and Details → Back.
- Installed editor stage/discard kept saved metadata identical. Catalogue return restored the book's viewport anchor despite badge-driven changes to total page height.
- The existing external Nextcloud Files duplicate-viewer-handler console diagnostic remains outside Library. One initial live-harness selector omitted the arrow in “← All lists”; the corrected complete focused run passed. This was a selector mismatch, not a product failure.

## Reproduction

```sh
npm run check
LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed
```

The packaged rehearsal creates and removes a disposable NC34 instance. Targeted browser journeys live in `tests/gui/details/final-ui-consistency.spec.ts`; never point the mutating complete suite at a real library account. Installed owner checks block Library writes and retain private screenshots outside the repository.

## Deployment

- [PR #128](https://github.com/utrost/Library/pull/128), merged as `342026fbf0e0341e787912b97fa6423ba72fa2f5`.
- [Required source/GUI CI](https://github.com/utrost/Library/actions/runs/39460353987) and [security checks](https://github.com/utrost/Library/actions/runs/39460353960), including CodeQL, passed.
- Nextcloud **34.0.3.2**, Library **0.3.0-alpha.34**, MySQL backend. No schema migration.
- Signed archive `library-0.3.0-alpha.34.tar.gz`; SHA-256 **`e71e5f197573d99e2517de25afda2eb17f8343d1a112c3f4da1dfe8d43bdb551`**. Signature, SBOM and source provenance audits passed.
- Frontend package **1,017,831 / 1,320,000 bytes**. The existing budget is unchanged.
- Rollback directory inside the developer container: `/tmp/library-before-alpha34-20261020T170026Z`.
- Integrity clean, maintenance off, no pending upgrade. Catalogue **107,717 → 107,717**. Served versioned JS/CSS, base/shared styles and English translations match the archive byte for byte.
- Installed desktop/mobile editor smoke staged and discarded changes, retaining saved metadata. Installed focused checks cover 1440/390/320 px, profile draft/view/Back state, unobstructed Back links, maintenance navigation, language entry and light/dark error contrast. Zero attempted book mutations and zero page errors; temporary credentials removed.
- Sanitized machine results: [verification summary](verification.json). Screenshots and raw logs remain private. The documentation commit follows deployment; package provenance identifies the merged runtime commit.

## Limits

Developer NC34 verification does not replace exact signed NC33–35 fresh/upgrade certification, human screen-reader/touch testing or owner acceptance. Screenshot inspection alone is not an accessibility conformance claim.
