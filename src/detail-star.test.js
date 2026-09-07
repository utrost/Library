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
})
