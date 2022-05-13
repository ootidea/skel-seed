<script lang="ts">
  import { generateStyleString } from './utility'

  export let width: string | undefined = undefined
  let klass: string | undefined = undefined
  export { klass as class }

  $: style = generateStyleString({ width })
</script>

<div class={klass} {style}>
  <slot />
</div>
