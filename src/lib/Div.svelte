<script lang="ts">
  import type {
    AlignItems,
    BoxSizing,
    Display,
    FontWeight,
    Height,
    JustifyContent,
    Position,
    Width,
  } from './styleType'
  import { generateStyleString } from './utility'

  export let position: Position | undefined = undefined
  export let top: string | undefined = undefined
  export let bottom: string | undefined = undefined
  export let left: string | undefined = undefined
  export let right: string | undefined = undefined
  export let display: Display | undefined = undefined
  export let gridTemplateColumns: string | undefined = undefined
  export let gridTemplateRows: string | undefined = undefined
  export let alignItems: AlignItems | undefined = undefined
  export let justifyContent: JustifyContent | undefined = undefined
  export let gap: string | undefined = undefined
  export let columnGap: string | undefined = undefined
  export let rowGap: string | undefined = undefined
  export let margin: string | undefined = undefined
  export let marginTop: string | undefined = undefined
  export let marginBottom: string | undefined = undefined
  export let marginLeft: string | undefined = undefined
  export let marginRight: string | undefined = undefined
  export let marginStart: string | undefined = undefined
  export let marginEnd: string | undefined = undefined
  export let marginBlock: string | undefined = undefined
  export let marginInline: string | undefined = undefined
  export let padding: string | undefined = undefined
  export let paddingTop: string | undefined = undefined
  export let paddingBottom: string | undefined = undefined
  export let paddingLeft: string | undefined = undefined
  export let paddingRight: string | undefined = undefined
  export let paddingStart: string | undefined = undefined
  export let paddingEnd: string | undefined = undefined
  export let paddingBlock: string | undefined = undefined
  export let paddingInline: string | undefined = undefined
  export let boxSizing: BoxSizing | undefined = undefined
  export let width: Width | undefined = undefined
  export let minWidth: string | undefined = undefined
  export let maxWidth: string | undefined = undefined
  export let height: Height | undefined = undefined
  export let minHeight: string | undefined = undefined
  export let maxHeight: string | undefined = undefined
  export let borderRadius: string | undefined = undefined
  export let border: string | undefined = undefined
  export let outline: string | undefined = undefined
  export let boxShadow: string | undefined = undefined
  export let backgroundColor: string | undefined = undefined
  export let color: string | undefined = undefined
  export let fontSize: string | undefined = undefined
  export let fontWeight: FontWeight | undefined = undefined
  export let lineHeight: string | undefined = undefined

  export let style: string | undefined = undefined
  let klass: string | undefined = undefined
  export { klass as class }

  $: style = generateStyleString(style, {
    position,
    top,
    bottom,
    left,
    right,
    display,
    gridTemplateColumns,
    gridTemplateRows,
    alignItems,
    justifyContent,
    gap,
    columnGap,
    rowGap,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginStart,
    marginEnd,
    marginBlock,
    marginInline,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingEnd,
    paddingBlock,
    paddingInline,
    boxSizing,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    borderRadius,
    border,
    outline,
    boxShadow,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    lineHeight,
  })
</script>

<div class={klass} {style}>
  <slot />
</div>
