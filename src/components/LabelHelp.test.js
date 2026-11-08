import { afterEach, expect, it } from 'vitest'
import { mount, enableAutoUnmount } from '@vue/test-utils'
import LabelHelp from './LabelHelp.vue'
import { nextTick } from 'vue'
enableAutoUnmount(afterEach)

it('keeps an explicit external control name independent of its help button', async () => {
  const wrapper = mount({ components: { LabelHelp }, template: '<div><label for="fixture-search">Find a genre <LabelHelp text="Search help" /></label><input id="fixture-search"></div>' }, { attachTo: document.body })
  expect(wrapper.get('input').attributes('aria-label')).toBe('Find a genre')
  expect(wrapper.get('input').attributes('aria-labelledby')).toBeUndefined()
  await nextTick()
  expect(wrapper.get('button').attributes('aria-label')).toBe('Help: Find a genre')
})

it('keeps a slotted control label and excludes select option text', async () => {
  const wrapper = mount({ components: { LabelHelp }, template: '<label><LabelHelp text="Help text">Sort</LabelHelp><select><option>First choice</option><option>Second choice</option></select></label>' }, { attachTo: document.body })
  const id = wrapper.get('select').attributes('aria-labelledby')
  expect(document.getElementById(id).textContent).toBe('Sort')
  await nextTick()
  expect(wrapper.get('button').attributes('aria-label')).toBe('Help: Sort')
})

it('preserves headings with help-only components and explicit aria names', () => {
  const wrapper = mount({ components: { LabelHelp }, template: '<div><h2>Authors <LabelHelp text="About authors" /></h2><label>Visible <LabelHelp text="Help" /><input aria-label="Explicit name"></label></div>' }, { attachTo: document.body })
  expect(wrapper.get('h2').attributes('aria-label')).toBe('Authors')
  expect(wrapper.get('input').attributes('aria-label')).toBe('Explicit name')
})
