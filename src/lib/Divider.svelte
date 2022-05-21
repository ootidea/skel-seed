<script lang="ts">
  export let direction: 'horizontal' | 'vertical' = 'horizontal'
  export let thickness = 'var(--skel-divider_default-thickness)'
  export let color = 'var(--skel-divider_default-color)'
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-divider_root {klass}"
  style:--skel-divider_thickness={thickness}
  style:--skel-divider_color={color}
  data-direction={direction}
/>

<style global lang="scss">
  :root {
    --skel-divider_default-thickness: 1px;
    --skel-divider_default-color: oklch(90% 0 0);
  }

  .skel-divider_root {
    background-color: var(--skel-divider_color);

    &[data-direction='horizontal'] {
      width: 100%;
      height: var(--skel-divider_thickness);
    }

    &[data-direction='vertical'] {
      width: var(--skel-divider_thickness);
      height: 100%;
    }
  }
</style>
