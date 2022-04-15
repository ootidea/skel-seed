<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-vertical-prepend_root {klass}">
  <div class="skel-vertical-prepend_prepend">
    <slot name="prepend" />
  </div>
  <div class="skel-vertical-prepend_main">
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
