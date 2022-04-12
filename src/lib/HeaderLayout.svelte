<script lang="ts">
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  let klass = ''
  export { klass as class }
</script>

<div class="skeleto-header-layout_root {orientation} {klass}">
  <slot />
</div>

<style global lang="scss">
  .skeleto-header-layout_root {
    display: grid;

    &.horizontal {
      width: 100%;
      grid-template-columns: auto minmax(0, 1fr);
    }

    &.vertical {
      height: 100%;
      grid-template-rows: auto minmax(0, 1fr);
    }
  }
</style>
