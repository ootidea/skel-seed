<script lang="ts">
  import Divider from './Divider.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  type Item = $$Generic
  export let items: readonly Item[]
  export let direction: 'horizontal' | 'vertical' = 'vertical'
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<div
  class={`skel-List_root ${joinClasses(klass, classes)}`}
  style={joinStyles(style, styles)}
  data-direction={direction}
  {...$$restProps}
>
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
    justify-items: start;
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
