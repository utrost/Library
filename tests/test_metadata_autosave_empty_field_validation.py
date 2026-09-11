from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_metadata_autosave_validation_clears_stale_warning_after_success():
    script = (ROOT / "src" / "detail-star.js").read_text()

    assert "metadataValidationFeedback" in script
    assert "clearMetadataValidationFeedback(form)" in script
    assert "response.ok" in script
    success_start = script.index("if (response.ok && ownsStatus())")
    success_block = script[success_start:script.index("} catch", success_start)]
    assert "clearMetadataValidationFeedback(form)" in success_block
    assert "request.generation === state.generation" in script


def test_metadata_autosave_surfaces_current_server_validation_error_without_redirect_staleness():
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    script = (ROOT / "src" / "detail-star.js").read_text()

    assert "JSONResponse" in controller
    assert "metadataAutosave" in controller
    assert "return new JSONResponse(['saved' => true]" in controller
    assert "return new JSONResponse(['saved' => false, 'error' => $e->getMessage()]" in controller
    assert "response.status === 422" in script
    assert "setMetadataValidationFeedback(form" in script


def test_blank_publication_date_remains_valid_metadata():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    validation = service[service.index("private function validateEditableMetadata"):service.index("private function normalizeLanguageList")]

    assert "$publicationDate = trim" in validation
    assert "$publicationDate !== ''" in validation
    assert "nullableString($metadata['publicationDate'] ?? null)" in service
