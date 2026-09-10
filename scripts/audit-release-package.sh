#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION="${1:-$(python3 - <<'PY'
from pathlib import Path
import re
info = Path('appinfo/info.xml').read_text(encoding='utf-8')
match = re.search(r'<version>([^<]+)</version>', info)
if not match:
    raise SystemExit('Could not read app version from appinfo/info.xml')
print(match.group(1))
PY
)}"
APP_ID="library"
ARCHIVE="$ROOT/dist/${APP_ID}-${VERSION}.tar.gz"
TOP="${APP_ID}-${VERSION}"

if [ ! -f "$ARCHIVE" ]; then
  echo "release_archive_missing=$ARCHIVE"
  exit 1
fi

python3 - "$ARCHIVE" "$TOP" <<'PY'
from __future__ import annotations
import sys
import tarfile
from pathlib import PurePosixPath

archive, top = sys.argv[1:3]
required = {
    f"{top}/appinfo/info.xml",
    f"{top}/appinfo/routes.php",
    f"{top}/lib/AppInfo/Application.php",
    f"{top}/templates/main.php",
    f"{top}/js/library-main.mjs",
    f"{top}/css/library-vue.css",
    f"{top}/README.md",
    f"{top}/LICENSE",
    f"{top}/CHANGELOG.md",
}
forbidden_parts = {
    ".git",
    ".github",
    ".pytest_cache",
    "node_modules",
    "build",
    "dist",
    "tests",
    "scripts",
    "src",
    "coverage",
    "__pycache__",
}
forbidden_files = {
    "package.json",
    "package-lock.json",
    "RELEASE.md",
    "vite.config.js",
    "vitest.config.js",
    "phpunit.xml",
    ".env",
}
errors: list[str] = []
with tarfile.open(archive, "r:gz") as tar:
    names = tar.getnames()
    name_set = set(names)
    for need in sorted(required):
        if need not in name_set:
            errors.append(f"missing required package entry: {need}")
    for name in names:
        path = PurePosixPath(name)
        parts = set(path.parts)
        bad_parts = parts & forbidden_parts
        if bad_parts:
            errors.append(f"forbidden package path: {name}")
        if path.name in forbidden_files or path.name.endswith((".pyc", ".pyo")):
            errors.append(f"forbidden package file: {name}")
        if not name.startswith(top + "/") and name != top:
            errors.append(f"entry outside top-level app directory: {name}")
if errors:
    print("release_package_audit_ok=false")
    print("\n".join(errors[:50]))
    if len(errors) > 50:
        print(f"... {len(errors) - 50} more errors")
    raise SystemExit(1)
print("release_package_audit_ok=true")
print(f"release_package_entries={len(names)}")
PY
