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
    assert "library_facets_exact" in schema
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

    assert "refreshItemFacetIndex(" in insert
    assert "$userId," in insert and "$itemId," in insert
    assert "refreshItemFacetIndex(" in update
    assert "$userId," in update and "$itemId," in update
    assert scan.count("refreshItemFacetIndex(") >= 2
    assert "delete('library_item_facets')" in service
    assert "insert('library_item_facets')" in service


def test_explicit_bounded_rebuild_exists_without_migration_backfill():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    migration = (ROOT / "lib" / "Migration" / "Version000100Date20260914120000.php").read_text()
    command = (ROOT / "lib" / "Command" / "RebuildFacetIndex.php").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()

    assert "public function rebuildFacetIndex(string $userId" in service
    assert "setMaxResults($limit)" in service
    assert "subjects_json" in service and "classifications_json" in service
    assert "library_items" not in migration
    assert "library:facets:rebuild" in command
    assert "rebuildFacetIndex" in command
    assert "OCA\\Library\\Command\\RebuildFacetIndex" in info


def test_facet_search_keys_include_canonical_and_normalized_token_starts():
    generator = (ROOT / "lib" / "Service" / "FacetSearchKeyGenerator.php").read_text()

    assert "mb_strtolower(mb_substr(trim($value), 0, 255))" in generator
    assert "preg_split('/[^\\p{L}\\p{N}]+/u', $canonical" in generator
    assert "anton, uwe" in generator and "uwe" in generator
    assert "aavaa-verlag" in generator and "verlag" in generator


def test_facet_search_keys_are_case_insensitive_bounded_and_deduplicated():
    generator = (ROOT / "lib" / "Service" / "FacetSearchKeyGenerator.php").read_text()

    assert "private const MAX_SEARCH_KEYS = 16" in generator
    assert "$keys[$canonical] = true" in generator
    assert "$keys[$segment] = true" in generator
    assert "count($keys) >= self::MAX_SEARCH_KEYS" in generator
    assert "return array_keys($keys)" in generator


def test_facet_rows_keep_full_value_while_suggestions_deduplicate_by_canonical_value():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    refresh = service.split("public function refreshItemFacetIndex", 1)[1].split(
        "private function deleteItemFacetIndex", 1
    )[0]
    suggestion = service.split("private function unfilteredIndexedSuggestionValues", 1)[1].split(
        "private function suggestionFiltersAreEmpty", 1
    )[0]

    assert "FacetSearchKeyGenerator::forValue($facetValue)" in refresh
    assert "$scalarFacetTypes = array_fill_keys(array_keys($scalarFacets), true)" in refresh
    assert "? FacetSearchKeyGenerator::forValue($facetValue)" in refresh
    assert ": [mb_strtolower($facetValue)]" in refresh
    assert "'facet_value' => $qb->createNamedParameter($facetValue)" in refresh
    assert "'normalized_value' => $qb->createNamedParameter($searchKey)" in refresh
    assert "->groupBy('facet_suggestion.normalized_value', 'facet_suggestion.facet_value')" in suggestion
    assert "$values[$value] = true" in suggestion
    assert "return array_slice($values, 0, $limit)" in suggestion


def test_exact_facet_filter_compares_the_full_canonical_value_not_search_keys():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    method = service.split("private function indexedFacetFilter", 1)[1].split(
        "private function applyCatalogueSort", 1
    )[0]

    assert "LOWER(" not in method
    assert ".facet_value" in method
    assert ".normalized_value" not in method
    assert "mb_substr(trim($value), 0, 255)" in method
    assert "mb_strtolower" not in method


def test_exact_facet_filter_has_a_covering_tenant_value_item_index():
    schema = (ROOT / "appinfo" / "database.xml").read_text()
    migration = (ROOT / "lib" / "Migration" / "Version000100Date20260915180000.php").read_text()

    columns = ["user_id", "facet_type", "facet_value", "item_id"]
    exact = schema.split("<index><name>library_facets_exact</name>", 1)[1].split("</index>", 1)[0]
    assert [exact.index(f"<name>{column}</name>") for column in columns] == sorted(
        exact.index(f"<name>{column}</name>") for column in columns
    )
    assert "['user_id', 'facet_type', 'facet_value', 'item_id']" in migration
