export type AutoComplete<Literal extends Base, Base = string> =
  | Literal
  | (Base & Record<never, never>)

export type Width = AutoComplete<'max-content' | 'min-content'>
export type Display = AutoComplete<
  'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid'
>
