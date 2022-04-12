<script lang="ts">
  type Item = $$Generic<unknown>
  export let items: readonly Item[]

  let klass = ''
  export { klass as class }
</script>

<div class="skeleto-divider-layout_root {klass}">
  {#each items as item, index}
    {#if index > 0}
      <slot name="divider">
        <!-- TODO: replace Divider component -->
        <hr />
      </slot>
    {/if}
    <slot {item} {index} />
  {:else}
    <slot name="empty" />
  {/each}
</div>
