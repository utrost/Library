from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scan_changes_panel_uses_human_labels_and_explains_outcome():
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "library-scan-changes-intro" in template
    assert "Library compared the scanned files with its catalogue index." in template
    assert "Moved or renamed" in template
    assert "Added" in template
    assert "Unchanged" in template
    assert "Missing" in template
    assert "Metadata errors" in template
    assert "<dt>filesAdded</dt>" not in template
    assert "<dt>pathsUpdated</dt>" not in template
    assert "<dt>filesUnchanged</dt>" not in template
    assert "<dt>filesMissing</dt>" not in template


def test_scan_changes_panel_renders_metric_cards_and_priority_actions():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "library-scan-change-grid" in template
    assert "library-scan-change-card--attention" in template
    assert "library-scan-change-card--calm" in template
    assert "data-library-scan-files-added" in template
    assert "data-library-scan-paths-updated" in template
    assert "data-library-scan-metadata-errors" in template
    assert "Review recently changed files" in template
    assert "Review files missing from disk" in template
    assert ".library-scan-changes-heading .library-settings-count-badge" in css
    assert "white-space: nowrap" in css
    assert "settings_has_scan_changes_ux=" in smoke


def test_scan_changes_panel_docs_describe_human_review_panel():
    docs = (ROOT / "docs" / "user-guide.md").read_text() + "\n" + (ROOT / "CHANGELOG.md").read_text()

    assert "human-readable scan change cards" in docs
    assert "recently changed files" in docs
    assert "files missing from disk" in docs
