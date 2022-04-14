/**
 * Utility for defining tagged union types.
 * Note that can't define recursive types.
 * @example
 * DiscriminatedUnion<{ Rect: { width: number; height: number }; Circle: { radius: number } }>
 *  ↑↓ equals
 * { type: 'Rect'; width: number; height: number } | { type: 'Circle'; radius: number }
 */
export type DiscriminatedUnion<T, K extends keyof T = keyof T> = K extends K
  ? { type: K } & T[K]
  : never
