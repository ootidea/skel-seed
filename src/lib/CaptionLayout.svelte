<script lang="ts">
  export let captionPosition: 'above' | 'below' = 'below'

  let klass = ''
  export { klass as class }

  let clientWidth = 0
</script>

<div class="skel-caption-layout_root {klass}" style:--skel-caption-layout_width="{clientWidth}px">
  {#if captionPosition === 'below'}
    <div class="skel-caption-layout_unnamed-slot-wrapper" bind:clientWidth>
      <slot />
    </div>
    <div class="skel-caption-layout_caption">
      <slot name="caption" />
    </div>
  {:else}
    <div class="skel-caption-layout_caption">
      <slot name="caption" />
    </div>
    <div class="skel-caption-layout_unnamed-slot-wrapper" bind:clientWidth>
      <slot />
    </div>
  {/if}
</div>

<style global lang="scss">
  .skel-caption-layout_unnamed-slot-wrapper {
    width: max-content;
  }

  .skel-caption-layout_caption {
    max-width: var(--skel-caption-layout_width);
  }
</style>
