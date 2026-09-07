from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_human_architecture_review_document_exists_and_names_instance_changes():
    doc = (ROOT / "docs" / "architecture-review.md").read_text()
    readme = (ROOT / "README.md").read_text()

    assert "Human Architecture Review Notes" in doc
    assert "what changes when Library is installed" in doc
    assert "app-owned catalogue/index" in doc
    assert "does **not** move, copy, rewrite or take ownership of source publication files" in doc
    assert "Human architecture review notes" in readme
    assert "docs/architecture-review.md" in readme


def test_architecture_review_documents_tables_fields_jobs_routes_and_cli_boundary():
    doc = (ROOT / "docs" / "architecture-review.md").read_text()

    for table in ["library_roots", "library_files", "library_items", "library_scan_jobs"]:
        assert f"### `{table}`" in doc

    for field in [
        "user_id", "path", "file_id", "cached_path", "scan_status", "scan_error",
        "publication_type", "field_sources", "field_values", "starred", "last_opened_at",
        "description", "workflow_status", "genres_json", "classifications_json",
        "scope_type", "root_id", "files_indexed", "error_count",
    ]:
        assert f"`{field}`" in doc

    assert "OCA\\Library\\BackgroundJob\\ScanJob" in doc
    assert "QueuedJob" in doc
    assert "does **not** register app-specific `occ` commands" in doc
    assert "GET /apps/library/" in doc
    assert "POST /apps/library/scan" in doc
    assert "GET /apps/library/export/metadata/sidecars.zip" in doc


def test_architecture_review_documents_prerequisites_and_dependencies():
    doc = (ROOT / "docs" / "architecture-review.md").read_text()

    assert "Nextcloud 34" in doc
    assert "ZipArchive" in doc
    assert "SimpleXML" in doc
    assert "OCP\\IPreview" in doc
    assert "System tags" in doc
    assert "Comments" in doc
    assert "epubviewer" in doc
    assert "not declared as a hard app dependency" in doc
    assert "The packaged app ships built `js/` and `css/` assets" in doc
    assert "does not require Node.js on the production Nextcloud server" in doc
