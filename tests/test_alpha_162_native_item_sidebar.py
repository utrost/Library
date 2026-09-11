from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")

def test_native_sidebar_has_canonical_history_abort_and_accessible_states():
    app = read("src/App.vue")
    for contract in [':open="sidebarOpen"', '@close="closeDetailsDrawer"', "getAll('item')", "/^[1-9][0-9]*$/", "MAX_ITEM_ID = 2147483647", "numeric <= MAX_ITEM_ID", "history.replaceState", "historyMode: 'none'", "sidebarRequestController?.abort()", "generation !== sidebarRequestGeneration", "requestAnimationFrame", "cancelAnimationFrame", "Loading publication details", "you do not have access", "Try again", "Metadata provenance", "Review context", "Open full details"]:
        assert contract in app

def test_sidebar_route_is_positive_id_only_authenticated_user_scoped_projection():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/ItemPageController.php")
    assert "'name' => 'item_page#sidebar'" in routes
    assert "'requirements' => ['itemId' => '[^/]+']" in routes
    sidebar = controller.split("public function sidebar", 1)[1].split("public function show", 1)[0]
    assert "#[PublicPage]" in controller
    assert "public function sidebar(string $itemId)" in controller
    assert "findItem($user->getUID(), $canonicalItemId)" in sidebar
    assert "2147483647" in sidebar
    assert "array_intersect_key" in sidebar
    assert "new JSONResponse(['message' => 'Publication not found.'], 404)" in sidebar
    assert "coverOverrideUrl" not in sidebar

def test_php_full_details_and_fallback_renderer_remain_available():
    assert "new TemplateResponse(Application::APP_ID, 'item-detail'" in read("lib/Controller/ItemPageController.php")
    assert "library-item-detail" in read("templates/item-detail.php")
    assert "<noscript>" in read("templates/main.php")

def test_alpha_162_release_evidence_and_consistency_contract_are_current():
    release = read("RELEASE.md")
    assert "/tmp/library-alpha162-codex-remediation.md" in release
    assert "/tmp/library-alpha161-codex-implementation.md" not in release
    for contract in ["package.json", "package-lock.json", "appinfo/info.xml", "versioned frontend asset names", "archive/checksum names", "exact-package smoke expectation", "evidence-sidecar reference"]:
        assert contract in release

def test_exact_package_smoke_includes_live_sidebar_http_privacy_and_route_gate():
    package = read("package.json")
    smoke = read("scripts/smoke-release-package.sh")
    live = read("scripts/smoke-sidebar-http.mjs")
    assert '"smoke:sidebar-http": "node scripts/smoke-sidebar-http.mjs"' in package
    assert "npm run smoke:sidebar-http" in smoke
    for contract in ["byte-for-byte", "unauthenticated", "non-owned", "application/json", "2147483648", "%2B7", "7%5B%5D", "%37", "%25zz", "sidebar_http_owned_read=true"]:
        assert contract in live
