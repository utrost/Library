from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_default_nextcloud_file_provider_exists_and_builds_short_file_urls():
    provider_path = ROOT / "lib" / "Reader" / "DefaultNextcloudFileProvider.php"
    assert provider_path.exists(), "DefaultNextcloudFileProvider must exist"
    provider = provider_path.read_text()
    assert "namespace OCA\\Library\\Reader" in provider
    assert "final class DefaultNextcloudFileProvider" in provider
    assert "IURLGenerator" in provider
    assert "public function getOpenUrl(int $fileId): string" in provider
    assert "getAbsoluteURL('/f/' . $fileId)" in provider


def test_page_controller_uses_default_reader_provider_not_inline_file_url_logic():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "use OCA\\Library\\Reader\\DefaultNextcloudFileProvider" in page
    assert "DefaultNextcloudFileProvider $readerProvider" in page
    assert "$this->readerProvider->getShowInFilesUrl($fileId)" in page
    assert "linkTo('', '/f/'" not in page


def test_reader_provider_is_documented_as_default_handoff_boundary():
    doc = (ROOT / "docs" / "reader-handoff-spike.md").read_text()
    assert "DefaultNextcloudFileProvider" in doc
    assert "reader-provider boundary" in doc
