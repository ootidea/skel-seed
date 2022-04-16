<script lang="ts">
  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('HorizontalAppend', classProp)
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
  .skel-horizontal-append_root {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .skel-horizontal-append_main {
    height: 100%;
  }

  .skel-horizontal-append_append {
    height: 100%;
  }
</style>
