from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_genres_classifications_have_schema_and_publication_field_model():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "genres_json" in migrations
    assert "classifications_json" in migrations
    fields_block = service.split("private const PUBLICATION_FIELDS", 1)[1].split("];", 1)[0]
    assert "'genres'" in fields_block
    assert "'classifications'" in fields_block
    assert "private function normalizeMultiValueField" in service
    insert_block = service.split("public function ensureItemForFile", 1)[1].split("public function deleteItemForLibraryFile", 1)[0]
    assert "'genres_json' =>" in insert_block
    assert "'classifications_json' =>" in insert_block
    update_block = service.split("public function updateItem", 1)[1].split("public function setStarred", 1)[0]
    assert "->set('genres_json'" in update_block
    assert "->set('classifications_json'" in update_block
    assert "'genres' => $this->normalizeRequestList($this->request->getParam('genres', $this->request->getParam('genres[]', '')))" in controller
    assert "'classifications' => $this->normalizeRequestList($this->request->getParam('classifications', $this->request->getParam('classifications[]', '')))" in controller


def test_genres_classifications_are_visible_editable_filterable_and_not_nextcloud_tags():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "'genre' => trim((string)$this->request->getParam('genre', ''))" in page
    assert "'classification' => trim((string)$this->request->getParam('classification', ''))" in page
    assert "genres" in page
    assert "classifications" in page
    assert "i.genres_json" in service
    assert "i.classifications_json" in service
    assert "jsonArrayContainsFilter" in service
    assert "Genres" in detail
    assert 'name="genres[]"' in detail
    assert "library-genre-picklist" in detail
    assert "Classifications" in detail
    assert 'name="classifications"' in detail
    assert "Genre" in vue
    assert "classification" in vue
    assert "Nextcloud tag" in vue
    assert "genres" in vue
    assert "classifications" in vue


def test_genres_classifications_roundtrip_through_corrected_metadata_import_export_and_filter_facets():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-genres-classifications.mjs").read_text()

    export_block = service.split("public function exportCorrectedMetadata", 1)[1].split("public function previewCorrectedMetadataImport", 1)[0]
    assert "genres" in export_block
    assert "classifications" in export_block
    changed_block = service.split("private function changedImportFields", 1)[1].split("private function emptyImportPreview", 1)[0]
    assert "normalizeMultiValueField" in changed_block
    apply_block = service.split("public function applyCorrectedMetadataImport", 1)[1].split("/**", 1)[0]
    assert "updateItem($userId, (int)$current['id'], $importItem)" in apply_block
    assert "genreFacetValues" in service
    assert "classificationFacetValues" in service
    assert '"smoke:genres"' in package
    assert "genres_classifications_smoke_ok=true" in smoke


def test_genres_classifications_docs_mark_p5_as_landed_and_distinct_from_tags():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    personal = (ROOT / "docs" / "personal-top-features.md").read_text()

    assert "Library-native genres and classifications" in readme
    assert "Genre and classification filters" in guide
    assert "separate from Nextcloud tags" in guide
    assert "P5 — genres and classifications. Landed" in roadmap
    assert "genres and classifications are implemented" in personal
    assert "missing as structured Library metadata" not in personal
