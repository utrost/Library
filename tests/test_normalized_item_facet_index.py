from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_normalized_facet_table_has_lookup_and_uniqueness_indexes():
    schema = (ROOT / "appinfo" / "database.xml").read_text()
    migrations = "\n".join(p.read_text() for p in (ROOT / "lib" / "Migration").glob("Version*.php"))

    assert "*dbprefix*library_item_facets" in schema
    for column in ("user_id", "item_id", "facet_type", "facet_value", "normalized_value"):
        assert f"<name>{column}</name>" in schema
        assert f"'{column}'" in migrations
    assert "library_facets_lookup" in schema
    assert "library_facets_item_unique" in schema
    assert "createTable('library_item_facets')" in migrations


def test_indexed_facet_values_queries_the_index_without_catalogue_joins():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    method = service.split("private function indexedFacetValues", 1)[1].split(
        "private function publicationYearFacetValues", 1
    )[0]

    assert "catalogueFilteredQueryBuilder" not in method
    assert "$this->db->getQueryBuilder()" in method
    assert "->from('library_item_facets', 'facet')" in method
    assert "facet.user_id" in method
    assert "facet.facet_type" in method
    assert "->orderBy('facet_value', 'ASC')" in method
    assert "->setMaxResults(self::MULTI_VALUE_FACET_LIMIT)" in method


def test_facet_index_is_refreshed_on_all_multi_value_metadata_writes():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    insert = service.split("public function ensureItemForFile", 1)[1].split("public function deleteItemForLibraryFile", 1)[0]
    update = service.split("public function updateItem", 1)[1].split("private function validateEditableMetadata", 1)[0]
    scan = service.split("private function refreshInferredItem", 1)[1].split("private function syncItemIdentifiers", 1)[0]

    assert "refreshItemFacetIndex($userId, $itemId" in insert
    assert "refreshItemFacetIndex(" in update
    assert "$userId," in update and "$itemId," in update
    assert "refreshItemFacetIndex($userId, $itemId" in scan
    assert "delete('library_item_facets')" in service
    assert "insert('library_item_facets')" in service


def test_explicit_bounded_rebuild_exists_without_migration_backfill():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    migration = max((ROOT / "lib" / "Migration").glob("Version*.php")).read_text()
    command = (ROOT / "lib" / "Command" / "RebuildFacetIndex.php").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()

    assert "public function rebuildFacetIndex(string $userId" in service
    assert "setMaxResults($limit)" in service
    assert "subjects_json" in service and "classifications_json" in service
    assert "library_items" not in migration
    assert "library:facets:rebuild" in command
    assert "rebuildFacetIndex" in command
    assert "OCA\\Library\\Command\\RebuildFacetIndex" in info
