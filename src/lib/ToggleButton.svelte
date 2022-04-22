<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let selected = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('ToggleButton', classProp, style)
</script>

<div {...injectors.attr('root')} class:skel-toggle-button_selected={selected} on:click>
  <slot />
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-toggle-button_border-radius: 0.4em;
    --skel-toggle-button_border: var(--skel-toggle-button_border-color) 1px solid;
    --skel-toggle-button_border-color: oklch(80% 0 0);
    --skel-toggle-button_text-color: oklch(50% 0 0);
    --skel-toggle-button_selected-border-color: oklch(70% 0.08 255.4);
    --skel-toggle-button_selected-text-color: oklch(50% 0.22 255.4);
    --skel-toggle-button_selected-background-color: var(--skel-primary-background-color);
    --skel-toggle-button_selected-font-weight: inherit;
  }

  .skel-toggle-button_root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;

    padding: 0.3em 0.5em;
    border-block: var(--skel-toggle-button_border);
    border-left: var(--skel-toggle-button_border);

    color: var(--skel-toggle-button_text-color);
    // set default color of included icons
    --skel-icon_icon-default-color: currentColor;

    cursor: pointer;

    transition: var(--skel-backward-transition);

    &:first-of-type {
      border-top-left-radius: var(--skel-toggle-button_border-radius);
      border-bottom-left-radius: var(--skel-toggle-button_border-radius);
    }

    &:last-of-type {
      border-top-right-radius: var(--skel-toggle-button_border-radius);
      border-bottom-right-radius: var(--skel-toggle-button_border-radius);

      border-right: var(--skel-toggle-button_border);
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
      border-color: var(--skel-toggle-button_selected-border-color);

      & + .skel-toggle-button_button {
        border-left-color: var(--skel-toggle-button_selected-border-color);
      }

      background-color: var(--skel-toggle-button_selected-background-color);
      color: var(--skel-toggle-button_selected-text-color);
      font-weight: var(--skel-toggle-button_selected-font-weight);

      &:hover {
        background-color: var(--skel-primary-background-hover-color);
      }

      &:active {
        background-color: var(--skel-primary-background-active-color);
      }
    }
  }
</style>
