<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import Icon from './Icon.svelte'
  import type { Arrow } from './utility'

  export let src = ''
  export let size: string | undefined = undefined
  export let iconColor: string | undefined = undefined
  export let onClick: Arrow<[MouseEvent], unknown> | undefined = undefined
  export let disabled = false
  export let disabledColor = 'var(--skel-icon-button_disabled-default-color)'
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-icon-button_root {klass}"
  class:skel-icon-button_disabled={disabled}
  style:--skel-icon-button_size={size}
  on:click={onClick}
>
  <slot>
    <Icon {src} {size} iconColor={disabled ? disabledColor : iconColor} />
  </slot>
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-icon-button_disabled-default-color: oklch(70% 0 0);
  }

  .skel-icon-button_root {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: var(--skel-icon-button_size);
    height: var(--skel-icon-button_size);
    border-radius: 50%;
    overflow: hidden;

    user-select: none;

    transition: var(--skel-backward-transition);

    &:not(.skel-icon-button_disabled) {
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
