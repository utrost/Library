import { describe, expect, it, vi } from 'vitest'

import { isCdpClickTargetReady, isFreshCatalogueReady, isSidebarCloseReady, waitForResponsiveReadiness } from '../scripts/browser-responsive-readiness.mjs'

describe('responsive browser readiness', () => {
  it('accepts only readiness computed from the current observed value', async () => {
    const observe = vi.fn()
      .mockResolvedValueOnce({ innerWidth: 1280, ready: true })
      .mockResolvedValueOnce({ innerWidth: 390, ready: false })

    const evidence = await waitForResponsiveReadiness({
      phase: 'mobile viewport',
      observe,
      accept: (value) => value.innerWidth === 390,
      timeoutMs: 100,
    })

    expect(evidence).toMatchObject({ innerWidth: 390, attempts: 2, ready: true })
  })

  it('fails explicitly when bounded observation never becomes ready', async () => {
    await expect(waitForResponsiveReadiness({
      phase: 'mobile modal',
      observe: vi.fn().mockResolvedValue({ displayed: true, role: 'dialog', modal: false, focusableCount: 0 }),
      accept: (value) => value.displayed && value.role === 'dialog' && value.modal && value.focusableCount > 0,
      timeoutMs: 0,
    })).rejects.toThrow('Timed out waiting for mobile modal readiness')
  })

  it('rejects a stale displayed sidebar until the close transition is observed', async () => {
    const stale = { sidebarPresent: true, sidebarDisplay: 'block', sidebarVisibility: 'visible', sidebarRectCount: 1,
      sidebarWidth: 420, sidebarHeight: 844, activeOverlayCount: 1, openerPresent: true, openerDisplay: 'inline-block',
      openerVisibility: 'visible', openerOpacity: '1', openerRectCount: 1, openerWidth: 80, openerHeight: 24, openerDisabled: false,
      openerAriaDisabled: 'false', openerInert: false, openerObstructed: false }
    const closed = { ...stale, sidebarDisplay: 'none', sidebarRectCount: 0, sidebarWidth: 0, sidebarHeight: 0,
      activeOverlayCount: 0 }

    expect(isSidebarCloseReady(stale)).toBe(false)
    expect(isSidebarCloseReady(closed)).toBe(true)
    const observe = vi.fn().mockResolvedValueOnce(stale).mockResolvedValueOnce(closed)
    const evidence = await waitForResponsiveReadiness({ phase: 'desktop sidebar close transition', observe,
      accept: isSidebarCloseReady, timeoutMs: 100 })
    expect(evidence).toMatchObject({ sidebarDisplay: 'none', attempts: 2, ready: true })
  })

  it('fails closed for absent, hidden, disabled, obstructed, and zero-sized click targets', () => {
    const ready = { present: true, display: 'inline-block', visibility: 'visible', opacity: '1', rectCount: 1,
      width: 80, height: 24, disabled: false, ariaDisabled: 'false', inert: false, obstructed: false }

    expect(isCdpClickTargetReady(ready)).toBe(true)
    expect(isCdpClickTargetReady({ ...ready, present: false })).toBe(false)
    expect(isCdpClickTargetReady({ ...ready, width: 0 })).toBe(false)
    expect(isCdpClickTargetReady({ ...ready, visibility: 'hidden' })).toBe(false)
    expect(isCdpClickTargetReady({ ...ready, opacity: '0' })).toBe(false)
    expect(isCdpClickTargetReady({ ...ready, disabled: true })).toBe(false)
    expect(isCdpClickTargetReady({ ...ready, inert: true })).toBe(false)
    expect(isCdpClickTargetReady({ ...ready, obstructed: true })).toBe(false)
  })

  it('cannot use an off-viewport pre-scroll observation and lets only fresh post-scroll geometry control readiness', () => {
    const beforeScroll = { present: true, display: 'inline-block', visibility: 'visible', opacity: '1', rectCount: 1,
      width: 80, height: 24, disabled: false, ariaDisabled: 'false', inert: false, obstructed: true, x: 40, y: 1200 }
    const afterScroll = { ...beforeScroll, obstructed: false, x: 40, y: 760 }

    expect(isCdpClickTargetReady(beforeScroll)).toBe(false)
    expect(isCdpClickTargetReady(afterScroll)).toBe(true)
    expect(isCdpClickTargetReady({ ...afterScroll, obstructed: true })).toBe(false)
  })

  it('requires a fresh fixture-scoped Vue catalogue and a rendered enabled non-inert opener without pre-click hit testing', () => {
    const opener = { present: true, display: 'inline-block', visibility: 'visible', opacity: '1', rectCount: 1,
      width: 80, height: 24, disabled: false, ariaDisabled: 'false', inert: false, obstructed: false }
    const fresh = { urlMatches: true, newDocument: true, vueCatalogueMounted: true, fixtureCardCount: 3,
      fixtureButtonCount: 3, sidebarClosed: true, activeOverlayCount: 0, activeInertCount: 0, opener }

    expect(isFreshCatalogueReady(fresh)).toBe(true)
    expect(isFreshCatalogueReady({ ...fresh, newDocument: false, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, fixtureCardCount: 2, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, sidebarClosed: false, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, activeOverlayCount: 1, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, activeInertCount: 1, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, opener: { ...opener, obstructed: true }, ready: true })).toBe(true)
    expect(isFreshCatalogueReady({ ...fresh, opener: { ...opener, width: 0 }, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, opener: { ...opener, disabled: true }, ready: true })).toBe(false)
    expect(isFreshCatalogueReady({ ...fresh, opener: { ...opener, inert: true }, ready: true })).toBe(false)
  })

  it('times out fail-closed when a forged ready boolean masks stale reload state', async () => {
    await expect(waitForResponsiveReadiness({
      phase: 'fresh catalogue after sidebar isolation reload',
      observe: vi.fn().mockResolvedValue({ ready: true, urlMatches: true, newDocument: false,
        vueCatalogueMounted: true, fixtureCardCount: 3, fixtureButtonCount: 3, sidebarClosed: true,
        activeOverlayCount: 0, activeInertCount: 0 }),
      accept: isFreshCatalogueReady,
      timeoutMs: 0,
    })).rejects.toThrow('Timed out waiting for fresh catalogue after sidebar isolation reload readiness')
  })
})
