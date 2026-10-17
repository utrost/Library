# Pre-release architecture and data model review

Reviewed 2026-10-15 at `4a4079f` (`0.3.0-alpha.9`). This is a source and documentation review, not a new runtime or compatibility test. The release gate in `docs/roadmap.md` still calls for a signed fresh-install and upgrade matrix on Nextcloud 33–35.

Implementation update: findings 1–3 have fixes in the current working tree. Ownership is checked before metadata writes, identifier joins are owner-scoped, browser edits carry a metadata snapshot revision, and deletion uses one transaction with shared dependent-row cleanup. File insertion, cross-root moves and item creation lock and verify the root, so an in-flight scan cannot recreate a deleted root's rows; unchanged-file scans retain their fast path. Deletion invalidates duplicate scan snapshots while preserving reviewed decisions and reading-list placeholders. A bounded maintenance pass repairs old orphan identifier/facet/search rows. Focused NC34 disposable acceptance now covers isolation, stale edits, rollback and deletion; the remaining browser and populated-instance checks are tracked in the [pre-release architecture plan](pre-release-architecture-plan.md).

## Assessment

The core boundary is sound: Nextcloud Files owns the publications, while Library stores a per-user index, extracted metadata, corrections, reading lists, and derived search data. Stable file IDs, source provenance, additive migrations, background backfills, and revision-checked author/series operations are good foundations. The issues below should be settled before the first App Store release because user data and cross-account isolation become harder to repair later.

## Release blockers

### 1. Metadata update permits cross-account identifier contamination (P0)

`ItemController::update()` passes any requested item ID to `ItemService::updateItem()` and reports success without checking ownership (`lib/Controller/ItemController.php:97-170`). `updateItem()` can find no item and update zero rows, but still calls `syncItemIdentifiers()` (`lib/Service/ItemService.php:429-495`). That method inserts rows with the caller's user ID and the supplied item ID, without checking for a parent item (`lib/Service/ItemService.php:3134-3160`). Identifier search joins by item ID alone (`lib/Service/ItemService.php:1875-1889`, `:2659-2669`), and `itemIdentifiers()` also reads by item ID alone (`:3182-3205`). A caller can therefore attach their identifier to another account's book ID and affect that account's search or details. This is a source-path conclusion; no exploit request was sent.

**Fix:** fail with 404 before any write when `(user_id, item_id)` is absent; require a positive affected-row count; scope every identifier read and join by user ID as well as item ID; remove existing orphan/mismatched rows. Add a two-user regression case including search and detail responses.

### 2. Book edits can partially commit and silently overwrite newer edits (P1)

`ItemService::updateItem()` updates the item, review flags, facets, identifiers, duplicate state, and search grams in separate statements without a transaction (`lib/Service/ItemService.php:429-495`, `:2991-3010`). `updateSingleMetadataField()` does the same for batch edits (`:820-849`). Failure after the item update can leave filters and search inconsistent. The full-details form submits the whole draft without an item revision or conditional update (`src/components/FullDetails.vue:129-155`), so two tabs or a concurrent writer can silently replace newer metadata.

**Fix:** make each publication edit one transaction, lock the owned item row, and update all derived rows inside it. Add a monotonic metadata revision to the details response and require it on save; return a conflict with both values on a stale draft. Define whether scanner changes to untouched fields may merge with a pending user draft.

### 3. Book/root removal leaves dependent rows and root deletion is not atomic (P1)

`RootService::deleteRoot()` deletes every item one at a time, then files and root, without a transaction; it prunes author links and duplicates but not item identifiers, facets, or search grams (`lib/Service/RootService.php:106-149`). `forgetMissingItem()` and `deleteItemForLibraryFile()` also omit identifier cleanup (`lib/Service/ItemService.php:294-355`). The schema has no foreign keys for these dependent rows (`appinfo/database.xml`). Reading-list entries intentionally keep an unavailable-book placeholder, so they need a documented tombstone rule rather than blanket deletion (`lib/Service/PersonalListService.php:95-116`, `:263-283`).

**Fix:** centralize item deletion and dependent-row cleanup, make root deletion resumable in bounded batches or atomic where feasible, and distinguish intentional list tombstones from unintended orphan indexes. Audit existing installations for orphan identifiers/facets/grams, then repair them in an additive migration or bounded repair job.

## Architecture decisions to close before release

### 4. State which copy of author and series data is authoritative (P1)

The item still holds `creators`/`authors_json` and `series_name`/`series_number`; normalized author and series tables hold identities and assignments. The author storage class calls its relationships a shadow and reports `authoritative: false` (`lib/Service/AuthorStorageService.php:8`, `:226-233`), while catalogue decoration shows canonical author names for synced or conflict rows (`lib/Service/AuthorDisplayService.php:12-34`). Series decoration similarly shows normalized assignments for synced rows (`lib/Service/SeriesDisplayService.php:12-30`). This can be a valid transition, but the current contract is implicit.

**Decision:** document an authority matrix for each read, search, sort, edit, import, export, conflict and backfill state. Either complete the normalized read/write switchover for 0.3 or explicitly label the model as source metadata plus curated overlay and guarantee that overlay survives future imports and releases. Do not remove the legacy columns until a later proven migration.

### 5. Define portability for curated entities (P1)

Corrected-metadata export selects only edited/starred/workflow/opened `library_items` and serializes those item rows (`lib/Service/ItemService.php:1378-1413`). Author profile edits, portraits, merges, series descriptions and assignments live in separate tables/appdata (`lib/Service/AuthorDirectoryService.php:70-128`; `lib/Service/SeriesDirectoryService.php:33-52`) and are not represented by that export. The roadmap already says full restore needs a database backup (`docs/roadmap.md:534`, `:573`). Before release, decide whether the first supported recovery contract is a tested database-plus-appdata backup or a versioned full Library export/import. Make the UI and documentation say exactly what the current export does and does not preserve.

### 6. Declare the supported database set and check schema portability (P1)

`appinfo/info.xml` declares no database restrictions. Nextcloud's [database guidance](https://docs.nextcloud.com/server/stable/developer_manual/basics/storage/database.html#supporting-more-databases) says this means Oracle is included in schema checks, with 27-character table and 30-character index-name limits. Five declared table names and seven index names exceed those Oracle limits in `appinfo/database.xml`. Pick the database engines actually supported, declare them in `info.xml`, and run a fresh-install/upgrade check on each claimed engine. If Oracle is intended, shorten names through new migrations; do not alter migrations already released. Nextcloud's [migration guidance](https://docs.nextcloud.com/server/stable/developer_manual/basics/storage/migrations.html) says migration files must remain usable for future installs and upgrades.

## Scale and maintainability

### 7. Bound the incremental change journal (P2; raise to P1 for large-library launch)

Every supported file event queries enabled roots and coalesces a row (`lib/Service/ScanChangeJournal.php:17-59`). `snapshot()` loads every pending row for a user (`:62-69`); `LibraryScanner::scanIncremental()` builds all targets and checks each against retained parent paths (`lib/Service/LibraryScanner.php:46-120`); `acknowledge()` performs one delete per row (`lib/Service/ScanChangeJournal.php:72-77`). A bulk import can produce a very large in-memory snapshot and quadratic parent-coverage work. Process bounded pages by generation/cursor, coalesce parent paths efficiently, and acknowledge in bounded batches. Measure a bulk import and concurrent edits against the populated development instance before choosing limits.

### 8. Keep one executable schema contract and a clear module boundary (P2)

`appinfo/database.xml` lists the intended 33 tables. The fresh-install smoke checks table presence and migration count, but not full field/index/type parity (`scripts/smoke-fresh-install-mixed.sh:111-124`); Python contract tests compare the XML to hard-coded expectations rather than a migrated database (`tests/test_database_xml_contract.py:168-220`). A migrated-schema comparison would catch drift before release. `ItemService.php` and `src/App.vue` are each several thousand lines and mix catalogue projection, editing, indexing, import/export, and UI orchestration. Extracting bounded services/components around these contracts will make future migrations and features safer; file size alone is not a release blocker.

## Release gate proposed from this review

1. Fix the account-isolation defect and repair existing invalid identifier rows.
2. Make metadata edits atomic and revision-aware; repair dependent-row deletion.
3. Record the authority and backup/restore contracts for normalized entities.
4. Declare database support and check actual migrated schema parity.
5. Run the already planned signed fresh-install and upgrade matrix on Nextcloud 33, 34 and 35, including two-user isolation, edit conflicts, root removal, backup/restore, and a high-volume change journal.

No tests, database writes, deployment, or packaging were performed for this review.
