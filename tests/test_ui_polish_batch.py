from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_page_collapses_diagnostics_and_shows_difference_first_provenance():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-detail-diagnostic-section" in template
    assert "<details class=\"library-panel library-detail-diagnostic-section library-detail-section-file\"" in template
    assert "<details class=\"library-panel library-detail-diagnostic-section library-detail-section-provenance\"" in template
    assert "<details class=\"library-panel library-detail-diagnostic-section library-detail-section-nextcloud\"" in template
    assert "library-provenance-differences" in template
    assert "Only fields that currently differ from scanner candidates are shown first." in template
    assert "library-provenance-all-fields" in template
    assert "Show all scanner provenance" in template
    assert "No scanner differences for this item." in template
    assert ".library-detail-diagnostic-section > summary" in css
    assert ".library-provenance-differences" in css


def test_detail_page_has_inline_tag_chip_remove_and_save_feedback():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    item_controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "metadataSaved" in controller
    assert "metadataSaved" in item_controller
    assert "library-save-feedback" in template
    assert "Metadata saved" in template
    assert "library-tag-chip-remove" in template
    assert "aria-label=\"<?php p($l->t('Remove tag: %s'" in template
    assert "×" in template
    assert "library-tag-remove-list" not in template
    assert ".library-tag-chip-remove" in css
    assert ".library-save-feedback" in css


def test_detail_page_workflow_status_is_pill_styled():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-workflow-status-pill" in template
    assert "Workflow status" in template
    assert ".library-workflow-status-pill" in css
    assert "border-radius: 999px" in css.split(".library-workflow-status-pill", 1)[1].split("}", 1)[0]


def test_catalogue_has_top_toolbar_filter_summary_empty_actions_and_structured_card_details():
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    css = (ROOT / "css" / "style.css").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    for source in (app, fallback):
        assert "library-catalogue-header" in source
        assert "library-filter-result-summary" in source
        assert "Clear all filters" in source
        assert "library-empty-actions" in source
        assert "Run a scan from settings" in source
        assert "library-cover-detail-list" in source
        assert "library-cover-detail-chip" in source

    assert "library-catalogue-workspace" in app

    assert "library-secondary-panel" not in app
    assert ".library-catalogue-header" in css
    assert ".library-catalogue-workspace" in css
    assert ".library-cover-detail-chip" in css
    assert "browser_catalogue_toolbar" in smoke
    assert "browser_filter_result_summary" in smoke
    assert "browser_card_detail_chips" in smoke


def test_ui_polish_version_bump_is_tracked_for_nextcloud_asset_refresh():
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()
    lock = (ROOT / "package-lock.json").read_text()

    assert "<version>0.1.0-alpha.149</version>" in info
    assert '"version": "0.1.0-alpha.149"' in package
    assert '"version": "0.1.0-alpha.149"' in lock
