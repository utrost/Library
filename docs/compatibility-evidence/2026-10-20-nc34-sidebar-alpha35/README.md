# Sidebar structure and styling — alpha.35

Status: implementation prepared; developer NC34 still runs alpha.34 pending CI, merge and signed deployment.

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

The local full check passed 1,051 source contracts, 591 frontend tests, PHP runtime checks, 518 inference vectors, translation checks, build and Markdown links, including a repeat after the version bump. The translation check first found the now-unused Browse label; removing it from all three catalogues restored the inventory check. The first version-bump check identified stale candidate references in release documentation; those references and the handbook package link were corrected before the successful repeat. Final versioned package, CI and deployment results will be recorded below.

Human acceptance: [H03-26](../../human-test-handbook.md#h03-26--final-consistency-acceptance). The [alpha.34 public screenshots](../../images/first-library/README.md) remain accurately labelled as that build; this sidebar refresh is newer.

## Deployment

Pending. The exact signed NC33–35 matrix and human acceptance remain separate release gates.
