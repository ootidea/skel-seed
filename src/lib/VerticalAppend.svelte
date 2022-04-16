<script lang="ts">
  import { classGenerator, type ClassProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('VerticalAppend', classProp)
</script>

<div class={getClass('root')}>
  <div class={getClass('main')}>
    <slot />
  </div>
  <div class={getClass('append')}>
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
