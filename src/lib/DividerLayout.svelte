<script lang="ts">
  type Item = $$Generic<unknown>
  export let items: readonly Item[]

  let klass = ''
  export { klass as class }
</script>

<div class="divider-layout_root {klass}">
  {#each items as item, index}
    {#if index > 0}
      <slot name="divider">
        <hr />
      </slot>
    {/if}
    <slot name="item" {item} {index} />
  {/each}
</div>
