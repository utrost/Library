import { afterEach, describe, expect, it, vi } from 'vitest'
import scanProgressSource from '../js/scan-progress-worker.js?raw'

describe('Settings scan progress', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('renders a delayed queue warning, then running heartbeat and path diagnostics', async () => {
    vi.useFakeTimers()
    document.body.innerHTML = `
      <section data-library-scan-progress-url="/scan/progress"
        data-library-scan-queued-warning-text="Wartet noch auf den Hintergrundprozess"
        data-library-scan-running-text="Läuft mit Fortschritt"
        data-library-scan-completed-text="Scan abgeschlossen">
        <span data-library-scan-status>queued</span>
        <span data-library-scan-state-message></span>
        <span data-library-scan-queued-seconds></span>
        <span data-library-scan-run-started-at></span>
        <span data-library-scan-last-progress-at></span>
        <span data-library-scan-current-path></span>
        <section data-library-scan-completion-summary>
          <h4 data-library-scan-completion-title></h4>
          <time data-library-scan-finished-at></time>
        </section>
      </section>`
    const response = (job) => ({ ok: true, json: async () => ({ job, totalPublications: null }) })
    const fetch = vi.fn()
      .mockResolvedValueOnce(response({ status: 'queued', queuedSeconds: 65, isQueuedTooLong: true }))
      .mockResolvedValueOnce(response({
        status: 'running', queuedSeconds: 0, isStale: false,
        runStartedAt: 1_700_000_000, lastProgressAt: 1_700_000_005,
        currentPath: '/Library/current-book.epub',
      }))
      .mockResolvedValueOnce(response({ status: 'completed', finishedAt: 1_700_000_010 }))
    vi.stubGlobal('fetch', fetch)

    window.eval(scanProgressSource)
    document.dispatchEvent(new Event('DOMContentLoaded'))
    await vi.advanceTimersByTimeAsync(2000)

    expect(document.querySelector('[data-library-scan-state-message]').textContent)
      .toBe('Wartet noch auf den Hintergrundprozess')
    expect(document.querySelector('[data-library-scan-queued-seconds]').textContent).toBe('65')

    await vi.advanceTimersByTimeAsync(2000)

    expect(document.querySelector('[data-library-scan-state-message]').textContent)
      .toBe('Läuft mit Fortschritt')
    expect(document.querySelector('[data-library-scan-current-path]').textContent).toBe('/Library/current-book.epub')
    expect(document.querySelector('[data-library-scan-run-started-at]').textContent).not.toBe('—')
    expect(document.querySelector('[data-library-scan-last-progress-at]').textContent).not.toBe('—')

    await vi.advanceTimersByTimeAsync(2000)

    expect(document.querySelector('[data-library-scan-completion-title]').textContent)
      .toBe('Scan abgeschlossen')
  })
})
