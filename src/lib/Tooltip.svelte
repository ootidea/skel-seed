<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let text: string | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<div class="skel-tooltip_root {klass}">
  <div class="skel-tooltip_content-wrapper">
    <slot />
  </div>
  <span class="skel-tooltip_popup-wrapper">
    <slot name="popup">
      {#if text !== undefined}
        <div class="skel-tooltip_default-popup">{text}</div>
      {/if}
    </slot>
  </span>
</div>

<CommonCss />

<style global lang="scss">
  .skel-tooltip_root {
    position: relative;
    width: max-content;
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

    z-index: var(--skel-tooltip-z-index);
  }

  .skel-tooltip_default-popup {
    border-radius: 0.4em;
    padding: 0.1em 0.4em;

    background-color: oklch(50% 0 0);
    color: var(--skel-inverted-text-color);

    font-size: 0.9em;
    white-space: pre-wrap;
  }
</style>
