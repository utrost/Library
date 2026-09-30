# Alpha.12 verification — 25–26 September 2026

## Candidate and scope

Candidate: `0.2.0-alpha.12`, `develop/0.2`. The [frozen unsigned package](library-0.2.0-alpha.12.tar.gz) is identified by [SHA-256](package.sha256). Documentation and test-harness updates made after freezing do not change its runtime files. This is development evidence, not an App Store release or signature.

Each disposable instance uses the official versioned Apache Docker image, SQLite and the same 40 English Gutenberg EPUBs. The 0.1.0-beta.1 archive is installed first, followed by the candidate, exercising the upgrade migration. Background mode is cron, with a worker restricted to Library's ScanJob while browser tests run. Instances run one at a time on loopback.

## Compatibility matrix

**PASS: 99 browser executions, zero failed/skipped/flaky results on the final candidate.**

| Nextcloud | Chromium desktop | Firefox desktop | Mobile Chromium | Extra smokes / backend | Source books | Evidence |
| --- | ---: | ---: | ---: | --- | --- | --- |
| 33.0.9 | PASS 14/14 | PASS 14/14 | PASS 5/5 | PASS | 40/40 unchanged | [Report](nextcloud-33.0.9/verified/report/index.html), [log](nextcloud-33.0.9/verified/playwright.log) |
| 34.0.4 | PASS 14/14 | PASS 14/14 | PASS 5/5 | PASS | 40/40 unchanged | [Report](nextcloud-34.0.4/verified/report/index.html), [log](nextcloud-34.0.4/verified/playwright.log) |
| 35.0.0 | PASS 14/14 | PASS 14/14 | PASS 5/5 | PASS | 40/40 unchanged | [Report](nextcloud-35.0.0/verified/report/index.html), [log](nextcloud-35.0.0/verified/playwright.log) |

All three disposable instances were deleted after retaining evidence. Each final integrity check matched all 116 package files and all 40 source book byte hashes. Three older beta frontend files remained unused after the upgrade; no candidate file differed. [Image/PHP versions](environment.json), [fixture archive hash](fixture.sha256) and raw per-version benchmark/integration/smoke logs are retained.

## Local checks

- [JavaScript](local/javascript.log): 476 tests, 25 files, passed.
- [Python](local/python.log): 1,041 tests passed.
- [PHP runtime](local/php.log): all runtime suites passed.
- [PHP syntax](local/php-lint.log): all packaged PHP files passed.
- [Translations](local/translations.log): 752 keys, English/German/Arabic, 92 semantic sentinels; generated catalogues current.
- [Production build](local/build.log): passed. Non-fatal upstream style/build warnings remain in the log.

The complete Playwright suite covers catalogue search/empty recovery, filter clearing, history, loading state, compact list layout, detail editing and rescan persistence, import/export, root scanning, folder picker, private lists and notes/order, advanced pattern persistence/deletion, ownership/validation/CSRF, contextual help, mobile filters and layout. Chromium and Firefox run desktop workflows; Chromium also runs the phone workflows. Assertions check usable geometry and behavior, not exact pixel matching. No retries are enabled in these runs.

The existing fixture permits only the exact known Nextcloud login user-status 404 pair and the folder picker's `FilePicker: No nodes selected` signal after intentional Escape cancellation. These are recorded core exceptions, not a claim of zero console events. Other browser errors fail the tests.

Additional scripts: `smoke-path-inference.mjs`, `smoke-personal-lists.mjs`, `smoke-vue-page.mjs`, plus the personal-list PHP integration and benchmark. This report does not claim every historical one-off smoke script, every browser/assistive technology, every database or a production-load test.

## Help audit and documentation

See the [help audit](help-audit.md) and [metadata extraction guide](../../extracting-metadata.md). Static explanations use label/heading help; errors, current state, user content and action consequences remain visible. Help supports pointer, keyboard and tap. Tests exercise accessible control names, Escape, focus-induced scrolling and mobile bounds. Manual screen-reader testing remains outstanding.

The extraction workflow is still preview-only. Advanced patterns save privately; guided transformations do not persist. Applying metadata, provenance/undo, individual-author browsing, catalogue storage for genre/series position, sidecar writing and filing remain future work.

Final review also found that an inserted help button could become an implicit label's associated control. Vue and server-rendered labels now explicitly reference the original input; unit and browser checks protect this association. The `pre-label-association` runs and package are retained as intermediate evidence. Only the final `verified` folders refer to the package linked at the top.

## List performance

The [benchmark](../../../tests/php/personal_lists_performance.php) compares the deployed alpha.11 service with alpha.12, using 150 temporary lists and 6,000 entries referencing the 40 books. One warm-up and ten measured calls per operation; timings are service execution, excluding HTTP/browser rendering. Raw reports are retained per version. The [baseline service](personal-lists-baseline.php) is retained for reproducibility.

List/count and membership queries are batched, page metadata is prefetched, simultaneous client reads are coalesced, and saving a note avoids a full-page reload. Live file permissions and optimistic revision checks remain enforced. Revoked shares, orphan notes, cross-user access, pagination and rescan persistence are covered by integration tests.

| Nextcloud | List index before → after | Membership before → after | 25-book page before → after |
| --- | ---: | ---: | ---: |
| 33.0.9 | 21.58 → 1.11 ms | 46.95 → 1.42 ms | 149.85 → 153.20 ms |
| 34.0.4 | 22.08 → 1.09 ms | 48.08 → 1.41 ms | 177.50 → 167.34 ms |
| 35.0.0 | 22.21 → 1.10 ms | 48.42 → 1.41 ms | 186.84 → 184.20 ms |

These are medians. The index is about 20× faster and membership about 33–34× faster on this fixture. Page latency is essentially unchanged: live permission checks still dominate. This is not an 84,000-book load test or an end-to-end latency guarantee.

## Failures investigated

The first 34 run is retained in `nextcloud-34.0.4/first-full`: 24 passed / 5 failed. Help focus could trigger scrolling and immediately dismiss its own popup; this was fixed. A general Nextcloud background worker caused a confirmed SQLite login lock, and a Firefox run saw a core chunk-load failure. The disposable runner now uses cron mode and a Library-only worker, and a clean instance was provisioned.

A later run (`nextcloud-34.0.4/final`) was 32 passed / 1 failed: Firefox's pointer was already over a help label after navigation, so the test incorrectly expected every tooltip closed. The test now moves the pointer away and dismisses help before checking the closed state. Screenshot review also found a help button stretching below the Folder path input: the label caption/layout was fixed, with a dedicated geometry assertion. The final `verified` runs are the authoritative results; earlier failures are not silently waived.

Nextcloud 33.0.9's core `user:add-app-password` command reads an undefined `login-name` option. The first extra inference smoke therefore failed before opening a browser. The test credential helper now falls back only for that exact error, invoking the command's token service directly through the administrative CLI; Nextcloud files are unmodified. Unit tests cover the normal path, narrow fallback and unrelated-error propagation. Extra smokes were rerun, and each temporary token was removed.

The first full 35 run was 32 passed / 1 failed. A Firefox metadata test triggered `OC is not defined` during navigation. Three focused repeats reproduced it; the retained trace places core/language script failures immediately after the test's next `goto`. The wait for the review POST redirect matched the review page's existing pathname, so it returned before navigation. The test now requires a changed URL and a completed load before continuing; error assertions remain strict. See `metadata-investigation.log` and `metadata-redirect-fixed.log` for the before/after runs.

## Reproduction

Use `scripts/dev-lists-instance.sh` with `NC_VERSION`, `LIBRARY_TEST_ARCHIVE`, `LIBRARY_BETA_ARCHIVE` and `LIBRARY_BOOK_FIXTURE_ARCHIVE`. Source `/tmp/library-lists-dev/VERSION.env`. Run `tests/php/personal_lists_integration.php` inside the container first (also creates the secondary account used by ownership tests). Start only `OCA\Library\BackgroundJob\ScanJob` with `occ background-job:worker`.

For the full Playwright run, export `PW_ROOT_PATH=/LibraryLists`, `PW_TOTAL_CARDS=40`, `PW_EXPECTED_CARDS=1`, and the unique `PW_SEARCH_TITLE` / `PW_ITEM_ID` from [fixture.php](fixture.php). Run `npx playwright test` with line/HTML/JSON reporters. Set `NC_URL`, `NC_USER` and `NC_CONTAINER` explicitly for the extra smoke scripts so they cannot default to the developer instance. Stop each disposable instance with the helper's `stop` action after retaining evidence.

## Visual review and developer deployment

Representative final screenshots were inspected for each version: Settings help placement, list notes/actions, advanced-pattern preview and mobile controls. Help buttons stay beside labels, explanatory paragraphs no longer crowd those forms, list actions remain usable, and the live preview stays available. The mobile catalogue table intentionally scrolls horizontally. This is a functional visual review, not pixel-baseline or manual screen-reader certification. PNG checkpoints are in each `verified/screenshots` directory and embedded in the HTML reports.

The exact final archive was deployed to `http://100.123.149.120:8088` (`nextcloud`, Nextcloud 34.0.3) as **0.2.0-alpha.12**. [List read-only smoke](developer/lists-readonly.log) passed against the two existing lists, with no Library mutation requests or browser errors. Five list API requests took 43, 20, 19, 19 and 20 ms on that session; these are observed HTTP timings, not comparative benchmarks. [Inference read-only smoke](developer/inference-readonly.log) passed on 40 indexed sample books, including mobile layout, invalid patterns, scope rejection and unchanged metadata. Temporary credentials were removed. Private developer screenshots remain in `/tmp/library-overnight/developer-lists.png` and `/tmp/library-inference-*.png`, outside repository evidence.

Rollback app-code archive: `/tmp/library-overnight/developer-before-alpha12.tar.gz`. No new database migration was introduced by alpha.12. Maintenance mode is off and no database upgrade is pending. The beta baseline/tag and App Store signing work are separate.

The final repository-wide `scripts/check.sh` [log](local/full-check.log) includes Python, translations, PHP runtime, JavaScript, production build, whitespace and top-level documentation-link checks. The [harness snapshots](harness/run-gui.sh) record this run's orchestration; adapt their local paths before reuse.
