# Final compatibility smoke assessment

**Outcome: PASS** for Nextcloud 33.0.9, 34.0.4, and 35.0.0 with the `0.1.0-beta.1` release archive and 40 English Gutenberg EPUB fixtures.

The catalogue smoke check now verifies that the list cover control and image are visible and that the image has loaded successfully (`naturalWidth > 0`). It no longer asserts a fixed bounding-box size, which measured the 88px-wide button container instead of the 40px image expectation.

| Nextcloud | Install / fixture scan | Smoke executions | Result |
| --- | --- | ---: | --- |
| 33.0.9 | Installed; 40 indexed; zero scan errors | 9/9 passed | PASS |
| 34.0.4 | Installed; 40 indexed; zero scan errors | 9/9 passed on fresh rerun | PASS |
| 35.0.0 | Installed; 40 indexed; zero scan errors | 9/9 passed | PASS |

Each 9-execution run covers Chromium and Firefox desktop flows plus mobile Chromium. The smoke suite includes catalogue search/detail/list view, metadata edit and rescan, metadata export/import, scan-root browsing, and mobile filters.

## Final run evidence

- Nextcloud 33.0.9: [`run.log`](final-smoke-after-cover-check-fix/nextcloud-33.0.9/run.log), [`setup.log`](final-smoke-after-cover-check-fix/nextcloud-33.0.9/setup.log)
- Nextcloud 34.0.4: [`run.log`](nextcloud-34-after-width-fix-rerun/nextcloud-34.0.4/run.log), [`setup.log`](nextcloud-34-after-width-fix-rerun/nextcloud-34.0.4/setup.log)
- Nextcloud 35.0.0: [`run.log`](final-smoke-after-cover-check-fix/nextcloud-35.0.0/run.log), [`setup.log`](final-smoke-after-cover-check-fix/nextcloud-35.0.0/setup.log)

Nextcloud 34 had an intermittent server 500 on one login in an earlier run; the fresh complete rerun passed all tests. The transient did not reproduce.
