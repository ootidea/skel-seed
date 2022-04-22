<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  type Value = $$Generic<string>
  export let value: Value
  export let selected = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('ToggleButton', classProp, style)
</script>

<div {...injectors.attr('root')} class:skel-toggle-button_selected={selected} on:click>
  <slot {value}>
    {value}
  </slot>
</div>

<CommonCss />

<style global lang="scss">
  .skel-toggle-button_root {
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

    &.skel-toggle-button_selected {
      border-color: var(--skel-toggle-button-selected-border-color);

      & + .skel-toggle-button_button {
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
