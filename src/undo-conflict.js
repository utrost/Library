import { t } from '@nextcloud/l10n'

export function undoConflictText(book, fields, fieldLabels = {}) {
  const common = {
    file: t('library', 'Source file'), coverRevision: t('library', 'Cover'), identifiers: t('library', 'Identifiers'),
    title: t('library', 'Title'), description: t('library', 'Description'), subjects: t('library', 'Subjects'),
    publicationDate: t('library', 'Publication date'), starred: t('library', 'Favorite'), workflowStatus: t('library', 'Reading status'),
    subtitle: t('library', 'Subtitle'), creators: t('library', 'Authors'), personalRating: t('library', 'Personal rating'),
  }
  const labels = [...new Set(fields.map(key => fieldLabels[key] || common[key] || t('library', 'Book details')))]
  return t('library', 'Cannot undo changes to {book}. Changed since approval: {fields}.', {
    book, fields: labels.join(', ') || t('library', 'Book revision'),
  })
}
