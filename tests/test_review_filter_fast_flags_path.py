from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATABASE = ROOT / "appinfo" / "database.xml"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260916154000.php"
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"

REVIEW_FLAGS = {
    "needs_metadata": "library_items_usr_needmeta_title",
    "cover_review": "library_items_usr_coverrev_title",
    "no_publication": "library_items_usr_nopub_title",
    "title_from_filename": "library_items_usr_titlefile_title",
    "no_description": "library_items_usr_nodesc_title",
    "weak_metadata": "library_items_usr_weakmeta_title",
    "unreviewed_import": "library_items_usr_unrevimp_title",
}


def index_block(schema: str, name: str) -> str:
    assert f"<name>{name}</name>" in schema
    return schema.split(f"<name>{name}</name>", 1)[1].split("</index>", 1)[0]


def test_database_declares_materialized_review_filter_flags_and_title_indexes():
    schema = DATABASE.read_text()

    for column, index in REVIEW_FLAGS.items():
        assert f"<name>{column}</name>" in schema
        field = schema.split(f"<name>{column}</name>", 1)[1].split("</field>", 1)[0]
        assert "<type>boolean</type>" in field
        assert "<default>false</default>" in field

        block = index_block(schema, index)
        assert "<name>user_id</name>" in block
        assert f"<name>{column}</name>" in block
        assert "<name>title</name>" in block
        assert "<name>library_file_id</name>" in block


def test_review_filter_migration_adds_and_backfills_flags_idempotently():
    migration = MIGRATION.read_text()
    release_smoke = (ROOT / "scripts" / "smoke-release-package.sh").read_text()

    assert "$schema->hasTable('library_items')" in migration
    assert "foreach (self::REVIEW_COLUMNS as $column => $index)" in migration
    assert "$table->hasColumn($column)" in migration
    assert "$table->addColumn($column, 'boolean'" in migration
    assert "$table->hasIndex($index)" in migration
    assert "$table->addIndex(['user_id', $column, 'title', 'library_file_id'], $index)" in migration
    for column, index in REVIEW_FLAGS.items():
        assert f"'{column}'" in migration
        assert f"'{index}'" in migration
    assert "backfillReviewFilterFlags" in migration
    assert "UPDATE `*PREFIX*library_items`" not in migration
    assert "Version000100Date20260916154000.php" in release_smoke


def test_review_filters_use_materialized_plain_boolean_columns():
    service = SERVICE.read_text()
    filter_block = service.split("private function applySmartCollectionFilters", 1)[1].split("private function indexedFacetFilter", 1)[0]

    expected_filters = {
        "needsMetadata": "i.needs_metadata",
        "coverReview": "i.cover_review",
        "noPublication": "i.no_publication",
        "titleFromFilename": "i.title_from_filename",
        "noDescription": "i.no_description",
        "weakMetadata": "i.weak_metadata",
        "unreviewedImports": "i.unreviewed_import",
    }
    for filter_name, column in expected_filters.items():
        assert filter_name in filter_block
        assert f"$qb->expr()->eq('{column}', $qb->createNamedParameter(1))" in filter_block

    assert "LIKE '%filename-pattern%'" not in filter_block
    assert "like('i.field_sources'" not in filter_block
    assert "$qb->expr()->neq('i.metadata_source'" not in filter_block
    assert "$qb->expr()->isNull('i.description')" not in filter_block
