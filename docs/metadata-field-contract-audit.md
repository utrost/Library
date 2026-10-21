# Metadata field contract audit

Status: code review on 2026-10-17, with local fixes on 2026-10-18. The alpha.23 book editor stages its visible fields and linked entities for one transactional save; imported source credits/series/genre are shown in a collapsed review panel. This is a source-level audit, not a browser or database verification run. File-level tags, comments, cover overrides, and list notes are separate contracts.

## Field matrix

| Field | Extraction and storage | Edit and save | Display and discovery | Result |
| --- | --- | --- | --- | --- |
| Title | EPUB/OPF, PDF, CBZ, filename; `library_items.title` | Full details and sidebar; revision-checked save | Card/detail title, text search, title sort | Aligned. |
| Subtitle | PDF Subject, CBZ issue context, filename patterns or manual entry; `subtitle` | Full details and bulk edit | Details and text search | Aligned, but source meaning is format-dependent. |
| Publication type | Source/inferred type; `publication_type` | Full details select and bulk edit | Detail header and type filter | Aligned. |
| Source creator credits | Repeated EPUB creators, PDF Author, CBZ roles, filename; `creators` and `authors_json` | Imported value is available for review; legacy form, import and scanner review remain specialist paths | Source/export credit and text search; catalogue may display curated author | Intentional distinction from linked author identities. CBZ role names now split only on semicolons. |
| Linked authors | Account-private `library_authors` and `library_item_authors` | Author picker, assignment and merge workflows | Author profile, ID filter, and general search through preferred/sort names | Separate authority is documented in [metadata-authority.md](metadata-authority.md). Source credits remain searchable and sorting remains source-based. |
| Publication / periodical | EPUB/CBZ series and filename issue patterns; `publication` | Full details and bulk edit | Legacy publication facet and text search | Still needed for periodicals and older imports. Sidebar label was corrected from “Series” to “Series / periodical” in this audit. |
| Series and part | EPUB/OPF and CBZ ComicInfo series metadata; `series_name`, `series_number`, plus linked series overlay | Full details, sidebar and reviewed series assignment | Linked series page and ID filter | CBZ Series/Number now fill the dedicated fields. Raw series name is not in global text search. |
| Genre | Path/manual proposals; scalar source `genre`, plus account-owned curated genre links | Curated picker and reviewed suggestions; imported value is available for review | Curated genre directory and ID filter; source genre is not in global text search | The source value and curated assignment have separate authority in alpha.12. |
| Publication date | EPUB/OPF, PDF metadata, CBZ, filename; `publication_date` | Full details and sidebar; calendar-format validation | Details and year filter | Aligned for YYYY, YYYY-MM and YYYY-MM-DD. PDF file creation date is weaker evidence of publication date and should retain provenance. |
| Publisher | First EPUB/OPF `dc:publisher` or CBZ publisher; scalar `publisher` | Full details with library-backed suggestions; free text can create a new value | Exact publisher filter and suggestions; absent from general search index | The scalar model works for editing, but discovery and reconciliation have gaps; see A6–A9. No publisher identity/merge model yet. |
| Language | First EPUB/OPF language; scalar `language`, with editor allowing multiple codes joined by delimiters | Full details chip picker and alpha.14 review for unresolved source values; save validates code format | Individual language links in sidebar; catalogue filter matches complete delimited tokens | Clear names/codes normalize on scan in alpha.14. Large-library filter cost and review UX still need acceptance. |
| Subjects | Repeated EPUB subjects; `subjects_json` and facet index | Full details chip picker and legacy editor; save rebuilds facets/search | Exact subject filter, suggestions, text search and genre suggestion input | Submitted chip boundaries and commas are preserved in alpha.11. Scan normalization loses original order and case variants; see A7–A8. |
| Classifications | Mainly manual/imported values; `classifications_json` and facet index | Full details line editor and legacy editor; bulk edit | Exact classification filter, suggestions and text search | Same review comparison and empty-candidate behavior as subjects; see A8. |
| Description | EPUB/OPF or manual; `description` | Full details textarea | Details and text search | Aligned. |
| ISBN/ISSN/ASIN/GGKEY | Explicitly labelled or constrained extracted values; `library_item_identifiers` | Full details and sidebar; scheme-specific validity is recorded, but invalid labelled values remain reviewable | Detail rows and identifier search | ASIN and GGKEY coexist with ISBN/ISSN. Ambiguous platform IDs use `ASIN:` or `GGKEY:` search prefixes. |
| Personal rating | User-only `personal_rating` (1–5 or empty) | Star control with its own revision-checked endpoint | Details | Aligned; it is distinct from the binary “Starred” bookmark. No rating filter is currently offered. |
| Workflow status / Starred | User-only columns | Separate detail controls | Workflow and starred catalogue filters | Aligned; not imported publication metadata. |

## Findings and local resolution

### A1 — Preserve list-item boundaries on save (high)

`FullDetails.vue` submits subjects and classifications as separate `field[]` values. The controller now preserves these as arrays, and the sidebar does the same. The service splits legacy scalar input only on semicolons or newlines; a comma stays inside a value such as `History, 19th century`. The legacy single-field editor submits a scalar. Browser and database verification remain pending for import → edit unrelated field → save → rescan → exact subject filter.

Evidence: [`FullDetails.vue`](../src/components/FullDetails.vue), [`App.vue`](../src/App.vue), [`ItemController.php`](../lib/Controller/ItemController.php), [`ItemService.php`](../lib/Service/ItemService.php).

### A2 — Make individual language links match multi-language records (high)

The full-details picker permits multiple language codes and the sidebar renders a link for each. Storage remains a delimited string. Source lists of valid codes are normalized to the editor's semicolon convention; the catalogue filter now matches a complete code token without matching `de` inside `de-AT`, including case variants. This is a correctness-first SQL query; measure its cost on the populated library before release and consider an indexed language facet if needed. Browser and database verification remain pending for two codes, one code, regional codes, and sidebar links.

Evidence: [`MetadataValuePicker.vue`](../src/components/MetadataValuePicker.vue), [`App.vue`](../src/App.vue), [`ItemService.php`](../lib/Service/ItemService.php).

### A3 — Map ComicInfo series into the current series model (medium)

The CBZ extractor now maps `ComicInfo.xml` Series/Number to dedicated `series`/`seriesNumber` while retaining legacy `publication` and existing subtitle behavior. Pipeline revision v11 requests re-extraction on the next full scan. New field-level edit protection preserves a manually changed series or part on rescan; older manually edited books retain whole-item protection. Browser and database verification remain pending.

Evidence: [`CbzComicInfoMetadataExtractor.php`](../lib/Metadata/CbzComicInfoMetadataExtractor.php), [`metadata-storage.md`](metadata-storage.md).

### A4 — Stop assuming commas separate CBZ author names (medium)

`comicInfoCreators()` now splits a role value only on semicolons. A comma such as `Doe, John` remains part of one source credit; ambiguous comma-separated multi-author values remain one credit for review. This is conservative and needs fixture and browser verification.

Evidence: [`CbzComicInfoMetadataExtractor.php`](../lib/Metadata/CbzComicInfoMetadataExtractor.php), [`metadata-authority.md`](metadata-authority.md).

### A5 — Protect corrected fields while refreshing untouched fields (high)

New manual edits now record the changed publication fields and identifiers in `protected_fields_json`. A rescan can refresh the untouched fields while preserving those corrections; scanner candidate values remain available for review/reset. The migration adds a nullable column with no data rewrite. NULL on an older edited book continues the previous whole-item protection, because its edited fields cannot be inferred safely. Reviewed inference Apply/Undo also retains whole-item protection until its snapshot contract records per-field intent. Resetting a scanner candidate removes that field from a new row's protected list. Hosted CI passed its check, security and disposable GUI jobs; the signed package upgraded the populated NC34 instance with the new column and unchanged catalogue count. Human editor/scanner acceptance and the exact signed NC33–35 matrix remain pending.

Evidence: [`ItemService.php`](../lib/Service/ItemService.php), [`metadata-storage.md`](metadata-storage.md).

## Changes made during this audit

- The sidebar identifier type is now an ISBN/ISSN select with ISBN as the new-row default, matching the server's accepted schemes. Empty new rows are no longer displayed as saved identifiers.
- The sidebar's legacy `publication` value now says “Series / periodical,” matching its actual filter and the distinct `series` field.
- Removed the stale “Maintenance” label and help. Full details remains available from the sidebar action.
- An old invalid-checksum badge in full details disappears when the user edits its scheme or value; a fresh result appears after save and reload.

A1–A5 are merged and deployed in the signed alpha.11 developer package. CI and NC34 installation checks passed. Human browser acceptance, a full v11 rescan measurement and the exact signed NC33–35 matrix remain open before release.

## 2026-10-18 follow-up: publisher and subject consistency

This section records the source review of the alpha.14 tree. It did not run a browser, database, migration or performance check. The alpha.15 implementation below addresses these findings; human acceptance is recorded separately.

| Contract step | Publisher | Subjects and classifications |
| --- | --- | --- |
| Source and confidence | EPUB/OPF imports the first publisher; CBZ imports its publisher. No spelling or legal-entity inference is attempted. | EPUB/OPF imports repeated subjects; classifications mostly come from manual entry or metadata import. Repeated OPF subjects are separate values. A comma inside one subject remains inside that value. A source subject may suggest a curated genre, but accepting a genre does not rewrite the subject. |
| Canonical value | One trimmed `library_items.publisher` string. There is no publisher identity table or account-wide alias decision. | Per-book JSON lists in `subjects_json` and `classifications_json`. `normalizeMultiValueField()` trims, removes case-insensitive exact duplicates and sorts. Facet rows are derived, not identities. |
| Provenance | Scanner candidate and source live in `field_values`/`field_sources`. Only the first OPF publisher is captured. | The candidate map records the **normalized** JSON list, not the exact original list/order/casing; consequently the raw repeated OPF terms cannot be reconstructed from Library's provenance alone. |
| Manual edit and rescan | Full details provides three-character suggestions and allows a new value. Changed fields enter `protected_fields_json`; untouched fields can refresh. Older edited books retain whole-item protection. | The chip editor sends separate array values; the legacy field separates on semicolons/newlines. Changed lists are protected as a whole; the same legacy protection rule applies. |
| Discovery | Exact publisher filter and facet-backed suggestions work from the current scalar value. Publisher is missing from both `searchDocumentForRow()` and `searchIndexSourceRow()`, so publisher-only general searches can miss books. | Exact facet filters, three-character suggestions and general text search use the stored normalized values. The genre suggestion queue also reads source subjects. |
| Reversal | A non-empty scanner candidate can be restored per field or by Reset all. No undo or account-wide publisher merge exists. | The same reset route exists, but the detail view currently compares JSON candidate text with semicolon-joined display text; unchanged lists may appear different. Empty scanner candidates are omitted from the candidate map and cannot be restored through Reset. |

### Findings to resolve before the first public 0.3 package

**A6 — Search loses publisher-only matches and can hide non-title matches (high).** Add publisher to the document used by the gram index and introduce a bounded rebuild/version for existing books. Search currently takes a separate branch when any exact title exists; that branch considers exact titles and authors only, so a query equal to one title can hide another book matching its publisher, subject or description. Restore union semantics for all matching fields. Do not trigger a full metadata re-extraction solely to rebuild search grams on a 100k-book library. Evidence: `ItemService::searchDocumentForRow()`, `searchIndexSourceRow()`, `applyCatalogueFilters()`.

**A7 — Scanner provenance does not preserve original subject spelling/order (medium).** Keep the raw source list separately when normalization changes it, within existing provenance limits. Continue using the normalized list for facets and matching. Display source and current values distinctly; never imply the normalized candidate is a verbatim OPF copy. A publisher can remain scalar; any publisher alias/reconciliation workflow should also preserve its source string. Evidence: `ItemService::metadataCandidate()`, `buildCurrentFieldValues()`, `normalizeMultiValueField()`.

**A8 — Review differences and reset are wrong for lists and absent source values (high).** Compare parsed, normalized lists, not their serialized/display strings. Represent an explicit empty scanner value so a user can review and reset a manually added publisher/subject when the source has none. Make single-field and all-field reset understand that representation while retaining per-field protection and revision behavior. The UI currently excludes empty candidates from its difference list. Evidence: `FullDetails.vue` `provenance`/`differences`, `ItemService::buildCurrentFieldValues()` and `resetFieldToScannerCandidate()`.

**A9 — Controlled vocabulary is a separate product decision (medium).** Current publisher suggestions are drawn from book values, so variants such as `St. Martin's Press` and `St Martins Press` remain separate exact-filter choices. Subject suggestions behave likewise. Before adding shared publisher or subject tables, sample the populated library for frequent variants and confirm whether users need account-wide rename/merge, dedicated pages, or merely suggestions. If reconciliation is built, preview affected books, protect manual edits and make mappings reversible. The current genre identity table should not silently become a subject table.

Recommended implementation order: A8 (correct review and reset), A6 (search and bounded reindex), A7 (source fidelity), then decide A9 from real data. Run the same imported value → manual correction → rescan → search/filter → reset scenario for publisher and multi-subject books in the developer NC34 instance, followed by the exact-package NC33–35 matrix. No result for that scenario is claimed here.

### Alpha.15–16 implementation

- A6: General search unions exact-title matches with gram, identifier and author matches. Publisher joins the search document; a versioned, bounded background/CLI rebuild updates existing derived grams without re-extracting files. Alpha.16 appends publisher grams to intact existing search rows to reduce the one-time rebuild cost.
- A7: New scanner candidates retain bounded `subjectsOriginal` and `classificationsOriginal` provenance when the source differs from the normalized list. The detail page exposes that original representation.
- A8: The detail page compares parsed subject/classification lists. New scanner candidates include explicit empty values, so per-field and all-field reset can clear a manually added value after a new scan.
- A9: Account-wide publisher/subject spelling mappings provide a preview, grouped suggestions/filters/search and immediate reversal by removal. The book's source values remain intact; [the workflow](metadata-value-mappings.md) deliberately leaves publisher/subject identity tables for a later evidence-based decision.

Alpha.16 static syntax and frontend build checks passed, and the signed developer package upgraded on NC34. Browser behavior, populated-library index-backfill duration and the exact NC33–35 package matrix have not yet been checked.

## Repeatable review rule

For any new metadata field or editor, record: (1) source and confidence, (2) canonical store and authority, (3) all editor controls, (4) validation and revision behavior, (5) rescan and export behavior, and (6) exact catalogue search/filter behavior. Include a value with commas or punctuation, an empty value, an imported value, and a manual correction. A control must never report a save for a value that its server silently discards.
