<script lang="ts">
  export let text: string | undefined = undefined
  export let style: string | undefined = undefined

  let klass = ''
  export { klass as class }
</script>

<div class="skeleto-tooltip_root {klass}" {style}>
  <div class="wrapper">
    <slot />
  </div>
  <span class="skeleto-tooltip_popup-wrapper">
    <slot name="popup">
      {#if text !== undefined}
        <div class="skeleto-tooltip_default-popup">{text}</div>
      {/if}
    </slot>
  </span>
</div>

<style global lang="scss">
  .skeleto-tooltip_root {
    position: relative;
  }

  .skeleto-tooltip_popup-wrapper {
    position: absolute;
    // Show at the center of the bottom
    left: 50%;
    transform: translate(-50%, 0);

    visibility: hidden;

    .skeleto-tooltip_root:hover & {
      visibility: visible;
    }
  }

  .skeleto-tooltip_default-popup {
    border-radius: 0.4em;
    padding: 0.1em 0.4em;

    background-color: oklch(50% 0 0);
    color: oklch(100% 0 0);

    font-size: 0.9em;
    white-space: pre-wrap;
  }
</style>
