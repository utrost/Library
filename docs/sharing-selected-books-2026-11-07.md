# Selected-book sharing checkpoint — 2026-11-07

This is a focused source-build checkpoint for the 0.4 development branch. All checks ran locally against disposable accounts and synthetic files. GitHub Actions, full CI and the full release gate were not run. This source checkpoint preceded the versioned alpha.3 deployment; see the [alpha.3 upgrade and performance record](sharing-alpha3-verification.md) for subsequent signed-package and deployment evidence.

## Delivered

- Owners can select a personal list of 1–100 available books from one shelf and review the exact titles and paths before confirmation.
- Confirmation stores a fixed item/file-ID snapshot atomically. Later list edits do not expand recipient access. Changing the selection requires removing access and granting again.
- Recipients can browse publication details, covers and attachment downloads without a Files share. Existing Files-backed grants keep their behavior. Personal overlays and companion files are excluded.
- Shared file locks and a fresh storage-cache identity/ETag check protect the interval between authorization and opening the source. Covers use the same protection. Transactional file locking must be enabled.
- The owner can revoke access; account cleanup, app disable and uninstall remove snapshot membership. Independently created Files shares remain untouched.

## Local evidence

| Check | Result |
| --- | --- |
| NC33.0.9, NC34.0.4, NC35.0.0 / SQLite | Lifecycle fixture passed on all three versions, including the additive schema on fresh installs |
| NC34 selected-book browser journey | Passed in desktop Chromium, desktop Firefox and mobile Chromium |
| Final layout | Repeated all three selected-book browser cases after the spacing fix; desktop/mobile screenshots inspected and horizontal-overflow assertions passed |
| NC34 existing Files-backed regression | Five cases passed: three recipient browse journeys, owner revoke/regrant, and Files-access removal |
| Exact selection | Empty selection and stale confirmation rejected; editing the source list does not broaden a grant |
| Source identity and locking | Replacement at the old path rejected; stale cached Node rejected; moving the source while its read lease is held fails; the original source works again after restoration |
| Authorization | Excluded book, outsider and wrong-recipient requests denied; disabling core sharing hides the grant and denies content |
| HTTP download | Attachment, private/no-store, PDF bytes; a range returns 206 with the expected four bytes; a matching ETag returns 304 only after authorization; revoked range and conditional requests return 404 |
| Cleanup | Recipient catalogue cleanup removes snapshot rows; revoke, disable and uninstall remove Library grants while preserving independent Files shares |
| Source checks | Changed PHP files linted in the NC34 PHP runtime; both database XML contract checks, translation inventory, generated catalogue freshness, shell syntax and diff whitespace checks passed |
| Frontend build | Passed; runtime bundle 814,344 bytes, one module, no runtime chunks |

The first expanded browser attempt found an ambiguous test selector; it now targets the selected-book disclosure. A later Files-backed owner test reached the authenticated page but timed out waiting for all navigation resources. Its login step now waits explicitly for DOM readiness, and the regression rerun passed. These were test synchronization failures, not ignored failures.

## Reproduction

Run `bash scripts/smoke-shared-lifecycle.sh` for the focused sharing checks. Set `RUN_SHARING_PLAYWRIGHT=0` for backend-only verification or `RUN_FILES_PLAYWRIGHT=0` to omit the existing Files-backed browser cases. `NC_VERSIONS` selects the disposable versions. Set `LIBRARY_SHARING_RESULTS_DIR` to a private artifact directory to retain Playwright reports and screenshots; the script always removes its containers and temporary source fixtures.

## Remaining acceptance

This checkpoint does not certify a signed package or a populated upgrade. MariaDB/PostgreSQL coverage, large-file streaming memory, 100k-book end-to-end latency, external/read-only mounts, broader restricted-sharing policies, concurrent revocation, dark-theme/assistive-technology review and legacy managed-share recovery remain under [#194](https://github.com/utrost/Library/issues/194), [#196](https://github.com/utrost/Library/issues/196) and [#197](https://github.com/utrost/Library/issues/197). A transfer authorized before revocation may finish. Library-only sharing currently offers downloads without a Nextcloud reader handoff.
