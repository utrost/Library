from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260916130000.php"


def index_block(schema: str, name: str) -> str:
    return schema.split(f"<name>{name}</name>", 1)[1].split("</index>", 1)[0]


def test_type_filter_has_measured_user_scoped_page_and_count_indexes():
    assert MIGRATION.exists(), "type filtering needs its measured index migration"
    source = MIGRATION.read_text()

    assert "hasTable('library_items')" in source
    assert "hasIndex('library_items_usr_type_title_file')" in source
    assert "addIndex(['user_id', 'publication_type', 'title', 'library_file_id'], 'library_items_usr_type_title_file')" in source
    assert "hasIndex('library_items_usr_type_file')" in source
    assert "addIndex(['user_id', 'publication_type', 'library_file_id'], 'library_items_usr_type_file')" in source
    assert source.count("->addIndex(") == 2
    assert "executeQuery" not in source
    assert "executeStatement" not in source


def test_database_xml_declares_type_filter_indexes_in_measured_order():
    schema = (ROOT / "appinfo" / "database.xml").read_text()

    page = index_block(schema, "library_items_usr_type_title_file")
    assert page.index("<name>user_id</name>") < page.index("<name>publication_type</name>")
    assert page.index("<name>publication_type</name>") < page.index("<name>title</name>")
    assert page.index("<name>title</name>") < page.index("<name>library_file_id</name>")

    count = index_block(schema, "library_items_usr_type_file")
    assert count.index("<name>user_id</name>") < count.index("<name>publication_type</name>")
    assert count.index("<name>publication_type</name>") < count.index("<name>library_file_id</name>")


def test_type_filter_remains_an_exact_sargable_predicate():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    filters = service.split("private function applyCatalogueFilters", 1)[1].split(
        "private function applySmartCollectionFilters", 1
    )[0]
    type_filter = filters.split("$type =", 1)[1].split("$creator =", 1)[0]

    assert "eq('i.publication_type'" in type_filter
    assert "LOWER(i.publication_type)" not in type_filter
    assert "like('i.publication_type'" not in type_filter
