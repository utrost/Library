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

  const root = document.createElement('div')
  root.className = 'library-vue-catalogue library-vue-fallback'
  root.dataset.vueFallback = 'true'

  const panel = document.createElement('section')
  panel.className = 'library-panel'
  panel.setAttribute('aria-labelledby', 'library-catalogue-heading')

  const heading = document.createElement('h2')
  heading.id = 'library-catalogue-heading'
  heading.textContent = t('library', 'Publication catalogue')
  panel.appendChild(heading)

  const note = document.createElement('p')
  note.className = 'library-muted'
  note.textContent = t('library', 'Browse as a shelf/gallery first; open the details panel when metadata matters.')
  panel.appendChild(note)
  const filterPanel = document.createElement('details')
  filterPanel.className = 'library-filter-panel'
  const filterSummary = document.createElement('summary')
  filterSummary.className = 'library-filter-panel-summary'
  filterSummary.textContent = t('library', 'Show catalogue filters')
  filterPanel.append(filterSummary, fallbackFilterForm(state, pagination))
  panel.appendChild(filterPanel)

  const nav = document.createElement('nav')
  nav.className = 'library-pagination'
  nav.setAttribute('aria-label', t('library', 'Catalogue pagination'))
  const range = document.createElement('span')
  range.textContent = `Showing ${pagination.from ?? 0}–${pagination.to ?? items.length} of ${pagination.total ?? items.length} catalogue items`
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
    empty.className = 'library-empty-content'
    empty.setAttribute('role', 'status')
    const emptyHeading = document.createElement('h3')
    emptyHeading.textContent = t('library', 'No catalogue items match')
    const emptyText = document.createElement('p')
    emptyText.className = 'library-muted'
    emptyText.textContent = t('library', 'Scan enabled roots or clear the active filters.')
    empty.append(emptyHeading, emptyText)
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
      const meta = document.createElement('p')
      meta.className = 'library-muted'
      meta.textContent = [
        text(item.publicationType || 'other'),
        item.extension ? `Format: ${upper(item.extension)}` : '',
        item.shelf ? `Shelf: ${text(item.shelf)}` : '',
      ].filter(Boolean).join(' · ')
      summary.appendChild(meta)

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
  if (settingsUrl || metadataExportUrl) {
    const settings = document.createElement('section')
    settings.className = 'library-hero library-secondary-panel'
    settings.setAttribute('aria-label', 'Library settings')
    const box = document.createElement('div')
    const h = document.createElement('h2')
    h.textContent = 'Library'
    const p = document.createElement('p')
    p.className = 'library-lede'
    p.textContent = 'Browse publications already stored in Nextcloud.'
    box.append(h, p)
    const actions = document.createElement('div')
    actions.className = 'library-hero-actions'
    if (settingsUrl) {
      const link = document.createElement('a')
      link.href = settingsUrl
      link.className = 'button secondary'
      link.setAttribute('aria-label', 'Open Library settings')
      link.textContent = 'Library settings'
      actions.appendChild(link)
    }
    if (metadataExportUrl) {
      const exportLink = document.createElement('a')
      exportLink.href = metadataExportUrl
      exportLink.className = 'button secondary'
      exportLink.setAttribute('aria-label', 'Export corrected metadata')
      exportLink.textContent = 'Export corrected metadata'
      actions.appendChild(exportLink)
    }
    if (state.metadataSidecarManifestUrl) {
      const manifestLink = document.createElement('a')
      manifestLink.href = state.metadataSidecarManifestUrl
      manifestLink.className = 'button secondary'
      manifestLink.setAttribute('aria-label', 'Export sidecar manifest')
      manifestLink.textContent = 'Export sidecar manifest'
      actions.appendChild(manifestLink)
    }
    if (state.metadataSidecarBundleUrl) {
      const sidecarZipLink = document.createElement('a')
      sidecarZipLink.href = state.metadataSidecarBundleUrl
      sidecarZipLink.className = 'button secondary'
      sidecarZipLink.setAttribute('aria-label', 'Export sidecar ZIP')
      sidecarZipLink.textContent = 'Export sidecar ZIP'
      actions.appendChild(sidecarZipLink)
    }
    settings.append(box, actions)
    root.appendChild(settings)
  }
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
