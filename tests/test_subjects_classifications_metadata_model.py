from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_subjects_classifications_have_schema_and_publication_field_model():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    schema = (ROOT / "appinfo" / "database.xml").read_text()
    assert "subjects_json" in schema
    assert "genres_json" not in schema
    assert "subjects_json" in migrations
    assert "genres_json" in migrations  # legacy migration source only
    assert "classifications_json" in migrations
    fields_block = service.split("private const PUBLICATION_FIELDS", 1)[1].split("];", 1)[0]
    assert "'subjects'" in fields_block
    assert "'genres'" not in fields_block
    assert "'classifications'" in fields_block
    assert "private function normalizeMultiValueField" in service
    insert_block = service.split("public function ensureItemForFile", 1)[1].split("public function deleteItemForLibraryFile", 1)[0]
    assert "'subjects_json' =>" in insert_block
    assert "'genres_json' =>" not in insert_block
    assert "'classifications_json' =>" in insert_block
    update_block = service.split("public function updateItem", 1)[1].split("public function setStarred", 1)[0]
    assert "->set('subjects_json'" in update_block
    assert "->set('genres_json'" not in update_block
    assert "->set('classifications_json'" in update_block
    assert "'subjects' => $this->normalizeRequestList($this->request->getParam('subjects', $this->request->getParam('subjects[]', '')))" in controller
    assert "getParam('genres'" not in controller
    assert "'classifications' => $this->normalizeRequestList($this->request->getParam('classifications', $this->request->getParam('classifications[]', '')))" in controller


def test_subjects_classifications_are_visible_editable_filterable_and_not_genres():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    packaged_css = (ROOT / "css" / "style.css").read_text()

    assert "'subject' => trim((string)$this->request->getParam('subject', ''))" in page
    assert "getParam('genre'" not in page
    assert "'classification' => trim((string)$this->request->getParam('classification', ''))" in page
    assert "'subjects'" in page
    assert "'genres'" not in page
    assert "classifications" in page
    assert "i.subjects_json" in service
    assert "i.genres_json" not in service
    assert "i.classifications_json" in service
    assert "indexedFacetFilter" in service
    assert "jsonArrayContainsFilter" not in service
    assert "Subjects" in detail
    assert 'name="subjects[]"' in detail
    assert "Genre" not in detail
    assert "genres[]" not in detail
    assert "Classifications" in detail
    assert 'name="classifications"' in detail
    assert "Subject" in vue
    assert "All subjects" in vue
    assert "Genre" not in vue
    assert "genres" not in vue
    assert "activeFilters.genre" not in vue
    assert "classification" in vue
    assert "Nextcloud tag" in vue
    assert "subjects" in vue
    assert "classifications" in vue
    assert ".library-genre-picklist" not in packaged_css
    assert ".library-subject-field" in packaged_css


def test_subjects_classifications_roundtrip_through_import_export_and_filter_facets():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-subjects-classifications.mjs").read_text()

    export_block = service.split("public function exportCorrectedMetadata", 1)[1].split("public function previewCorrectedMetadataImport", 1)[0]
    assert "subjects" in export_block
    assert "genres" not in export_block
    assert "classifications" in export_block
    changed_block = service.split("private function changedImportFields", 1)[1].split("private function emptyImportPreview", 1)[0]
    assert "normalizeMultiValueField" in changed_block
    apply_block = service.split("public function applyCorrectedMetadataImport", 1)[1].split("/**", 1)[0]
    assert "updateItem($userId, (int)$current['id'], $importItem)" in apply_block
    assert "indexedFacetValues" in service
    assert "genreFacetValues" not in service
    assert "library_item_facets" in service
    assert '"smoke:subjects"' in package
    assert "subjects_classifications_smoke_ok=true" in smoke
    assert "genres_json" not in smoke


def test_opf_subject_extraction_is_subject_only_and_pdf_subject_behavior_is_unchanged():
    opf = (ROOT / "lib" / "Metadata" / "OpfEpubMetadataExtractor.php").read_text()
    pdf = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    subject_block = opf.split("$subjects = $this->xmlValues($dc->subject", 1)[1].split("$series =", 1)[0]
    assert "$metadata['subjects'] = $subjects;" in subject_block
    assert "$metadata['classifications']" not in subject_block
    assert "$metadata['genres']" not in subject_block
    assert "$metadata['subtitle'] = $subject;" in pdf


def test_subjects_classifications_source_contract_is_distinct_from_tags():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    personal = (ROOT / "docs" / "personal-top-features.md").read_text()

    assert "Library-native subjects and classifications" in readme
    assert "Subject and classification filters" in guide
    assert "separate from Nextcloud tags" in guide
    assert "P5 — subjects and classifications. Landed" in roadmap
    assert "subjects and classifications are implemented" in personal
    assert "missing as structured Library metadata" not in personal
