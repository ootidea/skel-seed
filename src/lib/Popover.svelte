<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { scale } from 'svelte/transition'
  import { type EnneaPosition, toOpposite, toXPercent, toYPercent } from './Position'
  import { type ClassProp, createInjectors, isInsideOf, type StyleProp } from './utility'

  export let visible = false
  export let on: EnneaPosition = 'bottom'
  export let joint: EnneaPosition | undefined = undefined
  export let persistent = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Popover', classProp, style)

  const open = () => (visible = true)
  const close = () => (visible = false)
  const toggle = () => (visible = !visible)

  let contentElement: HTMLElement | null = null
  let popoverElement: HTMLElement | null = null

  function onClickWindow(event: MouseEvent) {
    if (persistent || !visible) return
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
  {...injectors.attr('root')}
  style:--skel-popover_left={toXPercent(on)}
  style:--skel-popover_top={toYPercent(on)}
  style:--skel-popover_transform="translate(-{toXPercent(joint ?? toOpposite(on))}, -{toYPercent(
    joint ?? toOpposite(on)
  )})"
>
  <div {...injectors.attr('content-area')} bind:this={contentElement}>
    <slot {open} {close} {toggle} />
  </div>
  {#if visible}
    <div
      {...injectors.attr('popover-area')}
      bind:this={popoverElement}
      transition:scale={{ duration: 300, start: 0.92 }}
    >
      <slot name="popover-frame">
        <div {...injectors.attr('popover-frame')}>
          <slot name="popover" />
        </div>
      </slot>
    </div>
  {/if}
</div>

<svelte:window on:click={onClickWindow} />

<CommonCss />

<style global lang="scss">
  .skel-popover_root {
    position: relative;
    width: max-content;
  }

  .skel-popover_popover-area {
    position: absolute;
    left: var(--skel-popover_left);
    top: var(--skel-popover_top);
    transform: var(--skel-popover_transform);

    z-index: var(--skel-popover-z-index);
  }

  .skel-popover_popover-frame {
    background-color: oklch(100% 0 0);
    border-radius: 0.4em;
    box-shadow: 0 1px 4px oklch(75% 0 0);
  }
</style>
