from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_tag_service_returns_structured_assignment_results():
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()

    assert "public function assignTagToItem(string $userId, int $itemId, string $tagName): array" in service
    assert "'status' => 'empty'" in service
    assert "'status' => 'item-not-found'" in service
    assert "'status' => 'created'" in service
    assert "'status' => 'added'" in service
    assert "'status' => 'already-assigned'" in service
    assert "'status' => 'not-assignable'" in service
    assert "tagAlreadyAssigned" in service


def test_tag_controller_preserves_assignment_result_in_details_redirect():
    controller = (ROOT / "lib" / "Controller" / "TagController.php").read_text()

    assert "assignTagToItem" in controller
    assert "tagResult" in controller
    assert "tagName" in controller
    assert "redirectAfterTagChange($itemId, $result)" in controller
    assert "http_build_query" in controller
    assert "library.item_page.show" in controller


def test_detail_controller_and_template_render_tag_feedback_messages():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "tagFeedback" in controller
    assert "tagFeedback(" in controller
    assert "already-assigned" in controller
    assert "not-assignable" in controller
    assert "library-tag-feedback" in template
    assert "Tag already assigned" in template
    assert "Tag is not assignable" in template
    assert "Empty tag ignored" in template


def test_live_smoke_checks_tag_feedback_marker():
    smoke = (ROOT / "scripts" / "smoke-metadata-separation.mjs").read_text()

    assert "tag_feedback_after_add=true" in smoke
    assert "tag_feedback_after_duplicate=true" in smoke
    assert "already-assigned" in smoke


def test_docs_mark_tag_feedback_landed_but_richer_picker_future():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "tag result feedback" in guide.lower()
    assert "tag result feedback has landed" in roadmap.lower()
    assert "one-click suggested tag buttons" in guide.lower()
    assert "bulk tagging" in guide.lower()
