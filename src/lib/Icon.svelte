<script lang="ts">
  export let src = ''
  export let size = 'var(--skel-icon_default-size)'
  export let iconColor = 'var(--skel-icon_icon-default-color)'
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-icon_root {klass}"
  style:--skel-icon_url="url('{src}')"
  style:--skel-icon_size={size}
  style:--skel-icon_icon-color={iconColor}
/>

<style global lang="scss">
  :root {
    --skel-icon_icon-default-color: oklch(40% 0 0);
    --skel-icon_default-size: 1.2em;
  }

  .skel-icon_root {
    vertical-align: top;

    display: inline-block;
    width: var(--skel-icon_size);
    height: var(--skel-icon_size);

    background-color: var(--skel-icon_icon-color);
    mask: var(--skel-icon_url) no-repeat center;
    mask-size: contain;
  }
</style>
