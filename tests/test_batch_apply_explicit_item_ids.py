from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_batch_apply_distinguishes_absent_item_ids_from_supplied_values():
    controller = (ROOT / "lib/Controller/ItemController.php").read_text()
    body = controller.split("public function batchapplymetadataedit", 1)[1].split(
        "private function catalogueFiltersFromRequest", 1
    )[0]

    assert "array_key_exists('itemIds', $this->request->getParams())" in body
    assert "$requestedItemIds = $this->request->getParam('itemIds', null)" in body
    assert "$this->parseExplicitItemIds($requestedItemIds)" in body
    assert "$itemIdsParamPresent" in body
    assert "$this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in body
    assert "array_map('intval'" not in body


def test_controller_contains_closed_canonical_explicit_id_parser():
    controller = (ROOT / "lib/Controller/ItemController.php").read_text()

    assert "private function parseExplicitItemIds(mixed $value): array" in controller
    parser = controller.split("private function parseExplicitItemIds", 1)[1].split(
        "private function catalogueFiltersFromRequest", 1
    )[0]
    assert "if (!is_array($value))" in parser
    assert "return [];" in parser
    assert "PHP_INT_MAX" in parser
    assert "preg_match" in parser
