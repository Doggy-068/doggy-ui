import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld test', () => {
  test('props test', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'this is msg from props'
      }
    })
    expect(wrapper.find('h1').text()).toBe('this is msg from props')
  })
})
