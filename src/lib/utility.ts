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
export function getCssVariableAsNumber(
  propertyName: string,
  element: HTMLElement = document.body
): number | undefined {
  const number = Number(getCssVariable(propertyName, element))
  if (Number.isNaN(number)) return undefined

  return number
}
