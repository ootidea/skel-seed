<script lang="ts">
  export let direction: 'horizontal' | 'vertical' = 'horizontal'
  export let thickness = 'var(--skel-divider-default-thickness)'
  export let color = 'var(--skel-divider-default-color)'
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-divider_root {klass}"
  style:--skel-divider-thickness={thickness}
  style:--skel-divider-color={color}
  data-direction={direction}
/>

<style global lang="scss">
  :root {
    --skel-divider-default-thickness: 1px;
    --skel-divider-default-color: oklch(90% 0 0);
  }

  .skel-divider_root {
    background-color: var(--skel-divider-color);

    &[data-direction='horizontal'] {
      width: 100%;
      height: var(--skel-divider-thickness);
    }

    &[data-direction='vertical'] {
      width: var(--skel-divider-thickness);
      height: 100%;
    }
  }
</style>
