import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_package_exposes_pinned_playwright_gui_commands():
    package = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))

    assert "@playwright/test" in package["devDependencies"]
    assert package["scripts"]["test:gui"] == "playwright test"
    assert package["scripts"]["test:gui:desktop"] == "playwright test --project=desktop-chromium --project=desktop-firefox"
    assert package["scripts"]["test:gui:mobile"] == "playwright test --project=mobile-chromium"


def test_playwright_config_defines_reproducible_projects_and_diagnostics():
    config = (ROOT / "playwright.config.ts").read_text(encoding="utf-8")

    for marker in (
        "PW_BASE_URL",
        "tests/gui",
        "desktop-chromium",
        "desktop-firefox",
        "mobile-chromium",
        "trace: 'on-first-retry'",
        "screenshot: 'only-on-failure'",
        "video: 'retain-on-failure'",
    ):
        assert marker in config


def test_gui_catalogue_registers_initial_workflows():
    catalogue = (ROOT / "tests/gui/catalogue.yaml").read_text(encoding="utf-8")

    for marker in (
        "catalogue-search-detail",
        "catalogue-filter-chips-clear-all",
        "details-metadata-edit-persistence",
        "settings-folder-picker-existing-user",
        "mobile-catalogue-filters",
        "tags: [catalogue, detail, smoke]",
        "tags: [catalogue, filters, regression, desktop]",
        "tags: [details, metadata, smoke, mutation]",
        "tags: [settings, folder-picker, regression]",
        "tags: [catalogue, filters, mobile, smoke]",
    ):
        assert marker in catalogue

    files = [line.split(":", 1)[1].strip() for line in catalogue.splitlines() if line.strip().startswith("file:")]
    assert len(files) == 5
    assert len(set(files)) == len(files)
    for relative_path in files:
        assert (ROOT / relative_path).is_file(), relative_path


def test_gui_specs_attach_error_listeners_before_login_and_scope_known_exception():
    catalogue = (ROOT / "tests/gui/catalogue/catalogue-search-detail.spec.ts").read_text(encoding="utf-8")
    filters = (ROOT / "tests/gui/catalogue/catalogue-filter-chips-clear-all.spec.ts").read_text(encoding="utf-8")
    metadata = (ROOT / "tests/gui/details/metadata-edit-persistence.spec.ts").read_text(encoding="utf-8")
    settings = (ROOT / "tests/gui/settings/folder-picker-existing-user.spec.ts").read_text(encoding="utf-8")
    mobile = (ROOT / "tests/gui/mobile/mobile-catalogue-filters.spec.ts").read_text(encoding="utf-8")

    for source in (catalogue, filters, metadata, settings, mobile):
        assert source.index("collectBrowserFailures(page") < source.index("await login(page)")
        assert "assertKnownNextcloudLoginFailuresAndClear(browserFailures)" in source
    assert "FilePicker: No nodes selected" in settings
    assert "browserFailures.assertNone()" in settings
    assert "browserFailures.assertNoneOrExactSetAndClear" in settings
    assert "requiredPositiveIntegerEnvironment('PW_EXPECTED_CARDS')" in catalogue


def test_disposable_rehearsal_runs_playwright_with_ephemeral_credentials():
    smoke = (ROOT / "scripts/smoke-fresh-install-mixed.sh").read_text(encoding="utf-8")

    assert 'EXPECTED_BROWSER_CARDS=$(( COUNT < 100 ? COUNT : 100 ))' in smoke
    assert 'PW_BASE_URL="$BASE_URL"' in smoke
    assert 'PW_USER="$ADMIN_USER"' in smoke
    assert 'PW_PASSWORD="$ADMIN_PASS"' in smoke
    assert 'PW_EXPECTED_CARDS="$EXPECTED_BROWSER_CARDS"' in smoke
    assert 'PW_ROOT_PATH="$GUI_ROOT_PATH"' in smoke
    assert 'PW_ITEM_ID="$GUI_ITEM_ID"' in smoke
    assert 'PW_SEARCH_TITLE="$GUI_SEARCH_TITLE"' in smoke
    assert "source_tree_unchanged_after_gui=true" in smoke
    assert "npm run test:gui" in smoke
    assert 'LIBRARY_BROWSER_EXPECTED_CARDS="$EXPECTED_BROWSER_CARDS"' in smoke
    assert "playwright_gui_ok=true" in smoke


def test_ci_installs_pinned_browsers_and_runs_disposable_gui_rehearsal():
    workflow = (ROOT / ".github/workflows/ci.yml").read_text(encoding="utf-8")

    assert "npx playwright install --with-deps chromium firefox" in workflow
    assert workflow.count("python -m pip install --upgrade pytest") == 2
    assert 'LIBRARY_FRESH_MIXED_COUNT: "40"' in workflow
    assert "npm run smoke:fresh-install-mixed" in workflow
    assert "playwright-report/" in workflow
    assert "test-results/" in workflow


def test_playwright_outputs_are_ignored_and_config_is_excluded_from_release():
    ignored = (ROOT / ".gitignore").read_text(encoding="utf-8")
    packaging = (ROOT / "scripts/package-release.sh").read_text(encoding="utf-8")
    audit = (ROOT / "scripts/audit-release-package.sh").read_text(encoding="utf-8")

    assert "/playwright-report/" in ignored
    assert "/test-results/" in ignored
    assert "--exclude=playwright.config.ts" in packaging
    assert "--exclude=playwright-report" in packaging
    assert "--exclude=test-results" in packaging
    assert '"playwright.config.ts"' in audit
    assert '"playwright-report"' in audit
    assert '"test-results"' in audit
