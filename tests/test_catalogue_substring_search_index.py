from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATABASE = ROOT / "appinfo" / "database.xml"
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260916160000.php"
SMOKE = ROOT / "scripts" / "smoke-catalogue-performance.mjs"
RELEASE_SMOKE = ROOT / "scripts" / "smoke-release-package.sh"


def test_database_declares_catalogue_substring_search_gram_table():
    schema = DATABASE.read_text()

    assert "*dbprefix*library_item_search_grams" in schema
    table = schema.split("<name>*dbprefix*library_item_search_grams</name>", 1)[1].split("</table>", 1)[0]
    for field in ["id", "user_id", "item_id", "gram"]:
        assert f"<name>{field}</name>" in table
    lookup = table.split("<name>library_search_grams_lookup</name>", 1)[1].split("</index>", 1)[0]
    assert "<name>user_id</name>" in lookup
    assert "<name>gram</name>" in lookup
    assert "<name>item_id</name>" in lookup
    unique = table.split("<name>library_search_grams_item_unique</name>", 1)[1].split("</index>", 1)[0]
    assert "<unique>true</unique>" in unique
    assert "<name>item_id</name>" in unique
    assert "<name>gram</name>" in unique


def test_migration_creates_search_gram_table_and_backfills_it():
    migration = MIGRATION.read_text()
    release_smoke = RELEASE_SMOKE.read_text()

    assert "createTable('library_item_search_grams')" in migration
    assert "library_search_grams_lookup" in migration
    assert "library_search_grams_item_unique" in migration
    assert "postSchemaChange" in migration
    assert "backfillSearchGrams" in migration
    assert "searchGramsForRow" in migration
    assert "Version000100Date20260916160000.php" in release_smoke


def test_q_filter_uses_search_gram_candidates_not_broad_lower_like_scan():
    service = SERVICE.read_text()
    filters = service.split("private function applyCatalogueFilters", 1)[1].split("private function applySmartCollectionFilters", 1)[0]

    assert "$searchGrams = $this->searchGramsForQuery($query)" in filters
    assert "$this->searchGramCandidateIds($userId, $searchGrams)" in filters
    assert "$qb->expr()->in('i.id', $qb->createNamedParameter($searchGramItemIds" in filters
    assert "LOWER(i.description)" not in filters
    assert "LOWER(f.cached_path)" not in filters
    assert "%' . $this->escapeLikeParameter($query) . '%" not in filters
    assert "IdentifierService::normalizeSearchQuery($query)" in filters


def test_item_writes_refresh_substring_search_index():
    service = SERVICE.read_text()

    assert "private function refreshItemSearchIndex(string $userId, int $itemId): void" in service
    assert "private function searchDocumentForRow(array $row): string" in service
    assert "private function searchGramsForText(string $text): array" in service
    assert "$this->refreshItemSearchIndex($userId, $itemId);" in service
    assert "delete('library_item_search_grams')" in service
    assert "insert('library_item_search_grams')" in service


def test_performance_smoke_covers_representative_substring_query():
    smoke = SMOKE.read_text()

    assert "catalogue_filter_q_substring_fast" in smoke
    assert "labor" in smoke
    assert "qSubstring" in smoke
