from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_indexed_file_layout_and_machine_paths_are_scoped_and_contained():
    css = (ROOT / "css/style.css").read_text()
    template = (ROOT / "templates/settings-personal.php").read_text()
    assert '.library-settings-section-indexed-files' in css
    assert 'box-sizing: border-box' in css
    assert 'overflow-wrap: anywhere' in css
    assert '.library-settings-section-indexed-files .library-bidi-machine' in css
    assert '<bdi class="library-bidi-machine" dir="ltr">' in template


def test_smoke_opens_indexed_files_before_geometry_observation():
    smoke = (ROOT / "scripts/smoke-browser-page.mjs").read_text()
    assert 'library-settings-section-indexed-files' in smoke
    assert 'indexed.open = true' in smoke
    assert 'openedIndexedFilesGeometry' in smoke


def test_batch_mobile_card_fields_use_stable_uniform_definition_list_contract():
    template = (ROOT / "templates/batch-metadata-edit-preview.php").read_text()
    smoke = (ROOT / "scripts/smoke-browser-page.mjs").read_text()
    for field in ("item", "current", "new"):
        assert f'library-batch-preview-field--{field}' in template
        assert f'.library-batch-preview-field--{field}' in smoke
    assert '<p class="library-muted"><?php p($l->t(\'Item\')); ?>' not in template
    assert 'dl > div:nth-child' not in smoke
