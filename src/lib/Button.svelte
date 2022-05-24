<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import Gravity from './Gravity.svelte'
  import OverlayLayout from './OverlayLayout.svelte'
  import Spinner from './Spinner.svelte'
  import type { Arrow } from './utility'
  import { joinClasses } from './utility'

  export let tint: 'primary' | 'achromatic' = 'primary'
  export let ghost = false
  export let rounded = false
  export let disabled = false
  export let fullWidth = false
  export let onClick: Arrow<[MouseEvent], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  $: isSpinnerInverted = !ghost

  let isInProgress = false

  function clickEventHandler(event: MouseEvent) {
    const promise = onClick?.(event)
    if (promise instanceof Promise) {
      isInProgress = true
      promise.finally(() => (isInProgress = false))
    }
  }
</script>

<button
  class="skel-Button_root {joinClasses(klass, classes)}"
  class:skel-Button_ghost={ghost}
  class:skel-Button_rounded={rounded}
  class:skel-Button_disabled={disabled}
  class:skel-Button_full-width={fullWidth}
  {style}
  data-tint={tint}
  {disabled}
  on:click={clickEventHandler}
>
  {#if isInProgress}
    <OverlayLayout>
      <div class="skel-Button_invisible">
        <slot />
      </div>
      <Gravity slot="overlay">
        <Spinner inverted={isSpinnerInverted} />
      </Gravity>
    </OverlayLayout>
  {:else}
    <slot />
  {/if}
</button>

<CommonCss />

<style global lang="scss">
  .skel-Button_root {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    // Since character height is different between full-pitch and half-pitch, set height instead of padding.
    height: 2.45em;
    padding: 0 1em;
    border-radius: 0.3em;
    border-width: 1px;
    border-style: solid;

    font: inherit;

    user-select: none;
    transition: var(--skel-backward-transition);

    &:not(.skel-Button_ghost) {
      color: var(--skel-inverted-text-color);
      border-color: var(--skel-Button_tint-color);
      background-color: var(--skel-Button_tint-color);

      &[data-tint='primary'] {
        --skel-Button_tint-color: var(--skel-primary-color);
      }

      &[data-tint='achromatic'] {
        --skel-Button_tint-color: oklch(55% 0 0);
      }
    }

    &.skel-Button_ghost {
      color: var(--skel-Button_tint-color);
      border-color: var(--skel-Button_tint-color);
      background-color: transparent;

      &[data-tint='primary'] {
        --skel-Button_tint-color: var(--skel-primary-color);
      }

      &[data-tint='achromatic'] {
        --skel-Button_tint-color: oklch(50% 0 0);
      }
    }

    &:not(.skel-Button_disabled) {
      cursor: pointer;

      &:hover {
        transition: var(--skel-forward-transition);
        background-color: var(--skel-primary-inverted-background-hover-color);

        &.skel-Button_ghost {
          background-color: var(--skel-primary-background-hover-color);
        }
      }

      &:active {
        transition: var(--skel-forward-transition);
        background-color: var(--skel-primary-inverted-background-active-color);

        &.skel-Button_ghost {
          background-color: var(--skel-primary-background-active-color);
        }
      }
    }
  }

  .skel-Button_rounded {
    border-radius: 99999px;
  }

  .skel-Button_invisible {
    visibility: hidden;
  }

  .skel-Button_full-width {
    display: flex;
    width: 100%;
  }
</style>
