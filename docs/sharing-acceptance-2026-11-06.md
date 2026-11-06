# Read-only sharing acceptance checkpoint — 2026-11-06

This is a focused source-build checkpoint for the 0.4 development branch, not signed-package certification. It uses disposable loopback-only Nextcloud instances, two synthetic users and one outsider. No personal library was accessed or changed.

## Results

| Check | Result |
| --- | --- |
| NC34 recipient browse and canonical-author search | Passed in desktop Chromium, desktop Firefox and mobile Chromium (3 Playwright cases) |
| NC34 cover access | HTTP 200 for recipient, `private, no-store`; HTTP 404 for outsider |
| NC34 owner revoke and regrant | Passed in desktop Chromium; existing manual Files share remained |
| NC34 Files share removal | Passed in desktop Chromium; recipient shelf disappeared and shelf, book and cover URLs returned HTTP 404 |
| NC33, NC34, NC35 lifecycle fixture | Passed on each version: no grant without accepted read-only Files access; grant, search, Files-share removal, restore, revoke, disable and uninstall; manual Files shares remained |
| Source syntax/format | `bash -n scripts/smoke-shared-lifecycle.sh` and `git diff --check` passed; the PHP fixture executed on all three Nextcloud versions |

Run the complete disposable browser check with `NC_VERSIONS=34.0.4 bash scripts/smoke-shared-lifecycle.sh`. Run the lifecycle fixture across all three versions with `RUN_SHARING_PLAYWRIGHT=0 bash scripts/smoke-shared-lifecycle.sh`. The script removes its containers and temporary browser artifacts on exit.

## Still open

The tests do not establish a signed-package result, SQL-engine matrix, 100k-book shared-listing latency, restricted sharing policies, account deletion, root moves or legacy managed-share recovery. Human review of dark theme, long labels, assistive technology and real reader handoff remains pending. The current product requires a separate accepted read-only Files share; it does not create one.
