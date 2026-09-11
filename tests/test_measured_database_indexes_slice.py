import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260911120000.php"

EXPECTED_INDEXES = {
    "library_items_usr_title": ("library_items", ["user_id", "title"]),
    "library_items_usr_file": ("library_items", ["user_id", "library_file_id"]),
    "library_items_usr_pubdate": ("library_items", ["user_id", "publication_date"]),
    "library_items_usr_publication": (
        "library_items",
        ["user_id", "publication", "publication_date"],
    ),
    "library_items_usr_lastopen": ("library_items", ["user_id", "last_opened_at"]),
    "library_items_usr_workflow": ("library_items", ["user_id", "workflow_status"]),
    "library_files_usr_status_scan": (
        "library_files",
        ["user_id", "scan_status", "last_scanned_at"],
    ),
}


def migration_source():
    assert MIGRATION.exists(), "the measured database index migration must be added"
    return MIGRATION.read_text()


def index_calls(source):
    calls = re.findall(
        r"\$table->addIndex\(\[([^]]+)\],\s*'([^']+)'\);",
        source,
        flags=re.DOTALL,
    )
    return {
        name: re.findall(r"'([^']+)'", columns)
        for columns, name in calls
    }


def test_measured_indexes_have_exact_names_and_ordered_columns_only():
    source = migration_source()
    calls = index_calls(source)

    assert calls == {
        name: columns for name, (_, columns) in EXPECTED_INDEXES.items()
    }
    assert source.count("->addIndex(") == 7


def test_measured_indexes_are_table_guarded_and_idempotent():
    source = migration_source()

    assert source.count("$schema->hasTable('library_items')") == 1
    assert source.count("$schema->hasTable('library_files')") == 1
    for name, (table, columns) in EXPECTED_INDEXES.items():
        table_block = source.split(f"$schema->hasTable('{table}')", 1)[1]
        if table == "library_items":
            table_block = table_block.split("$schema->hasTable('library_files')", 1)[0]
        assert table_block.count(f"$table->hasIndex('{name}')") == 1
        guard_then_add = re.compile(
            rf"if \(!\$table->hasIndex\('{re.escape(name)}'\)\) \{{\s*"
            rf"\$table->addIndex\(\[{', '.join(repr(column) for column in columns)}\], "
            rf"'{re.escape(name)}'\);\s*\}}"
        )
        assert guard_then_add.search(table_block), name


def test_measured_index_migration_uses_only_portable_schema_apis():
    source = migration_source()

    assert "use OCP\\DB\\ISchemaWrapper;" in source
    assert "$schema = $schemaClosure();" in source
    assert "$schema->getTable(" in source
    assert "->hasIndex(" in source
    assert "->addIndex(" in source
    assert "CREATE INDEX" not in source.upper()
    assert "executeStatement" not in source
    assert "executeQuery" not in source
    assert "getConnection" not in source


def test_measured_index_migration_excludes_speculative_indexes():
    source = migration_source()

    for excluded in [
        "starred",
        "library_roots",
        "saved_collection",
        "library_scan_jobs",
        "scan_job",
    ]:
        assert excluded not in source


def test_alpha_153_release_docs_state_the_measured_index_boundary():
    info = (ROOT / "appinfo" / "info.xml").read_text()
    release_docs = "\n".join(
        (ROOT / path).read_text()
        for path in [
            "CHANGELOG.md",
            "README.md",
            "RELEASE.md",
            "docs/roadmap.md",
            "docs/current-state-and-risk-register.md",
            "docs/architecture-review.md",
            "docs/app-store-readiness.md",
        ]
    )

    assert "<version>0.1.0-alpha.161</version>" in info
    assert "seven additive user-scoped" in release_docs.lower()
    assert "no starred index" in release_docs.lower()
    assert "leading-wildcard" in release_docs
    assert "performance instrumentation" in release_docs


def test_alpha_153_package_includes_the_new_migration():
    package_script = (ROOT / "scripts" / "package-release.sh").read_text()
    smoke_script = (ROOT / "scripts" / "smoke-release-package.sh").read_text()

    assert "-cf - . | tar -xf -" in package_script
    assert "--exclude=lib" not in package_script
    assert MIGRATION.is_file()
    assert (
        "php -l /var/www/html/custom_apps/library/lib/Migration/"
        "Version000100Date20260911120000.php"
    ) in smoke_script
