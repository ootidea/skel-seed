<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-vertical-append_root {klass}">
  <div class="skel-vertical-append_main">
    <slot />
  </div>
  <div class="skel-vertical-append_append">
    <slot name="append" />
  </div>
</div>

<style global lang="scss">
  .skel-vertical-append_root {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    height: 100%;
  }
</style>
