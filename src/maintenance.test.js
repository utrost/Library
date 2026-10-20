import { afterEach, expect, it, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { mountMaintenance } from './maintenance.js'

vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
afterEach(() => {
  for (const node of document.querySelectorAll('[data-library-language-picker]')) node.__vue_app__?.unmount()
  document.body.innerHTML = ''
})
it('uses the editor language picker and submits canonical codes through the existing form', async () => {
  document.body.innerHTML = '<form><div data-library-language-picker hidden></div><label><input name="codes" required></label><button name="action" value="map">Apply</button><button name="action" value="ignore" formnovalidate>Ignore</button></form>'
  mountMaintenance()
  const apply = document.querySelector('[value="map"]')
  expect(apply.disabled).toBe(true)
  expect(document.querySelector('[name="codes"]').required).toBe(false)
  const input = document.querySelector('[role="combobox"]')
  input.value = 'German'
  input.dispatchEvent(new Event('input', { bubbles: true }))
  input.dispatchEvent(new Event('focus'))
  await flushPromises()
  input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
  await flushPromises()
  expect(document.querySelector('[name="codes"]').value).toBe('de')
  expect(apply.disabled).toBe(false)
  document.querySelector('[aria-label="Remove: de"]').click()
  await flushPromises()
  expect(apply.disabled).toBe(true)
  expect(document.querySelector('[value="ignore"]').disabled).toBe(false)
})

it('keeps each review row’s combobox and suggestions uniquely associated', () => {
  const row = '<form><div data-library-language-picker hidden></div><label><input name="codes"></label><button name="action" value="map">Apply</button></form>'
  document.body.innerHTML = row + row
  mountMaintenance()
  const ids = [...document.querySelectorAll('[role="combobox"]')].map(input => input.getAttribute('aria-controls'))
  expect(ids).toHaveLength(2)
  expect(new Set(ids).size).toBe(2)
})
it('closes maintenance navigation explicitly on Escape and returns focus', async () => {
  document.body.innerHTML = '<details class="library-maintenance-navigation-mobile"></details><button data-library-navigation-open hidden>Menu</button><dialog id="library-maintenance-menu"><button data-library-navigation-close>Close</button></dialog>'
  mountMaintenance()
  const toggle = document.querySelector('[data-library-navigation-open]')
  const menu = document.querySelector('dialog')
  toggle.click()
  expect(menu.open).toBe(true)
  menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
  await flushPromises()
  expect(menu.open).toBe(false)
  expect(document.activeElement).toBe(toggle)
})
