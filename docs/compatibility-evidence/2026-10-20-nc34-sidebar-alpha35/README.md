# Sidebar structure and styling — alpha.35

Status: **signed 0.3.0-alpha.35 deployed on developer NC34**. Ready for sidebar acceptance in H03-26. No database migration.

## Changes

- Library groups Home, All publications, Favorites and Continue reading.
- Discover groups Shelves, Collections, Authors, Series and Genres.
- Your lists keeps Lists, Create a new list and saved list entries together.
- Review and cleanup uses a visible keyboard-operable disclosure arrow and matching small heading typography.
- One decorative SVG sprite supplies icons to both the Vue sidebar and the PHP language/publisher/subject review navigation. Visible link text remains the accessible name.
- On mobile, an opaque themed navigation panel prevents underlying content from showing through in Firefox.
- Section separators and a quieter new-list highlight clarify hierarchy; Settings stays in the catalogue footer. No search, data-model or navigation-destination changes.

## Verification

The source build was installed only in the disposable Gutenberg screenshot container for review. Focused Chromium and Firefox checks passed at 1440, 390 and 320 px: navigation links and icons visible, keyboard disclosure toggling, no document horizontal overflow and zero page errors. Captured light/dark states for the catalogue and maintenance navigation; reviewed desktop and mobile examples. Initial capture attempts used obsolete toggle selectors; the corrected harness uses the accessible Open navigation button and the maintenance dialog. These failed harness attempts are not passing evidence.

The local full check passed 1,051 source contracts, 591 frontend tests, PHP runtime checks, 518 inference vectors, translation checks, build and Markdown links, including a repeat after the version bump. The translation check first found the now-unused Browse label; removing it from all three catalogues restored the inventory check. The first version-bump check identified stale candidate references in release documentation; those references and the handbook package link were corrected before the successful repeat. The final hosted run passed all 77 browser journeys and the accompanying smoke checks. Source, frontend, package and security jobs, including CodeQL, passed.

Human acceptance: [H03-26](../../human-test-handbook.md#h03-26--final-consistency-acceptance). The [public screenshots](../../images/first-library/README.md) were refreshed again on a fresh installation of the signed alpha.35 screenshot candidate. All ten images were inspected; the first scan indexed 40 Gutenberg files without errors. The source package passed signature, SBOM, provenance and frontend-size audits (1,021,563 / 1,320,000 bytes). A second focused Chromium/Firefox run against that installed package passed all 12 viewport/page combinations with zero Library HTTP failures or page errors. An earlier Basic-auth source-fixture run encountered a transient SQLite lock; the final run used normal session login on a fresh fixture.

### Captured examples

- [Desktop navigation](../../images/sidebar-desktop.png)
- [320 px Firefox navigation in dark theme](../../images/sidebar-mobile-dark.png)
- [Fresh-candidate machine results](fresh-candidate-verification.json)

The focused screenshots intentionally retain keyboard focus on the disclosure. All book names are from the public disposable Gutenberg fixture.

## Deployment

- [PR #130](https://github.com/utrost/Library/pull/130), merged as `c8c468fead682130f74972aa0698fdb045531654`.
- [CI](https://github.com/utrost/Library/actions/runs/39489528436) and [security checks](https://github.com/utrost/Library/actions/runs/39489528433) passed for the accepted PR head. All **77 browser journeys** passed.
- Final signed archive: `library-0.3.0-alpha.35.tar.gz`; SHA-256 **`2cfffe126202173b706275b9b8afc98d828333e89a73b0ad7a893a24d4d1766f`**. Signature, SBOM, provenance and package audits passed. This supersedes the screenshot candidate as the deployment artifact.
- Frontend package: **1,021,563 / 1,320,000 bytes**; existing limit unchanged.
- Developer NC34: integrity clean, maintenance off, no pending database upgrade. Owner catalogue **107,717 → 107,717**.
- Rollback app directory: `/tmp/library-before-alpha35-20261020T202707Z`.
- Served versioned JavaScript/CSS, shared styles, English translations and navigation sprite match the archive byte for byte.
- Installed Chromium/Firefox smoke passed at 1440, 390 and 320 px in light/dark themes: navigation grouping, visible icons, keyboard disclosure, reachable Settings and no horizontal overflow. Zero Library HTTP errors or page exceptions, and zero attempted book mutations. Temporary authentication was removed.
- [Sanitized deployment results](verification.json). Live screenshots and raw logs remain private.

The exact signed NC33–35 matrix, manual assistive-technology testing and human acceptance remain separate release gates.
