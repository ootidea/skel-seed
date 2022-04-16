<script lang="ts">
  import { classGenerator, type ClassProp } from './utility'

  export let text: string | undefined = undefined

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('Tooltip', classProp)
</script>

<div class={getClass('root')}>
  <div class="wrapper">
    <slot />
  </div>
  <span class={getClass('popup-wrapper')}>
    <slot name="popup">
      {#if text !== undefined}
        <div class={getClass('default-popup')}>{text}</div>
      {/if}
    </slot>
  </span>
</div>

<style global lang="scss">
  .skel-tooltip_root {
    position: relative;
  }

  .skel-tooltip_popup-wrapper {
    position: absolute;
    // Show at the center of the bottom
    left: 50%;
    transform: translate(-50%, 0);

    visibility: hidden;

    .skel-tooltip_root:hover & {
      visibility: visible;
    }
  }

  .skel-tooltip_default-popup {
    border-radius: 0.4em;
    padding: 0.1em 0.4em;

    background-color: oklch(50% 0 0);
    color: oklch(100% 0 0);

    font-size: 0.9em;
    white-space: pre-wrap;
  }
</style>
