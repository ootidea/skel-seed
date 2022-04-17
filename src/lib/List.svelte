<script lang="ts">
  import Divider from './Divider.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  type Item = $$Generic<unknown>
  export let items: readonly Item[]

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('List', classProp, style)
</script>

<div {...injectors.attr('root')}>
  {#each items as item, index}
    {#if index > 0}
      <slot name="divider">
        <Divider />
      </slot>
    {/if}
    <slot {item} {index}>
      {item}
    </slot>
  {:else}
    <slot name="empty" />
  {/each}
</div>
