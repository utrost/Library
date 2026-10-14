# Developer NC34 reader opening — 2026-10-14

## Failure and cause

Library's Open route correctly handed catalogue items to Nextcloud's `/f/{fileId}` route. EPUB and PDF viewers then failed to load books on the external `eBooks_calibre` mount. WebDAV returned HTTP 503 while the container's read-only bind source pointed at an empty, former automount path. The removable drive had been remounted under a different host path. A locally stored EPUB, a locally stored PDF and a CBZ on another storage all rendered, which ruled out a general EPUB Viewer or PDF Viewer regression.

After correcting the container bind and recreating only the Nextcloud app container, the same two external catalogue records initially landed in Files with "The file could not be found." Their physical files existed, but Nextcloud had replaced those two file IDs while the mount was unavailable. A read-only database check found 27 stale IDs among 199,566 Library file records on that mount. All 27 old IDs were absent from Nextcloud's file cache; their exact saved paths resolved to readable files with new, otherwise unindexed IDs.

## Remediation

- Changed the developer Compose read-only bind to the drive's current host mount, then recreated only the app container. Nextcloud 34.0.3 returned healthy with maintenance mode off and no pending database upgrade.
- Relinked the 27 verified Library file rows to their new Nextcloud IDs in one database transaction. Catalogue item IDs, metadata and list membership were preserved. A private old/new ID backup is retained outside the repository under `/tmp` on the developer host.
- Library's Open route now checks the indexed file ID and falls back to the saved path when Nextcloud has reassigned the ID. If neither is readable, it returns to the publication details with an explicit availability message.
- Open links in the catalogue, sidebar, lists, duplicate review and full details launch the Nextcloud reader in a new browser tab. The catalogue remains in the original tab.

## Verification

| Check | Result |
| --- | --- |
| Same external EPUB via Library Open | PASS: WebDAV GET 200; EPUB Viewer rendered the book. |
| Same external PDF via Library Open | PASS: WebDAV GET 200; PDF Viewer rendered page 1 of 309. |
| Browser click on sidebar Open | PASS: new tab created, original Library URL remained, EPUB content rendered. |
| Recently opened activity | PASS: `last_opened_at` advanced after the browser click. |
| External catalogue file IDs after repair | PASS: zero stale IDs in the checked mount; catalogue item count remained 107,717. |
| Frontend tests and build | PASS: 532 Vitest tests in 36 files; production build and module-closure check passed. |
| Translation inventory | PASS: English, German and Arabic catalogues regenerated; inventory check passed. |
| Python suite | 1,027 passed and 19 historical documentation/release assertions failed. The untouched HEAD baseline produced exactly the same 19 failures and 1,027 passes. |

Screenshots from the populated private library remain under `/tmp` on the developer host and are not committed.

## Remaining work

The host automount name is still dynamic. A stable OS mountpoint and matching Compose bind require administrator access; the current Compose correction survives container restarts while the drive keeps its present mount name. Full-scan reconciliation should also match a genuinely reidentified file by its path before inserting a new Library row, so future file-ID changes cannot produce duplicate catalogue items. These are separate from the verified Open action.
