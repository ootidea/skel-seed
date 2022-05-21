<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-OverlayLayout_root {klass}">
  <slot />
  <div class="skel-OverlayLayout_overlay">
    <slot name="overlay" />
  </div>
</div>

<style global lang="scss">
  .skel-OverlayLayout_root {
    position: relative;
    width: max-content;
  }

  .skel-OverlayLayout_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    pointer-events: none;
  }
</style>
