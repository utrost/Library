#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPORT_DIR="$ROOT/security-reports"
mkdir -p "$REPORT_DIR"
cd "$ROOT"

python3 - <<'PY'
from __future__ import annotations

import json
import re
from pathlib import Path

root = Path.cwd()
report_dir = root / "security-reports"
report_dir.mkdir(exist_ok=True)

skip_dirs = {
    ".git", "node_modules", "dist", "build", ".pytest_cache", "playwright-report", "test-results", "coverage", "__pycache__"
}
skip_suffixes = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".tar", ".gz", ".zip", ".sqlite", ".db"}

# High-confidence secret regexes only. Keep this intentionally narrow to avoid noisy
# local development fixtures; add allowed test fixtures in allow_secret_lines.
secret_patterns = [
    ("github_pat", re.compile(r"github_pat_[A-Za-z0-9_]{40,}")),
    ("ghp_token", re.compile(r"ghp_[A-Za-z0-9]{36,}")),
    ("aws_access_key", re.compile(r"AKIA[0-9A-Z]{16}")),
    ("slack_token", re.compile(r"xox[baprs]-[A-Za-z0-9-]{20,}")),
    ("private_key_header", re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----")),
]
allow_secret_lines = [
    re.compile(r"secret_patterns = \["),
    re.compile(r"github_pat_\[A-Za-z0-9_\]"),
    re.compile(r"ghp_\[A-Za-z0-9\]"),
    re.compile(r"AKIA\[0-9A-Z\]"),
    re.compile(r"xox\[baprs\]"),
    re.compile(r"BEGIN \(\?:RSA"),
]

findings: list[dict[str, object]] = []
for path in sorted(root.rglob("*")):
    if not path.is_file():
        continue
    rel = path.relative_to(root).as_posix()
    if any(part in skip_dirs for part in path.relative_to(root).parts):
        continue
    if path.suffix.lower() in skip_suffixes:
        continue
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        continue
    for lineno, line in enumerate(text.splitlines(), 1):
        if any(pattern.search(line) for pattern in allow_secret_lines):
            continue
        for name, pattern in secret_patterns:
            if pattern.search(line):
                findings.append({"file": rel, "line": lineno, "rule": name})

(report_dir / "secret-scan.json").write_text(json.dumps({"findings": findings}, indent=2) + "\n", encoding="utf-8")
if findings:
    print("secret_scan_ok=false")
    for item in findings[:20]:
        print(f"secret_finding={item['file']}:{item['line']}:{item['rule']}")
    raise SystemExit(1)
print("secret_scan_ok=true")

# App-specific static gates. These are intentionally focused on regressions we
# already fixed for this Nextcloud app: no raw SQLSTATE/user paths in public
# diagnostic projection markers, and no accidental public native sidebar route.
app_findings: list[dict[str, object]] = []
item_page = root / "lib" / "Controller" / "ItemPageController.php"
if item_page.exists():
    item_source = item_page.read_text(encoding="utf-8")
    sidebar_region = item_source.split("function sidebar", 1)[0][-500:] if "function sidebar" in item_source else item_source
    if "PublicPage" in sidebar_region:
        app_findings.append({"rule": "forbidden_publicpage_gate", "file": item_page.relative_to(root).as_posix(), "detail": "sidebar route must not be PublicPage"})

public_projection_files = [
    root / "lib" / "Service" / "ItemService.php",
    root / "lib" / "Service" / "LibraryScanner.php",
    root / "lib" / "Controller" / "SafeDiagnosticController.php",
]
raw_needles = ["SQLSTATE", "/var/www/html/data", "Traceback", "PDOException"]
for path in public_projection_files:
    if not path.exists():
        continue
    text = path.read_text(encoding="utf-8")
    # The code may include sanitizer deny-list needles in tests/comments; only flag
    # obvious direct public assignment/return strings, not sanitizer references.
    for needle in raw_needles:
        if f"'public' => '{needle}" in text or f'"public" => "{needle}' in text:
            app_findings.append({"rule": "raw_diagnostic_exposure_gate", "file": path.relative_to(root).as_posix(), "detail": needle})

(report_dir / "app-static-security.json").write_text(json.dumps({"findings": app_findings}, indent=2) + "\n", encoding="utf-8")
if app_findings:
    print("security_gate_ok=false")
    print("forbidden_publicpage_gate=failed" if any(f["rule"] == "forbidden_publicpage_gate" for f in app_findings) else "forbidden_publicpage_gate=ok")
    for item in app_findings[:20]:
        print(f"security_finding={item['rule']}:{item['file']}:{item['detail']}")
    raise SystemExit(1)
print("forbidden_publicpage_gate=ok")
print("security_gate_ok=true")
PY
