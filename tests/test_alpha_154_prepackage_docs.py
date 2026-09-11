from pathlib import Path


ROOT = Path(__file__).parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_alpha_154_is_consistently_a_source_candidate_with_package_live_evidence_pending():
    readme = read("README.md")
    release = read("RELEASE.md")
    readiness = read("docs/app-store-readiness.md")
    risk = read("docs/current-state-and-risk-register.md")

    assert "Current source candidate: `0.1.0-alpha.156`." in readme
    assert "Exact alpha.156 package, checksum, install, migration, 40-file scan, API, and browser evidence is pending." in readme
    assert "performance instrumentation is still pending" not in readme
    assert "exact-package alpha.156 rehearsal" in readiness and "remain pending" in readiness
    assert "alpha.156 exact-package and live migration rehearsal remain pending" in risk
    assert "No alpha.156 archive, checksum verification, install, database migration, 40-file scan, API smoke, or browser smoke has been completed" in release


def test_all_40_file_and_package_live_evidence_is_explicitly_historical_alpha_153():
    checklist = read("docs/alpha-test-checklist.md")
    roadmap = read("docs/roadmap.md")
    architecture = read("docs/architecture-review.md")
    readiness = read("docs/app-store-readiness.md")
    risk = read("docs/current-state-and-risk-register.md")

    assert "Historical alpha.153 release baseline" in checklist
    assert "Historical alpha.153 exact-package smoke" in roadmap
    assert "Historical alpha.153 privacy-safe smallest-root validation" in architecture
    assert "Alpha.153 rehearsal evidence" in readiness
    assert "Historical exact-package evidence is for alpha.153" in risk
    assert "Release baseline: the exact alpha.156 package passed" not in checklist
