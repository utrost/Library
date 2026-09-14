from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_checked_in_nextcloud_worker_is_bounded_safe_and_documented():
    worker = ROOT / "bin" / "nextcloud-background-worker.sh"
    assert worker.exists()
    assert worker.stat().st_mode & 0o111
    source = worker.read_text(encoding="utf-8")
    assert "set -euo pipefail" in source
    assert "flock -n" in source
    assert "library-nextcloud-background-worker.lock" in source
    assert "docker exec -u www-data nextcloud php -d memory_limit=-1 /var/www/html/occ --no-warnings --quiet background-job:worker --stop_after=5m" in source
    assert "background-job:execute" not in source
    readme = read("README.md")
    assert "bin/nextcloud-background-worker.sh" in readme
    assert "general Nextcloud background worker" in readme
    package = read("scripts/create-reproducible-archive.sh")
    audit = read("scripts/audit-release-package.sh")
    assert "find \"$STAGE_PARENT/$TOP_NAME/bin\" -type f -name '*.sh' -exec chmod 0755" in package
    assert 'f"{top}/bin/nextcloud-background-worker.sh"' in audit
    assert "worker helper is not executable in package" in audit


def test_scan_normalization_exposes_queue_and_worker_timestamps():
    service = read("lib/Service/ScanJobService.php")
    assert "public const QUEUED_TOO_LONG_AFTER_SECONDS = 60" in service
    for field in ("queuedSeconds", "isQueuedTooLong", "queueWarning", "runStartedAt", "lastProgressAt", "currentPath"):
        assert f"'{field}' =>" in service
    assert "waiting_for_nextcloud_background_worker" in service


def test_settings_explains_queued_running_and_stale_states():
    template = read("templates/settings-personal.php")
    script = read("js/scan-progress-worker.js")
    for marker in (
        "data-library-scan-state-message",
        "data-library-scan-queued-seconds",
        "data-library-scan-run-started-at",
        "data-library-scan-last-progress-at",
        "data-library-scan-current-path",
    ):
        assert marker in template
        assert marker in script
    for copy in (
        "Queued — waiting for the Nextcloud background worker.",
        "This scan is still queued and no background worker has started it yet.",
        "Running — scan progress is updating.",
        "Running, but progress is stale.",
    ):
        assert copy in template or copy in script
    assert "job.isQueuedTooLong" in script
    assert "job.isStale" in script
