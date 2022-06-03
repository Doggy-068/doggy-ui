import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUProgress from '../src/Index.vue'

describe('progress test', () => {
  test('create', () => {
    const wrapper = mount(DUProgress)
    expect(wrapper.classes()).toContain('du-progress')
  })
})
