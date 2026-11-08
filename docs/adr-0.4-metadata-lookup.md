# Decision record: explicit book-details lookup

Status: installed development alpha.5 contract, updated 2026-11-07. Provider policy/attribution/retention acceptance remains open in [#181](https://github.com/utrost/Library/issues/181). Exact-package evidence: [alpha.5 checkpoint](lookup-editor-covers-alpha5.md). This document does not certify a stable 0.4 release.

## User action and data boundary

The owner opens **Find book details**, chooses Open Library or Google Books and explicitly searches by validated ISBN or title/optional author. Merely opening a book/section never contacts a provider. Search disclosure explains what leaves the instance. The selected edition is compared against the unsaved draft; accepted differences are staged into the ordinary Save/Discard workflow. Provider failure never blocks manual editing.

Both adapters use fixed HTTPS endpoints and bounded streamed JSON, duration and result counts. Caller-supplied URLs are not accepted. The Open Library ISBN endpoint permits only its specifically validated edition redirect; general redirects are disabled. A normalized ISBN match requires the returned edition to contain that ISBN. Title/author results are candidates, not verified identity. No passive browsing, scan or recipient action initiates lookup. Explicit bounded bulk jobs are described in [the batch contract](bulk-metadata-lookup.md).

Account-scoped positive/empty caches expire after 15 minutes. Database-backed provider slots pace requests across workers; provider cooldown and retries are bounded. Audit events record bounded identifiers/counts/outcomes, never private query text, provider payloads or credentials.

## Provider settings

Administrators manage provider enablement and the Google Books server API key in **Administration settings → Library → Book metadata lookup**. The password field stays blank; leaving it blank preserves the key and removal is explicit. Open Library needs no key. Google receives its key through the `X-Goog-Api-Key` header, not URLs or browser responses. Missing configuration is actionable. Goodreads and Amazon remain feasibility work (#200/#201).

## Suggestions, provenance and reversal

Supported suggestions include title, subtitle, publisher, publication year/date, description, subjects, normalized languages and checksum-validated ISBNs; Google volume IDs can be selected as GGKEYs. Unknown language evidence remains visible without silently applying an unsupported value. Canonical author/series/genre editing remains in the ordinary editor.

Edition comparison retains server-owned provider evidence bound to the book and revision. Save commits selected provider fields and manual sibling edits atomically. Unchanged accepted suggestions retain source attribution; manually modified values remain user edits. Selected ISBN subsets have their own provenance. Receipts unify one-book and bulk lookup history; conditional Undo preserves unrelated manual sibling edits and refuses later revisions or changed sources. Identical Save retries are idempotent; changed approval replays are rejected.

Suggestions are retained for 30 days; applied receipts for 90 days after Apply. Deleting suggestions can retain applied receipts; deleting receipts removes Undo history without reverting books. These retention mechanisms are implemented, but their provider-policy acceptance is still open under #181.

## Covers

Open Library covers require an explicit preview, current/suggested comparison and separate selection. Fixed numeric cover endpoints, safe raster validation, quotas and private same-origin previews protect the boundary. Approval expires after 30 minutes; receipt originals follow the receipt retention period. Covers are never implicitly approved by the strong-match shortcut. See [the cover contract](lookup-editor-covers-alpha5.md) for exact bounds.

Google Books permanent cover saving remains unsupported pending provider-policy review. Source links do not by themselves complete the required policy/branding review.

## Development after alpha.5

[Alternative edition browsing](lookup-edition-browsing.md) adds explicit paged Open Library work-edition choices in one-book and bulk lookup. It is source work, not part of the installed alpha.5 package. Cross-provider ranking and stable release acceptance are not claimed complete. See [remaining work](https://github.com/utrost/Library/issues/220).
