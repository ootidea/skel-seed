<script lang="ts">
  export let direction: 'horizontal' | 'vertical' = 'vertical'
</script>

<div class="root">
  <div class="list" data-direction={direction}>
    <slot />
  </div>
</div>

<style lang="scss">
  .list {
    display: grid;

    &[data-direction='horizontal'] {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      align-items: start;
      column-gap: 1rem;
    }

    &[data-direction='vertical'] {
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      justify-items: start;
      row-gap: 2rem;
    }
  }

  .root {
    padding: 2em;
    border-radius: 0.5rem;
    border: oklch(90% 0 0) 1px solid;
  }
</style>
