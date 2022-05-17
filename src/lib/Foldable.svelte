<script lang="ts">
  import { slide } from 'svelte/transition'
  import CommonCss from './CommonCss.svelte'
  import Divider from './Divider.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import StretchLayout from './StretchLayout.svelte'

  export let unfolded = false
  export let headerBackgroundColor = 'var(--skel-foldable_header-background-default-color)'
  export let borderColor = 'var(--skel-foldable_border-default-color)'
  let klass = ''
  export { klass as class }

  const fold = () => (unfolded = true)
  const unfold = () => (unfolded = false)
  const toggle = () => (unfolded = !unfolded)
</script>

<div
  class="skel-foldable_root {klass}"
  class:skel-foldable_unfolded={unfolded}
  style:--skel-foldable_header-background-color={headerBackgroundColor}
  style:--skel-foldable_border-color={borderColor}
>
  <StretchLayout
    class="skel-foldable_header"
    direction="horizontal"
    stretchAt={0}
    on:click={toggle}
  >
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
    <div transition:slide={{ duration: 100 }}>
      <slot {fold} {unfold} {toggle} />
    </div>
  {/if}
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
    transition: all 0.2s ease-out;

    .skel-foldable_unfolded & {
      transform: rotate(-180deg);
    }
  }
</style>
