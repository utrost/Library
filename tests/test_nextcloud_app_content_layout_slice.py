from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_main_template_leaves_the_application_shell_to_nextcloud_vue():
    template = (ROOT / "templates" / "main.php").read_text()

    assert '<div id="app-content" class="library-app-content">' not in template
    assert '<div id="library-vue-root"' in template
    assert '<main id="library-app" class="library-app"' in template
    assert template.index('id="library-vue-root"') < template.index('<noscript>')


def test_vue_catalogue_uses_the_public_nextcloud_application_shell_components():
    component = (ROOT / "src" / "App.vue").read_text()

    for name in (
        "NcContent",
        "NcAppNavigation",
        "NcAppNavigationList",
        "NcAppNavigationItem",
        "NcAppContent",
        "NcAppSidebar",
    ):
        assert name in component
    assert '<NcAppSidebar :open="false" no-toggle' in component
    assert 'class="library-navigation-settings-link" :href="settingsUrl"' in component


def test_css_leaves_nextcloud_content_shell_clipped_and_scrolls_app_content():
    css = (ROOT / "css" / "style.css").read_text()

    assert "#content:has(#library-app.library-app)" not in css
    assert "body:has(#library-app.library-app)" not in css
    assert ".library-app-content" in css
    assert "#app-content.library-app-content" in css
    assert "height: 100%" in css
    assert "overflow-y: auto" in css
    assert "overflow-x: hidden" in css


def test_scroll_shell_script_does_not_override_nextcloud_content_viewport():
    shell = (ROOT / "js" / "library-shell.js").read_text()

    assert "document.getElementById('content')" not in shell
    assert "document.body" not in shell
    assert "document.documentElement" not in shell
    assert "document.getElementById('app-content')" in shell
    assert "appContent.style.overflowY = 'auto'" in shell
    assert "appContent.style.height = '100%'" in shell
