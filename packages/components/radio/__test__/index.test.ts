import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DURadio from '../src/Index.vue'

describe('radio test', () => {
  test('create', () => {
    const wrapper = mount(DURadio)
    expect(wrapper.classes()).toContain('du-radio')
  })
})
