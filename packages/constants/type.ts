export const componentTypes = ['primary', 'success', 'info', 'warning', 'danger'] as const

export type ComponentType = typeof componentTypes[number]
