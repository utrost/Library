from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_metadata_form_uses_roomier_primary_fields_and_stable_save_area():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-detail-edit-form--autosave" in template
    assert "library-detail-title-field" in template
    assert "library-detail-description-field" in template
    assert "rows=\"10\"" in template
    assert "library-detail-save-row" in template
    assert "library-save-feedback" in template
    assert "Metadata saved" in template
    assert "Changes save automatically" in template

    assert ".library-detail-edit-form" in css
    assert "grid-template-columns: repeat(6, minmax(0, 1fr))" in css
    assert ".library-detail-field-wide" in css
    assert "grid-column: span 3" in css
    assert ".library-detail-field-full" in css
    assert "grid-column: 1 / -1" in css
    assert ".library-detail-save-row" in css
    assert "min-height" in css


def test_detail_metadata_form_replaces_semicolon_only_editing_with_assisted_multivalue_controls():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "name=\"creators\"" in template
    assert "library-creators-field" in template
    assert "One creator per line" in template
    assert "Separate multiple creators with semicolons." not in template

    assert "multiple" in template.split('name="language[]"', 1)[1].split("</select>", 1)[0]
    assert "library-language-picklist" in template
    assert "'de' => 'German (de)'" in template
    assert "'en' => 'English (en)'" in template

    assert "multiple" in template.split('name="genres[]"', 1)[1].split("</select>", 1)[0]
    assert "library-genre-picklist" in template
    assert "science fiction" in template
    assert "photography" in template

    assert "list=\"library-publisher-suggestions\"" in template
    assert "datalist id=\"library-publisher-suggestions\"" in template
    assert "Packt" in template


def test_detail_metadata_controller_accepts_autosave_and_array_multiselect_values():
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    detail_js = (ROOT / "js" / "library-detail.js").read_text()
    browser_smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "metadataAutosave" in controller
    assert "normalizeCreatorInput" in controller
    assert "normalizeRequestList" in controller
    assert "getParam('language', $this->request->getParam('language[]'" in controller
    assert "getParam('genres', $this->request->getParam('genres[]'" in controller

    assert "normalizeLanguageList" in service
    assert "preg_split('/[;,\\n]+/u', $language" in service

    assert "LibraryDetailMetadataAutosave" in detail_js
    assert "setupMetadataAutosave" in detail_js
    assert "library-detail-autosave-status" in detail_js
    assert "window.fetch" in detail_js
    assert "credentials: 'same-origin'" in detail_js
    assert "browser_detail_v01_metadata_form_polish" in browser_smoke
