<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let visible = false
  export let disableAutoClose = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Modal', classProp, style)

  const open = () => (visible = true)
  const close = () => (visible = false)
  const toggle = () => (visible = !visible)

  function onClickBackdrop() {
    if (!disableAutoClose) {
      close()
    }
  }
</script>

{#if visible}
  <div {...injectors.attr('root')} on:click|self={onClickBackdrop}>
    <slot {open} {close} {toggle} />
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
