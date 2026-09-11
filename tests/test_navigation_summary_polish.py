from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_catalogue_uses_single_result_summary_and_compact_pagination_label():
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "library-pagination-range" in app
    assert "{{ t('library', 'Page') }} {{ pagination.page }}" in app
    assert app.count("{{ t('library', 'Showing') }}") == 1
    assert "browser_single_catalogue_result_summary" in smoke


def test_detail_diagnostic_summaries_carry_useful_counts():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "library-summary-badge" in template
    assert "scanStatus" in template.split("library-file-metadata-heading", 1)[1].split("</summary>", 1)[0]
    assert "scannerConflictCount" in template.split("library-provenance-heading", 1)[1].split("</summary>", 1)[0]
    assert "count($tags)" in template.split("library-nextcloud-metadata-heading", 1)[1].split("</summary>", 1)[0]
    assert "(int)($comments['count'] ?? 0)" in template.split("library-nextcloud-metadata-heading", 1)[1].split("</summary>", 1)[0]
    assert ".library-summary-badge" in css
    assert "browser_detail_summary_badges" in smoke


def test_navigation_summary_polish_version_bump_is_tracked_for_asset_refresh():
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()
    lock = (ROOT / "package-lock.json").read_text()
    assert "<version>0.1.0-alpha.163</version>" in info
    assert '"version": "0.1.0-alpha.163"' in package
    assert '"version": "0.1.0-alpha.163"' in lock
