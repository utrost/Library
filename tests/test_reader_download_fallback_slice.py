from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_reader_provider_builds_webdav_download_url_from_user_and_cached_path():
    provider = (ROOT / "lib" / "Reader" / "DefaultNextcloudFileProvider.php").read_text()

    assert "public function getDownloadUrl(string $userId, string $cachedPath): string" in provider
    assert "'/remote.php/dav/files/'" in provider
    assert "rawurlencode($userId)" in provider
    assert "encodePathSegments" in provider
    assert "rawurlencode($segment)" in provider
    assert "linkTo('', '/remote.php/dav" not in provider


def test_catalogue_and_detail_expose_download_url_next_to_read_and_show_in_files():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    detail_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    detail_template = (ROOT / "templates" / "item-detail.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()

    expected = "$this->readerProvider->getDownloadUrl($userId, (string)($item['cachedPath'] ?? ''))"
    assert "downloadUrl" in page
    assert "private function enrichItemsForVue(string $userId" in page
    assert "use ($fileTagsByFileId, $fileCommentsByFileId, $userId)" in page
    assert expected in page
    assert "downloadUrl" in detail_controller
    assert "$this->readerProvider->getDownloadUrl($user->getUID(), (string)($item['cachedPath'] ?? ''))" in detail_controller
    assert "$item['downloadUrl']" in detail_template
    assert "Download" in detail_template
    assert "item.downloadUrl" in vue
    assert "Download" in vue
    assert "item.downloadUrl" in fallback
    assert "Download" in fallback


def test_reader_download_fallback_documented_and_smoked():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    readme = (ROOT / "README.md").read_text()
    smoke_vue = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    smoke_browser = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "Download source" in roadmap
    assert "Download source" in readme
    assert "first_has_downloadUrl" in smoke_vue
    assert "first_downloadUrl_is_webdav" in smoke_vue
    assert "download_http" in smoke_vue
    assert "download.bytes <= 0" in smoke_vue
    assert "browser_firstDownload_is_webdav" in smoke_browser
