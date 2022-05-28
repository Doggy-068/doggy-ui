import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import DUButton from '../src/Index.vue'

describe('button test', () => {
  test('create', () => {
    const wrapper = mount(DUButton)
    expect(wrapper.classes()).toContain('du-button')
  })
})
