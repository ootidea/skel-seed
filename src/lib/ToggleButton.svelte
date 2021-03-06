<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let selected = false
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<div
  class={`skel-ToggleButton_root ${joinClasses(klass, classes)}`}
  class:skel-ToggleButton_selected={selected}
  style={joinStyles(style, styles)}
  on:click
  {...$$restProps}
>
  <slot />
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-ToggleButton_border-radius: 0.4em;
    --skel-ToggleButton_border: var(--skel-ToggleButton_border-color) 1px solid;
    --skel-ToggleButton_border-color: oklch(80% 0 0);
    --skel-ToggleButton_text-color: oklch(50% 0 0);
    --skel-ToggleButton_selected-border-color: oklch(70% 0.08 255.4);
    --skel-ToggleButton_selected-text-color: oklch(50% 0.22 255.4);
    --skel-ToggleButton_selected-background-color: var(--skel-primary-background-color);
    --skel-ToggleButton_selected-font-weight: inherit;
  }

  .skel-ToggleButton_root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;

    padding: 0.3em 0.5em;
    border-block: var(--skel-ToggleButton_border);
    border-left: var(--skel-ToggleButton_border);

    color: var(--skel-ToggleButton_text-color);

    cursor: pointer;

    transition: var(--skel-backward-transition);

    &:first-of-type {
      border-top-left-radius: var(--skel-ToggleButton_border-radius);
      border-bottom-left-radius: var(--skel-ToggleButton_border-radius);
    }

    &:last-of-type {
      border-top-right-radius: var(--skel-ToggleButton_border-radius);
      border-bottom-right-radius: var(--skel-ToggleButton_border-radius);

      border-right: var(--skel-ToggleButton_border);
    }

    &:hover {
      background-color: var(--skel-clickable-hover-background-color);
      transition: var(--skel-forward-transition);
    }

    &:active {
      background-color: var(--skel-clickable-active-background-color);
      transition: var(--skel-forward-transition);
    }

    &.skel-ToggleButton_selected {
      border-color: var(--skel-ToggleButton_selected-border-color);

      & + .skel-ToggleButton_button {
        border-left-color: var(--skel-ToggleButton_selected-border-color);
      }

      background-color: var(--skel-ToggleButton_selected-background-color);
      color: var(--skel-ToggleButton_selected-text-color);
      font-weight: var(--skel-ToggleButton_selected-font-weight);

      &:hover {
        background-color: var(--skel-primary-background-hover-color);
      }

      &:active {
        background-color: var(--skel-primary-background-active-color);
      }
    }
  }
</style>
