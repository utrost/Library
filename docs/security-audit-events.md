# Library security audit events

Library emits app-specific structured events through the Nextcloud logger for security-relevant operations. Search for the message prefix:

```text
library.security_audit
```

Each event carries `event_schema`, `app`, `event`, `actor_id`, `operation`, `target_type`, `outcome`, `request_id`, and `correlation_id`. Event context is allowlisted and bounded. It intentionally excludes raw metadata JSON, comments, filenames, paths, cover bytes, tokens, passwords, credentials, uploaded content, and other secrets.

## Event names

- `library.root.enabled`: root enable/disable success.
- `library.root.delete`: root deletion success or rejected delete confirmation.
- `library.metadata_import.preview`: corrected-metadata import preview success/rejection.
- `library.metadata_import.apply`: corrected-metadata import apply success/rejection.
- `library.metadata_batch.reset`: batch metadata reset success.
- `library.metadata_batch.edit`: batch metadata edit success.
- `library.metadata_batch.limit_rejected`: batch metadata operation rejected by batch-size limits.
- `library.metadata_batch.selection_rejected`: batch metadata operation rejected because the selected IDs were invalid.
- `library.bulk_tag.assign`: bulk tag assignment success.
- `library.bulk_tag.remove`: bulk tag removal success.
- `library.bulk_tag.limit_rejected`: bulk tag operation rejected by batch-size limits.
- `library.bulk_tag.selection_rejected`: bulk tag operation rejected because the selected IDs were invalid.
- `library.manual_cover.replace`: manual cover upload/replacement success or rejection.
- `library.manual_cover.revert`: manual cover revert success.
- `library.archive_cover.blocked`: archive-cover extractor timeout or resource-limit block.

## Monitoring guidance

Start with conservative alerting and tune after observing alpha traffic:

- Alert on 5 rejected events in 10 minutes for the same actor and operation.
- Alert on 3 `library.archive_cover.blocked` timeout/resource-limit events in 10 minutes for the same actor.
- Review any burst of root deletion, manual cover replacement, or metadata apply events outside expected tester activity.
- Treat `correlation_id` as the support handle to pair user reports with the server log entry.

## Retention expectation

Keep application logs containing `library.security_audit` for at least 30 days on alpha/test instances, or the same retention period as Nextcloud security/authentication logs if that is longer. Rotate normally; these events do not require storing request bodies or uploaded bytes.
