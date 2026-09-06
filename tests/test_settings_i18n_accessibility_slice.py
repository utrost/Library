from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_personal_settings_template_uses_nextcloud_l10n_for_visible_copy():
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "$l->t('Library settings')" in template
    assert "$l->t('Folder path')" in template
    assert "$l->t('Scan enabled roots')" in template
    assert "$l->t('Indexed files')" in template
    assert "$l->t('No indexed files yet. Add a root and scan it.')" in template


def test_personal_settings_sections_use_heading_based_accessible_names():
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert 'aria-labelledby="library-settings-heading"' in template
    assert 'id="library-settings-heading"' in template
    assert 'aria-labelledby="library-scan-progress-heading"' in template
    assert 'id="library-scan-progress-heading"' in template
    assert 'aria-labelledby="library-scan-history-heading"' in template
    assert 'id="library-scan-history-heading"' in template
    assert 'aria-labelledby="library-indexed-files-heading"' in template
    assert 'id="library-indexed-files-heading"' in template


def test_browser_smoke_checks_settings_page_accessibility_scope():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "settings_controls" in smoke
    assert "settings_labelled_sections" in smoke
    assert "settings_unlabelled_controls" in smoke
    assert "#library-settings" in smoke
