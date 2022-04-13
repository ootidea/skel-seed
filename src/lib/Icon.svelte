<script lang="ts">
  export let url = ''
  export let size = '1.1em'
  export let color = 'var(--skel-icon-default-color)'

  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-icon_root {klass}"
  style:--url="url('{url}')"
  style:--size={size}
  style:--color={color}
/>

<style global lang="scss">
  :root {
    --skel-icon-default-color: oklch(40% 0 0);
  }

  .skel-icon_root {
    display: inline-block;
    width: var(--size);
    height: var(--size);

    background-color: var(--color);
    mask: var(--url) no-repeat center;
    mask-size: contain;
  }
</style>
