import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUSwitch from '../src/Index.vue'

describe('switch test', () => {
  test('create', () => {
    const wrapper = mount(DUSwitch)
    expect(wrapper.classes()).toContain('du-switch')
  })
})
