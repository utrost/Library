#!/usr/bin/env bash
set -euo pipefail

# Pin the CLI bundle and verify its official release checksum before use.
version=v2.27.4
sha256=393bf92b66596141ec93baf9b483f4a350f3749916c922fed0dd63c67706047d
install_dir="${LIBRARY_CODEQL_DIR:-${XDG_CACHE_HOME:-$HOME/.cache}/library-codeql/$version}"
if [ ! -x "$install_dir/codeql" ]; then
    for executable in curl sha256sum unzip; do
        command -v "$executable" >/dev/null || { echo "Missing $executable" >&2; exit 1; }
    done
    temporary_dir="$(mktemp -d -t library-codeql-XXXXXXXX)"
    trap 'rm -rf "$temporary_dir"' EXIT
    curl --fail --location --retry 3 --silent --show-error \
        "https://github.com/github/codeql-cli-binaries/releases/download/$version/codeql-linux64.zip" \
        --output "$temporary_dir/codeql-linux64.zip"
    printf '%s  %s\n' "$sha256" "$temporary_dir/codeql-linux64.zip" | sha256sum --check --status
    unzip -q "$temporary_dir/codeql-linux64.zip" -d "$temporary_dir"
    test -x "$temporary_dir/codeql/codeql"
    mkdir -p "$(dirname "$install_dir")"
    mv "$temporary_dir/codeql" "$install_dir"
fi
if [ ! -d "$HOME/.codeql/packages/codeql/javascript-queries/2.5.0" ] \
    || [ ! -d "$HOME/.codeql/packages/codeql/python-queries/1.9.0" ]; then
    "$install_dir/codeql" pack download codeql/javascript-queries@2.5.0 codeql/python-queries@1.9.0
fi
printf 'codeql_path=%s\n' "$install_dir/codeql"
