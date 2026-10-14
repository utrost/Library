import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import LabelHelp from './LabelHelp.vue'
enableAutoUnmount(afterEach)
describe('label help',()=>{
  it('opens on focus, closes with Escape and preserves the control name',async()=>{
    const wrapper=mount({components:{LabelHelp},template:'<label><LabelHelp text="Detailed guidance">Field name</LabelHelp><input /></label>'},{attachTo:document.body})
    const input=wrapper.get('input'),button=wrapper.get('button')
    expect(wrapper.get('label').element.htmlFor).toBe(input.element.id)
    expect(wrapper.get('label').element.control).toBe(input.element)
    expect(document.getElementById(input.attributes('aria-labelledby')).textContent).toBe('Field name')
    await button.trigger('focus');await nextTick()
    expect(document.querySelector('[role=tooltip]').textContent).toBe('Detailed guidance')
    document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));await nextTick()
    expect(document.querySelector('[role=tooltip]')).toBeNull()
    window.dispatchEvent(new Event('scroll'))
  })
  it('keeps explicit control labels and heading names intact',()=>{
    const wrapper=mount({components:{LabelHelp},template:'<div><h1><LabelHelp text="Details">Lists</LabelHelp></h1><label><LabelHelp text="Guidance">Field</LabelHelp><input aria-label="Existing label" /></label></div>'},{attachTo:document.body})
    expect(wrapper.get('input').attributes('aria-label')).toBe('Existing label')
    expect(document.getElementById(wrapper.get('h1').attributes('aria-labelledby')).textContent).toBe('Lists')
  })
})
