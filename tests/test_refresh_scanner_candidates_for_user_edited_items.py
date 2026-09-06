from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

CURRENT_FIELD_SETTERS = [
    "->set('publication_type'",
    "->set('title'",
    "->set('subtitle'",
    "->set('creators'",
    "->set('publication'",
    "->set('publication_date'",
    "->set('language'",
    "->set('publisher'",
]


def test_ensure_item_refreshes_candidate_maps_when_existing_item_is_user_edited():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    ensure_start = service.index("public function ensureItemForFile")
    ensure_end = service.index("public function deleteItemForLibraryFile", ensure_start)
    ensure_method = service[ensure_start:ensure_end]

    assert "if ((bool)$existing['user_edited'])" in ensure_method
    assert "$this->refreshScannerCandidatesForUserEditedItem($userId, (int)$existing['id'], $metadataCandidate);" in ensure_method
    assert "return;" in ensure_method


def test_user_edited_candidate_refresh_updates_only_field_maps_and_timestamp():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    method_start = service.index("private function refreshScannerCandidatesForUserEditedItem")
    method_end = service.index("private function refreshInferredItem", method_start)
    method = service[method_start:method_end]

    assert "array $metadataCandidate" in method
    assert "->set('field_sources', $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources']" in method
    assert "->set('field_values', $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues']" in method
    assert "->set('updated_at', $qb->createNamedParameter(time()))" in method
    assert "->andWhere($qb->expr()->eq('user_edited', $qb->createNamedParameter(1)))" in method
    assert "metadata_source" not in method
    for setter in CURRENT_FIELD_SETTERS:
        assert setter not in method


def test_manual_update_still_preserves_latest_candidate_maps_after_refresh():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    update_start = service.index("public function updateItem")
    update_end = service.index("public function resetFieldToScannerCandidate", update_start)
    update_method = service[update_start:update_end]

    assert "$existingProvenance = $this->existingFieldProvenance($userId, $itemId);" in update_method
    assert "json_encode($existingProvenance['fieldSources']" in update_method
    assert "json_encode($existingProvenance['fieldValues']" in update_method


def test_docs_explain_rescans_refresh_scanner_candidates_without_overwriting_user_fields():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Rescans refresh scanner candidates for user-edited items" in roadmap
    assert "without overwriting user-edited fields" in roadmap
    assert "Scanner candidates refresh on rescan" in guide
    assert "current user-edited values stay untouched" in guide
