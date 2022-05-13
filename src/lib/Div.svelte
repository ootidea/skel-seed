<script lang="ts">
  import type { Display, Width } from './styleType'
  import { generateStyleString } from './utility'

  export let width: Width | undefined = undefined
  export let display: Display | undefined = undefined
  let klass: string | undefined = undefined
  export { klass as class }

  $: style = generateStyleString({ width, display })
</script>

<div class={klass} {style}>
  <slot />
</div>
