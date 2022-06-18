import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUCheckbox from '../src/Index.vue'

describe('checkbox test', () => {
  test('create', () => {
    const wrapper = mount(DUCheckbox, { modelValue: false })
    expect(wrapper.classes()).toContain('du-checkbox')
  })
})
