<script lang="ts">
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('OverlayLayout', classProp, style)
</script>

<div {...injectors.attr('root')}>
  <div {...injectors.attr('lower-layer')}>
    <slot />
  </div>
  <div {...injectors.attr('upper-layer')}>
    <slot name="overlay" />
  </div>
</div>

<style global lang="scss">
  .skel-overlay-layout_root {
    position: relative;
    width: max-content;
  }

  .skel-overlay-layout_upper-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
