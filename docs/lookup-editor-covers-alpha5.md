# Alpha.5: shared lookup receipts and explicit covers

Development candidate, 2026-11-07. No new migration, full CI, GitHub Actions,
App Store publication or full release certification. This candidate also includes
[the previously verified bulk refinements](bulk-metadata-lookup-refinements.md).

## Contract

Single-book edition comparison now retains owned provider evidence server-side.
The existing Save/Discard workflow saves manual edits, explicitly accepted provider
fields and an optional cover in one transaction. Only unchanged provider values
receive provider attribution; manually corrected suggestions remain user edits.
Identifier subsets retain verified per-identifier sources. An identical Save retry
is idempotent; stale or changed approval is rejected. History combines single-book
and batch receipts, with conditional Undo that preserves unrelated manual edits
made in the same Save and refuses later revisions or source replacements.

Open Library cover comparison is explicit and independent of text selection.
Requests use a fixed numeric cover-ID endpoint, no redirects or client URLs,
12-second request/4-second connection timeouts, 4 MiB input and 8-million-pixel
limits, and the existing raster validator. Browsers receive private same-origin
images; jobs/diagnostics contain references, never encoded image bytes. Storage
is bounded to 256 MiB per account and 64 MiB/128 objects per job. Unused objects
are removed on job deletion/expiry; receipt originals survive with retained
receipts. Preview approval lasts 30 minutes; receipts last 90 days after Apply.
Cover replacement is always separately selected, including missing-field batches.
A later manual cover change receives user provenance and prevents Undo.

Google Books cover saving remains unsupported: its general API terms restrict
permanent copies beyond permitted caching. Google text lookup remains unchanged;
provider-wide policy acceptance is tracked separately in #181. Open Library cover
endpoint behavior follows its [Covers API documentation](https://openlibrary.org/dev/docs/api/covers).
See also [Google API terms](https://developers.google.com/terms).

## Focused evidence

- Injected provider fixtures, without public network requests: mixed manual/provider
  Save, conditional Undo, owner isolation, changed/duplicate approvals, identifier
  subsets, cover replacement and restoration, expiry, redirects, malformed/oversized
  images, stale downloads, and receipt-write rollback on SQLite.
- Disposable NC34 SQLite and MariaDB integration and provider fault fixtures.
- Component checks for normalized staging, no automatic cover requests or approval,
  private preview retrieval and failures; translation/build/module closure checks.
- Playwright single-book and batch comparison, Save/Discard, Apply/Undo, private
  images and original-byte restoration on desktop Chromium, desktop Firefox and
  mobile Chromium. Light/dark screenshots inspected; no horizontal overflow or
  page errors in these journeys. Backend/provider evidence is deterministic; this
  does not certify real-provider availability or screen-reader operation.

Reproduce with `tests/php/lookup_editor_cover_integration.php` on a disposable
instance, reseeding before each browser project. Its local fixture JSON is supplied
through `PW_EDITOR_FIXTURE` to `tests/gui/metadata/lookup-editor-cover.spec.ts`.
Existing bulk-review regression uses `tests/gui/metadata/bulk-lookup.spec.ts`.
`smoke-lookup-upgrade.sh` checks a populated signed alpha.4 → alpha.5 MariaDB upgrade,
including existing books, lists, Files-backed grants and saved lookup jobs.

Deployment and exact-package results are recorded after the signed package check.
Manual provider/legal, assistive-technology and NC33–35 release acceptance remain
separate work; development deployment does not close those gates.
