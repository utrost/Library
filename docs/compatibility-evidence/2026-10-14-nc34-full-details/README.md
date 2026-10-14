# NC34 modern full-details deployment — 2026-10-14

The modern **Full details** view replaced the visible **Maintenance (legacy)** action in [PR #105](https://github.com/utrost/Library/pull/105), merged as `47ed79efbbe1a61f87ec7c3248fe86c77c3027d4`. Normal catalogue, sidebar, list and duplicate links now use the modern details route. The old `/apps/library/items/{id}` route remains a direct-bookmark fallback.

## Exact package and developer instance

- Version: `0.3.0-alpha.9`; frontend asset generation: `v7`.
- Unsigned archive: `dist/library-0.3.0-alpha.9.tar.gz`.
- SHA-256: `508777551206b0fdb28eaa176e6fbd9ea71b86fad72704308c88a1fa52cd4e3c`.
- The release script completed its package audit, SBOM and provenance checks from the merged commit. The archive checksum matched after copying into the container, and the installed files matched `dist/library` byte for byte.
- Developer instance: `http://100.123.149.120:8088`, Nextcloud `34.0.3`, Library enabled, maintenance mode off and no database upgrade pending after deployment. A copy of the previous app was kept privately for rollback.

## Automated evidence

| Check | Result |
| --- | --- |
| [PR #105 source, security and CodeQL checks](https://github.com/utrost/Library/pull/105/checks) | Passed. |
| [Exact-package NC34 GUI workflow](https://github.com/utrost/Library/actions/runs/38625267691) with 40 English Gutenberg books | Passed: `playwright_gui_ok=true`, `source_tree_unchanged_after_gui=true`, `catalogue_performance_smoke_ok=true`, `vue_smoke_ok=true`, `browser_smoke_ok=true`, 40 rendered cards and zero browser console errors. |
| Populated developer NC34 Vue smoke | Passed: 100 catalogue items, modern details URL and surface, private cover response, source download, served assets, metadata and discovery checks; temporary token removed. |
| Populated developer NC34 browser smoke | Passed: 100 cards, sidebar open/render/close, zero browser console errors; temporary token removed. |
| Read-only Playwright full-details probe on developer NC34 | Passed: catalogue to sidebar to **Full details**, visible metadata, cover, tags and comments, zero page errors; temporary token removed. A screenshot stays in private local evidence at `/tmp/library-full-details-probe/nc34-full-details.png` because it contains real library content. |

The first private probe clicked a covered part of the image button and timed out because the title overlay intercepted pointer events. Clicking the visible title opened the sidebar. A second probe used an outdated metadata selector; after matching the view's actual markup, the final probe passed. The image-button hit area may deserve a separate UX pass, but it did not prevent opening the book through its visible title.

## Human handoff

Use [H03-01 and H03-10 in the human test handbook](../../human-test-handbook.md#current-03-human-cases) on a disposable book. Judge editing, cover replacement/revert, tags, comments, star, workflow, scan provenance and opening in a new tab. These mutations were not exercised by the read-only full-details probe. The current deployment is an unsigned alpha; this record does not certify the signed 0.3 package on NC33 or NC35.
