from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_service_enforces_first_hard_metadata_validation_rules():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "validateEditableMetadata" in service
    assert "InvalidArgumentException" in service
    assert "publicationDate" in service
    assert "YYYY, YYYY-MM, or YYYY-MM-DD" in service
    assert "preg_match('/^\\d{4}(-\\d{2}){0,2}$/" in service
    assert "checkdate" in service
    assert "language" in service
    assert "preg_match('/^[a-z]{2,3}(-[A-Z]{2})?$/'" in service
    update_block = service.split("public function updateItem", 1)[1].split("public function setStarred", 1)[0]
    assert "validateEditableMetadata($metadata)" in update_block


def test_item_controller_redirects_invalid_detail_edits_to_visible_feedback_without_saved_marker():
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    detail_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "catch (\\InvalidArgumentException $e)" in controller
    assert "metadataError" in controller
    assert "metadataSaved' => '1'" in controller
    assert "metadataError" in detail_controller
    assert "metadataValidationError" in detail_controller
    assert "library-validation-feedback" in template
    assert "role=\"alert\"" in template
    assert "Metadata was not saved" in template


def test_import_apply_skips_rows_that_fail_hard_validation_instead_of_aborting_batch():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    apply_block = service.split("public function applyCorrectedMetadataImport", 1)[1].split("private function emptyImportPreview", 1)[0]

    assert "catch (\\InvalidArgumentException $e)" in apply_block
    assert "status' => 'invalid'" in apply_block
    assert "validationError" in apply_block
    assert "invalidItems++" in apply_block
    assert "continue;" in apply_block


def test_docs_and_smoke_track_hard_validation_landed_for_date_and_language():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "hard validation for publication dates and language codes" in guide
    assert "hard validation remains future work" not in roadmap
    assert "first hard validation for publication dates and language codes has landed" in roadmap
    assert "detail_has_validation_feedback_contract" in smoke
