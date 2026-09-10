#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION=""
REQUIRE_SIGNATURE=false
for arg in "$@"; do
  case "$arg" in
    --require-signature)
      REQUIRE_SIGNATURE=true
      ;;
    --help|-h)
      echo "Usage: scripts/audit-release-package.sh [version] [--require-signature]"
      exit 0
      ;;
    *)
      if [ -n "$VERSION" ]; then
        echo "unexpected_argument=$arg" >&2
        exit 2
      fi
      VERSION="$arg"
      ;;
  esac
done
if [ -z "$VERSION" ]; then
  VERSION="$(python3 - <<'PY'
from pathlib import Path
import re
info = Path('appinfo/info.xml').read_text(encoding='utf-8')
match = re.search(r'<version>([^<]+)</version>', info)
if not match:
    raise SystemExit('Could not read app version from appinfo/info.xml')
print(match.group(1))
PY
)"
fi
APP_ID="library"
ARCHIVE="$ROOT/dist/${APP_ID}-${VERSION}.tar.gz"
TOP="$APP_ID"

if [ ! -f "$ARCHIVE" ]; then
  echo "release_archive_missing=$ARCHIVE"
  exit 1
fi

python3 - "$ARCHIVE" "$TOP" "$VERSION" "$REQUIRE_SIGNATURE" <<'PY'
from __future__ import annotations
import sys
import tarfile
from pathlib import PurePosixPath

archive, top, version, explicit_require_signature_arg = sys.argv[1:5]
explicit_require_signature = explicit_require_signature_arg.lower() == "true"
require_signature = explicit_require_signature or '-' not in version
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
if require_signature:
    required.add(f"{top}/appinfo/signature.json")
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
    "private.key",
    "signing.key",
}
forbidden_suffixes = (".pyc", ".pyo", ".key", ".pem")
errors: list[str] = []
with tarfile.open(archive, "r:gz") as tar:
    names = tar.getnames()
    name_set = set(names)
    for need in sorted(required):
        if need not in name_set:
            if need.endswith("/appinfo/signature.json"):
                errors.append(f"missing required signed release entry: {need}")
            else:
                errors.append(f"missing required package entry: {need}")
    for name in names:
        path = PurePosixPath(name)
        parts = set(path.parts)
        bad_parts = parts & forbidden_parts
        if bad_parts:
            errors.append(f"forbidden package path: {name}")
        if path.name in forbidden_files or path.match("*.key") or path.match("*.pem") or path.name.endswith(forbidden_suffixes):
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
if not require_signature:
    print("unsigned_alpha_package=true")
print(f"release_package_entries={len(names)}")
PY
