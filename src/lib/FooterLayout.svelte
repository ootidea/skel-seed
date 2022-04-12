<script lang="ts">
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  let klass = ''
  export { klass as class }
</script>

<div class="root {orientation} {klass}">
  <slot />
</div>

<style lang="scss">
  .root {
    display: grid;

    &.horizontal {
      width: 100%;
      grid-template-columns: minmax(0, 1fr) auto;
    }

    &.vertical {
      height: 100%;
      grid-template-rows: minmax(0, 1fr) auto;
    }
  }
</style>
