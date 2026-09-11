#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONTAINER="${NEXTCLOUD_CONTAINER:-nextcloud}"
APP_ID="library"
EXPECTED_VERSION="0.1.0-alpha.155"
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
if [ "$VERSION" != "$EXPECTED_VERSION" ]; then
  echo "release_version_mismatch=true"
  exit 1
fi
ARCHIVE="$ROOT/dist/${APP_ID}-${VERSION}.tar.gz"
DIST_DIR="$ROOT/dist"
CHECKSUM_BASENAME="${APP_ID}-${VERSION}.tar.gz.sha256"
CHECKSUM="$DIST_DIR/$CHECKSUM_BASENAME"

cd "$ROOT"

if [ ! -f "$ARCHIVE" ]; then
  echo "release_archive_missing=$ARCHIVE"
  echo "Run scripts/package-release.sh first."
  exit 1
fi

(cd "$DIST_DIR" && sha256sum -c "$CHECKSUM_BASENAME")

docker exec -u www-data "$CONTAINER" php occ app:disable library >/dev/null 2>&1 || true
docker exec -u root "$CONTAINER" sh -lc "rm -rf /var/www/html/custom_apps/library /tmp/library-${VERSION}.tar.gz"
docker cp "$ARCHIVE" "$CONTAINER:/tmp/library-${VERSION}.tar.gz"
docker exec -u root "$CONTAINER" sh -lc "
  cd /var/www/html/custom_apps &&
  tar -xzf /tmp/library-${VERSION}.tar.gz &&
  chown -R www-data:www-data library &&
  find library -type d -exec chmod 755 {} \\; &&
  find library -type f -exec chmod 644 {} \\;
"
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/appinfo/routes.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Controller/PageController.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Controller/SavedCollectionController.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Service/SavedCollectionService.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Migration/Version000100Date20260909162000.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Migration/Version000100Date20260909170000.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Migration/Version000100Date20260911120000.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Migration/Version000100Date20260911130000.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Migration/Version000100Date20260911140000.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Instrumentation/MonotonicClock.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Instrumentation/ScanProgressPolicy.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Metadata/MetadataFastPathDecision.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Metadata/MetadataInputFingerprint.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Metadata/PublicationMetadataService.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Service/FileIndexService.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Service/ItemService.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/lib/Service/LibraryScanner.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/templates/item-detail.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/templates/settings-personal.php
docker exec -u www-data "$CONTAINER" php occ app:enable library
docker exec -u www-data "$CONTAINER" php occ upgrade
INSTALLED_VERSION="$(docker exec -u www-data "$CONTAINER" php occ app:list --output=json | python3 -c 'import json, sys; print(json.load(sys.stdin).get("enabled", {}).get("library", ""))')"
if [ "$INSTALLED_VERSION" != "$EXPECTED_VERSION" ]; then
  echo "installed_release_version_mismatch=true"
  exit 1
fi
docker exec -u www-data "$CONTAINER" php occ router:list library | grep -E 'library\.(page|item|tag|scan|root|saved_collection|metadata|bulk)'

"$ROOT/scripts/smoke-unchanged-fast-path.sh"

npm run smoke:vue
npm run smoke:browser

printf 'release_package_smoke_ok=true\n'
printf 'release_package_version=%s\n' "$VERSION"
printf 'release_archive=%s\n' "$ARCHIVE"
