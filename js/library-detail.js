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

  function setupSubmitOnChangeControls(root) {
    const scope = root || document
    const controls = scope.querySelectorAll('#library-app.library-item-detail [data-library-submit-on-change]')
    controls.forEach((control) => {
      if (control.dataset.librarySubmitOnChangeEnhanced === 'true') return
      control.dataset.librarySubmitOnChangeEnhanced = 'true'
      control.addEventListener('change', () => {
        const form = control.form
        if (!form) return
        if (typeof form.requestSubmit === 'function') form.requestSubmit()
        else form.submit()
      })
    })
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

  const supportedCoverPasteTypes = new Set(['image/jpeg', 'image/png', 'image/webp'])

  function coverPasteStatus(form) {
    return form.querySelector('[data-library-cover-paste-status]')
  }

  function setCoverPasteStatus(form, text, isError) {
    const status = coverPasteStatus(form)
    if (!status) return
    status.textContent = text
    status.classList.toggle('library-cover-paste-status--error', Boolean(isError))
  }

  function extensionForCoverType(type) {
    if (type === 'image/jpeg') return 'jpg'
    if (type === 'image/webp') return 'webp'
    return 'png'
  }

  function normalizedPastedCoverFile(file) {
    if (!file || !supportedCoverPasteTypes.has(file.type)) return file
    if (file.name) return file
    try {
      return new window.File([file], `pasted-cover.${extensionForCoverType(file.type)}`, { type: file.type })
    } catch (_error) {
      return file
    }
  }

  function pastedImageFromEvent(event) {
    const items = Array.from(event.clipboardData?.items || [])
    const imageItem = items.find((item) => typeof item.type === 'string' && item.type.startsWith('image/'))
    return imageItem?.getAsFile?.() || null
  }

  function setCoverInputFile(input, file) {
    try {
      const transfer = new window.DataTransfer()
      transfer.items.add(file)
      input.files = transfer.files
    } catch (_error) {
      try {
        Object.defineProperty(input, 'files', { configurable: true, value: [file] })
      } catch (_fallbackError) {
        return false
      }
    }
    input.dispatchEvent(new window.Event('change', { bubbles: true }))
    return true
  }

  function applyPastedCover(form, file) {
    const input = form.querySelector('input[type="file"][name="coverOverrideFile"]')
    if (!input) return false
    if (!file) {
      setCoverPasteStatus(form, 'Clipboard does not contain an image.', true)
      return false
    }
    if (!supportedCoverPasteTypes.has(file.type)) {
      setCoverPasteStatus(form, 'Pasted image type is not supported. Use JPEG, PNG, or WebP.', true)
      return false
    }
    const coverFile = normalizedPastedCoverFile(file)
    if (!setCoverInputFile(input, coverFile)) {
      setCoverPasteStatus(form, 'Could not attach the pasted image in this browser. Use the file picker instead.', true)
      return false
    }
    setCoverPasteStatus(form, `Pasted cover ready: ${coverFile.name || 'clipboard image'}. Choose “Use manual cover” to save it.`, false)
    return true
  }

  function setupCoverPaste(root) {
    const scope = root || document
    const forms = scope.querySelectorAll('#library-app.library-item-detail form.library-cover-override-form')
    forms.forEach((form) => {
      if (form.dataset.libraryCoverPasteEnhanced === 'true') return
      form.dataset.libraryCoverPasteEnhanced = 'true'
      const input = form.querySelector('input[type="file"][name="coverOverrideFile"]')
      const target = form.querySelector('[data-library-cover-paste-target]')
      form.addEventListener('paste', (event) => {
        const file = pastedImageFromEvent(event)
        if (!file) return
        event.preventDefault()
        applyPastedCover(form, file)
      })
      input?.addEventListener('change', () => {
        const file = input.files?.[0]
        if (!file) return
        setCoverPasteStatus(form, `Selected cover ready: ${file.name || 'uploaded image'}. Choose “Use manual cover” to save it.`, false)
      })
      target?.addEventListener('click', () => input?.click())
      target?.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        event.preventDefault()
        input?.click()
      })
    })
  }

  window.LibraryDetailCoverPaste = {
    setupCoverPaste,
    applyPastedCover,
    pastedImageFromEvent,
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
  window.LibraryDetailSubmitOnChange = {
    setupSubmitOnChangeControls,
  }
  window.LibraryDetailMetadataAutosave = {
    setupMetadataAutosave,
    submitMetadataAutosave,
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupDetailStarToggles(document)
      setupSubmitOnChangeControls(document)
      setupMetadataAutosave(document)
      setupCreatorChipEditors(document)
      setupCoverPaste(document)
    }, { once: true })
  } else {
    setupDetailStarToggles(document)
    setupSubmitOnChangeControls(document)
    setupMetadataAutosave(document)
    setupCreatorChipEditors(document)
    setupCoverPaste(document)
  }
})()
