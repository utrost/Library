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
DIST_DIR="$ROOT/dist"
STAGE_DIR="$DIST_DIR/library-${VERSION}"
ARCHIVE="$DIST_DIR/library-${VERSION}.tar.gz"

cd "$ROOT"
npm ci
npm run build
python -m pytest -q

rm -rf "$STAGE_DIR" "$ARCHIVE"
mkdir -p "$STAGE_DIR"

tar \
  --exclude=.git \
  --exclude=.gitignore \
  --exclude=.github \
  --exclude=.pytest_cache \
  --exclude='__pycache__' \
  --exclude=node_modules \
  --exclude=build \
  --exclude=dist \
  --exclude='*.pyc' \
  -cf - . | tar -xf - -C "$STAGE_DIR"

tar -C "$DIST_DIR" -czf "$ARCHIVE" "library-${VERSION}"
sha256sum "$ARCHIVE" > "$ARCHIVE.sha256"
printf 'release_archive=%s\n' "$ARCHIVE"
printf 'release_checksum=%s\n' "$ARCHIVE.sha256"
