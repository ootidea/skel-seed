<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let opened = false
  export let disableAutoClose = false
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  const open = () => (opened = true)
  const close = () => (opened = false)
  const toggle = () => (opened = !opened)

  function onClickBackdrop() {
    if (!disableAutoClose) {
      close()
    }
  }
</script>

{#if $$slots.modal || $$slots.frame}
  <slot {open} {close} {toggle} />
{/if}
{#if opened}
  <div
    class={`skel-Modal_root ${joinClasses(klass, classes)}`}
    style={joinStyles(style, styles)}
    on:click|self={onClickBackdrop}
    {...$$restProps}
  >
    <slot name="frame" {open} {close} {toggle}>
      <div class="skel-Modal_frame">
        {#if $$slots.modal}
          <slot name="modal" {open} {close} {toggle} />
        {:else}
          <slot {open} {close} {toggle} />
        {/if}
      </div>
    </slot>
  </div>
{/if}

<CommonCss />

<style global lang="scss">
  .skel-Modal_root {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: var(--skel-modal-z-index);

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: oklch(50% 0 0 / 0.05);
  }

  .skel-Modal_frame {
    background-color: var(--skel-background-color);
    border-radius: 0.4em;
    box-shadow: 0 1px 4px oklch(75% 0 0);
  }
</style>
