# Decision record: first read-only shared Library shelf

Status: provisional implementation contract, updated 2026-11-06. Tracks [#188](https://github.com/utrost/Library/issues/188) and [#196](https://github.com/utrost/Library/issues/196). Multi-user and storage certification remain open. The original Files-backed design below remains available; the new mode is defined here first.

## Library-only selected-book mode

An owner can choose a personal list containing 1–100 indexed books from one enabled, owned shelf. Review shows the list, count and an expandable list of exact book titles and source paths for the owner. Confirmation rechecks the list and source identities, then stores a fixed `(grant ID, item ID, source file ID)` snapshot in `library_share_books`. Later list edits do not add books to the grant. Changing the selection requires revoking and granting again. No Nextcloud Files share or recipient mount is created or required.

For every request, Library checks the named recipient, active grant, enabled owner and shelf, current root identity, snapshot membership, current indexed book/source file ID, path containment and owner read permission. Missing, replaced, moved, marked or unreadable sources fail closed. The recipient can browse publication details and covers, and download only selected source books through Library. The content response streams an attachment with a generic filename, `application/octet-stream`, `nosniff` and private, no-store cache policy. It accepts no arbitrary path. The Nextcloud reader is unavailable in this mode without a separate Files share. No personal notes, ratings, reading status or list entries are copied; only the list name is retained as a share label.

Revocation blocks new requests. A response already authorized and streaming when revocation occurs may finish. Existing Files-backed grants remain Files-backed; there is no automatic conversion. Library-only access does not remove any independent Files share that the recipient already has. The Files-backed contract below applies to that mode only.

Downloads and cover reads hold a Nextcloud shared file lock across a fresh storage-cache identity/ETag check and reading. A cached Node is insufficient: a replacement at the old path is rejected under the lock. Byte-range requests and conditional requests pass through authorization before Nextcloud handles them. Transactional file locking must be enabled; Library-only grants fail closed when it is disabled. Storage changes made outside Nextcloud's locking and file-cache mechanisms remain subject to the underlying storage's consistency guarantees.

### Alternatives considered

- Per-book Files shares would enable the normal Files viewer, but create independently persistent access for each book. Disable/uninstall recovery would have the same managed-share failure boundary as the earlier folder-share design, multiplied by the selection size.
- Library-controlled streaming keeps access within the app and its explicit selection. It avoids companion-file exposure and persistent Files grants, at the cost of download-only access in this first slice. This is the selected design.

## Scope and authority

One owner grants one enabled, non-root Library shelf to one existing local Nextcloud user. The owner retains the only catalogue rows, file identities and metadata corrections. A grant is `(owner user, root ID, recipient user, root file ID)`. The root file ID pins a grant to the folder selected at grant time; a later folder at the same path cannot inherit access. In Files-backed mode, the underlying Nextcloud Files permission is the authority for reading a book. The Library grant is an additional requirement.

Before creating access, the owner must separately share the folder read-only in Nextcloud Files and the recipient must accept it. The owner then reviews the exact recipient and shelf in Library. Nextcloud's policy-aware collaborator search must return the exact user at both review and confirmation; its autocomplete filters apply on older supported server versions too. Confirmation rechecks the root file ID and existing read-only Files access. Library does not create a Files share: Nextcloud marks the app disabled before running uninstall repair steps and suppresses repair-step exceptions, so a failed managed-share cleanup cannot prevent residual Files access. Library never deletes a pre-existing Files share. It refuses a grant when the same folder is writable to the recipient. Recipient views fail closed if the folder or an individual book becomes writable, inaccessible or changes identity.

A Files folder share exposes the entire selected folder through Nextcloud Files, including subfolders and files Library has not indexed. The owner review must say this explicitly. Library's recipient catalogue is narrower: it lists only indexed publication records that pass per-file access checks.

The source shelf may contain subfolders. Only indexed, unmarked books assigned to that root are candidates. Every row is resolved from its cached relative path within the recipient-visible root and compared with the indexed file ID before display, cover preview or Open handoff. This keeps stale catalogue paths from becoming authority to read a replacement file. The owner path and file ID are internal; they are not sent in recipient book projections.

## Permission and lifecycle matrix

| Situation | Recipient catalogue | Files action |
| --- | --- | --- |
| Owner with enabled owned shelf | Owner's normal editor | May grant a named user |
| Named recipient, active grant, read-only Files mount | Shared read-only view | Open through Nextcloud by checked file ID |
| Named recipient, active Library-only grant, selected book | Shared read-only view | Download through Library; no Files mount required |
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

Covers use a validated owner cover override where one exists, otherwise Nextcloud's preview of the authorized file or a generic placeholder. Every request rechecks access and file identity before reading cover data. The response is private and non-cacheable. In Files-backed mode, Open points to Nextcloud's file-ID route after a fresh check; Files enforces permission again when the recipient opens it. Neither mode has a shared reader progress endpoint.

## Storage, recovery and release gate

`library_root_shares` stores grant mode and a short snapshot label. `library_share_books` stores only selected item/source file IDs, not copied publication or personal metadata. New Files-backed grants refer to existing read-only Files access; Library-only grants use an explicit snapshot. Neither creates a managed Files share. Earlier development builds could create managed Files shares; their provider-qualified IDs and recovery markers are retained so revocation can identify and clean up only those exact shares. Earlier unprefixed internal development IDs are normalized on lookup. Account cleanup removes grants; Nextcloud owns normal account and Files-share deletion behavior. Root path changes, disabling and removal first attempt to revoke their grants. Revocation marks a grant hidden before deleting a legacy managed Files share; failed cleanup remains retryable. Library does not purge files.

Grant and revoke attempts for the same shelf and recipient use a Nextcloud lock; shelf path, disable and delete operations hold a root lock through revocation and mutation. An uninstall repair step revokes Library grants on app disable and uninstall, and a lifecycle lock plus persistent shutdown marker blocks new grants while that pass runs. The hook retains a hidden, retryable row if legacy managed Files cleanup fails. NC34 disposable verification showed that Nextcloud still disables an app after a repair-step failure, leaving the legacy Files share active. New grants therefore never create a Files share. Interrupted operations, edited share notes and residual legacy grants still require recovery work in [#197](https://github.com/utrost/Library/issues/197). The permission matrix also needs three-database, concurrent revocation and large-library verification under [#194](https://github.com/utrost/Library/issues/194) before the implementation can ship.

The repair step is a best-effort cleanup for legacy managed shares, not a guarantee that disable revokes Files access. If it cannot identify or delete an exact managed share, an administrator must resolve that Files share in Nextcloud Files; disabling Library is not proof that access ended. Existing manual Files shares intentionally remain active after Library is disabled.
