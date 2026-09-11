#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONTAINER="${NEXTCLOUD_CONTAINER:-nextcloud}"
APP_ID="library"
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
ARCHIVE="$ROOT/dist/${APP_ID}-${VERSION}.tar.gz"
CHECKSUM="$ARCHIVE.sha256"

cd "$ROOT"

if [ ! -f "$ARCHIVE" ]; then
  echo "release_archive_missing=$ARCHIVE"
  echo "Run scripts/package-release.sh first."
  exit 1
fi

sha256sum -c "$CHECKSUM"

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
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/templates/item-detail.php
docker exec -u www-data "$CONTAINER" php -l /var/www/html/custom_apps/library/templates/settings-personal.php
docker exec -u www-data "$CONTAINER" php occ app:enable library
docker exec -u www-data "$CONTAINER" php occ upgrade
docker exec -u www-data "$CONTAINER" php occ router:list library | grep -E 'library\.(page|item|tag|scan|root|saved_collection|metadata|bulk)'

npm run smoke:vue
npm run smoke:browser

printf 'release_package_smoke_ok=true\n'
printf 'release_package_version=%s\n' "$VERSION"
printf 'release_archive=%s\n' "$ARCHIVE"
