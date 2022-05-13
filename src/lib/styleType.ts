export type AutoComplete<Literal extends Base, Base = string> =
  | Literal
  | (Base & Record<never, never>)

export type Position = AutoComplete<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>
export type Width = AutoComplete<'max-content' | 'min-content'>
export type Display = AutoComplete<
  'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid'
>
export type AlignItems = AutoComplete<'start' | 'end' | 'center'>
export type JustifyContent = AutoComplete<
  'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
>
export type BackgroundColor = string
