# Personal Lists — first implementation evidence

Date: 2026-09-25. Development version: `0.2.0-alpha.1`, working tree on `develop/0.2`. This checks the deployed source/build, not a signed release archive.

| Nextcloud | Installation | PHP integration | Chromium workflow | Firefox workflow | Mobile editor |
| --- | --- | --- | --- | --- | --- |
| 33.0.9 | Fresh | PASS | PASS | PASS | PASS |
| 34.0.4 | Upgrade from 0.1.0-beta.1; reused for development | PASS | PASS | PASS | PASS |
| 35.0.0 | Fresh | PASS | PASS | PASS | PASS |

Each environment indexed the same 40 English Gutenberg EPUBs. The PHP integration checks all 40 memberships, pagination, duplicate additions, separate notes, ordering across pages, revision conflicts, ownership rejection, rescans, actual Nextcloud share revocation, orphan-note retention and unchanged source content. The browser workflow adds three selected books, edits notes, reorders, reloads, handles a concurrent edit without losing its draft, removes entries and deletes its test list. Mobile coverage checks the editor at a 390px viewport; it does not claim the entire workflow was exercised on a phone.

## Reports and screenshots

- [33.0.9 results](33.0.9/test.log), [interactive report and screenshots](33.0.9/playwright-report/index.html)
- [34.0.4 results](34.0.4/test.log), [interactive report and screenshots](34.0.4/playwright-report/index.html)
- [35.0.0 results](35.0.0/test.log), [interactive report and screenshots](35.0.0/playwright-report/index.html)
- [Local check log](local-check.log): 1,041 Python tests, PHP runtime checks, 451 Vue tests, translation checks, production build, whitespace and Markdown links passed.

The desktop and mobile NC34 screenshots were inspected for readability and usable layout. Browser assertions check behavior and accessibility locators, not exact pixel matches. Earlier failures exposed an invalid initial-state shape and an obsolete constant in the new sharing test; both were corrected before these final runs.

## Limits and remaining review

These are SQLite-based development checks. The existing full release smoke matrix was not rerun for this alpha. A signed-package release still needs its release checks. User UX review remains open. Shared lists, discussion threads, list export/import, filtering and temporary sorting are outside this first implementation.

NC33 and NC35 compatibility containers were removed after saving evidence. NC34 remains available for incremental deploy/test cycles. See the [development workflow](../../v0.2-personal-lists.md#development-loop).
