#!/usr/bin/env bash
set -euo pipefail
if [ "$#" -ne 3 ]; then echo "Usage: $0 STAGE_PARENT TOP_NAME ARCHIVE" >&2; exit 2; fi
STAGE_PARENT="$1"
TOP_NAME="$2"
ARCHIVE="$3"
RELEASE_EPOCH="${SOURCE_DATE_EPOCH:-946684800}"
find "$STAGE_PARENT/$TOP_NAME" -type d -exec chmod 0755 {} +
find "$STAGE_PARENT/$TOP_NAME" -type f -exec chmod 0644 {} +
LC_ALL=C tar --sort=name --format=gnu --owner=0 --group=0 --numeric-owner \
  --mode='a=rX,u+w' --mtime="@${RELEASE_EPOCH}" -C "$STAGE_PARENT" -cf - "$TOP_NAME" \
  | gzip -n -9 > "$ARCHIVE"
