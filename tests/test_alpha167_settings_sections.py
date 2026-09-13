from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SETTINGS = (ROOT / "templates/settings-personal.php").read_text()
PERSONAL = (ROOT / "lib/Settings/Personal.php").read_text()


def test_settings_default_is_bounded_and_has_exactly_four_groups():
    assert "listFiles($this->userId)" not in PERSONAL
    assert "fileStatusCounts($this->userId)" in PERSONAL
    assert "library-index-row" not in SETTINGS
    for heading in ("Folders and scanning", "Metadata and covers", "Import and export", "Diagnostics"):
        assert SETTINGS.count(f"$l->t('{heading}')") == 1


def test_scan_progress_remains_visible_and_history_is_collapsed():
    assert "library-scan-progress" in SETTINGS
    assert '<details class="library-scan-history"' in SETTINGS
    assert '<details class="library-scan-history" open' not in SETTINGS
