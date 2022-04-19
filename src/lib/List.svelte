<script lang="ts">
  import Divider from './Divider.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  type Item = $$Generic
  export let items: readonly Item[]
  export let direction: 'horizontal' | 'vertical' = 'vertical'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('List', classProp, style)
</script>

<div {...injectors.attr('root')} data-direction={direction}>
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
  .skel-list_root {
    display: flex;
    align-items: start;
    width: max-content;

    &[data-direction='vertical'] {
      flex-direction: column;
    }
  }
</style>
