#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STAGE_DIR="${1:-}"
CONTAINER="${NEXTCLOUD_CONTAINER:-nextcloud}"
APP_ID="library"
KEY_PATH="${NEXTCLOUD_SIGNING_PRIVATE_KEY:-}"
CERT_PATH="${NEXTCLOUD_SIGNING_CERTIFICATE:-}"
TMP_DIR="/tmp/${APP_ID}-signing-$$"

usage() {
  cat <<'USAGE'
Usage: scripts/sign-release-package.sh <staged-app-directory>

Required environment:
  NEXTCLOUD_SIGNING_PRIVATE_KEY   local path to the private signing key
  NEXTCLOUD_SIGNING_CERTIFICATE   local path to the signing certificate

Optional environment:
  NEXTCLOUD_CONTAINER             Nextcloud Docker container name (default: nextcloud)

The key and certificate are copied only into a temporary container directory,
used for occ integrity:sign-app, and removed before the script exits.
USAGE
}

cleanup() {
  docker exec -u root "$CONTAINER" sh -lc "rm -rf '$TMP_DIR'" >/dev/null 2>&1 || true
}
trap cleanup EXIT

if [ -z "$STAGE_DIR" ] || [ ! -d "$STAGE_DIR" ]; then
  usage
  echo "sign_stage_missing=$STAGE_DIR" >&2
  exit 2
fi
if [ -z "$KEY_PATH" ] || [ ! -f "$KEY_PATH" ]; then
  usage
  echo "NEXTCLOUD_SIGNING_PRIVATE_KEY must point to an existing private key file" >&2
  exit 2
fi
if [ -z "$CERT_PATH" ] || [ ! -f "$CERT_PATH" ]; then
  usage
  echo "NEXTCLOUD_SIGNING_CERTIFICATE must point to an existing certificate file" >&2
  exit 2
fi
if ! docker ps --format '{{.Names}}' | grep -Fxq "$CONTAINER"; then
  echo "nextcloud_container_missing=$CONTAINER" >&2
  exit 2
fi

rm -f "$STAGE_DIR/appinfo/signature.json"
docker exec -u root "$CONTAINER" sh -lc "rm -rf '$TMP_DIR' && mkdir -p '$TMP_DIR'"
docker cp "$STAGE_DIR" "$CONTAINER:$TMP_DIR/$APP_ID"
docker cp "$KEY_PATH" "$CONTAINER:$TMP_DIR/private.key"
docker cp "$CERT_PATH" "$CONTAINER:$TMP_DIR/certificate.crt"
docker exec -u www-data "$CONTAINER" php occ integrity:sign-app \
  --path="$TMP_DIR/$APP_ID" \
  --privateKey="$TMP_DIR/private.key" \
  --certificate="$TMP_DIR/certificate.crt"
docker cp "$CONTAINER:$TMP_DIR/$APP_ID/appinfo/signature.json" "$STAGE_DIR/appinfo/signature.json"
cleanup

if [ ! -s "$STAGE_DIR/appinfo/signature.json" ]; then
  echo "signature_missing=$STAGE_DIR/appinfo/signature.json" >&2
  exit 1
fi
if find "$STAGE_DIR" -type f \( -name 'private.key' -o -name 'signing.key' -o -name '*.key' -o -name '*.pem' \) | grep -q .; then
  echo "private_key_leaked_into_stage=true" >&2
  exit 1
fi

printf 'release_package_signed=true\n'
printf 'release_signature=%s\n' "$STAGE_DIR/appinfo/signature.json"
