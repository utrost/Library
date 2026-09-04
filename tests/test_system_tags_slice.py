from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_tag_service_reads_visible_system_tags_for_file_ids():
    service_path = ROOT / "lib" / "Service" / "FileTagService.php"
    assert service_path.exists()
    service = service_path.read_text()
    assert "namespace OCA\\Library\\Service" in service
    assert "final class FileTagService" in service
    assert "ISystemTagObjectMapper" in service
    assert "ISystemTagManager" in service
    assert "getTagIdsForObjects($fileIds" in service
    assert "'files'" in service
    assert "getTagsByIds" in service
    assert "canUserSeeTag" in service
    assert "public function tagsForItems(array $items): array" in service


def test_page_controller_passes_nextcloud_tags_to_template():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "FileTagService $fileTagService" in page
    assert "tagsForItems($items)" in page
    assert "fileTagsByFileId" in page


def test_template_renders_nextcloud_tags_separately_from_publication_metadata():
    template = (ROOT / "templates" / "main.php").read_text()
    assert "$fileTagsByFileId" in template
    assert "Nextcloud tags" in template
    assert "nextcloudTags" in template
    assert "No Nextcloud tags" in template
