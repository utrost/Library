from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_settings_folder_picker_progressively_enhances_path_fields():
    template = (ROOT / "templates/settings-personal.php").read_text()
    script = (ROOT / "js/settings-folder-picker-dialog.js").read_text()

    assert template.count('name="path"') == 2
    assert template.count("data-library-folder-picker") == 2
    assert template.count("data-library-folder-picker data-picker-title=") == 2
    assert template.count("hidden><?php p($l->t('Choose folder'))") == 2
    assert "aria-describedby=\"library-new-root-path-help\"" in template
    assert "library-root-path-help-<?php p((string)$root['id']); ?>" in template
    assert "const dialogs = window.OC?.dialogs" in script
    assert "typeof dialogs?.filepicker !== 'function'" in script
    assert "dialogs.filepicker(" in script
    assert "button.hidden = false" in script
    assert "form?.querySelector('input[name=\"path\"]')" in script
    assert "'httpd/unix-directory'" in script
    assert "true,\n                    undefined,\n                    pathInput.value || '/'" in script
    assert "event.preventDefault()" in script
    assert "pickerResult.catch(() => {" in script
    assert "pickerResult.catch(showPickerError)" not in script
    assert "catch (error)" in script
    assert "feedback.setAttribute('role', 'alert')" in script
    assert template.count("data-picker-error=") == 2
    assert "pathInput.value || '/'" in script


def test_settings_folder_picker_asset_is_loaded_and_packaged():
    settings = (ROOT / "lib/Settings/Personal.php").read_text()
    manifest = (ROOT / "scripts/release-frontend-manifest.mjs").read_text()
    audit = (ROOT / "scripts/audit-release-package.sh").read_text()

    assert "Util::addScript(Application::APP_ID, 'settings-folder-picker-dialog');" in settings
    assert "'js/settings-folder-picker-dialog.js'" in manifest
    assert '"js/settings-folder-picker-dialog.js"' in audit
