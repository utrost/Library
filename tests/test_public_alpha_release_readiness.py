from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_repo_declares_agplv3_license_file_and_app_metadata():
    license_text = read("LICENSE")
    info = read("appinfo/info.xml")
    readme = read("README.md")

    assert "GNU AFFERO GENERAL PUBLIC LICENSE" in license_text
    assert "Version 3" in license_text
    assert "<licence>agpl</licence>" in info
    assert "AGPL-3.0-or-later" in readme


def test_public_alpha_release_docs_exist_and_fix_portability_status():
    changelog = read("CHANGELOG.md")
    checklist = read("docs/alpha-test-checklist.md")
    guide = read("docs/user-guide.md")
    readme = read("README.md")

    assert "v0.1.0-alpha.1" in changelog
    assert "0.1.0-alpha.82" in changelog
    assert "Public alpha" in checklist
    assert "Known alpha limitations" in checklist
    assert "Export sidecar ZIP" in checklist
    assert "Apply metadata import" in checklist
    assert "docs/alpha-test-checklist.md" in readme
    assert "no import from the corrected-metadata json export" not in guide.lower()
    assert "no tool to create/export sidecars" not in guide.lower()
    assert "sidecar zip" in guide.lower()
    assert "source folders" in guide.lower()


def test_release_packaging_script_builds_clean_nextcloud_app_archive():
    script = read("scripts/package-release.sh")
    readme = read("README.md")
    checklist = read("docs/alpha-test-checklist.md")

    assert "library-${VERSION}.tar.gz" in script
    assert "npm ci" in script
    assert "npm run build" in script
    assert "tar" in script
    assert "--exclude=.git" in script
    assert "--exclude=.gitignore" in script
    assert "--exclude=node_modules" in script
    assert "custom_apps/library" not in script
    assert "scripts/package-release.sh" in readme
    assert "scripts/package-release.sh" in checklist


def test_minimal_github_actions_ci_runs_public_alpha_gates():
    workflow = read(".github/workflows/ci.yml")

    assert "name: CI" in workflow
    assert "actions/checkout" in workflow
    assert "actions/setup-node" in workflow
    assert "node-version: 24" in workflow
    assert "npm ci" in workflow
    assert "npm test -- --run" in workflow
    assert "npm run build" in workflow
    assert "python -m pytest -q" in workflow
    assert "git diff --check" in workflow


def test_release_check_script_collects_local_gates_for_ci_and_humans():
    script = read("scripts/check.sh")
    package = read("package.json")

    assert "pytest -q" in script
    assert "npm test -- --run" in script
    assert "npm run build" in script
    assert "git diff --check" in script
    assert '"check": "bash scripts/check.sh"' in package


def test_alpha_tag_is_documented_as_annotated_public_prerelease():
    release = read("RELEASE.md")

    assert "v0.1.0-alpha.1" in release
    assert "Do not retag `v0.1.0-alpha.1`" in release
    assert "git tag -a v0.1.0-alpha.2" in release
    assert "GitHub prerelease" in release
    assert "Generated archive install smoke" in release
    assert "npm run smoke:release-package" in release
    assert "npm run smoke:vue" in release
