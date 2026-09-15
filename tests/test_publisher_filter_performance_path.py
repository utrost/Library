from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260915150000.php"
SMOKE = ROOT / "scripts" / "smoke-catalogue-performance.mjs"


def test_exact_publisher_filter_has_a_dedicated_user_scoped_lookup_index():
    assert MIGRATION.exists(), "exact publisher filtering needs a post-alpha.169 index migration"
    source = MIGRATION.read_text()

    assert "hasTable('library_items')" in source
    assert "hasIndex('library_items_usr_publisher')" in source
    assert "addIndex(['user_id', 'publisher'], 'library_items_usr_publisher')" in source
    assert "createFunction('LOWER(publisher)')" not in source
    assert "executeQuery" not in source, "schema migration must not scan or backfill catalogue rows"


def test_publisher_filter_remains_an_exact_sargable_predicate():
    source = SERVICE.read_text()
    filters = source.split("private function applyCatalogueFilters", 1)[1].split(
        "private function applySmartCollectionFilters", 1
    )[0]

    assert "$qb->expr()->eq('i.publisher', $qb->createNamedParameter($publisher))" in filters
    assert "$qb->expr()->like('i.publisher'" not in filters
    assert "LOWER(i.publisher)" not in filters


def test_performance_smoke_measures_the_exact_publisher_deferred_path():
    source = SMOKE.read_text()

    assert "LIBRARY_CATALOGUE_PUBLISHER" in source
    assert "searchParams.set('publisher', publisher)" in source
    assert "catalogue_publisher_exact_fast" in source
    assert "publisher exact value is required" in source
