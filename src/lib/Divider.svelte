<script lang="ts">
  export let direction: 'horizontal' | 'vertical' = 'horizontal'
  export let thickness = 'var(--skel-divider-default-thickness)'
  export let color = 'var(--skel-divider-default-color)'

  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('Divider', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)
</script>

<div
  class={getClass('root')}
  style:--skel-divider-thickness={thickness}
  style:--skel-divider-color={color}
  style={getStyle('root')}
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
