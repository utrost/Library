#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_ID="library"
SIGNED=false
VERSION=""
for arg in "$@"; do
  case "$arg" in
    --signed)
      SIGNED=true
      ;;
    --help|-h)
      echo "Usage: scripts/package-release.sh [version] [--signed]"
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
DIST_DIR="$ROOT/dist"
STAGE_DIR="$DIST_DIR/$APP_ID"
ARCHIVE="$DIST_DIR/${APP_ID}-${VERSION}.tar.gz"
ARCHIVE_BASENAME="${APP_ID}-${VERSION}.tar.gz"

cd "$ROOT"
npm ci
npm run build
python -m pytest -q
./scripts/run-php-runtime-tests.sh

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
  --exclude=tests \
  --exclude=scripts \
  --exclude=src \
  --exclude=docs \
  --exclude=package.json \
  --exclude=package-lock.json \
  --exclude=RELEASE.md \
  --exclude='ALPHA.*-IMPLEMENTATION-REPORT.md' \
  --exclude=vite.config.js \
  --exclude='*.pyc' \
  -cf - . | tar -xf - -C "$STAGE_DIR"

node "$ROOT/scripts/stage-release-frontend.mjs" "$STAGE_DIR" "$VERSION"

if [ "$SIGNED" = true ]; then
  bash "$ROOT/scripts/sign-release-package.sh" "$STAGE_DIR"
fi

bash "$ROOT/scripts/create-reproducible-archive.sh" "$DIST_DIR" "$APP_ID" "$ARCHIVE"
(cd "$DIST_DIR" && sha256sum "$ARCHIVE_BASENAME" > "$ARCHIVE_BASENAME.sha256")
if [ "$SIGNED" = true ]; then
  bash "$ROOT/scripts/audit-release-package.sh" "$VERSION" --require-signature
else
  bash "$ROOT/scripts/audit-release-package.sh" "$VERSION"
fi
printf 'release_archive_created=true\n'
printf 'release_checksum_created=true\n'
