from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DATABASE_XML = ROOT / "appinfo" / "database.xml"

EXPECTED_TABLES = {
    "*dbprefix*library_roots": {
        "fields": {
            "id", "user_id", "path", "label", "enabled", "last_scan_at", "created_at", "updated_at",
        },
        "indexes": {
            "library_roots_id", "library_roots_user_id", "library_roots_user_path_unique",
        },
    },
    "*dbprefix*library_files": {
        "fields": {
            "id", "user_id", "root_id", "file_id", "cached_path", "mime_type", "extension", "etag",
            "mtime", "size", "scan_status", "scan_error", "last_scanned_at", "created_at", "updated_at",
            "metadata_input_fingerprint", "metadata_extractor_revision",
        },
        "indexes": {
            "library_files_id", "library_files_user_id", "library_files_root_id", "library_files_file_id_unique",
        },
    },
    "*dbprefix*library_items": {
        "fields": {
            "id", "user_id", "library_file_id", "publication_type", "title", "subtitle", "creators",
            "publication", "publication_date", "language", "publisher", "metadata_source", "user_edited",
            "field_sources", "field_values", "starred", "last_opened_at", "description", "workflow_status",
            "genres_json", "classifications_json", "personal_rating", "cover_override_url", "cover_override_data",
            "cover_override_mime_type", "created_at", "updated_at",
        },
        "indexes": {
            "library_items_id", "library_items_user_id", "library_items_file_unique",
        },
    },
    "*dbprefix*library_scan_jobs": {
        "fields": {
            "id", "user_id", "status", "scope_type", "root_id", "roots_total", "files_indexed",
            "files_added", "paths_updated", "files_unchanged", "files_missing", "error_count",
            "metadata_errors", "summary", "started_at", "finished_at",
        },
        "indexes": {
            "library_scan_jobs_id", "library_scan_jobs_user_started",
        },
    },
    "*dbprefix*library_saved_collections": {
        "fields": {
            "id", "user_id", "name", "filters_json", "created_at", "updated_at",
        },
        "indexes": {
            "library_saved_collections_id", "library_saved_coll_user", "library_saved_coll_user_name",
        },
    },
}


def child_text(element: ET.Element, name: str) -> str:
    found = element.find(name)
    assert found is not None, f"missing <{name}> in {ET.tostring(element, encoding='unicode')}"
    assert found.text is not None
    return found.text


def test_database_xml_declares_all_library_tables_fields_and_indexes():
    assert DATABASE_XML.exists(), "appinfo/database.xml should document the app-owned DB schema for App Store validation"

    root = ET.parse(DATABASE_XML).getroot()
    assert root.tag == "database"
    assert root.attrib["{http://www.w3.org/2001/XMLSchema-instance}noNamespaceSchemaLocation"] == "https://apps.nextcloud.com/schema/apps/database.xsd"

    tables = {child_text(table, "name"): table.find("declaration") for table in root.findall("table")}
    assert set(tables) == set(EXPECTED_TABLES)

    for table_name, expected in EXPECTED_TABLES.items():
        declaration = tables[table_name]
        assert declaration is not None, f"{table_name} should have a declaration"
        fields = {child_text(field, "name"): field for field in declaration.findall("field")}
        indexes = {child_text(index, "name"): index for index in declaration.findall("index")}
        assert set(fields) == expected["fields"], table_name
        assert set(indexes) == expected["indexes"], table_name


def required_declaration(tables: dict[str, ET.Element | None], table_name: str) -> ET.Element:
    declaration = tables[table_name]
    assert declaration is not None, f"{table_name} should have a declaration"
    return declaration


def test_database_xml_preserves_key_types_defaults_and_uniqueness():
    root = ET.parse(DATABASE_XML).getroot()
    tables = {child_text(table, "name"): table.find("declaration") for table in root.findall("table")}

    items_declaration = required_declaration(tables, "*dbprefix*library_items")
    items = {child_text(field, "name"): field for field in items_declaration.findall("field")}
    assert child_text(items["id"], "type") == "integer"
    assert child_text(items["id"], "autoincrement") == "true"
    assert child_text(items["publication_type"], "default") == "other"
    assert child_text(items["metadata_source"], "default") == "filename"
    assert child_text(items["starred"], "type") == "boolean"
    assert child_text(items["starred"], "default") == "false"
    assert child_text(items["cover_override_url"], "length") == "2048"

    scan_jobs_declaration = required_declaration(tables, "*dbprefix*library_scan_jobs")
    scan_jobs = {child_text(field, "name"): field for field in scan_jobs_declaration.findall("field")}
    assert child_text(scan_jobs["status"], "default") == "running"
    assert child_text(scan_jobs["scope_type"], "default") == "all"
    assert child_text(scan_jobs["metadata_errors"], "default") == "0"

    saved_declaration = required_declaration(tables, "*dbprefix*library_saved_collections")
    saved_indexes = {child_text(index, "name"): index for index in saved_declaration.findall("index")}
    assert child_text(saved_indexes["library_saved_coll_user_name"], "unique") == "true"
