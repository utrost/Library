from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_scan_cancel_route_handles_queued_and_running_jobs():
    controller = read("lib/Controller/ScanController.php")
    service = read("lib/Service/ScanJobService.php")

    assert "public function cancel(int $jobId): RedirectResponse" in controller
    assert "cancelJob($user->getUID(), $jobId)" in controller
    assert "public function cancelJob(string $userId, int $jobId): bool" in service
    cancel_body = service.split("public function cancelJob", 1)[1].split("public function", 1)[0]
    assert "'queued'" in cancel_body
    assert "'running'" in cancel_body
    assert "Scan cancellation requested" in cancel_body
    assert "finished_at" in cancel_body


def test_running_scan_job_stops_cooperatively_when_cancelled():
    job = read("lib/BackgroundJob/ScanJob.php")

    assert "ScanCancelledException" in job
    assert "isCancelled($userId, $jobId)" in job
    assert "throw new ScanCancelledException()" in job
    assert job.index("updateProgress($userId, $jobId, $progress)") > job.index("isCancelled($userId, $jobId)")
    assert "catch (ScanCancelledException" in job
    assert "failJob($userId, $jobId" not in job.split("catch (ScanCancelledException", 1)[1].split("} catch", 1)[0]


def test_cancelled_scan_job_terminal_state_is_not_overwritten_by_progress_or_finish():
    service = read("lib/Service/ScanJobService.php")

    assert "public function updateProgress" in service
    update_body = service.split("public function updateProgress", 1)[1].split("public function", 1)[0]
    assert "status'" in update_body
    assert "cancelled" in update_body
    assert "neq('status'" in update_body or "notIn('status'" in update_body

    finish_body = service.split("public function finishJob", 1)[1].split("public function", 1)[0]
    assert "isCancelled($userId, $jobId)" in finish_body
    assert "return;" in finish_body


def test_settings_copy_and_docs_track_running_cancellation_boundary():
    template = read("templates/settings-personal.php")
    readme = read("README.md")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")

    assert "Cancel scan" in template
    assert "queued or running" in template
    assert "running-job cancellation" in readme.lower()
    assert "running-job cancellation" in guide.lower()
    assert "running-job cancellation" in roadmap.lower()
    assert "0.1.0-alpha.77" in info
    assert '"version": "0.1.0-alpha.77"' in package
