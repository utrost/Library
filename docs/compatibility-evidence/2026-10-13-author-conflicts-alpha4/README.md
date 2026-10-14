# Imported author change review

Library 0.3.0-alpha.4 is deployed on developer Nextcloud 34.0.3 with MariaDB. Users can compare imported author credits with current assignments and explicitly keep those assignments or use the imported credits. An additive nullable checkpoint preserves reviewed decisions across unchanged rescans; changed credits return to review.

## Verification

- SQLite Nextcloud 34.0.4 fresh install: 41 integration assertions and Chromium/Firefox review workflows passed.
- Developer Nextcloud 34.0.3 populated upgrade: the same 41 assertions and both browser workflows passed using isolated fixture accounts, which were deleted afterwards.
- The real EPUB scanner → author-review path, a manual metadata edit, and reset to scanner author metadata also pass.
- Service checks cover private access, input bounds, stale/repeated decisions, changed author revisions and source credits, keeping original identities/credits, accepting imported names, empty credit lists, subsequent rescans, continued automatic imports on untouched books, and rollback after an identity-resolution failure.
- Browser checks cover entry from Authors, comparison/focus, both decisions, HTTP 409 for a stale preview, reload/review recovery, persistent empty queue, mobile width and absence of page errors. [Desktop comparison](review-desktop.png) and [mobile comparison](review-mobile.png) were visually inspected.
- Final 40-English-Gutenberg main suite after the MariaDB fix: **35/35 passed in 3.4 minutes** across desktop Chromium, desktop Firefox and mobile Chromium. The known Nextcloud folder-picker cancel diagnostic remains under its existing narrow allowance.
- `npm run check` passed: 1,046 Python tests, PHP runtime suites, 518 parser parity vectors, 531 Vitest tests, 1,017 translation keys, production build, diff hygiene and Markdown links.
- Existing developer author regressions passed: 23 assignment service checks plus Chromium/Firefox merge/reassign/undo, and seven profile service checks plus both browsers covering photos, biography, search/sort and pagination.
- Deployment source/asset checksums match the workspace. Before/after metadata/file/list hashes match for all 107,717 catalogue entries, 206,706 tracked file records and two lists. These counts include missing-file entries.

## MariaDB regression found and fixed

The added real-file test exposed an existing error in seven `ItemService` author-update paths: Nextcloud's query builder quotes a raw string passed to `set()` as a column identifier. The literal string `'1'` therefore produced an unknown-column error on MariaDB; the SQLite run did not reveal it. Each pending-status update now uses a bound integer parameter. A static regression checks all seven paths, and the MariaDB integration exercises changed EPUB scanning, manual editing and scanner-candidate reset. The final browser and scanner tests use the corrected deployment.

## Performance

The real developer account currently has no author conflicts. Eleven service calls measured a first call of 76.35 ms and a warm median of 0.26 ms (maximum 0.46 ms). This measures the empty queue lookup, not a populated-queue stress test or end-to-end browser loading. The queue uses the existing account/status/item index and fetches at most 51 rows per page. No whole-library backfill is needed for the nullable checkpoint.

## Repeat

```bash
# Creates isolated fixture data, runs backend and Chromium/Firefox checks,
# captures screenshots, and deletes the fixture account.
NC_CONTAINER=nextcloud EVIDENCE_DIR=/tmp/library-author-conflicts node scripts/smoke-author-conflicts.mjs

# Read-only aggregate performance; replace USER_ID explicitly.
docker cp scripts/performance/author-conflicts.php nextcloud:/tmp/library-author-conflicts-perf.php
docker exec -u www-data nextcloud php /tmp/library-author-conflicts-perf.php USER_ID
```

Set `NC_URL` when using a different server. Author smoke helpers share fixture state and must run sequentially on the same instance.

## Behavior and limits

The review action changes relationships, sync status and the reviewed-source checkpoint. It does not rewrite preferred author profiles, source metadata or ebooks. Normal imports remain automatic when a book has no protected/reviewed decision. Empty author assignments remain protected by their checkpoint.

There is no automatic Undo for conflict resolution in this slice; the comparison screen explicitly states this before applying either choice. Existing merge/reassign Undo remains guarded against newer relationship/source changes. There is no bulk resolution. Failed migrations retain the administrator CLI retry workflow.

Remaining 0.3 release gates include unused-author cleanup, large background merges, embedded creator sort metadata, canonical author filters/search/sorting and duplicate matching, broader concurrent/interrupted-operation testing, and the signed exact-package NC33–35 fresh/upgrade matrix. This development deployment is not an App Store release.
