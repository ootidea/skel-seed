<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  type Value = $$Generic<string>
  export let values: Value[] = []
  export let selected: Value[] = []

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('MultiSelectToggleButton', classProp, style)

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

<div {...injectors.attr('root')}>
  {#each values as value, index (value)}
    <div
      {...injectors.attr('button')}
      class:skel-multi-select-toggle-button_selected={selected.includes(value)}
      on:click={() => clickEventHandler(value)}
    >
      <slot {value} {index}>
        {value}
      </slot>
    </div>
  {/each}
</div>

<CommonCss />

<style global lang="scss">
  .skel-multi-select-toggle-button_root {
    display: inline-flex;
  }

  .skel-multi-select-toggle-button_button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.3em 0.5em;
    border-block: var(--skel-toggle-button-border);
    border-left: var(--skel-toggle-button-border);

    color: var(--skel-toggle-button-text-color);
    // set default color of included icons
    --skel-icon_icon-default-color: currentColor;

    cursor: pointer;

    transition: var(--skel-backward-transition);

    &:first-of-type {
      border-top-left-radius: var(--skel-toggle-button-border-radius);
      border-bottom-left-radius: var(--skel-toggle-button-border-radius);
    }

    &:last-of-type {
      border-top-right-radius: var(--skel-toggle-button-border-radius);
      border-bottom-right-radius: var(--skel-toggle-button-border-radius);

      border-right: var(--skel-toggle-button-border);
    }

    &:hover {
      background-color: var(--skel-clickable-hover-background-color);
      transition: var(--skel-forward-transition);
    }

    &:active {
      background-color: var(--skel-clickable-active-background-color);
      transition: var(--skel-forward-transition);
    }

    &.skel-multi-select-toggle-button_selected {
      border-color: var(--skel-toggle-button-selected-border-color);

      & + .skel-multi-select-toggle-button_button {
        border-left-color: var(--skel-toggle-button-selected-border-color);
      }

      background-color: var(--skel-toggle-button-selected-background-color);
      color: var(--skel-toggle-button-selected-text-color);
      font-weight: var(--skel-toggle-button-selected-font-weight);

      &:hover {
        background-color: var(--skel-primary-background-hover-color);
      }

      &:active {
        background-color: var(--skel-primary-background-active-color);
      }
    }
  }
</style>
