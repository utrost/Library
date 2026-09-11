from pathlib import Path


ROOT = Path(__file__).parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_alpha_159_real_gates_are_complete_but_deferred_gates_remain_explicit():
    readme = read("README.md")
    changelog = read("CHANGELOG.md")
    release = read("RELEASE.md")
    readiness = read("docs/app-store-readiness.md")
    risk = read("docs/current-state-and-risk-register.md")
    architecture = read("docs/architecture-review.md")
    combined = "\n".join((readme, changelog, release, readiness, risk, architecture))

    assert "Current source candidate: `0.1.0-alpha.165`." in readme
    assert "727 Python tests, 9 PHP runtime programs, 26 Vitest tests" in readme
    assert "`release_package_smoke_ok=true`" in readme
    assert "`No upgrade required`" in readme
    assert "fresh-database migration rehearsal remains pending" in readme
    assert "performance instrumentation is still pending" not in readme
    assert "Alpha.159 exact-package/live evidence is complete" in readiness
    assert "Alpha.159 verification is complete" in risk
    assert "Alpha.159 verification evidence" in release
    assert "one authoritative observation" in changelog
    assert "one authoritative observation" in architecture
    assert "immediately before upsert" in changelog
    assert "outside this physical boundary" in changelog
    for overstated_boundary in ("two matching", "jointly validated", "compare/reject boundary", "either observation"):
        assert overstated_boundary not in combined
    assert "4287ec3f7a798ba6e6000900ca69aee1540b163146f53262a05e49095718c5d7" in combined
    for deferred in ("fresh-database migration rehearsal", "realistic scale data gates", "signed package and App Store submission", "formal Trust-and-scale phase closure"):
        assert deferred in combined

    stale_pending_claims = (
        "Exact alpha.158 package, checksum, install, migration, 40-file scan, API, and browser evidence is pending.",
        "No alpha.158 archive, checksum verification, install, database migration, 40-file scan, API smoke, or browser smoke has been completed",
        "alpha.158 exact-package and live migration rehearsal remain pending",
        "exact-package/live alpha.158 evidence",
        "alpha.160 packaging and live gates have not run",
        "package and live gates remain pending",
        "alpha.160 exact-package/live and fresh-database migration rehearsals remain pending",
        "complete local gate, package/audit, exact-package install, live smoke",
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
