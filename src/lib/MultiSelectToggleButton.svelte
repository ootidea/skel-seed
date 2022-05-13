<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import ToggleButton from './ToggleButton.svelte'

  type Value = $$Generic<string>
  export let values: Value[] = []
  export let selected: Value[] = []
  let klass = ''
  export { klass as class }

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

<div class="skel-multi-select-toggle-button_root {klass}">
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
  .skel-multi-select-toggle-button_root {
    display: inline-flex;
  }
</style>
