import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DUTag from '../src/Index.vue'

describe('tag test', () => {
  test('create', () => {
    const wrapper = mount(DUTag)
    expect(wrapper.classes()).toContain('du-tag')
  })
})
