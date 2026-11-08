# Open Library alternative edition browsing

Source development after installed alpha.5, tracked in [#183](https://github.com/utrost/Library/issues/183) and [#220](https://github.com/utrost/Library/issues/220). Not deployed or release-certified.

## Interaction

Both one-book lookup and bulk review use the same candidate controls. A candidate shows source, ISBN, publisher, edition publication date, format and language when supplied. Explanations distinguish a provider ISBN match, a title/author candidate and an alternative edition of a work. None automatically selects or applies fields. Work-level first-publication years are no longer presented as edition dates.

**Other editions** explicitly requests one page of the selected Open Library work. Each page displays up to eight entries in provider order, with Previous/Next controls. At most 200 raw entries can be browsed; refine by ISBN beyond that bound. Invalid/duplicate entries may leave a page shorter than eight; pagination follows provider entry positions rather than filtered-result counts. The original search candidates remain available. Missing edition-specific evidence is left empty, not borrowed from another edition. Google results have no work-edition browsing action.

One-book requests announce loading and reject stale responses after provider/book changes. Staged suggestions require Save/Discard before changing edition. Browsing clears the local edition selection but does not mutate saved metadata or the unsaved book draft.

Bulk browsing is queued using existing worker leases, retries and review versions. It clears the row's prior edition/cover approvals, retains the original matches and leaves other books untouched. Only editions in the original server-owned results or the current server-owned edition page can be chosen. Paused/cancelled runs cannot start new requests. Alternate work editions never acquire an automatic strong-ISBN classification merely by sharing a work.

## Boundaries

- Authenticated owned-book and CSRF-protected one-book endpoint; account-owned jobs in bulk.
- Validated `OL…W` work IDs, offset multiples of eight from 0 to 192; fixed `/works/{id}/editions.json` endpoint with nine entries requested for lookahead.
- Ignore provider pagination URLs. Require each edition entry to identify the requested work and a valid edition ID.
- Reuse the 512 KiB streamed response limit, six-second request/read bounds, cross-worker pacing and account-scoped 15-minute cache. No per-author/edition fan-out.
- Cache only normalized supported edition evidence for subsequent comparison. No migration, automatic public image request or change to save semantics.

Endpoint reference: [Open Library Works/editions API](https://openlibrary.org/dev/docs/api/books). Search behavior: [Open Library Search API](https://openlibrary.org/dev/docs/api/search).

## Focused evidence and remaining acceptance

The 2026-11-08 source-install slice passed six dedicated Playwright journeys: single and batch browsing in desktop Chromium, Firefox and mobile Chromium. They cover forward/backward and empty pages, persistent batch pages, approval invalidation, explicit field choice, Save/Discard and conditional Undo. Real server receipts are seeded with deterministic provider data; no public provider request is made. The keyboard-focus regression found by these journeys is fixed: results receive focus after the requested page arrives, without taking focus from another control the user selected.

Component and PHP checks cover source order, ISBN mismatch labels, stale responses, work membership, offset bounds, malformed provider results and private account isolation. See [the verification record](curation-alpha6-verification.md) for exact scope. The broader provider editor/batch journeys also pass against seeded fixtures.

Live-provider behavior, current provider policy/retention acceptance and the companion-editor matrix remain open. No full CI, signed-package release gate or developer deployment is claimed by this source checkpoint.
