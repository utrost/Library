from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"
IDENTIFIER_SERVICE = ROOT / "lib" / "Service" / "IdentifierService.php"
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260912150000.php"
TEMPLATE = ROOT / "templates" / "item-detail.php"
CONTROLLER = ROOT / "lib" / "Controller" / "ItemController.php"
OPF = ROOT / "lib" / "Metadata" / "OpfEpubMetadataExtractor.php"
DATABASE_XML = ROOT / "appinfo" / "database.xml"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def test_identifier_migration_adds_child_table_with_normalized_search_index():
    source = read(MIGRATION)
    assert "createTable('library_item_identifiers')" in source
    for column in ["item_id", "user_id", "scheme", "display_value", "normalized_value", "source", "user_edited"]:
        assert f"addColumn('{column}'" in source
    assert "library_ident_item" in source
    assert "library_ident_user_scheme_value" in source
    assert "addIndex(['user_id', 'scheme', 'normalized_value']" in source
    assert "hasTable('library_item_identifiers')" in source


def test_identifier_service_validates_and_normalizes_isbn_issn_without_rewriting_display():
    source = read(IDENTIFIER_SERVICE)
    for marker in [
        "normalizeIdentifier",
        "validateIsbn10",
        "validateIsbn13",
        "validateIssn",
        "preg_replace('/[\\s-]+/u', '', $displayValue)",
        "scheme' => 'isbn'",
        "scheme' => 'issn'",
        "valid' => $valid",
    ]:
        assert marker in source
    assert "displayValue" in source
    assert "normalizedValue" in source


def test_item_edit_persists_identifiers_and_searches_exact_normalized_values():
    service = read(SERVICE)
    controller = read(CONTROLLER)
    assert "'identifiers' => $this->normalizeIdentifierRequest" in controller
    assert "syncItemIdentifiers($userId, $itemId" in service
    assert "identifierSearch = IdentifierService::normalizeSearchQuery($query)" in service
    assert "library_item_identifiers" in service
    assert "idn.normalized_value" in service
    assert "idn.scheme" in service
    assert "ISBN/ISSN exact normalized search" in service or "IdentifierService::normalizeSearchQuery($query)" in service


def test_scanner_identifier_refresh_does_not_clobber_user_edited_items():
    service = read(SERVICE)
    user_edited_branch = service.index("if ((bool)$existing['user_edited'])")
    inferred_refresh = service.index("$this->refreshInferredItem", user_edited_branch)
    branch = service[user_edited_branch:inferred_refresh]
    assert "$this->refreshScannerCandidatesForUserEditedItem" in branch
    assert "syncItemIdentifiers" not in branch
    inferred_method = service[service.index("private function refreshInferredItem"):]
    assert "syncItemIdentifiers($userId, $itemId" in inferred_method


def test_detail_page_exposes_identifier_inputs_and_invalid_identifier_attention():
    template = read(TEMPLATE)
    assert "library-identifiers-fieldset" in template
    assert "if (count($identifiers) === 0)" in template
    assert "while (count($identifiers) < 2)" not in template
    assert "name=\"identifiers[<?php p((string)$identifierIndex); ?>][scheme]\"" in template
    assert "name=\"identifiers[<?php p((string)$identifierIndex); ?>][displayValue]\"" in template
    assert "title=\"<?php p($metadataHelp['identifiers']); ?>\"" in template
    assert '<p class="library-muted"><?php p($l->t(\'ISBN and ISSN preserve' not in template
    assert "library-identifier-warning" in template
    assert "Invalid identifier checksum" in template
    assert "identifier-problems" in read(ROOT / "lib" / "Presentation" / "MetadataStatus.php")


def test_opf_identifier_extraction_and_database_xml_contract_are_wired():
    opf = read(OPF)
    assert "dc:identifier" in opf or "identifier" in opf
    assert "extractIdentifiers" in opf
    assert "isbn" in opf.lower()
    assert "issn" in opf.lower()
    db = read(DATABASE_XML)
    assert "*dbprefix*library_item_identifiers" in db
    assert "normalized_value" in db
