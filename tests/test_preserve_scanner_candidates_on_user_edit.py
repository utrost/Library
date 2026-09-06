from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_service_manual_update_preserves_existing_scanner_candidate_maps():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    update_start = service.index("public function updateItem")
    update_end = service.index("public function resetFieldToScannerCandidate", update_start)
    update_method = service[update_start:update_end]

    assert "$existingProvenance = $this->existingFieldProvenance($userId, $itemId);" in update_method
    assert "->set('field_sources', $qb->createNamedParameter(json_encode($existingProvenance['fieldSources']" in update_method
    assert "->set('field_values', $qb->createNamedParameter(json_encode($existingProvenance['fieldValues']" in update_method
    assert "buildUserFieldSources" not in update_method
    assert "buildCurrentFieldValues" not in update_method


def test_item_service_has_safe_existing_provenance_reader_for_manual_edits():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "private function existingFieldProvenance(string $userId, int $itemId): array" in service
    assert "select('field_sources', 'field_values')" in service
    assert "$this->decodeJsonMap($row['field_sources'] ?? null)" in service
    assert "$this->decodeJsonMap($row['field_values'] ?? null)" in service
    assert "return ['fieldSources' => [], 'fieldValues' => []];" in service


def test_detail_page_labels_scanner_candidate_provenance_not_current_user_source():
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "Scanner source" in detail
    assert "Scanner candidate" in detail
    assert "Source</th>" not in detail


def test_docs_explain_manual_edits_keep_reset_candidates():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Manual edits preserve stored scanner candidates" in roadmap
    assert "manual edit keeps scanner candidates" in guide
    assert "Reset to scanner remains available after editing" in guide
