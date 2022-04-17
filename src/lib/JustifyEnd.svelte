<script lang="ts">
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('JustifyEnd', classProp, style)
</script>

<div {...injectors.attr('root')}>
  <slot />
</div>

<style global lang="scss">
  .skel-justify-end_root {
    display: flex;
    justify-content: end;
  }
</style>
