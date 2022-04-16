<script lang="ts">
  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('OverlayLayout', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)
</script>

<div class={getClass('root')} style={getStyle('root')}>
  <div class={getClass('lower-layer')} style={getStyle('lower-layer')}>
    <slot />
  </div>
  <div class={getClass('upper-layer')} style={getStyle('upper-layer')}>
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
