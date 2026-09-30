# Database schema reference

Snapshot: **0.2.0-alpha.28**, 2026-09-28. Covers 25 app-owned tables through `Version000200Date20260928090000`.

## Schema ownership

`lib/Migration/Version*.php` is authoritative for installation and upgrades. `appinfo/database.xml` is the maintained schema reference. Editing the XML does not alter an installed database. Runtime schema changes require a new migration; historical migrations must remain available for older installations.

The alpha.28 replay verifies the change journal and full-scan checkpoint fields. The alpha.27 replay also verifies integer `library_scan_jobs.cached_warning_skips` (default 0, non-null) and all table field sets. The alpha.26 replay verifies the new nullable string(64) `library_items.scanner_index_hash` column and all table field sets. The earlier maintenance pass compared complete field types and index definitions.

This maintenance pass replayed all 47 migration schema methods against an empty in-memory Doctrine schema on developer NC34. It did not invoke data backfills or execute schema changes against the live database. Table/field definitions, ordered index columns and uniqueness were compared with the XML.

The XML uses `*dbprefix*`; migrations use unprefixed logical names and Nextcloud supplies the configured prefix. Six early migrations leave the primary-key name to Doctrine, which normalizes it to `primary`; their descriptive XML primary-key names are logical reference names. Compare those keys by columns and uniqueness. Prefix lengths used for database-specific indexes remain defined in migrations. The official XSD does not allow `<length>` inside index fields, so the XML omits the two 191-character prefix lengths for cached paths and creators; it retains the indexed columns and order.

The [Nextcloud database XSD](https://apps.nextcloud.com/schema/apps/database.xsd) accepts both legacy `integer` with length 8 and explicit `bigint`. The reference now uses explicit `bigint` for 64-bit fields and `string` for bounded cover revision/cache-owner values. These are declaration cleanups. The updated XML was validated against that XSD.

## Table inventory

| Table | Fields | Indexes | Purpose |
| --- | ---: | ---: | --- |
| `library_roots` | 8 | 3 | User-selected source folders and scan configuration. |
| `library_files` | 17 | 8 | Nextcloud file identity, observed paths/revisions and scan diagnostics. |
| `library_items` | 41 | 23 | Catalogue metadata, ordered authors, provenance, review flags and cover revision. |
| `library_scan_jobs` | 24 | 2 | Scan history, counters, heartbeat and current progress. |
| `library_saved_collections` | 6 | 3 | Named saved filter definitions. |
| `library_item_identifiers` | 11 | 3 | Normalized ISBN/ISSN values and identifier provenance. |
| `library_item_facets` | 6 | 4 | Indexed creators, subjects, classifications and tag/filter values. |
| `library_item_search_grams` | 4 | 3 | Materialized substring-search keys. |
| `library_lists` | 7 | 2 | Private list owners, names, descriptions and revision tokens. |
| `library_list_entries` | 7 | 3 | List membership, source file IDs, order and private book notes. |
| `library_inference_batches` | 6 | 3 | Prepared/applied review snapshots and conditional Undo history. |
| `library_infer_jobs` | 12 | 3 | Frozen whole-folder rule definitions, scope, progress and expiry. |
| `library_infer_results` | 5 | 3 | Saved per-book extraction proposals and review status. |
| `library_dup_jobs` | 6 | 3 | Manual duplicate scan scope, state and expiry. |
| `library_dup_books` | 4 | 2 | Frozen metadata/content-hash records for a duplicate scan. |
| `library_dup_keys` | 4 | 2 | Candidate grouping keys for manual comparisons. |
| `library_dup_pairs` | 6 | 4 | Comparison evidence, signatures and saved review status. |
| `library_dup_choices` | 5 | 2 | User review choices reused across scans. |
| `library_dup_state` | 7 | 1 | Optional browsing-index enablement and build cursor. |
| `library_dup_index` | 3 | 1 | Indexed per-book duplicate metadata. |
| `library_dup_terms` | 3 | 2 | Candidate terms for bounded browsing lookups. |
| `library_dup_hints` | 6 | 2 | Pair hints and decisions for catalogue/detail suggestions. |
| `library_scan_schedule` | 7 | 2 | Automatic scan interval, full checkpoint, scanner/root revisions and last job. |
| `library_scan_changes` | 5 | 1 | Coalesced owner-scoped file and directory events with generations. |
| `library_thumbnail_users` | 1 | 1 | Thumbnail-cache owners, retained after root removal. |

## Compatibility and retained columns

`library_items.genres_json` is a nullable legacy column created before the Subject model. The subject migration copies its contents to `subjects_json` when that field is empty; it does not drop the old column. The XML therefore retains it. Current dedicated single-value genre metadata uses `genre`; `genres_json` is not its backing field.

`authors_json` stores ordered author names while `creators` remains the compatible display value. `series_name`, `series_number` and `genre` are separate from the older `publication` grouping field. `cover_revision` invalidates browser covers without loading embedded cover blobs into catalogue responses.

## Storage outside the schema

- Source publications and existing OPF sidecars remain in Nextcloud Files.
- Thumbnail bytes are private Nextcloud appdata; `library_thumbnail_users` only records owners for cleanup.
- Saved guided rules, advanced patterns and folder assignments use user app preferences.
- Administrator thumbnail budgets/retention use app configuration.
- System tags and file comments use Nextcloud APIs and core storage.

Expiry and deletion behavior is documented in [metadata storage](metadata-storage.md), [duplicate review](duplicate-review.md), [automatic scans](automatic-scans.md) and the [user guide](user-guide.md). Current performance and verification limits are in the [alpha.24 report](performance/2026-09-27-alpha24/README.md).
