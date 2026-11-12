# Metadata provider contract — 0.4 development

Reviewed source: 2026-11-12. DNB and Library of Congress are alpha.8 additions; this contract does not claim deployment, provider-policy approval or release certification. The [lookup ADR](adr-0.4-metadata-lookup.md) describes the current development contract.

## External requests and consent

Open Library, Google Books, DNB and Library of Congress are independent administrator-enabled adapters. DNB and Library of Congress use their public SRU catalogues without API keys. Google Books requires the administrator's server-side Books API key. The account chooses a provider and explicitly starts a one-book or selected-book lookup; a default choice does not authorize lookup during scanning, ordinary browsing, Unified Search, Dashboard or shared-library browsing.

Requests disclose the chosen ISBN or title/author search terms, the instance's network address and the configured application identity to that provider. Browsers receive normalized candidates, never the credential. Queries and keys are excluded from application diagnostics and curation archives. Curation export includes the provider preference and accepted correction evidence, not search caches or active approval tokens.

The adapters use fixed HTTPS API hosts, validated ISBN/work/edition/volume identifiers, bounded response parsing (512 KiB), six-second request/read timeouts and account-scoped 15-minute caches for normalized positive or empty results. Google cache identity also includes a hash of the configured key. Cross-worker request slots pace each provider; retries respect bounded Retry-After. Google 403 quota reasons enter cooldown rather than appearing as empty results. Unavailable/disabled providers cannot prevent local editing.

## Adapter/result v1

Search candidates carry provider identity, source edition/volume ID and URL, title/authors, available edition facets and an explicit matching reason. Edition lookup adds a bounded normalized field map. Open Library work IDs allow an explicitly requested bounded edition page; Google Books volumes and DNB/LoC records do not pretend to be Open Library works. Cached data is user scoped.

Provider responses are untrusted input. Remote URLs do not become arbitrary server fetch destinations. Search ordering is preserved for Google results; an ISBN mismatch is shown as a warning, not silently treated as an exact match. Missing fields remain missing. Editions, languages, formats and related works are evidence for the user's choice, not an automatic identity merge.

Selected proposals are server-bound to the book, source snapshot and review revision. Save/Apply commits chosen fields and evidence together. Unchanged accepted fields receive provider provenance; edited proposals remain manual changes. Conditional Undo uses the original receipt and refuses later changes. Old imported evidence is not an executable approval or Undo token.

## Presentation, covers and retention

Google's official **Powered by Google** image is stored unmodified at `img/powered-by-google.png` and shown with Google search/results/receipts. Each candidate and accepted receipt links to its source. The image comes from the [Google Books branding materials](https://developers.google.com/books/branding). Search/result behavior follows the [Books API guide](https://developers.google.com/books/docs/v1/using). Provider-specific requirements must be rechecked before publication against the [Google Books terms](https://developers.google.com/books/terms).

Open Library source links identify its evidence. Its [licensing documentation](https://openlibrary.org/developers/licensing) distinguishes catalogue data from cover rights. A cover's availability is not a blanket copyright licence. Only Open Library cover comparison/explicit acceptance is implemented; Google Books, DNB and Library of Congress cover saving remain unsupported. Approved Open Library covers use bounded private preview storage and the existing original-cover/Undo retention contract.

Search caches last 15 minutes. Batch suggestions last 30 days; applied-change receipts and their conditional recovery data last 90 days, separately from suggestion expiry. New shared-history projections last 180 days. Accepted user corrections remain until edited/deleted. Curation archives include corrected values and retained shared-history evidence; original provider Undo receipts/binary backups are explicitly excluded. These retention choices require provider-policy acceptance before stable publication; they are not a claim of legal approval.

## Acceptance still required

Verify disabled-provider behavior, account/key cache separation, consent text and failed/empty/rate-limited responses on the installed candidate. Inspect attribution and source links in single-book, batch and receipt views. Check Open Library edition paging, Google result ordering, bounded retries and current provider terms. Use disposable books; do not run provider calls automatically as part of ordinary browsing tests.

## DNB mapping and limits

DNB queries use the fixed `https://services.dnb.de/sru/dnb` endpoint, CQL `isbn`, `tit`/`per`, and exact `idn` lookups with MARC21 XML. The [DNB SRU tool](https://github.com/deutsche-nationalbibliothek/SRUQueryTool) documents the public interface. Search returns at most eight distinct records; comparison reuses the account-scoped record cache. The shared request quota uses the existing table; no migration is needed.

The adapter validates DNB record identity, distinguishes an exact ISBN match from a mismatch, and escapes CQL literals. XML parsing rejects DTDs, entities, malformed envelopes and SRU diagnostics; external resources, redirects and MARC-linked URLs are never followed. Bounded HTTP/parse failures remain failures, not successful empty searches.

MARC 245 supplies title/subtitle; publication statement 264 (publication indicator) or legacy 260 supplies publisher/year; 020 supplies validated, non-cancelled ISBNs; 041 or fixed-field 008 supplies normalized languages; 520 supplies an available description; controlled 650/651 headings supply subjects. Only author credits are shown as candidate authors. Missing descriptions stay missing; linked blurbs, covers, classification/genre mapping, automatic author reassignment and series enrichment are outside this first adapter. User-selected fields use the same staged Save, batch Apply, stale-review checks, receipts and conditional Undo as other providers.

## Library of Congress mapping and limits

The fixed HTTPS endpoint is `https://lx2.loc.gov/sru/lcdb`, using `marcxml`, `bath.isbn`, `dc.title` and `dc.creator`. The [current LoC catalogue documentation](https://www.loc.gov/z3950/lcserver.html) describes the Folio service and supported indices. No HTTP downgrade, alternate provider or general web-search fallback is attempted.

LoC uses the shared bounded SRU/MARC parser and field set described above. Its identity is the normalized, non-cancelled LCCN from MARC 010$a, with record agency DLC; MARC 001 is a local catalogue ID and is not substituted for the LCCN. Exact-record retrieval uses `bath.lccn`; source links use `https://lccn.loc.gov/{lccn}`. LCCN is source evidence, not an automatically added book identifier. Author query words are combined with AND so both given-name-first and surname-first input work without guessing a surname; queries retain a twelve-word bound. Textual MARC `author` roles are recognized alongside `aut`; translators and illustrators are not offered as authors.

DNB and LoC have independent settings, caches, pacing slots, attribution and portable preferences. Neither adds classification, series, genre or cover proposals in this first implementation. LoC fixture-based verification passes, but live acceptance remains pending: the documented HTTPS endpoint timed out from the development environment on 2026-11-12. See [LoC verification](loc-lookup-verification.md).
