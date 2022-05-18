<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let size = 'var(--skel-spinner_default-size)'
  // TODO: Can convert this to CSS variable?
  export let thickness = 25
  export let frequency = 1.4
  export let inverted = false
  let klass = ''
  export { klass as class }

  $: svgUrl = `url('data:image/svg+xml;utf8,<svg width="200mm" height="200mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="${
    100 - thickness / 2
  }" fill="none" stroke="black" stroke-width="${thickness}" /></svg>')`
</script>

<div
  class="skel-spinner_root {klass}"
  style:--skel-spinner_size={size}
  style:--skel-spinner_svg-url={svgUrl}
  style:--skel-spinner_period="{1 / frequency}s"
  style:--skel-spinner_color={inverted
    ? 'var(--skel-inverted-text-color)'
    : 'var(--skel-primary-color)'}
/>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-spinner_default-size: 1.2em;
  }

  .skel-spinner_root {
    display: inline-block;
    position: relative;
    width: var(--skel-spinner_size);
    height: var(--skel-spinner_size);

    vertical-align: top;

    background-image: conic-gradient(transparent, transparent, var(--skel-spinner_color));
    mask: var(--skel-spinner_svg-url) no-repeat center;
    mask-size: contain;

    transform-origin: center;
    animation: rotation var(--skel-spinner_period) infinite linear;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
