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
import re
from pathlib import PurePosixPath

archive, top, version, explicit_require_signature_arg = sys.argv[1:5]
explicit_require_signature = explicit_require_signature_arg.lower() == "true"
require_signature = explicit_require_signature or '-' not in version
required = {
    f"{top}/appinfo/info.xml",
    f"{top}/appinfo/database.xml",
    f"{top}/appinfo/routes.php",
    f"{top}/lib/AppInfo/Application.php",
    f"{top}/templates/main.php",
    f"{top}/js/library-main-{re.sub(r'[^a-zA-Z0-9]+', '-', version)}.mjs",
    f"{top}/css/library-vue-{re.sub(r'[^a-zA-Z0-9]+', '-', version)}.css",
    f"{top}/README.md",
    f"{top}/LICENSE",
    f"{top}/CHANGELOG.md",
}
for locale in ("en", "de", "ar"):
    required.add(f"{top}/l10n/{locale}.js")
    required.add(f"{top}/l10n/{locale}.json")
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
allowed_root_files = {"README.md", "LICENSE", "CHANGELOG.md"}
asset_version = re.sub(r'[^a-zA-Z0-9]+', '-', version)
allowed_frontend_files = {
    "css/style.css", f"css/library-vue-{asset_version}.css",
    "js/library-detail.js", f"js/library-main-{asset_version}.mjs",
    "js/library-shell.js", "js/scan-progress.js",
}
max_package_frontend_bytes = 1_200_000
errors: list[str] = []
with tarfile.open(archive, "r:gz") as tar:
    members = tar.getmembers()
    names = [member.name for member in members]
    normalized_names: dict[str, str] = {}
    for member in members:
        name = member.name
        canonical_name = name[:-1] if name.endswith("/") else name
        components = canonical_name.split("/")
        unsafe_reason = None
        if not name or "\\" in name:
            unsafe_reason = "empty name or backslash"
        elif name.startswith("/") or re.match(r"^[A-Za-z]:", name):
            unsafe_reason = "absolute or Windows drive path"
        elif any(component in {"", ".", ".."} for component in components):
            unsafe_reason = "dot, dot-dot, or empty path component"
        elif any(re.match(r"^[A-Za-z]:$", component) for component in components):
            unsafe_reason = "Windows drive path component"
        elif PurePosixPath(canonical_name).as_posix() != canonical_name:
            unsafe_reason = "non-canonical path"
        if unsafe_reason:
            errors.append(f"unsafe or non-canonical archive entry ({unsafe_reason}): {name}")
            continue
        if canonical_name in normalized_names:
            errors.append(f"duplicate archive entry after normalization: {name} (already {normalized_names[canonical_name]})")
        else:
            normalized_names[canonical_name] = name
        if not (member.isfile() or member.isdir()):
            errors.append(f"unsupported archive entry type: {name}")
    if errors:
        print("release_package_audit_ok=false")
        print("\n".join(errors[:50]))
        if len(errors) > 50:
            print(f"... {len(errors) - 50} more errors")
        raise SystemExit(1)
    members_by_name = {member.name: member for member in members}
    for need in sorted(required):
        if need not in members_by_name:
            if need.endswith("/appinfo/signature.json"):
                errors.append(f"missing required signed release entry: {need}")
            else:
                errors.append(f"missing required package entry: {need}")
        elif not members_by_name[need].isfile():
            errors.append(f"required package entry is not a regular file: {need}")
    for member in members:
        name = member.name
        path = PurePosixPath(name)
        parts = set(path.parts)
        bad_parts = parts & forbidden_parts
        if bad_parts:
            errors.append(f"forbidden package path: {name}")
        if path.name in forbidden_files or path.match("*.key") or path.match("*.pem") or path.name.endswith(forbidden_suffixes):
            errors.append(f"forbidden package file: {name}")
        if not name.startswith(top + "/") and name != top:
            errors.append(f"entry outside top-level app directory: {name}")
        if len(path.parts) == 2 and path.parts[0] == top and not member.isdir() and path.name not in allowed_root_files:
            errors.append(f"unlisted root-level package file: {name}")
        if member.isfile() and path.suffix == ".map":
            errors.append(f"production source map forbidden: {name}")
        if member.isfile() and len(path.parts) >= 3 and path.parts[0] == top and path.parts[1] in {"js", "css"}:
            relative_frontend = "/".join(path.parts[1:])
            if relative_frontend not in allowed_frontend_files:
                errors.append(f"unlisted frontend package file: {name}")
    actual_frontend = {
        "/".join(PurePosixPath(member.name).parts[1:])
        for member in members if member.isfile() and len(PurePosixPath(member.name).parts) >= 3
        and PurePosixPath(member.name).parts[1] in {"js", "css"}
    }
    missing_frontend = allowed_frontend_files - actual_frontend
    if missing_frontend:
        errors.append(f"missing frontend manifest entries: {', '.join(sorted(missing_frontend))}")
    frontend_bytes = sum(
        member.size for member in members
        if member.isfile() and len(PurePosixPath(member.name).parts) >= 3
        and PurePosixPath(member.name).parts[1] in {"js", "css"}
    )
    if frontend_bytes > max_package_frontend_bytes:
        errors.append(f"package frontend budget exceeded: {frontend_bytes}/{max_package_frontend_bytes}")
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
print(f"package_frontend_bytes={frontend_bytes}")
PY

VERSIONED_ASSET_VERSION="$(printf '%s' "$VERSION" | sed 's/[^a-zA-Z0-9][^a-zA-Z0-9]*/-/g')"
node "$ROOT/scripts/validate-module-closure.mjs" \
  --archive "$ARCHIVE" \
  --entry "$TOP/js/library-main-${VERSIONED_ASSET_VERSION}.mjs" \
  --reject-orphans
