<script lang="ts">
  import { CssLength, generateStyleString } from './utility'

  export let width: CssLength | undefined = undefined
  let klass: string | undefined = undefined
  export { klass as class }

  $: style = generateStyleString({ width })
</script>

<div class={klass} {style}>
  <slot />
</div>
