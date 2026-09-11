#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if command -v php >/dev/null 2>&1; then
    exec php "$repo_dir/tests/php/metadata_fast_path_test.php"
fi

if command -v docker >/dev/null 2>&1 && docker image inspect php:8.3-cli >/dev/null 2>&1; then
    exec docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/metadata_fast_path_test.php
fi

echo "PHP runtime tests require host php or a locally available php:8.3-cli Docker image" >&2
exit 1
