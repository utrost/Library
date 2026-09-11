from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_scan_cancel_route_cancels_queued_and_running_scan_jobs():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/ScanController.php")
    service = read("lib/Service/ScanJobService.php")

    assert "scan#cancel" in routes
    assert "/scan/jobs/{jobId}/cancel" in routes
    assert "public function cancel(int $jobId): RedirectResponse" in controller
    assert "cancelJob($user->getUID(), $jobId)" in controller
    assert "public function cancelJob(string $userId, int $jobId): bool" in service
    cancel_body = service.split("public function cancelJob", 1)[1].split("public function", 1)[0]
    assert "createNamedParameter('cancelled')" in cancel_body
    assert "'queued'" in cancel_body
    assert "'running'" in cancel_body
    assert "Scan cancellation requested" in cancel_body
    assert "finished_at" in cancel_body


def test_scan_job_skips_cancelled_app_job_before_marking_running():
    job = read("lib/BackgroundJob/ScanJob.php")

    assert "isCancelled($userId, $jobId)" in job
    assert job.index("isCancelled($userId, $jobId)") < job.index("markRunning($userId, $jobId)")
    assert "public function isCancelled(string $userId, int $jobId): bool" in read("lib/Service/ScanJobService.php")


def test_settings_page_exposes_cancel_for_queued_latest_and_history_jobs():
    settings = read("lib/Settings/Personal.php")
    template = read("templates/settings-personal.php")

    assert "cancelUrl" in settings
    assert "library.scan.cancel" in settings
    assert "library-scan-cancel-form" in template
    assert "Cancel queued scan" in template
    assert "queued" in template


def test_smoke_docs_and_version_track_cancel_queued_scans_as_landed():
    smoke = read("scripts/smoke-vue-page.mjs")
    readme = read("docs/user-guide.md")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")

    assert "settings_has_cancel_queued_scan_form" in smoke
    assert "cancel queued scan" in readme.lower()
    assert "Cancel queued scan" in guide
    assert "cancel queued scan" in roadmap.lower()
    assert "0.1.0-alpha.157" in info
    assert '"version": "0.1.0-alpha.157"' in package
