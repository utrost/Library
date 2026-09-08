(function () {
  function labels(isStarred) {
    return {
      glyph: isStarred ? '★' : '☆',
      label: isStarred ? 'Unstar this publication' : 'Star this publication',
      nextValue: isStarred ? '0' : '1',
      pressed: isStarred ? 'true' : 'false',
    }
  }

  function applyState(form, isStarred) {
    const button = form.querySelector('.library-star-button')
    const input = form.querySelector('input[name="starred"]')
    const next = labels(isStarred)
    if (input) input.value = next.nextValue
    if (button) {
      button.textContent = next.glyph
      button.classList.toggle('library-star-button--starred', isStarred)
      button.setAttribute('aria-pressed', next.pressed)
      button.setAttribute('aria-label', next.label)
      button.setAttribute('title', next.label)
    }
  }

  function isCurrentlyStarred(form) {
    const button = form.querySelector('.library-star-button')
    return button?.getAttribute('aria-pressed') === 'true'
      || button?.classList.contains('library-star-button--starred') === true
      || button?.textContent?.trim() === '★'
  }

  async function submitStar(form) {
    const previous = isCurrentlyStarred(form)
    const next = !previous
    applyState(form, next)
    try {
      const response = await window.fetch(form.getAttribute('action') || form.action, {
        method: 'POST',
        body: new window.FormData(form),
        credentials: 'same-origin',
      })
      if (!response.ok) {
        applyState(form, previous)
      }
    } catch (_error) {
      applyState(form, previous)
    }
  }

  function setupDetailStarToggles(root) {
    const scope = root || document
    const forms = scope.querySelectorAll('#library-app.library-item-detail form.library-star-form')
    forms.forEach((form) => {
      if (form.dataset.libraryDetailStarEnhanced === 'true') return
      form.dataset.libraryDetailStarEnhanced = 'true'
      form.addEventListener('submit', (event) => {
        event.preventDefault()
        submitStar(form)
      })
      const button = form.querySelector('.library-star-button')
      button?.addEventListener('click', (event) => {
        event.preventDefault()
        submitStar(form)
      })
    })
  }

  function metadataStatus(form) {
    return form.querySelector('.library-detail-autosave-status')
  }

  function setMetadataStatus(form, text) {
    const status = metadataStatus(form)
    if (status) status.textContent = text
  }

  async function submitMetadataAutosave(form) {
    const autosaveFlag = form.querySelector('input[name="metadataAutosave"]')
    const previousFlag = autosaveFlag?.value
    if (autosaveFlag) autosaveFlag.value = '1'
    setMetadataStatus(form, 'Saving metadata…')
    try {
      const response = await window.fetch(form.getAttribute('action') || form.action, {
        method: 'POST',
        body: new window.FormData(form),
        credentials: 'same-origin',
      })
      setMetadataStatus(form, response.ok ? 'Metadata saved' : 'Metadata was not saved')
    } catch (_error) {
      setMetadataStatus(form, 'Metadata was not saved')
    } finally {
      if (autosaveFlag) autosaveFlag.value = previousFlag || '0'
    }
  }

  function setupMetadataAutosave(root) {
    const scope = root || document
    const forms = scope.querySelectorAll('#library-app.library-item-detail form.library-detail-edit-form--autosave')
    forms.forEach((form) => {
      if (form.dataset.libraryMetadataAutosaveEnhanced === 'true') return
      form.dataset.libraryMetadataAutosaveEnhanced = 'true'
      let timer = null
      const schedule = (delay) => {
        window.clearTimeout(timer)
        setMetadataStatus(form, 'Unsaved changes…')
        timer = window.setTimeout(() => submitMetadataAutosave(form), delay)
      }
      form.addEventListener('input', (event) => {
        if (event.target?.matches?.('input[type="hidden"]')) return
        schedule(900)
      })
      form.addEventListener('change', (event) => {
        if (event.target?.matches?.('input[type="hidden"]')) return
        schedule(120)
      })
      form.addEventListener('submit', () => {
        const autosaveFlag = form.querySelector('input[name="metadataAutosave"]')
        if (autosaveFlag) autosaveFlag.value = '0'
      })
    })
  }

  function syncCreatorChipEditor(editor) {
    const hidden = editor.querySelector('input[type="hidden"][name="creators"]')
    const chips = Array.from(editor.querySelectorAll('.library-creator-chip span:first-child'))
      .map((chip) => chip.textContent.trim())
      .filter(Boolean)
    if (hidden) {
      hidden.value = chips.join('\n')
      hidden.dispatchEvent(new window.Event('input', { bubbles: true }))
    }
  }

  function addCreatorChip(editor, name) {
    const value = String(name || '').trim()
    if (value === '') return
    const list = editor.querySelector('.library-creator-chip-list')
    if (!list) return
    const chip = document.createElement('span')
    chip.className = 'library-creator-chip'
    const label = document.createElement('span')
    label.textContent = value
    const remove = document.createElement('button')
    remove.type = 'button'
    remove.className = 'library-creator-chip-remove'
    remove.textContent = '×'
    remove.setAttribute('aria-label', `Remove creator: ${value}`)
    chip.append(label, remove)
    list.append(chip)
    syncCreatorChipEditor(editor)
  }

  function setupCreatorChipEditors(root) {
    const scope = root || document
    scope.querySelectorAll('[data-creator-chip-editor]').forEach((editor) => {
      if (editor.dataset.libraryCreatorChipEnhanced === 'true') return
      editor.dataset.libraryCreatorChipEnhanced = 'true'
      editor.addEventListener('click', (event) => {
        if (!event.target?.classList?.contains('library-creator-chip-remove')) return
        event.preventDefault()
        event.target.closest('.library-creator-chip')?.remove()
        syncCreatorChipEditor(editor)
      })
      const input = editor.querySelector('.library-creator-chip-input')
      input?.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return
        event.preventDefault()
        addCreatorChip(editor, input.value)
        input.value = ''
      })
      syncCreatorChipEditor(editor)
    })
  }

  window.LibraryDetailCreatorChips = {
    setupCreatorChipEditors,
    syncCreatorChipEditor,
    addCreatorChip,
  }

  window.LibraryDetailStar = {
    setupDetailStarToggles,
    applyState,
  }
  window.LibraryDetailMetadataAutosave = {
    setupMetadataAutosave,
    submitMetadataAutosave,
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupDetailStarToggles(document)
      setupMetadataAutosave(document)
      setupCreatorChipEditors(document)
    }, { once: true })
  } else {
    setupDetailStarToggles(document)
    setupMetadataAutosave(document)
    setupCreatorChipEditors(document)
  }
})()
