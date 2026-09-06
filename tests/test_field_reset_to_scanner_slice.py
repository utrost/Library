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


def test_route_and_controller_reset_one_metadata_field_to_scanner_candidate():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "item#resetfield" in routes
    assert "/items/{itemId}/reset-field" in routes
    assert "public function resetfield(int $itemId): RedirectResponse" in controller
    assert "getParam('field', '')" in controller
    assert "resetFieldToScannerCandidate($user->getUID(), $itemId, $field)" in controller
    assert "linkToRoute('library.item_page.show'" in controller


def test_item_service_resets_only_known_field_from_stored_candidate_and_keeps_item_user_edited():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function resetFieldToScannerCandidate(string $userId, int $itemId, string $field): bool" in service
    assert "private function databaseColumnForField(string $field): ?string" in service
    for field in PUBLICATION_FIELDS:
        assert f"'{field}'" in service
    assert "field_values" in service
    assert "field_sources" in service
    assert "$candidateValues = $this->decodeJsonMap" in service
    assert "$candidateSources = $this->decodeJsonMap" in service
    assert "$column = $this->databaseColumnForField($field)" in service
    assert "if ($column === null" in service
    assert "if (!array_key_exists($field, $candidateValues))" in service
    assert "->set($column, $qb->createNamedParameter($this->databaseValueForField" in service
    assert "->set('metadata_source', $qb->createNamedParameter('mixed'))" in service
    assert "->set('user_edited', $qb->createNamedParameter(1))" in service
    assert "->set('field_sources', $qb->createNamedParameter(json_encode($candidateSources" in service


def test_detail_page_exposes_reset_to_scanner_buttons_only_inside_field_provenance_table():
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    page_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "resetFieldUrl" in page_controller
    assert "linkToRoute('library.item.resetfield'" in page_controller
    assert "library-field-reset-form" in detail
    assert "Reset to scanner" in detail
    assert "returnTo" in detail
    assert "details" in detail
    assert "name=\"field\"" in detail
    assert "Scanner candidate" in detail


def test_smoke_and_docs_cover_field_reset_slice():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "detail_has_field_reset_form" in smoke
    assert "Reset to scanner" in smoke
    assert "single-field reset-to-scanner" in roadmap
    assert "Reset to scanner" in guide
    assert "whole-item reset" in guide
