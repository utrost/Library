# NC34 private language build, 2026-10-18

The developer instance at `http://100.123.149.120:8088` was updated from signed alpha.12 to signed `0.3.0-alpha.13`. The exact private archive is `/tmp/library-nc34-language-alpha13/library-0.3.0-alpha.13.tar.gz`, SHA-256 `655cd44aa04084cdb7c391dc1045ae576fcc7c3e8bd6c3702e78c18102b18dfd`.

`occ upgrade` applied the additive language-review migration and completed code integrity successfully. Apache was reloaded. `occ status` reported maintenance off and no pending database upgrade, `occ app:list` reported alpha.13, and `occ integrity:check-app library` returned cleanly. The prior app directory is retained outside `custom_apps` at `/tmp/library-before-alpha13` for operational rollback.

This is deployment-health evidence, not an authenticated browser or data-flow pass. Use [H03-15](../../human-test-handbook.md#h03-15--language-normalization-and-uncertain-source-values) for owner acceptance. The exact-package NC33–35 matrix and populated-library language-filter measurement remain open before release.
