# Alpha.25 editor actions

## Package and deployment status

`0.3.0-alpha.25` corrects the scrolling boundary of the Save/Discard bar introduced in alpha.24. The bar belongs to the full details page so it remains visible while viewing file information, comments and imported metadata. Direct author/series selection and the unified save transaction are retained. No database migration is added.

At preparation time, developer Nextcloud **34.0.3.2** is running alpha.24. Alpha.25 merge, final signed archive identity and deployment results will be recorded here after verification. Alpha.24 was merged in [PR #118](https://github.com/utrost/Library/pull/118); its live smoke exposed the disappearing action bar when scrolling below the editor. That failure is not recorded as a passing deployment check.

## Verification

- The alpha.25 package preparation passed 1,045 source-contract checks, PHP runtime checks, production dependency audit, signing, archive audit, SBOM and provenance checks.
- A source-frontend browser check passed on the populated developer NC34 backend at desktop 1440×900 and mobile 390×844. Only the local JS/CSS were substituted in the isolated browser; this is not installed-package verification.
- Both viewports kept Save/Discard inside the scrollport at the imported-metadata section. Both buttons were reachable and no horizontal overflow was found. Screenshots were inspected.
- Title edits, direct existing-author selection and direct existing-series selection were discarded successfully. Stored title, revision and linked metadata were unchanged. The check blocked Library mutation requests and observed **zero** such requests and **zero** uncaught browser errors. Its temporary app password was revoked.
- Private screenshots and JSON results: `/tmp/library-alpha25-source-smoke-4EXXXf`. Private catalogue content is not copied into this repository.
- The hosted unified-editor journey now checks the scrolling regression and Discard restoring title, author and series after a successful save, in addition to atomic save and stale-tab rejection. Hosted results are pending.

## Human acceptance and release limits

Use [H03-17 in the human test handbook](../../human-test-handbook.md#h03-17--one-save-for-book-details-and-linked-metadata): change book details, choose an author and series, scroll to imported metadata, save once, then make another change and discard it. Repeat on a narrow screen and confirm the controls feel clear and accessible.

Creating an author/series/genre identity remains immediate; Discard reverses the book draft, not creation of the reusable identity. Exact signed-package NC33–35 fresh/upgrade verification and owner acceptance remain App Store release gates. Earlier alpha.9 and beta.3 matrices do not certify this package.
