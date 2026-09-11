import { beforeEach, describe, expect, it, vi } from 'vitest'
import detailStarSource from './detail-star.js?raw'

function loadDetailStarScript() {
  // Evaluate the browser script in the happy-dom window context.
  window.eval(detailStarSource)
}

describe('Library detail-page star toggle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main id="library-app" class="library-item-detail">
        <form method="post" action="/apps/library/items/7/star" class="library-inline-form library-star-form">
          <input type="hidden" name="requesttoken" value="test-token" />
          <input type="hidden" name="returnTo" value="details" />
          <input type="hidden" name="starred" value="1" />
          <button type="submit" class="library-star-button" aria-pressed="false" title="Star this publication" aria-label="Star this publication">☆</button>
        </form>
      </main>
    `
    window.LibraryDetailStar = undefined
  })

  it('updates the detail-page star optimistically without submitting a page reload', async () => {
    const fetchSpy = vi.fn(() => Promise.resolve({ ok: true }))
    window.fetch = fetchSpy
    loadDetailStarScript()
    window.LibraryDetailStar.setupDetailStarToggles(document)

    const form = document.querySelector('.library-star-form')
    const button = document.querySelector('.library-star-button')
    const submitSpy = vi.fn((event) => event.preventDefault())
    form.addEventListener('submit', submitSpy)

    button.click()
    await Promise.resolve()
    await Promise.resolve()

    expect(submitSpy).not.toHaveBeenCalled()
    expect(fetchSpy).toHaveBeenCalledWith('/apps/library/items/7/star', expect.objectContaining({
      method: 'POST',
      credentials: 'same-origin',
    }))
    expect(form.querySelector('input[name="starred"]').value).toBe('0')
    expect(button.textContent).toBe('★')
    expect(button.classList.contains('library-star-button--starred')).toBe(true)
    expect(button.getAttribute('aria-pressed')).toBe('true')
    expect(button.getAttribute('aria-label')).toBe('Unstar this publication')
  })

  it('rolls back the optimistic detail star when the save fails', async () => {
    window.fetch = vi.fn(() => Promise.resolve({ ok: false }))
    loadDetailStarScript()
    window.LibraryDetailStar.setupDetailStarToggles(document)

    const form = document.querySelector('.library-star-form')
    const button = document.querySelector('.library-star-button')
    button.click()
    await Promise.resolve()
    await Promise.resolve()

    expect(form.querySelector('input[name="starred"]').value).toBe('1')
    expect(button.textContent).toBe('☆')
    expect(button.classList.contains('library-star-button--starred')).toBe(false)
    expect(button.getAttribute('aria-pressed')).toBe('false')
  })

  it('ignores rapid detail star clicks while pending and shows an accessible failure', async () => {
    let rejectRequest
    const fetchSpy = vi.fn(() => new Promise((_resolve, reject) => { rejectRequest = reject }))
    window.fetch = fetchSpy
    loadDetailStarScript()
    window.LibraryDetailStar.setupDetailStarToggles(document)
    const button = document.querySelector('.library-star-button')

    button.click()
    button.click()
    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(button.disabled).toBe(true)
    rejectRequest(new Error('offline'))
    await Promise.resolve()
    await Promise.resolve()

    expect(button.disabled).toBe(false)
    expect(button.textContent).toBe('☆')
    const feedback = document.querySelector('.library-star-feedback')
    expect(feedback?.getAttribute('role')).toBe('alert')
    expect(feedback?.textContent).toBe('Could not update star. Try again.')
  })
})

describe('Library detail metadata autosave request ownership', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main id="library-app" class="library-item-detail">
        <form action="/apps/library/items/7" class="library-detail-edit-form--autosave">
          <input type="hidden" name="metadataAutosave" value="0">
          <label>Title <input name="title" value="First"></label>
          <div class="library-detail-save-row"></div>
          <span class="library-detail-autosave-status"></span>
        </form>
      </main>`
    window.LibraryDetailMetadataAutosave = undefined
  })

  it('serializes saves, coalesces to the latest snapshot, and lets only the latest save own status', async () => {
    const requests = []
    window.fetch = vi.fn((_url, options) => new Promise((resolve) => requests.push({ resolve, body: options.body })))
    loadDetailStarScript()
    const api = window.LibraryDetailMetadataAutosave
    const form = document.querySelector('form')

    void api.submitMetadataAutosave(form)
    form.querySelector('[name="title"]').value = 'Second'
    void api.submitMetadataAutosave(form)
    form.querySelector('[name="title"]').value = 'Latest'
    void api.submitMetadataAutosave(form)

    expect(requests).toHaveLength(1)
    expect(requests[0].body.get('title')).toBe('First')
    requests[0].resolve({ ok: false, status: 500 })
    await Promise.resolve()
    await Promise.resolve()
    expect(requests).toHaveLength(2)
    expect(requests[1].body.get('title')).toBe('Latest')
    expect(document.querySelector('.library-detail-autosave-status').textContent).toBe('Saving metadata…')
    requests[1].resolve({ ok: true })
    await Promise.resolve()
    await Promise.resolve()

    expect(document.querySelector('.library-detail-autosave-status').textContent).toBe('Metadata saved')
    expect(document.querySelector('[name="metadataAutosave"]').value).toBe('0')
  })

  it('cancels scheduled and queued autosaves when the manual form submit takes ownership', async () => {
    vi.useFakeTimers()
    window.fetch = vi.fn(() => Promise.resolve({ ok: true }))
    loadDetailStarScript()
    const form = document.querySelector('form')
    window.LibraryDetailMetadataAutosave.setupMetadataAutosave(document)

    form.querySelector('[name="title"]').dispatchEvent(new Event('input', { bubbles: true }))
    form.dispatchEvent(new Event('submit', { bubbles: true }))
    await vi.runAllTimersAsync()

    expect(window.fetch).not.toHaveBeenCalled()
    expect(form.querySelector('[name="metadataAutosave"]').value).toBe('0')
    expect(document.querySelector('.library-detail-autosave-status').textContent).toBe('')
    vi.useRealTimers()
  })

  it('waits for an in-flight autosave before allowing a newer manual submit', async () => {
    let resolveAutosave
    window.fetch = vi.fn(() => new Promise((resolve) => { resolveAutosave = resolve }))
    loadDetailStarScript()
    const form = document.querySelector('form')
    const nativeRequestSubmit = vi.spyOn(form, 'requestSubmit').mockImplementation(() => {})
    window.LibraryDetailMetadataAutosave.setupMetadataAutosave(document)

    void window.LibraryDetailMetadataAutosave.submitMetadataAutosave(form)
    form.querySelector('[name="title"]').value = 'Newest manual value'
    const submitEvent = new SubmitEvent('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(submitEvent)

    expect(submitEvent.defaultPrevented).toBe(true)
    expect(nativeRequestSubmit).not.toHaveBeenCalled()
    resolveAutosave({ ok: true })
    await Promise.resolve()
    await Promise.resolve()

    expect(nativeRequestSubmit).toHaveBeenCalledTimes(1)
    expect(form.querySelector('[name="metadataAutosave"]').value).toBe('0')
  })
})
