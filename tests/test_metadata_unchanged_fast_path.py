from pathlib import Path
import re
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]


def test_schema_and_portable_post_120000_migration_add_nullable_marker_fields_only():
    xml = ET.parse(ROOT / "appinfo" / "database.xml").getroot()
    table = next(t for t in xml.findall("table") if t.findtext("name") == "*dbprefix*library_files")
    fields = {f.findtext("name"): f for f in table.findall("declaration/field")}
    for name in ("metadata_input_fingerprint", "metadata_extractor_revision"):
        assert fields[name].findtext("type") == "string"
        assert fields[name].findtext("length") == "64"
        assert fields[name].findtext("notnull") == "false"

    migrations = sorted((ROOT / "lib" / "Migration").glob("Version000100Date20260911*.php"))
    migration = next(path for path in migrations if "130000" in path.name)
    assert migration.name > "Version000100Date20260911120000.php"
    text = migration.read_text()
    assert "metadata_input_fingerprint" in text
    assert "metadata_extractor_revision" in text
    assert "addColumn" in text
    assert "addIndex" not in text
    assert "UPDATE" not in text.upper()


def test_metadata_service_revision_fingerprint_and_sidecar_precedence_contract():
    text = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "metadata-pipeline-v1" in text
    assert "metadataInputFingerprint" in text
    assert "MetadataInputFingerprint::fromObservations" in text
    assert text.index("$sameBasenameOpf") < text.index("nodeExists('metadata.opf')")
    for term in ("extractor", "normalization", "sidecar precedence", "filename", "folder", "ItemService", "candidate mapping"):
        assert term.lower() in text.lower()
    fingerprint_method = text.split("function metadataInputFingerprint", 1)[1].split("function ", 1)[0]
    assert "getContent" not in fingerprint_method


def test_fingerprint_production_wiring_contains_all_observation_failures_without_touching_extraction_error():
    text = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    fingerprint_method = text.split("function metadataInputFingerprint", 1)[1].split("function ", 1)[0]
    assert "try {" in fingerprint_method
    assert "catch (Throwable" in fingerprint_method
    assert "return null;" in fingerprint_method
    assert "findOpfSidecar" in fingerprint_method
    assert "observeNode" in fingerprint_method
    assert "MetadataInputFingerprint::fromObservations" in fingerprint_method
    assert "lastError" not in fingerprint_method


def test_file_index_retains_previous_state_and_writes_success_markers_separately():
    text = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    upsert = text.split("function upsertFile", 1)[1].split("public function ", 1)[0]
    for term in ("previousScanStatus", "previousMetadataInputFingerprint", "previousMetadataExtractorRevision"):
        assert term in upsert
    assert "metadata_input_fingerprint" not in re.search(r"->update\('library_files'\)(.*?)executeStatement", upsert, re.S).group(1)
    assert "public function markMetadataProcessed(" in text
    marker = text.split("function markMetadataProcessed", 1)[1].split("public function ", 1)[0]
    assert "metadata_input_fingerprint" in marker
    assert "metadata_extractor_revision" in marker
    assert "user_id" in marker
    for term in ("etag", "mtime", "size", "scan_status", "metadata_input_fingerprint", "metadata_extractor_revision"):
        assert term in text.split("function findByFileId", 1)[1]


def test_new_file_insert_fails_closed_when_inserted_row_cannot_be_read_back():
    text = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    inserted = text.split("->insert('library_files')", 1)[1].split("public function markMetadataProcessed", 1)[0]
    assert "?? [" not in inserted
    assert "RuntimeException" in inserted
    assert "'id' => 0" not in inserted


def test_internal_fast_path_state_is_private_to_find_by_file_id_dto():
    text = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    list_files = text.split("function listFiles", 1)[1].split("public function metadataErrorFiles", 1)[0]
    missing_files = text.split("function missingFiles", 1)[1].split("private function filesWithScanStatus", 1)[0]
    status_files = text.split("function filesWithScanStatus", 1)[1].split("private function normalizeFileRow", 1)[0]
    normalizer = text.split("function normalizeFileRow", 1)[1].split("private function rootLabelsById", 1)[0]
    internal_columns = ("etag", "mtime", "size", "metadata_input_fingerprint", "metadata_extractor_revision")
    internal_keys = ("metadataInputFingerprint", "metadataExtractorRevision")
    for method in (list_files, missing_files, status_files):
        for column in internal_columns:
            assert f"'{column}'" not in method
    for key in internal_keys:
        assert f"'{key}'" not in normalizer
    for column in internal_columns:
        assert f"$row['{column}']" not in normalizer


def test_scanner_orders_fast_path_after_accounting_before_extraction_and_marks_success_only():
    text = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    scan_file = text.split("function scanFile", 1)[1].split("private function cleanupSuppressedOpfSidecar", 1)[0]
    body = scan_file.split("{", 1)[1]
    assert body.index("upsertFile") < body.index("seenLibraryFileIds")
    assert scan_file.index("incrementChangeCount") < scan_file.index("shouldSkip")
    assert scan_file.index("shouldSkip") < scan_file.index("extractWithSidecar")
    assert "hasItemForLibraryFile" in scan_file
    assert re.search(
        r"fn\s*\(\s*\)\s*=>\s*\$this->itemService->hasItemForLibraryFile\(",
        scan_file,
    )
    assert "markMetadataProcessed" in scan_file
    extraction = scan_file.index("extractWithSidecar")
    ensure = scan_file.index("ensureItemForFile", extraction)
    post_fingerprint = scan_file.index("metadataInputFingerprint", extraction)
    last_error = scan_file.index("getLastError", extraction)
    marker_decision = scan_file.index("shouldMarkProcessed", extraction)
    marker_write = scan_file.index("markMetadataProcessed", extraction)
    assert extraction < ensure < post_fingerprint < last_error < marker_decision < marker_write
    assert re.search(r"shouldMarkProcessed\(\s*\$fingerprint,\s*\$postExtractionFingerprint,\s*\$metadataError\s*\)", scan_file)


def test_ci_sets_up_php_83_and_runs_plain_php_runtime_test():
    workflow = (ROOT / ".github" / "workflows" / "ci.yml").read_text()
    assert "shivammathur/setup-php@" in workflow
    assert re.search(r"php-version:\s*['\"]?8\.3['\"]?", workflow)
    assert "./scripts/run-php-runtime-tests.sh" in workflow
    runtime_script = (ROOT / "scripts" / "run-php-runtime-tests.sh").read_text()
    assert "metadata_fast_path_test.php" in runtime_script
    assert "performance_instrumentation_test.php" in runtime_script


def test_force_repairs_bypass_fast_path_and_suppressed_opf_cleanup_stays_separate():
    text = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    retry = text.split("function retryMetadataErrors", 1)[1].split("public function recheckMissingFiles", 1)[0]
    recheck = text.split("function recheckMissingFiles", 1)[1].split("private function filterRootsForScope", 1)[0]
    assert re.search(r"scanFile\([^;]+true\)", retry, re.S)
    assert re.search(r"scanFile\([^;]+true\)", recheck, re.S)
    cleanup = text.split("function cleanupSuppressedOpfSidecar", 1)[1]
    assert "shouldSkip" not in cleanup


def test_item_service_has_cheap_existence_query():
    text = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    method = text.split("function hasItemForLibraryFile", 1)[1].split("public function ", 1)[0]
    assert "select('id')" in method
    assert "library_file_id" in method
    assert "user_id" in method
    assert "findByLibraryFileId" not in method


def test_check_script_runs_plain_php_runtime_suite():
    check = (ROOT / "scripts" / "check.sh").read_text()
    assert "run-php-runtime-tests.sh" in check
