<script lang="ts">
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  let klass = ''
  export { klass as class }
</script>

<div class="skel-header-layout_root skel-{orientation} {klass}">
  <slot />
</div>

<style global lang="scss">
  .skel-header-layout_root {
    display: grid;

    &.skel-horizontal {
      width: 100%;
      grid-template-columns: auto minmax(0, 1fr);
    }

    &.skel-vertical {
      height: 100%;
      grid-template-rows: auto minmax(0, 1fr);
    }
  }
</style>
