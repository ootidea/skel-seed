<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import ToggleButton from './ToggleButton.svelte'
  import { joinClasses } from './utility'

  type Value = $$Generic<string>
  export let values: Value[] = []
  export let selected: Value | undefined = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  function clickEventHandler(value: Value) {
    if (value !== selected) {
      selected = value
    } else {
      selected = undefined
    }
  }
</script>

<div class="skel-SingleSelectToggleButton_root {joinClasses(klass, classes)}" {style}>
  {#each values as value, index (value)}
    <ToggleButton selected={value === selected} on:click={() => clickEventHandler(value)}>
      <slot {value} {index}>
        {value}
      </slot>
    </ToggleButton>
  {/each}
</div>

<CommonCss />

<style global lang="scss">
  .skel-SingleSelectToggleButton_root {
    display: inline-flex;
  }
</style>
