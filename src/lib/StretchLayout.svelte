<script lang="ts">
  import { joinClasses } from './utility'

  export let stretchAt: number | `${number}` = 0
  export let direction: 'horizontal' | 'vertical' = 'horizontal'
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<div
  class="skel-StretchLayout_root {joinClasses(klass, classes)}"
  {style}
  style:--skel-StretchLayout_template={'auto '.repeat(Number(stretchAt)) + 'minmax(0, 1fr)'}
  data-direction={direction}
  on:click
  {...$$restProps}
>
  <slot />
</div>

<style global lang="scss">
  .skel-StretchLayout_root {
    display: grid;
    box-sizing: border-box;

    &[data-direction='horizontal'] {
      grid-auto-flow: column;
      grid-template-columns: var(--skel-StretchLayout_template);
    }

    &[data-direction='vertical'] {
      grid-auto-flow: row;
      grid-template-rows: var(--skel-StretchLayout_template);
      height: 100%;
    }
  }
</style>
