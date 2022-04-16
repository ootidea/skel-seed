<script lang="ts">
  import { classGenerator, type ClassProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('HorizontalAppend', classProp)
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
