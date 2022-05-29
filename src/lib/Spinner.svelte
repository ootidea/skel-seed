<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let size = 'var(--skel-Spinner_default-size)'
  // TODO: Can convert this to CSS variable?
  export let thickness = 25
  export let frequency = 1.4
  export let inverted = false
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  $: svgUrl = `url('data:image/svg+xml;utf8,<svg width="200mm" height="200mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="${
    100 - thickness / 2
  }" fill="none" stroke="black" stroke-width="${thickness}" /></svg>')`
</script>

<div
  class={`skel-Spinner_root ${joinClasses(klass, classes)}`}
  style={joinStyles(style, styles)}
  style:--skel-Spinner_size={size}
  style:--skel-Spinner_svg-url={svgUrl}
  style:--skel-Spinner_period={`${1 / frequency}s`}
  style:--skel-Spinner_color={inverted ? 'var(--skel-inverted-text-color)' : 'var(--skel-primary-color)'}
  {...$$restProps}
/>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-Spinner_default-size: 1.2em;
  }

  .skel-Spinner_root {
    display: inline-block;
    position: relative;
    width: var(--skel-Spinner_size);
    height: var(--skel-Spinner_size);

    vertical-align: top;

    background-image: conic-gradient(transparent, transparent, var(--skel-Spinner_color));
    mask: var(--skel-Spinner_svg-url) no-repeat center;
    mask-size: contain;

    transform-origin: center;
    animation: rotation var(--skel-Spinner_period) infinite linear;
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
