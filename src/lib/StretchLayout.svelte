<script lang="ts">
  export let stretchAt = 0
  export let direction: 'horizontal' | 'vertical' = 'horizontal'
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-stretch-layout_root {klass}"
  style:--skel-stretch-layout_template={'auto '.repeat(stretchAt) + 'minmax(0, 1fr)'}
  data-direction={direction}
  on:click
>
  <slot />
</div>

<style global lang="scss">
  .skel-stretch-layout_root {
    display: grid;
    box-sizing: border-box;

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
