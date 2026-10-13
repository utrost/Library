# Author profiles — 0.3.0-alpha.3

Implemented and deployed to developer Nextcloud 34.0.3 on 2026-10-13. This is an unsigned development slice, not the final App Store package. A private database backup and previous app tree were retained before the additive profile migration.

## Scope

Optional private manual biography and portrait; initials fallback; paged author catalogue with cover/list views, title search, newest-publication sorting and series headings. Profile saves share an author revision guard. Portraits are validated raster uploads, centre-cropped/re-encoded to at most 320×320 JPEG/100 KiB, and served through account ownership checks. No external enrichment or source-file writes.

## Verification

- `npm run check`: 1,045 Python tests; 531 Vitest tests across 36 files; PHP runtime suites; 518 inference parser parity vectors; 1,006 translation keys; production build and Markdown links.
- New profile fixture: seven service assertions covering 53-book pagination, filtered counts, literal wildcard handling, date ordering, ownership and biography limits.
- Chromium and Firefox profile workflows on disposable SQLite NC34.0.4 and developer MariaDB NC34.0.3: photo upload/removal, 320-pixel private JPEG response, plain-text biography/expand, title search, sort/grouping, views, pagination, stale edit and invalid upload rejection, other-account access denial, narrow layout, no page errors. Final developer run additionally verifies replacement and compatibility with name-only profile updates.
- Fixture account deletion checks that a retained private portrait becomes inaccessible in app-data storage, then removes the fixture state.
- Existing author-directory editing/rescan checks also pass on developer Chromium and Firefox, preserving original credits and preferred names.
- Existing assignment checks pass on both servers: 23 service assertions plus Chromium/Firefox merge, reassignment, explicit homonyms, canonical catalogue display and conditional undo. An initial SQLite run timed out waiting for a homonym undo to display two books; the rerun explicitly checks the undo response and passed. No production change was made on the basis of that timeout.
- Main 40-English-Gutenberg suite: first run 34/35 passed. One Firefox test timed out at the Nextcloud login screen before entering Library. **Full rerun: 35/35 passed in 3.5 minutes**, with no assertion relaxation; see `main-rerun.log`. The known Nextcloud picker-cancel diagnostic remains covered by its existing narrow allowance.
- Aggregate before/after hashes match for all 107,717 catalogue records, 206,706 tracked file records and two lists. These counts include missing files, not 107,717 physically available ebooks.

## Performance

Read-only measurements against the real developer catalogue; 11 calls per variant, first call recorded separately and warm median calculated from ten calls. Largest linked author: **1,625 books**. These are PHP service/SQL timings, not end-to-end browser load times.

| Profile query | Warm median | First call |
| --- | ---: | ---: |
| Title | 36.6 ms | 171.7 ms |
| Newest publication | 36.9 ms | 37.4 ms |
| Series | 38.2 ms | 37.4 ms |
| Title search | 42.0 ms | 39.5 ms |
| Second page | 35.8 ms | 36.4 ms |

The query starts from indexed account/author links and returns at most 50 books plus one pagination probe. Covers use existing lazy loading/thumbnail delivery. The photo endpoint returns a bounded private JPEG; the original upload is not retained.

## Screenshots

[Desktop profile](profile-desktop.png) · [Mobile profile](profile-mobile.png) · [Series/list view](series-list.png). These use synthetic books and a generated fixture portrait. Desktop and mobile screenshots were inspected for clipping, readable labels and working layout; this was not a pixel-match check.

## Repeat

```bash
# Creates and deletes isolated accounts, writes screenshots/results.
NC_CONTAINER=nextcloud EVIDENCE_DIR=/tmp/library-author-profile node scripts/smoke-author-profile.mjs
NC_CONTAINER=nextcloud EVIDENCE_DIR=/tmp/library-author-assignments node scripts/smoke-author-assignments.mjs

# Read-only aggregate timings; replace USER_ID explicitly.
docker cp scripts/performance/author-profile.php nextcloud:/tmp/library-author-profile-perf.php
docker exec -u www-data nextcloud php /tmp/library-author-profile-perf.php USER_ID
```

For a disposable server, set `NC_CONTAINER` and `NC_URL` to that instance. The profile/assignment helpers share a fixture-state filename: run them sequentially on the same server. The broader suite uses the existing `scripts/dev-lists-instance.sh` Gutenberg fixture and standard Playwright environment.

## Limits

- No external biography/photo retrieval. Profiles are private and manually maintained.
- Series grouping is per displayed page, ordered by series name then title. It does not normalise series identities or numerically order positions.
- A merge keeps the destination profile; source profile data is retained for conditional undo, not automatically combined.
- Photo app-data and SQL are not a distributed transaction. Exception rollback compensates new images; a process crash can leave an unreferenced private file until account deletion.
- NC33/35 and the signed exact-package fresh-install/upgrade matrix remain 0.3 release gates. Canonical author filtering/search/duplicates and other previously documented author release work also remain pending.
