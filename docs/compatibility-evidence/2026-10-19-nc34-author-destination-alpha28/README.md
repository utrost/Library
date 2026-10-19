# NC34 destination author typeahead — alpha.28

Status: signed alpha.28 deployed on developer NC34 (34.0.3.2), 2026-10-19.

## Scope

Merge/reassign uses one destination-author combobox. Search starts after three Unicode letters with a 250 ms debounce; outdated responses are ignored and pending requests are cancelled. Select an existing result directly with pointer or keyboard. After a successful empty search, explicitly create and select a new author. Changing the query clears the destination and previous review. Creation creates an unused author record; only reviewed confirmation changes book assignments. Review, stale protection and Undo remain in place. No backend, database or save-semantics changes.

## Verification

Component coverage includes debounce, keyboard selection, failures, empty-result creation, stale responses, cancellation and unmount cleanup. Playwright exercises the actual API on disposable accounts: existing selection, creation, review/cancel and unchanged book assignments on desktop and mobile. The existing merge/reassign/Undo smoke is updated to the new controls.

Local gate passed: 1,045 source checks, 551 frontend tests in 39 files, PHP runtime suites, 518 parser vectors, translations, production build and Markdown links. Initial version/translation checks caught an omitted Vite version marker and three retired translation keys; both were corrected before this passing run.

Disposable NC34: all three destination journeys passed (Chromium, Firefox, mobile). The separate author-assignment smoke passed 23 integration assertions and real merge, selected-book reassignment, explicit creation and Undo in Chromium and Firefox, with canonical catalogue display and mobile fitting. Preview/apply measured 2.53 ms on the small disposable fixture; this is not a large-library benchmark. Screenshots were inspected. Private logs: `/tmp/library28-check-final.log`, `/tmp/library28-focused.log`; assignment evidence: `/tmp/library-author-assignments-0fDcS8`.

Final CI and installed-package smoke passed; package details follow. Exact signed NC33–35 certification and owner acceptance remain separate App Store gates.

## Final release and installed smoke

- [PR #122](https://github.com/utrost/Library/pull/122), merge `eb62820d24c783308fcc1f665ed1bad445c5614e`.
- [CI 39322444137](https://github.com/utrost/Library/actions/runs/39322444137): all required checks passed, including 44/44 Playwright journeys. [Security 39322444423](https://github.com/utrost/Library/actions/runs/39322444423) passed. An initial documentation-inventory count still expected 12 entries; the two newly registered journeys raised that to 14. The contract and required rerun passed before merge.
- Final focused disposable package rerun: 3/3 destination journeys passed, including focus after creation; 23 assignment integration assertions and Chromium/Firefox merge/reassign/create/Undo passed again. Evidence: `/tmp/library28-focused-final.log`, `/tmp/library-author-assignments-LBjTpD`.
- Signed archive `library-0.3.0-alpha.28.tar.gz`, SHA256 `9d347bf022be7239b71b6b184a90fe6cbac04ac26702a1ac26b1cfe78093c170`.
- Frontend payload: 1,311,574 / 1,320,000 bytes. Signature, SBOM, provenance and module closure audits passed; no legacy editor bundle. No database migration.
- Developer integrity clean; maintenance off; no pending upgrade. Catalogue count remained 107,717. Rollback directory in the developer container: `/tmp/library-before-alpha28-20261019T205905Z`; deployment output: `/tmp/library-alpha28-deploy.log`.
- Installed browser smoke: desktop 1440×900 and mobile 390×844. Three-letter minimum, direct selection, empty-result creation offer, cancellation, no overflow, editor stage/discard and bottom disclosure order passed. No frontend overlay. Zero Library mutation requests, zero page/console errors, saved book unchanged and temporary credential removed. Creation/confirmation were exercised only on disposable data.
- Private installed screenshots/results: `/tmp/library-alpha28-deployed-smoke-K0P8yH`. Served main JavaScript and Vue CSS matched local package assets:
  - `library-vue-0-3-0-alpha-28-compact-list-table-cover-96-fit-v8.css`: `265d9460feb668a7704708c72bcad77509c26224728db0b714a5738eaae37df4`
  - `library-main-0-3-0-alpha-28-compact-list-table-cover-96-fit-v8.mjs`: `8c2f0248280a3427832c8fcd31df5505924e3e6ac8d49f02628a41d36e364598`

The earlier alpha.27 smoke recorded a separate duplicate-handler error after opening Nextcloud Files. This author-focused smoke does not claim to resolve that Files viewer issue. Human acceptance and exact signed NC33–35 certification remain open.
