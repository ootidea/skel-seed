<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let visible = false
  export let disableAutoClose = false
  let klass = ''
  export { klass as class }

  const open = () => (visible = true)
  const close = () => (visible = false)
  const toggle = () => (visible = !visible)

  function onClickBackdrop() {
    if (!disableAutoClose) {
      close()
    }
  }
</script>

{#if $$slots.modal}
  <slot {open} {close} {toggle} />
{/if}
{#if visible}
  <div class="skel-modal_root {klass}" on:click|self={onClickBackdrop}>
    {#if $$slots.modal}
      <slot name="modal" {open} {close} {toggle} />
    {:else}
      <slot {open} {close} {toggle} />
    {/if}
  </div>
{/if}

<CommonCss />

<style global lang="scss">
  :root {
    --skel-modal-background-color: oklch(50% 0 0 / 0.05);
  }

  .skel-modal_root {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: var(--skel-modal-z-index);

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--skel-modal-background-color);
  }
</style>
