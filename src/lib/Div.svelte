<script lang="ts">
  import { type AutoComplete, generateStyleString } from './utility'

  export let width: AutoComplete<'max-content' | 'min-content'> | undefined = undefined
  let klass: string | undefined = undefined
  export { klass as class }

  $: style = generateStyleString({ width })
</script>

<div class={klass} {style}>
  <slot />
</div>
