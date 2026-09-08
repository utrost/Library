from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_settings_page_groups_dense_surfaces_into_collapsible_sections():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "library-settings-summary" in template
    assert "library-settings-section-roots" in template
    assert "library-settings-section-scan" in template
    assert "library-settings-section-portability" in template
    assert "library-settings-section-indexed-files" in template
    assert "library-settings-quick-actions" in template
    assert "Back to catalogue" in template
    assert "<details class=\"library-panel library-settings-section library-settings-section-roots\" open" in template
    assert "<details class=\"library-panel library-settings-section library-settings-section-indexed-files\"" in template
    assert ".library-settings-section > summary" in css
    assert ".library-settings-quick-actions" in css
    assert "settings_collapsible_sections" in smoke


def test_settings_sections_show_counts_before_opening():
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "library-settings-count-badge" in template
    assert "count($roots)" in template.split("library-settings-section-roots", 1)[1].split("</summary>", 1)[0]
    assert "count($scanJobHistory)" in template.split("library-settings-section-scan", 1)[1].split("</summary>", 1)[0]
    assert "count($files)" in template.split("library-settings-section-indexed-files", 1)[1].split("</summary>", 1)[0]


def test_settings_polish_version_bump_is_tracked_for_asset_refresh():
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()
    lock = (ROOT / "package-lock.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "<version>0.1.0-alpha.114</version>" in info
    assert '"version": "0.1.0-alpha.114"' in package
    assert '"version": "0.1.0-alpha.114"' in lock
    assert "app_version=0.1.0-alpha.114" in smoke
