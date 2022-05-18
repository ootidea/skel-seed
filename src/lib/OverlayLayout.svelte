<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-overlay-layout_root {klass}">
  <slot />
  <div class="skel-overlay-layout_overlay">
    <slot name="overlay" />
  </div>
</div>

<style global lang="scss">
  .skel-overlay-layout_root {
    position: relative;
    width: max-content;
  }

  .skel-overlay-layout_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    pointer-events: none;
  }
</style>
