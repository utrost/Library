from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scan_progress_route_returns_latest_job_json():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()

    assert "['name' => 'scan#progress', 'url' => '/scan/progress', 'verb' => 'GET']" in routes
    assert "use OCP\\AppFramework\\Http\\JSONResponse;" in controller
    assert "public function progress(): JSONResponse" in controller
    assert "return new JSONResponse(['job' => $job]);" in controller
    assert "$this->scanJobService->latestJob($user->getUID())" in controller


def test_settings_loads_scan_progress_script_and_passes_endpoint_url():
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "Util::addScript(Application::APP_ID, 'scan-progress');" in settings
    assert "'scanProgressUrl' => $this->urlGenerator->linkToRoute('library.scan.progress')" in settings
    assert "data-library-scan-progress-url=\"<?php p($_['scanProgressUrl']); ?>\"" in template
    assert "data-library-scan-status" in template
    assert "data-library-scan-files-indexed" in template
    assert "data-library-scan-summary" in template


def test_scan_progress_javascript_polls_until_terminal_status_and_updates_dom():
    script = (ROOT / "js" / "scan-progress.js").read_text()

    assert "fetch(progressUrl" in script
    assert "credentials: 'same-origin'" in script
    assert "data-library-scan-status" in script
    assert "data-library-scan-files-indexed" in script
    assert "data-library-scan-summary" in script
    assert "setTimeout(poll, 2000)" in script
    assert "['completed', 'failed'].includes" in script


def test_docs_name_auto_refresh_scan_progress():
    readme = (ROOT / "docs" / "user-guide.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "auto-refreshing scan progress" in readme
    assert "auto-refreshing scan progress" in roadmap
