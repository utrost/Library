# Nextcloud 33–35 Playwright compatibility run

Run date: 2026-09-24
Candidate: Library `0.1.0-alpha.174`
Playwright: `1.63.0`
Suite: the checked-in `@smoke` Playwright cases (5 journeys, 9 browser executions: desktop Chromium, desktop Firefox, and mobile Chromium).

## Result

| Nextcloud | Container image digest | PHP in image | Initial EPUB scan | Playwright result |
|---|---|---:|---|---|
| 33.0.9 | `sha256:98f8db7fa866cf4a8cfabd441731be428f54854caa760bd8e022a03cac77c581` | 8.4.25 | 40 indexed; 0 errors | **FAIL — 4 passed, 5 failed** |
| 34.0.4 | `sha256:a5ace30c695afe48c2c406e940ee7886a81e13fa382e57cd68b2416d1a66914c` | 8.5.10 | 40 indexed; 0 errors | **FAIL — 4 passed, 5 failed** |
| 35.0.0 | `sha256:23c101539e295aaf83888c9c1cae7df3fb6ce80b9ea9310248dad46af8c89936` | 8.5.10 | 40 indexed; 0 errors | **FAIL — 4 passed, 5 failed** |

For each version, both desktop browsers passed metadata export/import and scan-root-to-catalogue. Search/detail and metadata-edit journeys failed at screenshot comparisons before opening the details sidebar or attempting the edit/rescan steps. The mobile filter journey applied the filter and found the expected one book, then failed its screenshot comparison before clearing the filter. No screenshot failure reported a server exception.

The mobile filter panel was consistently wider than the stored baseline: expected `332×710`, received `348×710`. Desktop catalogue snapshots also failed across all three server versions; for example, the Nextcloud 33 Chromium baseline expected `915×582` and received `916×582`, with a large pixel diff. The current result is therefore a **partial runtime pass, but a failing strict Playwright gate**. A human review of the images follows; the pixel gate should not be read as a compatibility failure by itself.

## Human review of screenshot failures

Reviewed the captured expected/actual images for the Nextcloud 34.0.4 Chromium catalogue, metadata form, and mobile filter, plus the corresponding cross-version failure summaries. The discrepancies are consistent across 33, 34, and 35 rather than appearing as a version-specific regression.

- **Catalogue/search:** the actual run has the expected one result, status text, pagination, selection control, and book card in the same places as the baseline. The main visible difference is the page theme: actual is light, baseline is dark. A one-pixel width difference also occurs in Firefox. The test halted at its screenshot assertion before opening the details sidebar, so this image alone does not prove the detail part of that journey.
- **Metadata form:** actual and expected show the same form sections, field labels, and arrangement. Again, the principal mismatch is light versus dark theme. The test stopped at this screenshot, before editing or persisting metadata; treat the interaction as **not exercised**, not as failed functionality.
- **Mobile filters:** both images show the filter panel open, the same controls, and the expected one-item result with “Clear all” and “Show 1 item.” The actual panel is 348 px wide versus 332 px in the baseline. It remains within the captured viewport and the controls are not horizontally clipped in the screenshot. This is a modest responsive-width difference, not evidence of a broken filter. The test stopped before clearing the filter, so that action remains unverified.
- **Other journeys:** export/import round-trip and scan-root-to-catalogue passed in both desktop browser projects on all three versions.

**Judgment:** these screenshot failures are over-specified for cross-environment compatibility as currently authored. The dark/light theme mismatch explains the large catalogue and form diffs; the mobile width and one-pixel Firefox width should be checked through responsive/structural assertions rather than exact captured dimensions. There is no visible evidence here of a Nextcloud 33/35-specific UI break. However, search-to-detail opening, metadata edit/rescan persistence, and mobile clear-filter actions are not proven by these runs because each journey stops at its screenshot assertion. Call the visual checkpoint **PASS by human review with noted theme/width variance**, while keeping the corresponding end-to-end journeys **incomplete/unverified**. Do not regenerate snapshots blindly until the test environment sets a deterministic theme and the remaining interactions are asserted independently of screenshots.

## Compatibility probe details

At the time of this run, the published candidate declared Nextcloud 34 only (`min-version=34`, `max-version=34`). Nextcloud would reject that package on 33 and 35 before the app could be exercised. To test runtime behavior, I made a temporary probe archive from the existing `dist/library-0.1.0-alpha.174.tar.gz` and changed only that declaration to `min-version=33`, `max-version=35`. The current app metadata has since been updated to match that tested range.

- Published candidate archive SHA-256: `dceace861b851ff222ac4cd2b4c982e2cca4b3ec208481ef6587558919ead3f1`
- Temporary probe archive SHA-256: `d9ade5056c4ccb37e9977853b0f1b144ba978b6b13377bc074f8e54b0c7fb992`
- Source revision: `9098f05ab88aa47b487e88bdc12264b37e73d37a` plus the in-progress working-tree Playwright tests and screenshot baselines present at run time.
- Fixture: 40 English Gutenberg EPUBs copied from the existing test system; staged corpus archive SHA-256 `9a3a7d7b350dd87f0d4055c3240070fa86adfe70f8562bb3175017a4780a7d4d`.
- The initial scan on each server indexed all 40 books with zero metadata errors. The selected unique search/detail fixture was “A Rent In A Cloud”.
- Each server used a new SQLite-backed container and data directory. All three containers were removed after the run.

The 34 and 35 results below use the rerun with explicit Playwright exit-code propagation. In one earlier overlapping 35.0.0 run, the Firefox scan journey also failed its console-error assertion on `console: JSHandle@object`; it passed in the retained rerun. Treat that as an intermittent result to investigate, not as a stable pass or failure.

## Evidence

| Server | Playwright HTML report | Logs and failure artifacts |
|---|---|---|
| 33.0.9 | [HTML report](2026-09-24-smoke/nextcloud-33.0.9/playwright-report/index.html) | [run log](2026-09-24-smoke/nextcloud-33.0.9/run.log), [test results](2026-09-24-smoke/nextcloud-33.0.9/test-results/) |
| 34.0.4 | [HTML report](2026-09-24-smoke-corrected/nextcloud-34.0.4/playwright-report/index.html) | [run log](2026-09-24-smoke-corrected/nextcloud-34.0.4/run.log), [test results](2026-09-24-smoke-corrected/nextcloud-34.0.4/test-results/) |
| 35.0.0 | [HTML report](2026-09-24-smoke-corrected/nextcloud-35.0.0/playwright-report/index.html) | [run log](2026-09-24-smoke-corrected/nextcloud-35.0.0/run.log), [test results](2026-09-24-smoke-corrected/nextcloud-35.0.0/test-results/) |

Representative visual evidence:

- Nextcloud 33 Chromium catalogue: [actual](2026-09-24-smoke/nextcloud-33.0.9/test-results/catalogue-catalogue-search-2421c-ails-catalogue-detail-smoke-desktop-chromium/compact-catalogue-actual.png), [expected](2026-09-24-smoke/nextcloud-33.0.9/test-results/catalogue-catalogue-search-2421c-ails-catalogue-detail-smoke-desktop-chromium/compact-catalogue-expected.png), [diff](2026-09-24-smoke/nextcloud-33.0.9/test-results/catalogue-catalogue-search-2421c-ails-catalogue-detail-smoke-desktop-chromium/compact-catalogue-diff.png).
- Nextcloud 34 Chromium metadata form: [actual](2026-09-24-smoke-corrected/nextcloud-34.0.4/test-results/details-metadata-edit-pers-d4394--scan-review-smoke-mutation-desktop-chromium/item-detail-metadata-layout-actual.png), [expected](2026-09-24-smoke-corrected/nextcloud-34.0.4/test-results/details-metadata-edit-pers-d4394--scan-review-smoke-mutation-desktop-chromium/item-detail-metadata-layout-expected.png), [diff](2026-09-24-smoke-corrected/nextcloud-34.0.4/test-results/details-metadata-edit-pers-d4394--scan-review-smoke-mutation-desktop-chromium/item-detail-metadata-layout-diff.png).
- Nextcloud 35 mobile filter panel: [actual](2026-09-24-smoke-corrected/nextcloud-35.0.0/test-results/mobile-mobile-catalogue-fi-e2924-alogue-filters-mobile-smoke-mobile-chromium/test-failed-1.png), [failure context](2026-09-24-smoke-corrected/nextcloud-35.0.0/test-results/mobile-mobile-catalogue-fi-e2924-alogue-filters-mobile-smoke-mobile-chromium/error-context.md).

## Next action

Refactor the visual checks to set a deterministic theme and assert stable structure/behavior (including detail open, metadata save/rescan, and mobile filter clear) separately from screenshots. Then run the full unfiltered GUI suite on the three versions. Until the app package declares and passes support for them, keep in mind that the Nextcloud 33 and 35 runtime results here used a test-only metadata declaration and are not installability results for the published archive.
