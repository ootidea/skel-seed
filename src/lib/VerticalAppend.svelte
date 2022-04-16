<script lang="ts">
  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('VerticalAppend', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)
</script>

<div class={getClass('root')} style={getStyle('root')}>
  <div class={getClass('main')} style={getStyle('main')}>
    <slot />
  </div>
  <div class={getClass('append')} style={getStyle('append')}>
    <slot name="append" />
  </div>
</div>

<style global lang="scss">
  .skel-vertical-append_root {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    height: 100%;
  }
</style>
