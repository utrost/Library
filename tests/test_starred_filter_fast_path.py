from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATABASE = ROOT / "appinfo" / "database.xml"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260916152000.php"
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"


def test_database_declares_user_starred_title_index_for_catalogue_filter():
    database = DATABASE.read_text()

    assert "library_items_usr_star_title" in database
    index_block = database.split("<name>library_items_usr_star_title</name>", 1)[1].split("</index>", 1)[0]
    assert "<name>user_id</name>" in index_block
    assert "<name>starred</name>" in index_block
    assert "<name>title</name>" in index_block
    assert "<name>library_file_id</name>" in index_block


def test_starred_filter_remains_sargable_and_uses_plain_column_equality():
    service = SERVICE.read_text()
    filter_block = service.split("$starred = trim((string)($filters['starred'] ?? ''));", 1)[1].split("$this->applySmartCollectionFilters", 1)[0]

    assert "$qb->expr()->eq('i.starred', $qb->createNamedParameter(1))" in filter_block
    assert "LOWER(i.starred)" not in filter_block
    assert "like('i.starred'" not in filter_block


def test_starred_index_migration_is_idempotent_and_release_linted():
    migration = MIGRATION.read_text()
    release_smoke = (ROOT / "scripts" / "smoke-release-package.sh").read_text()

    assert "library_items_usr_star_title" in migration
    assert "$schema->hasTable('library_items')" in migration
    assert "$table->hasIndex('library_items_usr_star_title')" in migration
    assert "$table->addIndex(['user_id', 'starred', 'title', 'library_file_id'], 'library_items_usr_star_title');" in migration
    assert "Version000100Date20260916152000.php" in release_smoke
