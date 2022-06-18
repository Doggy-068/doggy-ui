import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUInput from '../src/Index.vue'

describe('input test', () => {
  test('create', () => {
    const wrapper = mount(DUInput, { modelValue: '' })
    expect(wrapper.classes()).toContain('du-input')
  })
})
