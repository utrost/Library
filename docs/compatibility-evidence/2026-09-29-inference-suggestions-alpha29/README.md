# Suggested filename and folder assignments — alpha.29

Implemented and deployed to developer Nextcloud 34.0.3 on 29 September 2026 as `0.2.0-alpha.29`.

## Behavior

**Suggest fields** proposes editable guided assignments from the selected example. Fixed, bounded detectors recognize trailing years, author conventions, series positions and recognized language/genre folders. Selecting a suggestion immediately updates the existing live preview and collapses **Edit pattern**. Supporting clues are available through label help; uncertainty warnings remain visible. Generated rules can be saved using the existing guided-rule controls. Per-book and per-field review, Apply and Undo continue to use the existing server flow.

Comma names remain one author. A standalone numeric filename such as `1984.epub` remains a title. Bare trailing years, names and inferred series folders require interpretation; structural match counts are not confidence scores. Paths are limited to 2,000 characters and 64 parts, and coverage checks inspect at most 40 sample paths. No custom regular expression is executed. Detection makes no network requests.

## Verification

- Full source gate passed: 1,041 Python tests, 531 frontend tests, PHP runtime checks, 518 parser parity vectors, frontend build and Markdown links.
- Focused suggestion and saved-rule tests passed: 15 assertions/tests across three files, covering numeric titles, Unicode/comma authors, author-folder agreement, series conventions, mixed samples, input bounds and immediate selection without writes.
- After label and layout refinements, translation checks passed for English, German and Arabic; the production build passed.
- Developer Playwright passed in Chromium and Firefox with desktop and 390-pixel mobile layouts, no page errors, immediate live-preview changes, intact comma authors, numeric titles, server acceptance of a generated saved rule and removal of that temporary rule.
- Browser examples were supplied through an intercepted sample response on the real developer app. No fixture books were created or applied. Before/after real sample records matched. A separate existing inference smoke used 40 actual indexed records and passed guided assignment, advanced pattern, invalid-pattern, scope/access and mobile checks with no write requests.
- Visual inspection exposed inherited inline definition-list styling. The preview now stacks labels above values, and the browser check verifies no label/value overlap. Headings and status messages wrap on phones.
- Temporary app credentials were removed. Browser screenshots and raw evidence are private under `/tmp/library-alpha29-suggestions-accepted/`; existing-flow output is `/tmp/library-alpha29-existing-inference.log`.

The latest complete NC33–35 matrix is [alpha.28](../../performance/2026-09-28-alpha28/README.md). This frontend change was verified on developer NC34; that broader matrix was not repeated.

## Repeat

```sh
npx vitest run src/inference-suggestions.test.js src/components/InferenceSuggestions.test.js src/components/InferencePatterns.test.js
node scripts/check-translations.mjs
EVIDENCE_DIR=/tmp/library-suggestion-check node scripts/smoke-inference-suggestions.mjs
node scripts/smoke-path-inference.mjs
```

The browser helper creates and removes a temporary app credential and one temporary private saved rule per browser. It never applies metadata to the sampled books. See the [extraction guide](../../extracting-metadata.md) for the user workflow.
