import { describe, expect, test } from 'vitest'
import DUNotification from '../src'

describe('message test', () => {
  test('create', () => {
    DUNotification({
      title: 'Notification Title!',
      content: 'Notification content.'
    })
    expect(document.getElementsByClassName('du-notification').length).toBe(1)
  })
})
