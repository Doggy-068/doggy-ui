import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUInputNumber from '../src/Index.vue'

describe('input-number test', () => {
  test('create', () => {
    const wrapper = mount(DUInputNumber)
    expect(wrapper.classes()).toContain('du-input-number')
  })
})
