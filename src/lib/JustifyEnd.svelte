<script lang="ts">
  import { classGenerator, type ClassProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('JustifyEnd', classProp)
</script>

<div class={getClass('root')}>
  <slot />
</div>

<style global lang="scss">
  .skel-justify-end_root {
    display: flex;
    justify-content: end;
  }
</style>
