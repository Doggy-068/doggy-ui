import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUBadge from '../src/Index.vue'

describe('badge test', () => {
  test('create', () => {
    const wrapper = mount(DUBadge)
    expect(wrapper.classes()).toContain('du-badge')
  })
})
