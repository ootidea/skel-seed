<script lang="ts">
  import Button from './Button.svelte'
  import { type Arrow, range } from './utility'

  /**
   * Callback function called when the month is selected.
   * If January is selected, the argument is 1.
   */
  export let onSelect: Arrow<[number], unknown> | undefined = undefined
</script>

<div class="skel-month-picker_root">
  <slot {onSelect}>
    {#each range(1, 12) as month}
      <Button tint="achromatic" ghost onClick={() => onSelect?.(month)}>
        <slot name="button-text" {month} {onSelect}>{month}</slot>
      </Button>
    {/each}
  </slot>
</div>

<style global lang="scss">
  .skel-month-picker_root {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 0.5em;
    width: max-content;

    background-color: oklch(100% 0 0);
  }
</style>
