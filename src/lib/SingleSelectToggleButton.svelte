<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import ToggleButton from './ToggleButton.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  type Value = $$Generic<string>
  export let values: Value[] = []
  export let selected: Value | undefined = undefined

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('SingleSelectToggleButton', classProp, style)

  function clickEventHandler(value: Value) {
    if (value !== selected) {
      selected = value
    } else {
      selected = undefined
    }
  }
</script>

<div {...injectors.attr('root')}>
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
  .skel-single-select-toggle-button_root {
    display: inline-flex;
  }
</style>
