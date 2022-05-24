<script lang="ts">
  import { onMount } from 'svelte'
  import CommonCss from './CommonCss.svelte'
  import Divider from './Divider.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import type { Arrow } from './utility'
  import { joinClasses } from './utility'

  export let unfolded = false
  export let headerBackgroundColor = 'var(--skel-Foldable_header-background-default-color)'
  export let borderColor = 'var(--skel-Foldable_border-default-color)'
  export let onUnfold: Arrow<[], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  const fold = () => (unfolded = false)
  const unfold = () => (unfolded = true)
  const toggle = () => (unfolded = !unfolded)

  // Mirror variable for value change detection.
  let _unfolded = unfolded
  $: if (_unfolded !== unfolded) {
    _unfolded = unfolded
    if (unfolded) {
      startUnfoldingAnimation()
      onUnfold?.()
    } else {
      startFoldingAnimation()
    }
  }

  let contentAreaElement: HTMLElement | null = null
  let contentHeight = 0

  onMount(() => {
    if (!unfolded && contentAreaElement !== null) {
      contentAreaElement.style.height = '0'
      contentAreaElement.style.visibility = 'hidden'
    }
  })

  const ANIMATION_OPTION = {
    duration: 140,
    easing: 'ease-out',
  }

  async function startFoldingAnimation() {
    if (contentAreaElement === null) return

    await contentAreaElement.animate({ height: [`${contentHeight}px`, '0'] }, ANIMATION_OPTION).finished
    contentAreaElement.style.height = '0'
    contentAreaElement.style.visibility = 'hidden'
  }

  async function startUnfoldingAnimation() {
    if (contentAreaElement === null) return

    contentAreaElement.style.visibility = 'visible'
    await contentAreaElement.animate({ height: ['0', `${contentHeight}px`] }, ANIMATION_OPTION).finished
    contentAreaElement.style.height = 'auto'
  }
</script>

<div
  class="skel-Foldable_root {joinClasses(klass, classes)}"
  {style}
  style:--skel-Foldable_header-background-color={headerBackgroundColor}
  style:--skel-Foldable_border-color={borderColor}
  data-unfolded={unfolded}
>
  <StretchLayout class="skel-Foldable_header" direction="horizontal" stretchAt={0} on:click={toggle}>
    <div class="skel-Foldable_title">
      <slot name="title" {fold} {unfold} {toggle} {unfolded} />
    </div>
    <Gravity>
      <slot name="icon" {unfolded}>
        <Icon class="skel-Foldable_icon" src="src/assets/chevron-down.svg" />
      </slot>
    </Gravity>
  </StretchLayout>
  {#if unfolded}
    <slot name="divider">
      <Divider color="var(--skel-Foldable_border-color)" />
    </slot>
  {/if}
  <div class="skel-Foldable_content-area" bind:this={contentAreaElement} bind:clientHeight={contentHeight}>
    <slot {fold} {unfold} {toggle} />
  </div>
</div>

<CommonCss />

<style global lang="scss">
  .skel-Foldable_root {
    --skel-Foldable_header-background-default-color: oklch(98% 0 0);
    --skel-Foldable_border-default-color: oklch(93% 0 0);

    border: var(--skel-Foldable_border-color) 1px solid;

    .skel-Foldable_root + & {
      // Helpful for making accordions
      border-top: none;
    }
  }

  .skel-Foldable_header {
    padding: 0.5em 1em;
    background-color: var(--skel-Foldable_header-background-color);
    cursor: pointer;

    transition: var(--skel-backward-transition);

    &:hover {
      // TODO: Make customizable
      background-color: oklch(96% 0 0);
      transition: var(--skel-forward-transition);
    }

    &:active {
      // TODO: Make customizable
      background-color: oklch(94% 0 0);
      transition: var(--skel-forward-transition);
    }
  }

  .skel-Foldable_icon {
    transform-origin: center;
    transition: all 140ms ease-out;

    .skel-Foldable_root[data-unfolded='true'] & {
      transform: rotate(-180deg);
    }

    // Need for nested Foldable
    .skel-Foldable_root[data-unfolded='false'] & {
      transform: rotate(0deg);
    }
  }

  .skel-Foldable_content-area {
    overflow: hidden;

    // height and visibility are set by JavaScript.
  }
</style>
