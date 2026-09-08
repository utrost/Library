from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PUBLICATION_FIELDS = [
    "publicationType",
    "title",
    "subtitle",
    "creators",
    "publication",
    "publicationDate",
    "language",
    "publisher",
]


def test_route_and_controller_reset_all_metadata_fields_to_scanner_candidates():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "item#resetfields" in routes
    assert "/items/{itemId}/reset-fields" in routes
    assert "public function resetfields(int $itemId): RedirectResponse" in controller
    assert "resetAllFieldsToScannerCandidates($user->getUID(), $itemId)" in controller
    assert "linkToRoute('library.item_page.show'" in controller
    reset_method_attributes = controller.split("public function resetfields", 1)[0].rsplit("public function resetfield", 1)[1]
    assert "NoCSRFRequired" not in reset_method_attributes


def test_item_service_resets_all_available_candidates_and_keeps_item_user_edited():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function resetAllFieldsToScannerCandidates(string $userId, int $itemId): bool" in service
    assert "$candidateValues = $this->decodeJsonMap" in service
    assert "$candidateSources = $this->decodeJsonMap" in service
    assert "foreach (self::PUBLICATION_FIELDS as $field)" in service
    assert "$column = $this->databaseColumnForField($field)" in service
    assert "if (!array_key_exists($field, $candidateValues))" in service
    assert "->set($column, $qb->createNamedParameter($this->databaseValueForField" in service
    assert "->set('metadata_source', $qb->createNamedParameter('mixed'))" in service
    assert "->set('user_edited', $qb->createNamedParameter(1))" in service
    assert "->set('field_sources', $qb->createNamedParameter(json_encode($candidateSources" in service
    assert "->set('field_values', $qb->createNamedParameter(json_encode($candidateValues" in service
    for field in PUBLICATION_FIELDS:
        assert f"'{field}'" in service


def test_detail_page_exposes_whole_item_reset_form_near_field_provenance():
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    page_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "resetFieldsUrl" in page_controller
    assert "linkToRoute('library.item.resetfields'" in page_controller
    assert "library-fields-reset-form" in detail
    assert "Reset all fields to scanner" in detail
    assert "returnTo" in detail
    assert "details" in detail
    assert "library-field-provenance" in detail


def test_smoke_and_docs_cover_whole_item_reset_slice():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "detail_has_fields_reset_form" in smoke
    assert "Reset all fields to scanner" in smoke
    assert "Whole-item reset to scanner candidates" in roadmap
    assert "whole-item reset to scanner candidates" in guide
    assert "Scanner conflicts filter is available" in guide
    assert "bulk editing remains future work" in guide
