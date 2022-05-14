<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import type { Arrow } from './utility'

  export let tint: 'primary' | 'achromatic' = 'primary'
  export let ghost = false
  export let rounded = false
  export let disabled = false
  export let onClick: Arrow<[MouseEvent], unknown> | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<button
  class="skel-button_root {klass}"
  class:skel-button_ghost={ghost}
  class:skel-button_rounded={rounded}
  class:skel-button_disabled={disabled}
  data-tint={tint}
  on:click={onClick}
>
  <slot />
</button>

<CommonCss />

<style global lang="scss">
  .skel-button_root {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    // Since character height is different between full-pitch and half-pitch, set height instead of padding.
    height: 2.45em;
    padding: 0 1.3em;
    border-radius: 0.3em;
    border-width: 1px;
    border-style: solid;

    user-select: none;
    transition: var(--skel-backward-transition);

    &:not(.skel-button_ghost) {
      color: var(--skel-inverted-text-color);
      border-color: var(--skel-button_tint-color);
      background-color: var(--skel-button_tint-color);

      &[data-tint='primary'] {
        --skel-button_tint-color: var(--skel-primary-color);
      }

      &[data-tint='achromatic'] {
        --skel-button_tint-color: oklch(55% 0 0);
      }
    }

    &.skel-button_ghost {
      color: var(--skel-button_tint-color);
      border-color: var(--skel-button_tint-color);
      background-color: transparent;

      &[data-tint='primary'] {
        --skel-button_tint-color: var(--skel-primary-color);
      }

      &[data-tint='achromatic'] {
        --skel-button_tint-color: oklch(50% 0 0);
      }
    }

    &:not(.skel-button_disabled) {
      cursor: pointer;

      &:hover {
        transition: var(--skel-forward-transition);
        background-color: var(--skel-primary-inverted-background-hover-color);

        &.skel-button_ghost {
          background-color: var(--skel-primary-background-hover-color);
        }
      }

      &:active {
        transition: var(--skel-forward-transition);
        background-color: var(--skel-primary-inverted-background-active-color);

        &.skel-button_ghost {
          background-color: var(--skel-primary-background-active-color);
        }
      }
    }
  }

  .skel-button_rounded {
    border-radius: 99999px;
  }
</style>
