# NC34 destination author typeahead — alpha.28

Status: implementation complete; verification and deployment in progress. Developer NC34 currently runs signed alpha.27.

## Scope

Merge/reassign uses one destination-author combobox. Search starts after three Unicode letters with a 250 ms debounce; outdated responses are ignored and pending requests are cancelled. Select an existing result directly with pointer or keyboard. After a successful empty search, explicitly create and select a new author. Changing the query clears the destination and previous review. Creation creates an unused author record; only reviewed confirmation changes book assignments. Review, stale protection and Undo remain in place. No backend, database or save-semantics changes.

## Verification

Component coverage includes debounce, keyboard selection, failures, empty-result creation, stale responses, cancellation and unmount cleanup. Playwright exercises the actual API on disposable accounts: existing selection, creation, review/cancel and unchanged book assignments on desktop and mobile. The existing merge/reassign/Undo smoke is updated to the new controls.

Local gate passed: 1,045 source checks, 551 frontend tests in 39 files, PHP runtime suites, 518 parser vectors, translations, production build and Markdown links. Initial version/translation checks caught an omitted Vite version marker and three retired translation keys; both were corrected before this passing run.

Disposable NC34: all three destination journeys passed (Chromium, Firefox, mobile). The separate author-assignment smoke passed 23 integration assertions and real merge, selected-book reassignment, explicit creation and Undo in Chromium and Firefox, with canonical catalogue display and mobile fitting. Preview/apply measured 2.53 ms on the small disposable fixture; this is not a large-library benchmark. Screenshots were inspected. Private logs: `/tmp/library28-check-final.log`, `/tmp/library28-focused.log`; assignment evidence: `/tmp/library-author-assignments-0fDcS8`.

Final CI, package checksum and installed smoke results will be recorded after completion. Exact signed NC33–35 certification and owner acceptance remain separate App Store gates.
