<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import type { Arrow } from './utility'

  export let achromatic = false
  export let rounded = false
  export let ghost: boolean | undefined = undefined
  export let disabled = false
  export let onClick: Arrow<[MouseEvent], unknown> | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<button
  class="skel-button_root {klass}"
  class:skel-button_achromatic={achromatic}
  class:skel-button_rounded={rounded}
  class:skel-button_ghost={ghost ?? achromatic}
  class:skel-button_disabled={disabled}
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
    border: var(--skel-primary-color) 1px solid;
    background-color: var(--skel-primary-color);
    color: var(--skel-inverted-text-color);

    user-select: none;
    transition: var(--skel-backward-transition);

    &.skel-button_ghost {
      background-color: transparent;
      color: var(--skel-primary-color);
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
