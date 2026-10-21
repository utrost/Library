# Alpha.38 developer candidate

Status: signed candidate checked locally; developer NC34 deployment is pending the required hosted checks and merge. This record does not certify NC33–35 or human acceptance.

## Changes

Alpha.38 combines the read-only deletion fallback with the testing-session fixes: ASIN and GGKEY identifiers, reordered catalogue filters, per-file path-pattern Apply, subfolder and file-order controls, underscore replacement, inline pattern creation, book-to-book navigation and path-placeholder help. The deletion marker and file-worklist indexes use additive database migrations.

The first hosted GUI run exposed a SQLite title/description search regression: a trigram count parameter was bound as text. Both trigram candidate paths now bind the count as an integer. The same run found an extra “Unavailable book” heading on available reading-list entries and outdated browser assertions for the redesigned controls. The second hosted run passed all 79 browser journeys, then exposed that clearing a worklist selection also hid batch history and Undo. History now remains available after Apply while the unselected review controls stay hidden.

## Candidate verification

- Full source gate: **1,051 Python checks**, **597 Vitest checks**, PHP runtime checks, **518 parser parity vectors**, translations, build and Markdown links passed. `npm audit` found zero vulnerabilities.
- The corrected signed package passed signature, frontend size, module-closure, SBOM and provenance audits. Frontend files total **1,048,350 / 1,320,000 bytes**. Candidate SHA-256: **`1f433be6f0f957917ecd759c9bfc631d3d3113f672a24c9f0383eb4c7815882b`**.
- The isolated NC34 regression run passed the rescan/title-search journey, six affected Chromium/Firefox journeys, and 47 PHP integration assertions including substring searches after indexing.
- The current source passed the exact Apply/Undo smoke in Chromium and Firefox, including reload history, stale-review rejection, Undo and cleanup. All later post-browser smokes passed locally: catalogue performance, Vue, sidebar HTTP, basic browser with zero console errors, author suggestions/directory and book deletion. The isolated instance was removed.
- A fresh disposable **Nextcloud 34.0.4** installation of the signed candidate indexed 40 Gutenberg EPUB files with zero metadata errors. The first-use, catalogue, details, author directory, extraction preview and per-file worklist screenshots were captured and visually reviewed. The isolated instance was removed after capture.
- Screenshot capture used the earlier signed UI candidate, SHA-256 **`fff87da8366ab6ff9d553cdd73144f0eb2c8a7f383679ca3d9fa0adff06b5b61`**. Its list-entry and search fixes do not change the pictured screens. See the [screenshot inventory](../../images/first-library/README.md).

Hosted CI, final merged package identity and developer NC34 installed-package smoke will be recorded below after completion.
