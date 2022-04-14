<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-horizontal-prepend_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skel-horizontal-prepend_root {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    width: 100%;
  }
</style>
