import { describe, expect, test } from 'vitest'
import DUMessage from '../src'

describe('message test', () => {
  test('create', () => {
    DUMessage({
      type: 'primary',
      message: '这是一条消息'
    })
    expect(document.getElementsByClassName('du-message').length).toBe(1)
  })
})
