# Metadata provider contract — 0.4 development

Reviewed implementation: 2026-11-08. This is the alpha.6 source contract, not a statement that provider policy or release acceptance has passed. Alpha.6 is installed on developer NC34; the [lookup ADR](adr-0.4-metadata-lookup.md) describes the current development contract.

## External requests and consent

Open Library and Google Books are independent administrator-enabled adapters. Google Books requires the administrator's server-side Books API key. The account chooses a provider and explicitly starts a one-book or selected-book lookup; a default choice does not authorize lookup during scanning, ordinary browsing, Unified Search, Dashboard or shared-library browsing.

Requests disclose the chosen ISBN or title/author search terms, the instance's network address and the configured application identity to that provider. Browsers receive normalized candidates, never the credential. Queries and keys are excluded from application diagnostics and curation archives. Curation export includes the provider preference and accepted correction evidence, not search caches or active approval tokens.

The adapters use fixed HTTPS API hosts, validated ISBN/work/edition/volume identifiers, bounded response parsing (512 KiB), six-second request/read timeouts and account-scoped 15-minute caches for normalized positive or empty results. Google cache identity also includes a hash of the configured key. Cross-worker request slots pace each provider; retries respect bounded Retry-After. Google 403 quota reasons enter cooldown rather than appearing as empty results. Unavailable/disabled providers cannot prevent local editing.

## Adapter/result v1

Search candidates carry provider identity, source edition/volume ID and URL, title/authors, available edition facets and an explicit matching reason. Edition lookup adds a bounded normalized field map. Open Library work IDs allow an explicitly requested bounded edition page; Google Books does not pretend that a volume is an Open Library work. Cached data is user scoped.

Provider responses are untrusted input. Remote URLs do not become arbitrary server fetch destinations. Search ordering is preserved for Google results; an ISBN mismatch is shown as a warning, not silently treated as an exact match. Missing fields remain missing. Editions, languages, formats and related works are evidence for the user's choice, not an automatic identity merge.

Selected proposals are server-bound to the book, source snapshot and review revision. Save/Apply commits chosen fields and evidence together. Unchanged accepted fields receive provider provenance; edited proposals remain manual changes. Conditional Undo uses the original receipt and refuses later changes. Old imported evidence is not an executable approval or Undo token.

## Presentation, covers and retention

Google's official **Powered by Google** image is stored unmodified at `img/powered-by-google.png` and shown with Google search/results/receipts. Each candidate and accepted receipt links to its source. The image comes from the [Google Books branding materials](https://developers.google.com/books/branding). Search/result behavior follows the [Books API guide](https://developers.google.com/books/docs/v1/using). Provider-specific requirements must be rechecked before publication against the [Google Books terms](https://developers.google.com/books/terms).

Open Library source links identify its evidence. Its [licensing documentation](https://openlibrary.org/developers/licensing) distinguishes catalogue data from cover rights. A cover's availability is not a blanket copyright licence. Only Open Library cover comparison/explicit acceptance is implemented; Google Books cover saving remains unsupported. Approved Open Library covers use bounded private preview storage and the existing original-cover/Undo retention contract.

Search caches last 15 minutes. Batch suggestions last 30 days; applied-change receipts and their conditional recovery data last 90 days, separately from suggestion expiry. New shared-history projections last 180 days. Accepted user corrections remain until edited/deleted. Curation archives include corrected values and retained shared-history evidence; original provider Undo receipts/binary backups are explicitly excluded. These retention choices require provider-policy acceptance before stable publication; they are not a claim of legal approval.

## Acceptance still required

Verify disabled-provider behavior, account/key cache separation, consent text and failed/empty/rate-limited responses on the installed candidate. Inspect attribution and source links in single-book, batch and receipt views. Check Open Library edition paging, Google result ordering, bounded retries and current provider terms. Use disposable books; do not run provider calls automatically as part of ordinary browsing tests.
