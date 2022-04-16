<script lang="ts">
  import { classGenerator, type ClassProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('OverlayLayout', classProp)
</script>

<div class={getClass('root')}>
  <div class={getClass('lower-layer')}>
    <slot />
  </div>
  <div class={getClass('upper-layer')}>
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
