#!/usr/bin/env bash
# Produce and locally verify the two signatures required by the App Store.
set -euo pipefail
archive="${1:?Usage: sign-app-store.sh ARCHIVE PRIVATE_HANDOFF_DIRECTORY}"
handoff="${2:?Provide a private directory for the app registration proof}"
key="${NEXTCLOUD_SIGNING_PRIVATE_KEY:?Set the private key path}"
cert="${NEXTCLOUD_SIGNING_CERTIFICATE:?Set the certificate path}"
[[ -f "$archive" && -f "$key" && -f "$cert" ]]
umask 077
mkdir -p "$handoff"
chmod 0700 "$handoff"
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
openssl x509 -in "$cert" -pubkey -noout > "$work/public.pem"
printf library > "$work/app-id"
openssl dgst -sha512 -sign "$key" -out "$work/registration.sig" "$work/app-id"
openssl dgst -sha512 -verify "$work/public.pem" -signature "$work/registration.sig" "$work/app-id"
openssl base64 -in "$work/registration.sig" -out "$handoff/registration-signature.txt"
cp "$cert" "$handoff/library.crt"
openssl dgst -sha512 -sign "$key" -out "$work/archive.sig" "$archive"
openssl dgst -sha512 -verify "$work/public.pem" -signature "$work/archive.sig" "$archive"
openssl base64 -in "$work/archive.sig" -out "$archive.sig"
printf 'app_store_signatures_verified=true\n'
