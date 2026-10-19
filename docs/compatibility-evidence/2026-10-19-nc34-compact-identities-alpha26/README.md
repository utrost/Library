# Alpha.26 compact author, series and genre rows

## Package and deployment status

`0.3.0-alpha.26` replaces three large cards with one compact panel below Book details. Authors, series and genres remain in that order; linked names, accessible edit/remove icons, inline typeahead and the single Save/Discard workflow are retained. Series part appears only in its editable field. The follow-up adds underlined text links and a collapsed File metadata section at the bottom with a Files link and indexed file size. The existing details response now exposes that size from its existing join, with no extra query or filesystem read. No database migration or save-semantics change is included.

The final signed package is **deployed** on developer Nextcloud **34.0.3.2** at `http://100.123.149.120:8088`. [PR #120](https://github.com/utrost/Library/pull/120) merged as `94416f471f2bddb8e28c74b83c190b1f90eef724`; the package was built from that clean merged commit.

- Archive: `dist/library-0.3.0-alpha.26.tar.gz`
- SHA-256: `b09007cf65f8098171c1be1cb55a6cd114041b97a8ea7aa33691be0b4e21b570`
- App integrity: passed; maintenance mode off; no database upgrade pending.
- Catalogue: **107,717 before and after**.
- Rollback: alpha.25 app directory retained inside the `nextcloud` container at `/tmp/library-before-alpha26-20261019T194722Z`.
- Installed JS hash: `d3c54bc1445d4667ce9b7422e441e3fe15269bdcc77513f6bc1059a0dcbb63af`
- Installed Vue CSS hash: `6de7a1e2f1c34d9064ea704911b470ac02306a803b1ba474632a9822cd246430`
- Installed common CSS hash: `4430c1c1f3756d2bb312a2ee7544acd3297cdd41a6f1f53eb20aa1fd65a166ee`

All three asset hashes match the merged build. The signed archive passed package, SBOM and provenance audits: 238 entries, 1,319,876 frontend bytes within the existing budget. Obsolete editor styles were removed to keep within that budget.

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

## CI and installed-package verification

[Final PR CI](https://github.com/utrost/Library/actions/runs/39312381944) passed **38/38 Playwright journeys**, using a disposable NC34 instance with 40 mixed-format publications. Desktop Chromium and Firefox passed atomic Save, stale-edit rejection, removal/Discard and part editing. Mobile Chromium passed empty/long-name layouts, direct selection, ordering, removal, part editing and Discard. File metadata starts collapsed, expands by keyboard, sits last on the page and exposes the location link and indexed size. Source checks, frontend tests, PHP runtime checks, CodeQL and security gates all passed before merge. Earlier runs were superseded by the requested link/file-information additions and asset synchronization; they are not acceptance evidence.

The final **installed signed package**, without substituted assets, passed a focused desktop 1440×900 and mobile 390×844 smoke:

- Compact panel and file information screenshots inspected.
- Save/Discard stays reachable at the expanded File metadata section, without horizontal overflow.
- Title, existing-author selection, existing-series selection and part edits were staged and discarded.
- Stored title, metadata revision and relationships remained unchanged; **zero Library mutation requests** and **zero uncaught browser errors**.
- File metadata starts collapsed at the bottom, expands by keyboard and shows the indexed size.
- The underlined location link opened the correct Nextcloud Files folder with the source book visible.
- Temporary app password revoked after verification.

[Sanitized live results](deployed-browser-results.json) and [layout measurements](source-layout-results.json) are committed. Screenshots remain private at `/tmp/library-alpha26-deployed-smoke-bAHOp2` and `/tmp/library-compact-layout-5mQg52`. Operational logs: `/tmp/library-alpha26-deploy.log`, `/tmp/library-alpha26-package-final.log`, `/tmp/library-alpha26-live-smoke.log`, `/tmp/library-alpha26-final-check.log` and `/tmp/library-alpha26-ci.log`.

## Human acceptance

Follow [H03-17](../../human-test-handbook.md#h03-17--one-save-for-book-details-and-linked-metadata) on desktop and mobile. Confirm the compact controls are understandable, hover/focus help works and changes persist only after Save. Creation of reusable author/series/genre identities remains immediate; Discard reverses book edits, not identity creation.

The exact signed NC33–35 fresh/upgrade matrix and owner acceptance remain App Store gates.
