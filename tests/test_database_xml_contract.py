from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DATABASE_XML = ROOT / "appinfo" / "database.xml"

EXPECTED_TABLES = {
    "*dbprefix*library_thumbnail_users": {"fields": {"user_id"}, "indexes": {"library_thumbnail_user_pk"}},
    '*dbprefix*library_scan_schedule': {'fields': {'user_id', 'interval_seconds', 'next_run_at', 'last_job_id', 'last_full_at', 'last_full_revision', 'last_full_roots_hash'}, 'indexes': {'library_scan_schedule_pk', 'library_scan_schedule_due'}},
    '*dbprefix*library_scan_changes': {'fields': {'user_id', 'path_hash', 'target_path', 'is_directory', 'generation'}, 'indexes': {'library_scan_changes_pk'}},
    '*dbprefix*library_dup_state': {'fields': {'user_id', 'cursor_id', 'max_id', 'processed', 'status', 'enabled', 'total'}, 'indexes': {'library_dup_state_pk'}},
    '*dbprefix*library_dup_index': {'fields': {'payload', 'user_id', 'item_id'}, 'indexes': {'library_dup_index_pk'}},
    '*dbprefix*library_dup_terms': {'fields': {'user_id', 'match_key', 'item_id'}, 'indexes': {'library_dup_terms_pk', 'library_dup_terms_item'}},
    '*dbprefix*library_dup_hints': {'fields': {'preferred_id', 'user_id', 'right_id', 'left_id', 'signature', 'decision'}, 'indexes': {'library_dup_hints_pk', 'library_dup_hints_right'}},

    '*dbprefix*library_dup_jobs': {'fields': {'expires_at', 'created_at', 'payload', 'user_id', 'id', 'status'}, 'indexes': {'library_dup_job_expiry', 'library_dup_job_user', 'library_dup_job_pk'}},
    '*dbprefix*library_dup_books': {'fields': {'job_id', 'item_id', 'user_id', 'payload'}, 'indexes': {'library_dup_book_pk', 'library_dup_book_user'}},
    '*dbprefix*library_dup_keys': {'fields': {'job_id', 'match_key', 'item_id', 'user_id'}, 'indexes': {'library_dup_key_user', 'library_dup_key_pk'}},
    '*dbprefix*library_dup_pairs': {'fields': {'pair_id', 'decision', 'payload', 'job_id', 'user_id', 'signature'}, 'indexes': {'library_dup_pair_page', 'library_dup_pair_choice', 'library_dup_pair_pk', 'library_dup_pair_user'}},
    '*dbprefix*library_dup_choices': {'fields': {'decision', 'updated_at', 'preferred_id', 'user_id', 'signature'}, 'indexes': {'library_dup_choice_expiry', 'library_dup_choice_pk'}},

    '*dbprefix*library_infer_jobs': {'fields': {'total', 'id', 'expires_at', 'bytes', 'created_at', 'max_id', 'user_id', 'payload', 'status', 'processed', 'cursor_id', 'root_id'}, 'indexes': {'library_infer_job_pk', 'library_infer_job_expiry', 'library_infer_job_user'}},
    '*dbprefix*library_infer_results': {'fields': {'item_id', 'user_id', 'payload', 'status', 'job_id'}, 'indexes': {'library_infer_result_page', 'library_infer_result_user', 'library_infer_result_pk'}},

    "*dbprefix*library_inference_batches": {
        "fields": {"id", "user_id", "status", "payload", "created_at", "expires_at"},
        "indexes": {"library_infer_batch_id", "library_infer_batch_user", "library_infer_batch_expiry"},
    },
    "*dbprefix*library_lists": {
        "fields": {"id", "user_id", "name", "description", "revision", "created_at", "updated_at"},
        "indexes": {"library_lists_id", "library_lists_owner"},
    },
    "*dbprefix*library_list_entries": {
        "fields": {"id", "list_id", "item_id", "file_id", "position", "note", "created_at"},
        "indexes": {"library_list_entries_id", "library_list_entry_unique", "library_list_entry_order"},
    },
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
            "library_files_usr_page", "library_files_usr_root_status", "library_files_usr_path", "library_files_usr_status_scan",
        },
    },
    "*dbprefix*library_items": {
        "fields": {
            "id", "user_id", "library_file_id", "publication_type", "title", "subtitle", "creators", "authors_json",
            "publication", "publication_date", "language", "publisher", "metadata_source", "user_edited", "series_name", "series_number", "genre",
            "field_sources", "field_values", "starred", "last_opened_at", "description", "workflow_status",
            "subjects_json", "genres_json", "classifications_json", "personal_rating", "cover_override_url", "cover_override_data",
            "cover_override_mime_type", "cover_revision", "scanner_index_hash", "needs_metadata", "cover_review", "no_publication", "title_from_filename",
            "no_description", "weak_metadata", "unreviewed_import", "created_at", "updated_at",
        },
        "indexes": {
            "library_items_id", "library_items_user_id", "library_items_file_unique",
            "library_items_usr_title_page", "library_items_usr_title", "library_items_usr_file", "library_items_usr_pubdate",
            "library_items_usr_publication", "library_items_usr_lastopen", "library_items_usr_workflow",
            "library_items_usr_publisher", "library_items_usr_creator",
            "library_items_usr_type_title_file", "library_items_usr_type_file",
            "library_items_usr_edit_title", "library_items_usr_star_title",
            "library_items_usr_needmeta_title", "library_items_usr_coverrev_title", "library_items_usr_nopub_title",
            "library_items_usr_titlefile_title", "library_items_usr_nodesc_title", "library_items_usr_weakmeta_title",
            "library_items_usr_unrevimp_title",
        },
    },
    "*dbprefix*library_item_search_grams": {
        "fields": {
            "id", "user_id", "item_id", "gram",
        },
        "indexes": {
            "library_search_grams_id", "library_search_grams_lookup", "library_search_grams_item_unique",
        },
    },
    "*dbprefix*library_item_identifiers": {
        "fields": {
            "id", "item_id", "user_id", "scheme", "display_value", "normalized_value",
            "source", "user_edited", "valid", "created_at", "updated_at",
        },
        "indexes": {
            "library_ident_id", "library_ident_item", "library_ident_user_scheme_value",
        },
    },
    "*dbprefix*library_item_facets": {
        "fields": {
            "id", "user_id", "item_id", "facet_type", "facet_value", "normalized_value",
        },
        "indexes": {
            "library_facets_id", "library_facets_lookup", "library_facets_exact", "library_facets_item_unique",
        },
    },
    "*dbprefix*library_scan_jobs": {
        "fields": {
            "id", "user_id", "status", "scope_type", "root_id", "roots_total", "files_indexed",
            "files_added", "paths_updated", "files_unchanged", "files_missing", "error_count",
            "metadata_errors", "summary", "started_at", "finished_at", "run_started_at", "duration_ms",
            "fingerprint_skips", "cached_warning_skips", "metadata_extractions", "item_refreshes", "last_progress_at", "current_path",
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
    assert child_text(scan_jobs["fingerprint_skips"], "default") == "0"

    saved_declaration = required_declaration(tables, "*dbprefix*library_saved_collections")
    saved_indexes = {child_text(index, "name"): index for index in saved_declaration.findall("index")}
    assert child_text(saved_indexes["library_saved_coll_user_name"], "unique") == "true"
