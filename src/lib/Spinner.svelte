<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let size = 'var(--skel-spinner_default-size)'
  export let color = 'var(--skel-spinner_default-color)'
  // TODO: Can convert this to CSS variable?
  export let thickness = 25

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Spinner', classProp, style)

  $: svgUrl = `url('data:image/svg+xml;utf8,<svg width="200mm" height="200mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="${
    100 - thickness / 2
  }" fill="none" stroke="black" stroke-width="${thickness}" /></svg>')`
</script>

<div
  {...injectors.attr('root')}
  style:--skel-spinner_size={size}
  style:--skel-spinner_color={color}
  style:--skel-spinner_svg-url={svgUrl}
>
  <div {...injectors.attr('ring')} />
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-spinner_default-color: oklch(40% 0 0);
    --skel-spinner_default-size: 1.2em;
    --skel-spinner_default-background-image: conic-gradient(
      transparent,
      transparent,
      var(--skel-primary-color)
    );
  }

  .skel-spinner_root {
    display: inline-block;
    position: relative;
    width: var(--skel-spinner_size);
    height: var(--skel-spinner_size);
  }

  .skel-spinner_ring {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 50%;
    left: 50%;

    vertical-align: top;

    background-image: var(--skel-spinner_default-background-image);
    mask: var(--skel-spinner_svg-url) no-repeat center;
    mask-size: contain;

    animation: rotation 0.7s infinite linear;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>
