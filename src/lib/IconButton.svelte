<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import Icon from './Icon.svelte'
  import { type Arrow, type ClassProp, createInjectors, type StyleProp } from './utility'

  export let src = ''
  export let size = 'var(--skel-icon-default-size)'
  export let color = 'var(--skel-icon-default-color)'
  export let onClick: Arrow<[MouseEvent], unknown> | undefined = undefined
  export let disabled = false
  export let disabledColor = 'var(--skel-icon-button_disabled-default-color)'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('IconButton', classProp, style)
</script>

<div
  {...injectors.attr('root')}
  class:skel-icon-button_disabled={disabled}
  style:--skel-icon-button_size={size}
  on:click={onClick}
>
  <slot>
    <Icon {...injectors.props('icon')} {src} {size} color={disabled ? disabledColor : color} />
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
