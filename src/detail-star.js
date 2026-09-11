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

  function setStarFailure(form, text) {
    let feedback = form.querySelector('.library-star-feedback')
    if (!feedback && text) {
      feedback = document.createElement('span')
      feedback.className = 'library-star-feedback'
      feedback.setAttribute('role', 'alert')
      form.append(feedback)
    }
    if (feedback) {
      feedback.textContent = text
      feedback.hidden = !text
    }
  }

  async function submitStar(form) {
    if (form.dataset.libraryStarPending === 'true') return
    form.dataset.libraryStarPending = 'true'
    const button = form.querySelector('.library-star-button')
    if (button) {
      button.disabled = true
      button.setAttribute('aria-busy', 'true')
    }
    setStarFailure(form, '')
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
        setStarFailure(form, 'Could not update star. Try again.')
      }
    } catch (_error) {
      applyState(form, previous)
      setStarFailure(form, 'Could not update star. Try again.')
    } finally {
      form.dataset.libraryStarPending = 'false'
      if (button) {
        button.disabled = false
        button.removeAttribute('aria-busy')
      }
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

  function metadataValidationFeedback(form) {
    return form.querySelector('.library-validation-feedback')
  }

  function clearMetadataValidationFeedback(form) {
    const feedback = metadataValidationFeedback(form)
    if (feedback) feedback.remove()
  }

  function setMetadataValidationFeedback(form, text) {
    let feedback = metadataValidationFeedback(form)
    if (!feedback) {
      feedback = document.createElement('p')
      feedback.className = 'library-validation-feedback library-detail-field-full'
      feedback.setAttribute('role', 'alert')
      const saveRow = form.querySelector('.library-detail-save-row')
      saveRow?.insertAdjacentElement('afterend', feedback)
    }
    if (feedback) feedback.textContent = text
  }

  const metadataSaveStates = new WeakMap()

  function metadataSaveState(form) {
    if (!metadataSaveStates.has(form)) {
      metadataSaveStates.set(form, {
        running: false,
        queued: null,
        generation: 0,
        manuallySubmitted: false,
        manualSubmitPending: false,
        manualSubmitter: null,
        allowNativeSubmit: false,
        timer: null,
      })
    }
    return metadataSaveStates.get(form)
  }

  async function runMetadataAutosave(form, request) {
    const state = metadataSaveState(form)
    state.running = true
    setMetadataStatus(form, 'Saving metadata…')
    try {
      const response = await window.fetch(form.getAttribute('action') || form.action, {
        method: 'POST',
        body: request.body,
        credentials: 'same-origin',
      })
      const ownsStatus = () => request.generation === state.generation && !state.manuallySubmitted
      if (response.ok && ownsStatus()) {
        setMetadataStatus(form, 'Metadata saved')
        clearMetadataValidationFeedback(form)
      } else if (!response.ok && ownsStatus()) {
        let message = 'Metadata was not saved'
        if (response.status === 422) {
          try {
            const payload = await response.json()
            if (payload?.error) message = `Metadata was not saved: ${payload.error}`
          } catch (_jsonError) {
            // Keep the generic failure message.
          }
        }
        if (ownsStatus()) {
          setMetadataStatus(form, 'Metadata was not saved')
          setMetadataValidationFeedback(form, message)
        }
      }
    } catch (_error) {
      if (request.generation === state.generation && !state.manuallySubmitted) {
        setMetadataStatus(form, 'Metadata was not saved')
        setMetadataValidationFeedback(form, 'Metadata was not saved')
      }
    } finally {
      state.running = false
      if (state.manualSubmitPending) {
        const submitter = state.manualSubmitter
        state.manualSubmitPending = false
        state.manualSubmitter = null
        state.allowNativeSubmit = true
        if (typeof form.requestSubmit === 'function') {
          submitter ? form.requestSubmit(submitter) : form.requestSubmit()
        } else {
          form.submit()
        }
        return
      }
      if (state.queued && !state.manuallySubmitted) {
        const queued = state.queued
        state.queued = null
        await runMetadataAutosave(form, queued)
      }
    }
  }

  function submitMetadataAutosave(form) {
    const state = metadataSaveState(form)
    if (state.manuallySubmitted) return Promise.resolve()
    const body = new window.FormData(form)
    body.set('metadataAutosave', '1')
    const request = { body, generation: ++state.generation }
    if (state.running) {
      state.queued = request
      return Promise.resolve()
    }
    return runMetadataAutosave(form, request)
  }

  function setupMetadataAutosave(root) {
    const scope = root || document
    const forms = scope.querySelectorAll('#library-app.library-item-detail form.library-detail-edit-form--autosave')
    forms.forEach((form) => {
      if (form.dataset.libraryMetadataAutosaveEnhanced === 'true') return
      form.dataset.libraryMetadataAutosaveEnhanced = 'true'
      const state = metadataSaveState(form)
      const schedule = (delay) => {
        state.manuallySubmitted = false
        window.clearTimeout(state.timer)
        setMetadataStatus(form, 'Unsaved changes…')
        state.timer = window.setTimeout(() => submitMetadataAutosave(form), delay)
      }
      form.addEventListener('input', (event) => {
        if (event.target?.matches?.('input[type="hidden"]')) return
        schedule(900)
      })
      form.addEventListener('change', (event) => {
        if (event.target?.matches?.('input[type="hidden"]')) return
        schedule(120)
      })
      form.addEventListener('submit', (event) => {
        if (state.allowNativeSubmit) {
          state.allowNativeSubmit = false
          return
        }
        window.clearTimeout(state.timer)
        state.timer = null
        state.manuallySubmitted = true
        state.generation += 1
        state.queued = null
        const autosaveFlag = form.querySelector('input[name="metadataAutosave"]')
        if (autosaveFlag) autosaveFlag.value = '0'
        if (state.running) {
          event.preventDefault()
          state.manualSubmitPending = true
          state.manualSubmitter = event.submitter || null
          setMetadataStatus(form, 'Finishing current save…')
        } else {
          setMetadataStatus(form, '')
        }
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
