from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_duplicate_catalogue_renderer_and_contracts_are_retired():
    main = read("src/main.js")
    assert "fallbackCatalogue" not in main
    assert "fallbackFilterForm" not in main
    assert "library-cover-card" not in main
    assert "rendering fallback catalogue" not in main
    assert 'data-vue-fallback="true"' not in main


def test_server_template_has_distinct_no_javascript_and_watchdog_surfaces():
    template = read("templates/main.php")
    assert "JavaScript is disabled" in template
    assert "Library could not start" in template
    assert "No cached or substitute catalogue is being displayed." in template
    assert 'role="status"' in template
    assert 'aria-live="polite"' in template
    assert 'data-library-startup-timeout="10000"' in template
    assert 'data-library-main-script="library-main-0-1-0-alpha-164"' in template
    assert "data-library-retry" in template
    assert "settingsUrl" in template
    assert "<script" not in template


def test_watchdog_is_independent_deterministic_cancellable_and_privacy_safe():
    shell = read("js/library-shell.js")
    assert "window.LibraryStartupWatchdog" in shell
    assert "mounted: function" in shell
    assert "fail: reveal" in shell
    assert "window.clearTimeout(timer)" in shell
    assert "window.setTimeout(reveal, DEFAULT_TIMEOUT)" in shell
    assert "window.setTimeout(reveal, remaining)" in shell
    assert "securitypolicyviolation" in shell
    assert "unhandledrejection" in shell
    assert "event.target.src" in shell
    assert "textContent" not in shell
    assert "innerHTML" not in shell


def test_watchdog_timer_starts_when_shell_executes_before_dom_content_loaded():
    shell = read("js/library-shell.js")
    timer_arm = "timer = window.setTimeout(reveal, DEFAULT_TIMEOUT)"

    assert "var startedAt = Date.now()" in shell
    assert timer_arm in shell
    assert shell.index(timer_arm) < shell.index("document.addEventListener('DOMContentLoaded'")
    assert "timeout - (Date.now() - startedAt)" in shell
    assert "if (!settled)" in shell


def test_exact_package_browser_matrix_covers_timeout_recovery_and_distinct_state_failures():
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "module-timeout" in smoke
    assert "module-near-threshold" in smoke
    assert "moduleRequestPending" in smoke
    assert "browser_module_timeout_visible_while_pending" in smoke
    assert "browser_module_timeout_recovery" in smoke
    assert "browser_near_threshold_startup_no_notice" in smoke
    assert "state-missing" in smoke
    assert "state-malformed-json" in smoke
    assert "state-invalid-shape" in smoke


def test_entry_fails_closed_for_missing_or_malformed_state_and_signals_mount():
    main = read("src/main.js")
    assert "loadState('library', 'catalogue', null)" in main
    assert "validInitialState" in main
    assert "Array.isArray(value.items)" in main
    assert "LibraryStartupWatchdog?.fail()" in main
    assert "createApp(App, { state }).mount(mountTarget)" in main
    assert "LibraryStartupWatchdog?.mounted()" in main
    assert main.index(".mount(mountTarget)") < main.index("LibraryStartupWatchdog?.mounted()")


def test_php_details_and_personal_settings_are_preserved():
    assert "new TemplateResponse(Application::APP_ID, 'item-detail'" in read("lib/Controller/ItemPageController.php")
    assert "library-item-detail" in read("templates/item-detail.php")
    assert 'id="library-settings"' in read("templates/settings-personal.php")
