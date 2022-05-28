<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { isInsideOf, joinClasses, observeWidth } from './utility'

  export let opened = false
  export let persistent = false
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  const open = () => (opened = true)
  const close = () => (opened = false)
  const toggle = () => (opened = !opened)

  let contentElement: HTMLElement | null = null
  let dropdownElement: HTMLElement | null = null
  let contentWidth = 0
  let dropdownWidth = 0

  function onClickWindow(event: MouseEvent) {
    if (persistent || !opened) return
    if (contentElement === null || dropdownElement === null) return

    const x = event.clientX
    const y = event.clientY
    const contentRect = contentElement.getBoundingClientRect()
    if (isInsideOf(x, y, contentRect)) return

    const dropdownRect = dropdownElement.getBoundingClientRect()
    if (isInsideOf(x, y, dropdownRect)) return

    close()
  }
</script>

<div
  class="skel-Dropdown_root {joinClasses(klass, classes)}"
  {style}
  style:--skel-Dropdown_content-width="{contentWidth}px"
  style:--skel-Dropdown_dropdown-width="{dropdownWidth}px"
  {...$$restProps}
>
  <div
    class="skel-Dropdown_content-area"
    bind:this={contentElement}
    use:observeWidth={(width) => (contentWidth = width)}
  >
    <slot {open} {close} {toggle} />
  </div>
  <div
    class="skel-Dropdown_dropdown-area"
    class:skel-Dropdown_invisible={!opened}
    bind:this={dropdownElement}
    use:observeWidth={(width) => (dropdownWidth = width)}
  >
    <slot name="frame">
      <div class="skel-Dropdown_frame">
        <slot name="dropdown" />
      </div>
    </slot>
  </div>
</div>

<svelte:window on:click={onClickWindow} />

<CommonCss />

<style global lang="scss">
  .skel-Dropdown_root {
    position: relative;
    width: max-content;
  }

  .skel-Dropdown_content-area {
    min-width: var(--skel-Dropdown_dropdown-width);
  }

  .skel-Dropdown_dropdown-area {
    position: absolute;

    width: max-content;
    min-width: var(--skel-Dropdown_content-width);

    z-index: var(--skel-dropdown-z-index);

    &.skel-Dropdown_invisible {
      visibility: hidden;
      // To hide CSS transition
      height: 0;
      overflow: hidden;
    }
  }

  .skel-Dropdown_frame {
    background-color: var(--skel-background-color);
    border-radius: 0.4em;
    box-shadow: 0 1px 4px oklch(75% 0 0);
  }
</style>
