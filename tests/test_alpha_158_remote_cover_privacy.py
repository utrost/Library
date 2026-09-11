from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def test_detail_cover_is_same_origin_and_legacy_url_is_not_exposed():
    controller = read("lib/Controller/ItemPageController.php")
    template = read("templates/item-detail.php")
    show = controller[controller.index("public function show"):]
    assert "'library.cover.show'" in show
    assert "$manualCoverUrl" not in show
    assert "coverOverrideUrl" not in template
    assert 'type="url"' not in template


def test_uploaded_only_service_contract_clears_legacy_url_and_revert_clears_all_fields():
    service = read("lib/Service/ItemService.php")
    method = service[service.index("public function setManualCoverOverride"):service.index("private function databaseColumnForField")]
    assert "?string $coverOverrideUrl" not in method
    assert "cover_override_url" in method
    assert "createNamedParameter(null)" in method
    assert method.count("createNamedParameter(null)") >= 4


def test_browser_smoke_has_cross_origin_capture_legacy_seed_and_isolation_contract():
    smoke = read("scripts/smoke-cover-privacy.mjs")
    for marker in (
        "cover_override_url", "tracker.invalid", "Network.requestWillBeSent",
        "cross_origin_cover_requests", "second_user_isolation", "finally",
    ):
        assert marker in smoke
    assert "npm run smoke:cover-privacy" in read("scripts/smoke-release-package.sh")


def test_detail_not_found_uses_real_nextcloud_response_contract():
    controller = read("lib/Controller/ItemPageController.php")
    assert "NotFoundException" not in controller
    assert "new TemplateResponse('core', '404', [], 'guest', 404)" in controller


def test_cover_privacy_smoke_is_fail_closed_and_verifies_cleanup():
    smoke = read("scripts/smoke-cover-privacy.mjs")
    assert "deniedRead.status === 404" in smoke
    assert "deniedMutation.status === 303" in smoke
    assert "deniedMutation.headers.get('location')" in smoke
    assert "mutationRedirect.pathname ===" in smoke
    assert "authenticatedSecondUser" in smoke
    assert "requesttoken: secondRequestToken" in smoke
    assert "secondRequestToken !== ''" in smoke
    assert "sentinel" in smoke
    assert "state.cover_override_data === sentinel" in smoke
    assert "deniedRead.status >= 500" in smoke
    assert "deniedMutation.status >= 500" in smoke
    assert "smokeSuccess" in smoke and "cleanupSuccess" in smoke
    assert "restoredRows !== '1'" in smoke
    assert "coverFieldsEqual" in smoke
    assert "user:auth-tokens:delete', user, id]) } catch { cleanupSuccess = false }" in smoke
    cleanup = smoke[smoke.index("} finally {"):]
    assert "catch {}" not in cleanup


def test_cover_privacy_smoke_restores_the_exact_mutated_database_row():
    smoke = read("scripts/smoke-cover-privacy.mjs")
    first_query = smoke[smoke.index("if ($action === 'first')"):smoke.index("$q = $db->getQueryBuilder(); $q->update")]
    update_query = smoke[smoke.index("$q = $db->getQueryBuilder(); $q->update"):smoke.index("function parseToken")]
    equality = smoke[smoke.index("function coverFieldsEqual"):smoke.index("function userExists")]
    assert "updated_at" in first_query
    assert "updated_at" in update_query
    assert "updated_at" in equality


def test_cover_privacy_browser_waits_for_vue_covers_and_captures_all_resource_types():
    smoke = read("scripts/smoke-cover-privacy.mjs")
    assert "library-cover-gallery" in smoke
    assert "library-cover-image" in smoke
    assert "Network.loadingFinished" in smoke
    assert "Network.loadingFailed" in smoke
    assert "redirectResponse" in smoke
    assert "request.type === 'Image'" not in smoke
    assert "const allowedOrigins = new Set([new URL(base).origin])" in smoke
    assert "new URL(upstream).origin" not in smoke
    assert "['http:', 'https:'].includes(url.protocol) && !allowedOrigins.has(url.origin)" in smoke
    assert "value.replaceAll(upstream, browserOrigin)" in smoke
    assert "body.toString('utf8').replaceAll(upstream, browserOrigin)" in smoke
    assert "quiet" in smoke.lower()


def test_alpha_158_version_assets_and_release_language_are_aligned():
    assert "<version>0.1.0-alpha.163</version>" in read("appinfo/info.xml")
    assert '"version": "0.1.0-alpha.163"' in read("package.json")
    assert '"version": "0.1.0-alpha.163"' in read("package-lock.json")
    page = read("lib/Controller/PageController.php")
    assert "library-main-0-1-0-alpha-163" in page
    assert "library-vue-0-1-0-alpha-163" in page
    assert (ROOT / "js/library-main-0-1-0-alpha-157.mjs").exists()
    assert (ROOT / "css/library-vue-0-1-0-alpha-157.css").exists()
    release_text = "\n".join(read(path) for path in ("CHANGELOG.md", "RELEASE.md", "docs/architecture-review.md"))
    assert "remote cover SSRF was not present" in release_text
    assert "does not introduce server fetching" in release_text
    current_evidence = {
        "README.md": ("Alpha.159 fixes repair-scan root containment:", 726),
        "RELEASE.md": ("Alpha.159 verification evidence:", 727),
        "docs/app-store-readiness.md": ("Alpha.159 rehearsal evidence:", 727),
        "docs/current-state-and-risk-register.md": ("Alpha.159 verification is complete", 727),
    }
    for path, (marker, python_tests) in current_evidence.items():
        text = read(path)
        evidence = text[text.index(marker):]
        assert f"{python_tests} Python tests" in evidence
        assert "9 PHP runtime programs" in evidence
        assert "722 Python tests" not in evidence
