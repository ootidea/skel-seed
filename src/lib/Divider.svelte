<script lang="ts">
  export let direction: 'horizontal' | 'vertical' = 'horizontal'
  export let thickness = 'var(--skel-Divider_default-thickness)'
  export let color = 'var(--skel-Divider_default-color)'
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-Divider_root {klass}"
  style:--skel-Divider_thickness={thickness}
  style:--skel-Divider_color={color}
  data-direction={direction}
/>

<style global lang="scss">
  :root {
    --skel-Divider_default-thickness: 1px;
    --skel-Divider_default-color: oklch(90% 0 0);
  }

  .skel-Divider_root {
    background-color: var(--skel-Divider_color);

    &[data-direction='horizontal'] {
      width: 100%;
      height: var(--skel-Divider_thickness);
    }

    &[data-direction='vertical'] {
      width: var(--skel-Divider_thickness);
      height: 100%;
    }
  }
</style>
