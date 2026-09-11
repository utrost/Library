from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scanner_conflict_review_filter_is_exposed_in_catalogue_state_and_vue():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "'scannerConflicts' => $this->normalizeReviewFilter('scannerConflicts', $this->request->getParam('scannerConflicts', ''))" in page
    assert "scannerConflictCount" in page
    assert "scannerConflictReviewUrl" in page
    assert "scannerConflicts" in vue
    assert "Scanner conflicts" in vue
    assert "Needs review" in vue
    assert "scannerConflictReviewUrl" in vue
    assert "Review scanner conflicts" in vue


def test_item_service_marks_and_filters_items_with_stored_scanner_candidate_conflicts():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "scannerConflicts" in service
    assert "private function itemHasScannerConflict(array $item): bool" in service
    assert "private function queryScannerConflictCatalogue" in service
    assert "$item['hasScannerConflict'] = $this->itemHasScannerConflict" in service
    assert "scannerConflictCount" in service
    assert "Fields differing from scanner" in (ROOT / "templates" / "item-detail.php").read_text()


def test_conflict_review_filter_smoke_and_docs_are_landed():
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-metadata-conflict-review.mjs").read_text()
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert '"smoke:conflict-review"' in package
    assert "metadata_conflict_review_smoke_ok=true" in smoke
    assert "scanner-conflict review filter" in readme
    assert "Scanner conflicts filter" in guide
    assert "Conflict review filter has landed" in roadmap
    assert "review queue remains future work" not in guide
