<script lang="ts">
  import { type ClassProp, createClassGetter } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('JustifyCenter', classProp)
</script>

<div class={getClass('root')}>
  <slot />
</div>

<style global lang="scss">
  .skel-justify-center_root {
    display: flex;
    justify-content: center;
  }
</style>
