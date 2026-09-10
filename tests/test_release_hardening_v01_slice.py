from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def test_release_docs_are_current_for_v01_testing_candidate():
    info = read("appinfo/info.xml")
    readme = read("README.md")
    release = read("RELEASE.md")
    changelog = read("CHANGELOG.md")
    checklist = read("docs/alpha-test-checklist.md")

    assert "<version>0.1.0-alpha.147</version>" in info
    for doc in (readme, release, checklist):
        assert "0.1.0-alpha.147" in doc
        assert "0.1.0-alpha.82" not in doc
    assert "0.1.0-alpha.147" in changelog
    assert "v0.1.0-alpha.1" in changelog

    assert "publication, publication-year and creator discovery pages exist" in checklist
    assert "Publication contents" in checklist
    assert "built-in Useful views, a weak-metadata cockpit and in-app Custom collections exist" in checklist
    assert "richer publication issue grouping" in checklist
    assert "No dedicated creator/series/publication/year landing pages" not in checklist
    assert "no dedicated creator pages" not in checklist.lower()
    assert "generated archive install smoke" in release
    assert "npm run smoke:release-package" in release


def test_human_test_handbook_is_linked_and_executable():
    readme = read("README.md")
    checklist = read("docs/alpha-test-checklist.md")
    handbook = read("docs/human-test-handbook.md")

    assert "docs/human-test-handbook.md" in readme
    assert "human test handbook" in checklist.lower()

    for test_id in [
        "LIB-HARDEN-001",
        "LIB-HARDEN-002",
        "LIB-HARDEN-003",
        "LIB-HARDEN-004",
        "LIB-HARDEN-005",
        "LIB-HARDEN-006",
        "LIB-HARDEN-007",
        "LIB-HARDEN-008",
        "LIB-HARDEN-009",
        "LIB-HARDEN-010",
        "LIB-HARDEN-011",
        "LIB-HARDEN-012",
    ]:
        assert f"### {test_id}" in handbook

    assert "Critical pass criteria" in handbook
    assert "0.1.0-alpha.111" not in handbook
    assert "Publication contents" in handbook
    assert "creator pages are part of the current discovery surface" in handbook
    assert "Evidence to capture on failure" in handbook
    assert "Result vocabulary" in handbook
    assert "Failure report template" in handbook


def test_release_package_smoke_script_exercises_generated_archive_not_checkout():
    package_script = read("scripts/package-release.sh")
    smoke_script = read("scripts/smoke-release-package.sh")
    package_json = read("package.json")

    assert '"smoke:release-package"' in package_json
    assert "release_archive=" in package_script
    assert "docker cp" in smoke_script
    assert "custom_apps/library" in smoke_script
    assert "tar -xzf" in smoke_script
    assert "occ app:enable library" in smoke_script
    assert "occ upgrade" in smoke_script
    assert "php -l /var/www/html/custom_apps/library/appinfo/routes.php" in smoke_script
    assert "npm run smoke:vue" in smoke_script
    assert "npm run smoke:browser" in smoke_script
    assert "release_package_smoke_ok=true" in smoke_script


def test_vitest_does_not_discover_staged_release_archive_tests():
    config = read("vite.config.js")

    assert "include: ['src/**/*.test.js']" in config
    assert "exclude: ['dist/**'" in config


def test_release_docs_link_current_runtime_evidence_and_risk_register():
    readme = read("README.md")
    risk = read("docs/current-state-and-risk-register.md")
    release = read("RELEASE.md")

    assert "docs/current-state-and-risk-register.md" in readme
    assert "Deployment posture" in risk
    assert "Implemented product surface" in risk
    assert "Known weak points and deferred hardening" in risk
    assert "Verification evidence" in risk
    assert "Practical next hardening slices" in risk
    assert "private Nextcloud 34 test instance" in risk
    assert "app-owned cover cache" in risk
    assert "source folders untouched" in risk
    assert "current-state-and-risk-register" in release
