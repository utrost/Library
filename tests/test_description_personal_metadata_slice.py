from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_description_has_schema_and_participates_in_publication_fields():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "description" in migrations
    assert "'description'" in service.split("private const PUBLICATION_FIELDS", 1)[1].split("];", 1)[0]
    insert_block = service.split("public function ensureItemForFile", 1)[1].split("public function deleteItemForLibraryFile", 1)[0]
    assert "'description' =>" in insert_block
    assert "->set('description'" in service.split("public function updateItem", 1)[1].split("public function setStarred", 1)[0]
    assert "'description' => (string)$this->request->getParam('description', '')" in controller


def test_description_is_visible_editable_and_kept_off_compact_cards():
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    assert 'name="description"' in detail
    assert "textarea" in detail
    details_section = vue.split("<details", 1)[1]
    compact_default = vue.split("<details", 1)[0]
    assert "item.description" in details_section
    assert "item.description" not in compact_default


def test_description_searches_and_roundtrips_through_import_export():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-description.mjs").read_text()

    search_block = service.split("$query = mb_strtolower", 1)[1].split("private function applyCatalogueSort", 1)[0]
    assert "LOWER(i.description)" in search_block
    assert "description" in service.split("public function exportCorrectedMetadata", 1)[1].split("public function previewCorrectedMetadataImport", 1)[0]
    changed_block = service.split("private function changedImportFields", 1)[1].split("private function emptyImportPreview", 1)[0]
    assert "foreach (self::PUBLICATION_FIELDS as $field)" in changed_block
    apply_block = service.split("public function applyCorrectedMetadataImport", 1)[1].split("/**", 1)[0]
    assert "updateItem($userId, (int)$current['id'], $importItem)" in apply_block
    assert '"smoke:description"' in package
    assert "description_search_smoke_ok=true" in smoke


def test_description_docs_mark_p3_as_landed_without_claiming_full_text_search():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    personal = (ROOT / "docs" / "personal-top-features.md").read_text()

    assert "Library-native description" in readme
    assert "search title, subtitle, creators, publication, description and file path" in guide
    assert "P3 — search with description. Landed" in roadmap
    assert "description search is implemented" in personal
    assert "OCR or full-text document search" in guide
