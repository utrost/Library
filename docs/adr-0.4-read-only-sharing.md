# Decision record: first read-only shared Library shelf

Status: provisional implementation contract, 2026-11-05. Tracks [#188](https://github.com/utrost/Library/issues/188). Multi-user and storage certification remain open.

## Scope and authority

One owner grants one enabled, non-root Library shelf to one existing local Nextcloud user. The owner retains the only catalogue rows, file identities and metadata corrections. A grant is `(owner user, root ID, recipient user, root file ID)`. The root file ID pins a grant to the folder selected at grant time; a later folder at the same path cannot inherit access. The underlying Nextcloud Files permission is the authority for reading a book. The Library grant is an additional requirement, never a substitute for Files access.

Before creating access, the owner must separately share the folder read-only in Nextcloud Files and the recipient must accept it. The owner then reviews the exact recipient and shelf in Library. Nextcloud's policy-aware collaborator search must return the exact user at both review and confirmation; its autocomplete filters apply on older supported server versions too. Confirmation rechecks the root file ID and existing read-only Files access. Library does not create a Files share: Nextcloud marks the app disabled before running uninstall repair steps and suppresses repair-step exceptions, so a failed managed-share cleanup cannot prevent residual Files access. Library never deletes a pre-existing Files share. It refuses a grant when the same folder is writable to the recipient. Recipient views fail closed if the folder or an individual book becomes writable, inaccessible or changes identity.

A Files folder share exposes the entire selected folder through Nextcloud Files, including subfolders and files Library has not indexed. The owner review must say this explicitly. Library's recipient catalogue is narrower: it lists only indexed publication records that pass per-file access checks.

The source shelf may contain subfolders. Only indexed, unmarked books assigned to that root are candidates. Every row is resolved from its cached relative path within the recipient-visible root and compared with the indexed file ID before display, cover preview or Open handoff. This keeps stale catalogue paths from becoming authority to read a replacement file. The owner path and file ID are internal; they are not sent in recipient book projections.

## Permission and lifecycle matrix

| Situation | Recipient catalogue | Files action |
| --- | --- | --- |
| Owner with enabled owned shelf | Owner's normal editor | May grant a named user |
| Named recipient, active grant, read-only Files mount | Shared read-only view | Open through Nextcloud by checked file ID |
| Recipient has not accepted the Files share | No shared view yet | Await acceptance in Files |
| Recipient has a writable mount to the same folder | No new grant; an existing grant becomes hidden | Owner must change Files permissions separately |
| Another user or admin without a grant | Generic 404 | No Library-issued file URL |
| Disabled/deleted owner, moved/replaced root, or revoked grant | Generic 404 | Managed share cleanup runs on revocation |
| Source file moved, replaced, marked for deletion, or unreadable | Book omitted or generic 404 | No cover/Open URL |
| Existing read-only Files share | Active grant can reuse it | Revocation leaves that Files share intact |
| Managed Files share created by an earlier development build | Existing grant owns its ID | Revocation attempts to delete only that verified ID; check Files manually if cleanup fails |

Other mounts and externally backed folders may have additional Nextcloud behavior. A share operation that Nextcloud rejects is reported as a failure; Library does not weaken Files permission checks to work around it. Read-only here means no editing or owner actions in Library, and no writable Files permission through the mounted folder; it does not revoke access the recipient already has elsewhere.

## Data and surfaces

Recipient projections include title, subtitle, author credit, publisher, publication date, format, language, subjects and description. The owner may have corrected those publication fields. Recipients do not receive the owner's file path, stored personal rating, reading status, favorites, lists, notes, comments, diagnostics, edit URLs or export endpoints. The dedicated shared view has no mutation controls. Owner catalogue, scan and metadata APIs continue to use the session user ID and do not accept an owner ID from a recipient.

Covers use a validated owner cover override where one exists, otherwise Nextcloud's preview of the recipient-readable file or a generic placeholder. Every request rechecks recipient access and file identity before reading cover data. The response is private and non-cacheable. The Open link points to Nextcloud's file-ID route after a fresh access and identity check; Files enforces the permission again when the recipient opens it. This first slice has no Library-mediated download or reader progress endpoint.

## Storage, recovery and release gate

`library_root_shares` is additive and stores no copied book records. New grants refer only to existing read-only Files access and do not store a managed Files share ID. Earlier development builds could create managed Files shares; their provider-qualified IDs and recovery markers are retained so revocation can identify and clean up only those exact shares. Earlier unprefixed internal development IDs are normalized on lookup. Account cleanup removes grants; Nextcloud owns normal account and Files-share deletion behavior. Root path changes, disabling and removal first attempt to revoke their grants. Revocation marks a grant hidden before deleting a legacy managed Files share; failed cleanup remains retryable. Library does not purge files.

Grant and revoke attempts for the same shelf and recipient use a Nextcloud lock; shelf path, disable and delete operations hold a root lock through revocation and mutation. An uninstall repair step revokes Library grants on app disable and uninstall, and a lifecycle lock plus persistent shutdown marker blocks new grants while that pass runs. The hook retains a hidden, retryable row if legacy managed Files cleanup fails. NC34 disposable verification showed that Nextcloud still disables an app after a repair-step failure, leaving the legacy Files share active. New Library grants therefore require an existing Files share. Interrupted operations, edited share notes and residual legacy grants still require recovery work in [#197](https://github.com/utrost/Library/issues/197). The permission matrix also needs NC33–35, three-database, multi-user, read-only mount, concurrent revocation and large-library verification under [#194](https://github.com/utrost/Library/issues/194) before the implementation can ship.

The repair step is a best-effort cleanup for legacy managed shares, not a guarantee that disable revokes Files access. If it cannot identify or delete an exact managed share, an administrator must resolve that Files share in Nextcloud Files; disabling Library is not proof that access ended. Existing manual Files shares intentionally remain active after Library is disabled.
