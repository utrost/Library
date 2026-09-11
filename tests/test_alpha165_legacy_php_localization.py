import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_alpha165_exact_versions_assets_and_package_contract():
    assert '<version>0.1.0-alpha.165</version>' in read('appinfo/info.xml')
    assert '"version": "0.1.0-alpha.165"' in read('package.json')
    assert "appVersion: JSON.stringify('0.1.0-alpha.165')" in read('vite.config.js')
    controller = read('lib/Controller/PageController.php')
    assert 'library-main-0-1-0-alpha-165' in controller
    assert 'library-vue-0-1-0-alpha-165' in controller
    assert 'EXPECTED_VERSION="0.1.0-alpha.165"' in read('scripts/smoke-release-package.sh')


def test_all_legacy_surfaces_resolve_and_render_locale_direction():
    providers = read('lib/Settings/Personal.php') + read('lib/Controller/ItemController.php') + read('lib/Controller/ItemPageController.php')
    assert providers.count('findLanguage(') >= 3
    assert providers.count('getLanguageDirection(') >= 3
    for template in ['settings-personal.php', 'batch-metadata-edit-preview.php', 'item-detail.php']:
        source = read(f'templates/{template}')
        assert 'lang="<?php p($_[\'language\']' in source
        assert 'dir="<?php p($_[\'direction\']' in source


def test_php_and_vue_inventory_is_complete_and_generated_catalogues_are_current():
    result = subprocess.run(['node', 'scripts/check-translations.mjs'], cwd=ROOT, text=True, capture_output=True)
    assert result.returncode == 0, result.stderr
    assert re.search(r'keys=5[5-9][0-9]', result.stdout)
    assert 'generated_catalogues_current=true' in result.stdout
    for locale in ['de', 'ar']:
        assert set(json.loads(read(f'l10n/{locale}.json'))['translations']) == set(json.loads(read('l10n/en.json'))['translations'])


def test_php_inventory_mutations_fail_closed():
    mutations = {
        'hard_coded_php_visible_text': ('templates/batch-metadata-edit-preview.php', '</main>', '<p>Untranslated mutation</p></main>'),
        'hard_coded_php_visible_attribute': ('templates/settings-personal.php', 'class="library-app', 'title="Untranslated title" class="library-app'),
    }
    for marker, (relative, needle, replacement) in mutations.items():
        with tempfile.TemporaryDirectory() as directory:
            checkout = Path(directory) / 'library'
            shutil.copytree(ROOT, checkout, ignore=shutil.ignore_patterns('.git', 'dist', 'build', 'node_modules'))
            (checkout / 'node_modules').symlink_to(ROOT / 'node_modules', target_is_directory=True)
            path = checkout / relative
            path.write_text(path.read_text().replace(needle, replacement, 1))
            result = subprocess.run(['node', 'scripts/check-translations.mjs'], cwd=checkout, text=True, capture_output=True)
            assert result.returncode != 0
            assert marker in result.stderr


def test_plural_api_and_dynamic_key_mutations_fail_closed():
    mutations = {
        'php_plural_t_misuse': ("$l->n('%n file', '%n files', count($files))", "$l->t('%n file', '%n files', count($files))"),
        'dynamic_php_translation_key': ("$l->t('File ID')", "$l->t($label)"),
    }
    for marker, (needle, replacement) in mutations.items():
        with tempfile.TemporaryDirectory() as directory:
            checkout = Path(directory) / 'library'
            shutil.copytree(ROOT, checkout, ignore=shutil.ignore_patterns('.git', 'dist', 'build', 'node_modules'))
            (checkout / 'node_modules').symlink_to(ROOT / 'node_modules', target_is_directory=True)
            path = checkout / ('templates/settings-personal.php' if marker == 'php_plural_t_misuse' else 'templates/item-detail.php')
            assert needle in path.read_text()
            path.write_text(path.read_text().replace(needle, replacement, 1))
            result = subprocess.run(['node', 'scripts/check-translations.mjs'], cwd=checkout, text=True, capture_output=True)
            assert result.returncode != 0
            assert marker in result.stderr


def test_legacy_plural_and_domain_translation_sentinels():
    de = json.loads(read('l10n/de.json'))['translations']
    ar = json.loads(read('l10n/ar.json'))['translations']
    key = '_This affects %n current result._::_This affects %n current results._'
    assert len(de[key]) == 2 and len(ar[key]) == 6
    assert de['Batch metadata edit preview'] == 'Vorschau der Stapelbearbeitung von Metadaten'
    assert ar['Batch metadata edit preview'] == 'معاينة التحرير المجمّع للبيانات الوصفية'
    assert de['Metadata source'] == 'Metadatenquelle'
    assert ar['Field sources'] == 'مصادر الحقول'
    assert ar['File metadata'] == 'البيانات الوصفية للملف'
    assert ar['Series / periodical'] == 'سلسلة / دورية'
    assert ar['Series / periodicals'] == 'سلاسل / دوريات'
    assert ar['Would change'] == 'قد يتغيّر'
    assert ar['Will change'] == 'سيتغيّر'
    assert ar['Would change'] != ar['Will change']
    assert not re.search(r'Übersetzung:|ترجمة:', read('l10n/de.json') + read('l10n/ar.json'))


def test_contextual_translation_regressions_are_exact_sentinels():
    de = json.loads(read('l10n/de.json'))['translations']
    ar = json.loads(read('l10n/ar.json'))['translations']
    assert de['Delete root'] == 'Stammordner löschen'
    assert de['Personal rating'] == 'Persönliche Bewertung'
    assert de['Preview metadata import'] == 'Metadatenimport in der Vorschau anzeigen'
    assert de['Point Library at a Nextcloud folder; it becomes a browsable shelf after scanning.'].startswith('Verknüpfen Sie')
    assert de['Scan enabled roots'] == 'Aktivierte Stammordner scannen'
    assert de['Shelves and roots'] == 'Regale und Stammordner'
    assert ar['Escape closes; arrow keys browse neighbouring visible items.'].startswith('يغلق مفتاح Esc')
    assert ar['Last opened'] == 'آخر فتح'


def test_fragment_and_ui_semantic_mutations_fail_closed_without_flagging_paths():
    mutations = [
        ('de', 'Point Library at a Nextcloud folder; it becomes a browsable shelf after scanning.', 'Point Bibliothek at a Nextcloud folder; it becomes a browsable shelf after scanning.', 'untranslated_fragment'),
        ('de', 'Personal rating', 'Persönlich rating', 'untranslated_fragment'),
        ('de', 'Review recently changed files', 'Kürzlich recently geänderte Dateien prüfen', 'untranslated_fragment'),
        ('ar', 'Useful views', 'عروض rogue', 'untranslated_fragment'),
        ('de', 'Delete root', 'Löschen Stammverzeichnis', 'semantic_sentinel_mismatch'),
        ('ar', 'Escape closes; arrow keys browse neighbouring visible items.', 'الهروب يغلق. مفاتيح الأسهم تصفح العناصر المرئية المجاورة.', 'semantic_sentinel_mismatch'),
        ('ar', 'Last opened', 'آخر افتتاح', 'semantic_sentinel_mismatch'),
        ('ar', 'File metadata', 'ملف البيانات الوصفية', 'semantic_sentinel_mismatch'),
        ('ar', 'Series / periodical', 'مسلسل / دورية', 'semantic_sentinel_mismatch'),
        ('ar', 'Would change', 'سيتغيّر', 'semantic_sentinel_mismatch'),
    ]
    for locale, key, value, marker in mutations:
        with tempfile.TemporaryDirectory() as directory:
            checkout = Path(directory) / 'library'
            shutil.copytree(ROOT, checkout, ignore=shutil.ignore_patterns('.git', 'dist', 'build', 'node_modules'))
            (checkout / 'node_modules').symlink_to(ROOT / 'node_modules', target_is_directory=True)
            path = checkout / 'l10n' / f'{locale}.json'
            data = json.loads(path.read_text())
            data['translations'][key] = value
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
            result = subprocess.run(['node', 'scripts/check-translations.mjs'], cwd=checkout, text=True, capture_output=True)
            assert result.returncode != 0
            assert marker in result.stderr

    inventory = read('scripts/check-translations.mjs')
    assert 'filename' in inventory and 'placeholders are' in inventory
    assert "replace(/\\{[A-Za-z][A-Za-z0-9_]*\\}|%(?:n|s)/g, '')" in inventory
    assert "(?:\\.?[\\w-]+\\/)+" in inventory
    assert "(?:json|zip|tsv|cbz|epub|pdf" in inventory


def test_php_plural_calls_use_nextcloud_n_and_distinct_counts_use_parameters():
    templates = [ROOT / 'templates/settings-personal.php', ROOT / 'templates/batch-metadata-edit-preview.php', ROOT / 'templates/item-detail.php']
    source = '\n'.join(path.read_text() for path in templates)
    assert not re.search(r'\$l->t\(\s*[\'\"][^\n]+,[\'\"]\s*[\'\"]', source)
    assert source.count('$l->n(') >= 8
    assert "t('%s of %s useful fields complete'" in source
    assert "n('%n of %n useful fields complete'" not in source


def test_destructive_confirmation_token_matches_controller_in_every_locale():
    controller = read('lib/Controller/RootController.php')
    assert "=== 'DELETE'" in controller
    for locale in ['en', 'de', 'ar']:
        translations = json.loads(read(f'l10n/{locale}.json'))['translations']
        assert translations['DELETE'] == 'DELETE'
        assert 'DELETE' in translations['Type DELETE to confirm']


def test_exact_package_browser_gate_executes_measured_legacy_locale_matrix():
    smoke = read('scripts/smoke-browser-page.mjs')
    assert 'async function runLegacyLocalizationGate' in smoke
    assert 'for (const locale of legacyLocalizationGate.locales)' in smoke
    assert 'for (const width of legacyLocalizationGate.widths)' in smoke
    assert '--default-value=${absentMarker}' in smoke
    assert "runOcc(['user:setting', user, 'core', 'lang', locale])" in smoke
    assert 'await runLegacyLocalizationGate(' in smoke
    gate = smoke[smoke.index('async function runLegacyLocalizationGate'):smoke.index('async function runBrowserSmoke')]
    assert "else runOcc(['user:setting', user, 'core', 'lang', '--delete'])" in gate
    assert re.search(r'finally\s*\{[\s\S]*Emulation\.clearDeviceMetricsOverride', gate)
    inspection = read('scripts/browser-legacy-inspection.mjs')
    assert 'formsCount >= formMinimum' in inspection and 'expectedFormMinimum' in inspection
    assert "form.method.toLowerCase() === 'post'" in gate
    assert 'action.origin === location.origin' in gate
    assert 'patterns.some((pattern) => pattern.test(action.pathname))' in gate
    aggregate = read('scripts/browser-legacy-localization-gate.mjs')
    assert 'missingLabels.length === 0' in aggregate and 'missingLabelIds' in gate
    assert "root.setAttribute('tabindex', '-1')" in gate
    assert 'dispatchTabKeyPairs(client' in gate
    assert "client.send('Input.dispatchKeyEvent'" in read('scripts/browser-keyboard-focus-gate.mjs')
    assert 'evaluateKeyboardTabTraversal(recorded?.samples' in gate
    assert 'expectedTargets, maximumTabSteps' in gate
    assert "root.focus({ preventScroll: true })" in gate
    assert "matches(':focus-visible')" in gate
    assert 'evaluateTranslatedControlGeometry(clipping' in inspection
    assert "association: 'containing-label'" in gate
    assert "association: 'self'" in gate
    assert 'text === spec.text' in gate
    assert 'label?.contains(node)' in gate
    assert 'expectWrapWidths?.includes(width)' in inspection
    assert 'groupsWrap' not in gate
    assert 'matching.length === widths.length' in aggregate
    assert 'row.overflow === true' in aggregate
    assert 'mobileWidths.includes(390)' in aggregate and 'mobileWidths.includes(320)' in aggregate
    assert 'mobileRows.length === expectedRowsPerWidth * mobileWidths.length' in aggregate
    assert 'legacyGate.ok === true' in smoke
    assert 'authBlocked' not in gate


def test_plural_catalogue_mutations_fail_closed_for_every_arabic_form():
    key = '_%n item_::_%n items_'
    for mutation in ['عنصر', '%n %n عنصر', '% ن عنصر']:
        with tempfile.TemporaryDirectory() as directory:
            checkout = Path(directory) / 'library'
            shutil.copytree(ROOT, checkout, ignore=shutil.ignore_patterns('.git', 'dist', 'build', 'node_modules'))
            (checkout / 'node_modules').symlink_to(ROOT / 'node_modules', target_is_directory=True)
            path = checkout / 'l10n/ar.json'
            data = json.loads(path.read_text())
            data['translations'][key][4] = mutation
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
            result = subprocess.run(['node', 'scripts/check-translations.mjs'], cwd=checkout, text=True, capture_output=True)
            assert result.returncode != 0
            assert 'plural_placeholder_mismatch' in result.stderr
