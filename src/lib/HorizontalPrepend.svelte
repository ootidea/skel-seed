<script lang="ts">
  import { type ClassProp, createClassGetter } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('HorizontalPrepend', classProp)
</script>

<div class={getClass('root')}>
  <div class={getClass('prepend')}>
    <slot name="prepend" />
  </div>
  <div class={getClass('main')}>
    <slot />
  </div>
</div>

<style global lang="scss">
  .skel-horizontal-prepend_root {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .skel-horizontal-prepend_prepend {
    height: 100%;
  }

  .skel-horizontal-prepend_main {
    height: 100%;
  }
</style>
