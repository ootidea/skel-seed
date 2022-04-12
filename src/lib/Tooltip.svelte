<script lang="ts">
  export let text: string | undefined = undefined

  let klass = ''
  export { klass as class }
</script>

<span class="root {klass}">
  <div class="wrapper">
    <slot />
  </div>
  <span class="popup-wrapper">
    <slot name="popup">
      {#if text !== undefined}
        <div class="default-popup">{text}</div>
      {/if}
    </slot>
  </span>
</span>

<style lang="scss">
  .root {
    display: inline-block;
    position: relative;
  }

  .popup-wrapper {
    position: absolute;
    // 下の中央に表示
    left: 50%;
    transform: translate(-50%, 0);

    visibility: hidden;

    .root:hover & {
      visibility: visible;
    }
  }

  .default-popup {
    font-size: 0.9em;
    color: oklch(100% 0 0);
    background-color: oklch(50% 0 0);
    border-radius: 0.4rem;

    padding-inline: 0.4em;
    padding-block: 0.1em;

    white-space: pre-wrap;
  }
</style>
