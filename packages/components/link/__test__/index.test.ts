import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import DULink from '../src/Index.vue'

describe('link test', () => {
  test('create', () => {
    const wrapper = mount(DULink)
    expect(wrapper.classes()).toContain('du-link')
  })
})
