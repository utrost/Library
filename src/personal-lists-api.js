import { generateUrl } from '@nextcloud/router'
import { t } from '@nextcloud/l10n'

async function performRequest(path = '', token = '', body = null) {
  const response = await fetch(`${generateUrl('/apps/library/api/lists')}${path}`, {
    method: body === null ? 'GET' : 'POST',
    credentials: 'same-origin',
    cache: 'no-store',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: token }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) {
    const message = response.status === 409
      ? t('library', 'This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.')
      : response.status === 404
        ? t('library', 'This list or entry is no longer available.')
        : response.status === 422
          ? t('library', 'Check the name, text length and selected books, then try again.')
          : t('library', 'Could not save or load the list. Check your connection and reload before retrying.')
    const error = new Error(message)
    error.status = response.status
    throw error
  }
  return response.json()
}

// Share only concurrent reads. No persisted cache: revisions/access are fetched again after changes.
const pendingReads = new Map()
export function listRequest(path = '', token = '', body = null) {
  if (body !== null) {
    pendingReads.clear()
    return performRequest(path, token, body).finally(() => pendingReads.clear())
  }
  if (pendingReads.has(path)) return pendingReads.get(path)
  const pending = performRequest(path, token).finally(() => {
    if (pendingReads.get(path) === pending) pendingReads.delete(path)
  })
  pendingReads.set(path, pending)
  return pending
}
