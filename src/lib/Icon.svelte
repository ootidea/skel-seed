<script lang="ts">
  export let src = ''
  export let size = 'var(--skel-Icon_default-size)'
  export let iconColor = 'var(--skel-Icon_icon-default-color)'
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-Icon_root {klass}"
  {style}
  style:--skel-Icon_url="url('{src}')"
  style:--skel-Icon_size={size}
  style:--skel-Icon_icon-color={iconColor}
/>

<style global lang="scss">
  :root {
    --skel-Icon_icon-default-color: oklch(40% 0 0);
    --skel-Icon_default-size: 1.2em;
  }

  .skel-Icon_root {
    vertical-align: top;

    display: inline-block;
    width: var(--skel-Icon_size);
    height: var(--skel-Icon_size);

    background-color: var(--skel-Icon_icon-color);
    mask: var(--skel-Icon_url) no-repeat center;
    mask-size: contain;
  }
</style>
