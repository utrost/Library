# Nextcloud 34.0.4 rerun assessment

**Outcome:** Pass for the beta app smoke behaviors, disregarding the known catalogue cover-width assertion (`expected 40px, received 88px`) as requested. The unmodified Playwright command still exits nonzero because that assertion runs in both Chromium and Firefox.

## Final full smoke run

- Exact artifact: `0.1.0-beta.1`, installed in a disposable Nextcloud `34.0.4` instance.
- Gutenberg fixtures: 40 EPUBs; initial scan indexed all 40 with zero errors and zero metadata errors.
- Playwright: 7 passed; 2 stopped only at the disregarded cover-width assertion. All other configured smoke flows passed, including catalogue search/detail, metadata edit and rescan, metadata export/import, scan-root browse, and mobile filters.
- Evidence: [`run.log`](nextcloud-34-final-rerun/nextcloud-34.0.4/run.log), [`setup.log`](nextcloud-34-final-rerun/nextcloud-34.0.4/setup.log).

## Flake follow-up

The earlier 34.0.4 run had a scan job remain queued during the Chromium metadata test. In the full reruns, metadata edit and rescan completed in both browsers; the queued-job timeout did not recur.

One full rerun had a Firefox scan-root test report `Loading chunk 7883 failed`. A fresh focused rerun of that flow passed in both Chromium and Firefox, and the final full run also passed the scan-root flow. The separate console errors/login timeout from the first attempt did not recur.

- First full rerun: [`run.log`](nextcloud-34-rerun/nextcloud-34.0.4/run.log).
- Focused scan-root rerun: [`run.log`](nextcloud-34-focused-rerun/nextcloud-34.0.4/run.log).
- Final full smoke rerun: [`run.log`](nextcloud-34-final-rerun/nextcloud-34.0.4/run.log).

**Assessment:** No reproducible Nextcloud 34 app-behavior failure remains in these runs. The cover-width assertion remains a test/layout measurement mismatch and is intentionally excluded from this assessment.
