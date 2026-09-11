from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_comment_service_reads_recent_comments_for_file_ids():
    service_path = ROOT / "lib" / "Service" / "FileCommentService.php"
    assert service_path.exists()
    service = service_path.read_text()
    assert "namespace OCA\\Library\\Service" in service
    assert "final class FileCommentService" in service
    assert "ICommentsManager" in service
    assert "getForObject('files'" in service
    assert "getNumberOfCommentsForObjects('files'" in service
    assert "public function commentsForItems(array $items): array" in service
    assert "getMessage()" in service
    assert "getActorType()" in service
    assert "getActorId()" in service
    assert "getCreationDateTime()" in service


def test_catalogue_payload_omits_comments_while_detail_comments_remain_available():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    detail = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    assert "use OCA\\Library\\Service\\FileCommentService;" not in page
    assert "FileCommentService $fileCommentService" not in page
    assert "commentsForItems($items)" not in page
    assert "fileCommentsByFileId" not in page
    assert "commentsForItems([$item])" in detail
    assert "nextcloudComments" in detail


def test_detail_template_renders_nextcloud_comments_as_discussion_not_metadata():
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    assert "nextcloudComments" in detail
    assert "Nextcloud comments" in detail
    assert "No Nextcloud comments" in detail
    assert "Add Nextcloud comment" in detail
    assert "commentMessage" in detail
