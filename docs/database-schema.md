# Database schema reference

Snapshot: **0.3 development source tree**, 2026-10-24. Covers 41 app-owned tables through `Version000300Date20261024110000`. The latest forward migration adds indexed catalogue sort orders and a backfilled `format_sort` value; earlier migrations added reading-status ordering, per-shelf worklist indexes and a reversible deletion marker. Earlier physical-schema comparisons passed on Nextcloud 33.0.9, 34.0.4 and 35.0.0 with SQLite, MariaDB and PostgreSQL; an alpha.9-to-candidate upgrade passed on NC34 with all three engines. The new migrations still need exact-package multi-version and physical-schema checks.

## Schema ownership

`lib/Migration/Version*.php` is authoritative for installation and upgrades. `appinfo/database.xml` is the maintained schema reference. Editing the XML does not alter an installed database. Runtime schema changes require a new migration; historical migrations must remain available for older installations.

The alpha.28 replay verifies the change journal and full-scan checkpoint fields. The alpha.27 replay also verifies integer `library_scan_jobs.cached_warning_skips` (default 0, non-null) and all table field sets. The alpha.26 replay verifies the new nullable string(64) `library_items.scanner_index_hash` column and all table field sets. The earlier maintenance pass compared complete field types and index definitions.

The earlier alpha.28 maintenance pass replayed all 47 migration schema methods against an empty in-memory Doctrine schema on developer NC34. The current executable check, `scripts/check-physical-schema.php`, inspects installed physical tables and compares columns, types, lengths, nullability, defaults, index order and uniqueness with the XML. Run it inside each disposable installation. SQLite identity/unsigned and PostgreSQL unsigned/quoted-identifier representations are normalized; other differences fail.

The XML uses `*dbprefix*`; migrations use unprefixed logical names and Nextcloud supplies the configured prefix. Six early migrations leave the primary-key name to Doctrine, which normalizes it to `primary`; their descriptive XML primary-key names are logical reference names. Compare those keys by columns and uniqueness. Prefix lengths used for database-specific indexes remain defined in migrations. The official XSD does not allow `<length>` inside index fields, so the XML omits the two 191-character prefix lengths for cached paths and creators; it retains the indexed columns and order.

The [Nextcloud database XSD](https://apps.nextcloud.com/schema/apps/database.xsd) accepts both legacy `integer` with length 8 and explicit `bigint`. The reference now uses explicit `bigint` for 64-bit fields and `string` for bounded cover revision/cache-owner values. These are declaration cleanups. The updated XML was validated against that XSD.

## Table inventory

| Table | Fields | Indexes | Purpose |
| --- | ---: | ---: | --- |
| `library_authors` | 13 | 3 | Per-user identities, conservative comparison keys, preferred/sort names and provenance. |
| `library_item_authors` | 9 | 3 | Ordered author relationships and original credits; unique user/item/position. |
| `library_author_operations` | 9 | 2 | Account-private before/after journal, bounded payload, small history summaries and conditional undo. |
| `library_author_tasks` | 13 | 3 | Account-private queued merge/undo state, worker claim, preview checkpoint and completion result. |
| `library_author_state` | 2 | 1 | Per-user transaction coordination for identity reuse. |
| `library_series` | 7 | 3 | Per-user preferred series names, descriptions and merge redirects. |
| `library_item_series` | 9 | 2 | Book-to-series slots with source name, part number and assignment provenance. |
| `library_series_state` | 2 | 1 | Per-user series backfill and edit coordination. |
| `library_series_operations` | 9 | 2 | Account-private move/merge snapshots and conditional Undo history. |
| `library_genres` | 4 | 3 | Account-owned curated genre names and comparison keys. |
| `library_item_genres` | 5 | 2 | Book-to-genre assignments, including inactive manually removed links. |
| `library_genre_candidates` | 5 | 2 | Per-book source, subject and folder suggestion evidence. |
| `library_genre_mappings` | 3 | 2 | Account-wide accepted or ignored suggestion decisions. |
| `library_language_candidates` | 5 | 2 | Per-book unresolved source-language evidence and application status. |
| `library_language_mappings` | 3 | 1 | Account-wide language mapping or ignore decisions. |
| `library_value_mappings` | 6 | 2 | Reversible account-wide publisher and subject spelling groups; publication metadata stays unchanged. |
| `library_roots` | 8 | 3 | User-selected source folders and scan configuration. |
| `library_files` | 17 | 10 | Nextcloud file identity, observed paths/revisions, scan diagnostics and shelf/date/type worklist ordering. |
| `library_items` | 48 | 31 | Catalogue metadata, ordered authors, series migration status, genre/language discovery markers, search-index version, provenance, field protection, review flags, reversible deletion mark and cover revision. |
| `library_scan_jobs` | 24 | 2 | Scan history, counters, heartbeat and current progress. |
| `library_saved_collections` | 6 | 3 | Named saved filter definitions. |
| `library_item_identifiers` | 11 | 3 | Normalized ISBN, ISSN, ASIN and GGKEY values and identifier provenance. |
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

`library_items.genres_json` was a nullable legacy column created before the Subject model. `Version000300Date20261015120000` copies any remaining non-null value into an empty `subjects_json` field, then removes the old column if present. This handles both older installations that retained it and installations where it was already absent. Current single-value genre metadata uses `genre`; subjects use `subjects_json`.

`Version000300Date20261018010000` adds nullable text `library_items.protected_fields_json` without backfilling rows. A JSON array lists fields protected by new manual corrections, while NULL on a previously edited row preserves whole-item rescan protection. No existing correction is inferred or rewritten during the schema upgrade. See [metadata storage](metadata-storage.md) for the rescan contract.

`Version000300Date20261018020000` adds `library_items.genre_suggestion_hash` and four private genre tables without rewriting older books. A bounded job discovers evidence for existing rows. Curated genre assignments are separate from the imported `genre` string and `subjects_json`; see [genre management](v0.3-genre-management.md).

`Version000300Date20261018030000` adds `library_items.language_review_hash` and two private language-review tables without rewriting older books. Bounded discovery normalizes clear older values and records ambiguous source values for review. See [language review](v0.3-language-review.md).

`Version000300Date20261018040000` adds nullable `library_items.search_index_version` and account-owned `library_value_mappings`. A bounded job or `occ library:search:rebuild` adds publisher grams to intact older indexes, rebuilding an item fully when its scanner fingerprint is missing. It does not open books or change scanner metadata. Publisher/subject mappings affect browsing, exact filters and suggestions through existing values; deleting a mapping restores separate results. See [value mappings](metadata-value-mappings.md).

`Version000300Date20261021170000` adds nullable `library_items.marked_for_deletion_at` and an account/marker/ID index. NULL means visible; a timestamp means the account owner marked the Library row for deletion. Import updates preserve the value. Ordinary catalogue queries exclude marked rows; the To delete review filter includes only marked rows. Direct Details and reading-list references remain available. This column never authorizes or schedules source-file deletion.

`authors_json` stores ordered author names while `creators` remains the compatible display value. `series_name`, `series_number` and `genre` are separate from the older `publication` grouping field. Beta.2 imports EPUB/OPF series names and positions into the existing series columns; it requires no new schema migration. Beta.3 uses those same columns for duplicate matching and also requires no schema change. `cover_revision` invalidates browser covers without loading embedded cover blobs into catalogue responses.

## Storage outside the schema

- Source publications and existing OPF sidecars remain in Nextcloud Files.
- Thumbnail bytes are private Nextcloud appdata; `library_thumbnail_users` only records owners for cleanup.
- Saved guided rules, advanced patterns and folder assignments use user app preferences.
- Administrator thumbnail budgets/retention use app configuration.
- System tags and file comments use Nextcloud APIs and core storage.

Expiry and deletion behavior is documented in [metadata storage](metadata-storage.md), [duplicate review](duplicate-review.md), [automatic scans](automatic-scans.md) and the [user guide](user-guide.md). Current performance and verification limits are in the [alpha.24 report](performance/2026-09-27-alpha24/README.md).

## Series assignments (0.3.0-alpha.9)

`library_series.merged_into` redirects a retired series identity to the active destination on future imports. `library_item_series.assignment_source` defaults to `import` for existing rows; reviewed moves and merges set it to `manual`. `library_items.series_sync_status=3` marks a changed imported series on a manually assigned book for review. The source name and part fields stay in `library_items`, and the linked identity controls preferred catalogue grouping.

`library_series_operations` stores an account-scoped before/after snapshot, 32-character operation ID, summaries and Undo state. The application caps each transaction at 500 books and 8 MiB of journal payload. Preview tokens guard the source and destination series, book set and link revisions. Conditional Undo restores original assignment provenance and refuses to overwrite later changes. Account deletion removes the journal. See the [series management guide](v0.3-series-management.md).

## Author storage transition (0.3.0-alpha.1)

`library_items.author_sync_status` is an indexed small integer: 0 = synced shadow relationships, 1 = pending, 2 = protected-assignment conflict, 3 = failed. Existing and new rows default to pending. Author-changing writes requeue the row atomically; bounded cron batches reconcile current metadata under an item lock. Per-user coordination serializes identity reuse, while non-unique comparison keys allow homonyms. No full-library backfill runs during the schema upgrade.

The old arrays remain authoritative until the later read-integration slice explicitly switches over. See the [author implementation concept and operator commands](v0.3-author-management.md#storage-slice--030-alpha1). Fresh and populated-upgrade checks and full-library backfill measurements are recorded in the [0.3-alpha.1 report](compatibility-evidence/2026-10-13-author-management-alpha1/README.md). The earlier complete Doctrine-to-XML replay above applies only to the older schema; the XML contract now includes all author fields and indexes.

### Assignment and display additions (0.3.0-alpha.2)

`merged_into` is a nullable bigint redirect to the surviving identity, scoped and checked in the service. Existing identities and ordered relationships survive upgrade unchanged. `library_author_operations` stores a random 32-character operation ID, user, Unix creation time in seconds, undo flag, source/target name summaries, book count, merge flag and a text payload sized for up to 16 MiB; application writes cap it at 8 MiB. The user/time/ID index serves the recent-history view without fetching payloads. No history expiry is applied yet. Account cleanup deletes the journal with the other author tables.

Preferred display fields are calculated for bounded read results; no new denormalized item columns are added. Source fields remain the input for metadata editing and exports. The previous alpha.1 transition description remains historical; see the current [assignment slice](v0.3-author-management.md#assignment-slice--030-alpha2).

## Author profiles (0.3-alpha.3)

`Version000300Date20261013210000` adds nullable `biography` text and `photo_key` string(36) to author identities. The API limits biography to 10,000 characters. A photo key references a private account-scoped app-data JPEG, never an external URL. Uploads are re-encoded to a square of at most 320 pixels and 100 KiB; originals are discarded. Names, biography and photo reference share the author revision guard. Replacement/removal deletes the previous portrait; account deletion removes the account portrait folder. Database rollback compensates newly stored portraits. Database and app-data storage are not a distributed transaction: an interrupted process can leave an unreferenced private file.

Photo and biography are optional manual profile attributes. Merge retains the destination profile; the retired source profile remains available for conditional undo. Profile edits also participate in author-operation snapshot checks. No ebook metadata is rewritten by editing these attributes.

## Reviewed author source checkpoint

`Version000300Date20261013230000` adds nullable string(64) `library_items.author_source_hash`. It stores the SHA-256 hash of the ordered, normalized source credit array only after explicit conflict resolution. Existing and ordinarily imported books retain NULL; they need no backfill and preserve automatic import behavior.

A reviewed book with the same incoming credit hash stays synchronized without changing its chosen relationships. A different hash returns it to conflict, including when the chosen relationship set is empty. This field is a comparison checkpoint, not an author identity or duplicate-detection key. The queue uses the existing `(user_id, author_sync_status, id)` index and a 51-row pagination probe. Resolution locks the item, then the account coordination row, rechecks its preview fingerprint and commits relationships/status/checkpoint together.

## Author directory ordering (alpha.30)

`Version000300Date20261020120000` adds `library_authors_display` on `(user_id, merged_into, display_name, id)`. Active authors use this index for displayed-name ordering in either direction. The existing surname index remains. Preview queries read at most three distinct item IDs per displayed author using `library_author_books`, then join owned items/files in one batch. No identities or book metadata are rewritten. Rollback to alpha.29 can leave this additive index in place.
