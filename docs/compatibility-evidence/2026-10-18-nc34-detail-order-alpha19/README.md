# NC34 developer deployment: detail section order alpha.19

The populated developer instance at `http://100.123.149.120:8088` runs signed `library 0.3.0-alpha.19` on Nextcloud `34.0.3.2`. The private archive is `/tmp/library-alpha19-release/library-0.3.0-alpha.19.tar.gz`, SHA-256 `941b8f6320f8ff2ea27fe6e42ca1917839833b300b8a6dfb63284ec6e0d04e02`. The previous alpha.18 app directory remains at `/tmp/library-before-alpha19` for rollback.

The detail page main column now reads: Publication metadata, Authors, Series, Genres, Save metadata. The save button submits the same metadata form via its form ID, so native field validation still applies. File metadata, tags, and comments remain in the separate side column or follow the main column when the page stacks. Directional help text was updated in English, German, and Arabic.

The staged frontend contains 1,300,995 bytes. The package and audit frontend budget was increased consistently from 1,300,000 to 1,320,000 bytes to allow this layout and text change. `occ upgrade` completed, Apache was reloaded, `occ integrity:check-app library` returned no issues, and `occ status` reported maintenance mode off with no pending database upgrade. Authenticated visual acceptance is left to the owner on the developer instance.
