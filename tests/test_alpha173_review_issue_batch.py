from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_first_run_root_form_does_not_prefill_development_fixture_path():
    template = read("templates/settings-personal.php")
    assert 'value="/LibrarySpike"' not in template
    add_form = template.split('library-add-shelf-form', 1)[1].split('library-root-list', 1)[0]
    assert 'name="path" value=""' in add_form


def test_metadata_import_preview_is_reviewable_and_connected_to_apply():
    controller = read("lib/Controller/ImportController.php")
    template = read("templates/settings-personal.php")
    result_template = read("templates/metadata-import-result.php")
    assert "TemplateResponse" in controller
    assert "metadata-import-result" in controller
    assert "Cache-Control', 'private, no-store" in controller
    assert "Apply this reviewed import" in result_template
    assert "metadataImportApplyUrl" in result_template
    assert "matchedItems" in result_template
    assert "changedFields" in result_template
    assert "library-metadata-import-apply-reviewed-form" in result_template
    assert "library-metadata-import-apply-form" not in template
