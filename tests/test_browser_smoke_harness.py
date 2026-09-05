from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_package_exposes_real_browser_smoke_script():
    package = (ROOT / "package.json").read_text()
    assert '"smoke:browser": "node scripts/smoke-browser-page.mjs"' in package


def test_browser_smoke_script_checks_real_vue_dom_and_cleans_tokens():
    script_path = ROOT / "scripts" / "smoke-browser-page.mjs"
    assert script_path.exists()
    script = script_path.read_text()

    assert "google-chrome" in script
    assert "--headless=new" in script
    assert "Runtime.consoleAPICalled" in script
    assert "Runtime.exceptionThrown" in script
    assert "data-vue-fallback" in script
    assert "#library-vue-root[data-v-app]" in script
    assert ".library-filter-bar" in script
    assert ".library-cover-card" in script
    assert "openfile=false" in script
    assert "user:add-app-password" in script
    assert "user:auth-tokens:delete" in script
    assert "print('browser_smoke_ok', true)" in script
    assert "temp_token_remaining" in script
