<script lang="ts">
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let src = ''
  export let size = 'var(--skel-icon-default-size)'
  export let iconColor = 'var(--skel-icon_icon-default-color)'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Icon', classProp, style)
</script>

<div
  {...injectors.attr('root')}
  style:--skel-icon-url="url('{src}')"
  style:--skel-icon-size={size}
  style:--skel-icon_icon-color={iconColor}
/>

<style global lang="scss">
  :root {
    --skel-icon_icon-default-color: oklch(40% 0 0);
    --skel-icon-default-size: 1.2em;
  }

  .skel-icon_root {
    vertical-align: top;

    display: inline-block;
    width: var(--skel-icon-size);
    height: var(--skel-icon-size);

    background-color: var(--skel-icon_icon-color);
    mask: var(--skel-icon-url) no-repeat center;
    mask-size: contain;
  }
</style>
