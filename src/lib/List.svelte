<script lang="ts">
  import Divider from './Divider.svelte'

  type Item = $$Generic
  export let items: readonly Item[]
  export let direction: 'horizontal' | 'vertical' = 'vertical'
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<div class="skel-List_root {klass}" {style} data-direction={direction}>
  {#each items as item, index}
    {#if index > 0}
      <slot name="divider">
        <Divider direction={direction === 'vertical' ? 'horizontal' : 'vertical'} />
      </slot>
    {/if}
    <slot {item} {index}>
      {item}
    </slot>
  {:else}
    <slot name="empty" />
  {/each}
</div>

<style global lang="scss">
  .skel-List_root {
    display: grid;
    align-items: start;
    width: max-content;

    &[data-direction='horizontal'] {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
    }

    &[data-direction='vertical'] {
      grid-auto-flow: row;
      grid-auto-rows: max-content;
    }
  }
</style>
