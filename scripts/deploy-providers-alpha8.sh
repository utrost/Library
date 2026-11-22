#!/usr/bin/env bash
# Historical entry point for the alpha.8 upgrade.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
[[ "$(node -p 'require("./package.json").version')" == 0.4.0-alpha.8 ]] || exit 2
exec bash scripts/deploy-development-upgrade.sh "$@"
