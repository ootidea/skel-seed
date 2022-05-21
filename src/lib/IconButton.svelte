<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import Spinner from './Spinner.svelte'
  import type { Arrow } from './utility'

  export let src = ''
  export let size = 'var(--skel-IconButton_default-size)'
  export let iconSize = 'var(--skel-IconButton_icon-default-size)'
  export let iconColor: string | undefined = undefined
  export let onClick: Arrow<[MouseEvent], unknown> | undefined = undefined
  export let disabled = false
  export let disabledColor = 'var(--skel-IconButton_disabled-default-color)'
  let klass = ''
  export { klass as class }

  let isInProgress = false

  function clickEventHandler(event: MouseEvent) {
    if (isInProgress) return

    const promise = onClick?.(event)
    if (promise instanceof Promise) {
      isInProgress = true
      promise.finally(() => (isInProgress = false))
    }
  }
</script>

<div
  class="skel-IconButton_root {klass}"
  class:skel-IconButton_disabled={disabled}
  style:--skel-IconButton_size={size}
  style:--skel-IconButton_icon-size={iconSize}
  on:click={clickEventHandler}
>
  {#if isInProgress}
    <Gravity>
      <Spinner />
    </Gravity>
  {:else}
    <Icon {src} size={iconSize} iconColor={disabled ? disabledColor : iconColor} />
  {/if}
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-IconButton_default-size: 2em;
    --skel-IconButton_icon-default-size: 80%;
    --skel-IconButton_disabled-default-color: oklch(70% 0 0);
  }

  .skel-IconButton_root {
    display: inline-flex;
    vertical-align: top;
    align-items: center;
    justify-content: center;

    width: var(--skel-IconButton_size);
    height: var(--skel-IconButton_size);
    border-radius: 50%;
    overflow: hidden;

    user-select: none;

    transition: var(--skel-backward-transition);

    &:not(.skel-IconButton_disabled) {
      cursor: pointer;

      &:hover {
        background-color: var(--skel-clickable-hover-background-color);
        transition: var(--skel-forward-transition);
      }

      &:active {
        background-color: var(--skel-clickable-active-background-color);
        transition: var(--skel-forward-transition);
      }
    }
  }
</style>
