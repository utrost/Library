# UI consistency — alpha.32

Status: **signed 0.3.0-alpha.32 deployed on developer NC34**, 20 October 2026. Ready for owner acceptance with handbook H03-24. This is not the App Store compatibility certification.

## Scope

All fourteen findings in the [20 October UI/UX review](../../ui-ux-consistency-review-2026-10-20.md) have corresponding implementation changes. Shared page typography/gutters, form actions, operation feedback, lookup states, current/proposed previews and removal confirmations now connect the existing Vue and server-rendered screens. Home covers use the shared image component. Cover/title links open Details; Quick view explicitly opens the drawer. Search is visible above catalogue results; saved-search naming is a secondary disclosure. Profile/list drafts are protected. Shelves and scanning lead settings; the extraction default has three numbered steps.

The existing book Save/Discard workflow, ownership boundaries and metadata authority remain in place. No database migration or dependency upgrade is introduced. The frontend package limit stays **1,320,000 bytes**.

## Verification

- **1,047 Python source checks**, **569 Vitest tests in 44 files**, PHP runtime suites and **518 inference parser vectors** passed locally.
- Translation inventory/generated catalogues: English, German and Arabic, **1,266 keys and 92 semantic sentinels**; security gates passed.
- The packaged disposable NC34 rehearsal passed **58 Playwright journeys** across desktop Chromium, Firefox and mobile Chromium, plus catalogue/ownership, author-directory, entity browsing and deletion fixtures. The final hosted CI repetition passed all 58 journeys and the regression smokes on the merged candidate. A local repeat completed both desktop projects before process termination during mobile; a separate mobile rerun passed all ten tests, and its disposable instance was removed.
- The broad screenshot pass captured **101 states**, desktop/mobile and light/dark, with zero page errors and zero attempted Library mutations. The selected fixture contained no series profile at capture discovery; series profile interactions are covered separately by the existing editor/browser suites.
- At 390 px width the first catalogue cover moved from approximately **525 px to 423 px** from the viewport top, with the main search now visible. This is an observed layout comparison, not a pixel-match test or a performance claim.

Early rehearsal failures exposed Quick view hit-target interception, clipped table actions and Nextcloud styles showing children of a closed saved-search disclosure. Those product issues were fixed. Selectors were also updated for the intentional labels and extraction headings. The first CI source job also identified an outdated handbook assertion requiring alpha.11; the assertion now checks the current candidate and H03-24. One parallel local test attempt overlapped package dependency installation and lost modules; it was rerun after installation. These failed attempts are not counted as passing evidence.

The folder-picker cancellation scenario can emit Nextcloud's known “No nodes selected” diagnostic; its existing narrow test allowance is retained. The rest of the journey suite continues checking unexpected browser failures. No blanket console-error suppression was added.

The [capture summary and layout measurements](screens.json) record 101 states with no root overflow above 1 px. Desktop Home/Shelves and Authors/Series headings align within 1 px and share the 24 px title size. Raw screenshots/traces remain private local artifacts. The repeatable capture command is documented in [the UX concept](../../ux-concept.md). Human acceptance is **H03-24** in the [test handbook](../../human-test-handbook.md).

## Deployment

- [PR #126](https://github.com/utrost/Library/pull/126), merged as `1cb2a7437c3370f0cca48a4bdfcbb4720a7b8222`.
- [CI source and GUI checks](https://github.com/utrost/Library/actions/runs/39422916580) passed. [Security checks](https://github.com/utrost/Library/actions/runs/39422916746), including CodeQL, passed.
- Nextcloud **34.0.3.2**; Library **0.3.0-alpha.32**.
- Signed archive: `library-0.3.0-alpha.32.tar.gz`.
- SHA-256: `83927b2b4be9909a709e7bf1aa7452fe12f52de5766794c3d2fe83ac977d95b2`.
- Rollback directory inside the developer container: `/tmp/library-before-alpha32-20261020T124515Z`.
- Integrity clean; maintenance mode off; no pending database upgrade. Existing catalogue **107,717 → 107,717**.
- Versioned JavaScript/CSS, shared UI CSS, base CSS and English translations served over HTTP match the signed archive byte for byte.
- Frontend package: **981,392 / 1,320,000 bytes**. Signature, SBOM and source provenance audits passed.
- Installed real-account smoke on desktop/mobile staged and discarded title, author and series changes; saved metadata remained identical and **zero Library mutation requests** were submitted (the normal duplicate lookup is permitted). Sticky actions were visible/reachable, Back and old-bookmark feedback worked, and File metadata linked to Files. Zero page errors and zero Library-page console errors; the external Files viewer logged one existing duplicate-handler registration diagnostic. The temporary credential was removed.

Installed disposable directory and deletion checks, final count and asset hashes are recorded in [the verification summary](verification.json). Real library books were not used for mutation/deletion tests. Raw screenshots and logs remain private local artifacts. The documentation commit follows application deployment; package provenance identifies the merged application commit above.

## Remaining release gates

This is NC34 developer verification. Exact signed-package NC33–35 fresh/upgrade certification, owner acceptance and manual assistive-technology checks remain separate App Store gates. Screenshot inspection is not a complete contrast or accessibility certification.
