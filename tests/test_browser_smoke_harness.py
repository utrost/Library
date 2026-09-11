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
    assert "requestTokenFields" in script
    assert "form[method=\"post\"] input[name=\"requesttoken\"]" in script
    assert ".library-filter-bar" in script
    assert ".library-cover-card" in script
    assert "openfile=false" in script
    assert "user:add-app-password" in script
    assert "user:auth-tokens:delete" in script
    assert "print('browser_smoke_ok', true)" in script
    assert "temp_token_remaining" in script


def test_browser_smoke_tokenizes_filtered_batch_preview_apply_and_restore():
    script = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "catalogueRequestToken: document.querySelector('form[method=\"post\"] input[name=\"requesttoken\"]')?.value || ''" in script
    assert "requesttoken: dom.catalogueRequestToken" in script
    assert "q: applyItem.title" in script
    assert "browser_catalogue_all_post_forms_have_requesttoken" in script
    assert "browser_catalogue_post_forms_are_star_forms" not in script


def test_browser_smoke_preserves_browser_session_for_csrf_protected_batch_writes():
    script = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "delete headers.cookie" not in script
    assert "batchWriteResult = await client.send('Runtime.evaluate'" in script
    assert "credentials: 'same-origin'" in script
    assert "requesttoken: catalogueRequestToken" in script
    mutation = script.split("const originalPublication", 1)[1].split("const quickFilterResult", 1)[0]
    assert "applyParams.append('itemIds[]', String(itemId))" in mutation
    assert "restoreParams.append('itemIds[]', String(itemId))" in mutation
    assert "q: uniqueTitle" not in mutation
    assert "body: applyParams" in mutation
    assert "body: restoreParams" in mutation
    assert "find((item) => item.id === itemId)" in mutation


def test_batch_apply_controller_distinguishes_absent_empty_and_malformed_item_ids():
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    body = controller.split("public function batchapplymetadataedit", 1)[1].split(
        "private function catalogueFiltersFromRequest", 1
    )[0]

    assert "$itemIdsParamPresent = array_key_exists('itemIds', $this->request->getParams())" in body
    assert "$requestedItemIds = $this->request->getParam('itemIds', null)" in body
    assert "$itemIds = $itemIdsParamPresent" in body
    assert ": $this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in body
    assert "$explicitItemIds !== []" not in body


def test_browser_smoke_restores_explicit_item_after_failed_changed_state_readback():
    script = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    mutation = script.split("const originalPublication", 1)[1].split("const quickFilterResult", 1)[0]

    assert "let applySucceeded = false" in mutation
    assert "let restoreAttempted = false" in mutation
    assert "try {" in mutation
    assert "} finally {" in mutation
    assert mutation.index("} finally {") < mutation.index("body: restoreParams")
    assert "restoreAttempted = true" in mutation
    assert "restoreAttempted: restoreAttempted" in mutation
    assert "restoredCatalogueValue" in mutation


def test_browser_smoke_requires_successful_apply_and_restore_responses_before_state_checks_pass():
    script = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "applyStatus = applyResponse.status" in script
    assert "restoreStatus = restoreResponse.status" in script
    assert "applySucceeded = applyResponse.ok" in script
    assert "restoreSucceeded = restoreResponse.ok" in script
    assert "batchWriteDom?.applySucceeded === true" in script
    assert "batchWriteDom?.restoreAttempted === true" in script
    assert "batchWriteDom?.restoreSucceeded === true" in script
    assert "batchWriteDom?.restoredCatalogueValue === originalPublication" in script
    assert "browser_batch_metadata_apply_status" in script
    assert "browser_batch_metadata_restore_status" in script


def test_browser_smoke_auth_proxy_forwards_set_cookie_headers_separately():
    script = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "if (lower === 'set-cookie') continue" in script
    assert "response.headers.getSetCookie()" in script
    assert "res.setHeader('set-cookie', responseCookies)" in script
