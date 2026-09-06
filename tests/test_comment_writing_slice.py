from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_comment_service_can_add_comment_to_item_source_file():
    service = (ROOT / "lib" / "Service" / "FileCommentService.php").read_text()
    assert "IDBConnection" in service
    assert "public function addCommentToItem(string $userId, int $itemId, string $message): void" in service
    assert "findFileIdForItem" in service
    assert "create('users', $userId, 'files', (string)$fileId)" in service
    assert "setMessage($message)" in service
    assert "setVerb('comment')" in service
    assert "save($comment)" in service


def test_comment_controller_and_route_are_wired():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "comment#add" in routes
    assert "/items/{itemId}/comments" in routes

    controller_path = ROOT / "lib" / "Controller" / "CommentController.php"
    assert controller_path.exists()
    controller = controller_path.read_text()
    assert "final class CommentController" in controller
    assert "FileCommentService $fileCommentService" in controller
    assert "public function add(int $itemId): RedirectResponse" in controller
    assert "commentMessage" in controller
    assert "addCommentToItem" in controller


def test_page_controller_passes_comment_post_url_to_template():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "commentUrl" in page
    assert "library.comment.add" in page


def test_template_has_add_nextcloud_comment_form_separate_from_metadata_edit():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    detail_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    assert "$item['commentUrl']" in template
    assert "library-detail-comment-form" in template
    assert "Add Nextcloud comment" in template
    assert "name=\"commentMessage\"" in template
    assert "file-level note..." in template
    assert "library.comment.add" in detail_controller
