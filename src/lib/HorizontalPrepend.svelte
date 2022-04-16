<script lang="ts">
  let klass = ''
  export { klass as class }

  export let classes: Record<string, string> = {}
</script>

<div class="skel-horizontal-prepend_root {klass}">
  <div class="skel-horizontal-prepend_prepend">
    <slot name="prepend" />
  </div>
  <div class="skel-horizontal-prepend_main">
    <slot />
  </div>
</div>

<style global lang="scss">
  .skel-horizontal-prepend_root {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .skel-horizontal-prepend_prepend {
    height: 100%;
  }

  .skel-horizontal-prepend_main {
    height: 100%;
  }
</style>
