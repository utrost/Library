#!/usr/bin/env bash
# Explicit development packaging only; release certification stays in package-release.sh.
set -euo pipefail
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"
version="$(node -p 'require("./package.json").version')"
[[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+-alpha\.[0-9]+$ ]] || { echo 'Development packaging requires an alpha version.' >&2; exit 2; }
[[ -z "$(git status --porcelain)" ]] || { echo 'Commit source and built assets before packaging.' >&2; exit 2; }
stage="$(mktemp -d -t library-development-package-XXXXXXXX)"
trap 'rm -rf "$stage"' EXIT
mkdir -p "$stage/library" dist
for entry in appinfo lib templates css js l10n img bin README.md CHANGELOG.md LICENSE; do
    cp -a "$entry" "$stage/library/"
done
rm -f "$stage/library/appinfo/signature.json"
node scripts/stage-release-frontend.mjs "$stage/library" "$version"
bash scripts/sign-release-package.sh "$stage/library"
archive="$root/dist/library-$version.tar.gz"
bash scripts/create-reproducible-archive.sh "$stage" library "$archive"
(cd dist && sha256sum "library-$version.tar.gz" > "library-$version.tar.gz.sha256")
node scripts/generate-release-sbom.mjs "$archive" "$version" "$root/dist"
bash scripts/audit-release-package.sh "$version" --require-signature
printf 'signed_development_package=true version=%s full_release_gate=false\n' "$version"
