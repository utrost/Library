# Backup and recovery for Library 0.3

Library 0.3 supports **full Nextcloud instance recovery**, not a standalone
Library import. Back up the Nextcloud database and its config, custom-apps and
data directories from one consistent point. The data directory contains both
the publication files and Nextcloud appdata, including private Library author
portraits and cover thumbnails. Retain the app version or release archive that
matches the database backup. Follow Nextcloud's [backup](https://docs.nextcloud.com/server/stable/admin_manual/maintenance/backup.html)
and [restore](https://docs.nextcloud.com/server/stable/admin_manual/maintenance/restore.html)
procedures; maintenance mode is the supported consistency boundary.

| Data | Database plus data directory | Corrected-metadata JSON / sidecar ZIP |
| --- | --- | --- |
| Source books and Nextcloud file IDs | Yes | No |
| Corrected book metadata and provenance | Yes | Selected existing-book rows only |
| Reading lists, order and notes | Yes | No |
| Author identities, links, merges, bios and portraits | Yes | No |
| Series identities, assignments and operation history | Yes | No |
| App settings, saved filters and scan state | Yes | No |
| Cover thumbnails | Yes, in appdata; can also regenerate | No |

## Restore procedure

1. Put Nextcloud in maintenance mode and take a database and filesystem backup
   according to the administrator manual. Keep config, custom apps, data and
   database together. Include any external storage backup required to recover
   source publications; Library does not make a copy of those files.
2. On an isolated instance, restore all components from the same point and
   install the matching Library package. Restore the full data directory,
   including `appdata_*`. Do not rescan or import corrected-metadata JSON before
   checking the restored catalogue.
3. Run `occ maintenance:data-fingerprint` after the restore, as Nextcloud's
   [maintenance command reference](https://docs.nextcloud.com/server/stable/admin_manual/occ_system.html)
   directs. Confirm the Library app loads, a sample book opens, lists and notes
   retain order, author portraits and biographies appear, merged authors and
   series assignments remain, and corrected metadata is unchanged.
4. Leave maintenance mode only after those checks and a normal Nextcloud health
   check pass. On a clone, isolate outbound clients and scheduled jobs until
   verification is complete.

**Export corrected metadata** and **Export sidecar ZIP** are read-only partial
exports. Their import preview/apply works only after matching books have been
scanned into a Library installation. They cannot recreate author IDs, merges,
lists or photos, and are not a substitute for the instance backup above.

## Future standalone export

A later, versioned full Library export would need a manifest with source file
identity, stable portable author/series identity keys, ordered relationships,
list membership and notes, biographies, portraits and operation provenance.
Import would validate schema version and ownership, match source books, show
ambiguous/unmatched records, preview every changed relationship, and apply in
bounded resumable transactions. Local database IDs alone are not portable.
This format is not implemented in 0.3.
