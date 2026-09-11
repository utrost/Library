from pathlib import Path


ROOT = Path(__file__).parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_alpha_157_exact_package_evidence_is_complete_but_fresh_migration_is_pending():
    readme = read("README.md")
    release = read("RELEASE.md")
    readiness = read("docs/app-store-readiness.md")
    risk = read("docs/current-state-and-risk-register.md")

    assert "Current source candidate: `0.1.0-alpha.157`." in readme
    assert "718 Python tests, 7 PHP runtime programs, 26 Vitest tests" in readme
    assert "`release_package_smoke_ok=true`" in readme
    assert "`No upgrade required`" in readme
    assert "fresh database migration rehearsal remains pending" in readme
    assert "performance instrumentation is still pending" not in readme
    assert "exact-package alpha.157 rehearsal complete" in readiness
    assert "Alpha.157 verification is complete" in risk
    assert "Alpha.157 verification evidence" in release
    assert "fresh database migration rehearsal remains pending" in release

    combined = "\n".join((readme, release, readiness, risk))
    stale_pending_claims = (
        "Exact alpha.157 package, checksum, install, migration, 40-file scan, API, and browser evidence is pending.",
        "No alpha.157 archive, checksum verification, install, database migration, 40-file scan, API smoke, or browser smoke has been completed",
        "alpha.157 exact-package and live migration rehearsal remain pending",
        "exact-package/live alpha.157 evidence",
    )
    for claim in stale_pending_claims:
        assert claim not in combined


def test_alpha_157_and_historical_alpha_153_evidence_are_distinct():
    checklist = read("docs/alpha-test-checklist.md")
    roadmap = read("docs/roadmap.md")
    architecture = read("docs/architecture-review.md")
    readiness = read("docs/app-store-readiness.md")
    risk = read("docs/current-state-and-risk-register.md")

    assert "Historical alpha.153 release baseline" in checklist
    assert "Historical alpha.153 exact-package smoke" in roadmap
    assert "Historical alpha.153 privacy-safe smallest-root validation" in architecture
    assert "Alpha.153 rehearsal evidence" in readiness
    assert "Historical exact-package migration evidence for alpha.153" in risk
    assert "Alpha.157 release baseline" in checklist
    assert "zero catalogue rewrites, 40 markers and `source_observation_changes=0`" in checklist
