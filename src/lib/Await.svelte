<script lang="ts">
  type T = $$Generic
  export let promise: Promise<T> | T | undefined
</script>

{#await promise}
  <slot result={undefined} {promise} />
{:then result}
  <slot {result} {promise} />
{:catch error}
  <slot name="catch" {error} {promise} />
{/await}
