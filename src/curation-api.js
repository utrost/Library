import { generateUrl } from '@nextcloud/router'
import { t } from '@nextcloud/l10n'
export async function curationRequest(path, requestToken, data = {}, signal) {
  const response = await fetch(generateUrl(`/apps/library/api/curation${path}`), {
    method: 'POST', credentials: 'same-origin', cache: 'no-store', signal,
    headers: { requesttoken: requestToken, 'Content-Type': 'application/json' }, body: JSON.stringify(data),
  })
  const body = await response.json().catch(() => ({}))
  const messages = {
    catalogue_indexing: t('library', 'Author or series indexing is incomplete. Let background indexing finish, resolve any indexing errors, then retry. Completed archive records are retained.'),
    archive_size_limit: t('library', 'This archive exceeds the supported size limit. Retrying will not raise the limit. Use a Files and database backup for the full library.'),
    archive_limit: t('library', 'Archive storage is full. Delete an old archive and allow background cleanup to finish.'),
    archive_changed: t('library', 'This file differs from the interrupted upload. Resume with the original archive or start a new upload.'),
    archive_incomplete: t('library', 'The archive is incomplete. Nothing has been restored.'),
    tree_changed: t('library', 'Genres changed in another session. Reload before editing the hierarchy.'),
    genre_in_use: t('library', 'This genre has books or subgenres. Move them before deleting it.'),
    note_limit: t('library', 'This book already has 100 linked notes. Unlink a note before adding another.'),
  }
  if (!response.ok) throw new Error(messages[body.error] || (response.status === 409
    ? t('library', 'This operation changed or cannot proceed. Reload it and review the current values.')
    : response.status === 404 || response.status === 403
      ? t('library', 'This book, note or operation is unavailable to your account.')
      : t('library', 'Could not complete the operation. Check your input and try again.')))
  return body
}
