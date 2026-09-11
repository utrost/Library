from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text()


def legacy_gate() -> str:
    smoke = read("scripts/smoke-browser-page.mjs")
    return smoke.split("async function runLegacyLocalizationGate", 1)[1].split("async function inspectVueCatalogue", 1)[0]


def test_legacy_keyboard_gate_traverses_every_visible_natural_control_and_exits_surface():
    gate = legacy_gate()
    assert "expectedTargets" in gate
    assert "leftSurface" in gate
    assert "samples.length >= 3" not in gate
    assert "dispatchTabKeyPairs" in gate
    assert "Input.dispatchKeyEvent" in read("scripts/browser-keyboard-focus-gate.mjs")
    assert "maximumTabSteps" in gate
    assert "positiveTabIndex" in gate
    assert "installFocusExitSentinel.toString()" in gate
    assert "removeFocusExitSentinel.toString()" in gate
    assert "focusExitSentinel" in gate
    assert "chromeExitObservations" not in gate


def test_legacy_keyboard_dispatch_has_page_recorder_no_per_tab_evaluate_and_timings():
    smoke = read("scripts/smoke-browser-page.mjs")
    gate = legacy_gate()
    dispatch = gate.split("const tabIntoSurface", 1)[1].split("const inspect", 1)[0]
    helper = read("scripts/browser-keyboard-focus-gate.mjs")
    loop = helper.split("for (let step", 1)[1].split("return { dispatchedPairs", 1)[0]
    assert "await client.send('Input.dispatchKeyEvent'" in loop
    assert "await afterPair(step + 1)" in loop
    assert "dispatchTabKeyPairs" in dispatch
    assert "__libraryTabRecorder" in dispatch
    assert "removeEventListener" in dispatch
    assert "delete window.__libraryTabRecorder" in dispatch
    assert "legacy_gate_phase_seconds" in gate
    assert "legacy_gate_row_seconds" in gate
    assert "rawKeyDown" in helper and "keyUp" in helper
    assert "Promise.all" not in helper


def test_legacy_row_inspects_before_keyboard_and_attaches_post_keyboard_failures_in_node():
    gate = legacy_gate()
    row = gate.split("const timedRow", 1)[1].split("const navigate", 1)[0]
    probes = gate.split("const inspectCore =", 1)[1].split("\n  try {", 1)[0]
    assert row.index("'inspect-core'") < row.index("'inspect-forms'") < row.index("'inspect-geometry'") < row.index("'keyboard'")
    assert "client.events.slice(eventStart)" in row
    assert "keyboardTraversal" not in probes
    assert "client.events.slice" not in probes
    assert "classifyBrowserEvent" not in probes


def test_legacy_phases_are_explicitly_bounded_and_tab_dispatch_is_exactly_n_plus_one():
    gate = legacy_gate()
    assert "runWithPhaseTimeout" in gate
    assert "legacy_gate_phase_timeout" in read("scripts/browser-phase-timeout.mjs")
    assert "'inspect-core': 10000" in gate and "'inspect-forms': 10000" in gate
    assert "'inspect-geometry': 10000" in gate and "keyboard: 30000" in gate
    assert "navigate: 35000" in gate
    assert "controls.length + 1" in gate
    assert "controls.length + 2" not in gate
    assert "dispatchedPairs: dispatch.dispatchedPairs" in gate


def test_batch_preview_fixture_uses_exact_owned_identity_without_setup_mutation():
    gate = legacy_gate()
    assert "batchFixtureItem.id" in gate
    assert "batchFixtureLanguage" in gate
    assert "itemIds[]" in gate
    assert "q: itemTitle" not in gate
    assert "legacyBatchFixturePublication" not in gate


def test_batch_preview_fixture_fails_closed_for_empty_and_unsuitable_datasets():
    gate = legacy_gate()
    assert "legacy_batch_fixture_precondition_failed" in gate
    assert "Array.isArray(catalogueState.items)" in gate
    assert "Number.isSafeInteger" in gate
    assert "catalogueRequestToken.trim()" in gate
    controller = read("lib/Controller/ItemController.php")
    preview = controller.split("public function batchpreviewmetadataedit", 1)[1].split("public function batchapplymetadataedit", 1)[0]
    assert "parseExplicitItemIds" in preview


def test_legacy_form_safety_rejects_absent_and_empty_request_tokens():
    gate = legacy_gate()
    assert "tokenPresent" in gate
    assert "tokenNonEmpty" in gate
    assert "tokenValue" not in gate
    assert "tokenPresent && tokenNonEmpty" in gate


def test_legacy_measurements_never_return_root_text_or_request_token_contents():
    gate = legacy_gate()
    inspection = read("scripts/browser-legacy-inspection.mjs")
    assert "text: root.textContent" not in gate
    assert "tokenValue" not in gate
    assert "requesttoken:" not in inspection
    assert "missingLabelIds" in gate and "labelChecks" in gate


def test_locale_restoration_checks_effective_locale_when_explicit_setting_was_absent():
    gate = legacy_gate()
    assert "expectedEffectiveLocale" in gate
    assert "legacy-locale-before-mutation" in gate
    assert "renderedLocale === expectedEffectiveLocale" in gate
    assert "!originalLanguage.present || renderedLocale" not in gate


def test_batch_preview_table_uses_logical_alignment_for_rtl():
    css = read("css/style.css")
    rule = css.split(".library-batch-preview-table th,", 1)[1].split("}", 1)[0]
    assert "text-align: start" in rule
    assert "text-align: left" not in rule
