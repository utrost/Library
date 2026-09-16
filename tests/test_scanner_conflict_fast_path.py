from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"
DATABASE = ROOT / "appinfo" / "database.xml"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260916150000.php"


def test_scanner_conflict_catalogue_uses_indexed_candidate_prefilter_before_php_comparison():
    service = SERVICE.read_text()

    assert "private function applyScannerConflictCandidateFilter" in service
    query_block = service.split("private function queryScannerConflictCatalogue", 1)[1].split("private function itemHasScannerConflict", 1)[0]
    count_block = service.split("private function countScannerConflictCatalogueItems", 1)[1].split("private function queryScannerConflictCatalogue", 1)[0]

    for block in (query_block, count_block):
        assert "$this->applyScannerConflictCandidateFilter($qb);" in block
        assert "unset($filtersWithoutConflict['scannerConflicts']);" in block

    helper_block = service.split("private function applyScannerConflictCandidateFilter", 1)[1].split("private function", 1)[0]
    assert "i.user_edited" in helper_block
    assert "i.field_values" in helper_block
    assert "->isNotNull('i.field_values')" in helper_block
    assert "->notIn('i.field_values'" in helper_block


def test_database_declares_user_scanner_conflict_candidate_index():
    database = DATABASE.read_text()
    assert "library_items_usr_edit_title" in database
    index_block = database.split("<name>library_items_usr_edit_title</name>", 1)[1].split("</index>", 1)[0]
    assert "<name>user_id</name>" in index_block
    assert "<name>user_edited</name>" in index_block
    assert "<name>title</name>" in index_block
    assert "<name>library_file_id</name>" in index_block


def test_scanner_conflict_index_migration_is_idempotent_and_release_linted():
    migration = MIGRATION.read_text()
    release_smoke = (ROOT / "scripts" / "smoke-release-package.sh").read_text()

    assert "library_items_usr_edit_title" in migration
    assert "$schema->hasTable('library_items')" in migration
    assert "$table->hasIndex('library_items_usr_edit_title')" in migration
    assert "$table->addIndex(['user_id', 'user_edited', 'title', 'library_file_id'], 'library_items_usr_edit_title');" in migration
    assert "Version000100Date20260916150000.php" in release_smoke
