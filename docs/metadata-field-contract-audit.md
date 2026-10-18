# Metadata field contract audit

Status: code review on 2026-10-17, with local fixes on 2026-10-18. This is a source-level audit, not a browser or database verification run. Review each field as a path from extraction or user entry, through storage and editing, to catalogue display and discovery. File-level tags, comments, cover overrides, and list notes are separate contracts.

## Field matrix

| Field | Extraction and storage | Edit and save | Display and discovery | Result |
| --- | --- | --- | --- | --- |
| Title | EPUB/OPF, PDF, CBZ, filename; `library_items.title` | Full details and sidebar; revision-checked save | Card/detail title, text search, title sort | Aligned. |
| Subtitle | PDF Subject, CBZ issue context, filename patterns or manual entry; `subtitle` | Full details and bulk edit | Details and text search | Aligned, but source meaning is format-dependent. |
| Publication type | Source/inferred type; `publication_type` | Full details select and bulk edit | Detail header and type filter | Aligned. |
| Source creator credits | Repeated EPUB creators, PDF Author, CBZ roles, filename; `creators` and `authors_json` | Advanced source-credit editor; save queues author reconciliation | Source/export credit and text search; catalogue may display curated author | Intentional distinction from linked author identities. CBZ role names now split only on semicolons. |
| Linked authors | Account-private `library_authors` and `library_item_authors` | Author picker, assignment and merge workflows | Author profile, ID filter, and general search through preferred/sort names | Separate authority is documented in [metadata-authority.md](metadata-authority.md). Source credits remain searchable and sorting remains source-based. |
| Publication / periodical | EPUB/CBZ series and filename issue patterns; `publication` | Full details and bulk edit | Legacy publication facet and text search | Still needed for periodicals and older imports. Sidebar label was corrected from “Series” to “Series / periodical” in this audit. |
| Series and part | EPUB/OPF and CBZ ComicInfo series metadata; `series_name`, `series_number`, plus linked series overlay | Full details, sidebar and reviewed series assignment | Linked series page and ID filter | CBZ Series/Number now fill the dedicated fields. Raw series name is not in global text search. |
| Genre | Path/manual proposals; scalar `genre` | Full details, sidebar and bulk edit | Details only | No dedicated genre filter or global text search. Decide whether this is a deliberate 0.3 limit before presenting genre as a discovery field. |
| Publication date | EPUB/OPF, PDF metadata, CBZ, filename; `publication_date` | Full details and sidebar; calendar-format validation | Details and year filter | Aligned for YYYY, YYYY-MM and YYYY-MM-DD. PDF file creation date is weaker evidence of publication date and should retain provenance. |
| Publisher | EPUB/OPF, CBZ; scalar `publisher` | Full details with suggestions; free text can create a new value | Exact publisher filter and suggestions | Aligned with current scalar model. No publisher identity/merge model yet. |
| Language | First EPUB/OPF language; scalar `language`, with editor allowing multiple codes joined by delimiters | Full details chip picker; save validates code format | Individual language links in sidebar; catalogue filter matches complete delimited tokens | Exact-token filtering is deployed in alpha.11; large-library query cost needs measurement. |
| Subjects | Repeated EPUB subjects; `subjects_json` and facet index | Full details chip picker and legacy editor; save rebuilds facets/search | Exact subject filter, suggestions and text search | Submitted chip boundaries and commas are preserved in alpha.11. |
| Classifications | Mainly manual/imported values; `classifications_json` and facet index | Full details line editor and legacy editor; bulk edit | Exact classification filter, suggestions and text search | Submitted chip boundaries and commas are preserved in alpha.11. |
| Description | EPUB/OPF or manual; `description` | Full details textarea | Details and text search | Aligned. |
| ISBN/ISSN | Explicitly labelled or constrained extracted values; `library_item_identifiers` | Full details and sidebar; checksum is recorded, but invalid values are not rejected | Detail rows and identifier search | Sidebar now offers only supported schemes. Full details hides a previous checksum result once that row is changed. |
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

## Repeatable review rule

For any new metadata field or editor, record: (1) source and confidence, (2) canonical store and authority, (3) all editor controls, (4) validation and revision behavior, (5) rescan and export behavior, and (6) exact catalogue search/filter behavior. Include a value with commas or punctuation, an empty value, an imported value, and a manual correction. A control must never report a save for a value that its server silently discards.
