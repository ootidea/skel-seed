<script lang="ts">
  import { onMount } from 'svelte'
  import CommonCss from './CommonCss.svelte'
  import Divider from './Divider.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import type { Arrow } from './utility'

  export let unfolded = false
  export let headerBackgroundColor = 'var(--skel-foldable_header-background-default-color)'
  export let borderColor = 'var(--skel-foldable_border-default-color)'
  export let onUnfold: Arrow<[], unknown> | undefined = undefined
  let klass = ''
  export { klass as class }

  const fold = () => (unfolded = true)
  const unfold = () => (unfolded = false)
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
  class="skel-foldable_root {klass}"
  class:skel-foldable_unfolded={unfolded}
  style:--skel-foldable_header-background-color={headerBackgroundColor}
  style:--skel-foldable_border-color={borderColor}
>
  <StretchLayout class="skel-foldable_header" direction="horizontal" stretchAt={0} on:click={toggle}>
    <div class="skel-foldable_title">
      <slot name="title" {fold} {unfold} {toggle} {unfolded} />
    </div>
    <Gravity>
      <slot name="icon" {unfolded}>
        <Icon class="skel-foldable_icon" src="src/assets/chevron-down.svg" />
      </slot>
    </Gravity>
  </StretchLayout>
  {#if unfolded}
    <slot name="divider">
      <Divider color="var(--skel-foldable_border-color)" />
    </slot>
  {/if}
  <div class="skel-foldable_content-area" bind:this={contentAreaElement}>
    <div class="skel-foldable_content" bind:clientHeight={contentHeight}>
      <slot {fold} {unfold} {toggle} />
    </div>
  </div>
</div>

<CommonCss />

<style global lang="scss">
  .skel-foldable_root {
    --skel-foldable_header-background-default-color: oklch(98% 0 0);
    --skel-foldable_border-default-color: oklch(93% 0 0);

    border: var(--skel-foldable_border-color) 1px solid;
  }

  .skel-foldable_header {
    padding: 0.5em 1em;
    background-color: var(--skel-foldable_header-background-color);
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

  .skel-foldable_icon {
    transform-origin: center;
    transition: all 140ms ease-out;

    .skel-foldable_unfolded & {
      transform: rotate(-180deg);
    }
  }

  .skel-foldable_content-area {
    overflow: hidden;

    // height and visibility are set by JavaScript.
  }
</style>
