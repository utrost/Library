from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_nextcloud_internal_links_use_absolute_url_generator_not_empty_app_linkto():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    provider = (ROOT / "lib" / "Reader" / "DefaultNextcloudFileProvider.php").read_text()

    assert "linkTo('', '/settings/user/library')" not in page
    assert "linkTo('', '/f/__FILE_ID__')" not in page
    assert "getAbsoluteURL('/settings/user/library')" in page
    assert "getAbsoluteURL('/f/' . $fileId)" in page

    assert "linkTo('', '/f/' . $fileId)" not in provider
    assert "linkTo('', '/apps/files/files/' . $fileId)" not in provider
    assert "getAbsoluteURL('/f/' . $fileId)" in provider
    assert "getShowInFilesUrl(int $fileId, string $cachedPath = '')" in provider
    assert "str_replace('%2F', '/', rawurlencode($dir))" in provider
    assert "?dir=" in provider
    assert "&openfile=false" in provider
    assert "&openfile=true" not in provider


def test_scroll_css_targets_nextcloud_app_shell_and_keeps_body_scrollable():
    css = (ROOT / "css" / "style.css").read_text()

    assert "body:has(#library-app.library-app)" not in css
    assert "#content:has(#library-app.library-app)" not in css
    assert "#app-content:has(#library-app.library-app)" not in css
    assert "#app-content.library-app-content" in css
    assert "height: 100%" in css
    assert "overflow-y: auto" in css
    assert "overflow-x: hidden" in css

    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    shell = (ROOT / "js" / "library-shell.js").read_text()
    assert "Util::addScript(Application::APP_ID, 'library-shell');" in page
    assert "document.getElementById('app-content')" in shell
    assert "document.getElementById('content')" not in shell
    assert "appContent.style.overflowY = 'auto'" in shell
    assert "appContent.style.height = '100%'" in shell


def test_filter_bar_and_gallery_wrap_instead_of_forcing_horizontal_overflow():
    css = (ROOT / "css" / "style.css").read_text()

    assert ".library-filter-bar" in css
    assert "grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))" in css
    assert "max-width: 100%" in css
    assert "min-width: 0" in css


def test_existing_route_docs_mention_verified_link_scroll_regression():
    readme = (ROOT / "README.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "absolute nextcloud urls" in readme
    assert "vue/vite-backed catalogue page" in readme
    assert "absolute nextcloud urls" in roadmap
    assert "vue/vite catalogue mounted" in roadmap
