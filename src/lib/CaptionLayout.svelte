<script lang="ts">
  export let captionPosition: 'above' | 'below' = 'below'
  import { joinClasses } from './utility'

  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  let clientWidth = 0
</script>

<div
  class="skel-CaptionLayout_root {joinClasses(klass, classes)}"
  {style}
  style:--skel-CaptionLayout_width="{clientWidth}px"
  {...$$restProps}
>
  {#if captionPosition === 'below'}
    <div class="skel-CaptionLayout_unnamed-slot-wrapper" bind:clientWidth>
      <slot />
    </div>
    <div class="skel-CaptionLayout_caption">
      <slot name="caption" />
    </div>
  {:else}
    <div class="skel-CaptionLayout_caption">
      <slot name="caption" />
    </div>
    <div class="skel-CaptionLayout_unnamed-slot-wrapper" bind:clientWidth>
      <slot />
    </div>
  {/if}
</div>

<style global lang="scss">
  .skel-CaptionLayout_unnamed-slot-wrapper {
    width: max-content;
  }

  .skel-CaptionLayout_caption {
    max-width: var(--skel-CaptionLayout_width);
  }
</style>
