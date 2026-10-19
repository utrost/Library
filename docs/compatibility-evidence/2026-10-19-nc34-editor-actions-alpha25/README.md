# Alpha.25 editor actions

## Package and deployment status

`0.3.0-alpha.25` corrects the scrolling boundary of the Save/Discard bar introduced in alpha.24. The bar belongs to the full details page so it remains visible while viewing file information, comments and imported metadata. Direct author/series selection and the unified save transaction are retained. No database migration is added.

The final signed alpha.25 archive is **deployed** on developer Nextcloud **34.0.3.2** at `http://100.123.149.120:8088`. [PR #119](https://github.com/utrost/Library/pull/119) merged as `04fc9fb01c5742715789c663753cc5fcf39ac144`; the package was built from that clean merged commit. Its local archive is `dist/library-0.3.0-alpha.25.tar.gz`, SHA-256 `e3c45a12672a2f2c82c15d6ccfa56abcd1149b1671ae659fbaff5c39739e5995`.

The upgrade completed on 2026-10-19, app integrity passed, maintenance mode is off and no database upgrade is pending. The catalogue count is **107,717 before and after**. The alpha.24 app directory is retained inside the `nextcloud` container at `/tmp/library-before-alpha25-20261019T074447Z` for rollback. Installed JS and CSS hashes match the merged build:

- JS: `03f62fda2bb0b68b788ddcd2b64dc0cc703b8c9db32ae05dc216cf3d42875d64`
- CSS: `e9b39b191a55fcbc48954731833cb34d27ef9c3d8fcc9cf2268a8faee9c5e09f`

Alpha.24 was merged in [PR #118](https://github.com/utrost/Library/pull/118); its live smoke exposed the disappearing action bar when scrolling below the editor. That failure prompted this fix and is not recorded as a passing deployment check. Initial alpha.24 browser attempts also failed at authentication; using the established origin-restricted app-password header resolved the test setup. Temporary test credentials were revoked.

## Verification

- The final signed package passed 1,045 source-contract checks, PHP runtime checks, production dependency audit, signing, archive audit, SBOM and provenance checks. It contains 238 entries and 1,309,773 frontend bytes within the configured budget.
- A source-frontend browser check passed on the populated developer NC34 backend at desktop 1440×900 and mobile 390×844. Only the local JS/CSS were substituted in the isolated browser; this is not installed-package verification.
- Both viewports kept Save/Discard inside the scrollport at the imported-metadata section. Both buttons were reachable and no horizontal overflow was found. Screenshots were inspected.
- Title edits, direct existing-author selection and direct existing-series selection were discarded successfully. Stored title, revision and linked metadata were unchanged. The check blocked Library mutation requests and observed **zero** such requests and **zero** uncaught browser errors. Its temporary app password was revoked.
- Private screenshots and JSON results: `/tmp/library-alpha25-source-smoke-4EXXXf`. Private catalogue content is not copied into this repository.
- [Hosted CI](https://github.com/utrost/Library/actions/runs/39217153907) passed **37/37 Playwright journeys** on disposable NC34 with the 40-publication mixed fixture. The unified-editor journey passed in Chromium and Firefox: atomic save, stale-tab rejection, the scrolling regression, and Discard restoring title, author and series without another update request. Source/unit checks, CodeQL and static security gates also passed before merge.
- After deployment, the same desktop/mobile browser smoke ran against the installed package without substituting assets. Both viewports passed sticky-bar visibility, reachable buttons, no horizontal overflow, direct existing-author/series selection and Discard. Stored title, revision and relationships stayed unchanged; **zero** Library mutation requests and **zero** uncaught browser errors were observed. The temporary app password was revoked. Screenshots were inspected.
- Installed-package screenshots and JSON results are private at `/tmp/library-alpha25-deployed-smoke-tgzHVz`; the [sanitized results](deployed-browser-results.json) contain no private book data. Operational logs are `/tmp/library-alpha25-deploy.log`, `/tmp/library-alpha25-package-final.log` and `/tmp/library-alpha25-ci-gui.log` on the developer host.

## Human acceptance and release limits

Use [H03-17 in the human test handbook](../../human-test-handbook.md#h03-17--one-save-for-book-details-and-linked-metadata): change book details, choose an author and series, scroll to imported metadata, save once, then make another change and discard it. Repeat on a narrow screen and confirm the controls feel clear and accessible.

Creating an author/series/genre identity remains immediate; Discard reverses the book draft, not creation of the reusable identity. Exact signed-package NC33–35 fresh/upgrade verification and owner acceptance remain App Store release gates. Earlier alpha.9 and beta.3 matrices do not certify this package.
