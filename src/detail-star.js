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
    }, { once: true })
  } else {
    setupDetailStarToggles(document)
    setupMetadataAutosave(document)
  }
})()
