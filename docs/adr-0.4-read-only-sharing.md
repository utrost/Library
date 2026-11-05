# Decision record: first read-only shared Library shelf

Status: provisional implementation contract, 2026-11-05. Tracks [#188](https://github.com/utrost/Library/issues/188). Multi-user and storage certification remain open.

## Scope and authority

One owner grants one enabled, non-root Library shelf to one existing local Nextcloud user. The owner retains the only catalogue rows, file identities and metadata corrections. A grant is `(owner user, root ID, recipient user, root file ID)`. The root file ID pins a grant to the folder selected at grant time; a later folder at the same path cannot inherit access. The underlying Nextcloud Files permission is the authority for reading a book. The Library grant is an additional requirement, never a substitute for Files access.

If the recipient does not already have a readable mount, Library requests one Nextcloud user share with read permission only and records its share ID. Existing Files shares remain owned by whoever created them. Library never deletes such an existing share. It refuses a grant when the same folder is already writable to the recipient. Recipient views fail closed if the folder or an individual book becomes writable, inaccessible or changes identity.

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
| Library-created Files share | Active grant owns its ID | Revocation hides Library first, then deletes only that verified ID |

Other mounts and externally backed folders may have additional Nextcloud behavior. A share operation that Nextcloud rejects is reported as a failure; Library does not weaken Files permission checks to work around it. Read-only here means no editing or owner actions in Library, and no writable Files permission through the mounted folder; it does not revoke access the recipient already has elsewhere.

## Data and surfaces

Recipient projections include title, subtitle, author credit, publisher, publication date, format, language, subjects and description. The owner may have corrected those publication fields. Recipients do not receive the owner's file path, stored personal rating, reading status, favorites, lists, notes, comments, diagnostics, edit URLs or export endpoints. The dedicated shared view has no mutation controls. Owner catalogue, scan and metadata APIs continue to use the session user ID and do not accept an owner ID from a recipient.

Covers are generated from the recipient-readable file using Nextcloud's preview service or a generic placeholder. The response is private and non-cacheable. The Open link points to Nextcloud's file-ID route after a fresh access and identity check; Files enforces the permission again when the recipient opens it. This first slice has no Library-mediated download or reader progress endpoint.

## Storage, recovery and release gate

`library_root_shares` is additive and stores no copied book records. Account cleanup removes grants; Nextcloud owns its normal account and Files-share deletion behavior. Root path changes, disabling and removal first attempt to revoke their grants. Revocation marks a grant hidden before deleting a managed Files share; failed cleanup remains retryable. Library does not purge files.

Creating a Files share and recording a Library grant are separate writes. Current code compensates a grant-record failure by removing the new Files share. If both writes and compensation fail, an orphan Files share can remain; recovery for that case is a release blocker under [#189](https://github.com/utrost/Library/issues/189). The permission matrix also needs NC33–35, three-database, multi-user, read-only mount, concurrent revocation and large-library verification under [#194](https://github.com/utrost/Library/issues/194) before the implementation can ship.
