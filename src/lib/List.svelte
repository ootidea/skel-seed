<script lang="ts">
  import Divider from './Divider.svelte'

  type Item = $$Generic<unknown>
  export let items: readonly Item[]

  let klass = ''
  export { klass as class }
</script>

<div class="skel-list_root {klass}">
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
