<script lang="ts">
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let thickness = 'var(--skel-divider-default-thickness)'
  export let color = 'var(--skel-divider-default-color)'

  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-divider_root skel-{orientation} {klass}"
  style:--skel-divider-thickness={thickness}
  style:--skel-divider-color={color}
/>

<style global lang="scss">
  :root {
    --skel-divider-default-thickness: 1px;
    --skel-divider-default-color: oklch(80% 0 0);
  }

  .skel-divider_root {
    background-color: var(--skel-divider-color);

    &.skel-horizontal {
      width: 100%;
      height: var(--skel-divider-thickness);
    }

    &.skel-vertical {
      width: var(--skel-divider-thickness);
      height: 100%;
    }
  }
</style>
