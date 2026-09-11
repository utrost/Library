import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def placeholders(value: str) -> list[str]:
    if isinstance(value, list):
        return [placeholders(entry) for entry in value]
    return sorted(re.findall(r"%(?:n|s)|\{[A-Za-z][A-Za-z0-9_]*\}", value))


def test_current_versions_assets_and_package_smoke_are_exact():
    assert '<version>0.1.0-alpha.165</version>' in read('appinfo/info.xml')
    assert '"version": "0.1.0-alpha.165"' in read('package.json')
    assert "appVersion: JSON.stringify('0.1.0-alpha.165')" in read('vite.config.js')
    controller = read('lib/Controller/PageController.php')
    assert "library-main-0-1-0-alpha-165" in controller
    assert "library-vue-0-1-0-alpha-165" in controller
    assert 'EXPECTED_VERSION="0.1.0-alpha.165"' in read('scripts/smoke-release-package.sh')


def test_native_and_watchdog_visible_copy_uses_nextcloud_translation_api():
    app = read('src/App.vue')
    forbidden = [
        'placeholder="Camera, Eco, Rolleiflex, description or folder..."',
        'title="Exact full-field creator matches only"',
        ':aria-label="`Read ${item.title}`"',
        ':alt="`Cover for ${item.title}`"',
        '>No Nextcloud tags<',
        '>{{ item.scannerConflictCount }} fields<',
        'aria-label="Discovery summary"',
        'aria-label="Cover view mode"',
    ]
    assert not [value for value in forbidden if value in app]
    main = read('templates/main.php')
    for copy in ['Library could not start', 'Reload Library', 'JavaScript is disabled']:
        assert f"$l->t('{copy}')" in main
    assert "use OCP\\IL10N;" in read('lib/Controller/ItemPageController.php')


def test_catalogues_are_complete_real_locales_with_matching_placeholders():
    source = json.loads(read('l10n/en.json'))['translations']
    assert source
    for locale in ['de', 'ar']:
        translated = json.loads(read(f'l10n/{locale}.json'))['translations']
        assert set(translated) == set(source)
        assert all(value for value in translated.values())
        assert all(
                (key.startswith('_') and '_::_' in key) or placeholders(key) == placeholders(value)
            for key, value in translated.items()
        )
    assert json.loads(read('l10n/de.json'))['translations']['Library'] == 'Bibliothek'
    assert json.loads(read('l10n/ar.json'))['translations']['Library'] == 'المكتبة'
    assert json.loads(read('l10n/ar.json'))['pluralForm'].startswith('nplurals=6;')


def run_mutated_inventory(mutator):
    with tempfile.TemporaryDirectory() as directory:
        checkout = Path(directory) / 'library'
        shutil.copytree(ROOT, checkout, ignore=shutil.ignore_patterns('node_modules', '.git', 'dist'))
        (checkout / 'node_modules').symlink_to(ROOT / 'node_modules', target_is_directory=True)
        mutator(checkout)
        return subprocess.run(
            ['node', 'scripts/check-translations.mjs'], cwd=checkout,
            text=True, capture_output=True, check=False,
        )


def catalogue_mutation(locale, mutation):
    def mutate(root):
        path = root / 'l10n' / f'{locale}.json'
        data = json.loads(path.read_text())
        mutation(data['translations'])
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    return mutate


def test_translation_inventory_negative_mutations_fail_closed():
    mutations = [
        ('missing_translation', catalogue_mutation('de', lambda values: values.pop('Library'))),
        ('stale_translation', catalogue_mutation('de', lambda values: values.__setitem__('Stale test key', 'Veraltet'))),
        ('placeholder_mismatch', catalogue_mutation('de', lambda values: values.__setitem__('Read {title}', 'Lesen'))),
        ('source_identical_translation', catalogue_mutation('de', lambda values: values.__setitem__('Library', 'Library'))),
        ('malformed_catalogue', lambda root: (root / 'l10n/de.json').write_text('{')),
        ('hard_coded_visible_text', lambda root: (root / 'src/App.vue').write_text(
            (root / 'src/App.vue').read_text().replace('</template>', '<p title="Visible title">New visible copy</p></template>')
        )),
    ]
    for marker, mutation in mutations:
        result = run_mutated_inventory(mutation)
        assert result.returncode != 0, (marker, result.stdout, result.stderr)
        assert marker in result.stderr, (marker, result.stdout, result.stderr)


def test_plural_catalogues_cover_german_and_all_six_arabic_forms():
    key = '_%n item_::_%n items_'
    de = json.loads(read('l10n/de.json'))['translations'][key]
    ar = json.loads(read('l10n/ar.json'))['translations'][key]
    assert de == ['%n Element', '%n Elemente']
    assert ar == [
        '%n عنصر', '%n عنصر', '%n عنصران', '%n عناصر', '%n عنصرًا', '%n عنصر',
    ]
    app = read('src/App.vue')
    assert "import { n, t } from '@nextcloud/l10n'" in app
    assert "n('library', '%n item', '%n items'" in app
    assert "t('library', 'items')" not in app
    plural_indexes = subprocess.run([
        'node', '--input-type=module', '-e',
        "import {getPlural} from '@nextcloud/l10n'; console.log(JSON.stringify({de:[0,1,2].map(n=>getPlural(n,'de')),ar:[0,1,2,3,11,100].map(n=>getPlural(n,'ar'))}))",
    ], cwd=ROOT, text=True, capture_output=True, check=True)
    assert json.loads(plural_indexes.stdout) == {'de': [1, 0, 1], 'ar': [0, 1, 2, 3, 4, 5]}


def test_inventory_and_browser_smoke_fail_closed_for_rtl_and_long_copy():
    inventory = read('scripts/check-translations.mjs')
    assert 'placeholder_mismatch' in inventory
    assert 'missing_translation' in inventory
    assert 'hard_coded_visible_text' in inventory
    assert "from '@vue/compiler-dom'" in inventory
    assert "from '@vue/compiler-sfc'" in inventory
    package = json.loads(read('package.json'))
    assert 'check:translations' in package['scripts']
    assert 'node scripts/check-translations.mjs' in package['scripts']['check:translations']
    assert 'node scripts/generate-l10n.mjs' in package['scripts']['build:translations']
    assert 'check:translations' in read('scripts/check.sh')
    smoke = read('scripts/smoke-browser-page.mjs')
    for marker in [
        'browser_locale_de', 'browser_locale_ar', 'browser_rtl_direction',
        'browser_rtl_language_attribute', 'browser_rtl_direction_attribute',
        'browser_rtl_desktop_no_horizontal_overflow',
        'browser_rtl_mobile_no_horizontal_overflow',
        'browser_rtl_logical_layout_mirrored', 'browser_long_string_no_clipping',
        'browser_normal_console_errors', 'browser_normal_csp_errors',
        'browser_normal_failed_asset_requests',
    ]:
        assert marker in smoke


def test_catalogue_surface_uses_nextcloud_resolved_language_direction():
    controller = read('lib/Controller/PageController.php')
    template = read('templates/main.php')
    assert 'use OCP\\L10N\\IFactory;' in controller
    assert 'private IFactory $l10nFactory' in controller
    assert "$this->l10nFactory->findLanguage(Application::APP_ID)" in controller
    assert '$this->l10nFactory->getLanguageDirection($language)' in controller
    assert "'language' => $language" in controller
    assert "'direction' => $direction" in controller
    assert 'lang="<?php p($_[\'language\']); ?>"' in template
    assert 'dir="<?php p($_[\'direction\']); ?>"' in template


def test_browser_geometry_regression_is_app_scoped_wrapping_at_both_widths():
    smoke = read('scripts/smoke-browser-page.mjs')
    gate = read('scripts/browser-geometry-gate.mjs')
    regression = read('src/browser-geometry-gate.test.js')
    css = read('src/App.vue')
    assert 'localization-fixture' in smoke
    assert 'fixtureCards >= 3' in smoke
    assert 'getComputedStyle(app).direction' in smoke
    assert "app.getAttribute('dir')" in smoke
    assert "app.getAttribute('lang')" in smoke
    assert 'control.scrollWidth > control.clientWidth + 1' in smoke
    assert 'longControlsUnclipped' in smoke
    assert 'browser_locale_de_missing_expected_strings' in smoke
    assert 'browser_locale_ar_missing_expected_strings' in smoke
    assert 'browser_long_string_desktop_geometry' in smoke
    assert 'browser_long_string_mobile_geometry' in smoke
    assert "id: 'admin-summary'" in smoke
    assert "id: 'settings-action'" in smoke
    assert "id: 'metadata-export-action'" in smoke
    assert 'exactText: text === spec.text' in smoke
    assert 'associated: true' in smoke
    assert 'designatedLong: Boolean(spec.designatedLong)' in smoke
    assert 'scrollHeight: control.scrollHeight' in smoke
    assert 'keyboardFocus' in smoke
    assert 'sidebarOpened' in smoke
    assert 'width: 1280' in smoke
    assert 'width: 390' in smoke
    assert 'cards.length >= 3' in smoke
    assert "control.whiteSpace === 'normal'" in gate
    assert 'measureVisibleTextLines.toString()' in smoke
    assert 'control.lineCount >= 2' in gate
    assert 'control.textRectCount >= 2' in gate
    assert 'control.textMeasured === true' in gate
    assert 'expectedWrappedControls.every' in gate
    assert 'expectWrap: spec.expectWrap === true' in smoke
    assert 'control.scrollWidth <= control.clientWidth + clippingTolerance' in gate
    assert 'accepts a long label that fits on one line' in regression
    assert 'fails for clipping beyond the rounding tolerance' in regression
    assert 'fails expected-wrap one-line text' in regression
    assert 'accepts desktop-fit rows with no expected wrapping' in regression
    assert 'overflow-wrap: anywhere' in css
    assert '.library-catalogue-actions-list .button' in css
    assert 'white-space: normal' in css


def test_release_audit_requires_all_generated_app_catalogues():
    audit = read('scripts/audit-release-package.sh')
    assert 'for locale in ("en", "de", "ar")' in audit
    assert 'f"{top}/l10n/{locale}.js"' in audit
    assert 'f"{top}/l10n/{locale}.json"' in audit


def test_browser_catalogues_are_generated_exactly_from_validated_json():
    package = json.loads(read('package.json'))
    assert package['scripts']['build:translations'] == 'node scripts/generate-l10n.mjs'
    result = subprocess.run(
        ['node', 'scripts/generate-l10n.mjs', '--check'], cwd=ROOT,
        text=True, capture_output=True, check=False,
    )
    assert result.returncode == 0, result.stderr
    assert 'generated_catalogues_current=true' in result.stdout


def test_independently_reviewed_translation_meanings_are_pinned():
    de = json.loads(read('l10n/de.json'))['translations']
    ar = json.loads(read('l10n/ar.json'))['translations']
    expected_de = {
        'Refreshing metadata overview…': 'Metadatenübersicht wird aktualisiert…',
        'Review pagination': 'Seitennavigation der Prüfung',
        'Showing': 'Angezeigt',
    }
    expected_ar = {
        'No enabled Library roots': 'لا توجد جذور مكتبة مُفعّلة',
        'all enabled roots': 'جميع الجذور المُفعّلة',
        'Enable a saved root in settings, then scan enabled roots to refresh the catalogue.': 'فعّل جذرًا محفوظًا في الإعدادات، ثم افحص الجذور المُفعّلة لتحديث الكتالوج.',
        'Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.': 'أجرِ فحصًا من الإعدادات لفهرسة الجذور المُفعّلة. تبقى الملفات المصدرية في ملفات Nextcloud.',
        'Issue order': 'ترتيب الأعداد',
        'Tag scanner-conflict rows': 'وسم صفوف تعارض الماسح الضوئي',
    }
    assert {key: de[key] for key in expected_de} == expected_de
    assert {key: ar[key] for key in expected_ar} == expected_ar
    sentinels = json.loads(read('scripts/translation-semantic-sentinels.json'))
    assert all(sentinels['de'][key] == value for key, value in expected_de.items())
    assert all(sentinels['ar'][key] == value for key, value in expected_ar.items())


def test_touched_native_css_uses_logical_properties():
    css = read('src/App.vue') + read('css/style.css')
    physical = re.findall(r'(?<![-\w])(margin|padding|border)-(left|right)\s*:', css)
    assert not physical
    assert 'inset-inline' in css or 'margin-inline' in css or 'padding-inline' in css


def test_release_docs_state_exact_coverage_and_boundaries():
    release = read('RELEASE.md')
    compact_release = ' '.join(release.split())
    assert '0.1.0-alpha.164' in release
    assert 'native Library' in release
    assert 'legacy' in release.lower()
    assert 'alpha.165' in release
    assert 'alpha.166' in release
    assert 'every pre-remediation alpha.164 archive, checksum, and package report is superseded and non-controlling' in compact_release
    assert 'Alpha.164 controlling post-remediation verification evidence:' in release
    for evidence in [
        'passed 801 Python tests and 98 Vitest tests',
        '335 keys, 79 semantic sentinels, and 3 locales',
        '102 archive entries and 804224 frontend bytes',
        'Installation of the exact generated archive succeeded',
        'release_package_smoke_ok=true',
        'German and Arabic rendering',
        'expected `lang`/`dir` values',
        'RTL desktop and mobile checks passed without overflow and with mirrored layout',
        'Keyboard operation, the item sidebar, and the mobile drawer passed',
        'complete startup failure matrix passed',
        'zero console, CSP, or asset failures',
        'Cover privacy and deterministic second-user isolation passed',
    ]:
        assert evidence in release
    assert 'final exact package must still be rebuilt' not in compact_release
    assert 'no alpha.164 archive, checksum, or package rehearsal is controlling release evidence' not in compact_release


def test_release_chronology_separates_alpha164_localization_from_alpha163_watchdog():
    changelog = read('CHANGELOG.md')
    alpha164 = changelog.split('## v0.1.0-alpha.164', 1)[1].split('## v0.1.0-alpha.163', 1)[0]
    alpha163 = changelog.split('## v0.1.0-alpha.163', 1)[1].split('## v0.1.0-alpha.162', 1)[0]
    assert 'German and Arabic' in alpha164
    assert 'RTL' in alpha164
    assert 'Retired the duplicate client-side catalogue renderer' not in alpha164
    assert 'independently loaded, CSP-safe startup watchdog' not in alpha164
    assert 'startup watchdog' in alpha163

    roadmap_summary = read('docs/roadmap.md').split('## Phase 0', 1)[0]
    assert 'alpha.163 retired the duplicate catalogue renderer after adding an accessible startup watchdog and exact-package failure matrix' in roadmap_summary
    assert 'alpha.164 added localization and RTL support' in roadmap_summary
    assert 'alpha.164 retired the duplicate catalogue renderer' not in roadmap_summary
