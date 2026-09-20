from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_settings_page_groups_dense_surfaces_into_collapsible_sections():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "library-settings-summary" in template
    assert "library-settings-section-roots" in template
    assert "library-settings-section-scan" in template
    assert "library-settings-section-portability" in template
    assert "library-settings-section-diagnostics" in template
    assert "library-settings-quick-actions" in template
    assert "Back to catalogue" in template
    assert "<details class=\"library-panel library-settings-section library-settings-section-roots\" open" in template
    assert "<details class=\"library-panel library-settings-section library-settings-section-diagnostics\"" in template
    assert ".library-settings-section > summary" in css
    assert ".library-settings-quick-actions" in css
    assert "settings_collapsible_sections" in smoke


def test_settings_sections_show_counts_before_opening():
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "library-settings-count-badge" in template
    assert "count($roots)" in template.split("library-settings-section-roots", 1)[1].split("</summary>", 1)[0]
    assert "count($scanJobHistory)" in template.split("library-settings-section-scan", 1)[1].split("</summary>", 1)[0]
    assert "$fileStatusCounts['total']" in template.split("library-settings-section-diagnostics", 1)[1].split("</summary>", 1)[0]


def test_settings_polish_version_bump_is_tracked_for_asset_refresh():
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()
    lock = (ROOT / "package-lock.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "<version>0.1.0-alpha.172</version>" in info
    assert '"version": "0.1.0-alpha.172"' in package
    assert '"version": "0.1.0-alpha.172"' in lock
    assert "'0.1.0-alpha.172'" in smoke


def test_root_add_and_scan_forms_use_global_operation_indicator_hook():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    script = (ROOT / "js" / "settings-operations.js").read_text() if (ROOT / "js" / "settings-operations.js").exists() else ""

    assert "Util::addScript(Application::APP_ID, 'settings-operations');" in settings
    assert 'data-library-operation="save-root"' in template
    assert 'data-library-operation="scan-root"' in template
    assert 'data-library-operation="scan-roots"' in template
    assert "form.addEventListener('submit'" in script
    submit_block = script.split("form.addEventListener('submit'", 1)[1].split("const scanStatus", 1)[0]
    assert "status.hidden = false" in submit_block
    assert "statusText.textContent = status.dataset.runningText" in submit_block
    assert "button.disabled = true" in submit_block

    release_manifest = (ROOT / "scripts" / "release-frontend-manifest.mjs").read_text()
    package_audit = (ROOT / "scripts" / "audit-release-package.sh").read_text()
    assert "'js/settings-operations.js'" in release_manifest
    assert '"js/settings-operations.js"' in package_audit


def test_scan_progress_uses_human_scope_and_live_total_publications():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()
    script = (ROOT / "js" / "scan-progress-worker.js").read_text()

    assert "scopeLabel" in template
    assert " #<?php p((string)$latestScanJob['rootId'])" not in template
    assert "data-library-total-publications" in template
    assert "'totalPublications' => array_sum($publicationCountsByRoot)" in settings
    assert "'totalPublications' => $totalPublications" in controller
    assert "includeTotal" in controller
    assert "pollCount % 5 === 0" in script
    assert "setInterval(pollTotalPublications" not in script
    assert "url.searchParams.set('includeTotal', '1')" in script
    assert "data-library-total-publications" in script
    assert "job.scopeLabel" in script
    assert "findRoot($user->getUID()" in controller
    assert "removed Library folder" in controller


def test_latest_scan_progress_prefers_running_job_over_newer_queued_job():
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()

    latest = service.split("public function latestJob", 1)[1].split("public function getJob", 1)[0]
    assert "createNamedParameter('running')" in latest
    assert "setMaxResults(1)" in latest
    assert "recentJobs($userId, 1)" in latest
