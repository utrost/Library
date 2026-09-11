from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_catalogue_uses_nextcloud_l10n_for_visible_copy():
    package = (ROOT / "package.json").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert '"@nextcloud/l10n"' in package
    assert "import { t } from '@nextcloud/l10n'" in app
    assert "t('library', 'Library')" in app
    assert "t('library', 'Publication catalogue')" not in app
    assert "t('library', 'Apply filters')" in app


def test_catalogue_sections_and_controls_have_stable_accessible_names():
    app = (ROOT / "src" / "App.vue").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert 'aria-labelledby="library-catalogue-heading"' in app
    assert 'id="library-catalogue-heading"' in app
    assert "browser_unlabelled_controls" in smoke
    assert "print('browser_catalogue_labelled', dom.catalogueLabelled)" in smoke
