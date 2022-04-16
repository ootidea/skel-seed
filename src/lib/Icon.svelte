<script lang="ts">
  export let src = ''
  export let size = 'var(--skel-icon-default-size)'
  export let color = 'var(--skel-icon-default-color)'

  import { type ClassProp, createClassGetter } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('Icon', classProp)
</script>

<div
  class={getClass('root')}
  style:--skel-icon-url="url('{src}')"
  style:--skel-icon-size={size}
  style:--skel-icon-color={color}
/>

<style global lang="scss">
  :root {
    --skel-icon-default-color: oklch(40% 0 0);
    --skel-icon-default-size: 1.2em;
  }

  .skel-icon_root {
    display: inline-block;
    width: var(--skel-icon-size);
    height: var(--skel-icon-size);

    background-color: var(--skel-icon-color);
    mask: var(--skel-icon-url) no-repeat center;
    mask-size: contain;
  }
</style>
