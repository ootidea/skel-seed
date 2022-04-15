<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-horizontal-append_root {klass}">
  <div class="skel-horizontal-append_main">
    <slot />
  </div>
  <div class="skel-horizontal-append_append">
    <slot name="append" />
  </div>
</div>

<style global lang="scss">
  .skel-horizontal-append_root {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    width: 100%;
  }
</style>
