# NC34 developer deployment: genre placement alpha.18

The populated developer instance at `http://100.123.149.120:8088` runs signed `library 0.3.0-alpha.18` on Nextcloud `34.0.3.2`. The private archive is `/tmp/library-alpha18-release/library-0.3.0-alpha.18.tar.gz`, SHA-256 `7ed95bfcb33cf84165b8ceaee58aa1ca8dce6aaf8ad32c35fdebee8db0996290`. The previous alpha.17 app directory remains at `/tmp/library-before-alpha18` for rollback.

Genres now precedes Publication metadata in the detail page and spans the available width. This keeps the linked genre assignment above the metadata form when the page collapses to one column. The metadata form retains the alpha.17 width and picker overflow fixes. The frontend build completed with 1,299,877 bytes of staged assets against the 1,300,000-byte package budget.

`occ upgrade` completed, Apache was reloaded, `occ integrity:check-app library` returned no issues, and `occ status` reported maintenance mode off with no pending database upgrade. Authenticated visual acceptance is left to the owner on the developer instance.
