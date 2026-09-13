from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_modal_boundary_traversal_is_mobile_only_and_desktop_focus_is_named_heading():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    exercise = smoke[smoke.index("const exerciseSidebar"):smoke.index("  try {", smoke.index("const exerciseSidebar"))]
    mobile_traversal = exercise[exercise.index("if (mobile)"):]

    assert "clickBoundary('last')" in mobile_traversal
    assert "clickBoundary('first')" in mobile_traversal
    assert "Input.dispatchKeyEvent" in exercise
    assert "await key('Tab', 'Tab')" in mobile_traversal
    assert "await key('Tab', 'Tab', 8)" in mobile_traversal
    assert "focusin" in mobile_traversal
    assert "headingEntered" in exercise
    assert "library-detail-drawer-heading" in exercise
    assert "desktopModal" not in exercise


def test_responsive_readiness_precedes_click_and_mobile_boundary_capture():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    exercise = smoke[smoke.index("const exerciseSidebar"):smoke.index("  try {", smoke.index("const exerciseSidebar"))]

    metrics = exercise.index("Emulation.setDeviceMetricsOverride")
    viewport_ready = exercise.index("waitForViewportWidth", metrics)
    click = exercise.index("clickWithCdp('.library-cover-link', 0)", viewport_ready)
    mobile_ready = exercise.index("waitForMobileModal", click)
    event_log = exercise.index("window.__libraryModalEvents", mobile_ready)

    assert metrics < viewport_ready < click < mobile_ready < event_log
    assert "if (mobile)" in exercise[click:mobile_ready]
    assert "await waitForViewportWidth" in exercise
    assert "await waitForMobileModal" in exercise
    assert "setTimeout(resolve" not in exercise[metrics:click]


def test_mobile_readiness_is_observed_and_desktop_does_not_require_modal_focusables():
    helper = (ROOT / "scripts" / "browser-responsive-readiness.mjs").read_text(encoding="utf-8")
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    unit = (ROOT / "src" / "browser-responsive-readiness.test.js").read_text(encoding="utf-8")

    assert "requestAnimationFrame" in smoke
    assert "innerWidth" in smoke
    assert "getComputedStyle" in smoke
    assert "getAttribute('role')" in smoke
    assert "getAttribute('aria-modal')" in smoke
    assert ".app-sidebar__close" in smoke
    assert "Timed out waiting for" in helper
    assert "accept(observed)" in helper
    assert "ready: true" in unit
    assert "innerWidth === 390" in unit
    assert "rejects.toThrow('Timed out waiting for mobile modal readiness')" in unit


def test_final_error_escape_has_observed_close_barrier_before_next_exercise():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    exercise = smoke[smoke.index("const exerciseSidebar"):smoke.index("  try {", smoke.index("const exerciseSidebar"))]
    final_escape = exercise.rindex("await key('Escape', 'Escape')")
    close_barrier = exercise.index("await waitForSidebarClose", final_escape)
    returned = exercise.index("return {", close_barrier)

    assert final_escape < close_barrier < returned
    assert "waitForResponsiveReadiness" in smoke[smoke.index("const waitForSidebarClose"):smoke.index("const exerciseSidebar")]
    assert "activeOverlayCount" in smoke
    assert "openerObstructed" in smoke
    assert "dom.readiness.sidebarClose" in smoke


def test_cdp_clicks_require_observed_visible_nonzero_unobstructed_geometry():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    click = smoke[smoke.index("const clickWithCdp"):smoke.index("const inspectSidebar")]

    assert "isCdpClickTargetReady" in click
    assert "getClientRects" in click
    assert "getComputedStyle" in click
    assert "elementFromPoint" in click
    assert "width" in click and "height" in click


def test_cdp_click_scrolls_exact_index_and_waits_two_frames_before_fresh_hit_test_and_dispatch():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    click = smoke[smoke.index("const clickWithCdp"):smoke.index("const inspectSidebar")]

    evaluate = click.index("Runtime.evaluate")
    exact_target = click.index("querySelectorAll", evaluate)
    object_id = click.index("result?.objectId", exact_target)
    absent = click.index("if (!objectId)", object_id)
    scroll = click.index("DOM.scrollIntoViewIfNeeded", absent)
    first_frame = click.index("requestAnimationFrame", scroll)
    second_frame = click.index("requestAnimationFrame", first_frame + len("requestAnimationFrame"))
    fresh_evaluate = click.index("Runtime.callFunctionOn", second_frame)
    same_object = click.index("objectId", fresh_evaluate)
    style = click.index("getComputedStyle", same_object)
    rect = click.index("getBoundingClientRect", style)
    hit_test = click.index("elementFromPoint", rect)
    readiness = click.index("isCdpClickTargetReady", hit_test)
    dispatch = click.index("Input.dispatchMouseEvent", readiness)

    assert evaluate < exact_target < object_id < absent < scroll < first_frame < second_frame < fresh_evaluate < same_object < style < rect < hit_test < readiness < dispatch
    assert "[${index}]" in click
    assert click.count("querySelectorAll") == 1
    assert "returnByValue: true" not in click[evaluate:scroll]
    assert ".scrollIntoView(" not in click
    assert ".focus(" not in click


def test_cdp_click_rejects_stale_pre_scroll_evidence_and_never_reselects_target():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    click = smoke[smoke.index("const clickWithCdp"):smoke.index("const inspectSidebar")]

    scroll = click.index("DOM.scrollIntoViewIfNeeded")
    geometry = click.index("getBoundingClientRect", scroll)
    readiness = click.index("isCdpClickTargetReady", geometry)
    dispatch = click.index("Input.dispatchMouseEvent", readiness)
    assert scroll < geometry < readiness < dispatch
    assert click.count("querySelectorAll") == 1
    assert "Runtime.callFunctionOn" in click[scroll:readiness]


def test_sidebar_and_adaptation_are_isolated_by_authenticated_same_fixture_url_reload():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    sidebar = smoke.index("const desktop = await exerciseSidebar(false)")
    metric_clear = smoke.index("Emulation.clearDeviceMetricsOverride", sidebar)
    reload_url = smoke.index("const adaptationFixtureUrl", metric_clear)
    same_url_guard = smoke.index("assertFixtureScopedSameUrl", reload_url)
    reload = smoke.index("Page.navigate", same_url_guard)
    fresh_ready = smoke.index("waitForFreshCatalogue", reload)
    baseline = smoke.index("phase: 'adaptation-baseline'", fresh_ready)

    assert sidebar < metric_clear < reload_url < same_url_guard < reload < fresh_ready < baseline
    isolation = smoke[reload_url:baseline]
    assert "x-library-smoke-authorization" not in isolation
    assert "waitForResponsiveReadiness" in isolation
    assert "isFreshCatalogueReady" in isolation
    assert "localization-fixture" in isolation


def test_fresh_reload_readiness_is_observable_and_preserves_prior_ax_snapshot():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text(encoding="utf-8")
    readiness = smoke[smoke.index("const waitForFreshCatalogue"):smoke.index("const rows = []")]

    for evidence in ["newDocument", "vueCatalogueMounted", "fixtureCardCount", "fixtureButtonCount",
                     "sidebarClosed", "activeOverlayCount", "activeInertCount", "width", "height", "disabled", "inert"]:
        assert evidence in readiness
    assert "elementFromPoint" not in readiness
    assert "scrollIntoView" not in readiness
    assert "dom.ax =" not in readiness
    assert "dom.sidebar" not in readiness
    assert "accept: isFreshCatalogueReady" in readiness
