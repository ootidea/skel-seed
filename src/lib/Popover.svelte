<script lang="ts">
  import { scale } from 'svelte/transition'
  import CommonCss from './CommonCss.svelte'
  import { type EnneaPosition, toOpposite, toXPercent, toYPercent } from './Position'
  import { isInsideOf, joinClasses } from './utility'

  export let opened = false
  export let on: EnneaPosition = 'bottom'
  export let joint: EnneaPosition | undefined = undefined
  export let persistent = false
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  const open = () => (opened = true)
  const close = () => (opened = false)
  const toggle = () => (opened = !opened)

  let contentElement: HTMLElement | null = null
  let popoverElement: HTMLElement | null = null

  function onClickWindow(event: MouseEvent) {
    if (persistent || !opened) return
    if (contentElement === null || popoverElement === null) return

    const x = event.clientX
    const y = event.clientY
    const contentRect = contentElement.getBoundingClientRect()
    if (isInsideOf(x, y, contentRect)) return

    const popoverRect = popoverElement.getBoundingClientRect()
    if (isInsideOf(x, y, popoverRect)) return

    close()
  }
</script>

<div
  class="skel-Popover_root {joinClasses(klass, classes)}"
  {style}
  style:--skel-Popover_left={toXPercent(on)}
  style:--skel-Popover_top={toYPercent(on)}
  style:--skel-Popover_transform="translate(-{toXPercent(joint ?? toOpposite(on))}, -{toYPercent(
    joint ?? toOpposite(on)
  )})"
  {...$$restProps}
>
  <div class="skel-Popover_content-area" bind:this={contentElement}>
    <slot {open} {close} {toggle} />
  </div>
  {#if opened}
    <div class="skel-Popover_popover-area" bind:this={popoverElement}>
      <slot name="popover-frame">
        <div class="skel-Popover_popover-frame" transition:scale={{ duration: 300, start: 0.92 }}>
          <slot name="popover" />
        </div>
      </slot>
    </div>
  {/if}
</div>

<svelte:window on:click={onClickWindow} />

<CommonCss />

<style global lang="scss">
  .skel-Popover_root {
    position: relative;
    width: max-content;
  }

  .skel-Popover_popover-area {
    position: absolute;
    left: var(--skel-Popover_left);
    top: var(--skel-Popover_top);
    transform: var(--skel-Popover_transform);

    width: max-content;

    z-index: var(--skel-popover-z-index);
  }

  .skel-Popover_popover-frame {
    background-color: var(--skel-background-color);
    border-radius: 0.4em;
    box-shadow: 0 1px 4px oklch(75% 0 0);
  }
</style>
