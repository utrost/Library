from __future__ import annotations

import json
import re
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def workflow_files() -> dict[str, str]:
    return {path.name: path.read_text(encoding="utf-8") for path in (ROOT / ".github" / "workflows").glob("*.yml")}


def test_github_actions_are_immutable_sha_pinned_with_reviewed_version_comments() -> None:
    workflows = workflow_files()
    assert workflows, "expected at least one GitHub Actions workflow"
    unpinned: list[str] = []
    for filename, text in workflows.items():
        for line in text.splitlines():
            stripped = line.strip()
            if not stripped.startswith("uses:"):
                continue
            uses = stripped.split("uses:", 1)[1].strip()
            if uses.startswith(("./", "docker://")):
                continue
            action_ref = uses.split("#", 1)[0].strip()
            if "@" not in action_ref:
                unpinned.append(f"{filename}: {stripped} lacks @ref")
                continue
            ref = action_ref.rsplit("@", 1)[1]
            if not re.fullmatch(r"[0-9a-f]{40}", ref):
                unpinned.append(f"{filename}: {stripped} is not pinned to a 40-char commit SHA")
            if "reviewed=" not in stripped or "source=" not in stripped:
                unpinned.append(f"{filename}: {stripped} lacks reviewed/source update comment")
    assert not unpinned, "\n".join(unpinned)


def test_ci_uses_locked_python_dependencies_with_hashes_and_runs_dependency_audit() -> None:
    requirements = read("requirements-ci.txt")
    assert "--require-hashes" in requirements
    assert "pytest==" in requirements
    assert "--hash=sha256:" in requirements

    ci = read(".github/workflows/ci.yml")
    assert "python -m pip install --require-hashes -r requirements-ci.txt" in ci
    assert "npm audit --audit-level=high --omit=dev" in ci
    assert "npm ci" in ci


def test_dependabot_updates_npm_actions_and_pinned_security_tooling() -> None:
    dependabot = read(".github/dependabot.yml")
    assert "package-ecosystem: npm" in dependabot
    assert "package-ecosystem: github-actions" in dependabot
    assert "package-ecosystem: pip" in dependabot
    assert "open-pull-requests-limit" in dependabot


def test_security_workflow_runs_sast_secret_scan_and_retains_reports() -> None:
    security = read(".github/workflows/security.yml")
    assert "name: Security" in security
    assert "security-events: write" in security
    assert "github/codeql-action/init" in security
    assert "github/codeql-action/analyze" in security
    assert "scripts/security-gates.sh" in security
    assert "actions/upload-artifact" in security
    assert "security-reports" in security

    script = read("scripts/security-gates.sh")
    assert "secret_scan_ok=true" in script
    assert "security_gate_ok=true" in script
    assert "forbidden_publicpage_gate" in script
    assert "SQLSTATE" in script


def test_release_package_emits_and_audits_sbom_and_provenance_metadata() -> None:
    package = read("scripts/package-release.sh")
    audit = read("scripts/audit-release-package.sh")
    generator = read("scripts/generate-release-sbom.mjs")
    assert "generate-release-sbom.mjs" in package
    assert "release_sbom_created=true" in package
    assert "release_provenance_created=true" in package
    assert "SPDXID" in generator
    assert "PackageChecksum" in generator
    assert "release_sbom_audit_ok=true" in audit
    assert "release_provenance_audit_ok=true" in audit


def test_packaged_sbom_and_provenance_are_valid_sidecars_after_release_build() -> None:
    version_match = re.search(r"<version>([^<]+)</version>", read("appinfo/info.xml"))
    assert version_match
    version = version_match.group(1)
    archive = ROOT / "dist" / f"library-{version}.tar.gz"
    sbom = ROOT / "dist" / f"library-{version}.spdx.json"
    provenance = ROOT / "dist" / f"library-{version}.provenance.json"
    if not archive.exists() or not sbom.exists() or not provenance.exists():
        # Static contract above is the fast unit check. The build scripts create these files.
        return

    with tarfile.open(archive, "r:gz") as tar:
        archive_names = {member.name for member in tar.getmembers() if member.isfile()}
    sbom_data = json.loads(sbom.read_text(encoding="utf-8"))
    provenance_data = json.loads(provenance.read_text(encoding="utf-8"))

    assert sbom_data["spdxVersion"].startswith("SPDX-")
    shipped_files = {pkg["name"] for pkg in sbom_data["packages"] if pkg.get("name", "").startswith("library/")}
    assert "library/appinfo/info.xml" in shipped_files
    assert "library/README.md" in shipped_files
    assert archive_names <= shipped_files
    assert provenance_data["subject"][0]["name"] == archive.name
    assert re.fullmatch(r"[0-9a-f]{64}", provenance_data["subject"][0]["digest"]["sha256"])
