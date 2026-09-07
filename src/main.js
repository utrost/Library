import { createApp } from 'vue'
import { loadState } from '@nextcloud/initial-state'
import { t } from '@nextcloud/l10n'
import App from './App.vue'

const initialState = loadState('library', 'catalogue', {})
const mountTarget = document.querySelector('#library-vue-root')
const state = {
  ...initialState,
  requestToken: mountTarget?.dataset.requestToken || initialState.requestToken || '',
}

function text(value) {
  return String(value ?? '')
}

function upper(value) {
  return text(value).toUpperCase()
}

function appendOptions(select, values, selectedValue, labelFor = text) {
  for (const value of values) {
    const option = document.createElement('option')
    option.value = text(value)
    option.textContent = labelFor(value)
    if (text(value) === text(selectedValue)) {
      option.selected = true
    }
    select.appendChild(option)
  }
}

function appendTextInput(form, labelText, name, value, placeholder = '') {
  const label = document.createElement('label')
  label.textContent = labelText
  const input = document.createElement('input')
  input.type = name === 'q' ? 'search' : 'text'
  input.name = name
  input.value = text(value)
  input.placeholder = placeholder
  label.appendChild(input)
  form.appendChild(label)
}

function appendSelect(form, labelText, name, value, emptyLabel, options, labelFor = text) {
  const label = document.createElement('label')
  label.textContent = labelText
  const select = document.createElement('select')
  select.name = name
  const empty = document.createElement('option')
  empty.value = ''
  empty.textContent = emptyLabel
  select.appendChild(empty)
  appendOptions(select, options, value, labelFor)
  label.appendChild(select)
  form.appendChild(label)
}

function fallbackHiddenRequestToken(state) {
  const token = text(state.requestToken || '')
  if (token === '') return null
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'requesttoken'
  input.value = token
  return input
}

function fallbackPublicationFilterUrl(publication) {
  const params = new URLSearchParams(window.location.search)
  params.set('publication', publication)
  params.set('sort', 'publication')
  params.delete('page')
  return `?${params.toString()}`
}

function fallbackHasActiveFilters(state) {
  const activeFilters = state.activeFilters || {}
  return Object.entries(activeFilters).some(([key, value]) => key !== 'sort' && text(value).trim() !== '')
}

function fallbackClearSearchUrl() {
  const params = new URLSearchParams(window.location.search)
  params.delete('q')
  params.delete('page')
  const query = params.toString()
  return query ? `?${query}` : '?'
}

function fallbackAppendEmptyAction(parent, href, className, label) {
  const link = document.createElement('a')
  link.href = href
  link.className = className
  link.textContent = label
  parent.appendChild(link)
  return link
}

function fallbackAppendMutedText(parent, label) {
  const span = document.createElement('span')
  span.className = 'library-muted'
  span.textContent = label
  parent.appendChild(span)
  return span
}

function fallbackFilterForm(state, pagination) {
  const activeFilters = state.activeFilters || {}
  const form = document.createElement('form')
  form.method = 'get'
  form.className = 'library-filter-bar'
  form.setAttribute('aria-label', t('library', 'Catalogue search and filters'))

  appendTextInput(form, t('library', 'Search title / author'), 'q', activeFilters.q, 'Camera, Eco, Rolleiflex...')
  appendSelect(form, t('library', 'Type'), 'type', activeFilters.type, t('library', 'All types'), ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'])
  appendTextInput(form, t('library', 'Nextcloud tag'), 'tag', activeFilters.tag, 'photography')
  appendSelect(form, t('library', 'Format'), 'format', activeFilters.format, t('library', 'All formats'), state.formats || [], upper)
  appendSelect(form, t('library', 'Shelf'), 'shelf', activeFilters.shelf, t('library', 'All shelves'), state.shelves || [])
  appendSelect(form, t('library', 'Scan status'), 'status', activeFilters.status, t('library', 'All scan statuses'), state.scanStatuses || [])
  appendSelect(form, t('library', 'Sort'), 'sort', activeFilters.sort || 'title', t('library', 'Sort by'), ['title', 'recent', 'publicationDate', 'format'])
  appendSelect(form, t('library', 'Page size'), 'limit', pagination.limit || 100, t('library', 'Page size'), [25, 50, 100, 250, 500])

  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.className = 'button primary'
  submit.setAttribute('aria-label', t('library', 'Apply catalogue filters'))
  submit.textContent = t('library', 'Apply filters')
  const clear = document.createElement('a')
  clear.href = '?'
  clear.className = 'button secondary'
  clear.setAttribute('aria-label', t('library', 'Clear catalogue filters'))
  clear.textContent = t('library', 'Clear')
  form.append(submit, clear)
  return form
}

function fallbackQuickFilterForm(state, pagination) {
  const activeFilters = state.activeFilters || {}
  const form = document.createElement('form')
  form.method = 'get'
  form.className = 'library-quick-filter-bar'
  form.setAttribute('aria-label', t('library', 'Quick catalogue filters'))
  let fallbackSubmitTimer = null
  const scheduleFallbackSubmit = () => {
    window.clearTimeout(fallbackSubmitTimer)
    fallbackSubmitTimer = window.setTimeout(() => form.requestSubmit(), 350)
  }

  for (const [key, value] of Object.entries(activeFilters)) {
    if (['q', 'sort', 'starred'].includes(key) || text(value).trim() === '') continue
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.name = key
    hidden.value = text(value)
    form.appendChild(hidden)
  }

  const searchLabel = document.createElement('label')
  searchLabel.className = 'library-quick-filter-search'
  searchLabel.textContent = t('library', 'Search')
  const input = document.createElement('input')
  input.type = 'search'
  input.name = 'q'
  input.value = text(activeFilters.q)
  input.placeholder = 'Camera, Eco, Rolleiflex...'
  input.addEventListener('input', scheduleFallbackSubmit)
  searchLabel.appendChild(input)
  form.appendChild(searchLabel)

  const quickSelects = [
    [t('library', 'Sort'), 'sort', activeFilters.sort || 'title', [['title', t('library', 'Title')], ['recent', t('library', 'Recently added')], ['publicationDate', t('library', 'Publication date')], ['publication', t('library', 'Series')], ['lastOpened', t('library', 'Recently opened')], ['format', t('library', 'Format')]]],
    [t('library', 'Starred'), 'starred', activeFilters.starred || '', [['', t('library', 'All')], ['1', t('library', 'Starred')]]],
    [t('library', 'Size'), 'limit', pagination.limit || 100, [[25, '25'], [50, '50'], [100, '100'], [250, '250'], [500, '500']]],
  ]
  for (const [labelText, name, value, options] of quickSelects) {
    const label = document.createElement('label')
    label.textContent = labelText
    const select = document.createElement('select')
    select.name = name
    for (const [optionValue, optionText] of options) {
      const option = document.createElement('option')
      option.value = text(optionValue)
      option.textContent = text(optionText)
      if (text(optionValue) === text(value)) option.selected = true
      select.appendChild(option)
    }
    select.addEventListener('change', () => form.requestSubmit())
    label.appendChild(select)
    form.appendChild(label)
  }

  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.className = 'button primary'
  submit.setAttribute('aria-label', t('library', 'Apply catalogue filters'))
  submit.textContent = t('library', 'Apply filters')
  const clear = document.createElement('a')
  clear.href = '?'
  clear.className = 'button secondary'
  clear.setAttribute('aria-label', t('library', 'Clear catalogue filters'))
  clear.textContent = t('library', 'Clear all')
  form.append(submit, clear)
  return form
}

function fallbackCatalogue(state, error) {
  const items = Array.isArray(state.items) ? state.items : []
  const pagination = state.cataloguePagination || {
    from: items.length > 0 ? 1 : 0,
    to: items.length,
    total: items.length,
    previousUrl: '',
    nextUrl: '',
  }
  const settingsUrl = text(state.settingsUrl || '')
  const metadataExportUrl = text(state.metadataExportUrl || '')
  const batchTagUrl = text(state.batchTagUrl || '/apps/library/bulk/tags')
  const batchTagRemoveUrl = text(state.batchTagRemoveUrl || '/apps/library/bulk/tags/remove')
  const batchMetadataResetUrl = text(state.batchMetadataResetUrl || '/apps/library/bulk/items/reset-filtered-fields')
  const batchMetadataEditPreviewUrl = text(state.batchMetadataEditPreviewUrl || '/apps/library/bulk/items/edit-preview')
  const batchCoverRefreshUrl = text(state.batchCoverRefreshUrl || '/apps/library/bulk/covers/refresh')

  const root = document.createElement('div')
  root.className = 'library-vue-catalogue library-vue-fallback'
  root.dataset.vueFallback = 'true'

  const panel = document.createElement('section')
  panel.className = 'library-panel'
  panel.setAttribute('aria-labelledby', 'library-catalogue-heading')

  const header = document.createElement('div')
  header.className = 'library-catalogue-header'
  const headerText = document.createElement('div')
  const heading = document.createElement('h2')
  heading.id = 'library-catalogue-heading'
  heading.textContent = t('library', 'Publication catalogue')
  const note = document.createElement('p')
  note.className = 'library-muted'
  note.textContent = t('library', 'Browse as a shelf/gallery first; open the details panel when metadata matters.')
  headerText.append(heading, note)
  const toolbar = document.createElement('nav')
  toolbar.className = 'library-catalogue-toolbar'
  toolbar.setAttribute('aria-label', t('library', 'Library actions'))
  if (settingsUrl) {
    const settingsLink = document.createElement('a')
    settingsLink.href = settingsUrl
    settingsLink.className = 'button secondary'
    settingsLink.setAttribute('aria-label', 'Open Library settings')
    settingsLink.textContent = t('library', 'Settings')
    toolbar.appendChild(settingsLink)
  }
  if (metadataExportUrl) {
    const exportLink = document.createElement('a')
    exportLink.href = metadataExportUrl
    exportLink.className = 'button secondary'
    exportLink.setAttribute('aria-label', 'Export corrected metadata')
    exportLink.textContent = t('library', 'Export corrected metadata')
    toolbar.appendChild(exportLink)
  }
  if (state.metadataSidecarManifestUrl) {
    const manifestLink = document.createElement('a')
    manifestLink.href = state.metadataSidecarManifestUrl
    manifestLink.className = 'button secondary'
    manifestLink.setAttribute('aria-label', 'Export sidecar manifest')
    manifestLink.textContent = t('library', 'Sidecar manifest')
    toolbar.appendChild(manifestLink)
  }
  if (state.metadataSidecarBundleUrl) {
    const zipLink = document.createElement('a')
    zipLink.href = state.metadataSidecarBundleUrl
    zipLink.className = 'button secondary'
    zipLink.setAttribute('aria-label', 'Export sidecar ZIP')
    zipLink.textContent = t('library', 'Sidecar ZIP')
    toolbar.appendChild(zipLink)
  }
  header.append(headerText, toolbar)
  panel.appendChild(header)
  panel.appendChild(fallbackQuickFilterForm(state, pagination))
  const filterPanel = document.createElement('details')
  filterPanel.className = 'library-filter-panel'
  const filterSummary = document.createElement('summary')
  filterSummary.className = 'library-filter-panel-summary'
  filterSummary.textContent = t('library', 'Show catalogue filters')
  filterPanel.append(filterSummary, fallbackFilterForm(state, pagination))
  panel.appendChild(filterPanel)

  const resultSummary = document.createElement('p')
  resultSummary.className = 'library-muted library-filter-result-summary'
  resultSummary.textContent = `Showing ${pagination.from ?? 0}–${pagination.to ?? items.length} of ${pagination.total ?? items.length} catalogue items`
  const clearAll = document.createElement('a')
  clearAll.href = '?'
  clearAll.textContent = ` ${t('library', 'Clear all filters')}`
  resultSummary.appendChild(clearAll)
  panel.appendChild(resultSummary)

  const batchActions = document.createElement('details')
  batchActions.className = 'library-batch-actions'
  const batchSummary = document.createElement('summary')
  batchSummary.textContent = `${t('library', 'Batch actions for current results')} (${pagination.total ?? items.length} ${t('library', 'Current filter result')})`
  const batchForm = document.createElement('form')
  batchForm.method = 'post'
  batchForm.action = batchTagUrl
  batchForm.className = 'library-batch-tag-form'
  const token = fallbackHiddenRequestToken(state)
  if (token) batchForm.appendChild(token)
  for (const [key, value] of Object.entries(state.activeFilters || {})) {
    if (text(value).trim() === '') continue
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.name = key
    hidden.value = text(value)
    batchForm.appendChild(hidden)
  }
  const batchLabel = document.createElement('label')
  batchLabel.textContent = t('library', 'Apply Nextcloud tag to current results')
  const batchInput = document.createElement('input')
  batchInput.type = 'text'
  batchInput.name = 'nextcloudTagName'
  batchInput.placeholder = 'batch-review'
  batchLabel.appendChild(batchInput)
  const batchButton = document.createElement('button')
  batchButton.type = 'submit'
  batchButton.className = 'button secondary'
  batchButton.textContent = t('library', 'Apply Nextcloud tag to current results')
  const batchNote = document.createElement('p')
  batchNote.className = 'library-muted'
  batchNote.textContent = t('library', 'Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata.')
  batchForm.append(batchLabel, batchButton, batchNote)
  const removeForm = document.createElement('form')
  removeForm.method = 'post'
  removeForm.action = batchTagRemoveUrl
  removeForm.className = 'library-batch-tag-remove-form'
  const removeToken = fallbackHiddenRequestToken(state)
  if (removeToken) removeForm.appendChild(removeToken)
  for (const [key, value] of Object.entries(state.activeFilters || {})) {
    if (text(value).trim() === '') continue
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.name = key
    hidden.value = text(value)
    removeForm.appendChild(hidden)
  }
  const removeLabel = document.createElement('label')
  removeLabel.textContent = t('library', 'Nextcloud tag')
  const removeInput = document.createElement('input')
  removeInput.type = 'text'
  removeInput.name = 'nextcloudTagName'
  removeInput.setAttribute('list', 'library-nextcloud-tag-suggestions')
  removeInput.placeholder = t('library', 'e.g. Review')
  removeInput.autocomplete = 'off'
  removeLabel.appendChild(removeInput)
  const removeButton = document.createElement('button')
  removeButton.type = 'submit'
  removeButton.className = 'button secondary'
  removeButton.textContent = t('library', 'Remove tag from current results')
  const removeNote = document.createElement('p')
  removeNote.className = 'library-muted'
  removeNote.textContent = t('library', 'Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.')
  removeForm.append(removeLabel, removeButton, removeNote)
  const resetForm = document.createElement('form')
  resetForm.method = 'post'
  resetForm.action = batchMetadataResetUrl
  resetForm.className = 'library-batch-metadata-reset-form'
  const resetToken = fallbackHiddenRequestToken(state)
  if (resetToken) resetForm.appendChild(resetToken)
  for (const [key, value] of Object.entries(state.activeFilters || {})) {
    if (text(value).trim() === '') continue
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.name = key
    hidden.value = text(value)
    resetForm.appendChild(hidden)
  }
  const resetConflictOnly = document.createElement('input')
  resetConflictOnly.type = 'hidden'
  resetConflictOnly.name = 'scannerConflicts'
  resetConflictOnly.value = '1'
  const resetButton = document.createElement('button')
  resetButton.type = 'submit'
  resetButton.className = 'button secondary'
  resetButton.textContent = t('library', 'Reset filtered metadata')
  const resetNote = document.createElement('p')
  resetNote.className = 'library-muted'
  resetNote.textContent = t('library', 'Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.')
  resetForm.append(resetConflictOnly, resetButton, resetNote)
  const editPreviewForm = document.createElement('form')
  editPreviewForm.method = 'post'
  editPreviewForm.action = batchMetadataEditPreviewUrl
  editPreviewForm.className = 'library-batch-metadata-edit-preview-form'
  editPreviewForm.target = '_blank'
  const editPreviewToken = fallbackHiddenRequestToken(state)
  if (editPreviewToken) editPreviewForm.appendChild(editPreviewToken)
  for (const [key, value] of Object.entries(state.activeFilters || {})) {
    if (text(value).trim() === '') continue
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.name = key
    hidden.value = text(value)
    editPreviewForm.appendChild(hidden)
  }
  const editFieldLabel = document.createElement('label')
  editFieldLabel.textContent = t('library', 'Metadata field')
  const editField = document.createElement('select')
  editField.name = 'bulkEditField'
  for (const [value, label] of [['publicationType', 'Publication type'], ['subtitle', 'Subtitle'], ['creators', 'Creators'], ['publication', 'Series / periodical'], ['publicationDate', 'Publication date'], ['language', 'Language'], ['publisher', 'Publisher'], ['genres', 'Genres'], ['classifications', 'Classifications']]) {
    const option = document.createElement('option')
    option.value = value
    option.textContent = t('library', label)
    editField.appendChild(option)
  }
  editFieldLabel.appendChild(editField)
  const editValueLabel = document.createElement('label')
  editValueLabel.textContent = t('library', 'Preview value')
  const editValue = document.createElement('input')
  editValue.type = 'text'
  editValue.name = 'bulkEditValue'
  editValue.placeholder = 'magazine, de, photography...'
  editValue.autocomplete = 'off'
  editValueLabel.appendChild(editValue)
  const editPreviewButton = document.createElement('button')
  editPreviewButton.type = 'submit'
  editPreviewButton.className = 'button secondary'
  editPreviewButton.textContent = t('library', 'Preview metadata edit')
  const editPreviewNote = document.createElement('p')
  editPreviewNote.className = 'library-muted'
  editPreviewNote.textContent = t('library', 'Preview-first batch metadata edit for current filter results. No changes are written during preview.')
  editPreviewForm.append(editFieldLabel, editValueLabel, editPreviewButton, editPreviewNote)
  const coverForm = document.createElement('form')
  coverForm.method = 'post'
  coverForm.action = batchCoverRefreshUrl
  coverForm.className = 'library-batch-cover-refresh-form'
  const coverToken = fallbackHiddenRequestToken(state)
  if (coverToken) coverForm.appendChild(coverToken)
  for (const [key, value] of Object.entries(state.activeFilters || {})) {
    if (text(value).trim() === '') continue
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.name = key
    hidden.value = text(value)
    coverForm.appendChild(hidden)
  }
  const coverButton = document.createElement('button')
  coverButton.type = 'submit'
  coverButton.className = 'button secondary'
  coverButton.textContent = t('library', 'Request fresh cover previews')
  const coverNote = document.createElement('p')
  coverNote.className = 'library-muted'
  coverNote.textContent = t('library', 'Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.')
  coverForm.append(coverButton, coverNote)
  batchActions.append(batchSummary, batchForm, removeForm, resetForm, editPreviewForm, coverForm)
  panel.appendChild(batchActions)

  const nav = document.createElement('nav')
  nav.className = 'library-pagination'
  nav.setAttribute('aria-label', t('library', 'Catalogue pagination'))
  const range = document.createElement('span')
  range.className = 'library-pagination-range'
  range.textContent = `Page ${pagination.page ?? 1} · ${pagination.from ?? 0}–${pagination.to ?? items.length}`
  nav.appendChild(range)
  panel.appendChild(nav)

  const publicationSummaries = Array.isArray(state.publicationSummaries) ? state.publicationSummaries : []
  const periodicalPanel = document.createElement('details')
  periodicalPanel.className = publicationSummaries.length > 0
    ? 'library-periodical-groups'
    : 'library-periodical-groups library-periodical-groups-empty'
  const periodicalSummary = document.createElement('summary')
  periodicalSummary.className = 'library-periodical-groups-summary'
  periodicalSummary.textContent = t('library', 'Show top series and periodicals')
  periodicalPanel.appendChild(periodicalSummary)
  const periodicalHeading = document.createElement('h3')
  periodicalHeading.textContent = publicationSummaries.length > 0
    ? t('library', 'Top series and periodicals')
    : t('library', 'No series or periodicals found yet')
  const periodicalText = document.createElement('p')
  periodicalText.className = 'library-muted'
  periodicalText.textContent = publicationSummaries.length > 0
    ? t('library', 'Jump into recurring publications with one click.')
    : t('library', 'Add publication or series names in item details to build this shortcut panel.')
  periodicalPanel.append(periodicalHeading, periodicalText)
  if (publicationSummaries.length > 0) {
    const list = document.createElement('ul')
    for (const summary of publicationSummaries) {
      const entry = document.createElement('li')
      const link = document.createElement('a')
      link.href = fallbackPublicationFilterUrl(text(summary.publication))
      link.textContent = text(summary.publication)
      const count = document.createElement('span')
      count.className = 'library-muted'
      count.textContent = `${summary.itemCount} items`
      entry.append(link, count)
      list.appendChild(entry)
    }
    periodicalPanel.appendChild(list)
  }
  panel.appendChild(periodicalPanel)

  if (items.length === 0) {
    const empty = document.createElement('div')
    const rootCount = Number(state.rootCount || 0)
    const enabledRootCount = Number(state.enabledRootCount || 0)
    const hasActiveFilters = fallbackHasActiveFilters(state)
    empty.className = 'library-empty-content'
    if (rootCount === 0 || enabledRootCount === 0) empty.classList.add('library-first-run-guidance')
    if (hasActiveFilters && rootCount > 0 && enabledRootCount > 0) empty.classList.add('library-filter-empty-state')
    empty.setAttribute('role', 'status')
    const emptyHeading = document.createElement('h3')
    const emptyText = document.createElement('p')
    emptyText.className = 'library-muted'
    const emptyActions = document.createElement('p')
    emptyActions.className = 'library-empty-actions'
    if (rootCount === 0) {
      emptyHeading.textContent = t('library', 'Start with one Library root')
      emptyText.textContent = t('library', 'Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.')
      fallbackAppendEmptyAction(emptyActions, settingsUrl, 'button primary', t('library', 'Add a Library root'))
      fallbackAppendMutedText(emptyActions, t('library', 'Run a scan after saving a root'))
    } else if (enabledRootCount === 0) {
      emptyHeading.textContent = t('library', 'No enabled Library roots')
      emptyText.textContent = t('library', 'Enable a saved root in settings, then scan enabled roots to refresh the catalogue.')
      fallbackAppendEmptyAction(emptyActions, settingsUrl, 'button primary', t('library', 'Open Library settings'))
    } else if (hasActiveFilters) {
      emptyHeading.textContent = t('library', 'No matches for the current filters')
      emptyText.textContent = t('library', 'Try a broader search, remove one active chip, or clear every catalogue filter.')
      fallbackAppendEmptyAction(emptyActions, fallbackClearSearchUrl(), 'button secondary', t('library', 'Clear search'))
      fallbackAppendEmptyAction(emptyActions, '?', 'button primary', t('library', 'Clear all filters'))
    } else {
      emptyHeading.textContent = t('library', 'No catalogue items yet')
      emptyText.textContent = t('library', 'Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.')
      fallbackAppendEmptyAction(emptyActions, settingsUrl, 'button primary', t('library', 'Run a scan from settings'))
    }
    empty.append(emptyHeading, emptyText, emptyActions)
    panel.appendChild(empty)
  } else {
    const gallery = document.createElement('div')
    gallery.className = 'library-cover-gallery'
    for (const item of items) {
      const card = document.createElement('article')
      card.className = 'library-cover-card'

      const coverLink = document.createElement('a')
      coverLink.className = 'library-cover-link'
      coverLink.href = text(item.openUrl || '#')
      coverLink.setAttribute('aria-label', `Read ${text(item.title || 'publication')}`)
      const image = document.createElement('img')
      image.className = 'library-cover-image'
      image.src = text(item.coverUrl || '')
      image.alt = `Cover for ${text(item.title || 'publication')}`
      image.loading = 'lazy'
      coverLink.appendChild(image)

      const hidden = fallbackHiddenRequestToken(state)
      const starForm = document.createElement('form')
      starForm.method = 'post'
      starForm.action = text(item.starUrl || '')
      starForm.className = 'library-cover-star-form'
      if (hidden) starForm.appendChild(hidden)
      const returnTo = document.createElement('input')
      returnTo.type = 'hidden'
      returnTo.name = 'returnTo'
      returnTo.value = 'catalogue'
      const starred = document.createElement('input')
      starred.type = 'hidden'
      starred.name = 'starred'
      starred.value = item.starred ? '0' : '1'
      const starButton = document.createElement('button')
      starButton.type = 'submit'
      starButton.className = item.starred ? 'library-cover-star-button library-cover-star-button--starred' : 'library-cover-star-button'
      starButton.setAttribute('aria-pressed', item.starred ? 'true' : 'false')
      starButton.setAttribute('aria-label', item.starred ? t('library', 'Unstar this publication') : t('library', 'Star this publication'))
      starButton.title = item.starred ? t('library', 'Unstar this publication') : t('library', 'Star this publication')
      starButton.textContent = item.starred ? '★' : '☆'
      starForm.append(returnTo, starred, starButton)

      const summary = document.createElement('div')
      summary.className = 'library-cover-summary'
      const title = document.createElement('h3')
      title.textContent = text(item.title || 'Untitled publication')
      summary.appendChild(title)
      if (item.creators) {
        const creators = document.createElement('p')
        creators.className = 'library-creator'
        creators.textContent = text(item.creators)
        summary.appendChild(creators)
      }
      const detailList = document.createElement('dl')
      detailList.className = 'library-cover-detail-list'
      const detailChips = [
        ['Type', text(item.publicationType || 'other')],
        ['Format', item.extension ? upper(item.extension) : ''],
        ['Shelf', item.shelf ? text(item.shelf) : ''],
      ].filter(([, value]) => value !== '')
      for (const [labelText, value] of detailChips) {
        const chip = document.createElement('div')
        chip.className = 'library-cover-detail-chip'
        const dt = document.createElement('dt')
        dt.textContent = labelText
        const dd = document.createElement('dd')
        dd.textContent = value
        chip.append(dt, dd)
        detailList.appendChild(chip)
      }
      summary.appendChild(detailList)

      const actions = document.createElement('p')
      const read = document.createElement('a')
      read.href = text(item.openUrl || '#')
      read.textContent = t('library', 'Read')
      const files = document.createElement('a')
      files.href = text(item.filesUrl || '#')
      files.textContent = t('library', 'Show in Files')
      const download = document.createElement('a')
      download.href = text(item.downloadUrl || '#')
      download.textContent = t('library', 'Download source')
      const details = document.createElement('a')
      details.href = text(item.detailsUrl || '#')
      details.textContent = t('library', 'Details')
      actions.append(read, document.createTextNode(' · '), files, document.createTextNode(' · '), download, document.createTextNode(' · '), details)
      summary.appendChild(actions)

      card.append(coverLink, starForm, summary)
      gallery.appendChild(card)
    }
    panel.appendChild(gallery)
  }

  root.appendChild(panel)
  return root
}

if (mountTarget) {
  try {
    createApp(App, { state }).mount(mountTarget)
  } catch (error) {
    console.error('[library] Vue mount failed; rendering fallback catalogue', error)
    mountTarget.replaceChildren(fallbackCatalogue(state, error))
  }
}
