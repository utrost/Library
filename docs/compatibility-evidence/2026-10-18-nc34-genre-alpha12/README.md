# NC34 private genre build, 2026-10-18

The developer instance at `http://100.123.149.120:8088` was updated from the signed alpha.11 private build to signed `0.3.0-alpha.12` with the new curated genre workflow. The exact private archive is `/tmp/library-nc34-genre-alpha12/library-0.3.0-alpha.12.tar.gz`, SHA-256 `ebf32a78bdda2c44ec4ae963e5ccbf1704c78ba0f19d79d7123e247358c4038f`.

Deployment: the additive genre migration and app update completed. The first upgrade command's integrity phase stopped because the rollback copy was temporarily under `custom_apps`, where Nextcloud tried to treat it as another app. The rollback copy was moved to `/tmp/library-before-alpha12-genre`; maintenance mode was disabled. Subsequent `occ status` reported no pending database upgrade and maintenance off, `occ app:list` reported alpha.12, and `occ integrity:check-app library` returned cleanly. Apache was reloaded. An unauthenticated GET of `/apps/library/` returned HTTP 401, as expected for a private app page.

The version matrix, authenticated browser journey, genre data acceptance, and performance measurements have **not** been run for this package. This record establishes deployment health only. Use [H03-14](../../human-test-handbook.md#h03-14--curated-genres-and-scan-suggestions) for manual genre acceptance and run the exact-package NC33–35 matrix before release.
