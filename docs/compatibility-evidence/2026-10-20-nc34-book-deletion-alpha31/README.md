# Confirmed book deletion — alpha.31

Status: implementation and verification in progress. Developer NC34 remains on alpha.30 until the deployment record is completed.

## Contract

Details offers a separate Delete book action. An authenticated GET to `/items/{itemId}/deletion` previews the file, associated OPF, retention reason and conditional parent cleanup. A CSRF-protected POST to that endpoint accepts only its encrypted, purpose/user/item-bound ten-minute confirmation token. All targets are resolved by owned file ID; cached paths never select replacement files for destructive operations. Stale identities, revisions or permissions require another confirmation.

The importer and deletion service use the same OPF precedence. Shared OPFs remain. Other formats, cover images, hidden files, configured roots, mount roots and ancestor folders are preserved. A request-local storage wrapper checks exact targets inside Nextcloud's existing exclusive delete lock and delegates to the original chain, preserving trash behavior. OPF consumer checks upgrade the parent lock for the deletion; empty-folder removal rechecks the storage directory, including hidden entries, inside the folder lock. Transactional file locking must be enabled. The adapter is restored in `finally` and does not intercept unrelated trash-retention operations.

Successful source deletion is followed by catalogue/derived-link cleanup; reading-list entries remain unavailable. File and database operations cannot be one transaction, so cleanup failures return explicit partial results. Normal change-journal reconciliation remains enabled. Restoring a source file and rescanning imports it again; removed Library-only edits are not recovered.

No database migration. Human acceptance: handbook H03-23.

## Verification and deployment

Final source, browser, package and installed-fixture results will be recorded here before handoff. Exact signed NC33–35 certification remains a separate App Store gate.
