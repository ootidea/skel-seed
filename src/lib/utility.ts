/**
 * Assert that a value is not undefined.
 * Throws an exception if it is undefined.
 */
export function assertNonUndefined<T>(value: T | undefined, message?: string): asserts value is T {
  if (value === undefined) {
    throw new Error(message ?? 'Assertion error: the given value is undefined.')
  }
}

/** call(() => {...}) is readable than (() => {...})() */
export function call<T>(f: () => T): T {
  return f()
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

type AutoComplete<Literal extends Base, Base = string> = Literal | (Base & Record<never, never>)

type Visibility = AutoComplete<'visible' | 'hidden' | 'collapse'>
type Position = AutoComplete<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>
type ZIndex = AutoComplete<'auto' | `${number}`>
type Display = AutoComplete<'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid'>
type AlignItems = AutoComplete<'start' | 'end' | 'center'>
type JustifyContent = AutoComplete<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>
type BoxSizing = AutoComplete<'border-box' | 'content-box'>
type Width = AutoComplete<'max-content' | 'min-content'>
type Height = AutoComplete<'max-content' | 'min-content'>
type FontWeight = AutoComplete<
  'normal' | 'bold' | 'lighter' | 'bolder' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
>
type PointerEvents = AutoComplete<'auto' | 'none'>
type Cursor = AutoComplete<
  | 'auto'
  | 'default'
  | 'pointer'
  | 'move'
  | 'text'
  | 'crosshair'
  | 'cell'
  | 'help'
  | 'grab'
  | 'grabbing'
  | 'zoom-in'
  | 'zoom-out'
  | 'not-allowed'
  | 'wait'
  | 'progress'
  | 'none'
  | 'alias'
  | 'context-menu'
  | 'vertical-text'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'nw-resize'
  | 'ne-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'copy'
  | 'no-drop'
>

export type StyleObject = Partial<{
  visibility: Visibility
  position: Position
  top: string
  bottom: string
  left: string
  right: string
  transform: string
  transformOrigin: string
  zIndex: ZIndex
  display: Display
  gridTemplateColumns: string
  gridTemplateRows: string
  alignItems: AlignItems
  justifyContent: JustifyContent
  gap: string
  columnGap: string
  rowGap: string
  margin: string
  marginTop: string
  marginBottom: string
  marginLeft: string
  marginRight: string
  marginStart: string
  marginEnd: string
  marginBlock: string
  marginInline: string
  padding: string
  paddingTop: string
  paddingBottom: string
  paddingLeft: string
  paddingRight: string
  paddingStart: string
  paddingEnd: string
  paddingBlock: string
  paddingInline: string
  boxSizing: BoxSizing
  width: Width
  minWidth: string
  maxWidth: string
  height: Height
  minHeight: string
  maxHeight: string
  borderRadius: string
  border: string
  outline: string
  boxShadow: string
  backgroundColor: string
  color: string
  fontSize: string
  fontWeight: FontWeight
  lineHeight: string
  cursor: Cursor
  pointerEvents: PointerEvents
  transition: string
}>

export function toStyle(styleObject: StyleObject | undefined): string | undefined {
  if (styleObject === undefined) return undefined

  return Object.entries(styleObject)
    .map(([key, value]) => `${toKebabCase(key)}: ${value}`)
    .join('; ')
}

export function joinStyles(style: string | undefined, styles: StyleObject | undefined): string | undefined {
  if (style === undefined && styles === undefined) return undefined

  if (style === undefined) return toStyle(styles)

  if (styles === undefined) return style

  if (style.trim().endsWith(';')) {
    return `${style} ${toStyle(styles)}`
  }
  return `${style}; ${toStyle(styles)}`
}

export function joinClasses(klass: string | undefined, classes: Record<string, unknown> | undefined): string {
  const conditionalClasses = Object.entries(classes ?? {})
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key)
    .join(' ')
  if (klass === undefined) {
    return conditionalClasses
  }
  return `${klass} ${conditionalClasses}`
}

/**
 * This function is used as a Svelte use directive, that callback the width of an element reactively.
 * This was defined because svelte's bind:clientWidth may not reflect the actual value.
 * @example
 * <div use:observeWidth={(width) => (clientWidth = width)} />
 */
export function observeWidth(element: HTMLElement, callback: (width: number) => unknown) {
  callback(element.getBoundingClientRect().width)
  const resizeObserver = new ResizeObserver(() => {
    callback(element.getBoundingClientRect().width)
  })
  resizeObserver.observe(element)

  return {
    destroy() {
      resizeObserver.unobserve(element)
    },
  }
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
 *  ?????? equals
 * { type: 'Rect'; width: number; height: number } | { type: 'Circle'; radius: number }
 */
export type DiscriminatedUnion<T, K extends keyof T = keyof T> = K extends K ? { type: K } & T[K] : never
