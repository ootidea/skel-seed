<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import ToggleButton from './ToggleButton.svelte'
  import { joinClasses } from './utility'

  type Value = $$Generic<string>
  export let values: Value[] = []
  export let selected: Value[] = []
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  function clickEventHandler(value: Value) {
    const index = selected.indexOf(value)
    if (index === -1) {
      selected.push(value)
      selected = values.filter((value) => selected.includes(value))
    } else {
      selected.splice(index, 1)
      selected = selected
    }
  }
</script>

<div class="skel-MultiSelectToggleButton_root {joinClasses(klass, classes)}" {style}>
  {#each values as value, index (value)}
    <ToggleButton selected={selected.includes(value)} on:click={() => clickEventHandler(value)}>
      <slot {value} {index}>
        {value}
      </slot>
    </ToggleButton>
  {/each}
</div>

<CommonCss />

<style global lang="scss">
  .skel-MultiSelectToggleButton_root {
    display: inline-flex;
  }
</style>
