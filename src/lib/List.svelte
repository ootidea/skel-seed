<script lang="ts">
  import Divider from './Divider.svelte'
  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  type Item = $$Generic<unknown>
  export let items: readonly Item[]

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('List', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)
</script>

<div class={getClass('root')} style={getStyle('root')}>
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
