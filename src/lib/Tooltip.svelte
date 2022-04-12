<script lang="ts">
  export let text: string | undefined = undefined
  export let style: string | undefined = undefined

  let klass = ''
  export { klass as class }
</script>

<span class="skeleto-tooltip_root {klass}" {style}>
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
</span>

<style global lang="scss">
  .skeleto-tooltip_root {
    display: inline-block;
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
    font-size: 0.9em;
    color: oklch(100% 0 0);
    background-color: oklch(50% 0 0);
    border-radius: 0.4rem;

    padding-inline: 0.4em;
    padding-block: 0.1em;

    white-space: pre-wrap;
  }
</style>
