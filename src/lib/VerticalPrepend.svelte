<script lang="ts">
  import { type ClassProp, createClassGetter } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('VerticalPrepend', classProp)
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
  .skel-vertical-prepend_root {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    height: 100%;
  }
</style>
