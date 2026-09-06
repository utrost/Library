import { createApp } from 'vue'
import { loadState } from '@nextcloud/initial-state'
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

function fallbackFilterForm(state, pagination) {
  const activeFilters = state.activeFilters || {}
  const form = document.createElement('form')
  form.method = 'get'
  form.className = 'library-filter-bar'
  form.setAttribute('aria-label', 'Catalogue search and filters')

  appendTextInput(form, 'Search title / author', 'q', activeFilters.q, 'Camera, Eco, Rolleiflex...')
  appendSelect(form, 'Type', 'type', activeFilters.type, 'All types', ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'])
  appendTextInput(form, 'Nextcloud tag', 'tag', activeFilters.tag, 'photography')
  appendSelect(form, 'Format', 'format', activeFilters.format, 'All formats', state.formats || [], upper)
  appendSelect(form, 'Shelf', 'shelf', activeFilters.shelf, 'All shelves', state.shelves || [])
  appendSelect(form, 'Scan status', 'status', activeFilters.status, 'All scan statuses', state.scanStatuses || [])
  appendSelect(form, 'Sort', 'sort', activeFilters.sort || 'title', 'Sort by', ['title', 'recent', 'publicationDate', 'format'])
  appendSelect(form, 'Page size', 'limit', pagination.limit || 100, 'Page size', [25, 50, 100, 250, 500])

  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.className = 'button primary'
  submit.setAttribute('aria-label', 'Apply catalogue filters')
  submit.textContent = 'Apply filters'
  const clear = document.createElement('a')
  clear.href = '?'
  clear.className = 'button secondary'
  clear.setAttribute('aria-label', 'Clear catalogue filters')
  clear.textContent = 'Clear'
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

  const root = document.createElement('div')
  root.className = 'library-vue-catalogue library-vue-fallback'
  root.dataset.vueFallback = 'true'

  const panel = document.createElement('section')
  panel.className = 'library-panel'
  panel.setAttribute('aria-label', 'Publication catalogue')

  const heading = document.createElement('h2')
  heading.textContent = 'Publication catalogue'
  panel.appendChild(heading)

  const note = document.createElement('p')
  note.className = 'library-muted'
  note.textContent = 'Browse as a shelf/gallery first; open the details panel when metadata matters.'
  panel.appendChild(note)
  panel.appendChild(fallbackFilterForm(state, pagination))

  const nav = document.createElement('nav')
  nav.className = 'library-pagination'
  nav.setAttribute('aria-label', 'Catalogue pagination')
  const range = document.createElement('span')
  range.textContent = `Showing ${pagination.from ?? 0}–${pagination.to ?? items.length} of ${pagination.total ?? items.length} catalogue items`
  nav.appendChild(range)
  panel.appendChild(nav)

  if (items.length === 0) {
    const empty = document.createElement('div')
    empty.className = 'library-empty-content'
    empty.setAttribute('role', 'status')
    const emptyHeading = document.createElement('h3')
    emptyHeading.textContent = 'No catalogue items match'
    const emptyText = document.createElement('p')
    emptyText.className = 'library-muted'
    emptyText.textContent = 'Scan enabled roots or clear the active filters.'
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
      read.textContent = 'Read'
      const files = document.createElement('a')
      files.href = text(item.filesUrl || '#')
      files.textContent = 'Show in Files'
      actions.append(read, document.createTextNode(' · '), files)
      summary.appendChild(actions)

      card.append(coverLink, summary)
      gallery.appendChild(card)
    }
    panel.appendChild(gallery)
  }

  root.appendChild(panel)
  if (settingsUrl) {
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
    const link = document.createElement('a')
    link.href = settingsUrl
    link.className = 'button secondary'
    link.setAttribute('aria-label', 'Open Library settings')
    link.textContent = 'Library settings'
    actions.appendChild(link)
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
