# Alpha.26 compact author, series and genre rows

## Candidate status

`0.3.0-alpha.26` replaces three large cards with one compact panel below Book details. Authors, series and genres remain in that order; linked names, accessible edit/remove icons, inline typeahead and the single Save/Discard workflow are retained. Series part appears only in its editable field. The follow-up adds underlined text links and a collapsed File metadata section at the bottom with a Files link and indexed file size. The existing details response now exposes that size from its existing join, with no extra query or filesystem read. No database migration or save-semantics change is included.

Deployment is pending required CI checks. Developer NC34 currently runs the [signed alpha.25 package](../2026-10-19-nc34-editor-actions-alpha25/README.md).

## Source browser verification

Local JS/CSS were substituted in an isolated browser against developer NC34. Synthetic relationships were supplied only to that browser; all Library mutation requests were blocked. No catalogue data was changed. These results are not installed-package certification.

| Fixture | Desktop 1440×900 panel height | Mobile 390×844 panel height |
| --- | ---: | ---: |
| Two authors, series part, two genres | 225.5 px | 553.5 px |
| Empty relationships | 221.5 px | 358 px |
| Five long authors/genres and long series | 509.5 px | 1302.5 px |

The example previously occupied 841.5 px on the same desktop viewport: **73.2% less vertical space**, exceeding the requested 40%. Controls and open suggestion menus remain within the viewport. Keyboard selection and Discard passed for authors and genres, with zero Library mutation requests and zero uncaught browser errors. Screenshots were inspected; no pixel-match assertions are used.

The first attempt exposed a missing genre test fixture; deterministic suggestions fixed the setup. A second browser process closed before the final two mobile cases. A complete rerun passed all seven cases. Private screenshots and JSON results: `/tmp/library-compact-layout-5mQg52`; no private catalogue screenshots are committed.

File metadata was also checked collapsed initially, expanded at the page bottom, with a visibly underlined Files link and readable size. Native definition-list padding was reset after screenshot inspection exposed excessive spacing on phones.

Local checks passed: 1,045 source contracts, 534 frontend tests, PHP runtime checks, translations and build/link checks.

The existing desktop Playwright journey covers atomic Save, stale-tab rejection, removal/Discard, part editing and the sticky action bar. A new mobile journey covers empty and long relationships, three-letter search, direct keyboard selection, ordering, removal, part editing, Discard and viewport bounds.

## Human acceptance

Follow [H03-17](../../human-test-handbook.md#h03-17--one-save-for-book-details-and-linked-metadata) on desktop and mobile. Confirm the compact controls are understandable, hover/focus help works and changes persist only after Save. Creation of reusable author/series/genre identities remains immediate; Discard reverses book edits, not identity creation.

The exact signed NC33–35 fresh/upgrade matrix and owner acceptance remain App Store gates.
