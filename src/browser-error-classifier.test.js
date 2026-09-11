import { describe, expect, it } from 'vitest'
import { classifyBrowserEvent } from '../scripts/browser-error-classifier.mjs'

const cspEvent = (text) => ({ method: 'Log.entryAdded', params: { entry: { level: 'error', text } } })

describe('browser error ownership classifier', () => {
  it('never permits personal.svg from unrelated, pseudo-element, or removed-element ownership guesses', () => {
    const event = cspEvent("Refused to load /apps/settings/img/personal.svg due to Content Security Policy")
    expect(classifyBrowserEvent(event, { externalMatches: 1, libraryMatches: 0 }).fatal).toBe(true)
    expect(classifyBrowserEvent(event, { externalMatches: 0, libraryMatches: 0 }).fatal).toBe(true)
    expect(classifyBrowserEvent(event, { externalMatches: 1, libraryMatches: 1 }).fatal).toBe(true)
    expect(classifyBrowserEvent(event, { pseudoElementMatches: 1 }).fatal).toBe(true)
    expect(classifyBrowserEvent(event, { removedElementMatches: 1 }).fatal).toBe(true)
  })

  it('keeps Library-owned, CSP, and module runtime failures fatal', () => {
    expect(classifyBrowserEvent(cspEvent('/custom_apps/library/js/library-main.mjs personal.svg'), { externalMatches: 1 }).fatal).toBe(true)
    expect(classifyBrowserEvent(cspEvent('Content Security Policy blocked a script')).fatal).toBe(true)
    expect(classifyBrowserEvent(cspEvent('Failed to fetch dynamically imported module')).fatal).toBe(true)
  })

  it('treats every Runtime.exceptionThrown event as fatal even when its shape is unknown', () => {
    const event = { method: 'Runtime.exceptionThrown', params: { unexpected: { value: 1 } } }
    expect(classifyBrowserEvent(event).fatal).toBe(true)
    expect(classifyBrowserEvent({ method: 'Runtime.exceptionThrown' }).fatal).toBe(true)
  })
})
