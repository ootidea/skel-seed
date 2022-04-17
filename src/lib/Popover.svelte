<script lang="ts">
  import { type ClassProp, createInjectors, isInsideOf, type StyleProp } from './utility'

  export let hidden = true

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Popover', classProp, style)

  const show = () => (hidden = false)
  const hide = () => (hidden = true)
  const toggleHidden = () => (hidden = !hidden)

  let contentElement: HTMLElement | undefined | null
  let popoverElement: HTMLElement | undefined | null

  function onClickWindow(event: MouseEvent) {
    if (hidden) return
    if (contentElement == null) return
    if (popoverElement == null) return

    const x = event.clientX
    const y = event.clientY
    const contentRect = contentElement.getBoundingClientRect()
    if (isInsideOf(x, y, contentRect)) return

    const popoverRect = popoverElement.getBoundingClientRect()
    if (isInsideOf(x, y, popoverRect)) return

    hide()
  }
</script>

<div {...injectors.attr('root')}>
  <div {...injectors.attr('content-area')} bind:this={contentElement}>
    <slot {show} {hide} {toggleHidden} />
  </div>
  {#if !hidden}
    <div {...injectors.attr('popover-area')} bind:this={popoverElement}>
      <slot name="popover" />
    </div>
  {/if}
</div>

<svelte:window on:click={onClickWindow} />

<style global lang="scss">
  .skel-popover_root {
    position: relative;
    width: max-content;
  }

  .skel-popover_popover-area {
    position: absolute;
    // Show at the center of the bottom
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
