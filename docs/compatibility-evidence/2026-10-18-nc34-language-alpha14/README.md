# NC34 private language build, 2026-10-18

The developer instance at `http://100.123.149.120:8088` was updated from signed alpha.13 to signed `0.3.0-alpha.14`. This revision preserves an older imported language's original text in provenance when the bounded backfill normalizes its catalogue code. The exact private archive is `/tmp/library-nc34-language-alpha14/library-0.3.0-alpha.14.tar.gz`, SHA-256 `0f72fe0118e73fafe7650e91b0032493246f527615af45f2bd76c2c46d064925`.

`occ upgrade` completed the app update and code integrity check. Apache was reloaded. `occ status` reported maintenance off and no pending database upgrade, `occ app:list` reported alpha.14, and `occ integrity:check-app library` returned cleanly. The prior alpha.13 app directory is retained at `/tmp/library-before-alpha14`, outside `custom_apps`.

This is deployment-health evidence. Authenticated browser behavior, mapping outcomes, populated-library filter cost, and the exact NC33–35 package matrix remain to be checked. Use [H03-15](../../human-test-handbook.md#h03-15--language-normalization-and-uncertain-source-values) for owner acceptance.
