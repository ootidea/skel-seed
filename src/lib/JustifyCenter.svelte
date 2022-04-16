<script lang="ts">
  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('JustifyCenter', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)
</script>

<div class={getClass('root')} style={getStyle('root')}>
  <slot />
</div>

<style global lang="scss">
  .skel-justify-center_root {
    display: flex;
    justify-content: center;
  }
</style>
