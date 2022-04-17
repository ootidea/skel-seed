<script lang="ts">
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let stretchAt = 0
  export let direction: 'horizontal' | 'vertical' = 'horizontal'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('StretchLayout', classProp, style)
</script>

<div
  {...injectors.attr('root')}
  style:--skel-stretch-layout_template={'auto '.repeat(stretchAt) + 'minmax(0, 1fr)'}
  data-direction={direction}
>
  <slot />
</div>

<style global lang="scss">
  .skel-stretch-layout_root {
    display: grid;

    &[data-direction='horizontal'] {
      grid-auto-flow: column;
      grid-template-columns: var(--skel-stretch-layout_template);
    }

    &[data-direction='vertical'] {
      grid-auto-flow: row;
      grid-template-rows: var(--skel-stretch-layout_template);
      height: 100%;
    }
  }
</style>
