# Alpha.40 developer NC34 deployment

Signed alpha.40 from merged [PR #159](https://github.com/utrost/Library/pull/159) was installed on developer Nextcloud 34.0.3 on 2026-10-22. This is a historical checkpoint; alpha.41 supersedes it because of a catalogue response defect found during the installed smoke.

The merged source commit was `e38206e9a10dd1159fbfdfc88731039e40bfc311`. The signed archive `library-0.3.0-alpha.40.tar.gz` had SHA-256 `bf7b179b069120bab34144c9dd1a70f11da2a6284652f4c80d2a4e97e24603c8`. [Required CI](https://github.com/utrost/Library/actions/runs/39757587655), including the GUI job, passed. The archive passed signature, module-closure, frontend-size, SBOM and provenance audits.

The additive upgrade created `workflow_sort_rank`, indexed it with user, title and ID, and backfilled existing reading statuses. Maintenance mode was disabled after upgrade, integrity passed and the installed template, JavaScript and CSS matched the signed package. Catalogue rows remained **107,717 before and after**. The previous app is retained at `/tmp/library-before-alpha40-20261022T095756Z` for rollback.

Read-only installed timing for the first three results on the 107,717-book catalogue: title sort **8.524 s**, reading-status sort **8.549 s**, and Not set filter **8.586 s**. Alpha.39's reading-status sort had taken **21.761 s**. Most time is shared catalogue counting work, not the indexed ordering itself.

The installed smoke then found that reading-status sort returned the correct first IDs but blank creator, format, path and status fields. A direct joined SQL query confirmed those values were present in storage. Reflection on Nextcloud's query builder confirmed that selecting narrow columns on a clone also changed the original builder's SELECT. Alpha.41 restores the full projection before the second fetch. No source books were changed by this smoke.

This checkpoint does not certify NC33–35 compatibility or human acceptance.
