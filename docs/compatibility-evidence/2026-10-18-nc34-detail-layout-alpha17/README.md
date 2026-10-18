# NC34 developer deployment: detail layout alpha.17

The populated developer instance at `http://100.123.149.120:8088` runs signed `library 0.3.0-alpha.17` on Nextcloud `34.0.3.2`. The private archive is `/tmp/library-alpha17-release/library-0.3.0-alpha.17.tar.gz`, SHA-256 `e5cd51b8673b6f30fedafdb96d82b841aa505adad17889453cbc1943439ea679`. The previous alpha.16 app directory remains at `/tmp/library-before-alpha17` for rollback.

The detail page now places Publication metadata in the wide grid column and Genres in the side stack. The layout collapses based on available content width, and the language/subject entry controls may shrink without overlapping adjacent fields. The frontend build completed with 1,299,797 bytes of staged assets against the 1,300,000-byte package budget.

`occ upgrade` completed, Apache was reloaded, `occ integrity:check-app library` returned no issues, and `occ status` reported maintenance mode off with no pending database upgrade. Authenticated visual acceptance is left to the owner on the developer instance.
