# Decision record: explicit book-details lookup

Status: provisional first adapter, 2026-11-05. Tracks [#181](https://github.com/utrost/Library/issues/181) and [#182](https://github.com/utrost/Library/issues/182); the full provider contract is unfinished.

## User action and data boundary

The owner opens **Find book details** on one book. Opening the section or the book makes no provider request. Choosing Search sends either a validated ISBN or title and optional author to Open Library. The UI discloses this before the request. The owner then chooses an edition, compares each supported field with the current unsaved draft, and stages selected differences. Save/Discard and the existing revision check remain authoritative. A failed or disabled external service must never stop local book editing.

The first adapter uses fixed Open Library HTTPS endpoints, accepts no caller-supplied host or URL, disables redirects, bounds response size and duration, and parses responses as untrusted JSON. Search is limited to six works and two editions per work, with at most eight results. ISBN searches accept only a valid ISBN and require an exact normalized ISBN in the returned edition evidence. Edition IDs must match Open Library's book identifier shape. No scan, batch, page load or recipient action invokes the provider.

The cache key includes a one-way hash of the account ID and request. Positive and empty search results and edition details expire after 15 minutes. A database-backed slot spaces uncached provider requests at least one second apart across workers; contention returns a retryable error. Audit events record item ID, outcome and result count without private queries or raw provider responses. The adapter does not persist provider credentials or provider data outside its short-lived cache; selected values become ordinary manual book edits.

An administrator can disable this provider without disabling local editing by setting the app value `openlibrary_lookup_enabled` to `no` (for example, `occ config:app:set library openlibrary_lookup_enabled --value=no`). This is an operator control in the first iteration; an in-app provider settings screen remains open. No other provider is enabled.

## Result boundary

Search results carry source edition ID and URL, title, author names, publication evidence, publisher, ISBNs, language evidence and the match kind. Edition details expose title, subtitle, publisher, year/date, description and subjects as candidate fields. The editor stages those six supported fields and any explicitly selected ISBNs after checksum validation. Language codes remain evidence only. Open Library's source link remains available during review. No cover reuse occurs in this slice.

This iteration does not persist source/field provenance and therefore cannot offer source-aware reversal; accepted values have the same semantics as any other manual correction. The [selective apply issue](https://github.com/utrost/Library/issues/185) must add a versioned receipt, atomic provenance and conditional reversal before this is considered full metadata completion. Google Books requires a separately governed API key and independent enable/disable control. Provider-wide settings, cross-provider ranking, credential storage, terms and attribution review, and the privacy/accessibility matrix remain release gates under [#181](https://github.com/utrost/Library/issues/181) and [#187](https://github.com/utrost/Library/issues/187).
