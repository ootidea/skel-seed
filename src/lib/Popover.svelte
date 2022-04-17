<script lang="ts">
  import {
    type ClassProp,
    createClassGetter,
    createStyleGetter,
    isInsideOf,
    type StyleProp,
  } from './utility'

  export let hidden = true

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('Popover', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)

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

<div class={getClass('root')} style={getStyle('root')}>
  <div class={getClass('content-area')} style={getStyle('content-area')} bind:this={contentElement}>
    <slot {show} {hide} {toggleHidden} />
  </div>
  {#if !hidden}
    <div
      class={getClass('popover-area')}
      style={getStyle('popover-area')}
      bind:this={popoverElement}
    >
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
