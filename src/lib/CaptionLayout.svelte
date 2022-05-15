<script lang="ts">
  let klass = ''
  export { klass as class }

  let clientWidth = 0
</script>

<div class="skel-caption-layout_root {klass}" style:--skel-caption-layout_width="{clientWidth}px">
  <div class="skel-caption-layout_unnamed-slot-wrapper" bind:clientWidth>
    <slot />
  </div>
  <div class="skel-caption-layout_caption">
    <slot name="caption" />
  </div>
</div>

<style global lang="scss">
  .skel-caption-layout_unnamed-slot-wrapper {
    width: max-content;
  }

  .skel-caption-layout_caption {
    max-width: var(--skel-caption-layout_width);
  }
</style>
