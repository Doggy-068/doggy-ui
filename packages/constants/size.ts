export const componentSizes = ['small', 'default', 'large'] as const

export type ComponentSize = typeof componentSizes[number]
