import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldChange from './FieldChange.vue'
import { reviewOrder } from '../review-order.js'

it.each([['', 'Press', 'Add'], ['Old', 'New', 'Replace'], ['Press', '', 'Clear']])('describes the change from %s to %s', (before, after, label) => {
  const result = mount(FieldChange, { props: { before, after } })
  expect(result.get('strong').text()).toBe(label)
  expect(result.findAll('bdi').map(value => value.text())).toEqual([before || '—', after || '—'])
})
it('gives provider and path fields the same reading order without changing their records', () => {
  expect(reviewOrder([{key:'year'}, {key:'publisher'}, {key:'author'}, {key:'title'}]).map(row => row.key)).toEqual(['title','author','publisher','year'])
  expect(reviewOrder([{field:'publicationDate'}, {field:'publisher'}, {field:'creators'}, {field:'title'}]).map(row => row.field)).toEqual(['title','creators','publisher','publicationDate'])
})
