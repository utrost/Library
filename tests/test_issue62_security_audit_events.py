from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_security_audit_logger_has_privacy_allowlist_and_failure_isolation():
    source = read("lib/Service/SecurityAuditLogger.php")
    assert "class SecurityAuditLogger" in source
    assert "library.security_audit." in source
    assert "private const ALLOWED_KEYS" in source
    for secret_key in ["metadata", "json", "path", "filename", "token", "secret", "password", "content", "data"]:
        assert secret_key in source
    assert "catch (Throwable)" in source
    assert "Security logging must never break" in source


def test_root_destructive_changes_emit_success_and_rejection_audit_events():
    source = read("lib/Controller/RootController.php")
    assert "SecurityAuditLogger" in source
    assert "private ?SecurityAuditLogger $securityAudit" in source
    assert "library.root.delete" in source
    assert "delete confirmation mismatch" in source
    assert "library.root.enabled" in source
    assert "target_id" in source
    assert "outcome', 'success'" in source or "'success', [" in source
    assert "outcome', 'rejected'" in source or "'rejected', [" in source
    assert "catch (Throwable)" not in source, "RootController should rely on logger failure isolation, not swallow root operation errors"


def test_metadata_import_preview_and_apply_emit_bounded_audit_events_without_raw_payloads():
    source = read("lib/Controller/ImportController.php")
    assert "SecurityAuditLogger" in source
    assert "library.metadata_import.preview" in source
    assert "library.metadata_import.apply" in source
    assert "target_count" in source
    assert "http_status" in source
    assert "reason" in source
    audit_section = source[source.find("private function auditImport"):source.find("private function responseStatus")]
    assert "metadataJson" not in audit_section, "audit calls must not pass raw metadataJson"


def test_batch_tag_rejections_and_outcomes_are_audited():
    source = read("lib/Controller/TagController.php")
    assert "SecurityAuditLogger" in source
    for event in [
        "library.bulk_tag.assign",
        "library.bulk_tag.remove",
        "library.bulk_tag.limit_rejected",
        "library.bulk_tag.selection_rejected",
    ]:
        assert event in source
    assert "target_count" in source
    audit_lines = "\n".join(line for line in source.splitlines() if "securityAudit" in line or "library.bulk_tag" in line)
    assert "tagName" not in audit_lines, "tag labels are user-controlled metadata and should not be logged"


def test_archive_cover_limit_and_timeout_failures_are_audited():
    source = read("lib/Controller/CoverController.php")
    assert "SecurityAuditLogger" in source
    assert "library.archive_cover.blocked" in source
    for reason in ["blocked-extractor-timeout", "blocked-resource-limit"]:
        assert reason in source
    assert "target_id" in source


def test_operator_runbook_documents_event_names_thresholds_and_retention():
    docs = read("docs/security-audit-events.md")
    for phrase in [
        "library.security_audit",
        "library.root.delete",
        "library.metadata_import.preview",
        "library.bulk_tag.limit_rejected",
        "library.archive_cover.blocked",
        "5 rejected events in 10 minutes",
        "30 days",
    ]:
        assert phrase in docs
    forbidden = ["raw metadata", "filenames", "paths", "cover bytes", "tokens"]
    for phrase in forbidden:
        assert phrase in docs
