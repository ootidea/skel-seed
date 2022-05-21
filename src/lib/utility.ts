/**
 * Assert that a value is not undefined.
 * Throws an exception if it is undefined.
 */
export function assertNonUndefined<T>(value: T | undefined, message?: string): asserts value is T {
  if (value === undefined) {
    throw new Error(message ?? 'Assertion error: the given value is undefined.')
  }
}

/**
 * Create sequence starting with 0.
 * @example
 * until(5) is equivalent to [0, 1, 2, 3, 4]
 */
export function until(length: number): readonly number[] {
  return Array.from({ length }, (_, i) => i)
}

/**
 * @example
 * range(0, 2) is equivalent to [0, 1, 2]
 * range(10, 20, 3) is equivalent to [10, 13, 16, 19]
 * range(0, 2, 0.5) is equivalent to [0, 0.5, 1, 1.5, 2]
 * range(10, 0, -2) is equivalent to [10, 8, 6, 4, 2, 0]
 * range(10, 0, 2) is equivalent to [10, 8, 6, 4, 2, 0]
 * range(100, 100) is equivalent to [100]
 */
export function range(start: number, end: number, step?: number): readonly number[] {
  const normalizedStep = Math.abs(step ?? 1)

  if (start <= end) {
    return [...Array(Math.floor((end - start) / normalizedStep) + 1)].map((_, i) => start + i * normalizedStep)
  } else {
    return [...Array(Math.floor((start - end) / normalizedStep) + 1)].map((_, i) => start - i * normalizedStep)
  }
}

export function isInsideOf(x: number, y: number, rect: DOMRect): boolean {
  if (x < rect.left) return false
  if (rect.right < x) return false
  if (y < rect.top) return false
  if (rect.bottom < y) return false

  return true
}

/**
 * Read CSS custom property.
 * Note that there is usually a leading space character in return value.
 * @param propertyName Property name containing the prefix '--'
 * @param element Target HTMLElement to read CSS custom property
 */
export function getCssVariable(propertyName: string, element: HTMLElement = document.body): string {
  return getComputedStyle(element).getPropertyValue(propertyName)
}

/**
 * Read CSS custom property as number type.
 * Returns undefined if it cannot be interpreted as a number.
 * Returns Infinity as is.
 * @param propertyName Property name containing the prefix '--'
 * @param element Target HTMLElement to read CSS custom property
 */
export function getCssVariableAsNumber(propertyName: string, element: HTMLElement = document.body): number | undefined {
  const number = Number(getCssVariable(propertyName, element))
  if (Number.isNaN(number)) return undefined

  return number
}

function toKebabCase(pascalCase: string) {
  return (
    pascalCase.charAt(0).toLowerCase() + pascalCase.substring(1).replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
  )
}

export function generateStyleString(
  style: string | undefined,
  record: Record<string, string | undefined>
): string | undefined {
  const result: string[] = (style ?? '')
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part !== '')
    .map((part) => `${part};`)

  for (const key in record) {
    const value = record[key]
    if (value !== undefined) {
      result.push(`${toKebabCase(key)}: ${value};`)
    }
  }

  if (result.length === 0) return undefined

  return result.join(' ')
}

/**
 * A utility for abbreviating function types.
 * @example
 * Arrow<[number], boolean> is equivalent to (value: number) => boolean
 */
export type Arrow<Tuple extends unknown[], Return> = (...args: Tuple) => Return

/**
 * Utility for defining tagged union types.
 * Note that can't define recursive types.
 * @example
 * DiscriminatedUnion<{ Rect: { width: number; height: number }; Circle: { radius: number } }>
 *  ↑↓ equals
 * { type: 'Rect'; width: number; height: number } | { type: 'Circle'; radius: number }
 */
export type DiscriminatedUnion<T, K extends keyof T = keyof T> = K extends K ? { type: K } & T[K] : never
