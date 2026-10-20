# UI consistency — alpha.32

Status: **0.3.0-alpha.32 candidate implemented; final verification and deployment in progress**. Developer NC34 still runs signed alpha.31 until the deployment section is completed.

## Scope

All fourteen findings in the [20 October UI/UX review](../../ui-ux-consistency-review-2026-10-20.md) have corresponding implementation changes. Shared page typography/gutters, form actions, operation feedback, lookup states, current/proposed previews and removal confirmations now connect the existing Vue and server-rendered screens. Home covers use the shared image component. Cover/title links open Details; Quick view explicitly opens the drawer. Search is visible above catalogue results; saved-search naming is a secondary disclosure. Profile/list drafts are protected. Shelves and scanning lead settings; the extraction default has three numbered steps.

The existing book Save/Discard workflow, ownership boundaries and metadata authority remain in place. No database migration or dependency upgrade is introduced. The frontend package limit stays **1,320,000 bytes**.

## Verification

- **1,047 Python source checks**, **569 Vitest tests in 44 files**, PHP runtime suites and **518 inference parser vectors** passed locally.
- Translation inventory/generated catalogues: English, German and Arabic, **1,266 keys and 92 semantic sentinels**; security gates passed.
- The packaged disposable NC34 rehearsal passed **58 Playwright journeys** across desktop Chromium, Firefox and mobile Chromium, plus catalogue/ownership, author-directory, entity browsing and deletion fixtures. A final repetition checks the last alignment and wording changes.
- The broad screenshot pass captured **101 states**, desktop/mobile and light/dark, with zero page errors and zero attempted Library mutations. The selected fixture contained no series profile at capture discovery; series profile interactions are covered separately by the existing editor/browser suites.
- At 390 px width the first catalogue cover moved from approximately **525 px to 419 px** from the viewport top, with the main search now visible. This is an observed layout comparison, not a pixel-match test or a performance claim.

Early rehearsal failures exposed Quick view hit-target interception, clipped table actions and Nextcloud styles showing children of a closed saved-search disclosure. Those product issues were fixed. Selectors were also updated for the intentional labels and extraction headings. One parallel local test attempt overlapped package dependency installation and lost modules; it was rerun after installation. These failed attempts are not counted as passing evidence.

The folder-picker cancellation scenario can emit Nextcloud's known “No nodes selected” diagnostic; its existing narrow test allowance is retained. The rest of the journey suite continues checking unexpected browser failures. No blanket console-error suppression was added.

Raw screenshots/traces remain private local artifacts. The repeatable capture command is documented in [the UX concept](../../ux-concept.md). Human acceptance is **H03-24** in the [test handbook](../../human-test-handbook.md).

## Deployment

Pending CI, merge, signed package and rollback-protected deployment. Record the final source commit, archive SHA-256, installed integrity, served assets and catalogue count here after completion.

## Remaining release gates

This is NC34 developer verification. Exact signed-package NC33–35 fresh/upgrade certification, owner acceptance and manual assistive-technology checks remain separate App Store gates. Screenshot inspection is not a complete contrast or accessibility certification.
