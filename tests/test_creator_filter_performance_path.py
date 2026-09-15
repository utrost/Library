from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260915190000.php"


def test_exact_creator_filter_has_a_dedicated_user_scoped_lookup_index():
    assert MIGRATION.exists(), "exact creator filtering needs its own index migration"
    source = MIGRATION.read_text()

    assert "hasTable('library_items')" in source
    assert "hasIndex('library_items_usr_creator')" in source
    assert "addIndex(['user_id', 'creators'], 'library_items_usr_creator', [], ['lengths' => [null, 191]])" in source
    assert "createFunction('LOWER(creators)')" not in source
    assert "executeQuery" not in source, "schema migration must not scan or backfill catalogue rows"


def test_creator_filter_remains_an_exact_sargable_predicate():
    source = SERVICE.read_text()
    filters = source.split("private function applyCatalogueFilters", 1)[1].split(
        "private function applySmartCollectionFilters", 1
    )[0]
    creator_filter = filters.split("$creator =", 1)[1].split("$format =", 1)[0]

    assert "$qb->expr()->eq('i.creators', $qb->createNamedParameter($creator))" in creator_filter
    assert "$qb->expr()->like('i.creators'" not in creator_filter
    assert "LOWER(i.creators)" not in creator_filter
