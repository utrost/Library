from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text()


def test_root_delete_form_shows_recovery_checklist_before_destructive_confirmation():
    template = read("templates/settings-personal.php")

    assert "library-root-recovery-checklist" in template
    assert "Before deleting this Library root" in template
    assert "Export corrected metadata" in template
    assert "database backup" in template
    assert "Re-add the same folder path and scan it again" in template
    assert "source files from Nextcloud Files are not deleted" in template
    assert template.index("library-root-recovery-checklist") < template.index("confirmDeleteText")


def test_smoke_and_docs_track_root_delete_recovery_guidance_as_landed():
    smoke = read("scripts/smoke-vue-page.mjs")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")
    lock = read("package-lock.json")

    assert "settings_has_root_delete_recovery_copy" in smoke
    assert "root deletion recovery guidance has landed" in guide
    assert "recovery copy" in roadmap
    assert "Remaining release polish is richer validation" in roadmap
    assert "<version>0.1.0-alpha.151</version>" in info
    assert '"version": "0.1.0-alpha.151"' in package
    assert '"version": "0.1.0-alpha.151"' in lock
