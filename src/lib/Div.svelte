<script lang="ts">
  import type { AlignItems, Display, JustifyContent, Position, Width } from './styleType'
  import { BackgroundColor } from './styleType'
  import { generateStyleString } from './utility'

  export let position: Position | undefined = undefined
  export let width: Width | undefined = undefined
  export let display: Display | undefined = undefined
  export let alignItems: AlignItems | undefined = undefined
  export let justifyContent: JustifyContent | undefined = undefined
  export let backgroundColor: BackgroundColor | undefined = undefined
  let klass: string | undefined = undefined
  export { klass as class }

  $: style = generateStyleString({
    position,
    width,
    display,
    alignItems,
    justifyContent,
    backgroundColor,
  })
</script>

<div class={klass} {style}>
  <slot />
</div>
